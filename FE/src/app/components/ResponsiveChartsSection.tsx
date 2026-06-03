import ChartsSection from "../../imports/Frame-1/Frame-5-6266";

export default function ResponsiveChartsSection() {
  return (
    <div className="w-full">
      <div className="[&>div]:!w-full [&>div]:!max-w-full">
        <ChartsSection className="w-full !max-w-full" />
      </div>
    </div>
  );
}
