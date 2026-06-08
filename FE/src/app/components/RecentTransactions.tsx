import { useFormat } from "../../utils/useFormat";
import { useTranslation } from "../../hooks/useTranslation";
interface RecentTransactionsProps {
  transactions: Array<any>;
  onViewAll: () => void;
}

export default function RecentTransactions({ transactions, onViewAll }: RecentTransactionsProps) {
  const { formatCurrency, formatDate } = useFormat();
  const { t } = useTranslation();

  return (
    <div className="flex h-full flex-col rounded-[24px] bg-white p-6 shadow-sm ring-1 ring-gray-100">
      <div className="mb-6 flex items-center justify-between">
        <h3 className="font-['Inter'] text-[18px] font-semibold text-gray-900">{t("recent.title")}</h3>
        <button 
          onClick={onViewAll}
          className="font-['Inter'] text-[14px] font-medium text-indigo-600 hover:text-indigo-700"
        >
          {t("recent.viewAll")}
        </button>
      </div>

      {transactions && transactions.length > 0 ? (
        <div className="flex flex-col gap-4">
          {transactions.map((tx, idx) => (
            <div key={tx.id || idx} className="group flex items-center justify-between rounded-2xl p-3 transition-colors hover:bg-gray-50">
              <div className="flex items-center gap-4">
                <div 
                  className="flex size-12 items-center justify-center rounded-xl text-[24px] shadow-sm"
                  style={{ backgroundColor: `${tx.category?.color || '#f3f4f6'}33` }} // 20% opacity background
                >
                  {tx.category?.icon || (tx.type === "income" ? "💰" : "💸")}
                </div>
                <div className="flex flex-col">
                  <p className="font-['Inter'] text-[15px] font-semibold text-gray-900">
                    {tx.category?.name || (tx.type === "income" ? t("recent.income") : t("recent.expense"))}
                  </p>
                  <div className="flex items-center gap-2">
                    <p className="font-['Inter'] text-[13px] text-gray-500">
                      {tx.description || t("recent.noDescription")}
                    </p>
                    <span className="size-1 rounded-full bg-gray-300"></span>
                    <p className="font-['Inter'] text-[12px] text-gray-400">
                      {tx.transactionDate ? formatDate(tx.transactionDate) : "N/A"}
                    </p>
                  </div>
                </div>
              </div>
              <div className="text-right">
                <p className={`font-['Inter'] text-[15px] font-bold ${tx.type === 'income' ? 'text-emerald-500' : 'text-gray-900'}`}>
                  {tx.type === 'income' ? '+' : '-'}{formatCurrency(tx.amount)}
                </p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="flex flex-1 items-center justify-center text-gray-400">
          {t("recent.noTransactions")}
        </div>
      )}
    </div>
  );
}
