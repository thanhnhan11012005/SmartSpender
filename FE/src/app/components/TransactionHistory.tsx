import { useEffect, useMemo, useState, type FormEvent } from "react";
import { formatVND } from "../../utils/currency";

// ========== TYPES ==========
interface Category {
  id: number;
  userId?: number | null;
  name: string;
  icon?: string | null;
  color?: string | null;
}

interface Wallet {
  id: number;
  userId?: number;
  name: string;
  type: string;
  balance: number;
  currency?: string;
}

interface Transaction {
  id: number;
  walletId: number;
  userId: number;
  categoryId?: number | null;
  category?: Category | null;
  amount: number;
  type: "income" | "expense" | "transfer";
  description?: string | null;
  location?: string | null;
  imageUrl?: string | null;
  transactionDate: string; // ISO date format: YYYY-MM-DD
  createdAt?: string | null;
}

interface TransactionFormState {
  id?: number;
  walletId: string;
  categoryId: string;
  description: string;
  amount: string;
  location: string;
  type: "income" | "expense" | "transfer";
  transactionDate: string;
}

interface ActionMenuState {
  open: boolean;
  transactionId: number | null;
}

// ========== CONSTANTS ==========
const ITEMS_PER_PAGE = 8;

const initialFormState: TransactionFormState = {
  walletId: "",
  categoryId: "",
  description: "",
  amount: "",
  location: "",
  type: "expense",
  transactionDate: new Date().toISOString().split("T")[0],
};

const moneyFormatter = new Intl.NumberFormat("vi-VN");

function normalizeMoneyInput(value: string) {
  return value.replace(/\D/g, "");
}

function formatMoneyInput(value: string) {
  const digits = normalizeMoneyInput(value);
  return digits ? moneyFormatter.format(Number(digits)) : "";
}

function calculateDateRange(period: string): { startDate: string; endDate: string } {
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth();

  if (period === "thisMonth") {
    const startDate = new Date(year, month, 1);
    const endDate = new Date(year, month + 1, 0);
    return {
      startDate: startDate.toISOString().split("T")[0],
      endDate: endDate.toISOString().split("T")[0],
    };
  } else if (period === "lastMonth") {
    const startDate = new Date(year, month - 1, 1);
    const endDate = new Date(year, month, 0);
    return {
      startDate: startDate.toISOString().split("T")[0],
      endDate: endDate.toISOString().split("T")[0],
    };
  }

  return {
    startDate: new Date(1970, 0, 1).toISOString().split("T")[0],
    endDate: new Date().toISOString().split("T")[0],
  };
}

// ========== COMPONENT ==========
export default function TransactionHistory() {
  const [searchQuery, setSearchQuery] = useState("");
  const [typeFilter, setTypeFilter] = useState<"all" | "income" | "expense">("all");
  const [timePeriod, setTimePeriod] = useState("thisMonth");
  const [currentPage, setCurrentPage] = useState(1);
  const [isTypeDropdownOpen, setIsTypeDropdownOpen] = useState(false);
  const [isDateDropdownOpen, setIsDateDropdownOpen] = useState(false);
  const [actionMenu, setActionMenu] = useState<ActionMenuState>({ open: false, transactionId: null });

  // Data state
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [wallets, setWallets] = useState<Wallet[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Modal state
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [form, setForm] = useState<TransactionFormState>(initialFormState);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toast, setToast] = useState<{ type: "success" | "error"; message: string } | null>(null);

  // ========== FETCH FUNCTIONS ==========
  async function fetchTransactions() {
    const raw = localStorage.getItem("user");
    if (!raw) {
      setError("Vui lòng đăng nhập");
      return;
    }

    let userId: number | null = null;
    try {
      const parsed = JSON.parse(raw) as { id?: number };
      userId = parsed?.id ?? null;
    } catch {
      setError("Dữ liệu người dùng không hợp lệ");
      return;
    }

    if (!userId) {
      setError("Không tìm thấy userId");
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      const { startDate, endDate } = calculateDateRange(timePeriod);
      const typeParam = typeFilter === "all" ? "" : typeFilter;

      const params = new URLSearchParams({
        userId: String(userId),
        search: searchQuery,
        startDate,
        endDate,
        ...(typeParam && { type: typeParam }),
      });

      const response = await fetch(`/api/transactions/search?${params.toString()}`);
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
      }

      const data: Transaction[] = await response.json();
      setTransactions(data);
    } catch (err) {
      console.error(err);
      setError("Không thể tải dữ liệu giao dịch");
      setTransactions([]);
    } finally {
      setIsLoading(false);
    }
  }

  async function fetchWallets() {
    const raw = localStorage.getItem("user");
    if (!raw) return;

    let userId: number | null = null;
    try {
      const parsed = JSON.parse(raw) as { id?: number };
      userId = parsed?.id ?? null;
    } catch {
      return;
    }

    if (!userId) return;

    try {
      const response = await fetch(`/api/wallets?userId=${userId}`);
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      const data: Wallet[] = await response.json();
      setWallets(data);
      if (data.length > 0 && !form.walletId) {
        setForm((prev) => ({ ...prev, walletId: String(data[0].id) }));
      }
    } catch (err) {
      console.error("Failed to fetch wallets:", err);
    }
  }

  async function fetchCategories() {
    try {
      const raw = localStorage.getItem("user");
      let userId: number | null = null;
      if (raw) {
        try {
          const parsed = JSON.parse(raw) as { id?: number };
          userId = parsed?.id ?? null;
        } catch {
          userId = null;
        }
      }

      const url = userId ? `/api/categories/user/${userId}/all` : `/api/categories/default`;
      const response = await fetch(url);
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      const data: Category[] = await response.json();
      setCategories(Array.isArray(data) ? data : []);
    } catch (err) {
      console.error("Failed to fetch categories:", err);
      setCategories([]);
    }
  }

  // ========== EFFECTS ==========
  useEffect(() => {
    fetchWallets();
    fetchCategories();
  }, []);

  useEffect(() => {
    fetchTransactions();
  }, [searchQuery, typeFilter, timePeriod]);

  // ========== PAGINATION ==========
  const totalPages = Math.ceil(transactions.length / ITEMS_PER_PAGE);
  const paginatedTransactions = transactions.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  // ========== HANDLERS ==========
  function showToast(message: string, type: "success" | "error") {
    setToast({ message, type });
    setTimeout(() => setToast(null), 3000);
  }

  function openCreateModal() {
    setEditingId(null);
    setForm(initialFormState);
    setIsModalOpen(true);
  }

  function openEditModal(transaction: Transaction) {
    setEditingId(transaction.id);
    setForm({
      id: transaction.id,
      walletId: String(transaction.walletId),
      categoryId: String(transaction.categoryId || ""),
      description: transaction.description || "",
      amount: formatMoneyInput(String(transaction.amount)),
      location: transaction.location || "",
      type: transaction.type,
      transactionDate: transaction.transactionDate,
    });
    setIsModalOpen(true);
    setActionMenu({ open: false, transactionId: null });
  }

  function closeModal() {
    setIsModalOpen(false);
    setEditingId(null);
    setForm(initialFormState);
    setIsSubmitting(false);
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);

    try {
      const raw = localStorage.getItem("user");
      if (!raw) throw new Error("Vui lòng đăng nhập");

      const parsed = JSON.parse(raw) as { id?: number };
      const userId = parsed?.id;
      if (!userId) throw new Error("Không tìm thấy userId");

      const payload = {
        userId,
        walletId: Number(form.walletId),
        categoryId: form.categoryId ? Number(form.categoryId) : null,
        description: form.description.trim(),
        amount: Number(normalizeMoneyInput(form.amount)),
        location: form.location.trim() || null,
        type: form.type,
        transactionDate: form.transactionDate,
      };

      const isEditing = editingId !== null;
      const response = await fetch(
        isEditing ? `/api/transactions/${editingId}` : "/api/transactions",
        {
          method: isEditing ? "PUT" : "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        }
      );

      if (!response.ok) throw new Error(`HTTP ${response.status}`);

      closeModal();
      await fetchTransactions();
      await fetchWallets();
      showToast(
        isEditing ? "Cập nhật giao dịch thành công" : "Tạo giao dịch thành công",
        "success"
      );
    } catch (err) {
      console.error(err);
      showToast(err instanceof Error ? err.message : "Không thể lưu giao dịch", "error");
    } finally {
      setIsSubmitting(false);
    }
  }

  async function handleDelete(transactionId: number) {
    const confirmed = window.confirm("Bạn có chắc muốn xóa giao dịch này?");
    if (!confirmed) return;

    try {
      const response = await fetch(`/api/transactions/${transactionId}`, {
        method: "DELETE",
      });

      if (!response.ok && response.status !== 204) throw new Error(`HTTP ${response.status}`);

      await fetchTransactions();
      await fetchWallets();
      setActionMenu({ open: false, transactionId: null });
      showToast("Xóa giao dịch thành công", "success");
    } catch (err) {
      console.error(err);
      showToast("Không thể xóa giao dịch", "error");
    }
  }

  // ========== RENDER ==========
  const typeOptions = [
    { value: "all", label: "Tất cả" },
    { value: "income", label: "Thu nhập" },
    { value: "expense", label: "Chi tiêu" },
  ];

  const dateOptions = [
    { value: "thisMonth", label: "Tháng này" },
    { value: "lastMonth", label: "Tháng trước" },
  ];

  return (
    <div className="bg-white relative rounded-[20px] p-[24px]">
      <div className="content-stretch flex flex-col gap-[20px] items-start relative w-full">
        {/* Header */}
        <div className="w-full flex items-center justify-between">
          <h3 className="font-['Inter:Semi_Bold',sans-serif] font-bold leading-[28px] text-[20px] text-black">
            Lịch sử giao dịch
          </h3>
          <button
            onClick={openCreateModal}
            className="flex items-center gap-[8px] px-[16px] py-[10px] rounded-[10px] bg-[#8b5cf6] hover:bg-[#7c3aed] text-white text-[14px] font-semibold transition-colors shadow-sm"
          >
            <svg className="size-[18px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path d="M12 4v16m8-8H4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Thêm giao dịch
          </button>
        </div>

        {/* Error message */}
        {error && (
          <div className="w-full rounded-[8px] border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
            {error}
          </div>
        )}

        {/* Filters */}
        <div className="w-full flex flex-col sm:flex-row items-stretch sm:items-center gap-[12px]">
          <div className="flex-1 relative">
            <svg className="absolute left-[12px] top-1/2 transform -translate-y-1/2 size-[18px] text-[rgba(0,0,0,0.4)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="text"
              placeholder="Tìm kiếm giao dịch..."
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setCurrentPage(1);
              }}
              className="w-full pl-[40px] pr-[12px] py-[10px] rounded-[8px] border border-[rgba(0,0,0,0.08)] focus:border-[#8b5cf6] focus:outline-none text-[14px]"
            />
          </div>

          {/* Type dropdown */}
          <div className="relative w-full sm:w-[140px]">
            <button
              onClick={() => setIsTypeDropdownOpen(!isTypeDropdownOpen)}
              className="w-full flex items-center justify-between px-[12px] py-[10px] rounded-[8px] bg-[rgba(0,0,0,0.02)] hover:bg-[rgba(0,0,0,0.04)] text-[14px] font-medium border border-[rgba(0,0,0,0.06)]"
            >
              {typeOptions.find((o) => o.value === typeFilter)?.label}
              <svg className={`size-[16px] transition-transform ${isTypeDropdownOpen ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </button>
            {isTypeDropdownOpen && (
              <div className="absolute right-0 mt-[8px] w-full bg-white border border-[rgba(0,0,0,0.06)] rounded-[8px] shadow-lg z-20">
                {typeOptions.map((option) => (
                  <button
                    key={option.value}
                    onClick={() => {
                      setTypeFilter(option.value as "all" | "income" | "expense");
                      setIsTypeDropdownOpen(false);
                      setCurrentPage(1);
                    }}
                    className={`w-full text-left px-[12px] py-[10px] text-[14px] transition-colors ${
                      typeFilter === option.value ? "bg-[#8b5cf6] text-white font-medium" : "hover:bg-[rgba(0,0,0,0.02)]"
                    }`}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Date dropdown */}
          <div className="relative w-full sm:w-[140px]">
            <button
              onClick={() => setIsDateDropdownOpen(!isDateDropdownOpen)}
              className="w-full flex items-center justify-between px-[12px] py-[10px] rounded-[8px] bg-[rgba(0,0,0,0.02)] hover:bg-[rgba(0,0,0,0.04)] text-[14px] font-medium border border-[rgba(0,0,0,0.06)]"
            >
              {dateOptions.find((o) => o.value === timePeriod)?.label}
              <svg className={`size-[16px] transition-transform ${isDateDropdownOpen ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </button>
            {isDateDropdownOpen && (
              <div className="absolute right-0 mt-[8px] w-full bg-white border border-[rgba(0,0,0,0.06)] rounded-[8px] shadow-lg z-20">
                {dateOptions.map((option) => (
                  <button
                    key={option.value}
                    onClick={() => {
                      setTimePeriod(option.value);
                      setIsDateDropdownOpen(false);
                      setCurrentPage(1);
                    }}
                    className={`w-full text-left px-[12px] py-[10px] text-[14px] transition-colors ${
                      timePeriod === option.value ? "bg-[#8b5cf6] text-white font-medium" : "hover:bg-[rgba(0,0,0,0.02)]"
                    }`}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Result count */}
        <div className="text-[12px] text-[rgba(0,0,0,0.5)]">
          {isLoading ? "Đang tải..." : `Tìm thấy ${transactions.length} giao dịch`}
        </div>

        {/* Table */}
        <div className="w-full overflow-x-auto">
          <table className="w-full text-left text-[14px]">
            <thead>
              <tr className="text-[12px] text-[rgba(0,0,0,0.6)] border-b border-[rgba(0,0,0,0.06)]">
                <th className="pb-[12px] font-medium">Tên</th>
                <th className="pb-[12px] font-medium">Danh mục</th>
                <th className="pb-[12px] font-medium hidden sm:table-cell">Ngày</th>
                <th className="pb-[12px] font-medium text-right">Số tiền</th>
                <th className="pb-[12px] font-medium text-right w-[50px]">Hành động</th>
              </tr>
            </thead>
            <tbody>
              {paginatedTransactions.length > 0 ? (
                paginatedTransactions.map((txn) => (
                  <tr key={txn.id} className="border-t border-[rgba(0,0,0,0.03)] hover:bg-[rgba(0,0,0,0.01)]">
                    <td className="py-[12px]">
                      <div className="flex items-center gap-[12px]">
                        <div
                          className={`rounded-[8px] size-[40px] flex items-center justify-center ${
                            txn.type === "income"
                              ? "bg-[#dcfce7]"
                              : txn.type === "expense"
                                ? "bg-[#fee2e2]"
                                : "bg-[#f3f4f6]"
                          }`}
                        >
                          {txn.type === "income" ? (
                            <svg className="size-[18px] text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                            </svg>
                          ) : txn.type === "expense" ? (
                            <svg className="size-[18px] text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                            </svg>
                          ) : (
                            <span className="text-[14px]">⇄</span>
                          )}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="font-medium text-black truncate">{txn.description || "Giao dịch không tên"}</div>
                          {txn.location && (
                            <div className="text-xs text-[rgba(0,0,0,0.4)] truncate">{txn.location}</div>
                          )}
                        </div>
                      </div>
                    </td>
                    <td className="py-[12px] text-[14px] text-[rgba(0,0,0,0.6)]">
                      <div className="truncate">{txn.category?.name || "—"}</div>
                    </td>
                    <td className="py-[12px] text-[14px] text-[rgba(0,0,0,0.6)] hidden sm:table-cell">
                      {new Date(txn.transactionDate).toLocaleDateString("vi-VN")}
                    </td>
                    <td
                      className={`py-[12px] text-[14px] font-semibold text-right ${
                        txn.type === "income"
                          ? "text-[#10b981]"
                          : txn.type === "expense"
                            ? "text-[#ef4444]"
                            : "text-[rgba(0,0,0,0.6)]"
                      }`}
                    >
                      {txn.type === "income" ? "+" : txn.type === "expense" ? "-" : ""}
                      {formatVND(Math.abs(txn.amount))}
                    </td>
                    <td className="py-[12px] text-right">
                      <div className="relative inline-block">
                        <button
                          onClick={() =>
                            setActionMenu({
                              open: !actionMenu.open,
                              transactionId: actionMenu.transactionId === txn.id ? null : txn.id,
                            })
                          }
                          className="p-[6px] rounded-[6px] hover:bg-[rgba(0,0,0,0.06)] opacity-50 hover:opacity-100"
                        >
                          <svg className="size-[18px] text-[rgba(0,0,0,0.6)]" fill="currentColor" viewBox="0 0 24 24">
                            <circle cx="12" cy="5" r="2" />
                            <circle cx="12" cy="12" r="2" />
                            <circle cx="12" cy="19" r="2" />
                          </svg>
                        </button>

                        {actionMenu.open && actionMenu.transactionId === txn.id && (
                          <div className="absolute right-0 mt-[4px] w-[140px] bg-white border border-[rgba(0,0,0,0.06)] rounded-[8px] shadow-lg z-30">
                            <button
                              onClick={() => openEditModal(txn)}
                              className="w-full text-left px-[12px] py-[10px] text-[12px] hover:bg-[rgba(0,0,0,0.02)] text-black flex items-center gap-[8px]"
                            >
                              <svg className="size-[16px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                              </svg>
                              Sửa
                            </button>
                            <button
                              onClick={() => handleDelete(txn.id)}
                              className="w-full text-left px-[12px] py-[10px] text-[12px] hover:bg-[#fee2e2] text-[#ef4444] flex items-center gap-[8px]"
                            >
                              <svg className="size-[16px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                              </svg>
                              Xóa
                            </button>
                          </div>
                        )}
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={5} className="py-[24px] text-center text-[14px] text-[rgba(0,0,0,0.4)]">
                    Không tìm thấy giao dịch nào
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <>
            <div className="w-full flex items-center justify-center gap-[8px] pt-[12px]">
              <button
                onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                disabled={currentPage === 1}
                className={`px-[10px] py-[8px] rounded-[6px] text-[12px] font-medium transition-colors ${
                  currentPage === 1
                    ? "bg-[rgba(0,0,0,0.02)] text-[rgba(0,0,0,0.3)] cursor-not-allowed"
                    : "bg-[rgba(0,0,0,0.02)] text-black hover:bg-[rgba(0,0,0,0.04)]"
                }`}
              >
                ← Trước
              </button>

              <div className="flex items-center gap-[4px]">
                {Array.from({ length: totalPages }).map((_, i) => {
                  const pageNum = i + 1;
                  const isVisible = pageNum === 1 || pageNum === totalPages || Math.abs(pageNum - currentPage) <= 1;

                  if (!isVisible) return null;

                  return (
                    <button
                      key={pageNum}
                      onClick={() => setCurrentPage(pageNum)}
                      className={`px-[10px] py-[8px] rounded-[6px] text-[12px] font-medium transition-colors ${
                        currentPage === pageNum
                          ? "bg-[#8b5cf6] text-white font-semibold"
                          : "bg-[rgba(0,0,0,0.02)] text-black hover:bg-[rgba(0,0,0,0.04)]"
                      }`}
                    >
                      {pageNum}
                    </button>
                  );
                })}
              </div>

              <button
                onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                disabled={currentPage === totalPages}
                className={`px-[10px] py-[8px] rounded-[6px] text-[12px] font-medium transition-colors ${
                  currentPage === totalPages
                    ? "bg-[rgba(0,0,0,0.02)] text-[rgba(0,0,0,0.3)] cursor-not-allowed"
                    : "bg-[rgba(0,0,0,0.02)] text-black hover:bg-[rgba(0,0,0,0.04)]"
                }`}
              >
                Sau →
              </button>
            </div>
            <div className="w-full text-center text-[12px] text-[rgba(0,0,0,0.4)]">
              Trang {currentPage} / {totalPages}
            </div>
          </>
        )}
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4 backdrop-blur-sm"
          onClick={() => closeModal()}
        >
          <div
            className="w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl bg-white p-6 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between mb-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-900">
                  {editingId !== null ? "Chỉnh sửa giao dịch" : "Thêm giao dịch mới"}
                </h3>
                <p className="mt-1 text-sm text-gray-500">
                  {editingId !== null ? "Cập nhật thông tin giao dịch" : "Tạo một giao dịch mới"}
                </p>
              </div>
              <button
                onClick={closeModal}
                className="rounded-full p-2 text-gray-400 hover:bg-gray-100"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M18 6 6 18M6 6l12 12" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Description */}
                <label className="sm:col-span-2">
                  <span className="text-sm font-medium text-gray-700">Nội dung</span>
                  <input
                    type="text"
                    value={form.description}
                    onChange={(e) => setForm({ ...form, description: e.target.value })}
                    className="mt-1 block w-full rounded-xl border border-gray-200 px-4 py-3 text-sm focus:border-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-100"
                    placeholder="Ví dụ: Ăn cơm, Dạy kèm..."
                    required
                  />
                </label>

                {/* Type */}
                <label>
                  <span className="text-sm font-medium text-gray-700">Loại</span>
                  <select
                    value={form.type}
                    onChange={(e) => setForm({ ...form, type: e.target.value as any })}
                    className="mt-1 block w-full rounded-xl border border-gray-200 px-4 py-3 text-sm focus:border-purple-300 focus:outline-none"
                  >
                    <option value="expense">Chi tiêu</option>
                    <option value="income">Thu nhập</option>
                    <option value="transfer">Chuyển tiền</option>
                  </select>
                </label>

                {/* Amount */}
                <label>
                  <span className="text-sm font-medium text-gray-700">Số tiền</span>
                  <input
                    type="text"
                    inputMode="numeric"
                    value={form.amount}
                    onChange={(e) => setForm({ ...form, amount: formatMoneyInput(e.target.value) })}
                    className="mt-1 block w-full rounded-xl border border-gray-200 px-4 py-3 text-sm focus:border-purple-300 focus:outline-none"
                    placeholder="0"
                    required
                  />
                </label>

                {/* Wallet */}
                <label>
                  <span className="text-sm font-medium text-gray-700">Ví</span>
                  <select
                    value={form.walletId}
                    onChange={(e) => setForm({ ...form, walletId: e.target.value })}
                    className="mt-1 block w-full rounded-xl border border-gray-200 px-4 py-3 text-sm focus:border-purple-300 focus:outline-none"
                    required
                  >
                    <option value="">Chọn ví</option>
                    {wallets.map((w) => (
                      <option key={w.id} value={String(w.id)}>
                        {w.name}
                      </option>
                    ))}
                  </select>
                </label>

                {/* Category */}
                <label>
                  <span className="text-sm font-medium text-gray-700">Danh mục</span>
                  <select
                    value={form.categoryId}
                    onChange={(e) => setForm({ ...form, categoryId: e.target.value })}
                    className="mt-1 block w-full rounded-xl border border-gray-200 px-4 py-3 text-sm focus:border-purple-300 focus:outline-none"
                  >
                    <option value="">Không chọn danh mục</option>
                    {categories.map((c) => (
                      <option key={c.id} value={String(c.id)}>
                        {c.name}
                      </option>
                    ))}
                  </select>
                </label>

                {/* Date */}
                <label>
                  <span className="text-sm font-medium text-gray-700">Ngày giao dịch</span>
                  <input
                    type="date"
                    value={form.transactionDate}
                    onChange={(e) => setForm({ ...form, transactionDate: e.target.value })}
                    className="mt-1 block w-full rounded-xl border border-gray-200 px-4 py-3 text-sm focus:border-purple-300 focus:outline-none"
                    required
                  />
                </label>

                {/* Location */}
                <label className="sm:col-span-2">
                  <span className="text-sm font-medium text-gray-700">Địa điểm (tuỳ chọn)</span>
                  <input
                    type="text"
                    value={form.location}
                    onChange={(e) => setForm({ ...form, location: e.target.value })}
                    className="mt-1 block w-full rounded-xl border border-gray-200 px-4 py-3 text-sm focus:border-purple-300 focus:outline-none"
                    placeholder="Ví dụ: Quán cơm Tây Hồ..."
                  />
                </label>
              </div>

              {/* Actions */}
              <div className="flex flex-col-reverse gap-3 sm:flex-row sm:justify-end pt-4">
                <button
                  type="button"
                  onClick={closeModal}
                  className="rounded-xl border border-gray-200 px-4 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50"
                >
                  Hủy
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="rounded-xl bg-purple-600 px-5 py-3 text-sm font-semibold text-white hover:bg-purple-700 disabled:opacity-70"
                >
                  {isSubmitting ? "Đang lưu..." : editingId !== null ? "Cập nhật" : "Tạo mới"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Toast */}
      {toast && (
        <div
          className={`fixed right-4 top-4 z-50 rounded-2xl border px-4 py-3 text-sm font-medium shadow-lg ${
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
