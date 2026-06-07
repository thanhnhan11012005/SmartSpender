import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";
import { formatVND } from "../../utils/currency";

interface CashFlowChartProps {
  data: Array<{ month: string; income: number; expense: number }>;
}

export default function CashFlowChart({ data }: CashFlowChartProps) {
  // Map data to simple chart format, reversing to show oldest to newest left to right
  const chartData = [...data].reverse().map(item => ({
    name: item.month,
    "Thu nhập": item.income,
    "Chi tiêu": item.expense
  }));

  const formatYAxis = (value: number) => {
    if (value >= 1000000) return `${(value / 1000000).toFixed(1)} Tr`;
    if (value >= 1000) return `${(value / 1000).toFixed(0)} K`;
    return value.toString();
  };

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="rounded-xl border border-gray-100 bg-white/90 p-4 shadow-xl backdrop-blur-md">
          <p className="mb-2 font-['Inter'] font-semibold text-gray-800">{label}</p>
          {payload.map((entry: any, index: number) => (
            <div key={index} className="flex items-center justify-between gap-4">
              <span className="flex items-center gap-2 font-['Inter'] text-[13px] text-gray-600">
                <span className="size-2 rounded-full" style={{ backgroundColor: entry.color }}></span>
                {entry.name}
              </span>
              <span className="font-['Inter'] text-[13px] font-semibold text-gray-900">
                {formatVND(entry.value)}
              </span>
            </div>
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <div className="rounded-[24px] bg-white p-6 shadow-sm ring-1 ring-gray-100">
      <div className="mb-6 flex items-center justify-between">
        <h3 className="font-['Inter'] text-[18px] font-semibold text-gray-900">Phân tích dòng tiền</h3>
        <div className="flex gap-2">
          {/* Mock filters for aesthetics */}
          <div className="rounded-full bg-gray-100 px-3 py-1 text-[12px] font-medium text-gray-600">6 Tháng</div>
        </div>
      </div>
      
      <div className="h-[300px] w-full">
        {chartData.length === 0 ? (
          <div className="flex h-full items-center justify-center text-gray-400">Không có dữ liệu</div>
        ) : (
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={chartData} margin={{ top: 5, right: 10, left: 0, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f3f4f6" />
              <XAxis 
                dataKey="name" 
                axisLine={false} 
                tickLine={false} 
                tick={{ fill: "#9ca3af", fontSize: 12, fontFamily: "Inter" }}
                dy={10}
              />
              <YAxis 
                axisLine={false} 
                tickLine={false} 
                tickFormatter={formatYAxis}
                tick={{ fill: "#9ca3af", fontSize: 12, fontFamily: "Inter" }}
                dx={-10}
              />
              <Tooltip content={<CustomTooltip />} />
              <Legend 
                verticalAlign="top" 
                align="left" 
                wrapperStyle={{ paddingBottom: "20px", fontSize: "13px", fontFamily: "Inter" }} 
                iconType="circle"
              />
              <Line 
                type="monotone" 
                dataKey="Thu nhập" 
                stroke="#10b981" 
                strokeWidth={3}
                dot={{ r: 4, strokeWidth: 2, fill: "#fff" }}
                activeDot={{ r: 6, strokeWidth: 0, fill: "#10b981" }}
              />
              <Line 
                type="monotone" 
                dataKey="Chi tiêu" 
                stroke="#8b5cf6" 
                strokeWidth={3}
                dot={{ r: 4, strokeWidth: 2, fill: "#fff" }}
                activeDot={{ r: 6, strokeWidth: 0, fill: "#8b5cf6" }}
              />
            </LineChart>
          </ResponsiveContainer>
        )}
      </div>
    </div>
  );
}
