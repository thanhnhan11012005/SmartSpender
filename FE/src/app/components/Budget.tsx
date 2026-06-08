import { useEffect, useMemo, useState } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";
import CategoryCreateModal from "./CategoryCreateModal";
import { useFormat } from "../../utils/useFormat";
import { useTranslation } from "../../hooks/useTranslation";

// ========== TYPES ==========
interface BudgetDetail {
  id: number;
  categoryId: number;
  categoryName: string;
  limitAmount: number;
  spentAmount: number;
  startDate: string;
  endDate: string;
}

interface Category {
  id: number;
  name: string;
  icon?: string | null;
  color?: string | null;
}

interface AiSuggestionItem {
  categoryId?: number | null;
  categoryName: string;
  suggestedAmount: number;
  checked: boolean;
  manuallyAmount: number;
}

interface MonthlyData {
  month: string;
  hạn_mức: number;
  thực_tế: number;
}

// ========== COMPONENT ==========
export default function Budget({ onNavigateToAI }: { onNavigateToAI?: () => void } = {}) {
  const [activeTab, setActiveTab] = useState<"overview" | "categories" | "monthly">("overview");
  const [budgets, setBudgets] = useState<BudgetDetail[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [editingBudgetId, setEditingBudgetId] = useState<number | null>(null);
  const [isNewCategoryModalOpen, setIsNewCategoryModalOpen] = useState(false);

  // State cho form modal
  const [formData, setFormData] = useState({
    categoryId: "",
    limitAmount: "",
    month: new Date().toISOString().slice(0, 7), // YYYY-MM format
  });
  // AI suggest states
  const [aiModeOpen, setAiModeOpen] = useState(false);
  const [aiLocation, setAiLocation] = useState("Hồ Chí Minh");
  const [aiIncome, setAiIncome] = useState("");
  const [aiSavingsTarget, setAiSavingsTarget] = useState("");
  const [aiLoading, setAiLoading] = useState(false);
  const [aiSuggestions, setAiSuggestions] = useState<AiSuggestionItem[]>([]);
  const [aiWarningMessage, setAiWarningMessage] = useState<string | null>(null);
  const [aiIsUsingFallback, setAiIsUsingFallback] = useState(false);

  // ========== HELPER FUNCTIONS ==========
  const { formatCurrency: formatVND } = useFormat();
  const { t } = useTranslation();

  // Normalize and format money input (keep digits in state, show formatted with dots)
  function normalizeMoneyInput(value: string) {
    return value.replace(/\D/g, "");
  }

  function formatMoneyInput(value: string) {
    const digits = normalizeMoneyInput(value);
    if (!digits) return "";
    try {
      return new Intl.NumberFormat("vi-VN").format(Number(digits));
    } catch {
      return digits;
    }
  }

  // Lấy màu thanh tiến trình dựa trên phần trăm chi tiêu
  const getListProgressColor = (percentage: number) => {
    if (percentage < 70) return "bg-green-500";      // < 70%: Xanh lá
    if (percentage < 100) return "bg-orange-500";    // 70-100%: Cam (cảnh báo)
    return "bg-red-500";                              // > 100%: Đỏ (vượt hạn)
  };

  // Lấy màu viền trái của hàng danh mục
  const getListRowBorder = (percentage: number) => {
    if (percentage < 70) return "border-l-green-200";
    if (percentage < 100) return "border-l-orange-200";
    return "border-l-red-200";
  };

  // Lấy màu chữ phần trăm
  const getStatColor = (percentage: number) => {
    if (percentage < 50) return "text-green-600";
    if (percentage < 75) return "text-yellow-600";
    if (percentage < 90) return "text-orange-600";
    return "text-red-600";
  };

  // ========== FETCH DATA ==========
  // Lấy userID từ localStorage
  const getUserId = (): number | null => {
    const raw = localStorage.getItem("user");
    if (!raw) return null;
    try {
      const parsed = JSON.parse(raw) as { id?: number };
      return parsed?.id ?? null;
    } catch {
      return null;
    }
  };

  // Fetch ngân sách từ API
  async function fetchBudgets() {
    const userId = getUserId();
    if (!userId) {
      setError("Vui lòng đăng nhập để xem ngân sách.");
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(`/api/budgets?userId=${userId}`);
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
      }

      const data: BudgetDetail[] = await response.json();
      setBudgets(data);
    } catch (err) {
      console.error(err);
      setError("Không thể tải dữ liệu ngân sách.");
      setBudgets([]);
    } finally {
      setIsLoading(false);
    }
  }

  // Fetch danh mục từ API
  async function fetchCategories() {
    try {
      const userId = getUserId();
      // Use the endpoint that returns user categories + default categories
      const url = userId ? `/api/categories/user/${userId}/all` : `/api/categories/default`;
      const response = await fetch(url);
      if (!response.ok) throw new Error(`HTTP ${response.status}`);

      const data: Category[] = await response.json();
      // normalize ids as numbers
      setCategories(Array.isArray(data) ? data : []);
    } catch (err) {
      console.error("Error fetching categories:", err);
      setCategories([]);
    }
  }

  function openCreateCategoryModal() {
    setFormData((prev) => ({ ...prev, categoryId: "" }));
    setIsNewCategoryModalOpen(true);
  }

  function closeCreateCategoryModal() {
    setIsNewCategoryModalOpen(false);
    setFormData((prev) => ({ ...prev, categoryId: "" }));
  }

  // Gọi API khi component mount
  useEffect(() => {
    fetchBudgets();
    fetchCategories();
  }, []);

  // ========== HANDLERS ==========
  // Xử lý tạo ngân sách mới
  async function handleAddBudget(e: React.FormEvent) {
    e.preventDefault();
    
    if (!formData.categoryId || !formData.limitAmount) {
      alert("Vui lòng điền đầy đủ thông tin.");
      return;
    }

    const userId = getUserId();
    if (!userId) return;

    setIsSubmitting(true);

    try {
      const amountValue = parseFloat(formData.limitAmount);

      if (editingBudgetId !== null) {
        const payload = {
          userId,
          categoryId: parseInt(formData.categoryId),
          amount: amountValue,
          period: "MONTH",
          isAlertEnabled: true,
        };

        const response = await fetch(`/api/budgets/${editingBudgetId}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });

        if (!response.ok) throw new Error(`HTTP ${response.status}`);

        await fetchBudgets();
        setFormData({ categoryId: "", limitAmount: "", month: new Date().toISOString().slice(0, 7) });
        setEditingBudgetId(null);
        setIsModalOpen(false);
        alert("Cập nhật ngân sách thành công!");
        return;
      }

      const [year, month] = formData.month.split("-");
      const startDate = `${year}-${month}-01`;
      // Tính ngày cuối tháng
      const endDate = new Date(parseInt(year), parseInt(month), 0)
        .toISOString()
        .split("T")[0];

      const payload = {
        userId,
        categoryId: parseInt(formData.categoryId),
        amount: amountValue,
        startDate,
        endDate,
        period: "MONTH",
        isAlertEnabled: true,
      };

      const response = await fetch(`/api/budgets`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) throw new Error(`HTTP ${response.status}`);

      // Refresh lại danh sách
      await fetchBudgets();
      
      // Reset form và đóng modal
      setFormData({ categoryId: "", limitAmount: "", month: new Date().toISOString().slice(0, 7) });
      setEditingBudgetId(null);
      setIsModalOpen(false);
      alert("Tạo ngân sách thành công!");
    } catch (err) {
      console.error(err);
      alert(editingBudgetId !== null ? "Lỗi khi cập nhật ngân sách." : "Lỗi khi tạo ngân sách.");
    } finally {
      setIsSubmitting(false);
    }
  }

  function openEditBudgetModal(budget: BudgetDetail) {
    setEditingBudgetId(budget.id);
    setFormData({
      categoryId: String(budget.categoryId),
      limitAmount: String(Math.round(budget.limitAmount)),
      month: budget.startDate.slice(0, 7),
    });
    setIsModalOpen(true);
    setAiModeOpen(false);
  }

  async function handleCategoryCreated(category: { id: number }) {
    await fetchCategories();
    setFormData((prev) => ({ ...prev, categoryId: String(category.id) }));
  }

  // ===== AI Suggest =====
  async function fetchAiSuggestions() {
    const userId = getUserId();
    if (!userId) {
      alert("Vui lòng đăng nhập để sử dụng AI gợi ý.");
      return;
    }
    if (!aiIncome || Number(aiIncome) <= 0) {
      alert("Vui lòng nhập thu nhập hợp lệ.");
      return;
    }
    if (Number(aiSavingsTarget || "0") < 0) {
      alert("Mục tiêu tiết kiệm không được âm.");
      return;
    }
    if (Number(aiSavingsTarget || "0") >= Number(aiIncome)) {
      alert("Mục tiêu tiết kiệm phải nhỏ hơn thu nhập tháng.");
      return;
    }

    setAiLoading(true);
    setAiSuggestions([]);
    setAiWarningMessage(null);
    setAiIsUsingFallback(false);

    try {
      const payload = {
        userId,
        location: aiLocation,
        monthlyIncome: Number(aiIncome),
        targetSavings: Number(aiSavingsTarget || "0"),
      };
      const resp = await fetch(`/api/budgets/ai-suggest`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!resp.ok) throw new Error(`HTTP ${resp.status}`);
      
      // Handle new response structure: {suggestions, isUsingFallback, message, errorCode}
      const data = await resp.json();
      const suggestions = data.suggestions || [];
      const isUsingFallback = data.isUsingFallback || false;
      const message = data.message || null;
      
      // Map suggestions to local shape with checked=true and manuallyAmount initialized
      const mapped = Array.isArray(suggestions)
        ? suggestions.map((d: any) => ({
            categoryId: d.categoryId ?? null,
            categoryName: d.categoryName,
            suggestedAmount: Number(d.suggestedAmount),
            checked: true,
            manuallyAmount: Number(d.suggestedAmount),
          }))
        : [];
      
      setAiSuggestions(mapped);
      setAiIsUsingFallback(isUsingFallback);
      
      if (message) {
        setAiWarningMessage(message);
      }
    } catch (err) {
      console.error(err);
      setAiWarningMessage("⚠️ Lỗi khi gọi AI gợi ý. Vui lòng thử lại.");
      setAiIsUsingFallback(true);
    } finally {
      setAiLoading(false);
    }
  }

  async function applyAiSuggestions() {
    const userId = getUserId();
    if (!userId) return;
    if (!formData.month) {
      alert("Vui lòng chọn tháng áp dụng trước khi áp dụng gợi ý.");
      return;
    }

    if (!aiSuggestions || aiSuggestions.length === 0) {
      alert("Không có gợi ý để áp dụng.");
      return;
    }

    const checkedSuggestions = aiSuggestions.filter((item) => item.checked);
    
    if (checkedSuggestions.length === 0 && spareFund <= 0) {
      alert("Vui lòng chọn ít nhất 1 danh mục hoặc đảm bảo Quỹ dự phòng >= 0.");
      return;
    }

    if (isOverBudget) {
      alert("Lỗi: Tổng chi tiêu vượt quá hạn mức. Vui lòng cân đối lại các mục.");
      return;
    }

    setIsSubmitting(true);
    try {
      // Build suggestions payload with only checked items and their manuallyAmount
      const suggestionsPayload = checkedSuggestions.map((item) => ({
        categoryId: item.categoryId ?? null,
        categoryName: item.categoryName,
        suggestedAmount: Number(item.manuallyAmount),
      }));

      // Add spare fund if it's > 0
      if (spareFund > 0) {
        const spareCat = categories.find((c) => c.name === "Quỹ dự phòng tự do" || c.name?.includes("dự phòng"));
        suggestionsPayload.push({
          categoryId: spareCat ? spareCat.id : null,
          categoryName: spareCat ? spareCat.name : "Quỹ dự phòng tự do",
          suggestedAmount: Math.round(spareFund),
        });
      }

      const payload = {
        userId,
        month: formData.month,
        suggestions: suggestionsPayload,
      };

      const response = await fetch(`/api/budgets/apply-ai`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) throw new Error(`HTTP ${response.status}`);

      await fetchBudgets();
      setIsModalOpen(false);
      setAiModeOpen(false);
      setAiSuggestions([]);
      setAiLocation("Hồ Chí Minh");
      setAiIncome("");
      setAiSavingsTarget("");
      alert("Áp dụng gợi ý AI thành công và cập nhật ngân sách.");
    } catch (err) {
      console.error(err);
      alert("Lỗi khi áp dụng gợi ý AI.");
    } finally {
      setIsSubmitting(false);
    }
  }

  function toggleAiSuggestion(index: number) {
    setAiSuggestions((prev) =>
      prev.map((item, itemIndex) =>
        itemIndex === index
          ? { ...item, checked: !item.checked }
          : item
      )
    );
  }

  function updateAiSuggestionAmount(index: number, rawValue: string) {
    const normalizedAmount = normalizeMoneyInput(rawValue);
    const numericAmount = normalizedAmount ? Number(normalizedAmount) : 0;
    
    setAiSuggestions((prev) =>
      prev.map((item, itemIndex) =>
        itemIndex === index
          ? { ...item, manuallyAmount: numericAmount }
          : item
      )
    );
  }

  // Xử lý xóa ngân sách
  async function handleDeleteBudget(budgetId: number) {
    if (!window.confirm("Bạn có chắc muốn xóa ngân sách này?")) return;

    try {
      const response = await fetch(`/api/budgets/${budgetId}`, {
        method: "DELETE",
      });

      if (!response.ok) throw new Error(`HTTP ${response.status}`);

      await fetchBudgets();
      alert("Xóa ngân sách thành công!");
    } catch (err) {
      console.error(err);
      alert("Lỗi khi xóa ngân sách.");
    }
  }

  // ========== COMPUTED VALUES ==========
  // Tính tổng ngân sách
  const totalBudget = useMemo(() => {
    return budgets.reduce((sum, budget) => sum + budget.limitAmount, 0);
  }, [budgets]);

  // Tính tổng chi tiêu
  const totalSpent = useMemo(() => {
    return budgets.reduce((sum, budget) => sum + budget.spentAmount, 0);
  }, [budgets]);

  // Tính còn lại
  const totalRemaining = totalBudget - totalSpent;

  // Tính phần trăm tổng chi tiêu
  const totalPercentage = totalBudget > 0 ? (totalSpent / totalBudget) * 100 : 0;

  const selectedAiSuggestionCount = useMemo(() => {
    return aiSuggestions.filter((item) => item.checked).length;
  }, [aiSuggestions]);

  // Tổng tiền có thể chi tiêu = Thu nhập - tiết kiệm
  const spendableBudget = useMemo(() => {
    const income = Number(aiIncome || 0);
    const savings = Number(aiSavingsTarget || 0);
    const spendable = income - savings;
    return spendable > 0 ? spendable : 0;
  }, [aiIncome, aiSavingsTarget]);

  // Tổng tiền của các danh mục ĐƯỢC CHỌN (dùng manuallyAmount)
  const selectedTotal = useMemo(() => {
    return aiSuggestions.reduce((sum, item) => {
      if (item.checked) {
        return sum + Number(item.manuallyAmount || 0);
      }
      return sum;
    }, 0);
  }, [aiSuggestions]);

  // Số tiền Quỹ dự phòng tự do = SpendableBudget - tổng tiền các mục được chọn
  const spareFund = useMemo(() => {
    return spendableBudget - selectedTotal;
  }, [spendableBudget, selectedTotal]);

  // Kiểm tra xem có vượt hạn mức hay không
  const isOverBudget = spareFund < 0;

  // ===== VALIDATION CHO PHẦN EDIT =====
  // Khi đang edit budget, kiểm tra xem hạn mức mới có hợp lệ không
  const editingBudget = editingBudgetId !== null ? budgets.find((b) => b.id === editingBudgetId) : null;
  const editAmountValue = parseFloat(formData.limitAmount) || 0;
  
  // Kiểm tra 1: Hạn mức không được nhỏ hơn chi tiêu thực tế
  const isEditBudgetTooSmall = editingBudget != null && editAmountValue > 0 && editAmountValue < editingBudget.spentAmount;
  
  // Kiểm tra 2: Tổng ngân sách không được vượt quá tổng hiện tại
  const currentTotalBudget = totalBudget;
  const newTotalBudgetIfEdited = editingBudget != null 
    ? currentTotalBudget - editingBudget.limitAmount + editAmountValue
    : editAmountValue;
  const isEditBudgetExceedsTotal = editingBudget != null && editAmountValue > 0 && newTotalBudgetIfEdited > currentTotalBudget;
  
  // Kết hợp cả hai điều kiện
  const isEditBudgetInvalid = isEditBudgetTooSmall || isEditBudgetExceedsTotal;
  
  const editErrorMessage = isEditBudgetTooSmall
    ? `Hạn mức không được nhỏ hơn chi tiêu thực tế (${formatVND(editingBudget?.spentAmount || 0)})`
    : isEditBudgetExceedsTotal
    ? `Tổng ngân sách sẽ vượt quá mức cho phép (${formatVND(currentTotalBudget)}). Hạn mức mới: ${formatVND(newTotalBudgetIfEdited)}`
    : null;

  // Tính dữ liệu cho biểu đồ hàng tháng (3-4 tháng gần nhất)
  const monthlyChartData = useMemo(() => {
    const monthMap: Record<string, { limitAmount: number; spentAmount: number }> = {};

    // Nhóm ngân sách theo tháng từ startDate
    budgets.forEach((budget) => {
      const month = budget.startDate.slice(0, 7); // YYYY-MM
      if (!monthMap[month]) {
        monthMap[month] = { limitAmount: 0, spentAmount: 0 };
      }
      monthMap[month].limitAmount += budget.limitAmount;
      monthMap[month].spentAmount += budget.spentAmount;
    });

    // Convert sang format cho Recharts
    return Object.entries(monthMap)
      .sort(([a], [b]) => a.localeCompare(b))
      .slice(-4) // Lấy 4 tháng gần nhất
      .map(([month, data]) => ({
        month: `Tháng ${month.split("-")[1]}`,
        hạn_mức: data.limitAmount,
        thực_tế: data.spentAmount,
      }));
  }, [budgets]);

  // ========== RENDER ==========
  if (error) {
    return (
      <div className="rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
        {error}
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="space-y-4">
        <div className="h-10 w-48 animate-pulse rounded-xl bg-gray-200" />
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {Array.from({ length: 3 }).map((_, index) => (
            <div key={index} className="h-32 animate-pulse rounded-2xl bg-gray-200" />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-[20px]">
      {/* Header */}
      <div className="bg-white rounded-[20px] p-[24px]">
        <h1 className="text-[28px] font-['Inter:Semi_Bold',sans-serif] font-semibold text-black mb-[2px]">
          {t("budget.title")}
        </h1>
        <p className="text-[14px] text-[rgba(0,0,0,0.6)]">{t("budget.desc")}</p>
      </div>

      {/* Summary Cards - Hiển thị 3 thẻ: Tổng Ngân Sách, Đã Chi Tiêu, Còn Lại */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-[16px]">
        {/* Total Budget */}
        <div className="bg-gradient-to-br from-[#e6f1fd] to-[#cce5ff] rounded-[16px] p-[20px] border border-blue-200">
          <div className="flex items-center justify-between mb-[12px]">
            <p className="text-[12px] text-black/60 font-medium">{t("budget.totalBudget")}</p>
            <div className="bg-white rounded-[8px] p-[6px]">
              <svg className="size-[16px] text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
          </div>
          <h3 className="text-[24px] font-['Inter:Semi_Bold',sans-serif] font-semibold text-blue-600">
            {formatVND(totalBudget)}
          </h3>
          <p className="text-[12px] text-black/50 mt-[8px]">{t("budget.forThisMonth")}</p>
        </div>

        {/* Total Spent */}
        <div className="bg-gradient-to-br from-[#fee2e2] to-[#fcc2c2] rounded-[16px] p-[20px] border border-red-200">
          <div className="flex items-center justify-between mb-[12px]">
            <p className="text-[12px] text-black/60 font-medium">{t("budget.totalSpent")}</p>
            <div className="bg-white rounded-[8px] p-[6px]">
              <svg className="size-[16px] text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 17h8m0 0v-8m0 8l-8-8-4 4-6-6" />
              </svg>
            </div>
          </div>
          <h3 className="text-[24px] font-['Inter:Semi_Bold',sans-serif] font-semibold text-red-600">
            {formatVND(totalSpent)}
          </h3>
          <p className="text-[12px] text-black/50 mt-[8px]">
            {totalPercentage.toFixed(1)}{t("budget.budgetPercentage")}
          </p>
        </div>

        {/* Remaining */}
        <div className="bg-gradient-to-br from-[#dcfce7] to-[#bbf7d0] rounded-[16px] p-[20px] border border-green-200">
          <div className="flex items-center justify-between mb-[12px]">
            <p className="text-[12px] text-black/60 font-medium">{t("budget.remaining")}</p>
            <div className="bg-white rounded-[8px] p-[6px]">
              <svg className="size-[16px] text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            </div>
          </div>
          <h3 className="text-[24px] font-['Inter:Semi_Bold',sans-serif] font-semibold text-green-600">
            {formatVND(totalRemaining)}
          </h3>
          <p className="text-[12px] text-black/50 mt-[8px]">{t("budget.toSpend")}</p>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white rounded-[20px] p-[24px]">
        <div className="flex gap-[8px] mb-[24px]">
          {([
            { key: "overview", label: t("budget.tabOverview") },
            { key: "categories", label: t("budget.tabCategories") },
            { key: "monthly", label: t("budget.tabMonthly") },
          ]).map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key as typeof activeTab)}
              className={`px-[14px] py-[8px] rounded-[8px] text-[14px] font-medium transition-colors ${
                activeTab === tab.key
                  ? "bg-[#8b5cf6] text-white"
                  : "bg-[rgba(0,0,0,0.03)] text-black hover:bg-[rgba(0,0,0,0.05)]"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {activeTab === "overview" && (
          <div className="space-y-[16px]">
            {/* Overall Budget Progress */}
            <div>
              <div className="flex items-center justify-between mb-[12px]">
                <p className="text-[14px] font-medium text-black">{t("budget.progress")}</p>
                <p className="text-[14px] font-semibold text-black">
                  {formatVND(totalSpent)} / {formatVND(totalBudget)}
                </p>
              </div>
              <div className="w-full bg-gray-100 rounded-full h-[12px] overflow-hidden">
                <div
                  className="bg-gradient-to-r from-blue-500 to-purple-500 h-full transition-all duration-300 rounded-full"
                  style={{ width: `${Math.min(totalPercentage, 100)}%` }}
                />
              </div>
            </div>

            {/* AI Insight Mini Card */}
            <div className="rounded-[18px] bg-gradient-to-r from-violet-50 via-white to-orange-50 border border-[rgba(139,92,246,0.10)] px-[16px] py-[14px] shadow-sm">
              <div className="flex items-center gap-[12px]">
                <div className="flex size-11 shrink-0 items-center justify-center rounded-full bg-white shadow-sm">
                  <span className="text-[20px]">💡</span>
                </div>

                <p className="min-w-0 flex-1 text-[14px] leading-6 text-[rgba(0,0,0,0.74)]">
                  {totalPercentage > 90
                    ? t("budget.aiWarning")
                    : totalPercentage > 70
                    ? t("budget.aiNormal")
                    : t("budget.aiSafe")}
                </p>

                <button
                  type="button"
                  onClick={onNavigateToAI}
                  className="shrink-0 whitespace-nowrap text-[13px] font-semibold text-[#8b5cf6] transition-colors hover:text-[#7c3aed]"
                >
                  {t("budget.askAI")}
                </button>
              </div>
            </div>

            {/* Budget Breakdown */}
            <div className="mt-[24px]">
              <h4 className="text-[16px] font-semibold text-black mb-[16px]">{t("budget.categoryBreakdown")}</h4>
              {budgets.length === 0 ? (
                <div className="text-center py-8 text-gray-500">
                  <p>{t("budget.noBudget")}</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {budgets.map((budget) => {
                    const percentage = (budget.spentAmount / budget.limitAmount) * 100;
                    const ratio = Math.min(percentage, 100);

                    return (
                      <div
                        key={budget.id}
                        className={`flex flex-col gap-3 rounded-2xl border border-gray-100 bg-white p-4 shadow-sm transition-colors hover:bg-gray-50 ${getListRowBorder(percentage)}`}
                      >
                        <div className="flex items-center gap-4">
                          <div className="flex size-11 items-center justify-center rounded-full bg-purple-50">
                            <span className="text-lg">📊</span>
                          </div>

                          <div className="min-w-0 flex-1">
                            <p className="font-medium text-gray-800">{budget.categoryName}</p>
                            <div className="mt-2 h-3 w-full overflow-hidden rounded-full bg-gray-100">
                              <div
                                className={`h-full rounded-full ${getListProgressColor(percentage)}`}
                                style={{ width: `${ratio}%` }}
                              />
                            </div>
                          </div>

                          <div className="min-w-[160px] text-right">
                            <p className="text-sm font-medium text-gray-800">
                              {formatVND(budget.spentAmount)} / {formatVND(budget.limitAmount)}
                            </p>
                            <p className={`mt-1 text-xs font-semibold ${getStatColor(percentage)}`}>
                              {percentage.toFixed(1)}% {t("budget.used")}
                            </p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        )}

        {activeTab === "categories" && (
          <div className="space-y-[12px]">
            {budgets.length === 0 ? (
              <div className="text-center py-8 text-gray-500">
                <p>Chưa có ngân sách nào.</p>
              </div>
            ) : (
              budgets.map((budget) => {
                const percentage = (budget.spentAmount / budget.limitAmount) * 100;
                return (
                  <div
                    key={budget.id}
                    className="border border-[rgba(0,0,0,0.06)] rounded-[12px] p-[16px] hover:border-[rgba(0,0,0,0.1)] transition-colors"
                  >
                    <div className="flex items-center gap-[12px] mb-[12px]">
                      <div className="bg-purple-50 rounded-[10px] size-[40px] flex items-center justify-center text-[20px]">
                        📊
                      </div>
                      <div className="flex-1">
                        <p className="text-[14px] font-medium text-black">{budget.categoryName}</p>
                        <p className={`text-[12px] font-semibold ${getStatColor(percentage)}`}>
                          {percentage.toFixed(1)}% {t("budget.used")}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="text-[14px] font-semibold text-black">{formatVND(budget.spentAmount)}</p>
                        <p className="text-[12px] text-[rgba(0,0,0,0.5)]">/ {formatVND(budget.limitAmount)}</p>
                      </div>
                      {/* Edit & Delete Buttons */}
                      <div className="flex gap-[8px]">
                        <button
                          onClick={() => openEditBudgetModal(budget)}
                          className="px-[8px] py-[6px] bg-blue-50 hover:bg-blue-100 text-blue-600 rounded-[6px] text-[12px] font-medium transition-colors"
                        >
                          {t("budget.edit")}
                        </button>
                        <button
                          onClick={() => handleDeleteBudget(budget.id)}
                          className="px-[8px] py-[6px] bg-red-50 hover:bg-red-100 text-red-600 rounded-[6px] text-[12px] font-medium transition-colors"
                        >
                          {t("budget.delete")}
                        </button>
                      </div>
                    </div>
                    <div className="w-full bg-gray-100 rounded-full h-[8px] overflow-hidden">
                      <div
                        className={`${getListProgressColor(percentage)} h-full transition-all duration-300 rounded-full`}
                        style={{ width: `${Math.min(percentage, 100)}%` }}
                      />
                    </div>
                    {percentage > 100 && (
                      <p className="text-[12px] text-red-600 mt-[8px]">⚠️ Vượt quá ngân sách {formatVND(budget.spentAmount - budget.limitAmount)}</p>
                    )}
                  </div>
                );
              })
            )}
          </div>
        )}

        {activeTab === "monthly" && (
          <div className="space-y-[16px]">
            <div>
              <h4 className="text-[14px] font-medium text-black mb-[12px]">{t("budget.monthlyTrend")}</h4>
              
              {monthlyChartData.length === 0 ? (
                <div className="text-center py-8 text-gray-500">
                  <p>{t("budget.noMonthlyData")}</p>
                </div>
              ) : (
                <div className="bg-white border border-gray-200 rounded-[12px] p-[16px]">
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={monthlyChartData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <Tooltip
                        formatter={(value: number) => formatVND(value)}
                        contentStyle={{
                          backgroundColor: "#fff",
                          border: "1px solid #ccc",
                          borderRadius: "8px",
                        }}
                      />
                      <Legend />
                      <Bar dataKey="hạn_mức" fill="#8b5cf6" name={t("budget.limit")} radius={[8, 8, 0, 0]} />
                      <Bar dataKey="thực_tế" fill="#ef4444" name={t("budget.actual")} radius={[8, 8, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>

                  {/* Explanation */}
                  <div className="mt-[16px] p-[12px] bg-blue-50 border border-blue-200 rounded-[8px]">
                    <p className="text-[13px] text-blue-800">
                      <strong>{t("budget.note")}</strong> {t("budget.chartDesc", { months: monthlyChartData.length.toString() })}
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Add Budget Button */}
      <div className="bg-white rounded-[20px] p-[24px]">
        <button
          onClick={() => {
            setEditingBudgetId(null);
            setFormData({ categoryId: "", limitAmount: "", month: new Date().toISOString().slice(0, 7) });
            setIsModalOpen(true);
          }}
          className="w-full bg-[#8b5cf6] hover:bg-[#7c3aed] text-white py-[12px] rounded-[12px] text-[14px] font-semibold transition-colors"
        >
          {t("budget.createBtnLarge")}
        </button>
      </div>

      {/* MODAL - Tạo Ngân Sách Mới */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4 animate-fade-in">
          <div className="bg-white rounded-[20px] w-full max-w-[540px] shadow-2xl flex flex-col max-h-[90vh] overflow-hidden transition-all">
            
            {/* 1. CỐ ĐỊNH MODAL HEADER */}
            <div className="p-[24px] pb-4 border-b border-gray-100 flex items-center justify-between">
              <h2 className="text-[20px] font-semibold text-black flex items-center gap-2">
                {editingBudgetId !== null ? t("budget.editTitle") : t("budget.createTitle")}
              </h2>
              <button 
                onClick={() => {
                  setIsModalOpen(false);
                  setAiModeOpen(false);
                  setEditingBudgetId(null);
                  setFormData({ categoryId: "", limitAmount: "", month: new Date().toISOString().slice(0, 7) });
                  setAiWarningMessage(null);
                  setAiIsUsingFallback(false);
                }}
                className="text-gray-400 hover:text-gray-600 transition-colors text-xl p-1"
              >
                ✕
              </button>
            </div>

            {/* 2. THÂN MODAL (CHO PHÉP CUỘN MƯỢT MÀ BÊN TRONG KHI BỊ TRÀN) */}
            <div className="flex-1 overflow-y-auto p-[24px] space-y-[20px] scrollbar-thin">
              
              {/* Form nhập liệu chính (gán ID để kích hoạt nút submit bên ngoài) */}
              <form id="budget-main-form" onSubmit={handleAddBudget} className="space-y-[16px]">
                {/* Chọn danh mục */}
                <div>
                  <label className="block text-[14px] font-medium text-gray-700 mb-[8px]">{t("budget.categoryToApply")}</label>
                  <select
                    value={formData.categoryId}
                    onChange={(e) => {
                      if (e.target.value === "NEW_CATEGORY") {
                        openCreateCategoryModal();
                        return;
                      }

                      setFormData({ ...formData, categoryId: e.target.value });
                    }}
                    className="w-full border border-gray-300 rounded-[10px] px-[14px] py-[11px] text-[14px] focus:outline-none focus:ring-2 focus:ring-purple-500 bg-gray-50/50"
                    required
                  >
                    <option value="">{t("budget.selectCategory")}</option>
                    {categories.map((cat) => (
                      <option key={cat.id} value={String(cat.id)}>
                        {cat.icon ? `${cat.icon} ${cat.name}` : cat.name}
                      </option>
                     ))}
                    <option value="NEW_CATEGORY" className="text-purple-600 font-semibold">
                      {t("budget.addNewCategory")}
                    </option>
                  </select>
                </div>

                {/* Nhập số tiền hạn mức */}
                <div>
                  <label className="block text-[14px] font-medium text-gray-700 mb-[8px]">{t("budget.limitAmount")}</label>
                  <input
                    type="text"
                    inputMode="numeric"
                    value={formatMoneyInput(formData.limitAmount)}
                    onChange={(e) => setFormData({ ...formData, limitAmount: normalizeMoneyInput(e.target.value) })}
                    className={`w-full border rounded-[10px] px-[14px] py-[11px] text-[14px] focus:outline-none focus:ring-2 font-medium ${
                      isEditBudgetInvalid
                        ? "border-red-400 focus:ring-red-500 bg-red-50"
                        : "border-gray-300 focus:ring-purple-500 bg-white"
                    }`}
                    placeholder="Ví dụ: 2.000.000"
                    required
                  />
                  {editingBudgetId !== null && editingBudget && (
                    <div className="mt-2 space-y-2 text-[12px] text-gray-600">
                      <div>
                        <p>Chi tiêu thực tế: <span className="font-semibold text-gray-900">{formatVND(editingBudget.spentAmount)}</span></p>
                        {isEditBudgetTooSmall && (
                          <p className="text-red-600 font-medium mt-1">
                            ⚠️ Hạn mức không được nhỏ hơn chi tiêu thực tế
                          </p>
                        )}
                      </div>
                      <div className="border-t border-gray-200 pt-2">
                        <p>Tổng ngân sách hiện tại: <span className="font-semibold text-gray-900">{formatVND(currentTotalBudget)}</span></p>
                        {editAmountValue > 0 && (
                          <p>Tổng ngân sách mới sẽ là: <span className={`font-semibold ${isEditBudgetExceedsTotal ? "text-red-600" : "text-green-600"}`}>
                            {formatVND(newTotalBudgetIfEdited)}
                          </span></p>
                        )}
                        {isEditBudgetExceedsTotal && (
                          <p className="text-red-600 font-medium mt-1">
                            ⚠️ Vượt quá tổng ngân sách cho phép
                          </p>
                        )}
                      </div>
                    </div>
                  )}
                </div>

                {/* Chọn tháng áp dụng */}
                <div>
                  <label className="block text-[14px] font-medium text-gray-700 mb-[8px]">{t("budget.monthToApply")}</label>
                  <input
                    type="month"
                    value={formData.month}
                    onChange={(e) => setFormData({ ...formData, month: e.target.value })}
                    className="w-full border border-gray-300 rounded-[10px] px-[14px] py-[11px] text-[14px] focus:outline-none focus:ring-2 focus:ring-purple-500"
                    required
                  />
                </div>
              </form>

              {/* VÙNG CHỨA TÍNH NĂNG AI (CHỈ HIỆN KHI BẤM NÚT GỢI Ý) */}
              {aiModeOpen && (
                <div className="border-t border-dashed border-gray-200 pt-5 space-y-4 animate-fade-in">
                  <div className="flex items-center gap-2 text-purple-700 font-semibold text-[15px]">
                    <span>✨</span> AI Phân Bổ Tài Chính Thông Minh
                  </div>
                  
                  <div>
                    <p className="mb-2 text-[13px] font-medium text-gray-600">Tỉnh / Thành phố đang sinh sống</p>
                    <select
                      value={aiLocation}
                      onChange={(e) => setAiLocation(e.target.value)}
                      className="w-full border border-gray-300 rounded-[10px] px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 bg-white"
                    >
                      <option value="">-- Chọn Tỉnh / Thành phố --</option>
                      {[
                        "Hà Nội", "Hồ Chí Minh", "Hải Phòng", "Đà Nẵng", "Cần Thơ", 
                        "An Giang", "Bà Rịa - Vũng Tàu", "Bạc Liêu", "Bắc Giang", "Bắc Kạn", 
                        "Bắc Ninh", "Bến Tre", "Bình Dương", "Bình Định", "Bình Phước", 
                        "Bình Thuận", "Cà Mau", "Cao Bằng", "Đắk Lắk", "Đắk Nông", 
                        "Điện Biên", "Đồng Nai", "Đồng Tháp", "Gia Lai", "Hà Giang", 
                        "Hà Nam", "Hà Tĩnh", "Hải Dương", "Hậu Giang", "Hòa Bình", 
                        "Hưng Yên", "Khánh Hòa", "Kiên Giang", "Kon Tum", "Lai Châu", 
                        "Lâm Đồng", "Lạng Sơn", "Lào Cai", "Long An", "Nam Định", 
                        "Nghệ An", "Ninh Bình", "Ninh Thuận", "Phú Thọ", "Phú Yên", 
                        "Quảng Bình", "Quảng Nam", "Quảng Ngãi", "Quảng Ninh", "Quảng Trị", 
                        "Sóc Trăng", "Sơn La", "Tây Ninh", "Thái Bình", "Thái Nguyên", 
                        "Thanh Hóa", "Thừa Thiên Huế", "Tiền Giang", "Trà Vinh", "Tuyên Quang", 
                        "Vĩnh Long", "Vĩnh Phúc", "Yên Bái"
                      ].map(province => (
                        <option key={province} value={province}>{province}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <p className="mb-2 text-[13px] font-medium text-gray-600">Nhập tổng thu nhập hàng tháng của bạn</p>
                    <div className="flex gap-2">
                      <input
                        type="text"
                        inputMode="numeric"
                        value={formatMoneyInput(aiIncome)}
                        onChange={(e) => setAiIncome(normalizeMoneyInput(e.target.value))}
                        placeholder="Ví dụ: 6.000.000"
                        className="flex-1 border border-gray-300 rounded-[10px] px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                      />
                      <button
                        type="button"
                        onClick={fetchAiSuggestions}
                        disabled={aiLoading}
                        className="bg-green-600 hover:bg-green-700 transition-colors text-white px-4 py-2 rounded-[10px] text-sm font-semibold disabled:bg-gray-400"
                      >
                        {aiLoading ? "Đang phân tích..." : "Xem gợi ý"}
                      </button>
                    </div>
                  </div>

                  <div>
                    <p className="mb-2 text-[13px] font-medium text-gray-600">Số tiền muốn tiết kiệm (VND)</p>
                    <input
                      type="text"
                      inputMode="numeric"
                      value={formatMoneyInput(aiSavingsTarget)}
                      onChange={(e) => setAiSavingsTarget(normalizeMoneyInput(e.target.value))}
                      placeholder="Ví dụ: 2.000.000"
                      className="w-full border border-gray-300 rounded-[10px] px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                  </div>

                  {/* DANH SÁCH THẺ GỢI Ý ĐÃ ĐƯỢC LÀM ĐẸP (GRID 2 CỘT) */}
                  {aiWarningMessage && (
                    <div className="mt-3 p-3 border border-orange-300 rounded-[14px] bg-orange-50 shadow-sm">
                      <p className="text-[13px] leading-5 text-orange-900 font-medium">{aiWarningMessage}</p>
                      {aiIsUsingFallback && (
                        <p className="text-[11px] text-orange-700 mt-1 italic">💡 Hệ thống đang sử dụng gợi ý mặc định. Bạn có thể tùy chỉnh các con số này theo ý muốn.</p>
                      )}
                    </div>
                  )}
                  
                  {aiSuggestions.length > 0 && (
                    <div className="space-y-3 pt-2">
                      <p className="text-[12px] font-bold text-gray-400 uppercase tracking-wider">Phân bổ chi tiêu thông minh</p>
                      
                      {/* Tổng ti tiền có thể chi tiêu */}
                      <div className="p-3 border border-blue-100 rounded-[14px] bg-blue-50/60 shadow-sm">
                        <p className="text-sm font-semibold text-blue-900">💰 Hạn mức chi tiêu khả dụng</p>
                        <p className="text-[11px] text-blue-700 font-medium">Thu nhập - Tiết kiệm = Chi tiêu được</p>
                        <p className="font-bold text-blue-700 text-lg mt-1">{formatVND(spendableBudget)}</p>
                      </div>

                      {/* Danh mục gợi ý với input chỉnh sửa */}
                      <div className="space-y-2">
                        <p className="text-[12px] font-medium text-gray-600">Các danh mục và số tiền (cho phép chỉnh sửa):</p>
                        <div className="space-y-2 max-h-[300px] overflow-y-auto">
                          {aiSuggestions.map((item, idx) => (
                            <div
                              key={`${item.categoryId ?? "no-id"}-${item.categoryName}-${idx}`}
                              className="p-3 border border-gray-200 rounded-[10px] bg-white shadow-sm"
                            >
                              <div className="flex items-start gap-3">
                                <input
                                  type="checkbox"
                                  checked={item.checked}
                                  onChange={() => toggleAiSuggestion(idx)}
                                  className="mt-1 w-4 h-4 cursor-pointer accent-purple-600"
                                />
                                <div className="flex-1 min-w-0">
                                  <p className="text-sm font-medium text-gray-800">{item.categoryName}</p>
                                  <p className="text-[11px] text-gray-500 mt-1">Gợi ý ban đầu: {formatVND(item.suggestedAmount)}</p>
                                  <div className="mt-2 flex items-center gap-2">
                                    <label className="text-[11px] font-medium text-gray-600">Số tiền:</label>
                                    <input
                                      type="text"
                                      inputMode="numeric"
                                      value={formatMoneyInput(String(item.manuallyAmount))}
                                      onChange={(e) => updateAiSuggestionAmount(idx, e.target.value)}
                                      disabled={!item.checked}
                                      placeholder="0"
                                      className={`flex-1 w-20 border rounded-[6px] px-2 py-1 text-[12px] focus:outline-none focus:ring-2 focus:ring-purple-500 ${
                                        item.checked
                                          ? "border-gray-300 bg-white"
                                          : "border-gray-200 bg-gray-100 opacity-60"
                                      }`}
                                    />
                                    <span className="text-[11px] text-gray-500">đ</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Quỹ dự phòng tự do - Động hiện thị */}
                      <div className={`p-3 border rounded-[14px] shadow-sm ${
                        isOverBudget
                          ? "border-red-300 bg-red-50"
                          : spareFund > 0
                          ? "border-green-300 bg-green-50"
                          : "border-gray-300 bg-gray-50"
                      }`}>
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-sm font-semibold text-gray-800">🏦 Quỹ dự phòng tự do</p>
                            <p className="text-[11px] text-gray-600 mt-1">
                              = Hạn mức - Tổng chi tiêu được chọn
                            </p>
                          </div>
                          <div className="text-right">
                            <p className={`font-bold text-lg ${
                              isOverBudget
                                ? "text-red-700"
                                : spareFund > 0
                                ? "text-green-700"
                                : "text-gray-700"
                            }`}>
                              {formatVND(Math.abs(spareFund))}{isOverBudget ? " ⚠️" : ""}
                            </p>
                            <p className="text-[11px] text-gray-500 mt-1">
                              {isOverBudget ? "Âm tiền" : "Dự phòng"}
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Lỗi validate */}
                      {isOverBudget && (
                        <div className="p-3 border border-red-300 rounded-[10px] bg-red-50">
                          <p className="text-[13px] text-red-800 font-medium">
                            ⚠️ Tổng chi tiêu vượt quá hạn mức lương khả dụng. Vui lòng cân đối lại các mục.
                          </p>
                        </div>
                      )}

                      <div className="flex justify-end">
                        <button 
                          type="button"
                          onClick={applyAiSuggestions}
                          disabled={selectedAiSuggestionCount === 0 || isOverBudget}
                          className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all shadow-sm ${
                            selectedAiSuggestionCount === 0 || isOverBudget
                              ? "bg-gray-400 text-gray-600 cursor-not-allowed"
                              : "bg-[#8b5cf6] hover:bg-[#7c3aed] text-white shadow-purple-200"
                          }`}
                        >
                          ✓ Áp dụng ({selectedAiSuggestionCount} danh mục + quỹ dự phòng)
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* 3. CỐ ĐỊNH MODAL FOOTER Ở ĐÁY MÀN HÌNH */}
            <div className="p-[24px] pt-4 border-t border-gray-100 bg-gray-50 flex flex-col sm:flex-row gap-3">
              <button
                type="button"
                onClick={() => {
                  setIsModalOpen(false);
                  setAiModeOpen(false);
                  setEditingBudgetId(null);
                  setFormData({ categoryId: "", limitAmount: "", month: new Date().toISOString().slice(0, 7) });
                }}
                className="w-full sm:w-1/4 bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 py-[10px] rounded-[10px] text-[14px] font-medium transition-colors order-2 sm:order-1"
              >
                Hủy
              </button>
              
              <div className="flex-1 flex flex-col sm:flex-row gap-2 order-1 sm:order-2">
                <button
                 type="button"
                 onClick={() => setAiModeOpen(!aiModeOpen)}
                 className={`flex-1 py-[10px] rounded-[10px] text-[14px] font-medium transition-colors border flex items-center justify-center gap-1.5 ${
                   aiModeOpen 
                     ? "bg-purple-100 text-purple-800 border-purple-300 hover:bg-purple-200" 
                     : "bg-amber-50 text-amber-800 border-amber-200 hover:bg-amber-100"
                 }`}
               >
                 {aiModeOpen ? "✕ Đóng bảng AI" : "✨ Nhờ AI phân bổ"}
               </button>
                
                <button
                  type="submit"
                  form="budget-main-form"
                  disabled={isSubmitting || isEditBudgetInvalid}
                  className="flex-1 bg-[#8b5cf6] hover:bg-[#7c3aed] disabled:bg-gray-400 text-white py-[10px] rounded-[10px] text-[14px] font-semibold transition-colors shadow-sm"
                >
                  {isSubmitting ? "Đang lưu..." : editingBudgetId !== null ? "Lưu thay đổi" : "Lưu cấu hình"}
                </button>
              </div>
            </div>

          </div>
        </div>
      )}

      <CategoryCreateModal
        isOpen={isNewCategoryModalOpen}
        userId={getUserId()}
        onClose={closeCreateCategoryModal}
        onCreated={handleCategoryCreated}
      />
    </div>
  );
}
