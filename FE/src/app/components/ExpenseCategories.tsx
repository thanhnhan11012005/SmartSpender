import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";
import { formatVND } from "../../utils/currency";

interface ExpenseCategoriesProps {
  categories: Array<{ categoryName: string; color: string; amount: number; percentage: number }>;
}

export default function ExpenseCategories({ categories }: ExpenseCategoriesProps) {
  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      return (
        <div className="rounded-xl border border-gray-100 bg-white/90 p-3 shadow-xl backdrop-blur-md">
          <p className="font-['Inter'] text-[13px] font-semibold text-gray-800">{data.categoryName}</p>
          <p className="font-['Inter'] text-[13px] text-gray-600">
            {formatVND(data.amount)} ({data.percentage}%)
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="flex h-full flex-col rounded-[24px] bg-white p-6 shadow-sm ring-1 ring-gray-100">
      <div className="mb-6 flex items-center justify-between">
        <h3 className="font-['Inter'] text-[18px] font-semibold text-gray-900">Danh mục chi tiêu</h3>
        <p className="font-['Inter'] text-[13px] text-gray-500">Tháng này</p>
      </div>

      {categories && categories.length > 0 ? (
        <div className="flex flex-1 flex-col items-center justify-center sm:flex-row sm:gap-8">
          <div className="relative h-[200px] w-full sm:w-[200px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={categories}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={90}
                  paddingAngle={5}
                  dataKey="amount"
                  stroke="none"
                >
                  {categories.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color || "#cbd5e1"} />
                  ))}
                </Pie>
                <Tooltip content={<CustomTooltip />} />
              </PieChart>
            </ResponsiveContainer>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="font-['Inter'] text-[12px] text-gray-400">Tổng chi</span>
              <span className="font-['Inter'] text-[16px] font-bold text-gray-900">
                {formatVND(categories.reduce((s, c) => s + c.amount, 0))}
              </span>
            </div>
          </div>

          <div className="mt-6 flex w-full flex-col gap-3 sm:mt-0 sm:flex-1">
            {categories.slice(0, 4).map((cat, idx) => (
              <div key={idx} className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="size-3 rounded-full" style={{ backgroundColor: cat.color || "#cbd5e1" }}></span>
                  <span className="font-['Inter'] text-[14px] text-gray-700">{cat.categoryName}</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="font-['Inter'] text-[14px] font-semibold text-gray-900">{formatVND(cat.amount)}</span>
                  <span className="w-[40px] text-right font-['Inter'] text-[13px] text-gray-400">{cat.percentage}%</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="flex flex-1 items-center justify-center text-gray-400">
          Chưa có chi tiêu nào trong tháng này
        </div>
      )}
    </div>
  );
}
