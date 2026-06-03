import { formatVND } from "../../utils/currency";

const BALANCE = 15_500_000;
const MONTHLY_INCOME = 4_200_000;
const MONTHLY_EXPENSE = 1_850_000;
const REMAINING_BUDGET = 2_350_000;

export default function FinanceStatsCards() {
  return (
    <>
      {/* Total Balance */}
      <div className="bg-[#edeefc] relative rounded-[20px]">
        <div className="content-stretch flex flex-col gap-[8px] items-start p-[24px] relative size-full">
          <div className="content-stretch flex flex-col items-start justify-center relative rounded-[12px] shrink-0 w-full">
              <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal h-[20px] leading-[20px] not-italic relative shrink-0 text-[14px] text-black w-full" style={{ fontFeatureSettings: "'ss01', 'cv01'" }}>
              Tổng số dư
            </p>
          </div>
          <div className="content-center flex flex-wrap gap-y-[8px] items-center justify-between relative rounded-[8px] shrink-0 w-full">
            <div className="content-stretch flex items-start relative shrink-0">
              <h2 className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-bold leading-[36px] not-italic relative shrink-0 text-[#1c1c1c] text-[28px]" style={{ fontFeatureSettings: "'ss01', 'cv01', 'cv11'" }}>
                {formatVND(BALANCE)}
              </h2>
            </div>
            <div className="content-stretch flex items-center justify-center relative shrink-0">
              <div className="bg-white content-stretch flex items-center justify-center p-[8px] relative rounded-[12px] shrink-0">
                <svg className="size-[24px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                </svg>
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-col items-start relative rounded-[8px] shrink-0 w-full">
            <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[12px] text-[rgba(0,0,0,0.4)] w-full" style={{ fontFeatureSettings: "'ss01', 'cv01'" }}>
              Số dư khả dụng
            </p>
          </div>
        </div>
      </div>

      {/* Monthly Income */}
      <div className="bg-[#e6f1fd] relative rounded-[20px]">
        <div className="content-stretch flex flex-col gap-[8px] items-start p-[24px] relative size-full">
          <div className="content-stretch flex flex-col items-start justify-center relative rounded-[12px] shrink-0 w-full">
              <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal h-[20px] leading-[20px] not-italic relative shrink-0 text-[14px] text-black w-full" style={{ fontFeatureSettings: "'ss01', 'cv01'" }}>
              Thu nhập hàng tháng
            </p>
          </div>
          <div className="content-center flex flex-wrap gap-y-[8px] items-center justify-between relative rounded-[8px] shrink-0 w-full">
            <div className="content-stretch flex items-start relative shrink-0">
              <h2 className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-bold leading-[36px] not-italic relative shrink-0 text-[#10b981] text-[28px]" style={{ fontFeatureSettings: "'ss01', 'cv01', 'cv11'" }}>
                +{formatVND(MONTHLY_INCOME)}
              </h2>
            </div>
            <div className="content-stretch flex items-center justify-center relative shrink-0">
              <div className="bg-white content-stretch flex items-center justify-center p-[8px] relative rounded-[12px] shrink-0">
                <svg className="size-[24px] text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
            </div>
          </div>
          <div className="content-stretch flex items-center gap-[8px] relative rounded-[8px] shrink-0 w-full">
            <div className="content-stretch flex items-center justify-center relative shrink-0">
              <div className="bg-[rgba(16,185,129,0.1)] content-stretch flex items-center justify-center px-[6px] py-[2px] relative rounded-[8px] shrink-0">
                <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[12px] text-[#10b981]" style={{ fontFeatureSettings: "'ss01', 'cv01'" }}>
                  +5%
                </p>
              </div>
            </div>
            <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[12px] text-[rgba(0,0,0,0.4)]" style={{ fontFeatureSettings: "'ss01', 'cv01'" }}>
              so với tháng trước
            </p>
          </div>
        </div>
      </div>

      {/* Monthly Expense */}
      <div className="bg-[#fee2e2] relative rounded-[20px]">
        <div className="content-stretch flex flex-col gap-[8px] items-start p-[24px] relative size-full">
          <div className="content-stretch flex flex-col items-start justify-center relative rounded-[12px] shrink-0 w-full">
            <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal h-[20px] leading-[20px] not-italic relative shrink-0 text-[14px] text-black w-full" style={{ fontFeatureSettings: "'ss01', 'cv01'" }}>
              Chi phí hàng tháng
            </p>
          </div>
          <div className="content-center flex flex-wrap gap-y-[8px] items-center justify-between relative rounded-[8px] shrink-0 w-full">
            <div className="content-stretch flex items-start relative shrink-0">
              <h2 className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-bold leading-[36px] not-italic relative shrink-0 text-[#ef4444] text-[28px]" style={{ fontFeatureSettings: "'ss01', 'cv01', 'cv11'" }}>
                -{formatVND(MONTHLY_EXPENSE)}
              </h2>
            </div>
            <div className="content-stretch flex items-center justify-center relative shrink-0">
              <div className="bg-white content-stretch flex items-center justify-center p-[8px] relative rounded-[12px] shrink-0">
                <svg className="size-[24px] text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 17h8m0 0v-8m0 8l-8-8-4 4-6-6" />
                </svg>
              </div>
            </div>
          </div>
          <div className="content-stretch flex items-center gap-[8px] relative rounded-[8px] shrink-0 w-full">
            <div className="content-stretch flex items-center justify-center relative shrink-0">
              <div className="bg-[rgba(239,68,68,0.1)] content-stretch flex items-center justify-center px-[6px] py-[2px] relative rounded-[8px] shrink-0">
                <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[12px] text-[#ef4444]" style={{ fontFeatureSettings: "'ss01', 'cv01'" }}>
                  -2%
                </p>
              </div>
            </div>
            <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[12px] text-[rgba(0,0,0,0.4)]" style={{ fontFeatureSettings: "'ss01', 'cv01'" }}>
              so với tháng trước
            </p>
          </div>
        </div>
      </div>

      {/* Remaining Budget */}
      <div className="bg-[#fef3c7] relative rounded-[20px]">
        <div className="content-stretch flex flex-col gap-[8px] items-start p-[24px] relative size-full">
          <div className="content-stretch flex flex-col items-start justify-center relative rounded-[12px] shrink-0 w-full">
            <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal h-[20px] leading-[20px] not-italic relative shrink-0 text-[14px] text-black w-full" style={{ fontFeatureSettings: "'ss01', 'cv01'" }}>
              Ngân sách còn lại
            </p>
          </div>
          <div className="content-center flex flex-wrap gap-y-[8px] items-center justify-between relative rounded-[8px] shrink-0 w-full">
            <div className="content-stretch flex items-start relative shrink-0">
              <h2 className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-bold leading-[36px] not-italic relative shrink-0 text-[#1c1c1c] text-[28px]" style={{ fontFeatureSettings: "'ss01', 'cv01', 'cv11'" }}>
                {formatVND(REMAINING_BUDGET)}
              </h2>
            </div>
            <div className="content-stretch flex items-center justify-center relative shrink-0">
              <div className="bg-white content-stretch flex items-center justify-center p-[8px] relative rounded-[12px] shrink-0">
                <svg className="size-[24px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-col items-start relative rounded-[8px] shrink-0 w-full">
            <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[12px] text-[rgba(0,0,0,0.4)] w-full" style={{ fontFeatureSettings: "'ss01', 'cv01'" }}>
              cho tháng này
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
