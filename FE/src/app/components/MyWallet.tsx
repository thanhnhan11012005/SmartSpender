import { useEffect, useMemo, useState, type FormEvent } from "react";
import { formatVND } from "../../utils/currency";

type Wallet = {
  id: number;
  userId?: number;
  name: string;
  type: "bank" | "ewallet" | "credit" | "cash" | string;
  accountNumber?: string | null;
  description?: string | null;
  balance: number;
  color?: string | null;
  currency?: string | null;
};

type WalletFormState = {
  id?: number;
  name: string;
  type: Wallet["type"];
  accountNumber: string;
  description: string;
  balance: string;
  color: string;
};

type TransferFormState = {
  fromWalletId: string;
  toWalletId: string;
  amount: string;
  description: string;
};

type Category = {
  id: number;
  userId?: number | null;
  name: string;
  icon?: string | null;
  color?: string | null;
};

type Transaction = {
  id: number;
  walletId: number;
  userId: number;
  categoryId?: number | null;
  category?: Category | null;
  amount: number;
  type: "expense" | "income" | "transfer";
  description?: string | null;
  location?: string | null;
  imageUrl?: string | null;
  transactionDate: string;
  createdAt?: string | null;
};

const walletColors = [
  { label: "Tím hồng", value: "from-purple-600 to-pink-500" },
  { label: "Xanh dương", value: "from-sky-400 to-blue-600" },
  { label: "Xám đen", value: "from-gray-800 to-slate-900" },
  { label: "Cam vàng", value: "from-orange-500 to-amber-500" },
  { label: "Xanh ngọc", value: "from-teal-500 to-cyan-600" },
  { label: "Hồng tím", value: "from-fuchsia-500 to-violet-600" },
];

const initialFormState: WalletFormState = {
  name: "",
  type: "cash",
  accountNumber: "",
  description: "",
  balance: "0",
  color: "from-purple-600 to-pink-500",
};

const initialTransferFormState: TransferFormState = {
  fromWalletId: "",
  toWalletId: "",
  amount: "",
  description: "",
};

const moneyFormatter = new Intl.NumberFormat("vi-VN");

function normalizeMoneyInput(value: string) {
  return value.replace(/\D/g, "");
}

function formatMoneyInput(value: string) {
  const digits = normalizeMoneyInput(value);
  if (!digits) {
    return "";
  }
  return moneyFormatter.format(Number(digits));
}

export default function MyWallet() {
  const [query, setQuery] = useState("");
  const [showBalance, setShowBalance] = useState(false);
  const [wallets, setWallets] = useState<Wallet[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [activeMenuWalletId, setActiveMenuWalletId] = useState<number | null>(null);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isOpenTransferModal, setIsOpenTransferModal] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isTransferSubmitting, setIsTransferSubmitting] = useState(false);
  const [editingWalletId, setEditingWalletId] = useState<number | null>(null);
  const [form, setForm] = useState<WalletFormState>(initialFormState);
  const [transferForm, setTransferForm] = useState<TransferFormState>(initialTransferFormState);
  const [transferError, setTransferError] = useState<string | null>(null);
  const [toast, setToast] = useState<{ type: "success" | "error"; message: string } | null>(null);
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [isLoadingTransactions, setIsLoadingTransactions] = useState(false);
  const [hiddenWalletIds, setHiddenWalletIds] = useState<Set<number>>(new Set());
  const [hasInitializedWalletVisibility, setHasInitializedWalletVisibility] = useState(false);

  const selectedPreviewWallet = useMemo(() => {
    if (editingWalletId !== null) {
      return wallets.find((wallet) => wallet.id === editingWalletId) ?? null;
    }
    return wallets[0] ?? null;
  }, [editingWalletId, wallets]);

  async function fetchTransactions() {
    const raw = localStorage.getItem("user");
    if (!raw) {
      return;
    }

    let userId: number | null = null;
    try {
      const parsed = JSON.parse(raw) as { id?: number };
      userId = parsed?.id ?? null;
    } catch {
      return;
    }

    if (!userId) {
      return;
    }

    setIsLoadingTransactions(true);
    try {
      const startDate = new Date(1970, 0, 1).toISOString().split("T")[0];
      const endDate = new Date().toISOString().split("T")[0];
      
      const params = new URLSearchParams({
        userId: String(userId),
        search: "",
        startDate,
        endDate,
      });

      const response = await fetch(`/api/transactions/search?${params.toString()}`);
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
      }

      const data: Transaction[] = await response.json();
      setTransactions(data);
    } catch (err) {
      console.error(err);
      setTransactions([]);
    } finally {
      setIsLoadingTransactions(false);
    }
  }

  useEffect(() => {
    fetchTransactions();
  }, [wallets]);

  const transactionPreview = useMemo(() => {
    if (!selectedPreviewWallet || transactions.length === 0) {
      return [];
    }

    // Lọc giao dịch của ví hiện tại
    const walletTransactions = transactions.filter(t => t.walletId === selectedPreviewWallet.id);
    
    // Sắp xếp theo ngày giảm dần (mới nhất trước) và lấy 5 giao dịch gần nhất
    return walletTransactions.sort((a, b) => new Date(b.transactionDate).getTime() - new Date(a.transactionDate).getTime()).slice(0, 5);
  }, [selectedPreviewWallet, transactions]);

  async function fetchWallets() {
    const raw = localStorage.getItem("user");
    if (!raw) {
      setError("Vui lòng đăng nhập để xem ví.");
      return;
    }

    let userId: number | null = null;
    try {
      const parsed = JSON.parse(raw) as { id?: number };
      userId = parsed?.id ?? null;
    } catch {
      setError("Dữ liệu người dùng không hợp lệ. Vui lòng đăng nhập lại.");
      return;
    }

    if (!userId) {
      setError("Không tìm thấy userId. Vui lòng đăng nhập.");
      return;
    }

    setError(null);
    setIsLoading(true);

    try {
      const response = await fetch(`/api/wallets?userId=${userId}`);
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
      }

      const data: any[] = await response.json();
      const mapped: Wallet[] = data.map((item) => ({
        id: item.id,
        userId: item.userId ?? item.user_id,
        name: item.name,
        type: item.type,
        accountNumber: item.accountNumber ?? item.account_number ?? null,
        description: item.description ?? null,
        balance: Number(item.balance ?? 0),
        color: item.color ?? null,
        currency: item.currency ?? "VND",
      }));

      setWallets(mapped);

      // Mặc định ẩn toàn bộ số dư ví khi vào màn hình lần đầu.
      if (!hasInitializedWalletVisibility) {
        setHiddenWalletIds(new Set(mapped.map((wallet) => wallet.id)));
        setHasInitializedWalletVisibility(true);
      }
    } catch (fetchError) {
      console.error(fetchError);
      setError("Không thể tải dữ liệu ví. Vui lòng kiểm tra backend.");
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchWallets();
  }, []);

  useEffect(() => {
    const handleGlobalClick = () => setActiveMenuWalletId(null);
    window.addEventListener("click", handleGlobalClick);
    return () => window.removeEventListener("click", handleGlobalClick);
  }, []);

  const totalAssets = useMemo(() => {
    return wallets.reduce((sum, wallet) => {
      if (wallet.type === "credit" && wallet.balance <= 0) {
        return sum;
      }
      return sum + wallet.balance;
    }, 0);
  }, [wallets]);

  const hiddenAmount = "•••••••• ₫";

  const filtered = wallets.filter((wallet) => {
    if (!query) {
      return true;
    }

    const normalizedQuery = query.toLowerCase();
    return (
      wallet.name.toLowerCase().includes(normalizedQuery) ||
      (wallet.description || "").toLowerCase().includes(normalizedQuery) ||
      String(wallet.accountNumber || "").includes(normalizedQuery)
    );
  });

  const fromWalletId = transferForm.fromWalletId ? Number(transferForm.fromWalletId) : null;
  const transferTargetWallets = wallets.filter((wallet) => wallet.id !== fromWalletId);

  function showToast(message: string, type: "success" | "error") {
    setToast({ message, type });
    window.setTimeout(() => setToast(null), 3000);
  }

  function openCreateModal() {
    setEditingWalletId(null);
    setForm(initialFormState);
    setIsOpenModal(true);
  }

  function openTransferModal() {
    if (wallets.length < 2) {
      showToast("Cần ít nhất 2 ví để chuyển tiền.", "error");
      return;
    }

    setTransferError(null);
    setTransferForm({
      fromWalletId: String(wallets[0].id),
      toWalletId: String(wallets[1].id),
      amount: "",
      description: "",
    });
    setIsOpenTransferModal(true);
  }

  function openEditModal(wallet: Wallet) {
    setEditingWalletId(wallet.id);
    setForm({
      id: wallet.id,
      name: wallet.name,
      type: wallet.type,
      accountNumber: wallet.accountNumber ?? "",
      description: wallet.description ?? "",
      balance: String(wallet.balance ?? 0),
      color: wallet.color ?? "from-purple-600 to-pink-500",
    });
    setIsOpenModal(true);
    setActiveMenuWalletId(null);
  }

  function closeModal() {
    setIsOpenModal(false);
    setIsSubmitting(false);
    setEditingWalletId(null);
    setForm(initialFormState);
  }

  function closeTransferModal() {
    setIsOpenTransferModal(false);
    setIsTransferSubmitting(false);
    setTransferError(null);
    setTransferForm(initialTransferFormState);
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);

    try {
      const raw = localStorage.getItem("user");
      if (!raw) {
        throw new Error("Vui lòng đăng nhập để thực hiện thao tác này.");
      }

      const parsed = JSON.parse(raw) as { id?: number };
      const userId = parsed?.id;
      if (!userId) {
        throw new Error("Không tìm thấy userId trong phiên đăng nhập.");
      }

      const payload = {
        userId,
        name: form.name.trim(),
        type: form.type,
        accountNumber: form.accountNumber.trim() || null,
        description: form.description.trim() || null,
        balance: Number(normalizeMoneyInput(form.balance) || 0),
        color: form.color,
        currency: "VND",
      };

      const isEditing = editingWalletId !== null;
      const response = await fetch(isEditing ? `/api/wallets/${editingWalletId}` : "/api/wallets", {
        method: isEditing ? "PUT" : "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
      }

      await fetchWallets();
      closeModal();
    } catch (submitError) {
      console.error(submitError);
      alert(submitError instanceof Error ? submitError.message : "Không thể lưu ví.");
    } finally {
      setIsSubmitting(false);
    }
  }

  async function handleTransferSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsTransferSubmitting(true);
    setTransferError(null);

    try {
      const raw = localStorage.getItem("user");
      if (!raw) {
        throw new Error("Vui lòng đăng nhập để thực hiện chuyển tiền.");
      }

      const parsed = JSON.parse(raw) as { id?: number };
      const userId = parsed?.id;
      if (!userId) {
        throw new Error("Không tìm thấy userId trong phiên đăng nhập.");
      }

      if (!transferForm.fromWalletId || !transferForm.toWalletId) {
        throw new Error("Vui lòng chọn ví nguồn và ví đích.");
      }

      if (transferForm.fromWalletId === transferForm.toWalletId) {
        throw new Error("Ví nguồn và ví đích phải khác nhau.");
      }

      const payload = {
        userId,
        fromWalletId: Number(transferForm.fromWalletId),
        toWalletId: Number(transferForm.toWalletId),
        amount: Number(normalizeMoneyInput(transferForm.amount)),
        description: transferForm.description.trim() || "Chuyển tiền nội bộ",
      };

      const response = await fetch("/api/wallets/transfer", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const message = await response.text();
        throw new Error(message || `HTTP ${response.status}`);
      }

      await fetchWallets();
      closeTransferModal();
      showToast("Chuyển tiền thành công.", "success");
    } catch (transferSubmitError) {
      console.error(transferSubmitError);
      const message = transferSubmitError instanceof Error ? transferSubmitError.message : "Không thể chuyển tiền.";
      setTransferError(message);
      showToast(message, "error");
    } finally {
      setIsTransferSubmitting(false);
    }
  }

  async function handleDelete(walletId: number) {
    setActiveMenuWalletId(null);
    const confirmed = window.confirm("Bạn có chắc muốn xóa ví này không?");
    if (!confirmed) {
      return;
    }

    try {
      const response = await fetch(`/api/wallets/${walletId}`, {
        method: "DELETE",
      });

      if (!response.ok && response.status !== 204) {
        throw new Error(`HTTP ${response.status}`);
      }

      await fetchWallets();
    } catch (deleteError) {
      console.error(deleteError);
      alert("Không thể xóa ví. Vui lòng thử lại.");
    }
  }

  if (error) {
    return <div className="rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">{error}</div>;
  }

  if (isLoading) {
    return (
      <div className="space-y-4">
        <div className="h-10 w-48 animate-pulse rounded-xl bg-gray-200" />
        <div className="h-24 animate-pulse rounded-2xl bg-white shadow-sm" />
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 3 }).map((_, index) => (
            <div key={index} className="h-[210px] animate-pulse rounded-3xl bg-white/80 shadow-sm" />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6" onClick={() => setActiveMenuWalletId(null)}>
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-black">Ví của tôi</h1>
          <p className="text-sm text-[rgba(0,0,0,0.6)] mt-1">Quản lý thẻ và ví của bạn</p>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={(event) => {
              event.stopPropagation();
              openCreateModal();
            }}
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#8b5cf6] hover:bg-[#7c3aed] text-white text-sm font-semibold shadow-md transition"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M12 5v14M5 12h14" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Thêm thẻ/ví
          </button>
          <button
            onClick={(event) => {
              event.stopPropagation();
              openTransferModal();
            }}
            className="flex items-center gap-2 px-4 py-2 rounded-lg border border-purple-200 bg-white text-sm font-semibold text-purple-600 transition hover:bg-purple-50"
          >
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M7 7h10M7 7l3-3M7 7l3 3M17 17H7m10 0-3 3m3-3-3-3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Chuyển tiền
          </button>
        </div>
      </div>

      {/* Total assets */}
      <div className="bg-white rounded-2xl p-4 shadow-sm w-full max-w-full">
        <div className="flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2">
              <p className="text-sm text-[rgba(0,0,0,0.6)]">Tổng tài sản</p>
              <button
                type="button"
                onClick={() => setShowBalance((prev) => !prev)}
                className="inline-flex items-center justify-center w-7 h-7 rounded-md hover:bg-[rgba(0,0,0,0.05)] transition-colors"
                aria-label={showBalance ? "Ẩn số dư" : "Hiện số dư"}
                title={showBalance ? "Ẩn số dư" : "Hiện số dư"}
              >
                {showBalance ? (
                  <svg className="w-4 h-4 text-[rgba(0,0,0,0.65)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-5.523 0-10-4.477-10-10 0-1.157.197-2.268.56-3.3M6.228 6.228A9.957 9.957 0 0112 5c5.523 0 10 4.477 10 10 0 1.676-.412 3.257-1.14 4.647M15 12a3 3 0 11-6 0 3 3 0 016 0m-9 9l18-18" />
                  </svg>
                ) : (
                  <svg className="w-4 h-4 text-[rgba(0,0,0,0.65)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7S1 12 1 12z" />
                    <circle cx="12" cy="12" r="3" strokeWidth={2} />
                  </svg>
                )}
              </button>
            </div>
            <p className="text-lg font-semibold mt-1">{showBalance ? formatVND(totalAssets) : hiddenAmount}</p>
          </div>
          <div className="text-sm text-[rgba(0,0,0,0.5)]">Tính theo VNĐ</div>
        </div>
      </div>

      {/* Card Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.length === 0 ? (
          <div className="col-span-full rounded-2xl border border-dashed border-gray-300 bg-white px-6 py-10 text-center text-sm text-gray-500">
            Chưa có ví nào để hiển thị.
          </div>
        ) : (
          filtered.map((wallet) => {
            const balanceLabel = wallet.type === "credit" ? "Hạn mức còn lại" : "Số dư";
            const showAccount = (wallet.accountNumber ?? null) !== null && wallet.type !== "cash";
            const isMenuOpen = activeMenuWalletId === wallet.id;

            return (
              <div key={wallet.id} className="relative transform transition-all duration-200 hover:-translate-y-2" onClick={(event) => event.stopPropagation()}>
                <div
                  className={`w-full rounded-3xl shadow-lg overflow-hidden p-6 text-white relative aspect-[1.58/1] flex flex-col bg-gradient-to-br ${wallet.color ?? "from-purple-600 to-pink-500"}`}
                >
                  <div className="absolute -right-8 -top-6 w-40 h-40 rounded-full opacity-20 blur-3xl" style={{ background: "rgba(255,255,255,0.12)" }} />
                  <div className="absolute -left-8 -bottom-8 w-28 h-28 rounded-full opacity-10 blur-2xl" style={{ background: "rgba(255,255,255,0.08)" }} />

                  {/* Top row */}
                  <div className="flex items-start justify-between">
                    <div className="pr-6">
                      <div className="text-sm font-medium truncate">{wallet.name}</div>
                      <div className="text-xs text-white/80 truncate">{wallet.description}</div>
                    </div>

                    <div className="relative ml-2">
                      <button
                        aria-label="Thêm hành động"
                        onClick={(event) => {
                          event.stopPropagation();
                          setActiveMenuWalletId((current) => (current === wallet.id ? null : wallet.id));
                        }}
                        className="w-8 h-8 flex items-center justify-center bg-white/10 rounded-full hover:bg-white/20 transition"
                        title="Thao tác"
                      >
                        <svg className="w-4 h-4 text-white/90" viewBox="0 0 24 24" fill="currentColor">
                          <circle cx="12" cy="6" r="1.6" />
                          <circle cx="12" cy="12" r="1.6" />
                          <circle cx="12" cy="18" r="1.6" />
                        </svg>
                      </button>

                      {isMenuOpen && (
                        <div
                          className="absolute right-0 top-10 z-20 w-40 rounded-2xl border border-white/10 bg-white p-2 text-sm text-gray-700 shadow-xl"
                          onClick={(event) => event.stopPropagation()}
                        >
                          <button
                            onClick={() => openEditModal(wallet)}
                            className="flex w-full items-center rounded-xl px-3 py-2 text-left hover:bg-purple-50 hover:text-purple-700"
                          >
                            Chỉnh sửa
                          </button>
                          <button
                            onClick={() => handleDelete(wallet.id)}
                            className="flex w-full items-center rounded-xl px-3 py-2 text-left text-red-500 hover:bg-red-50 hover:text-red-600"
                          >
                            Xóa
                          </button>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Center balance */}
                  <div className="flex-1 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-sm text-white/90">{balanceLabel}</div>
                      <div className="text-2xl font-bold mt-2">
                        {hiddenWalletIds.has(wallet.id) ? hiddenAmount : formatVND(wallet.balance)}
                      </div>
                      <button
                        type="button"
                        onClick={(event) => {
                          event.stopPropagation();
                          setHiddenWalletIds((prev) => {
                            const newSet = new Set(prev);
                            if (newSet.has(wallet.id)) {
                              newSet.delete(wallet.id);
                            } else {
                              newSet.add(wallet.id);
                            }
                            return newSet;
                          });
                        }}
                        className="mt-3 inline-flex items-center justify-center w-6 h-6 rounded-md hover:bg-white/10 transition-colors"
                        title={hiddenWalletIds.has(wallet.id) ? "Hiện số dư" : "Ẩn số dư"}
                      >
                        {hiddenWalletIds.has(wallet.id) ? (
                          <svg className="w-4 h-4 text-white/90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-5.523 0-10-4.477-10-10 0-1.157.197-2.268.56-3.3M6.228 6.228A9.957 9.957 0 0112 5c5.523 0 10 4.477 10 10 0 1.676-.412 3.257-1.14 4.647M15 12a3 3 0 11-6 0 3 3 0 016 0m-9 9l18-18" />
                          </svg>
                        ) : (
                          <svg className="w-4 h-4 text-white/90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7S1 12 1 12z" />
                            <circle cx="12" cy="12" r="3" strokeWidth={2} />
                          </svg>
                        )}
                      </button>
                    </div>
                  </div>

                  {/* Bottom row */}
                  <div className="flex items-center justify-between text-sm">
                    <div className="uppercase text-xs tracking-widest">Người dùng</div>
                    <div className="text-xs">{showAccount ? `**** ${wallet.accountNumber}` : wallet.type === "cash" ? "" : ""}</div>
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>

      {/* Quick preview section */}
      <div className="rounded-3xl bg-white p-5 shadow-sm">
        <div className="flex flex-col gap-1 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-lg font-semibold text-gray-900">
              Lịch sử giao dịch của {selectedPreviewWallet ? selectedPreviewWallet.name : "..."}
            </h2>
            <p className="text-sm text-gray-500">Xem nhanh giao dịch gần nhất của ví hiện có.</p>
          </div>
        </div>

        <div className="mt-4 divide-y divide-gray-100 overflow-hidden rounded-2xl border border-gray-100">
          {isLoadingTransactions ? (
            <div className="px-4 py-3 text-center text-sm text-gray-500">Đang tải lịch sử giao dịch...</div>
          ) : transactionPreview.length === 0 ? (
            <div className="px-4 py-3 text-center text-sm text-gray-500">Chưa có giao dịch nào</div>
          ) : (
            transactionPreview.map((txn) => {
              const displayAmount = txn.type === "income" ? `+${formatVND(txn.amount)}` : txn.type === "expense" ? `-${formatVND(txn.amount)}` : formatVND(txn.amount);
              const amountColor = txn.type === "income" ? "text-green-600" : txn.type === "expense" ? "text-red-500" : "text-gray-600";
              
              return (
                <div key={txn.id} className="flex items-center justify-between px-4 py-3">
                  <div className="flex-1 min-w-0">
                    <div className="font-medium text-gray-900 truncate">
                      {txn.type === "transfer" && <span className="text-lg">⇄ </span>}
                      {txn.description || "Giao dịch không tên"}
                    </div>
                    {txn.location && (
                      <div className="text-xs text-gray-400 truncate mt-0.5">{txn.location}</div>
                    )}
                    <div className="text-xs text-gray-500 mt-1">
                      {txn.category?.name && <span>{txn.category.name} • </span>}
                      {new Date(txn.transactionDate).toLocaleDateString("vi-VN")}
                    </div>
                  </div>
                  <div className={`font-semibold ${amountColor} ml-4 flex-shrink-0`}>{displayAmount}</div>
                </div>
              );
            })
          )}
        </div>
      </div>

      {/* Modal */}
      {isOpenModal && (
        <div className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-black/40 px-4 py-4 backdrop-blur-sm sm:items-center sm:py-8" onClick={closeModal}>
          <div className="flex max-h-[calc(100vh-2rem)] w-full max-w-2xl flex-col rounded-3xl bg-white p-5 shadow-2xl sm:p-6" onClick={(event) => event.stopPropagation()}>
            <div className="flex shrink-0 items-start justify-between gap-4">
              <div>
                <h3 className="text-xl font-semibold text-gray-900">{editingWalletId !== null ? "Chỉnh sửa ví" : "Thêm thẻ/ví mới"}</h3>
                <p className="mt-1 text-sm text-gray-500">Nhập thông tin ví để lưu vào cơ sở dữ liệu.</p>
              </div>
              <button onClick={closeModal} className="rounded-full p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-600">
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M18 6 6 18M6 6l12 12" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>

            <form className="mt-6 grid flex-1 gap-4 overflow-y-auto pr-1 sm:grid-cols-2" onSubmit={handleSubmit}>
              <label className="flex flex-col gap-2 sm:col-span-2">
                <span className="text-sm font-medium text-gray-700">Tên ví</span>
                <input
                  value={form.name}
                  onChange={(event) => setForm((current) => ({ ...current, name: event.target.value }))}
                  className="rounded-xl border border-gray-200 px-4 py-3 outline-none transition focus:border-purple-300 focus:ring-2 focus:ring-purple-100"
                  placeholder="Ví Vietcombank"
                  required
                />
              </label>

              <label className="flex flex-col gap-2">
                <span className="text-sm font-medium text-gray-700">Loại ví</span>
                <select
                  value={form.type}
                  onChange={(event) => setForm((current) => ({ ...current, type: event.target.value }))}
                  className="rounded-xl border border-gray-200 px-4 py-3 outline-none transition focus:border-purple-300 focus:ring-2 focus:ring-purple-100"
                >
                  <option value="cash">Tiền mặt</option>
                  <option value="bank">Ngân hàng</option>
                  <option value="ewallet">Ví điện tử</option>
                  <option value="credit">Thẻ tín dụng</option>
                </select>
              </label>

              <label className="flex flex-col gap-2">
                <span className="text-sm font-medium text-gray-700">Số tài khoản</span>
                <input
                  value={form.accountNumber}
                  onChange={(event) => setForm((current) => ({ ...current, accountNumber: event.target.value }))}
                  className="rounded-xl border border-gray-200 px-4 py-3 outline-none transition focus:border-purple-300 focus:ring-2 focus:ring-purple-100"
                  placeholder="4 số cuối ví dụ: 1234"
                />
              </label>

              <label className="flex flex-col gap-2">
                <span className="text-sm font-medium text-gray-700">Số dư</span>
                <input
                  type="text"
                  inputMode="numeric"
                  pattern="[0-9.]*"
                  value={form.balance}
                  onChange={(event) =>
                    setForm((current) => ({
                      ...current,
                      balance: formatMoneyInput(event.target.value),
                    }))
                  }
                  className="rounded-xl border border-gray-200 px-4 py-3 outline-none transition focus:border-purple-300 focus:ring-2 focus:ring-purple-100"
                  placeholder="0"
                  required
                />
              </label>

              <label className="flex flex-col gap-2 sm:col-span-2">
                <span className="text-sm font-medium text-gray-700">Ghi chú</span>
                <textarea
                  value={form.description}
                  onChange={(event) => setForm((current) => ({ ...current, description: event.target.value }))}
                  className="min-h-24 rounded-xl border border-gray-200 px-4 py-3 outline-none transition focus:border-purple-300 focus:ring-2 focus:ring-purple-100"
                  placeholder="Lương - Quy Nhơn, ví tiêu vặt..."
                />
              </label>

              <label className="flex flex-col gap-2 sm:col-span-2">
                <span className="text-sm font-medium text-gray-700">Màu sắc gradient</span>
                <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                  {walletColors.map((item) => {
                    const isActive = form.color === item.value;
                    return (
                      <button
                        type="button"
                        key={item.value}
                        onClick={() => setForm((current) => ({ ...current, color: item.value }))}
                        className={`rounded-2xl border p-2 text-left transition ${isActive ? "border-purple-400 ring-2 ring-purple-100" : "border-gray-200 hover:border-purple-200"}`}
                      >
                        <div className={`h-12 rounded-xl bg-gradient-to-br ${item.value}`} />
                        <div className="mt-2 text-sm font-medium text-gray-700">{item.label}</div>
                      </button>
                    );
                  })}
                </div>
              </label>

              <div className="sm:col-span-2 mt-2 flex flex-col-reverse items-stretch gap-3 sm:flex-row sm:items-center sm:justify-end">
                <button type="button" onClick={closeModal} className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50 sm:w-auto">
                  Hủy
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full rounded-xl bg-purple-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-purple-700 disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
                >
                  {isSubmitting ? "Đang lưu..." : editingWalletId !== null ? "Lưu thay đổi" : "Tạo ví"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Transfer Modal */}
      {isOpenTransferModal && (
        <div className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-black/40 px-4 py-4 backdrop-blur-sm sm:items-center sm:py-8" onClick={closeTransferModal}>
          <div className="flex max-h-[calc(100vh-2rem)] w-full max-w-xl flex-col rounded-3xl bg-white p-5 shadow-2xl sm:p-6" onClick={(event) => event.stopPropagation()}>
            <div className="flex shrink-0 items-start justify-between gap-4">
              <div>
                <h3 className="text-xl font-semibold text-gray-900">Chuyển tiền nội bộ</h3>
                <p className="mt-1 text-sm text-gray-500">Di chuyển số dư giữa hai ví của cùng một người dùng.</p>
              </div>
              <button onClick={closeTransferModal} className="rounded-full p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-600">
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M18 6 6 18M6 6l12 12" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>

            {transferError && <div className="mt-4 rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">{transferError}</div>}

            <form className="mt-6 grid flex-1 gap-4 overflow-y-auto pr-1 sm:grid-cols-2" onSubmit={handleTransferSubmit}>
              <label className="flex flex-col gap-2">
                <span className="text-sm font-medium text-gray-700">Ví nguồn (From)</span>
                <select
                  value={transferForm.fromWalletId}
                  onChange={(event) => {
                    const nextFromWalletId = event.target.value;
                    setTransferForm((current) => ({
                      ...current,
                      fromWalletId: nextFromWalletId,
                      toWalletId: nextFromWalletId === current.toWalletId ? "" : current.toWalletId,
                    }));
                  }}
                  className="rounded-xl border border-gray-200 px-4 py-3 outline-none transition focus:border-purple-300 focus:ring-2 focus:ring-purple-100"
                  required
                >
                  {wallets.map((wallet) => (
                    <option key={wallet.id} value={wallet.id}>
                      {wallet.name} - {formatVND(wallet.balance)}
                    </option>
                  ))}
                </select>
              </label>

              <label className="flex flex-col gap-2">
                <span className="text-sm font-medium text-gray-700">Ví đích (To)</span>
                <select
                  value={transferForm.toWalletId}
                  onChange={(event) => setTransferForm((current) => ({ ...current, toWalletId: event.target.value }))}
                  className="rounded-xl border border-gray-200 px-4 py-3 outline-none transition focus:border-purple-300 focus:ring-2 focus:ring-purple-100"
                  required
                >
                  <option value="">Chọn ví đích</option>
                  {transferTargetWallets.map((wallet) => (
                    <option key={wallet.id} value={wallet.id} disabled={wallet.id === fromWalletId}>
                      {wallet.name} - {formatVND(wallet.balance)}
                    </option>
                  ))}
                </select>
              </label>

              <label className="flex flex-col gap-2 sm:col-span-2">
                <span className="text-sm font-medium text-gray-700">Số tiền</span>
                <input
                  type="text"
                  inputMode="numeric"
                  pattern="[0-9.]*"
                  value={transferForm.amount}
                  onChange={(event) =>
                    setTransferForm((current) => ({
                      ...current,
                      amount: formatMoneyInput(event.target.value),
                    }))
                  }
                  className="rounded-xl border border-gray-200 px-4 py-3 outline-none transition focus:border-purple-300 focus:ring-2 focus:ring-purple-100"
                  placeholder="Nhập số tiền cần chuyển"
                  required
                />
              </label>

              <label className="flex flex-col gap-2 sm:col-span-2">
                <span className="text-sm font-medium text-gray-700">Ghi chú</span>
                <textarea
                  value={transferForm.description}
                  onChange={(event) => setTransferForm((current) => ({ ...current, description: event.target.value }))}
                  className="min-h-24 rounded-xl border border-gray-200 px-4 py-3 outline-none transition focus:border-purple-300 focus:ring-2 focus:ring-purple-100"
                  placeholder="Ví dụ: Chuyển tiền tiết kiệm sang ví tiêu vặt"
                />
              </label>

              <div className="sm:col-span-2 mt-2 flex flex-col-reverse items-stretch gap-3 sm:flex-row sm:items-center sm:justify-end">
                <button type="button" onClick={closeTransferModal} className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50 sm:w-auto">
                  Hủy
                </button>
                <button
                  type="submit"
                  disabled={isTransferSubmitting}
                  className="w-full rounded-xl bg-purple-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-purple-700 disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
                >
                  {isTransferSubmitting ? "Đang chuyển..." : "Xác nhận chuyển tiền"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {toast && (
        <div
          className={`fixed right-4 top-4 z-[60] rounded-2xl border px-4 py-3 text-sm font-medium shadow-lg backdrop-blur-sm ${
            toast.type === "success"
              ? "border-green-200 bg-green-50 text-green-700"
              : "border-red-200 bg-red-50 text-red-700"
          }`}
        >
          {toast.message}
        </div>
      )}
    </div>
  );
}
