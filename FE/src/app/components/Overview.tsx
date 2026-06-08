import { useEffect, useState } from "react";
import FinanceStatsCards from "./FinanceStatsCards";
import CashFlowChart from "./CashFlowChart";
import RecentTransactions from "./RecentTransactions";
import ExpenseCategories from "./ExpenseCategories";
import { useTranslation } from "../../hooks/useTranslation";

export type DashboardData = {
  totalBalance: number;
  monthlyIncome: number;
  incomeChangePercentage: number;
  monthlyExpense: number;
  expenseChangePercentage: number;
  remainingBudget: number;
  cashFlow: Array<{ month: string; income: number; expense: number }>;
  expenseByCategory: Array<{ categoryName: string; color: string; amount: number; percentage: number }>;
  recentTransactions: Array<any>;
};

export default function Overview({ onNavigate }: { onNavigate: (page: any) => void }) {
  const { t } = useTranslation();
  const [data, setData] = useState<DashboardData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDashboard = async () => {
      try {
        const storedUser = localStorage.getItem("user");
        if (!storedUser) return;
        const user = JSON.parse(storedUser);
        
        const res = await fetch(`/api/dashboard?userId=${user.id}`);
        if (res.ok) {
          const result = await res.json();
          setData(result);
        }
      } catch (error) {
        console.error("Failed to fetch dashboard data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchDashboard();
  }, []);

  if (loading) {
    return (
      <div className="flex h-[80vh] items-center justify-center">
        <div className="size-10 animate-spin rounded-full border-4 border-indigo-500 border-t-transparent"></div>
      </div>
    );
  }

  if (!data) return <div className="p-4 text-center text-gray-500">{t("common.noData")}</div>;

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Stats Cards */}
      <div className="mb-4 sm:mb-6 lg:mb-[20px]">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4 xl:gap-[28px]">
          <FinanceStatsCards 
            totalBalance={data.totalBalance}
            monthlyIncome={data.monthlyIncome}
            incomeChange={data.incomeChangePercentage}
            monthlyExpense={data.monthlyExpense}
            expenseChange={data.expenseChangePercentage}
            remainingBudget={data.remainingBudget}
          />
        </div>
      </div>

      {/* Cash Flow Chart */}
      <div className="mb-4 sm:mb-6 lg:mb-[20px]">
        <CashFlowChart data={data.cashFlow} />
      </div>

      {/* Bottom Widgets */}
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-[20px]">
        <RecentTransactions transactions={data.recentTransactions} onViewAll={() => onNavigate("transactions")} />
        <ExpenseCategories categories={data.expenseByCategory} />
      </div>
    </div>
  );
}
