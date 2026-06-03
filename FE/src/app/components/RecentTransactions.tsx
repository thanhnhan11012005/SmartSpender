import { formatVND } from "../../utils/currency";

type RecentTransaction = {
  id: number;
  name: string;
  location: string;
  amount: number;
  type: "income" | "expense";
};

export default function RecentTransactions({ onViewAll }: { onViewAll?: () => void } = {}) {
  const transactions: RecentTransaction[] = [
    { id: 1, name: "Lương", location: "Thu nhập hàng tháng", amount: 15_000_000, type: "income" },
    { id: 2, name: "Siêu thị", location: "Mua sắm", amount: -850_000, type: "expense" },
    { id: 3, name: "Surf Bar", location: "Quy Nhơn, Gia Lai", amount: -200_000, type: "expense" },
    { id: 4, name: "Netflix", location: "Giải trí", amount: -150_000, type: "expense" },
    { id: 5, name: "Dự án tự do", location: "Thu nhập phụ", amount: 5_000_000, type: "income" },
  ];

  return (
    <div className="bg-white relative rounded-[20px] p-[24px]">
      <div className="content-stretch flex flex-col gap-[16px] items-start relative w-full">
          <h3 className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] not-italic relative shrink-0 text-[18px] text-black w-full" style={{ fontFeatureSettings: "'ss01', 'cv01'" }}>
          Giao dịch gần đây
        </h3>

        <div className="content-stretch flex flex-col gap-[12px] items-start relative w-full">
          {transactions.map((transaction) => (
            <div key={transaction.id} className="content-stretch flex items-center justify-between relative w-full border-b border-[rgba(0,0,0,0.05)] pb-[12px] last:border-0 last:pb-0">
              <div className="content-stretch flex items-center gap-[12px] relative">
                <div className={`content-stretch flex items-center justify-center relative rounded-[12px] shrink-0 size-[40px] ${
                  transaction.type === "income" ? "bg-[#dcfce7]" : "bg-[#fee2e2]"
                }`}>
                  {transaction.type === "income" ? (
                    <svg className="size-[20px] text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                  ) : (
                    <svg className="size-[20px] text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                    </svg>
                  )}
                </div>
                <div className="content-stretch flex flex-col items-start relative">
                  <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[14px] text-black" style={{ fontFeatureSettings: "'ss01', 'cv01'" }}>
                    {transaction.name}
                  </p>
                  <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[12px] text-[rgba(0,0,0,0.4)]" style={{ fontFeatureSettings: "'ss01', 'cv01'" }}>
                    {transaction.location}
                  </p>
                </div>
              </div>
              <p className={`[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[14px] ${
                transaction.type === "income" ? "text-[#10b981]" : "text-[#ef4444]"
              }`} style={{ fontFeatureSettings: "'ss01', 'cv01'" }}>
                {transaction.amount > 0 ? "+" : ""}{formatVND(Math.abs(transaction.amount))}
              </p>
            </div>
          ))}
        </div>

        <button
          type="button"
          onClick={onViewAll}
          className="content-stretch flex items-center justify-center relative w-full rounded-[12px] bg-[rgba(0,0,0,0.02)] px-[16px] py-[8px] hover:bg-[rgba(0,0,0,0.04)] transition-colors"
        >
          <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[14px] text-black" style={{ fontFeatureSettings: "'ss01', 'cv01'" }}>
            Xem tất cả
          </p>
        </button>
      </div>
    </div>
  );
}
