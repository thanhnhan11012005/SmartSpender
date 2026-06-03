export default function RightBar() {
  return (
    <div className="relative size-full" data-name="Right Bar">
      <div className="content-stretch flex flex-col gap-[16px] items-start p-[16px] relative size-full">
        {/* Right bar content removed */}
      </div>
      <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0.1)] border-l-[0.5px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}
