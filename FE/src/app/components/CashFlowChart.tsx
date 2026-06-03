import { useState } from "react";
import { formatVND, formatVNDCompact } from "../../utils/currency";

interface TooltipData {
  x: number;
  y: number;
  income: number;
  expense: number;
  month: string;
}

export default function CashFlowChart() {
  const [tooltip, setTooltip] = useState<TooltipData | null>(null);

  // Sample data for 12 months
  const monthData = [
    { month: "Thg 1", income: 3_800_000, expense: 1_500_000 },
    { month: "Thg 2", income: 4_200_000, expense: 1_650_000 },
    { month: "Thg 3", income: 4_100_000, expense: 1_600_000 },
    { month: "Thg 4", income: 4_500_000, expense: 1_800_000 },
    { month: "Thg 5", income: 4_300_000, expense: 1_700_000 },
    { month: "Thg 6", income: 4_200_000, expense: 1_850_000 },
    { month: "Thg 7", income: 4_600_000, expense: 1_900_000 },
    { month: "Thg 8", income: 4_700_000, expense: 2_000_000 },
    { month: "Thg 9", income: 4_400_000, expense: 1_750_000 },
    { month: "Thg 10", income: 4_300_000, expense: 1_800_000 },
    { month: "Thg 11", income: 4_500_000, expense: 1_950_000 },
    { month: "Thg 12", income: 5_000_000, expense: 2_100_000 },
  ];

  const maxValue = 5_500_000;
  const chartHeight = 300;
  const chartWidth = 500;
  const padding = 12;

  // Convert data to SVG coordinates
  const getY = (value: number) => chartHeight - (value / maxValue) * (chartHeight - 2 * padding) + padding;
  const getX = (index: number) => (index / (monthData.length - 1)) * (chartWidth - 2 * padding) + padding;

  // Generate smooth curve path using quadratic bezier
  const generateSmoothPath = (points: { x: number; y: number; value: number; month: string }[]): string => {
    if (points.length === 0) return "";

    let path = `M ${points[0].x} ${points[0].y}`;

    for (let i = 1; i < points.length; i++) {
      const xc = (points[i].x + points[i - 1].x) / 2;
      const yc = (points[i].y + points[i - 1].y) / 2;
      path += ` Q ${xc} ${yc}, ${points[i].x} ${points[i].y}`;
    }

    return path;
  };

  const incomePoints = monthData.map((d, i) => ({
    x: getX(i),
    y: getY(d.income),
    value: d.income,
    month: d.month,
  }));

  const expensePoints = monthData.map((d, i) => ({
    x: getX(i),
    y: getY(d.expense),
    value: d.expense,
    month: d.month,
  }));

  const incomePath = generateSmoothPath(incomePoints);
  const expensePath = generateSmoothPath(expensePoints);

  // Generate area fill path (close the shape)
  const generateAreaPath = (points: typeof incomePoints): string => {
    let path = generateSmoothPath(points);
    path += ` L ${points[points.length - 1].x} ${chartHeight + padding}`;
    path += ` L ${points[0].x} ${chartHeight + padding} Z`;
    return path;
  };

  const incomeAreaPath = generateAreaPath(incomePoints);
  const expenseAreaPath = generateAreaPath(expensePoints);

  // Handle mouse move for tooltip
  const handleChartMouseMove = (e: React.MouseEvent<SVGElement>) => {
    const svg = e.currentTarget;
    const rect = svg.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Normalize to SVG coordinates
    const normalizedX = (x / rect.width) * (chartWidth + 2 * padding);
    const closestIndex = Math.round(((normalizedX - padding) / (chartWidth - 2 * padding)) * (monthData.length - 1));

    if (closestIndex >= 0 && closestIndex < monthData.length) {
      const data = monthData[closestIndex];
      setTooltip({
        x: getX(closestIndex),
        y: getY(Math.max(data.income, data.expense)) - 50,
        income: data.income,
        expense: data.expense,
        month: data.month,
      });
    }
  };

  const handleChartMouseLeave = () => {
    setTooltip(null);
  };

  return (
    <div className="bg-white relative rounded-[20px] p-[24px] w-full">
      <div className="content-stretch flex flex-col gap-[20px] items-start relative w-full">
        {/* Header */}
        <div className="content-stretch flex flex-wrap items-center justify-between gap-[12px] relative w-full">
          <h3 className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] not-italic relative shrink-0 text-[18px] text-black" style={{ fontFeatureSettings: "'ss01', 'cv01'" }}>
            Phân tích dòng tiền
          </h3>

          {/* Time Filters */}
          <div className="content-stretch flex items-center gap-[8px] relative">
            <button className="content-stretch flex items-center justify-center px-[12px] py-[6px] relative rounded-[8px] bg-[rgba(0,0,0,0.02)] hover:bg-[rgba(0,0,0,0.04)] transition-colors">
              <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[12px] text-black" style={{ fontFeatureSettings: "'ss01', 'cv01'" }}>
                Hôm nay
              </p>
            </button>
            <button className="content-stretch flex items-center justify-center px-[12px] py-[6px] relative rounded-[8px] bg-[rgba(0,0,0,0.02)] hover:bg-[rgba(0,0,0,0.04)] transition-colors">
              <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[12px] text-black" style={{ fontFeatureSettings: "'ss01', 'cv01'" }}>
                1 Tuần
              </p>
            </button>
            <button className="content-stretch flex items-center justify-center px-[12px] py-[6px] relative rounded-[8px] bg-[#8b5cf6] hover:bg-[#7c3aed] transition-colors">
              <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[12px] text-white" style={{ fontFeatureSettings: "'ss01', 'cv01'" }}>
                1 Tháng
              </p>
            </button>
            <button className="content-stretch flex items-center justify-center px-[12px] py-[6px] relative rounded-[8px] bg-[rgba(0,0,0,0.02)] hover:bg-[rgba(0,0,0,0.04)] transition-colors">
              <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[12px] text-black" style={{ fontFeatureSettings: "'ss01', 'cv01'" }}>
                1 Năm
              </p>
            </button>
          </div>
        </div>

        {/* Legend */}
        <div className="content-stretch flex items-center gap-[24px] relative">
          <div className="content-stretch flex items-center gap-[8px] relative">
            <div className="relative rounded-[4px] shrink-0 size-[12px] bg-[#10b981]" />
            <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[14px] text-black" style={{ fontFeatureSettings: "'ss01', 'cv01'" }}>
              Thu nhập
            </p>
          </div>
          <div className="content-stretch flex items-center gap-[8px] relative">
            <div className="relative rounded-[4px] shrink-0 size-[12px] bg-[#8b5cf6]" />
            <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[14px] text-black" style={{ fontFeatureSettings: "'ss01', 'cv01'" }}>
              Chi tiêu
            </p>
          </div>
        </div>

        {/* Chart Area */}
        <div className="content-stretch flex items-end justify-between gap-[12px] relative w-full">
          {/* Y-axis labels */}
          <div className="content-stretch flex flex-col justify-between items-end relative py-[12px]" style={{ height: chartHeight + "px" }}>
            {[maxValue, (maxValue * 4) / 5, (maxValue * 3) / 5, (maxValue * 2) / 5, maxValue / 5, 0].map((val, i) => (
              <p key={i} className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[12px] text-[rgba(0,0,0,0.4)]" style={{ fontFeatureSettings: "'ss01', 'cv01'" }}>
                {formatVNDCompact(val)}
              </p>
            ))}
          </div>

          {/* Chart container */}
          <div className="flex-1 relative" style={{ height: chartHeight + "px" }}>
            <svg className="absolute inset-0 w-full h-full overflow-visible" viewBox={`0 0 ${chartWidth} ${chartHeight}`} preserveAspectRatio="none" onMouseMove={handleChartMouseMove} onMouseLeave={handleChartMouseLeave}>
              <defs>
                {/* Gradient for income area */}
                <linearGradient id="incomeGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#10b981" stopOpacity="0.15" />
                  <stop offset="100%" stopColor="#10b981" stopOpacity="0" />
                </linearGradient>

                {/* Gradient for expense area */}
                <linearGradient id="expenseGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.15" />
                  <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0" />
                </linearGradient>
              </defs>

              {/* Grid lines */}
              <g opacity="0.5">
                {[0, 1, 2, 3, 4, 5].map((i) => {
                  const y = padding + (i / 5) * (chartHeight - 2 * padding);
                  return <line key={i} x1={padding} y1={y} x2={chartWidth - padding} y2={y} stroke="rgba(0,0,0,0.05)" strokeWidth="1" />;
                })}
              </g>

              {/* Income area fill */}
              <path d={incomeAreaPath} fill="url(#incomeGradient)" />

              {/* Expense area fill */}
              <path d={expenseAreaPath} fill="url(#expenseGradient)" />

              {/* Income line (smooth) */}
              <path d={incomePath} fill="none" stroke="#10b981" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />

              {/* Expense line (smooth) */}
              <path d={expensePath} fill="none" stroke="#8b5cf6" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />

              {/* Interactive dots */}
              {incomePoints.map((point, i) => (
                <circle key={`income-dot-${i}`} cx={point.x} cy={point.y} r="3" fill="white" stroke="#10b981" strokeWidth="2" opacity={tooltip?.month === monthData[i].month ? 1 : 0.5} />
              ))}

              {expensePoints.map((point, i) => (
                <circle key={`expense-dot-${i}`} cx={point.x} cy={point.y} r="3" fill="white" stroke="#8b5cf6" strokeWidth="2" opacity={tooltip?.month === monthData[i].month ? 1 : 0.5} />
              ))}
            </svg>

            {/* Tooltip */}
            {tooltip && (
              <div className="absolute bg-white rounded-[12px] shadow-lg px-[16px] py-[12px] z-10 pointer-events-none" style={{ left: tooltip.x, top: tooltip.y, transform: "translateX(-50%)" }}>
                <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[12px] text-[rgba(0,0,0,0.6)] mb-[8px]" style={{ fontFeatureSettings: "'ss01', 'cv01'" }}>
                  {tooltip.month}
                </p>
                <div className="flex items-center gap-[8px] mb-[4px]">
                  <div className="w-[8px] h-[8px] rounded-[2px] bg-[#10b981]" />
                  <p className="font-['Inter:Regular',sans-serif] font-normal text-[12px] text-black" style={{ fontFeatureSettings: "'ss01', 'cv01'" }}>
                    Thu nhập: {formatVND(tooltip.income)}
                  </p>
                </div>
                <div className="flex items-center gap-[8px]">
                  <div className="w-[8px] h-[8px] rounded-[2px] bg-[#8b5cf6]" />
                  <p className="font-['Inter:Regular',sans-serif] font-normal text-[12px] text-black" style={{ fontFeatureSettings: "'ss01', 'cv01'" }}>
                    Chi tiêu: {formatVND(tooltip.expense)}
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* X-axis labels */}
        <div className="content-stretch flex items-center justify-between relative w-full pl-[48px]">
          {monthData.map((data) => (
            <p key={data.month} className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[12px] text-[rgba(0,0,0,0.4)] flex-1 text-center" style={{ fontFeatureSettings: "'ss01', 'cv01'" }}>
              {data.month}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
