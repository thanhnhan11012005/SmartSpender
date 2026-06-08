import { useFormat } from "../../utils/useFormat";
import { useTranslation } from "../../hooks/useTranslation";

interface FinanceStatsCardsProps {
  totalBalance: number;
  monthlyIncome: number;
  incomeChange: number;
  monthlyExpense: number;
  expenseChange: number;
  remainingBudget: number;
}

export default function FinanceStatsCards({
  totalBalance,
  monthlyIncome,
  incomeChange,
  monthlyExpense,
  expenseChange,
  remainingBudget,
}: FinanceStatsCardsProps) {
  const { formatCurrency } = useFormat();
  const { t } = useTranslation();

  return (
    <>
      {/* Total Balance */}
      <div className="relative overflow-hidden rounded-[20px] bg-gradient-to-br from-indigo-500 to-purple-600 p-[24px] shadow-lg shadow-indigo-200 transition-transform duration-300 hover:-translate-y-1">
        {/* Glassmorphism pattern */}
        <div className="absolute -right-4 -top-4 size-32 rounded-full bg-white/10 blur-2xl"></div>
        <div className="absolute -bottom-8 -left-8 size-40 rounded-full bg-black/10 blur-2xl"></div>
        
        <div className="relative z-10 flex h-full flex-col justify-between gap-[16px]">
          <div className="flex items-center justify-between">
            <p className="font-['Inter'] text-[14px] font-medium text-white/80">{t("stats.balance")}</p>
            <div className="flex size-10 items-center justify-center rounded-full bg-white/20 backdrop-blur-md">
              <svg className="size-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
              </svg>
            </div>
          </div>
          <div>
            <h2 className="font-['Inter'] text-[28px] font-bold text-white tracking-tight">
              {formatCurrency(totalBalance)}
            </h2>
            <p className="mt-1 font-['Inter'] text-[12px] text-white/70">{t("stats.allAccounts")}</p>
          </div>
        </div>
      </div>

      {/* Monthly Income */}
      <div className="relative overflow-hidden rounded-[20px] bg-white p-[24px] shadow-sm ring-1 ring-gray-100 transition-all duration-300 hover:shadow-md">
        <div className="flex h-full flex-col justify-between gap-[16px]">
          <div className="flex items-center justify-between">
            <p className="font-['Inter'] text-[14px] font-medium text-gray-500">{t("stats.monthlyIncome")}</p>
            <div className="flex size-10 items-center justify-center rounded-full bg-emerald-50">
              <svg className="size-5 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            </div>
          </div>
          <div>
            <h2 className="font-['Inter'] text-[28px] font-bold text-gray-900 tracking-tight">
              {formatCurrency(monthlyIncome)}
            </h2>
            <div className="mt-2 flex items-center gap-2">
              <div className={`flex items-center justify-center rounded-full px-2 py-0.5 ${incomeChange >= 0 ? 'bg-emerald-50 text-emerald-600' : 'bg-red-50 text-red-600'}`}>
                <span className="font-['Inter'] text-[12px] font-medium">{incomeChange >= 0 ? '+' : ''}{incomeChange}%</span>
              </div>
              <p className="font-['Inter'] text-[12px] text-gray-400">{t("stats.vsLastMonth")}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Monthly Expense */}
      <div className="relative overflow-hidden rounded-[20px] bg-white p-[24px] shadow-sm ring-1 ring-gray-100 transition-all duration-300 hover:shadow-md">
        <div className="flex h-full flex-col justify-between gap-[16px]">
          <div className="flex items-center justify-between">
            <p className="font-['Inter'] text-[14px] font-medium text-gray-500">{t("stats.monthlyExpense")}</p>
            <div className="flex size-10 items-center justify-center rounded-full bg-rose-50">
              <svg className="size-5 text-rose-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 17h8m0 0v-8m0 8l-8-8-4 4-6-6" />
              </svg>
            </div>
          </div>
          <div>
            <h2 className="font-['Inter'] text-[28px] font-bold text-gray-900 tracking-tight">
              {formatCurrency(monthlyExpense)}
            </h2>
            <div className="mt-2 flex items-center gap-2">
              <div className={`flex items-center justify-center rounded-full px-2 py-0.5 ${expenseChange <= 0 ? 'bg-emerald-50 text-emerald-600' : 'bg-rose-50 text-rose-600'}`}>
                <span className="font-['Inter'] text-[12px] font-medium">{expenseChange > 0 ? '+' : ''}{expenseChange}%</span>
              </div>
              <p className="font-['Inter'] text-[12px] text-gray-400">{t("stats.vsLastMonth")}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Remaining Budget */}
      <div className="relative overflow-hidden rounded-[20px] bg-gradient-to-br from-amber-400 to-orange-500 p-[24px] shadow-lg shadow-orange-200 transition-transform duration-300 hover:-translate-y-1">
        <div className="absolute -right-4 -bottom-4 size-32 rounded-full bg-white/10 blur-2xl"></div>
        <div className="absolute -left-8 -top-8 size-40 rounded-full bg-black/10 blur-2xl"></div>

        <div className="relative z-10 flex h-full flex-col justify-between gap-[16px]">
          <div className="flex items-center justify-between">
            <p className="font-['Inter'] text-[14px] font-medium text-white/90">{t("stats.remainingBudget")}</p>
            <div className="flex size-10 items-center justify-center rounded-full bg-white/20 backdrop-blur-md">
              <svg className="size-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
          </div>
          <div>
            <h2 className="font-['Inter'] text-[28px] font-bold text-white tracking-tight">
              {formatCurrency(remainingBudget)}
            </h2>
            <p className="mt-1 font-['Inter'] text-[12px] text-white/80">{t("stats.allCategories")}</p>
          </div>
        </div>
      </div>
    </>
  );
}
