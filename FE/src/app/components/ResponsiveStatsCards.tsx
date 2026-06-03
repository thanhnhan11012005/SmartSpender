import StatsCards from "../../imports/Frame/Frame";

export default function ResponsiveStatsCards() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4 xl:gap-[28px]">
      <StatsCards className="contents" />
    </div>
  );
}
