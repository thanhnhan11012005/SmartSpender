import { useState } from "react";
import { formatVND } from "../../utils/currency";

interface HoverState {
  index: number | null;
}

export default function ExpenseCategories() {
  const [hover, setHover] = useState<HoverState>({ index: null });
  const totalExpense = 1_850_000;

  const categories = [
    { name: "Ăn uống", percentage: 45, color: "#8b5cf6", amount: 832_500 },
    { name: "Mua sắm", percentage: 30, color: "#3b82f6", amount: 555_000 },
    { name: "Hóa đơn định kỳ", percentage: 25, color: "#10b981", amount: 462_500 },
  ];

  // Calculate stroke dasharray for each segment (45% + 30% + 25% = 100%)
  const circumference = 2 * Math.PI * 80; // r=80
  const strokeDasharray = categories.map((cat) => (cat.percentage / 100) * circumference);

  // Calculate offsets for each segment
  let offset = 0;
  const strokeDashoffset = strokeDasharray.map((dash) => {
    const current = offset;
    offset += dash;
    return -current;
  });

  return (
    <div className="bg-white relative rounded-[20px] p-[24px]">
      <div className="content-stretch flex flex-col gap-[20px] items-start relative w-full">
        <h3 className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] not-italic relative shrink-0 text-[18px] text-black w-full" style={{ fontFeatureSettings: "'ss01', 'cv01'" }}>
          Danh mục chi tiêu
        </h3>

        {/* Donut Chart */}
        <div className="content-stretch flex items-center justify-center relative w-full">
          <div className="relative size-[200px]">
            <svg className="size-full -rotate-90" viewBox="0 0 200 200" onMouseLeave={() => setHover({ index: null })}>
              {/* Ăn uống - 45% */}
              <circle
                cx="100"
                cy="100"
                r="80"
                fill="none"
                stroke={categories[0].color}
                strokeWidth="40"
                strokeDasharray={strokeDasharray[0]}
                strokeDashoffset={strokeDashoffset[0]}
                strokeLinecap="round"
                className={`transition-all duration-300 cursor-pointer ${hover.index === 0 ? "opacity-100 filter drop-shadow-lg" : "opacity-90 hover:opacity-100"}`}
                style={{
                  transform: hover.index === 0 ? "scale(1.05)" : "scale(1)",
                  transformOrigin: "100px 100px",
                  filter: hover.index === 0 ? "drop-shadow(0 4px 12px rgba(139, 92, 246, 0.3))" : "drop-shadow(0 2px 4px rgba(0, 0, 0, 0.05))",
                }}
                onMouseEnter={() => setHover({ index: 0 })}
              />

              {/* Mua sắm - 30% */}
              <circle
                cx="100"
                cy="100"
                r="80"
                fill="none"
                stroke={categories[1].color}
                strokeWidth="40"
                strokeDasharray={strokeDasharray[1]}
                strokeDashoffset={strokeDashoffset[1]}
                strokeLinecap="round"
                className={`transition-all duration-300 cursor-pointer ${hover.index === 1 ? "opacity-100 filter drop-shadow-lg" : "opacity-90 hover:opacity-100"}`}
                style={{
                  transform: hover.index === 1 ? "scale(1.05)" : "scale(1)",
                  transformOrigin: "100px 100px",
                  filter: hover.index === 1 ? "drop-shadow(0 4px 12px rgba(59, 130, 246, 0.3))" : "drop-shadow(0 2px 4px rgba(0, 0, 0, 0.05))",
                }}
                onMouseEnter={() => setHover({ index: 1 })}
              />

              {/* Hóa đơn định kỳ - 25% */}
              <circle
                cx="100"
                cy="100"
                r="80"
                fill="none"
                stroke={categories[2].color}
                strokeWidth="40"
                strokeDasharray={strokeDasharray[2]}
                strokeDashoffset={strokeDashoffset[2]}
                strokeLinecap="round"
                className={`transition-all duration-300 cursor-pointer ${hover.index === 2 ? "opacity-100 filter drop-shadow-lg" : "opacity-90 hover:opacity-100"}`}
                style={{
                  transform: hover.index === 2 ? "scale(1.05)" : "scale(1)",
                  transformOrigin: "100px 100px",
                  filter: hover.index === 2 ? "drop-shadow(0 4px 12px rgba(16, 185, 129, 0.3))" : "drop-shadow(0 2px 4px rgba(0, 0, 0, 0.05))",
                }}
                onMouseEnter={() => setHover({ index: 2 })}
              />

              {/* Center hole */}
              <circle cx="100" cy="100" r="60" fill="white" />
            </svg>

            {/* Center Text - Centered flex column */}
            <div className="absolute inset-0 flex flex-col items-center justify-center px-[12px]">
              <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic text-[12px] text-[rgba(0,0,0,0.4)] text-center" style={{ fontFeatureSettings: "'ss01', 'cv01'" }}>
                Tổng
              </p>
              <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-bold leading-[28px] not-italic text-black text-center break-words max-w-[90%]" style={{ fontFeatureSettings: "'ss01', 'cv01', 'cv11'", fontSize: "clamp(14px, 5vw, 18px)" }}>
                {formatVND(totalExpense)}
              </p>
            </div>
          </div>
        </div>

        {/* Legend */}
        <div className="content-stretch flex flex-col gap-[12px] items-start relative w-full">
          {categories.map((category, index) => (
            <div key={index} className="content-stretch flex items-center justify-between relative w-full px-[8px] py-[6px] rounded-[8px] transition-colors hover:bg-[rgba(0,0,0,0.02)]">
              {/* Left: Icon + Category Name */}
              <div className="content-stretch flex items-center gap-[12px] relative min-w-0">
                <div className="relative rounded-[4px] shrink-0 size-[12px]" style={{ backgroundColor: category.color }} />
                <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[14px] text-black truncate" style={{ fontFeatureSettings: "'ss01', 'cv01'" }}>
                  {category.name}
                </p>
              </div>

              {/* Right: Percentage + Amount (aligned column) */}
              <div className="content-stretch flex items-center gap-[16px] relative text-right">
                <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[14px] text-[rgba(0,0,0,0.4)] min-w-[40px]" style={{ fontFeatureSettings: "'ss01', 'cv01'" }}>
                  {category.percentage}%
                </p>
                <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[14px] text-black min-w-[120px] text-right" style={{ fontFeatureSettings: "'ss01', 'cv01'" }}>
                  {formatVND(category.amount)}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Remaining Budget */}
        <div className="content-stretch flex flex-col gap-[8px] items-start relative w-full pt-[12px] border-t border-[rgba(0,0,0,0.05)]">
          <div className="content-stretch flex items-center justify-between relative w-full">
            <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[14px] text-[rgba(0,0,0,0.6)]" style={{ fontFeatureSettings: "'ss01', 'cv01'" }}>
              Ngân sách còn lại
            </p>
            <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[14px] text-[#10b981]" style={{ fontFeatureSettings: "'ss01', 'cv01'" }}>
              {formatVND(2_350_000)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
