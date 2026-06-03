import svgPaths from "./svg-eduxbpsgna";
import { imgBackground, imgBackground1, imgLine2 } from "./svg-q5bh4";
type DonutGraphProps = {
  className?: string;
  property?: "2A" | "2B" | "3A" | "3B" | "3C" | "4A" | "4B" | "4C" | "4D" | "5A" | "5B" | "5C" | "5D" | "5E" | "6A" | "6B" | "6C" | "6D" | "6E" | "6F";
  state?: "Default" | "Appear" | "Normal" | "Hover";
};

function DonutGraph({ className, property = "2A", state = "Default" }: DonutGraphProps) {
  if (property === "2A" && state === "Appear") {
    return (
      <div className={className || "h-[89.3px] relative w-[60px]"} data-name="Property=2A, State=Appear">
        <div className="absolute inset-[0.14%_0_1.67%_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 60 87.6868">
            <path d={svgPaths.p2808b800} id="Subtract" opacity="0.4" stroke="var(--stroke-0, #92BFFF)" />
          </svg>
        </div>
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 60 89.2998">
          <g id="Frame">
            <mask height="88" id="mask0_1_7655" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="60" x="0" y="0">
              <path clipRule="evenodd" d={svgPaths.p175a1c80} fill="url(#paint0_linear_1_7655)" fillRule="evenodd" id="Subtract" />
            </mask>
            <g mask="url(#mask0_1_7655)">
              <path clipRule="evenodd" d={svgPaths.p175a1c80} fill="var(--fill-0, #92BFFF)" fillRule="evenodd" id="Subtract_2" />
            </g>
          </g>
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_7655" x1="4.5" x2="-13" y1="85" y2="113">
              <stop stopOpacity="0" />
              <stop offset="1" />
            </linearGradient>
          </defs>
        </svg>
        <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-[rgba(0,0,0,0.8)] content-stretch flex items-center left-[calc(50%-11.5px)] opacity-0 px-[8px] py-[4px] rounded-[8px] top-[calc(50%+0.35px)]" data-name="Tooltip">
          <div className="[word-break:break-word] content-center flex flex-wrap font-['Inter:Regular',sans-serif] font-normal gap-[4px_8px] items-center leading-[20px] not-italic relative rounded-[8px] shrink-0 text-[14px] text-black whitespace-nowrap" data-name="Text">
            <p className="relative shrink-0" style={{ fontFeatureSettings: "'ss01', 'cv01'" }}>
              Tooltip
            </p>
            <p className="relative shrink-0" style={{ fontFeatureSettings: "'ss01', 'cv01'" }}>
              ⌘
            </p>
          </div>
        </div>
      </div>
    );
  }
  if (property === "2A" && state === "Normal") {
    return (
      <div className={className || "h-[89.3px] relative w-[60px]"} data-name="Property=2A, State=Normal">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 60 89.2998">
          <g id="Frame">
            <mask height="88" id="mask0_1_7695" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="60" x="0" y="0">
              <path clipRule="evenodd" d={svgPaths.p175a1c80} fill="url(#paint0_linear_1_7695)" fillRule="evenodd" id="Subtract" />
            </mask>
            <g mask="url(#mask0_1_7695)">
              <path clipRule="evenodd" d={svgPaths.p175a1c80} fill="var(--fill-0, #92BFFF)" fillRule="evenodd" id="Subtract_2" />
            </g>
          </g>
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_7695" x1="60" x2="30" y1="0" y2="34.5">
              <stop />
              <stop offset="1" />
            </linearGradient>
          </defs>
        </svg>
        <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-[rgba(0,0,0,0.8)] content-stretch flex items-center left-[calc(50%-11.5px)] opacity-0 px-[8px] py-[4px] rounded-[8px] top-[calc(50%+0.35px)]" data-name="Tooltip">
          <div className="[word-break:break-word] content-center flex flex-wrap font-['Inter:Regular',sans-serif] font-normal gap-[4px_8px] items-center leading-[20px] not-italic relative rounded-[8px] shrink-0 text-[14px] text-black whitespace-nowrap" data-name="Text">
            <p className="relative shrink-0" style={{ fontFeatureSettings: "'ss01', 'cv01'" }}>
              Tooltip
            </p>
            <p className="relative shrink-0" style={{ fontFeatureSettings: "'ss01', 'cv01'" }}>
              ⌘
            </p>
          </div>
        </div>
      </div>
    );
  }
  if (property === "2A" && state === "Hover") {
    return (
      <div className={className || "h-[89.3px] relative w-[60px]"} data-name="Property=2A, State=Hover">
        <div className="absolute inset-[-4.48%_6.67%_4.48%_-6.67%]" data-name="Frame">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 60 89.2998">
            <g id="Frame">
              <mask height="88" id="mask0_1_7695" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="60" x="0" y="0">
                <path clipRule="evenodd" d={svgPaths.p175a1c80} fill="url(#paint0_linear_1_7695)" fillRule="evenodd" id="Subtract" />
              </mask>
              <g mask="url(#mask0_1_7695)">
                <path clipRule="evenodd" d={svgPaths.p175a1c80} fill="var(--fill-0, #92BFFF)" fillRule="evenodd" id="Subtract_2" />
              </g>
            </g>
            <defs>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_7695" x1="60" x2="30" y1="0" y2="34.5">
                <stop />
                <stop offset="1" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-[rgba(0,0,0,0.8)] content-stretch flex items-center left-[calc(50%-8.5px)] opacity-0 px-[8px] py-[4px] rounded-[8px] top-[calc(50%+2.35px)]" data-name="Tooltip">
          <div className="[word-break:break-word] content-center flex flex-wrap font-['Inter:Regular',sans-serif] font-normal gap-[4px_8px] items-center leading-[20px] not-italic relative rounded-[8px] shrink-0 text-[14px] text-black whitespace-nowrap" data-name="Text">
            <p className="relative shrink-0" style={{ fontFeatureSettings: "'ss01', 'cv01'" }}>
              Tooltip
            </p>
            <p className="relative shrink-0" style={{ fontFeatureSettings: "'ss01', 'cv01'" }}>
              ⌘
            </p>
          </div>
        </div>
      </div>
    );
  }
  if (property === "2B" && state === "Default") {
    return (
      <div className={className || "h-[119.967px] relative w-[111.365px]"} data-name="Property=2B, State=Default">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 111.365 119.967">
          <g id="Frame">
            <mask height="120" id="mask0_1_7641" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="111" x="1" y="0">
              <path clipRule="evenodd" d={svgPaths.p6ca68f0} fill="url(#paint0_linear_1_7641)" fillRule="evenodd" id="Subtract" />
            </mask>
            <g mask="url(#mask0_1_7641)">
              <g id="Subtract_2">
                <path clipRule="evenodd" d={svgPaths.p6ca68f0} fill="url(#paint1_linear_1_7641)" fillRule="evenodd" />
                <path clipRule="evenodd" d={svgPaths.p6ca68f0} fill="var(--fill-1, black)" fillRule="evenodd" style={{ mixBlendMode: "screen" }} />
              </g>
            </g>
          </g>
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_7641" x1="56" x2="67.7791" y1="8" y2="44.1633">
              <stop />
              <stop offset="1" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_1_7641" x1="55.6824" x2="55.6824" y1="0" y2="119.967">
              <stop />
              <stop offset="1" stopColor="#1C1C1C" stopOpacity="0.6" />
              <stop offset="1" stopOpacity="0.6" />
            </linearGradient>
          </defs>
        </svg>
        <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-[rgba(0,0,0,0.8)] content-stretch flex items-center left-[calc(50%+38.32px)] opacity-0 px-[8px] py-[4px] rounded-[8px] top-[calc(50%+0.02px)]" data-name="Tooltip">
          <div className="[word-break:break-word] content-center flex flex-wrap font-['Inter:Regular',sans-serif] font-normal gap-[4px_8px] items-center leading-[20px] not-italic relative rounded-[8px] shrink-0 text-[14px] text-black whitespace-nowrap" data-name="Text">
            <p className="relative shrink-0" style={{ fontFeatureSettings: "'ss01', 'cv01'" }}>
              Tooltip
            </p>
            <p className="relative shrink-0" style={{ fontFeatureSettings: "'ss01', 'cv01'" }}>
              ⌘
            </p>
          </div>
        </div>
      </div>
    );
  }
  if (property === "2B" && state === "Appear") {
    return (
      <div className={className || "h-[119.967px] relative w-[111.365px]"} data-name="Property=2B, State=Appear">
        <div className="absolute inset-[0.14%_0_0_1.05%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 110.197 119.797">
            <path d={svgPaths.p2e696600} id="Subtract" opacity="0.2" stroke="var(--stroke-0, black)" />
          </svg>
        </div>
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 111.365 119.967">
          <g id="Frame">
            <mask height="120" id="mask0_1_7705" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="111" x="1" y="0">
              <path clipRule="evenodd" d={svgPaths.p6ca68f0} fill="url(#paint0_linear_1_7705)" fillRule="evenodd" id="Subtract" />
            </mask>
            <g mask="url(#mask0_1_7705)">
              <g id="Subtract_2">
                <path clipRule="evenodd" d={svgPaths.p6ca68f0} fill="url(#paint1_linear_1_7705)" fillRule="evenodd" />
                <path clipRule="evenodd" d={svgPaths.p6ca68f0} fill="var(--fill-1, black)" fillRule="evenodd" style={{ mixBlendMode: "screen" }} />
              </g>
            </g>
          </g>
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_7705" x1="50.5" x2="61.9509" y1="-22" y2="-3.72979">
              <stop />
              <stop offset="1" stopOpacity="0" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_1_7705" x1="55.6824" x2="55.6824" y1="0" y2="119.967">
              <stop />
              <stop offset="1" stopColor="#1C1C1C" stopOpacity="0.6" />
              <stop offset="1" stopOpacity="0.6" />
            </linearGradient>
          </defs>
        </svg>
        <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-[rgba(0,0,0,0.8)] content-stretch flex items-center left-[calc(50%+38.32px)] opacity-0 px-[8px] py-[4px] rounded-[8px] top-[calc(50%+0.02px)]" data-name="Tooltip">
          <div className="[word-break:break-word] content-center flex flex-wrap font-['Inter:Regular',sans-serif] font-normal gap-[4px_8px] items-center leading-[20px] not-italic relative rounded-[8px] shrink-0 text-[14px] text-black whitespace-nowrap" data-name="Text">
            <p className="relative shrink-0" style={{ fontFeatureSettings: "'ss01', 'cv01'" }}>
              Tooltip
            </p>
            <p className="relative shrink-0" style={{ fontFeatureSettings: "'ss01', 'cv01'" }}>
              ⌘
            </p>
          </div>
        </div>
      </div>
    );
  }
  if (property === "2B" && state === "Normal") {
    return (
      <div className={className || "h-[119.967px] relative w-[111.365px]"} data-name="Property=2B, State=Normal">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 111.365 119.967">
          <g id="Frame">
            <mask height="120" id="mask0_1_7641" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="111" x="1" y="0">
              <path clipRule="evenodd" d={svgPaths.p6ca68f0} fill="url(#paint0_linear_1_7641)" fillRule="evenodd" id="Subtract" />
            </mask>
            <g mask="url(#mask0_1_7641)">
              <g id="Subtract_2">
                <path clipRule="evenodd" d={svgPaths.p6ca68f0} fill="url(#paint1_linear_1_7641)" fillRule="evenodd" />
                <path clipRule="evenodd" d={svgPaths.p6ca68f0} fill="var(--fill-1, black)" fillRule="evenodd" style={{ mixBlendMode: "screen" }} />
              </g>
            </g>
          </g>
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_7641" x1="56" x2="67.7791" y1="8" y2="44.1633">
              <stop />
              <stop offset="1" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_1_7641" x1="55.6824" x2="55.6824" y1="0" y2="119.967">
              <stop />
              <stop offset="1" stopColor="#1C1C1C" stopOpacity="0.6" />
              <stop offset="1" stopOpacity="0.6" />
            </linearGradient>
          </defs>
        </svg>
        <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-[rgba(0,0,0,0.8)] content-stretch flex items-center left-[calc(50%+38.32px)] opacity-0 px-[8px] py-[4px] rounded-[8px] top-[calc(50%+0.02px)]" data-name="Tooltip">
          <div className="[word-break:break-word] content-center flex flex-wrap font-['Inter:Regular',sans-serif] font-normal gap-[4px_8px] items-center leading-[20px] not-italic relative rounded-[8px] shrink-0 text-[14px] text-black whitespace-nowrap" data-name="Text">
            <p className="relative shrink-0" style={{ fontFeatureSettings: "'ss01', 'cv01'" }}>
              Tooltip
            </p>
            <p className="relative shrink-0" style={{ fontFeatureSettings: "'ss01', 'cv01'" }}>
              ⌘
            </p>
          </div>
        </div>
      </div>
    );
  }
  if (property === "2B" && state === "Hover") {
    return (
      <div className={className || "h-[119.967px] relative w-[111.365px]"} data-name="Property=2B, State=Hover">
        <div className="absolute inset-[3.33%_-3.59%_-3.33%_3.59%]" data-name="Frame">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 111.365 119.967">
            <g id="Frame">
              <mask height="120" id="mask0_1_7641" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="111" x="1" y="0">
                <path clipRule="evenodd" d={svgPaths.p6ca68f0} fill="url(#paint0_linear_1_7641)" fillRule="evenodd" id="Subtract" />
              </mask>
              <g mask="url(#mask0_1_7641)">
                <g id="Subtract_2">
                  <path clipRule="evenodd" d={svgPaths.p6ca68f0} fill="url(#paint1_linear_1_7641)" fillRule="evenodd" />
                  <path clipRule="evenodd" d={svgPaths.p6ca68f0} fill="var(--fill-1, black)" fillRule="evenodd" style={{ mixBlendMode: "screen" }} />
                </g>
              </g>
            </g>
            <defs>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_7641" x1="56" x2="67.7791" y1="8" y2="44.1633">
                <stop />
                <stop offset="1" />
              </linearGradient>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_1_7641" x1="55.6824" x2="55.6824" y1="0" y2="119.967">
                <stop />
                <stop offset="1" stopColor="#1C1C1C" stopOpacity="0.6" />
                <stop offset="1" stopOpacity="0.6" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-[rgba(0,0,0,0.8)] content-stretch flex items-center left-[calc(50%+49.32px)] opacity-0 px-[8px] py-[4px] rounded-[8px] top-[calc(50%+2.02px)]" data-name="Tooltip">
          <div className="[word-break:break-word] content-center flex flex-wrap font-['Inter:Regular',sans-serif] font-normal gap-[4px_8px] items-center leading-[20px] not-italic relative rounded-[8px] shrink-0 text-[14px] text-black whitespace-nowrap" data-name="Text">
            <p className="relative shrink-0" style={{ fontFeatureSettings: "'ss01', 'cv01'" }}>
              Tooltip
            </p>
            <p className="relative shrink-0" style={{ fontFeatureSettings: "'ss01', 'cv01'" }}>
              ⌘
            </p>
          </div>
        </div>
      </div>
    );
  }
  if (property === "3A" && state === "Default") {
    return (
      <div className={className || "h-[43.145px] relative w-[50.248px]"} data-name="Property=3A, State=Default">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 50.2481 43.1446">
          <g id="Frame">
            <mask height="42" id="mask0_1_7619" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="50" x="1" y="0">
              <path clipRule="evenodd" d={svgPaths.p16a91800} fill="url(#paint0_linear_1_7619)" fillRule="evenodd" id="Subtract" />
            </mask>
            <g mask="url(#mask0_1_7619)">
              <path clipRule="evenodd" d={svgPaths.p16a91800} fill="var(--fill-0, #94E9B8)" fillRule="evenodd" id="Subtract_2" />
            </g>
          </g>
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_7619" x1="50.2481" x2="38.5159" y1="0" y2="23.3866">
              <stop />
              <stop offset="1" />
            </linearGradient>
          </defs>
        </svg>
        <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-[rgba(0,0,0,0.8)] content-stretch flex items-center left-[calc(50%-0.99px)] opacity-0 px-[8px] py-[4px] rounded-[8px] top-[calc(50%+0.43px)]" data-name="Tooltip">
          <div className="[word-break:break-word] content-center flex flex-wrap font-['Inter:Regular',sans-serif] font-normal gap-[4px_8px] items-center leading-[20px] not-italic relative rounded-[8px] shrink-0 text-[14px] text-black whitespace-nowrap" data-name="Text">
            <p className="relative shrink-0" style={{ fontFeatureSettings: "'ss01', 'cv01'" }}>
              Tooltip
            </p>
            <p className="relative shrink-0" style={{ fontFeatureSettings: "'ss01', 'cv01'" }}>
              ⌘
            </p>
          </div>
        </div>
      </div>
    );
  }
  if (property === "3A" && state === "Appear") {
    return (
      <div className={className || "h-[43.145px] relative w-[50.248px]"} data-name="Property=3A, State=Appear">
        <div className="absolute inset-[0.38%_0_3.06%_3.23%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48.6246 41.6617">
            <path d={svgPaths.p361d3180} id="Subtract" opacity="0.4" stroke="var(--stroke-0, #94E9B8)" />
          </svg>
        </div>
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 50.2481 43.1446">
          <g id="Frame">
            <mask height="42" id="mask0_1_7637" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="50" x="1" y="0">
              <path clipRule="evenodd" d={svgPaths.p16a91800} fill="url(#paint0_linear_1_7637)" fillRule="evenodd" id="Subtract" />
            </mask>
            <g mask="url(#mask0_1_7637)">
              <path clipRule="evenodd" d={svgPaths.p16a91800} fill="var(--fill-0, #94E9B8)" fillRule="evenodd" id="Subtract_2" />
            </g>
          </g>
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_7637" x1="12.6353" x2="5.87667" y1="37" y2="61.8702">
              <stop stopOpacity="0" />
              <stop offset="1" />
            </linearGradient>
          </defs>
        </svg>
        <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-[rgba(0,0,0,0.8)] content-stretch flex items-center left-[calc(50%-0.49px)] opacity-0 px-[8px] py-[4px] rounded-[8px] top-[calc(50%+0.43px)]" data-name="Tooltip">
          <div className="[word-break:break-word] content-center flex flex-wrap font-['Inter:Regular',sans-serif] font-normal gap-[4px_8px] items-center leading-[20px] not-italic relative rounded-[8px] shrink-0 text-[14px] text-black whitespace-nowrap" data-name="Text">
            <p className="relative shrink-0" style={{ fontFeatureSettings: "'ss01', 'cv01'" }}>
              Tooltip
            </p>
            <p className="relative shrink-0" style={{ fontFeatureSettings: "'ss01', 'cv01'" }}>
              ⌘
            </p>
          </div>
        </div>
      </div>
    );
  }
  if (property === "3A" && state === "Normal") {
    return (
      <div className={className || "h-[43.145px] relative w-[50.248px]"} data-name="Property=3A, State=Normal">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 50.2481 43.1446">
          <g id="Frame">
            <mask height="42" id="mask0_1_7619" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="50" x="1" y="0">
              <path clipRule="evenodd" d={svgPaths.p16a91800} fill="url(#paint0_linear_1_7619)" fillRule="evenodd" id="Subtract" />
            </mask>
            <g mask="url(#mask0_1_7619)">
              <path clipRule="evenodd" d={svgPaths.p16a91800} fill="var(--fill-0, #94E9B8)" fillRule="evenodd" id="Subtract_2" />
            </g>
          </g>
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_7619" x1="50.2481" x2="38.5159" y1="0" y2="23.3866">
              <stop />
              <stop offset="1" />
            </linearGradient>
          </defs>
        </svg>
        <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-[rgba(0,0,0,0.8)] content-stretch flex items-center left-[calc(50%-0.49px)] opacity-0 px-[8px] py-[4px] rounded-[8px] top-[calc(50%+0.43px)]" data-name="Tooltip">
          <div className="[word-break:break-word] content-center flex flex-wrap font-['Inter:Regular',sans-serif] font-normal gap-[4px_8px] items-center leading-[20px] not-italic relative rounded-[8px] shrink-0 text-[14px] text-black whitespace-nowrap" data-name="Text">
            <p className="relative shrink-0" style={{ fontFeatureSettings: "'ss01', 'cv01'" }}>
              Tooltip
            </p>
            <p className="relative shrink-0" style={{ fontFeatureSettings: "'ss01', 'cv01'" }}>
              ⌘
            </p>
          </div>
        </div>
      </div>
    );
  }
  if (property === "3A" && state === "Hover") {
    return (
      <div className={className || "h-[43.145px] relative w-[50.248px]"} data-name="Property=3A, State=Hover">
        <div className="absolute inset-[-9.27%_7.96%_9.27%_-7.96%]" data-name="Frame">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 50.2481 43.1446">
            <g id="Frame">
              <mask height="42" id="mask0_1_7619" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="50" x="1" y="0">
                <path clipRule="evenodd" d={svgPaths.p16a91800} fill="url(#paint0_linear_1_7619)" fillRule="evenodd" id="Subtract" />
              </mask>
              <g mask="url(#mask0_1_7619)">
                <path clipRule="evenodd" d={svgPaths.p16a91800} fill="var(--fill-0, #94E9B8)" fillRule="evenodd" id="Subtract_2" />
              </g>
            </g>
            <defs>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_7619" x1="50.2481" x2="38.5159" y1="0" y2="23.3866">
                <stop />
                <stop offset="1" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-[rgba(0,0,0,0.8)] content-stretch flex items-center left-[calc(50%+2.51px)] opacity-0 px-[8px] py-[4px] rounded-[8px] top-[calc(50%+2.43px)]" data-name="Tooltip">
          <div className="[word-break:break-word] content-center flex flex-wrap font-['Inter:Regular',sans-serif] font-normal gap-[4px_8px] items-center leading-[20px] not-italic relative rounded-[8px] shrink-0 text-[14px] text-black whitespace-nowrap" data-name="Text">
            <p className="relative shrink-0" style={{ fontFeatureSettings: "'ss01', 'cv01'" }}>
              Tooltip
            </p>
            <p className="relative shrink-0" style={{ fontFeatureSettings: "'ss01', 'cv01'" }}>
              ⌘
            </p>
          </div>
        </div>
      </div>
    );
  }
  if (property === "3B" && state === "Default") {
    return (
      <div className={className || "h-[88.1px] relative w-[52.109px]"} data-name="Property=3B, State=Default">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 52.1086 88.0999">
          <g id="Frame">
            <mask height="87" id="mask0_1_7701" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="52" x="0" y="1">
              <path clipRule="evenodd" d={svgPaths.p355c4b00} fill="url(#paint0_linear_1_7701)" fillRule="evenodd" id="Subtract" />
            </mask>
            <g mask="url(#mask0_1_7701)">
              <path clipRule="evenodd" d={svgPaths.p355c4b00} fill="var(--fill-0, #92BFFF)" fillRule="evenodd" id="Subtract_2" />
            </g>
          </g>
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_7701" x1="52.1086" x2="22.2244" y1="0" y2="30.2533">
              <stop />
              <stop offset="1" />
            </linearGradient>
          </defs>
        </svg>
        <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-[rgba(0,0,0,0.8)] content-stretch flex items-center left-[calc(50%-8.67px)] opacity-0 px-[8px] py-[4px] rounded-[8px] top-[calc(50%-0.05px)]" data-name="Tooltip">
          <div className="[word-break:break-word] content-center flex flex-wrap font-['Inter:Regular',sans-serif] font-normal gap-[4px_8px] items-center leading-[20px] not-italic relative rounded-[8px] shrink-0 text-[14px] text-black whitespace-nowrap" data-name="Text">
            <p className="relative shrink-0" style={{ fontFeatureSettings: "'ss01', 'cv01'" }}>
              Tooltip
            </p>
            <p className="relative shrink-0" style={{ fontFeatureSettings: "'ss01', 'cv01'" }}>
              ⌘
            </p>
          </div>
        </div>
      </div>
    );
  }
  if (property === "3B" && state === "Appear") {
    return (
      <div className={className || "h-[88.1px] relative w-[52.109px]"} data-name="Property=3B, State=Appear">
        <div className="absolute inset-[1.65%_1.72%_1.1%_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 51.2137 85.6715">
            <path d={svgPaths.p2eb86980} id="Subtract" opacity="0.4" stroke="var(--stroke-0, #92BFFF)" />
          </svg>
        </div>
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 52.1086 88.0999">
          <g id="Frame">
            <mask height="87" id="mask0_1_7633" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="52" x="0" y="1">
              <path clipRule="evenodd" d={svgPaths.p355c4b00} fill="url(#paint0_linear_1_7633)" fillRule="evenodd" id="Subtract" />
            </mask>
            <g mask="url(#mask0_1_7633)">
              <path clipRule="evenodd" d={svgPaths.p355c4b00} fill="var(--fill-0, #92BFFF)" fillRule="evenodd" id="Subtract_2" />
            </g>
          </g>
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_7633" x1="40.3872" x2="59.0561" y1="96" y2="118.363">
              <stop stopOpacity="0" />
              <stop offset="1" />
            </linearGradient>
          </defs>
        </svg>
        <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-[rgba(0,0,0,0.8)] content-stretch flex items-center left-[calc(50%-8.67px)] opacity-0 px-[8px] py-[4px] rounded-[8px] top-[calc(50%-0.05px)]" data-name="Tooltip">
          <div className="[word-break:break-word] content-center flex flex-wrap font-['Inter:Regular',sans-serif] font-normal gap-[4px_8px] items-center leading-[20px] not-italic relative rounded-[8px] shrink-0 text-[14px] text-black whitespace-nowrap" data-name="Text">
            <p className="relative shrink-0" style={{ fontFeatureSettings: "'ss01', 'cv01'" }}>
              Tooltip
            </p>
            <p className="relative shrink-0" style={{ fontFeatureSettings: "'ss01', 'cv01'" }}>
              ⌘
            </p>
          </div>
        </div>
      </div>
    );
  }
  if (property === "3B" && state === "Normal") {
    return (
      <div className={className || "h-[88.1px] relative w-[52.109px]"} data-name="Property=3B, State=Normal">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 52.1086 88.0999">
          <g id="Frame">
            <mask height="87" id="mask0_1_7701" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="52" x="0" y="1">
              <path clipRule="evenodd" d={svgPaths.p355c4b00} fill="url(#paint0_linear_1_7701)" fillRule="evenodd" id="Subtract" />
            </mask>
            <g mask="url(#mask0_1_7701)">
              <path clipRule="evenodd" d={svgPaths.p355c4b00} fill="var(--fill-0, #92BFFF)" fillRule="evenodd" id="Subtract_2" />
            </g>
          </g>
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_7701" x1="52.1086" x2="22.2244" y1="0" y2="30.2533">
              <stop />
              <stop offset="1" />
            </linearGradient>
          </defs>
        </svg>
        <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-[rgba(0,0,0,0.8)] content-stretch flex items-center left-[calc(50%-8.67px)] opacity-0 px-[8px] py-[4px] rounded-[8px] top-[calc(50%-0.05px)]" data-name="Tooltip">
          <div className="[word-break:break-word] content-center flex flex-wrap font-['Inter:Regular',sans-serif] font-normal gap-[4px_8px] items-center leading-[20px] not-italic relative rounded-[8px] shrink-0 text-[14px] text-black whitespace-nowrap" data-name="Text">
            <p className="relative shrink-0" style={{ fontFeatureSettings: "'ss01', 'cv01'" }}>
              Tooltip
            </p>
            <p className="relative shrink-0" style={{ fontFeatureSettings: "'ss01', 'cv01'" }}>
              ⌘
            </p>
          </div>
        </div>
      </div>
    );
  }
  if (property === "3B" && state === "Hover") {
    return (
      <div className={className || "h-[88.1px] relative w-[52.109px]"} data-name="Property=3B, State=Hover">
        <div className="absolute inset-[4.54%_7.68%_-4.54%_-7.68%]" data-name="Frame">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 52.1086 88.0999">
            <g id="Frame">
              <mask height="87" id="mask0_1_7701" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="52" x="0" y="1">
                <path clipRule="evenodd" d={svgPaths.p355c4b00} fill="url(#paint0_linear_1_7701)" fillRule="evenodd" id="Subtract" />
              </mask>
              <g mask="url(#mask0_1_7701)">
                <path clipRule="evenodd" d={svgPaths.p355c4b00} fill="var(--fill-0, #92BFFF)" fillRule="evenodd" id="Subtract_2" />
              </g>
            </g>
            <defs>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_7701" x1="52.1086" x2="22.2244" y1="0" y2="30.2533">
                <stop />
                <stop offset="1" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-[rgba(0,0,0,0.8)] content-stretch flex items-center left-[calc(50%-5.67px)] opacity-0 px-[8px] py-[4px] rounded-[8px] top-[calc(50%+1.95px)]" data-name="Tooltip">
          <div className="[word-break:break-word] content-center flex flex-wrap font-['Inter:Regular',sans-serif] font-normal gap-[4px_8px] items-center leading-[20px] not-italic relative rounded-[8px] shrink-0 text-[14px] text-black whitespace-nowrap" data-name="Text">
            <p className="relative shrink-0" style={{ fontFeatureSettings: "'ss01', 'cv01'" }}>
              Tooltip
            </p>
            <p className="relative shrink-0" style={{ fontFeatureSettings: "'ss01', 'cv01'" }}>
              ⌘
            </p>
          </div>
        </div>
      </div>
    );
  }
  if (property === "3C" && state === "Default") {
    return (
      <div className={className || "h-[119.984px] relative w-[73.718px]"} data-name="Property=3C, State=Default">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 73.7182 119.984">
          <g id="Frame">
            <mask height="120" id="mask0_1_7585" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="74" x="0" y="0">
              <path clipRule="evenodd" d={svgPaths.p85aae00} fill="url(#paint0_linear_1_7585)" fillRule="evenodd" id="Subtract" />
            </mask>
            <g mask="url(#mask0_1_7585)">
              <g id="Subtract_2">
                <path clipRule="evenodd" d={svgPaths.p85aae00} fill="url(#paint1_linear_1_7585)" fillRule="evenodd" />
                <path clipRule="evenodd" d={svgPaths.p85aae00} fill="var(--fill-1, black)" fillRule="evenodd" style={{ mixBlendMode: "screen" }} />
              </g>
            </g>
          </g>
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_7585" x1="73.7182" x2="33.0671" y1="0" y2="42.7485">
              <stop />
              <stop offset="1" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_1_7585" x1="36.8591" x2="36.8591" y1="0" y2="119.984">
              <stop />
              <stop offset="1" stopColor="#1C1C1C" stopOpacity="0.6" />
              <stop offset="1" stopOpacity="0.6" />
            </linearGradient>
          </defs>
        </svg>
        <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-[rgba(0,0,0,0.8)] content-stretch flex items-center left-[calc(50%+17.42px)] opacity-0 px-[8px] py-[4px] rounded-[8px] top-[calc(50%+0.01px)]" data-name="Tooltip">
          <div className="[word-break:break-word] content-center flex flex-wrap font-['Inter:Regular',sans-serif] font-normal gap-[4px_8px] items-center leading-[20px] not-italic relative rounded-[8px] shrink-0 text-[14px] text-black whitespace-nowrap" data-name="Text">
            <p className="relative shrink-0" style={{ fontFeatureSettings: "'ss01', 'cv01'" }}>
              Tooltip
            </p>
            <p className="relative shrink-0" style={{ fontFeatureSettings: "'ss01', 'cv01'" }}>
              ⌘
            </p>
          </div>
        </div>
      </div>
    );
  }
  if (property === "3C" && state === "Appear") {
    return (
      <div className={className || "h-[119.984px] relative w-[73.718px]"} data-name="Property=3C, State=Appear">
        <div className="absolute inset-[0.12%_0_0_0.95%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 73.0195 119.844">
            <path d={svgPaths.p30d41300} id="Subtract" opacity="0.2" stroke="var(--stroke-0, black)" />
          </svg>
        </div>
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 73.7182 119.984">
          <g id="Frame">
            <mask height="120" id="mask0_1_7709" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="74" x="0" y="0">
              <path clipRule="evenodd" d={svgPaths.p85aae00} fill="url(#paint0_linear_1_7709)" fillRule="evenodd" id="Subtract" />
            </mask>
            <g mask="url(#mask0_1_7709)">
              <g id="Subtract_2">
                <path clipRule="evenodd" d={svgPaths.p85aae00} fill="url(#paint1_linear_1_7709)" fillRule="evenodd" />
                <path clipRule="evenodd" d={svgPaths.p85aae00} fill="var(--fill-1, black)" fillRule="evenodd" style={{ mixBlendMode: "screen" }} />
              </g>
            </g>
          </g>
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_7709" x1="-13.7214" x2="9.90727" y1="-26" y2="-4.90404">
              <stop />
              <stop offset="1" stopOpacity="0" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_1_7709" x1="36.8591" x2="36.8591" y1="0" y2="119.984">
              <stop />
              <stop offset="1" stopColor="#1C1C1C" stopOpacity="0.6" />
              <stop offset="1" stopOpacity="0.6" />
            </linearGradient>
          </defs>
        </svg>
        <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-[rgba(0,0,0,0.8)] content-stretch flex items-center left-[calc(50%+17.42px)] opacity-0 px-[8px] py-[4px] rounded-[8px] top-[calc(50%+0.01px)]" data-name="Tooltip">
          <div className="[word-break:break-word] content-center flex flex-wrap font-['Inter:Regular',sans-serif] font-normal gap-[4px_8px] items-center leading-[20px] not-italic relative rounded-[8px] shrink-0 text-[14px] text-black whitespace-nowrap" data-name="Text">
            <p className="relative shrink-0" style={{ fontFeatureSettings: "'ss01', 'cv01'" }}>
              Tooltip
            </p>
            <p className="relative shrink-0" style={{ fontFeatureSettings: "'ss01', 'cv01'" }}>
              ⌘
            </p>
          </div>
        </div>
      </div>
    );
  }
  if (property === "3C" && state === "Normal") {
    return (
      <div className={className || "h-[119.984px] relative w-[73.718px]"} data-name="Property=3C, State=Normal">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 73.7182 119.984">
          <g id="Frame">
            <mask height="120" id="mask0_1_7585" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="74" x="0" y="0">
              <path clipRule="evenodd" d={svgPaths.p85aae00} fill="url(#paint0_linear_1_7585)" fillRule="evenodd" id="Subtract" />
            </mask>
            <g mask="url(#mask0_1_7585)">
              <g id="Subtract_2">
                <path clipRule="evenodd" d={svgPaths.p85aae00} fill="url(#paint1_linear_1_7585)" fillRule="evenodd" />
                <path clipRule="evenodd" d={svgPaths.p85aae00} fill="var(--fill-1, black)" fillRule="evenodd" style={{ mixBlendMode: "screen" }} />
              </g>
            </g>
          </g>
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_7585" x1="73.7182" x2="33.0671" y1="0" y2="42.7485">
              <stop />
              <stop offset="1" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_1_7585" x1="36.8591" x2="36.8591" y1="0" y2="119.984">
              <stop />
              <stop offset="1" stopColor="#1C1C1C" stopOpacity="0.6" />
              <stop offset="1" stopOpacity="0.6" />
            </linearGradient>
          </defs>
        </svg>
        <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-[rgba(0,0,0,0.8)] content-stretch flex items-center left-[calc(50%+17.42px)] opacity-0 px-[8px] py-[4px] rounded-[8px] top-[calc(50%+0.01px)]" data-name="Tooltip">
          <div className="[word-break:break-word] content-center flex flex-wrap font-['Inter:Regular',sans-serif] font-normal gap-[4px_8px] items-center leading-[20px] not-italic relative rounded-[8px] shrink-0 text-[14px] text-black whitespace-nowrap" data-name="Text">
            <p className="relative shrink-0" style={{ fontFeatureSettings: "'ss01', 'cv01'" }}>
              Tooltip
            </p>
            <p className="relative shrink-0" style={{ fontFeatureSettings: "'ss01', 'cv01'" }}>
              ⌘
            </p>
          </div>
        </div>
      </div>
    );
  }
  if (property === "3C" && state === "Hover") {
    return (
      <div className={className || "h-[119.984px] relative w-[73.718px]"} data-name="Property=3C, State=Hover">
        <div className="absolute inset-[3.33%_-5.43%_-3.33%_5.43%]" data-name="Frame">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 73.7182 119.984">
            <g id="Frame">
              <mask height="120" id="mask0_1_7585" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="74" x="0" y="0">
                <path clipRule="evenodd" d={svgPaths.p85aae00} fill="url(#paint0_linear_1_7585)" fillRule="evenodd" id="Subtract" />
              </mask>
              <g mask="url(#mask0_1_7585)">
                <g id="Subtract_2">
                  <path clipRule="evenodd" d={svgPaths.p85aae00} fill="url(#paint1_linear_1_7585)" fillRule="evenodd" />
                  <path clipRule="evenodd" d={svgPaths.p85aae00} fill="var(--fill-1, black)" fillRule="evenodd" style={{ mixBlendMode: "screen" }} />
                </g>
              </g>
            </g>
            <defs>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_7585" x1="73.7182" x2="33.0671" y1="0" y2="42.7485">
                <stop />
                <stop offset="1" />
              </linearGradient>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_1_7585" x1="36.8591" x2="36.8591" y1="0" y2="119.984">
                <stop />
                <stop offset="1" stopColor="#1C1C1C" stopOpacity="0.6" />
                <stop offset="1" stopOpacity="0.6" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-[rgba(0,0,0,0.8)] content-stretch flex items-center left-[calc(50%+28.42px)] opacity-0 px-[8px] py-[4px] rounded-[8px] top-[calc(50%+2.01px)]" data-name="Tooltip">
          <div className="[word-break:break-word] content-center flex flex-wrap font-['Inter:Regular',sans-serif] font-normal gap-[4px_8px] items-center leading-[20px] not-italic relative rounded-[8px] shrink-0 text-[14px] text-black whitespace-nowrap" data-name="Text">
            <p className="relative shrink-0" style={{ fontFeatureSettings: "'ss01', 'cv01'" }}>
              Tooltip
            </p>
            <p className="relative shrink-0" style={{ fontFeatureSettings: "'ss01', 'cv01'" }}>
              ⌘
            </p>
          </div>
        </div>
      </div>
    );
  }
  if (property === "4D" && state === "Default") {
    return (
      <div className={className || "h-[119.967px] relative w-[74.3px]"} data-name="Property=4D, State=Default">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 74.3004 119.967">
          <g id="Frame">
            <mask height="120" id="mask0_1_7627" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="75" x="0" y="0">
              <path clipRule="evenodd" d={svgPaths.p3a6cf100} fill="url(#paint0_linear_1_7627)" fillRule="evenodd" id="Subtract" />
            </mask>
            <g mask="url(#mask0_1_7627)">
              <g id="Subtract_2">
                <path clipRule="evenodd" d={svgPaths.p3a6cf100} fill="url(#paint1_linear_1_7627)" fillRule="evenodd" />
                <path clipRule="evenodd" d={svgPaths.p3a6cf100} fill="var(--fill-1, black)" fillRule="evenodd" style={{ mixBlendMode: "screen" }} />
              </g>
            </g>
          </g>
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_7627" x1="74.3004" x2="33.6726" y1="0" y2="43.0674">
              <stop />
              <stop offset="1" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_1_7627" x1="37.1502" x2="37.1502" y1="0" y2="119.967">
              <stop />
              <stop offset="1" stopColor="#1C1C1C" stopOpacity="0.6" />
              <stop offset="1" stopOpacity="0.6" />
            </linearGradient>
          </defs>
        </svg>
        <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-[rgba(0,0,0,0.8)] content-stretch flex items-center left-[calc(50%+47.16px)] opacity-0 px-[8px] py-[4px] rounded-[8px] top-[calc(50%+0.02px)]" data-name="Tooltip">
          <div className="content-stretch flex flex-col items-start justify-center relative rounded-[8px] shrink-0 w-[60px]" data-name="Text">
            <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[12px] text-white w-full" style={{ fontFeatureSettings: "'ss01', 'cv01'" }}>
              52.1%
            </p>
          </div>
        </div>
      </div>
    );
  }
  if (property === "4D" && state === "Appear") {
    return (
      <div className={className || "h-[119.967px] relative w-[74.3px]"} data-name="Property=4D, State=Appear">
        <div className="absolute inset-[0.14%_0_0_0.93%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 73.6097 119.797">
            <path d={svgPaths.pc2cd400} id="Subtract" opacity="0.2" stroke="var(--stroke-0, black)" />
          </svg>
        </div>
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 74.3004 119.967">
          <g id="Frame">
            <mask height="120" id="mask0_1_7675" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="75" x="0" y="0">
              <path clipRule="evenodd" d={svgPaths.p3a6cf100} fill="url(#paint0_linear_1_7675)" fillRule="evenodd" id="Subtract" />
            </mask>
            <g mask="url(#mask0_1_7675)">
              <g id="Subtract_2">
                <path clipRule="evenodd" d={svgPaths.p3a6cf100} fill="url(#paint1_linear_1_7675)" fillRule="evenodd" />
                <path clipRule="evenodd" d={svgPaths.p3a6cf100} fill="var(--fill-1, black)" fillRule="evenodd" style={{ mixBlendMode: "screen" }} />
              </g>
            </g>
          </g>
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_7675" x1="0.310547" x2="10.4277" y1="-22.5" y2="0.816949">
              <stop />
              <stop offset="1" stopOpacity="0" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_1_7675" x1="37.1502" x2="37.1502" y1="0" y2="119.967">
              <stop />
              <stop offset="1" stopColor="#1C1C1C" stopOpacity="0.6" />
              <stop offset="1" stopOpacity="0.6" />
            </linearGradient>
          </defs>
        </svg>
        <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-[rgba(0,0,0,0.8)] content-stretch flex items-center left-[calc(50%+19.16px)] opacity-0 px-[8px] py-[4px] rounded-[8px] top-[calc(50%+0.02px)]" data-name="Tooltip">
          <div className="[word-break:break-word] content-center flex flex-wrap font-['Inter:Regular',sans-serif] font-normal gap-[4px_8px] items-center leading-[20px] not-italic relative rounded-[8px] shrink-0 text-[14px] text-black whitespace-nowrap" data-name="Text">
            <p className="relative shrink-0" style={{ fontFeatureSettings: "'ss01', 'cv01'" }}>
              Tooltip
            </p>
            <p className="relative shrink-0" style={{ fontFeatureSettings: "'ss01', 'cv01'" }}>
              ⌘
            </p>
          </div>
        </div>
      </div>
    );
  }
  if (property === "4D" && state === "Normal") {
    return (
      <div className={className || "h-[119.967px] relative w-[74.3px]"} data-name="Property=4D, State=Normal">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 74.3004 119.967">
          <g id="Frame">
            <mask height="120" id="mask0_1_7627" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="75" x="0" y="0">
              <path clipRule="evenodd" d={svgPaths.p3a6cf100} fill="url(#paint0_linear_1_7627)" fillRule="evenodd" id="Subtract" />
            </mask>
            <g mask="url(#mask0_1_7627)">
              <g id="Subtract_2">
                <path clipRule="evenodd" d={svgPaths.p3a6cf100} fill="url(#paint1_linear_1_7627)" fillRule="evenodd" />
                <path clipRule="evenodd" d={svgPaths.p3a6cf100} fill="var(--fill-1, black)" fillRule="evenodd" style={{ mixBlendMode: "screen" }} />
              </g>
            </g>
          </g>
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_7627" x1="74.3004" x2="33.6726" y1="0" y2="43.0674">
              <stop />
              <stop offset="1" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_1_7627" x1="37.1502" x2="37.1502" y1="0" y2="119.967">
              <stop />
              <stop offset="1" stopColor="#1C1C1C" stopOpacity="0.6" />
              <stop offset="1" stopOpacity="0.6" />
            </linearGradient>
          </defs>
        </svg>
        <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-[rgba(0,0,0,0.8)] content-stretch flex items-center left-[calc(50%+19.16px)] opacity-0 px-[8px] py-[4px] rounded-[8px] top-[calc(50%+0.02px)]" data-name="Tooltip">
          <div className="[word-break:break-word] content-center flex flex-wrap font-['Inter:Regular',sans-serif] font-normal gap-[4px_8px] items-center leading-[20px] not-italic relative rounded-[8px] shrink-0 text-[14px] text-black whitespace-nowrap" data-name="Text">
            <p className="relative shrink-0" style={{ fontFeatureSettings: "'ss01', 'cv01'" }}>
              Tooltip
            </p>
            <p className="relative shrink-0" style={{ fontFeatureSettings: "'ss01', 'cv01'" }}>
              ⌘
            </p>
          </div>
        </div>
      </div>
    );
  }
  if (property === "4D" && state === "Hover") {
    return (
      <div className={className || "h-[119.967px] relative w-[74.3px]"} data-name="Property=4D, State=Hover">
        <div className="absolute inset-[3.33%_-5.38%_-3.33%_5.38%]" data-name="Frame">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 74.3004 119.967">
            <g id="Frame">
              <mask height="120" id="mask0_1_7627" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="75" x="0" y="0">
                <path clipRule="evenodd" d={svgPaths.p3a6cf100} fill="url(#paint0_linear_1_7627)" fillRule="evenodd" id="Subtract" />
              </mask>
              <g mask="url(#mask0_1_7627)">
                <g id="Subtract_2">
                  <path clipRule="evenodd" d={svgPaths.p3a6cf100} fill="url(#paint1_linear_1_7627)" fillRule="evenodd" />
                  <path clipRule="evenodd" d={svgPaths.p3a6cf100} fill="var(--fill-1, black)" fillRule="evenodd" style={{ mixBlendMode: "screen" }} />
                </g>
              </g>
            </g>
            <defs>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_7627" x1="74.3004" x2="33.6726" y1="0" y2="43.0674">
                <stop />
                <stop offset="1" />
              </linearGradient>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_1_7627" x1="37.1502" x2="37.1502" y1="0" y2="119.967">
                <stop />
                <stop offset="1" stopColor="#1C1C1C" stopOpacity="0.6" />
                <stop offset="1" stopOpacity="0.6" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-[rgba(0,0,0,0.8)] content-stretch flex items-center left-[calc(50%+30.16px)] opacity-0 px-[8px] py-[4px] rounded-[8px] top-[calc(50%+2.02px)]" data-name="Tooltip">
          <div className="[word-break:break-word] content-center flex flex-wrap font-['Inter:Regular',sans-serif] font-normal gap-[4px_8px] items-center leading-[20px] not-italic relative rounded-[8px] shrink-0 text-[14px] text-black whitespace-nowrap" data-name="Text">
            <p className="relative shrink-0" style={{ fontFeatureSettings: "'ss01', 'cv01'" }}>
              Tooltip
            </p>
            <p className="relative shrink-0" style={{ fontFeatureSettings: "'ss01', 'cv01'" }}>
              ⌘
            </p>
          </div>
        </div>
      </div>
    );
  }
  if (property === "4C" && state === "Default") {
    return (
      <div className={className || "h-[73.186px] relative w-[51.533px]"} data-name="Property=4C, State=Default">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 51.5327 73.1861">
          <g id="Frame">
            <mask height="73" id="mask0_1_7613" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="51" x="0" y="0">
              <path clipRule="evenodd" d={svgPaths.p3d6f9400} fill="url(#paint0_linear_1_7613)" fillRule="evenodd" id="Subtract" />
            </mask>
            <g mask="url(#mask0_1_7613)">
              <path clipRule="evenodd" d={svgPaths.p3d6f9400} fill="var(--fill-0, #92BFFF)" fillRule="evenodd" id="Subtract_2" />
            </g>
          </g>
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_7613" x1="51.5327" x2="27.1317" y1="0" y2="29.4076">
              <stop />
              <stop offset="1" />
            </linearGradient>
          </defs>
        </svg>
        <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-[rgba(0,0,0,0.8)] content-stretch flex items-center left-[calc(50%+24.58px)] opacity-0 px-[8px] py-[4px] rounded-[8px] top-[calc(50%+0.41px)]" data-name="Tooltip">
          <div className="content-stretch flex flex-col items-start justify-center relative rounded-[8px] shrink-0 w-[60px]" data-name="Text">
            <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[12px] text-white w-full" style={{ fontFeatureSettings: "'ss01', 'cv01'" }}>
              22.8%
            </p>
          </div>
        </div>
      </div>
    );
  }
  if (property === "4C" && state === "Appear") {
    return (
      <div className={className || "h-[73.186px] relative w-[51.533px]"} data-name="Property=4C, State=Appear">
        <div className="absolute inset-[1.23%_1.7%_1.38%_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 50.6583 71.2744">
            <path d={svgPaths.p1a01b800} id="Subtract" opacity="0.4" stroke="var(--stroke-0, #92BFFF)" />
          </svg>
        </div>
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 51.5327 73.1861">
          <g id="Frame">
            <mask height="73" id="mask0_1_7533" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="51" x="0" y="0">
              <path clipRule="evenodd" d={svgPaths.p3d6f9400} fill="url(#paint0_linear_1_7533)" fillRule="evenodd" id="Subtract" />
            </mask>
            <g mask="url(#mask0_1_7533)">
              <path clipRule="evenodd" d={svgPaths.p3d6f9400} fill="var(--fill-0, #92BFFF)" fillRule="evenodd" id="Subtract_2" />
            </g>
          </g>
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_7533" x1="51.8433" x2="83.2969" y1="51" y2="71.5397">
              <stop stopOpacity="0" />
              <stop offset="1" />
            </linearGradient>
          </defs>
        </svg>
        <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-[rgba(0,0,0,0.8)] content-stretch flex items-center left-[calc(50%-4.92px)] opacity-0 px-[8px] py-[4px] rounded-[8px] top-[calc(50%+0.41px)]" data-name="Tooltip">
          <div className="[word-break:break-word] content-center flex flex-wrap font-['Inter:Regular',sans-serif] font-normal gap-[4px_8px] items-center leading-[20px] not-italic relative rounded-[8px] shrink-0 text-[14px] text-black whitespace-nowrap" data-name="Text">
            <p className="relative shrink-0" style={{ fontFeatureSettings: "'ss01', 'cv01'" }}>
              Tooltip
            </p>
            <p className="relative shrink-0" style={{ fontFeatureSettings: "'ss01', 'cv01'" }}>
              ⌘
            </p>
          </div>
        </div>
      </div>
    );
  }
  if (property === "4C" && state === "Normal") {
    return (
      <div className={className || "h-[73.186px] relative w-[51.533px]"} data-name="Property=4C, State=Normal">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 51.5327 73.1861">
          <g id="Frame">
            <mask height="73" id="mask0_1_7613" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="51" x="0" y="0">
              <path clipRule="evenodd" d={svgPaths.p3d6f9400} fill="url(#paint0_linear_1_7613)" fillRule="evenodd" id="Subtract" />
            </mask>
            <g mask="url(#mask0_1_7613)">
              <path clipRule="evenodd" d={svgPaths.p3d6f9400} fill="var(--fill-0, #92BFFF)" fillRule="evenodd" id="Subtract_2" />
            </g>
          </g>
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_7613" x1="51.5327" x2="27.1317" y1="0" y2="29.4076">
              <stop />
              <stop offset="1" />
            </linearGradient>
          </defs>
        </svg>
        <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-[rgba(0,0,0,0.8)] content-stretch flex items-center left-[calc(50%-4.92px)] opacity-0 px-[8px] py-[4px] rounded-[8px] top-[calc(50%+0.41px)]" data-name="Tooltip">
          <div className="[word-break:break-word] content-center flex flex-wrap font-['Inter:Regular',sans-serif] font-normal gap-[4px_8px] items-center leading-[20px] not-italic relative rounded-[8px] shrink-0 text-[14px] text-black whitespace-nowrap" data-name="Text">
            <p className="relative shrink-0" style={{ fontFeatureSettings: "'ss01', 'cv01'" }}>
              Tooltip
            </p>
            <p className="relative shrink-0" style={{ fontFeatureSettings: "'ss01', 'cv01'" }}>
              ⌘
            </p>
          </div>
        </div>
      </div>
    );
  }
  if (property === "4C" && state === "Hover") {
    return (
      <div className={className || "h-[73.186px] relative w-[51.533px]"} data-name="Property=4C, State=Hover">
        <div className="absolute inset-[5.47%_7.76%_-5.47%_-7.76%]" data-name="Frame">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 51.5327 73.1861">
            <g id="Frame">
              <mask height="73" id="mask0_1_7613" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="51" x="0" y="0">
                <path clipRule="evenodd" d={svgPaths.p3d6f9400} fill="url(#paint0_linear_1_7613)" fillRule="evenodd" id="Subtract" />
              </mask>
              <g mask="url(#mask0_1_7613)">
                <path clipRule="evenodd" d={svgPaths.p3d6f9400} fill="var(--fill-0, #92BFFF)" fillRule="evenodd" id="Subtract_2" />
              </g>
            </g>
            <defs>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_7613" x1="51.5327" x2="27.1317" y1="0" y2="29.4076">
                <stop />
                <stop offset="1" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-[rgba(0,0,0,0.8)] content-stretch flex items-center left-[calc(50%-1.92px)] opacity-0 px-[8px] py-[4px] rounded-[8px] top-[calc(50%+2.41px)]" data-name="Tooltip">
          <div className="[word-break:break-word] content-center flex flex-wrap font-['Inter:Regular',sans-serif] font-normal gap-[4px_8px] items-center leading-[20px] not-italic relative rounded-[8px] shrink-0 text-[14px] text-black whitespace-nowrap" data-name="Text">
            <p className="relative shrink-0" style={{ fontFeatureSettings: "'ss01', 'cv01'" }}>
              Tooltip
            </p>
            <p className="relative shrink-0" style={{ fontFeatureSettings: "'ss01', 'cv01'" }}>
              ⌘
            </p>
          </div>
        </div>
      </div>
    );
  }
  if (property === "4B" && state === "Default") {
    return (
      <div className={className || "h-[42.302px] relative w-[42.268px]"} data-name="Property=4B, State=Default">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 42.268 42.302">
          <g id="Frame">
            <mask height="41" id="mask0_1_7521" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="40" x="1" y="1">
              <path clipRule="evenodd" d={svgPaths.p38b2cf00} fill="url(#paint0_linear_1_7521)" fillRule="evenodd" id="Subtract" />
            </mask>
            <g mask="url(#mask0_1_7521)">
              <path clipRule="evenodd" d={svgPaths.p38b2cf00} fill="var(--fill-0, #94E9B8)" fillRule="evenodd" id="Subtract_2" />
            </g>
          </g>
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_7521" x1="42.268" x2="29.762" y1="0" y2="21.3879">
              <stop />
              <stop offset="1" />
            </linearGradient>
          </defs>
        </svg>
        <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-[rgba(0,0,0,0.8)] content-stretch flex items-center left-[calc(50%+26.98px)] opacity-0 px-[8px] py-[4px] rounded-[8px] top-[calc(50%-0.15px)]" data-name="Tooltip">
          <div className="content-stretch flex flex-col items-start justify-center relative rounded-[8px] shrink-0 w-[60px]" data-name="Text">
            <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[12px] text-white w-full" style={{ fontFeatureSettings: "'ss01', 'cv01'" }}>
              13.9%
            </p>
          </div>
        </div>
      </div>
    );
  }
  if (property === "4B" && state === "Appear") {
    return (
      <div className={className || "h-[42.302px] relative w-[42.268px]"} data-name="Property=4B, State=Appear">
        <div className="absolute inset-[3.56%_3.42%_1.98%_2.57%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 39.7356 39.958">
            <path d={svgPaths.p37f84b00} id="Subtract" opacity="0.4" stroke="var(--stroke-0, #94E9B8)" />
          </svg>
        </div>
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 42.268 42.302">
          <g id="Frame">
            <mask height="41" id="mask0_1_7551" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="40" x="1" y="1">
              <path clipRule="evenodd" d={svgPaths.p38b2cf00} fill="url(#paint0_linear_1_7551)" fillRule="evenodd" id="Subtract" />
            </mask>
            <g mask="url(#mask0_1_7551)">
              <path clipRule="evenodd" d={svgPaths.p38b2cf00} fill="var(--fill-0, #94E9B8)" fillRule="evenodd" id="Subtract_2" />
            </g>
          </g>
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_7551" x1="21.485" x2="23.0953" y1="42.6651" y2="60.0561">
              <stop stopOpacity="0" />
              <stop offset="1" />
            </linearGradient>
          </defs>
        </svg>
        <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-[rgba(0,0,0,0.8)] content-stretch flex items-center left-[calc(50%-1.02px)] opacity-0 px-[8px] py-[4px] rounded-[8px] top-[calc(50%-0.15px)]" data-name="Tooltip">
          <div className="[word-break:break-word] content-center flex flex-wrap font-['Inter:Regular',sans-serif] font-normal gap-[4px_8px] items-center leading-[20px] not-italic relative rounded-[8px] shrink-0 text-[14px] text-black whitespace-nowrap" data-name="Text">
            <p className="relative shrink-0" style={{ fontFeatureSettings: "'ss01', 'cv01'" }}>
              Tooltip
            </p>
            <p className="relative shrink-0" style={{ fontFeatureSettings: "'ss01', 'cv01'" }}>
              ⌘
            </p>
          </div>
        </div>
      </div>
    );
  }
  if (property === "4B" && state === "Normal") {
    return (
      <div className={className || "h-[42.302px] relative w-[42.268px]"} data-name="Property=4B, State=Normal">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 42.268 42.302">
          <g id="Frame">
            <mask height="41" id="mask0_1_7521" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="40" x="1" y="1">
              <path clipRule="evenodd" d={svgPaths.p38b2cf00} fill="url(#paint0_linear_1_7521)" fillRule="evenodd" id="Subtract" />
            </mask>
            <g mask="url(#mask0_1_7521)">
              <path clipRule="evenodd" d={svgPaths.p38b2cf00} fill="var(--fill-0, #94E9B8)" fillRule="evenodd" id="Subtract_2" />
            </g>
          </g>
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_7521" x1="42.268" x2="29.762" y1="0" y2="21.3879">
              <stop />
              <stop offset="1" />
            </linearGradient>
          </defs>
        </svg>
        <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-[rgba(0,0,0,0.8)] content-stretch flex items-center left-[calc(50%-1.02px)] opacity-0 px-[8px] py-[4px] rounded-[8px] top-[calc(50%-0.15px)]" data-name="Tooltip">
          <div className="[word-break:break-word] content-center flex flex-wrap font-['Inter:Regular',sans-serif] font-normal gap-[4px_8px] items-center leading-[20px] not-italic relative rounded-[8px] shrink-0 text-[14px] text-black whitespace-nowrap" data-name="Text">
            <p className="relative shrink-0" style={{ fontFeatureSettings: "'ss01', 'cv01'" }}>
              Tooltip
            </p>
            <p className="relative shrink-0" style={{ fontFeatureSettings: "'ss01', 'cv01'" }}>
              ⌘
            </p>
          </div>
        </div>
      </div>
    );
  }
  if (property === "4B" && state === "Hover") {
    return (
      <div className={className || "h-[42.302px] relative w-[42.268px]"} data-name="Property=4B, State=Hover">
        <div className="absolute inset-[-9.46%_9.46%_9.46%_-9.46%]" data-name="Frame">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 42.268 42.302">
            <g id="Frame">
              <mask height="41" id="mask0_1_7521" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="40" x="1" y="1">
                <path clipRule="evenodd" d={svgPaths.p38b2cf00} fill="url(#paint0_linear_1_7521)" fillRule="evenodd" id="Subtract" />
              </mask>
              <g mask="url(#mask0_1_7521)">
                <path clipRule="evenodd" d={svgPaths.p38b2cf00} fill="var(--fill-0, #94E9B8)" fillRule="evenodd" id="Subtract_2" />
              </g>
            </g>
            <defs>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_7521" x1="42.268" x2="29.762" y1="0" y2="21.3879">
                <stop />
                <stop offset="1" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-[rgba(0,0,0,0.8)] content-stretch flex items-center left-[calc(50%+1.98px)] opacity-0 px-[8px] py-[4px] rounded-[8px] top-[calc(50%+1.85px)]" data-name="Tooltip">
          <div className="[word-break:break-word] content-center flex flex-wrap font-['Inter:Regular',sans-serif] font-normal gap-[4px_8px] items-center leading-[20px] not-italic relative rounded-[8px] shrink-0 text-[14px] text-black whitespace-nowrap" data-name="Text">
            <p className="relative shrink-0" style={{ fontFeatureSettings: "'ss01', 'cv01'" }}>
              Tooltip
            </p>
            <p className="relative shrink-0" style={{ fontFeatureSettings: "'ss01', 'cv01'" }}>
              ⌘
            </p>
          </div>
        </div>
      </div>
    );
  }
  if (property === "4A" && state === "Default") {
    return (
      <div className={className || "h-[33.168px] relative w-[28.449px]"} data-name="Property=4A, State=Default">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28.4489 33.1682">
          <g id="Frame">
            <mask height="32" id="mask0_1_7679" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="28" x="1" y="0">
              <path clipRule="evenodd" d={svgPaths.p379c5880} fill="url(#paint0_linear_1_7679)" fillRule="evenodd" id="Subtract" />
            </mask>
            <g mask="url(#mask0_1_7679)">
              <path clipRule="evenodd" d={svgPaths.p379c5880} fill="var(--fill-0, #AEC7ED)" fillRule="evenodd" id="Subtract_2" />
            </g>
          </g>
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_7679" x1="28.4489" x2="17.9783" y1="0" y2="15.3713">
              <stop />
              <stop offset="1" />
            </linearGradient>
          </defs>
        </svg>
        <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-[rgba(0,0,0,0.8)] content-stretch flex items-center left-[calc(50%+31.34px)] opacity-0 px-[8px] py-[4px] rounded-[8px] top-[calc(50%+0.42px)]" data-name="Tooltip">
          <div className="content-stretch flex flex-col items-start justify-center relative rounded-[8px] shrink-0 w-[60px]" data-name="Text">
            <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[12px] text-white w-full" style={{ fontFeatureSettings: "'ss01', 'cv01'" }}>
              11.2%
            </p>
          </div>
        </div>
      </div>
    );
  }
  if (property === "4A" && state === "Appear") {
    return (
      <div className={className || "h-[33.168px] relative w-[28.449px]"} data-name="Property=4A, State=Appear">
        <div className="absolute inset-[0.37%_0_3.61%_5.35%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26.9259 31.8465">
            <path d={svgPaths.p36a2dff0} id="Subtract" opacity="0.4" stroke="var(--stroke-0, #AEC7ED)" />
          </svg>
        </div>
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28.4489 33.1682">
          <g id="Frame">
            <mask height="32" id="mask0_1_7575" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="28" x="1" y="0">
              <path clipRule="evenodd" d={svgPaths.p379c5880} fill="url(#paint0_linear_1_7575)" fillRule="evenodd" id="Subtract" />
            </mask>
            <g mask="url(#mask0_1_7575)">
              <path clipRule="evenodd" d={svgPaths.p379c5880} fill="var(--fill-0, #AEC7ED)" fillRule="evenodd" id="Subtract_2" />
            </g>
          </g>
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_7575" x1="-0.443237" x2="-10.4068" y1="23" y2="35.4333">
              <stop stopOpacity="0" />
              <stop offset="1" />
            </linearGradient>
          </defs>
        </svg>
        <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-[rgba(0,0,0,0.8)] content-stretch flex items-center left-[calc(50%+2.34px)] opacity-0 px-[8px] py-[4px] rounded-[8px] top-[calc(50%+0.42px)]" data-name="Tooltip">
          <div className="[word-break:break-word] content-center flex flex-wrap font-['Inter:Regular',sans-serif] font-normal gap-[4px_8px] items-center leading-[20px] not-italic relative rounded-[8px] shrink-0 text-[14px] text-black whitespace-nowrap" data-name="Text">
            <p className="relative shrink-0" style={{ fontFeatureSettings: "'ss01', 'cv01'" }}>
              Tooltip
            </p>
            <p className="relative shrink-0" style={{ fontFeatureSettings: "'ss01', 'cv01'" }}>
              ⌘
            </p>
          </div>
        </div>
      </div>
    );
  }
  if (property === "4A" && state === "Normal") {
    return (
      <div className={className || "h-[33.168px] relative w-[28.449px]"} data-name="Property=4A, State=Normal">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28.4489 33.1682">
          <g id="Frame">
            <mask height="32" id="mask0_1_7679" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="28" x="1" y="0">
              <path clipRule="evenodd" d={svgPaths.p379c5880} fill="url(#paint0_linear_1_7679)" fillRule="evenodd" id="Subtract" />
            </mask>
            <g mask="url(#mask0_1_7679)">
              <path clipRule="evenodd" d={svgPaths.p379c5880} fill="var(--fill-0, #AEC7ED)" fillRule="evenodd" id="Subtract_2" />
            </g>
          </g>
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_7679" x1="28.4489" x2="17.9783" y1="0" y2="15.3713">
              <stop />
              <stop offset="1" />
            </linearGradient>
          </defs>
        </svg>
        <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-[rgba(0,0,0,0.8)] content-stretch flex items-center left-[calc(50%+2.34px)] opacity-0 px-[8px] py-[4px] rounded-[8px] top-[calc(50%+0.42px)]" data-name="Tooltip">
          <div className="[word-break:break-word] content-center flex flex-wrap font-['Inter:Regular',sans-serif] font-normal gap-[4px_8px] items-center leading-[20px] not-italic relative rounded-[8px] shrink-0 text-[14px] text-black whitespace-nowrap" data-name="Text">
            <p className="relative shrink-0" style={{ fontFeatureSettings: "'ss01', 'cv01'" }}>
              Tooltip
            </p>
            <p className="relative shrink-0" style={{ fontFeatureSettings: "'ss01', 'cv01'" }}>
              ⌘
            </p>
          </div>
        </div>
      </div>
    );
  }
  if (property === "4A" && state === "Hover") {
    return (
      <div className={className || "h-[33.168px] relative w-[28.449px]"} data-name="Property=4A, State=Hover">
        <div className="absolute inset-[-12.06%_7.03%_12.06%_-7.03%]" data-name="Frame">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28.4489 33.1682">
            <g id="Frame">
              <mask height="32" id="mask0_1_7679" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="28" x="1" y="0">
                <path clipRule="evenodd" d={svgPaths.p379c5880} fill="url(#paint0_linear_1_7679)" fillRule="evenodd" id="Subtract" />
              </mask>
              <g mask="url(#mask0_1_7679)">
                <path clipRule="evenodd" d={svgPaths.p379c5880} fill="var(--fill-0, #AEC7ED)" fillRule="evenodd" id="Subtract_2" />
              </g>
            </g>
            <defs>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_7679" x1="28.4489" x2="17.9783" y1="0" y2="15.3713">
                <stop />
                <stop offset="1" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-[rgba(0,0,0,0.8)] content-stretch flex items-center left-[calc(50%+7.34px)] opacity-0 px-[8px] py-[4px] rounded-[8px] top-[calc(50%+2.42px)]" data-name="Tooltip">
          <div className="[word-break:break-word] content-center flex flex-wrap font-['Inter:Regular',sans-serif] font-normal gap-[4px_8px] items-center leading-[20px] not-italic relative rounded-[8px] shrink-0 text-[14px] text-black whitespace-nowrap" data-name="Text">
            <p className="relative shrink-0" style={{ fontFeatureSettings: "'ss01', 'cv01'" }}>
              Tooltip
            </p>
            <p className="relative shrink-0" style={{ fontFeatureSettings: "'ss01', 'cv01'" }}>
              ⌘
            </p>
          </div>
        </div>
      </div>
    );
  }
  if (property === "5E" && state === "Default") {
    return (
      <div className={className || "h-[119.967px] relative w-[73.718px]"} data-name="Property=5E, State=Default">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 73.7181 119.967">
          <g id="Frame">
            <mask height="120" id="mask0_1_7543" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="74" x="0" y="0">
              <path clipRule="evenodd" d={svgPaths.p2275600} fill="url(#paint0_linear_1_7543)" fillRule="evenodd" id="Subtract" />
            </mask>
            <g mask="url(#mask0_1_7543)">
              <g id="Subtract_2">
                <path clipRule="evenodd" d={svgPaths.p2275600} fill="url(#paint1_linear_1_7543)" fillRule="evenodd" />
                <path clipRule="evenodd" d={svgPaths.p2275600} fill="var(--fill-1, black)" fillRule="evenodd" style={{ mixBlendMode: "screen" }} />
              </g>
            </g>
          </g>
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_7543" x1="73.7181" x2="33.0729" y1="0" y2="42.7482">
              <stop />
              <stop offset="1" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_1_7543" x1="36.8591" x2="36.8591" y1="0" y2="119.967">
              <stop />
              <stop offset="1" stopColor="#1C1C1C" stopOpacity="0.6" />
              <stop offset="1" stopOpacity="0.6" />
            </linearGradient>
          </defs>
        </svg>
        <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-[rgba(0,0,0,0.8)] content-stretch flex items-center left-[calc(50%+18.19px)] opacity-0 px-[8px] py-[4px] rounded-[8px] top-[calc(50%+0.02px)]" data-name="Tooltip">
          <div className="[word-break:break-word] content-center flex flex-wrap font-['Inter:Regular',sans-serif] font-normal gap-[4px_8px] items-center leading-[20px] not-italic relative rounded-[8px] shrink-0 text-[14px] text-black whitespace-nowrap" data-name="Text">
            <p className="relative shrink-0" style={{ fontFeatureSettings: "'ss01', 'cv01'" }}>
              Tooltip
            </p>
            <p className="relative shrink-0" style={{ fontFeatureSettings: "'ss01', 'cv01'" }}>
              ⌘
            </p>
          </div>
        </div>
      </div>
    );
  }
  if (property === "5E" && state === "Appear") {
    return (
      <div className={className || "h-[119.967px] relative w-[73.718px]"} data-name="Property=5E, State=Appear">
        <div className="absolute inset-[0.14%_0_0_0.95%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 73.0194 119.797">
            <path d={svgPaths.p3e72fe00} id="Subtract" opacity="0.2" stroke="var(--stroke-0, black)" />
          </svg>
        </div>
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 73.7181 119.967">
          <g id="Frame">
            <mask height="120" id="mask0_1_7581" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="74" x="0" y="0">
              <path clipRule="evenodd" d={svgPaths.p2275600} fill="url(#paint0_linear_1_7581)" fillRule="evenodd" id="Subtract" />
            </mask>
            <g mask="url(#mask0_1_7581)">
              <g id="Subtract_2">
                <path clipRule="evenodd" d={svgPaths.p2275600} fill="url(#paint1_linear_1_7581)" fillRule="evenodd" />
                <path clipRule="evenodd" d={svgPaths.p2275600} fill="var(--fill-1, black)" fillRule="evenodd" style={{ mixBlendMode: "screen" }} />
              </g>
            </g>
          </g>
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_7581" x1="-30.9475" x2="-2.21002" y1="-12.5" y2="13.0452">
              <stop />
              <stop offset="1" stopOpacity="0" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_1_7581" x1="36.8591" x2="36.8591" y1="0" y2="119.967">
              <stop />
              <stop offset="1" stopColor="#1C1C1C" stopOpacity="0.6" />
              <stop offset="1" stopOpacity="0.6" />
            </linearGradient>
          </defs>
        </svg>
        <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-[rgba(0,0,0,0.8)] content-stretch flex items-center left-[calc(50%+18.19px)] opacity-0 px-[8px] py-[4px] rounded-[8px] top-[calc(50%+0.02px)]" data-name="Tooltip">
          <div className="[word-break:break-word] content-center flex flex-wrap font-['Inter:Regular',sans-serif] font-normal gap-[4px_8px] items-center leading-[20px] not-italic relative rounded-[8px] shrink-0 text-[14px] text-black whitespace-nowrap" data-name="Text">
            <p className="relative shrink-0" style={{ fontFeatureSettings: "'ss01', 'cv01'" }}>
              Tooltip
            </p>
            <p className="relative shrink-0" style={{ fontFeatureSettings: "'ss01', 'cv01'" }}>
              ⌘
            </p>
          </div>
        </div>
      </div>
    );
  }
  if (property === "5E" && state === "Normal") {
    return (
      <div className={className || "h-[119.967px] relative w-[73.718px]"} data-name="Property=5E, State=Normal">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 73.7181 119.967">
          <g id="Frame">
            <mask height="120" id="mask0_1_7543" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="74" x="0" y="0">
              <path clipRule="evenodd" d={svgPaths.p2275600} fill="url(#paint0_linear_1_7543)" fillRule="evenodd" id="Subtract" />
            </mask>
            <g mask="url(#mask0_1_7543)">
              <g id="Subtract_2">
                <path clipRule="evenodd" d={svgPaths.p2275600} fill="url(#paint1_linear_1_7543)" fillRule="evenodd" />
                <path clipRule="evenodd" d={svgPaths.p2275600} fill="var(--fill-1, black)" fillRule="evenodd" style={{ mixBlendMode: "screen" }} />
              </g>
            </g>
          </g>
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_7543" x1="73.7181" x2="33.0729" y1="0" y2="42.7482">
              <stop />
              <stop offset="1" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_1_7543" x1="36.8591" x2="36.8591" y1="0" y2="119.967">
              <stop />
              <stop offset="1" stopColor="#1C1C1C" stopOpacity="0.6" />
              <stop offset="1" stopOpacity="0.6" />
            </linearGradient>
          </defs>
        </svg>
        <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-[rgba(0,0,0,0.8)] content-stretch flex items-center left-[calc(50%+18.19px)] opacity-0 px-[8px] py-[4px] rounded-[8px] top-[calc(50%+0.02px)]" data-name="Tooltip">
          <div className="[word-break:break-word] content-center flex flex-wrap font-['Inter:Regular',sans-serif] font-normal gap-[4px_8px] items-center leading-[20px] not-italic relative rounded-[8px] shrink-0 text-[14px] text-black whitespace-nowrap" data-name="Text">
            <p className="relative shrink-0" style={{ fontFeatureSettings: "'ss01', 'cv01'" }}>
              Tooltip
            </p>
            <p className="relative shrink-0" style={{ fontFeatureSettings: "'ss01', 'cv01'" }}>
              ⌘
            </p>
          </div>
        </div>
      </div>
    );
  }
  if (property === "5E" && state === "Hover") {
    return (
      <div className={className || "h-[119.967px] relative w-[73.718px]"} data-name="Property=5E, State=Hover">
        <div className="absolute inset-[3.33%_-5.43%_-3.33%_5.43%]" data-name="Frame">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 73.7181 119.967">
            <g id="Frame">
              <mask height="120" id="mask0_1_7543" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="74" x="0" y="0">
                <path clipRule="evenodd" d={svgPaths.p2275600} fill="url(#paint0_linear_1_7543)" fillRule="evenodd" id="Subtract" />
              </mask>
              <g mask="url(#mask0_1_7543)">
                <g id="Subtract_2">
                  <path clipRule="evenodd" d={svgPaths.p2275600} fill="url(#paint1_linear_1_7543)" fillRule="evenodd" />
                  <path clipRule="evenodd" d={svgPaths.p2275600} fill="var(--fill-1, black)" fillRule="evenodd" style={{ mixBlendMode: "screen" }} />
                </g>
              </g>
            </g>
            <defs>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_7543" x1="73.7181" x2="33.0729" y1="0" y2="42.7482">
                <stop />
                <stop offset="1" />
              </linearGradient>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_1_7543" x1="36.8591" x2="36.8591" y1="0" y2="119.967">
                <stop />
                <stop offset="1" stopColor="#1C1C1C" stopOpacity="0.6" />
                <stop offset="1" stopOpacity="0.6" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-[rgba(0,0,0,0.8)] content-stretch flex items-center left-[calc(50%+29.19px)] opacity-0 px-[8px] py-[4px] rounded-[8px] top-[calc(50%+2.02px)]" data-name="Tooltip">
          <div className="[word-break:break-word] content-center flex flex-wrap font-['Inter:Regular',sans-serif] font-normal gap-[4px_8px] items-center leading-[20px] not-italic relative rounded-[8px] shrink-0 text-[14px] text-black whitespace-nowrap" data-name="Text">
            <p className="relative shrink-0" style={{ fontFeatureSettings: "'ss01', 'cv01'" }}>
              Tooltip
            </p>
            <p className="relative shrink-0" style={{ fontFeatureSettings: "'ss01', 'cv01'" }}>
              ⌘
            </p>
          </div>
        </div>
      </div>
    );
  }
  if (property === "5D" && state === "Default") {
    return (
      <div className={className || "h-[48.948px] relative w-[49.737px]"} data-name="Property=5D, State=Default">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 49.737 48.9479">
          <g id="Frame">
            <mask height="48" id="mask0_1_7547" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="48" x="1" y="0">
              <path clipRule="evenodd" d={svgPaths.p2078200} fill="url(#paint0_linear_1_7547)" fillRule="evenodd" id="Subtract" />
            </mask>
            <g mask="url(#mask0_1_7547)">
              <path clipRule="evenodd" d={svgPaths.p2078200} fill="var(--fill-0, #92BFFF)" fillRule="evenodd" id="Subtract_2" />
            </g>
          </g>
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_7547" x1="49.737" x2="35.3864" y1="0" y2="24.9582">
              <stop />
              <stop offset="1" />
            </linearGradient>
          </defs>
        </svg>
        <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-[rgba(0,0,0,0.8)] content-stretch flex items-center left-[calc(50%-0.08px)] opacity-0 px-[8px] py-[4px] rounded-[8px] top-[calc(50%-0.47px)]" data-name="Tooltip">
          <div className="[word-break:break-word] content-center flex flex-wrap font-['Inter:Regular',sans-serif] font-normal gap-[4px_8px] items-center leading-[20px] not-italic relative rounded-[8px] shrink-0 text-[14px] text-black whitespace-nowrap" data-name="Text">
            <p className="relative shrink-0" style={{ fontFeatureSettings: "'ss01', 'cv01'" }}>
              Tooltip
            </p>
            <p className="relative shrink-0" style={{ fontFeatureSettings: "'ss01', 'cv01'" }}>
              ⌘
            </p>
          </div>
        </div>
      </div>
    );
  }
  if (property === "5D" && state === "Appear") {
    return (
      <div className={className || "h-[48.948px] relative w-[49.737px]"} data-name="Property=5D, State=Appear">
        <div className="absolute inset-[1.75%_1.8%_1.98%_2.1%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 47.7959 47.1204">
            <path d={svgPaths.p36603800} id="Subtract" opacity="0.4" stroke="var(--stroke-0, #92BFFF)" />
          </svg>
        </div>
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 49.737 48.9479">
          <g id="Frame">
            <mask height="48" id="mask0_1_7525" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="48" x="1" y="0">
              <path clipRule="evenodd" d={svgPaths.p2078200} fill="url(#paint0_linear_1_7525)" fillRule="evenodd" id="Subtract" />
            </mask>
            <g mask="url(#mask0_1_7525)">
              <path clipRule="evenodd" d={svgPaths.p2078200} fill="var(--fill-0, #92BFFF)" fillRule="evenodd" id="Subtract_2" />
            </g>
          </g>
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_7525" x1="49.3362" x2="68.8279" y1="37.9999" y2="46.2857">
              <stop stopOpacity="0" />
              <stop offset="1" />
            </linearGradient>
          </defs>
        </svg>
        <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-[rgba(0,0,0,0.8)] content-stretch flex items-center left-[calc(50%-0.08px)] opacity-0 px-[8px] py-[4px] rounded-[8px] top-[calc(50%-0.47px)]" data-name="Tooltip">
          <div className="[word-break:break-word] content-center flex flex-wrap font-['Inter:Regular',sans-serif] font-normal gap-[4px_8px] items-center leading-[20px] not-italic relative rounded-[8px] shrink-0 text-[14px] text-black whitespace-nowrap" data-name="Text">
            <p className="relative shrink-0" style={{ fontFeatureSettings: "'ss01', 'cv01'" }}>
              Tooltip
            </p>
            <p className="relative shrink-0" style={{ fontFeatureSettings: "'ss01', 'cv01'" }}>
              ⌘
            </p>
          </div>
        </div>
      </div>
    );
  }
  if (property === "5D" && state === "Normal") {
    return (
      <div className={className || "h-[48.948px] relative w-[49.737px]"} data-name="Property=5D, State=Normal">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 49.737 48.9479">
          <g id="Frame">
            <mask height="48" id="mask0_1_7547" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="48" x="1" y="0">
              <path clipRule="evenodd" d={svgPaths.p2078200} fill="url(#paint0_linear_1_7547)" fillRule="evenodd" id="Subtract" />
            </mask>
            <g mask="url(#mask0_1_7547)">
              <path clipRule="evenodd" d={svgPaths.p2078200} fill="var(--fill-0, #92BFFF)" fillRule="evenodd" id="Subtract_2" />
            </g>
          </g>
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_7547" x1="49.737" x2="35.3864" y1="0" y2="24.9582">
              <stop />
              <stop offset="1" />
            </linearGradient>
          </defs>
        </svg>
        <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-[rgba(0,0,0,0.8)] content-stretch flex items-center left-[calc(50%-0.08px)] opacity-0 px-[8px] py-[4px] rounded-[8px] top-[calc(50%-0.47px)]" data-name="Tooltip">
          <div className="[word-break:break-word] content-center flex flex-wrap font-['Inter:Regular',sans-serif] font-normal gap-[4px_8px] items-center leading-[20px] not-italic relative rounded-[8px] shrink-0 text-[14px] text-black whitespace-nowrap" data-name="Text">
            <p className="relative shrink-0" style={{ fontFeatureSettings: "'ss01', 'cv01'" }}>
              Tooltip
            </p>
            <p className="relative shrink-0" style={{ fontFeatureSettings: "'ss01', 'cv01'" }}>
              ⌘
            </p>
          </div>
        </div>
      </div>
    );
  }
  if (property === "5D" && state === "Hover") {
    return (
      <div className={className || "h-[48.948px] relative w-[49.737px]"} data-name="Property=5D, State=Hover">
        <div className="absolute inset-[8.17%_8.04%_-8.17%_-8.04%]" data-name="Frame">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 49.737 48.9479">
            <g id="Frame">
              <mask height="48" id="mask0_1_7547" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="48" x="1" y="0">
                <path clipRule="evenodd" d={svgPaths.p2078200} fill="url(#paint0_linear_1_7547)" fillRule="evenodd" id="Subtract" />
              </mask>
              <g mask="url(#mask0_1_7547)">
                <path clipRule="evenodd" d={svgPaths.p2078200} fill="var(--fill-0, #92BFFF)" fillRule="evenodd" id="Subtract_2" />
              </g>
            </g>
            <defs>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_7547" x1="49.737" x2="35.3864" y1="0" y2="24.9582">
                <stop />
                <stop offset="1" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-[rgba(0,0,0,0.8)] content-stretch flex items-center left-[calc(50%+2.92px)] opacity-0 px-[8px] py-[4px] rounded-[8px] top-[calc(50%+1.53px)]" data-name="Tooltip">
          <div className="[word-break:break-word] content-center flex flex-wrap font-['Inter:Regular',sans-serif] font-normal gap-[4px_8px] items-center leading-[20px] not-italic relative rounded-[8px] shrink-0 text-[14px] text-black whitespace-nowrap" data-name="Text">
            <p className="relative shrink-0" style={{ fontFeatureSettings: "'ss01', 'cv01'" }}>
              Tooltip
            </p>
            <p className="relative shrink-0" style={{ fontFeatureSettings: "'ss01', 'cv01'" }}>
              ⌘
            </p>
          </div>
        </div>
      </div>
    );
  }
  if (property === "5C" && state === "Default") {
    return (
      <div className={className || "h-[44.617px] relative w-[33.891px]"} data-name="Property=5C, State=Default">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 33.8907 44.6172">
          <g id="Frame">
            <mask height="43" id="mask0_1_7647" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="33" x="0" y="1">
              <path clipRule="evenodd" d={svgPaths.p28e2c00} fill="url(#paint0_linear_1_7647)" fillRule="evenodd" id="Subtract" />
            </mask>
            <g mask="url(#mask0_1_7647)">
              <path clipRule="evenodd" d={svgPaths.p28e2c00} fill="var(--fill-0, #94E9B8)" fillRule="evenodd" id="Subtract_2" />
            </g>
          </g>
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_7647" x1="33.8907" x2="19.2617" y1="0" y2="19.0191">
              <stop />
              <stop offset="1" />
            </linearGradient>
          </defs>
        </svg>
        <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-[rgba(0,0,0,0.8)] content-stretch flex items-center left-[calc(50%-2.27px)] opacity-0 px-[8px] py-[4px] rounded-[8px] top-[calc(50%-0.31px)]" data-name="Tooltip">
          <div className="[word-break:break-word] content-center flex flex-wrap font-['Inter:Regular',sans-serif] font-normal gap-[4px_8px] items-center leading-[20px] not-italic relative rounded-[8px] shrink-0 text-[14px] text-black whitespace-nowrap" data-name="Text">
            <p className="relative shrink-0" style={{ fontFeatureSettings: "'ss01', 'cv01'" }}>
              Tooltip
            </p>
            <p className="relative shrink-0" style={{ fontFeatureSettings: "'ss01', 'cv01'" }}>
              ⌘
            </p>
          </div>
        </div>
      </div>
    );
  }
  if (property === "5C" && state === "Appear") {
    return (
      <div className={className || "h-[44.617px] relative w-[33.891px]"} data-name="Property=5C, State=Appear">
        <div className="absolute inset-[3.3%_4.05%_2.04%_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32.5183 42.2348">
            <path d={svgPaths.p3b756780} id="Subtract" opacity="0.4" stroke="var(--stroke-0, #94E9B8)" />
          </svg>
        </div>
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 33.8907 44.6172">
          <g id="Frame">
            <mask height="43" id="mask0_1_7529" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="33" x="0" y="1">
              <path clipRule="evenodd" d={svgPaths.p28e2c00} fill="url(#paint0_linear_1_7529)" fillRule="evenodd" id="Subtract" />
            </mask>
            <g mask="url(#mask0_1_7529)">
              <path clipRule="evenodd" d={svgPaths.p28e2c00} fill="var(--fill-0, #94E9B8)" fillRule="evenodd" id="Subtract_2" />
            </g>
          </g>
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_7529" x1="17.2268" x2="19.4471" y1="45.0001" y2="63.2298">
              <stop stopOpacity="0" />
              <stop offset="1" />
            </linearGradient>
          </defs>
        </svg>
        <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-[rgba(0,0,0,0.8)] content-stretch flex items-center left-[calc(50%-2.27px)] opacity-0 px-[8px] py-[4px] rounded-[8px] top-[calc(50%-0.31px)]" data-name="Tooltip">
          <div className="[word-break:break-word] content-center flex flex-wrap font-['Inter:Regular',sans-serif] font-normal gap-[4px_8px] items-center leading-[20px] not-italic relative rounded-[8px] shrink-0 text-[14px] text-black whitespace-nowrap" data-name="Text">
            <p className="relative shrink-0" style={{ fontFeatureSettings: "'ss01', 'cv01'" }}>
              Tooltip
            </p>
            <p className="relative shrink-0" style={{ fontFeatureSettings: "'ss01', 'cv01'" }}>
              ⌘
            </p>
          </div>
        </div>
      </div>
    );
  }
  if (property === "5C" && state === "Normal") {
    return (
      <div className={className || "h-[44.617px] relative w-[33.891px]"} data-name="Property=5C, State=Normal">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 33.8907 44.6172">
          <g id="Frame">
            <mask height="43" id="mask0_1_7647" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="33" x="0" y="1">
              <path clipRule="evenodd" d={svgPaths.p28e2c00} fill="url(#paint0_linear_1_7647)" fillRule="evenodd" id="Subtract" />
            </mask>
            <g mask="url(#mask0_1_7647)">
              <path clipRule="evenodd" d={svgPaths.p28e2c00} fill="var(--fill-0, #94E9B8)" fillRule="evenodd" id="Subtract_2" />
            </g>
          </g>
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_7647" x1="33.8907" x2="19.2617" y1="0" y2="19.0191">
              <stop />
              <stop offset="1" />
            </linearGradient>
          </defs>
        </svg>
        <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-[rgba(0,0,0,0.8)] content-stretch flex items-center left-[calc(50%-2.27px)] opacity-0 px-[8px] py-[4px] rounded-[8px] top-[calc(50%-0.31px)]" data-name="Tooltip">
          <div className="[word-break:break-word] content-center flex flex-wrap font-['Inter:Regular',sans-serif] font-normal gap-[4px_8px] items-center leading-[20px] not-italic relative rounded-[8px] shrink-0 text-[14px] text-black whitespace-nowrap" data-name="Text">
            <p className="relative shrink-0" style={{ fontFeatureSettings: "'ss01', 'cv01'" }}>
              Tooltip
            </p>
            <p className="relative shrink-0" style={{ fontFeatureSettings: "'ss01', 'cv01'" }}>
              ⌘
            </p>
          </div>
        </div>
      </div>
    );
  }
  if (property === "5C" && state === "Hover") {
    return (
      <div className={className || "h-[44.617px] relative w-[33.891px]"} data-name="Property=5C, State=Hover">
        <div className="absolute inset-[0_11.8%_0_-11.8%]" data-name="Frame">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 33.8907 44.6172">
            <g id="Frame">
              <mask height="43" id="mask0_1_7647" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="33" x="0" y="1">
                <path clipRule="evenodd" d={svgPaths.p28e2c00} fill="url(#paint0_linear_1_7647)" fillRule="evenodd" id="Subtract" />
              </mask>
              <g mask="url(#mask0_1_7647)">
                <path clipRule="evenodd" d={svgPaths.p28e2c00} fill="var(--fill-0, #94E9B8)" fillRule="evenodd" id="Subtract_2" />
              </g>
            </g>
            <defs>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_7647" x1="33.8907" x2="19.2617" y1="0" y2="19.0191">
                <stop />
                <stop offset="1" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-[rgba(0,0,0,0.8)] content-stretch flex items-center left-[calc(50%+0.73px)] opacity-0 px-[8px] py-[4px] rounded-[8px] top-[calc(50%+1.69px)]" data-name="Tooltip">
          <div className="[word-break:break-word] content-center flex flex-wrap font-['Inter:Regular',sans-serif] font-normal gap-[4px_8px] items-center leading-[20px] not-italic relative rounded-[8px] shrink-0 text-[14px] text-black whitespace-nowrap" data-name="Text">
            <p className="relative shrink-0" style={{ fontFeatureSettings: "'ss01', 'cv01'" }}>
              Tooltip
            </p>
            <p className="relative shrink-0" style={{ fontFeatureSettings: "'ss01', 'cv01'" }}>
              ⌘
            </p>
          </div>
        </div>
      </div>
    );
  }
  if (property === "5B" && state === "Default") {
    return (
      <div className={className || "h-[35.369px] relative w-[35.881px]"} data-name="Property=5B, State=Default">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 35.8812 35.3691">
          <g id="Frame">
            <mask height="34" id="mask0_1_7517" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="34" x="1" y="1">
              <path clipRule="evenodd" d={svgPaths.p34c88f00} fill="url(#paint0_linear_1_7517)" fillRule="evenodd" id="Subtract" />
            </mask>
            <g mask="url(#mask0_1_7517)">
              <path clipRule="evenodd" d={svgPaths.p34c88f00} fill="var(--fill-0, #AEC7ED)" fillRule="evenodd" id="Subtract_2" />
            </g>
          </g>
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_7517" x1="35.8812" x2="25.5032" y1="0" y2="18.0199">
              <stop />
              <stop offset="1" />
            </linearGradient>
          </defs>
        </svg>
        <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-[rgba(0,0,0,0.8)] content-stretch flex items-center left-[calc(50%+1.62px)] opacity-0 px-[8px] py-[4px] rounded-[8px] top-[calc(50%+0.32px)]" data-name="Tooltip">
          <div className="[word-break:break-word] content-center flex flex-wrap font-['Inter:Regular',sans-serif] font-normal gap-[4px_8px] items-center leading-[20px] not-italic relative rounded-[8px] shrink-0 text-[14px] text-black whitespace-nowrap" data-name="Text">
            <p className="relative shrink-0" style={{ fontFeatureSettings: "'ss01', 'cv01'" }}>
              Tooltip
            </p>
            <p className="relative shrink-0" style={{ fontFeatureSettings: "'ss01', 'cv01'" }}>
              ⌘
            </p>
          </div>
        </div>
      </div>
    );
  }
  if (property === "5B" && state === "Appear") {
    return (
      <div className={className || "h-[35.369px] relative w-[35.881px]"} data-name="Property=5B, State=Appear">
        <div className="absolute inset-[4.26%_4.03%_3.81%_4.45%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32.8372 32.5137">
            <path d={svgPaths.p364bba00} id="Subtract" opacity="0.4" stroke="var(--stroke-0, #AEC7ED)" />
          </svg>
        </div>
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 35.8812 35.3691">
          <g id="Frame">
            <mask height="34" id="mask0_1_7539" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="34" x="1" y="1">
              <path clipRule="evenodd" d={svgPaths.p34c88f00} fill="url(#paint0_linear_1_7539)" fillRule="evenodd" id="Subtract" />
            </mask>
            <g mask="url(#mask0_1_7539)">
              <path clipRule="evenodd" d={svgPaths.p34c88f00} fill="var(--fill-0, #AEC7ED)" fillRule="evenodd" id="Subtract_2" />
            </g>
          </g>
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_7539" x1="7.1079" x2="3.36977" y1="29" y2="51.0688">
              <stop stopOpacity="0" />
              <stop offset="1" />
            </linearGradient>
          </defs>
        </svg>
        <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-[rgba(0,0,0,0.8)] content-stretch flex items-center left-[calc(50%+1.62px)] opacity-0 px-[8px] py-[4px] rounded-[8px] top-[calc(50%+0.32px)]" data-name="Tooltip">
          <div className="[word-break:break-word] content-center flex flex-wrap font-['Inter:Regular',sans-serif] font-normal gap-[4px_8px] items-center leading-[20px] not-italic relative rounded-[8px] shrink-0 text-[14px] text-black whitespace-nowrap" data-name="Text">
            <p className="relative shrink-0" style={{ fontFeatureSettings: "'ss01', 'cv01'" }}>
              Tooltip
            </p>
            <p className="relative shrink-0" style={{ fontFeatureSettings: "'ss01', 'cv01'" }}>
              ⌘
            </p>
          </div>
        </div>
      </div>
    );
  }
  if (property === "5B" && state === "Normal") {
    return (
      <div className={className || "h-[35.369px] relative w-[35.881px]"} data-name="Property=5B, State=Normal">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 35.8812 35.3691">
          <g id="Frame">
            <mask height="34" id="mask0_1_7517" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="34" x="1" y="1">
              <path clipRule="evenodd" d={svgPaths.p34c88f00} fill="url(#paint0_linear_1_7517)" fillRule="evenodd" id="Subtract" />
            </mask>
            <g mask="url(#mask0_1_7517)">
              <path clipRule="evenodd" d={svgPaths.p34c88f00} fill="var(--fill-0, #AEC7ED)" fillRule="evenodd" id="Subtract_2" />
            </g>
          </g>
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_7517" x1="35.8812" x2="25.5032" y1="0" y2="18.0199">
              <stop />
              <stop offset="1" />
            </linearGradient>
          </defs>
        </svg>
        <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-[rgba(0,0,0,0.8)] content-stretch flex items-center left-[calc(50%+1.62px)] opacity-0 px-[8px] py-[4px] rounded-[8px] top-[calc(50%+0.32px)]" data-name="Tooltip">
          <div className="[word-break:break-word] content-center flex flex-wrap font-['Inter:Regular',sans-serif] font-normal gap-[4px_8px] items-center leading-[20px] not-italic relative rounded-[8px] shrink-0 text-[14px] text-black whitespace-nowrap" data-name="Text">
            <p className="relative shrink-0" style={{ fontFeatureSettings: "'ss01', 'cv01'" }}>
              Tooltip
            </p>
            <p className="relative shrink-0" style={{ fontFeatureSettings: "'ss01', 'cv01'" }}>
              ⌘
            </p>
          </div>
        </div>
      </div>
    );
  }
  if (property === "5B" && state === "Hover") {
    return (
      <div className={className || "h-[35.369px] relative w-[35.881px]"} data-name="Property=5B, State=Hover">
        <div className="absolute inset-[-11.31%_5.57%_11.31%_-5.57%]" data-name="Frame">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 35.8812 35.3691">
            <g id="Frame">
              <mask height="34" id="mask0_1_7517" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="34" x="1" y="1">
                <path clipRule="evenodd" d={svgPaths.p34c88f00} fill="url(#paint0_linear_1_7517)" fillRule="evenodd" id="Subtract" />
              </mask>
              <g mask="url(#mask0_1_7517)">
                <path clipRule="evenodd" d={svgPaths.p34c88f00} fill="var(--fill-0, #AEC7ED)" fillRule="evenodd" id="Subtract_2" />
              </g>
            </g>
            <defs>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_7517" x1="35.8812" x2="25.5032" y1="0" y2="18.0199">
                <stop />
                <stop offset="1" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-[rgba(0,0,0,0.8)] content-stretch flex items-center left-[calc(50%+6.62px)] opacity-0 px-[8px] py-[4px] rounded-[8px] top-[calc(50%+2.32px)]" data-name="Tooltip">
          <div className="[word-break:break-word] content-center flex flex-wrap font-['Inter:Regular',sans-serif] font-normal gap-[4px_8px] items-center leading-[20px] not-italic relative rounded-[8px] shrink-0 text-[14px] text-black whitespace-nowrap" data-name="Text">
            <p className="relative shrink-0" style={{ fontFeatureSettings: "'ss01', 'cv01'" }}>
              Tooltip
            </p>
            <p className="relative shrink-0" style={{ fontFeatureSettings: "'ss01', 'cv01'" }}>
              ⌘
            </p>
          </div>
        </div>
      </div>
    );
  }
  if (property === "5A" && state === "Default") {
    return (
      <div className={className || "h-[33.168px] relative w-[28.449px]"} data-name="Property=5A, State=Default">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28.4489 33.1682">
          <g id="Frame">
            <mask height="32" id="mask0_1_7597" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="28" x="1" y="0">
              <path clipRule="evenodd" d={svgPaths.pe187280} fill="url(#paint0_linear_1_7597)" fillRule="evenodd" id="Subtract" />
            </mask>
            <g mask="url(#mask0_1_7597)">
              <path clipRule="evenodd" d={svgPaths.pe187280} fill="var(--fill-0, #9F9FF8)" fillRule="evenodd" id="Subtract_2" />
            </g>
          </g>
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_7597" x1="28.4489" x2="17.9783" y1="0" y2="15.3713">
              <stop />
              <stop offset="1" />
            </linearGradient>
          </defs>
        </svg>
        <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-[rgba(0,0,0,0.8)] content-stretch flex items-center left-[calc(50%+2.79px)] opacity-0 px-[8px] py-[4px] rounded-[8px] top-[calc(50%+0.42px)]" data-name="Tooltip">
          <div className="[word-break:break-word] content-center flex flex-wrap font-['Inter:Regular',sans-serif] font-normal gap-[4px_8px] items-center leading-[20px] not-italic relative rounded-[8px] shrink-0 text-[14px] text-black whitespace-nowrap" data-name="Text">
            <p className="relative shrink-0" style={{ fontFeatureSettings: "'ss01', 'cv01'" }}>
              Tooltip
            </p>
            <p className="relative shrink-0" style={{ fontFeatureSettings: "'ss01', 'cv01'" }}>
              ⌘
            </p>
          </div>
        </div>
      </div>
    );
  }
  if (property === "5A" && state === "Appear") {
    return (
      <div className={className || "h-[33.168px] relative w-[28.449px]"} data-name="Property=5A, State=Appear">
        <div className="absolute inset-[0.37%_0_3.61%_5.35%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26.9259 31.8465">
            <path d={svgPaths.p376ce600} id="Subtract" opacity="0.4" stroke="var(--stroke-0, #9F9FF8)" />
          </svg>
        </div>
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28.4489 33.1682">
          <g id="Frame">
            <mask height="32" id="mask0_1_7507" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="28" x="1" y="0">
              <path clipRule="evenodd" d={svgPaths.pe187280} fill="url(#paint0_linear_1_7507)" fillRule="evenodd" id="Subtract" />
            </mask>
            <g mask="url(#mask0_1_7507)">
              <path clipRule="evenodd" d={svgPaths.pe187280} fill="var(--fill-0, #9F9FF8)" fillRule="evenodd" id="Subtract_2" />
            </g>
          </g>
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_7507" x1="-0.443237" x2="-10.4068" y1="23" y2="35.4333">
              <stop stopOpacity="0" />
              <stop offset="1" />
            </linearGradient>
          </defs>
        </svg>
        <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-[rgba(0,0,0,0.8)] content-stretch flex items-center left-[calc(50%+2.79px)] opacity-0 px-[8px] py-[4px] rounded-[8px] top-[calc(50%+0.42px)]" data-name="Tooltip">
          <div className="[word-break:break-word] content-center flex flex-wrap font-['Inter:Regular',sans-serif] font-normal gap-[4px_8px] items-center leading-[20px] not-italic relative rounded-[8px] shrink-0 text-[14px] text-black whitespace-nowrap" data-name="Text">
            <p className="relative shrink-0" style={{ fontFeatureSettings: "'ss01', 'cv01'" }}>
              Tooltip
            </p>
            <p className="relative shrink-0" style={{ fontFeatureSettings: "'ss01', 'cv01'" }}>
              ⌘
            </p>
          </div>
        </div>
      </div>
    );
  }
  if (property === "5A" && state === "Normal") {
    return (
      <div className={className || "h-[33.168px] relative w-[28.449px]"} data-name="Property=5A, State=Normal">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28.4489 33.1682">
          <g id="Frame">
            <mask height="32" id="mask0_1_7597" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="28" x="1" y="0">
              <path clipRule="evenodd" d={svgPaths.pe187280} fill="url(#paint0_linear_1_7597)" fillRule="evenodd" id="Subtract" />
            </mask>
            <g mask="url(#mask0_1_7597)">
              <path clipRule="evenodd" d={svgPaths.pe187280} fill="var(--fill-0, #9F9FF8)" fillRule="evenodd" id="Subtract_2" />
            </g>
          </g>
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_7597" x1="28.4489" x2="17.9783" y1="0" y2="15.3713">
              <stop />
              <stop offset="1" />
            </linearGradient>
          </defs>
        </svg>
        <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-[rgba(0,0,0,0.8)] content-stretch flex items-center left-[calc(50%+2.79px)] opacity-0 px-[8px] py-[4px] rounded-[8px] top-[calc(50%+0.42px)]" data-name="Tooltip">
          <div className="[word-break:break-word] content-center flex flex-wrap font-['Inter:Regular',sans-serif] font-normal gap-[4px_8px] items-center leading-[20px] not-italic relative rounded-[8px] shrink-0 text-[14px] text-black whitespace-nowrap" data-name="Text">
            <p className="relative shrink-0" style={{ fontFeatureSettings: "'ss01', 'cv01'" }}>
              Tooltip
            </p>
            <p className="relative shrink-0" style={{ fontFeatureSettings: "'ss01', 'cv01'" }}>
              ⌘
            </p>
          </div>
        </div>
      </div>
    );
  }
  if (property === "5A" && state === "Hover") {
    return (
      <div className={className || "h-[33.168px] relative w-[28.449px]"} data-name="Property=5A, State=Hover">
        <div className="absolute inset-[-12.06%_3.52%_12.06%_-3.52%]" data-name="Frame">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28.4489 33.1682">
            <g id="Frame">
              <mask height="32" id="mask0_1_7597" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="28" x="1" y="0">
                <path clipRule="evenodd" d={svgPaths.pe187280} fill="url(#paint0_linear_1_7597)" fillRule="evenodd" id="Subtract" />
              </mask>
              <g mask="url(#mask0_1_7597)">
                <path clipRule="evenodd" d={svgPaths.pe187280} fill="var(--fill-0, #9F9FF8)" fillRule="evenodd" id="Subtract_2" />
              </g>
            </g>
            <defs>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_7597" x1="28.4489" x2="17.9783" y1="0" y2="15.3713">
                <stop />
                <stop offset="1" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-[rgba(0,0,0,0.8)] content-stretch flex items-center left-[calc(50%+8.79px)] opacity-0 px-[8px] py-[4px] rounded-[8px] top-[calc(50%+2.42px)]" data-name="Tooltip">
          <div className="[word-break:break-word] content-center flex flex-wrap font-['Inter:Regular',sans-serif] font-normal gap-[4px_8px] items-center leading-[20px] not-italic relative rounded-[8px] shrink-0 text-[14px] text-black whitespace-nowrap" data-name="Text">
            <p className="relative shrink-0" style={{ fontFeatureSettings: "'ss01', 'cv01'" }}>
              Tooltip
            </p>
            <p className="relative shrink-0" style={{ fontFeatureSettings: "'ss01', 'cv01'" }}>
              ⌘
            </p>
          </div>
        </div>
      </div>
    );
  }
  if (property === "6A" && state === "Default") {
    return (
      <div className={className || "h-[51.5px] relative w-[55.778px]"} data-name="Property=6A, State=Default">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 55.7776 51.4998">
          <g id="Frame">
            <mask height="51" id="mask0_1_7559" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="55" x="0" y="0">
              <path clipRule="evenodd" d={svgPaths.p55372} fill="url(#paint0_linear_1_7559)" fillRule="evenodd" id="Subtract" />
            </mask>
            <g mask="url(#mask0_1_7559)">
              <path clipRule="evenodd" d={svgPaths.p55372} fill="var(--fill-0, #96E2D6)" fillRule="evenodd" id="Subtract_2" />
            </g>
          </g>
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_7559" x1="55.7776" x2="41.1775" y1="0" y2="27.065">
              <stop />
              <stop offset="1" />
            </linearGradient>
          </defs>
        </svg>
        <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-[rgba(0,0,0,0.8)] content-stretch flex items-center left-[calc(50%-1.55px)] opacity-0 px-[8px] py-[4px] rounded-[8px] top-[calc(50%+0.25px)]" data-name="Tooltip">
          <div className="[word-break:break-word] content-center flex flex-wrap font-['Inter:Regular',sans-serif] font-normal gap-[4px_8px] items-center leading-[20px] not-italic relative rounded-[8px] shrink-0 text-[14px] text-black whitespace-nowrap" data-name="Text">
            <p className="relative shrink-0" style={{ fontFeatureSettings: "'ss01', 'cv01'" }}>
              Tooltip
            </p>
            <p className="relative shrink-0" style={{ fontFeatureSettings: "'ss01', 'cv01'" }}>
              ⌘
            </p>
          </div>
        </div>
      </div>
    );
  }
  if (property === "6A" && state === "Appear") {
    return (
      <div className={className || "h-[51.5px] relative w-[55.778px]"} data-name="Property=6A, State=Appear">
        <div className="absolute inset-[0.5%_1.81%_1.7%_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 54.7669 50.3686">
            <path d={svgPaths.p36051e80} id="Subtract" opacity="0.4" stroke="var(--stroke-0, #96E2D6)" />
          </svg>
        </div>
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 55.7776 51.4998">
          <g id="Frame">
            <mask height="51" id="mask0_1_7501" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="55" x="0" y="0">
              <path clipRule="evenodd" d={svgPaths.p55372} fill="url(#paint0_linear_1_7501)" fillRule="evenodd" id="Subtract" />
            </mask>
            <g mask="url(#mask0_1_7501)">
              <path clipRule="evenodd" d={svgPaths.p55372} fill="var(--fill-0, #96E2D6)" fillRule="evenodd" id="Subtract_2" />
            </g>
          </g>
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_7501" x1="50.3343" x2="71.9736" y1="50.5" y2="55.8753">
              <stop stopOpacity="0" />
              <stop offset="1" />
            </linearGradient>
          </defs>
        </svg>
        <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-[rgba(0,0,0,0.8)] content-stretch flex items-center left-[calc(50%-1.55px)] opacity-0 px-[8px] py-[4px] rounded-[8px] top-[calc(50%+0.25px)]" data-name="Tooltip">
          <div className="[word-break:break-word] content-center flex flex-wrap font-['Inter:Regular',sans-serif] font-normal gap-[4px_8px] items-center leading-[20px] not-italic relative rounded-[8px] shrink-0 text-[14px] text-black whitespace-nowrap" data-name="Text">
            <p className="relative shrink-0" style={{ fontFeatureSettings: "'ss01', 'cv01'" }}>
              Tooltip
            </p>
            <p className="relative shrink-0" style={{ fontFeatureSettings: "'ss01', 'cv01'" }}>
              ⌘
            </p>
          </div>
        </div>
      </div>
    );
  }
  if (property === "6A" && state === "Normal") {
    return (
      <div className={className || "h-[51.5px] relative w-[55.778px]"} data-name="Property=6A, State=Normal">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 55.7776 51.4998">
          <g id="Frame">
            <mask height="51" id="mask0_1_7559" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="55" x="0" y="0">
              <path clipRule="evenodd" d={svgPaths.p55372} fill="url(#paint0_linear_1_7559)" fillRule="evenodd" id="Subtract" />
            </mask>
            <g mask="url(#mask0_1_7559)">
              <path clipRule="evenodd" d={svgPaths.p55372} fill="var(--fill-0, #96E2D6)" fillRule="evenodd" id="Subtract_2" />
            </g>
          </g>
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_7559" x1="55.7776" x2="41.1775" y1="0" y2="27.065">
              <stop />
              <stop offset="1" />
            </linearGradient>
          </defs>
        </svg>
        <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-[rgba(0,0,0,0.8)] content-stretch flex items-center left-[calc(50%-1.55px)] opacity-0 px-[8px] py-[4px] rounded-[8px] top-[calc(50%+0.25px)]" data-name="Tooltip">
          <div className="[word-break:break-word] content-center flex flex-wrap font-['Inter:Regular',sans-serif] font-normal gap-[4px_8px] items-center leading-[20px] not-italic relative rounded-[8px] shrink-0 text-[14px] text-black whitespace-nowrap" data-name="Text">
            <p className="relative shrink-0" style={{ fontFeatureSettings: "'ss01', 'cv01'" }}>
              Tooltip
            </p>
            <p className="relative shrink-0" style={{ fontFeatureSettings: "'ss01', 'cv01'" }}>
              ⌘
            </p>
          </div>
        </div>
      </div>
    );
  }
  if (property === "6A" && state === "Hover") {
    return (
      <div className={className || "h-[51.5px] relative w-[55.778px]"} data-name="Property=6A, State=Hover">
        <div className="absolute inset-[-11.65%_-10.76%_11.65%_10.76%]" data-name="Frame">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 55.7776 51.4998">
            <g id="Frame">
              <mask height="51" id="mask0_1_7559" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="55" x="0" y="0">
                <path clipRule="evenodd" d={svgPaths.p55372} fill="url(#paint0_linear_1_7559)" fillRule="evenodd" id="Subtract" />
              </mask>
              <g mask="url(#mask0_1_7559)">
                <path clipRule="evenodd" d={svgPaths.p55372} fill="var(--fill-0, #96E2D6)" fillRule="evenodd" id="Subtract_2" />
              </g>
            </g>
            <defs>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_7559" x1="55.7776" x2="41.1775" y1="0" y2="27.065">
                <stop />
                <stop offset="1" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-[rgba(0,0,0,0.8)] content-stretch flex items-center left-[calc(50%+11.45px)] opacity-0 px-[8px] py-[4px] rounded-[8px] top-[calc(50%+2.25px)]" data-name="Tooltip">
          <div className="[word-break:break-word] content-center flex flex-wrap font-['Inter:Regular',sans-serif] font-normal gap-[4px_8px] items-center leading-[20px] not-italic relative rounded-[8px] shrink-0 text-[14px] text-black whitespace-nowrap" data-name="Text">
            <p className="relative shrink-0" style={{ fontFeatureSettings: "'ss01', 'cv01'" }}>
              Tooltip
            </p>
            <p className="relative shrink-0" style={{ fontFeatureSettings: "'ss01', 'cv01'" }}>
              ⌘
            </p>
          </div>
        </div>
      </div>
    );
  }
  if (property === "6F" && state === "Default") {
    return (
      <div className={className || "h-[74.301px] relative w-[73.718px]"} data-name="Property=6F, State=Default">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 73.7181 74.3006">
          <g id="Frame">
            <mask height="75" id="mask0_1_7495" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="74" x="0" y="0">
              <path clipRule="evenodd" d={svgPaths.p21bf8d00} fill="url(#paint0_linear_1_7495)" fillRule="evenodd" id="Subtract" />
            </mask>
            <g mask="url(#mask0_1_7495)">
              <g id="Subtract_2">
                <path clipRule="evenodd" d={svgPaths.p21bf8d00} fill="url(#paint1_linear_1_7495)" fillRule="evenodd" />
                <path clipRule="evenodd" d={svgPaths.p21bf8d00} fill="var(--fill-1, black)" fillRule="evenodd" style={{ mixBlendMode: "screen" }} />
              </g>
            </g>
          </g>
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_7495" x1="73.7181" x2="51.6762" y1="0" y2="37.4307">
              <stop />
              <stop offset="1" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_1_7495" x1="36.8591" x2="36.8591" y1="0" y2="74.3006">
              <stop />
              <stop offset="1" stopColor="#1C1C1C" stopOpacity="0.6" />
              <stop offset="1" stopOpacity="0.6" />
            </linearGradient>
          </defs>
        </svg>
        <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-[rgba(0,0,0,0.8)] content-stretch flex items-center left-[calc(50%+11.74px)] opacity-0 px-[8px] py-[4px] rounded-[8px] top-[calc(50%-0.15px)]" data-name="Tooltip">
          <div className="[word-break:break-word] content-center flex flex-wrap font-['Inter:Regular',sans-serif] font-normal gap-[4px_8px] items-center leading-[20px] not-italic relative rounded-[8px] shrink-0 text-[14px] text-black whitespace-nowrap" data-name="Text">
            <p className="relative shrink-0" style={{ fontFeatureSettings: "'ss01', 'cv01'" }}>
              Tooltip
            </p>
            <p className="relative shrink-0" style={{ fontFeatureSettings: "'ss01', 'cv01'" }}>
              ⌘
            </p>
          </div>
        </div>
      </div>
    );
  }
  if (property === "6F" && state === "Appear") {
    return (
      <div className={className || "h-[74.301px] relative w-[73.718px]"} data-name="Property=6F, State=Appear">
        <div className="absolute inset-[0.93%_0_0_0.95%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 73.0194 73.6099">
            <path d={svgPaths.p28683100} id="Subtract" opacity="0.2" stroke="var(--stroke-0, black)" />
          </svg>
        </div>
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 73.7181 74.3006">
          <g id="Frame">
            <mask height="75" id="mask0_1_7491" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="74" x="0" y="0">
              <path clipRule="evenodd" d={svgPaths.p21bf8d00} fill="url(#paint0_linear_1_7491)" fillRule="evenodd" id="Subtract" />
            </mask>
            <g mask="url(#mask0_1_7491)">
              <g id="Subtract_2">
                <path clipRule="evenodd" d={svgPaths.p21bf8d00} fill="url(#paint1_linear_1_7491)" fillRule="evenodd" />
                <path clipRule="evenodd" d={svgPaths.p21bf8d00} fill="var(--fill-1, black)" fillRule="evenodd" style={{ mixBlendMode: "screen" }} />
              </g>
            </g>
          </g>
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_7491" x1="61.0991" x2="73.4194" y1="-36" y2="-4.87705">
              <stop />
              <stop offset="1" stopOpacity="0" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_1_7491" x1="36.8591" x2="36.8591" y1="0" y2="74.3006">
              <stop />
              <stop offset="1" stopColor="#1C1C1C" stopOpacity="0.6" />
              <stop offset="1" stopOpacity="0.6" />
            </linearGradient>
          </defs>
        </svg>
        <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-[rgba(0,0,0,0.8)] content-stretch flex items-center left-[calc(50%+11.74px)] opacity-0 px-[8px] py-[4px] rounded-[8px] top-[calc(50%-0.15px)]" data-name="Tooltip">
          <div className="[word-break:break-word] content-center flex flex-wrap font-['Inter:Regular',sans-serif] font-normal gap-[4px_8px] items-center leading-[20px] not-italic relative rounded-[8px] shrink-0 text-[14px] text-black whitespace-nowrap" data-name="Text">
            <p className="relative shrink-0" style={{ fontFeatureSettings: "'ss01', 'cv01'" }}>
              Tooltip
            </p>
            <p className="relative shrink-0" style={{ fontFeatureSettings: "'ss01', 'cv01'" }}>
              ⌘
            </p>
          </div>
        </div>
      </div>
    );
  }
  if (property === "6F" && state === "Normal") {
    return (
      <div className={className || "h-[74.301px] relative w-[73.718px]"} data-name="Property=6F, State=Normal">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 73.7181 74.3006">
          <g id="Frame">
            <mask height="75" id="mask0_1_7495" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="74" x="0" y="0">
              <path clipRule="evenodd" d={svgPaths.p21bf8d00} fill="url(#paint0_linear_1_7495)" fillRule="evenodd" id="Subtract" />
            </mask>
            <g mask="url(#mask0_1_7495)">
              <g id="Subtract_2">
                <path clipRule="evenodd" d={svgPaths.p21bf8d00} fill="url(#paint1_linear_1_7495)" fillRule="evenodd" />
                <path clipRule="evenodd" d={svgPaths.p21bf8d00} fill="var(--fill-1, black)" fillRule="evenodd" style={{ mixBlendMode: "screen" }} />
              </g>
            </g>
          </g>
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_7495" x1="73.7181" x2="51.6762" y1="0" y2="37.4307">
              <stop />
              <stop offset="1" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_1_7495" x1="36.8591" x2="36.8591" y1="0" y2="74.3006">
              <stop />
              <stop offset="1" stopColor="#1C1C1C" stopOpacity="0.6" />
              <stop offset="1" stopOpacity="0.6" />
            </linearGradient>
          </defs>
        </svg>
        <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-[rgba(0,0,0,0.8)] content-stretch flex items-center left-[calc(50%+11.74px)] opacity-0 px-[8px] py-[4px] rounded-[8px] top-[calc(50%-0.15px)]" data-name="Tooltip">
          <div className="[word-break:break-word] content-center flex flex-wrap font-['Inter:Regular',sans-serif] font-normal gap-[4px_8px] items-center leading-[20px] not-italic relative rounded-[8px] shrink-0 text-[14px] text-black whitespace-nowrap" data-name="Text">
            <p className="relative shrink-0" style={{ fontFeatureSettings: "'ss01', 'cv01'" }}>
              Tooltip
            </p>
            <p className="relative shrink-0" style={{ fontFeatureSettings: "'ss01', 'cv01'" }}>
              ⌘
            </p>
          </div>
        </div>
      </div>
    );
  }
  if (property === "6F" && state === "Hover") {
    return (
      <div className={className || "h-[74.301px] relative w-[73.718px]"} data-name="Property=6F, State=Hover">
        <div className="absolute inset-[5.38%_-5.43%_-5.38%_5.43%]" data-name="Frame">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 73.7181 74.3006">
            <g id="Frame">
              <mask height="75" id="mask0_1_7495" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="74" x="0" y="0">
                <path clipRule="evenodd" d={svgPaths.p21bf8d00} fill="url(#paint0_linear_1_7495)" fillRule="evenodd" id="Subtract" />
              </mask>
              <g mask="url(#mask0_1_7495)">
                <g id="Subtract_2">
                  <path clipRule="evenodd" d={svgPaths.p21bf8d00} fill="url(#paint1_linear_1_7495)" fillRule="evenodd" />
                  <path clipRule="evenodd" d={svgPaths.p21bf8d00} fill="var(--fill-1, black)" fillRule="evenodd" style={{ mixBlendMode: "screen" }} />
                </g>
              </g>
            </g>
            <defs>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_7495" x1="73.7181" x2="51.6762" y1="0" y2="37.4307">
                <stop />
                <stop offset="1" />
              </linearGradient>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_1_7495" x1="36.8591" x2="36.8591" y1="0" y2="74.3006">
                <stop />
                <stop offset="1" stopColor="#1C1C1C" stopOpacity="0.6" />
                <stop offset="1" stopOpacity="0.6" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-[rgba(0,0,0,0.8)] content-stretch flex items-center left-[calc(50%+22.74px)] opacity-0 px-[8px] py-[4px] rounded-[8px] top-[calc(50%+1.85px)]" data-name="Tooltip">
          <div className="[word-break:break-word] content-center flex flex-wrap font-['Inter:Regular',sans-serif] font-normal gap-[4px_8px] items-center leading-[20px] not-italic relative rounded-[8px] shrink-0 text-[14px] text-black whitespace-nowrap" data-name="Text">
            <p className="relative shrink-0" style={{ fontFeatureSettings: "'ss01', 'cv01'" }}>
              Tooltip
            </p>
            <p className="relative shrink-0" style={{ fontFeatureSettings: "'ss01', 'cv01'" }}>
              ⌘
            </p>
          </div>
        </div>
      </div>
    );
  }
  if (property === "6E" && state === "Default") {
    return (
      <div className={className || "h-[48.948px] relative w-[49.737px]"} data-name="Property=6E, State=Default">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 49.737 48.948">
          <g id="Frame">
            <mask height="48" id="mask0_1_7511" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="48" x="1" y="0">
              <path clipRule="evenodd" d={svgPaths.p215d2a00} fill="url(#paint0_linear_1_7511)" fillRule="evenodd" id="Subtract" />
            </mask>
            <g mask="url(#mask0_1_7511)">
              <path clipRule="evenodd" d={svgPaths.p215d2a00} fill="var(--fill-0, #92BFFF)" fillRule="evenodd" id="Subtract_2" />
            </g>
          </g>
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_7511" x1="49.737" x2="35.3864" y1="0" y2="24.9582">
              <stop />
              <stop offset="1" />
            </linearGradient>
          </defs>
        </svg>
        <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-[rgba(0,0,0,0.8)] content-stretch flex items-center left-[calc(50%-0.53px)] opacity-0 px-[8px] py-[4px] rounded-[8px] top-[calc(50%-0.47px)]" data-name="Tooltip">
          <div className="[word-break:break-word] content-center flex flex-wrap font-['Inter:Regular',sans-serif] font-normal gap-[4px_8px] items-center leading-[20px] not-italic relative rounded-[8px] shrink-0 text-[14px] text-black whitespace-nowrap" data-name="Text">
            <p className="relative shrink-0" style={{ fontFeatureSettings: "'ss01', 'cv01'" }}>
              Tooltip
            </p>
            <p className="relative shrink-0" style={{ fontFeatureSettings: "'ss01', 'cv01'" }}>
              ⌘
            </p>
          </div>
        </div>
      </div>
    );
  }
  if (property === "6E" && state === "Appear") {
    return (
      <div className={className || "h-[48.948px] relative w-[49.737px]"} data-name="Property=6E, State=Appear">
        <div className="absolute inset-[1.75%_1.8%_1.98%_2.1%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 47.7959 47.1205">
            <path d={svgPaths.p410f500} id="Subtract" opacity="0.4" stroke="var(--stroke-0, #92BFFF)" />
          </svg>
        </div>
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 49.737 48.948">
          <g id="Frame">
            <mask height="48" id="mask0_1_7589" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="48" x="1" y="0">
              <path clipRule="evenodd" d={svgPaths.p215d2a00} fill="url(#paint0_linear_1_7589)" fillRule="evenodd" id="Subtract" />
            </mask>
            <g mask="url(#mask0_1_7589)">
              <path clipRule="evenodd" d={svgPaths.p215d2a00} fill="var(--fill-0, #92BFFF)" fillRule="evenodd" id="Subtract_2" />
            </g>
          </g>
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_7589" x1="49.3362" x2="68.828" y1="38" y2="46.2858">
              <stop stopOpacity="0" />
              <stop offset="1" />
            </linearGradient>
          </defs>
        </svg>
        <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-[rgba(0,0,0,0.8)] content-stretch flex items-center left-[calc(50%-0.53px)] opacity-0 px-[8px] py-[4px] rounded-[8px] top-[calc(50%-0.47px)]" data-name="Tooltip">
          <div className="[word-break:break-word] content-center flex flex-wrap font-['Inter:Regular',sans-serif] font-normal gap-[4px_8px] items-center leading-[20px] not-italic relative rounded-[8px] shrink-0 text-[14px] text-black whitespace-nowrap" data-name="Text">
            <p className="relative shrink-0" style={{ fontFeatureSettings: "'ss01', 'cv01'" }}>
              Tooltip
            </p>
            <p className="relative shrink-0" style={{ fontFeatureSettings: "'ss01', 'cv01'" }}>
              ⌘
            </p>
          </div>
        </div>
      </div>
    );
  }
  if (property === "6E" && state === "Normal") {
    return (
      <div className={className || "h-[48.948px] relative w-[49.737px]"} data-name="Property=6E, State=Normal">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 49.737 48.948">
          <g id="Frame">
            <mask height="48" id="mask0_1_7511" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="48" x="1" y="0">
              <path clipRule="evenodd" d={svgPaths.p215d2a00} fill="url(#paint0_linear_1_7511)" fillRule="evenodd" id="Subtract" />
            </mask>
            <g mask="url(#mask0_1_7511)">
              <path clipRule="evenodd" d={svgPaths.p215d2a00} fill="var(--fill-0, #92BFFF)" fillRule="evenodd" id="Subtract_2" />
            </g>
          </g>
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_7511" x1="49.737" x2="35.3864" y1="0" y2="24.9582">
              <stop />
              <stop offset="1" />
            </linearGradient>
          </defs>
        </svg>
        <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-[rgba(0,0,0,0.8)] content-stretch flex items-center left-[calc(50%-0.53px)] opacity-0 px-[8px] py-[4px] rounded-[8px] top-[calc(50%-0.47px)]" data-name="Tooltip">
          <div className="[word-break:break-word] content-center flex flex-wrap font-['Inter:Regular',sans-serif] font-normal gap-[4px_8px] items-center leading-[20px] not-italic relative rounded-[8px] shrink-0 text-[14px] text-black whitespace-nowrap" data-name="Text">
            <p className="relative shrink-0" style={{ fontFeatureSettings: "'ss01', 'cv01'" }}>
              Tooltip
            </p>
            <p className="relative shrink-0" style={{ fontFeatureSettings: "'ss01', 'cv01'" }}>
              ⌘
            </p>
          </div>
        </div>
      </div>
    );
  }
  if (property === "6E" && state === "Hover") {
    return (
      <div className={className || "h-[48.948px] relative w-[49.737px]"} data-name="Property=6E, State=Hover">
        <div className="absolute inset-[8.17%_8.04%_-8.17%_-8.04%]" data-name="Frame">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 49.737 48.948">
            <g id="Frame">
              <mask height="48" id="mask0_1_7511" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="48" x="1" y="0">
                <path clipRule="evenodd" d={svgPaths.p215d2a00} fill="url(#paint0_linear_1_7511)" fillRule="evenodd" id="Subtract" />
              </mask>
              <g mask="url(#mask0_1_7511)">
                <path clipRule="evenodd" d={svgPaths.p215d2a00} fill="var(--fill-0, #92BFFF)" fillRule="evenodd" id="Subtract_2" />
              </g>
            </g>
            <defs>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_7511" x1="49.737" x2="35.3864" y1="0" y2="24.9582">
                <stop />
                <stop offset="1" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-[rgba(0,0,0,0.8)] content-stretch flex items-center left-[calc(50%+2.47px)] opacity-0 px-[8px] py-[4px] rounded-[8px] top-[calc(50%+1.53px)]" data-name="Tooltip">
          <div className="[word-break:break-word] content-center flex flex-wrap font-['Inter:Regular',sans-serif] font-normal gap-[4px_8px] items-center leading-[20px] not-italic relative rounded-[8px] shrink-0 text-[14px] text-black whitespace-nowrap" data-name="Text">
            <p className="relative shrink-0" style={{ fontFeatureSettings: "'ss01', 'cv01'" }}>
              Tooltip
            </p>
            <p className="relative shrink-0" style={{ fontFeatureSettings: "'ss01', 'cv01'" }}>
              ⌘
            </p>
          </div>
        </div>
      </div>
    );
  }
  if (property === "6D" && state === "Default") {
    return (
      <div className={className || "h-[44.617px] relative w-[33.891px]"} data-name="Property=6D, State=Default">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 33.8907 44.617">
          <g id="Frame">
            <mask height="43" id="mask0_1_7689" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="33" x="0" y="1">
              <path clipRule="evenodd" d={svgPaths.p3028b00} fill="url(#paint0_linear_1_7689)" fillRule="evenodd" id="Subtract" />
            </mask>
            <g mask="url(#mask0_1_7689)">
              <path clipRule="evenodd" d={svgPaths.p3028b00} fill="var(--fill-0, #94E9B8)" fillRule="evenodd" id="Subtract_2" />
            </g>
          </g>
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_7689" x1="33.8907" x2="19.2618" y1="0" y2="19.019">
              <stop />
              <stop offset="1" />
            </linearGradient>
          </defs>
        </svg>
        <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-[rgba(0,0,0,0.8)] content-stretch flex items-center left-[calc(50%+1.28px)] opacity-0 px-[8px] py-[4px] rounded-[8px] top-[calc(50%-0.31px)]" data-name="Tooltip">
          <div className="[word-break:break-word] content-center flex flex-wrap font-['Inter:Regular',sans-serif] font-normal gap-[4px_8px] items-center leading-[20px] not-italic relative rounded-[8px] shrink-0 text-[14px] text-black whitespace-nowrap" data-name="Text">
            <p className="relative shrink-0" style={{ fontFeatureSettings: "'ss01', 'cv01'" }}>
              Tooltip
            </p>
            <p className="relative shrink-0" style={{ fontFeatureSettings: "'ss01', 'cv01'" }}>
              ⌘
            </p>
          </div>
        </div>
      </div>
    );
  }
  if (property === "6D" && state === "Appear") {
    return (
      <div className={className || "h-[44.617px] relative w-[33.891px]"} data-name="Property=6D, State=Appear">
        <div className="absolute inset-[3.3%_4.05%_2.04%_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32.5183 42.2346">
            <path d={svgPaths.p3d50ce00} id="Subtract" opacity="0.4" stroke="var(--stroke-0, #94E9B8)" />
          </svg>
        </div>
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 33.8907 44.617">
          <g id="Frame">
            <mask height="43" id="mask0_1_7487" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="33" x="0" y="1">
              <path clipRule="evenodd" d={svgPaths.p3028b00} fill="url(#paint0_linear_1_7487)" fillRule="evenodd" id="Subtract" />
            </mask>
            <g mask="url(#mask0_1_7487)">
              <path clipRule="evenodd" d={svgPaths.p3028b00} fill="var(--fill-0, #94E9B8)" fillRule="evenodd" id="Subtract_2" />
            </g>
          </g>
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_7487" x1="17.2268" x2="19.4471" y1="45" y2="63.2296">
              <stop stopOpacity="0" />
              <stop offset="1" />
            </linearGradient>
          </defs>
        </svg>
        <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-[rgba(0,0,0,0.8)] content-stretch flex items-center left-[calc(50%+1.28px)] opacity-0 px-[8px] py-[4px] rounded-[8px] top-[calc(50%-0.31px)]" data-name="Tooltip">
          <div className="[word-break:break-word] content-center flex flex-wrap font-['Inter:Regular',sans-serif] font-normal gap-[4px_8px] items-center leading-[20px] not-italic relative rounded-[8px] shrink-0 text-[14px] text-black whitespace-nowrap" data-name="Text">
            <p className="relative shrink-0" style={{ fontFeatureSettings: "'ss01', 'cv01'" }}>
              Tooltip
            </p>
            <p className="relative shrink-0" style={{ fontFeatureSettings: "'ss01', 'cv01'" }}>
              ⌘
            </p>
          </div>
        </div>
      </div>
    );
  }
  if (property === "6D" && state === "Normal") {
    return (
      <div className={className || "h-[44.617px] relative w-[33.891px]"} data-name="Property=6D, State=Normal">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 33.8907 44.617">
          <g id="Frame">
            <mask height="43" id="mask0_1_7689" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="33" x="0" y="1">
              <path clipRule="evenodd" d={svgPaths.p3028b00} fill="url(#paint0_linear_1_7689)" fillRule="evenodd" id="Subtract" />
            </mask>
            <g mask="url(#mask0_1_7689)">
              <path clipRule="evenodd" d={svgPaths.p3028b00} fill="var(--fill-0, #94E9B8)" fillRule="evenodd" id="Subtract_2" />
            </g>
          </g>
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_7689" x1="33.8907" x2="19.2618" y1="0" y2="19.019">
              <stop />
              <stop offset="1" />
            </linearGradient>
          </defs>
        </svg>
        <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-[rgba(0,0,0,0.8)] content-stretch flex items-center left-[calc(50%+1.28px)] opacity-0 px-[8px] py-[4px] rounded-[8px] top-[calc(50%-0.31px)]" data-name="Tooltip">
          <div className="[word-break:break-word] content-center flex flex-wrap font-['Inter:Regular',sans-serif] font-normal gap-[4px_8px] items-center leading-[20px] not-italic relative rounded-[8px] shrink-0 text-[14px] text-black whitespace-nowrap" data-name="Text">
            <p className="relative shrink-0" style={{ fontFeatureSettings: "'ss01', 'cv01'" }}>
              Tooltip
            </p>
            <p className="relative shrink-0" style={{ fontFeatureSettings: "'ss01', 'cv01'" }}>
              ⌘
            </p>
          </div>
        </div>
      </div>
    );
  }
  if (property === "6D" && state === "Hover") {
    return (
      <div className={className || "h-[44.617px] relative w-[33.891px]"} data-name="Property=6D, State=Hover">
        <div className="absolute inset-[0_11.8%_0_-11.8%]" data-name="Frame">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 33.8907 44.617">
            <g id="Frame">
              <mask height="43" id="mask0_1_7689" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="33" x="0" y="1">
                <path clipRule="evenodd" d={svgPaths.p3028b00} fill="url(#paint0_linear_1_7689)" fillRule="evenodd" id="Subtract" />
              </mask>
              <g mask="url(#mask0_1_7689)">
                <path clipRule="evenodd" d={svgPaths.p3028b00} fill="var(--fill-0, #94E9B8)" fillRule="evenodd" id="Subtract_2" />
              </g>
            </g>
            <defs>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_7689" x1="33.8907" x2="19.2618" y1="0" y2="19.019">
                <stop />
                <stop offset="1" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-[rgba(0,0,0,0.8)] content-stretch flex items-center left-[calc(50%+4.28px)] opacity-0 px-[8px] py-[4px] rounded-[8px] top-[calc(50%+1.69px)]" data-name="Tooltip">
          <div className="[word-break:break-word] content-center flex flex-wrap font-['Inter:Regular',sans-serif] font-normal gap-[4px_8px] items-center leading-[20px] not-italic relative rounded-[8px] shrink-0 text-[14px] text-black whitespace-nowrap" data-name="Text">
            <p className="relative shrink-0" style={{ fontFeatureSettings: "'ss01', 'cv01'" }}>
              Tooltip
            </p>
            <p className="relative shrink-0" style={{ fontFeatureSettings: "'ss01', 'cv01'" }}>
              ⌘
            </p>
          </div>
        </div>
      </div>
    );
  }
  if (property === "6C" && state === "Default") {
    return (
      <div className={className || "h-[35.369px] relative w-[35.881px]"} data-name="Property=6C, State=Default">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 35.8812 35.3691">
          <g id="Frame">
            <mask height="34" id="mask0_1_7713" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="34" x="1" y="1">
              <path clipRule="evenodd" d={svgPaths.p23670300} fill="url(#paint0_linear_1_7713)" fillRule="evenodd" id="Subtract" />
            </mask>
            <g mask="url(#mask0_1_7713)">
              <path clipRule="evenodd" d={svgPaths.p23670300} fill="var(--fill-0, #AEC7ED)" fillRule="evenodd" id="Subtract_2" />
            </g>
          </g>
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_7713" x1="35.8812" x2="25.5032" y1="0" y2="18.0199">
              <stop />
              <stop offset="1" />
            </linearGradient>
          </defs>
        </svg>
        <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-[rgba(0,0,0,0.8)] content-stretch flex items-center left-[calc(50%+3.17px)] opacity-0 px-[8px] py-[4px] rounded-[8px] top-[calc(50%+0.32px)]" data-name="Tooltip">
          <div className="[word-break:break-word] content-center flex flex-wrap font-['Inter:Regular',sans-serif] font-normal gap-[4px_8px] items-center leading-[20px] not-italic relative rounded-[8px] shrink-0 text-[14px] text-black whitespace-nowrap" data-name="Text">
            <p className="relative shrink-0" style={{ fontFeatureSettings: "'ss01', 'cv01'" }}>
              Tooltip
            </p>
            <p className="relative shrink-0" style={{ fontFeatureSettings: "'ss01', 'cv01'" }}>
              ⌘
            </p>
          </div>
        </div>
      </div>
    );
  }
  if (property === "6C" && state === "Appear") {
    return (
      <div className={className || "h-[35.369px] relative w-[35.881px]"} data-name="Property=6C, State=Appear">
        <div className="absolute inset-[4.26%_4.03%_3.81%_4.45%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32.8372 32.5137">
            <path d={svgPaths.p5969200} id="Subtract" opacity="0.4" stroke="var(--stroke-0, #AEC7ED)" />
          </svg>
        </div>
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 35.8812 35.3691">
          <g id="Frame">
            <mask height="34" id="mask0_1_7685" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="34" x="1" y="1">
              <path clipRule="evenodd" d={svgPaths.p23670300} fill="url(#paint0_linear_1_7685)" fillRule="evenodd" id="Subtract" />
            </mask>
            <g mask="url(#mask0_1_7685)">
              <path clipRule="evenodd" d={svgPaths.p23670300} fill="var(--fill-0, #AEC7ED)" fillRule="evenodd" id="Subtract_2" />
            </g>
          </g>
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_7685" x1="7.10791" x2="3.36977" y1="29" y2="51.0688">
              <stop stopOpacity="0" />
              <stop offset="1" />
            </linearGradient>
          </defs>
        </svg>
        <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-[rgba(0,0,0,0.8)] content-stretch flex items-center left-[calc(50%+3.17px)] opacity-0 px-[8px] py-[4px] rounded-[8px] top-[calc(50%+0.32px)]" data-name="Tooltip">
          <div className="[word-break:break-word] content-center flex flex-wrap font-['Inter:Regular',sans-serif] font-normal gap-[4px_8px] items-center leading-[20px] not-italic relative rounded-[8px] shrink-0 text-[14px] text-black whitespace-nowrap" data-name="Text">
            <p className="relative shrink-0" style={{ fontFeatureSettings: "'ss01', 'cv01'" }}>
              Tooltip
            </p>
            <p className="relative shrink-0" style={{ fontFeatureSettings: "'ss01', 'cv01'" }}>
              ⌘
            </p>
          </div>
        </div>
      </div>
    );
  }
  if (property === "6C" && state === "Normal") {
    return (
      <div className={className || "h-[35.369px] relative w-[35.881px]"} data-name="Property=6C, State=Normal">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 35.8812 35.3691">
          <g id="Frame">
            <mask height="34" id="mask0_1_7713" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="34" x="1" y="1">
              <path clipRule="evenodd" d={svgPaths.p23670300} fill="url(#paint0_linear_1_7713)" fillRule="evenodd" id="Subtract" />
            </mask>
            <g mask="url(#mask0_1_7713)">
              <path clipRule="evenodd" d={svgPaths.p23670300} fill="var(--fill-0, #AEC7ED)" fillRule="evenodd" id="Subtract_2" />
            </g>
          </g>
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_7713" x1="35.8812" x2="25.5032" y1="0" y2="18.0199">
              <stop />
              <stop offset="1" />
            </linearGradient>
          </defs>
        </svg>
        <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-[rgba(0,0,0,0.8)] content-stretch flex items-center left-[calc(50%+3.17px)] opacity-0 px-[8px] py-[4px] rounded-[8px] top-[calc(50%+0.32px)]" data-name="Tooltip">
          <div className="[word-break:break-word] content-center flex flex-wrap font-['Inter:Regular',sans-serif] font-normal gap-[4px_8px] items-center leading-[20px] not-italic relative rounded-[8px] shrink-0 text-[14px] text-black whitespace-nowrap" data-name="Text">
            <p className="relative shrink-0" style={{ fontFeatureSettings: "'ss01', 'cv01'" }}>
              Tooltip
            </p>
            <p className="relative shrink-0" style={{ fontFeatureSettings: "'ss01', 'cv01'" }}>
              ⌘
            </p>
          </div>
        </div>
      </div>
    );
  }
  if (property === "6C" && state === "Hover") {
    return (
      <div className={className || "h-[35.369px] relative w-[35.881px]"} data-name="Property=6C, State=Hover">
        <div className="absolute inset-[-11.31%_5.57%_11.31%_-5.57%]" data-name="Frame">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 35.8812 35.3691">
            <g id="Frame">
              <mask height="34" id="mask0_1_7713" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="34" x="1" y="1">
                <path clipRule="evenodd" d={svgPaths.p23670300} fill="url(#paint0_linear_1_7713)" fillRule="evenodd" id="Subtract" />
              </mask>
              <g mask="url(#mask0_1_7713)">
                <path clipRule="evenodd" d={svgPaths.p23670300} fill="var(--fill-0, #AEC7ED)" fillRule="evenodd" id="Subtract_2" />
              </g>
            </g>
            <defs>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_7713" x1="35.8812" x2="25.5032" y1="0" y2="18.0199">
                <stop />
                <stop offset="1" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-[rgba(0,0,0,0.8)] content-stretch flex items-center left-[calc(50%+8.17px)] opacity-0 px-[8px] py-[4px] rounded-[8px] top-[calc(50%+2.32px)]" data-name="Tooltip">
          <div className="[word-break:break-word] content-center flex flex-wrap font-['Inter:Regular',sans-serif] font-normal gap-[4px_8px] items-center leading-[20px] not-italic relative rounded-[8px] shrink-0 text-[14px] text-black whitespace-nowrap" data-name="Text">
            <p className="relative shrink-0" style={{ fontFeatureSettings: "'ss01', 'cv01'" }}>
              Tooltip
            </p>
            <p className="relative shrink-0" style={{ fontFeatureSettings: "'ss01', 'cv01'" }}>
              ⌘
            </p>
          </div>
        </div>
      </div>
    );
  }
  if (property === "6B" && state === "Default") {
    return (
      <div className={className || "h-[33.168px] relative w-[28.449px]"} data-name="Property=6B, State=Default">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28.4489 33.1682">
          <g id="Frame">
            <mask height="32" id="mask0_1_7477" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="28" x="1" y="0">
              <path clipRule="evenodd" d={svgPaths.pe187280} fill="url(#paint0_linear_1_7477)" fillRule="evenodd" id="Subtract" />
            </mask>
            <g mask="url(#mask0_1_7477)">
              <path clipRule="evenodd" d={svgPaths.pe187280} fill="var(--fill-0, #9F9FF8)" fillRule="evenodd" id="Subtract_2" />
            </g>
          </g>
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_7477" x1="28.4489" x2="17.9783" y1="0" y2="15.3713">
              <stop />
              <stop offset="1" />
            </linearGradient>
          </defs>
        </svg>
        <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-[rgba(0,0,0,0.8)] content-stretch flex items-center left-[calc(50%+2.33px)] opacity-0 px-[8px] py-[4px] rounded-[8px] top-[calc(50%+0.42px)]" data-name="Tooltip">
          <div className="[word-break:break-word] content-center flex flex-wrap font-['Inter:Regular',sans-serif] font-normal gap-[4px_8px] items-center leading-[20px] not-italic relative rounded-[8px] shrink-0 text-[14px] text-black whitespace-nowrap" data-name="Text">
            <p className="relative shrink-0" style={{ fontFeatureSettings: "'ss01', 'cv01'" }}>
              Tooltip
            </p>
            <p className="relative shrink-0" style={{ fontFeatureSettings: "'ss01', 'cv01'" }}>
              ⌘
            </p>
          </div>
        </div>
      </div>
    );
  }
  if (property === "6B" && state === "Appear") {
    return (
      <div className={className || "h-[33.168px] relative w-[28.449px]"} data-name="Property=6B, State=Appear">
        <div className="absolute inset-[0.37%_0_3.61%_5.35%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26.9259 31.8465">
            <path d={svgPaths.p1d4d2100} id="Subtract" opacity="0.4" stroke="var(--stroke-0, #9F9FF8)" />
          </svg>
        </div>
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28.4489 33.1682">
          <g id="Frame">
            <mask height="32" id="mask0_1_7601" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="28" x="1" y="0">
              <path clipRule="evenodd" d={svgPaths.pe187280} fill="url(#paint0_linear_1_7601)" fillRule="evenodd" id="Subtract" />
            </mask>
            <g mask="url(#mask0_1_7601)">
              <path clipRule="evenodd" d={svgPaths.pe187280} fill="var(--fill-0, #9F9FF8)" fillRule="evenodd" id="Subtract_2" />
            </g>
          </g>
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_7601" x1="-0.443237" x2="-10.4068" y1="23" y2="35.4333">
              <stop stopOpacity="0" />
              <stop offset="1" />
            </linearGradient>
          </defs>
        </svg>
        <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-[rgba(0,0,0,0.8)] content-stretch flex items-center left-[calc(50%+2.33px)] opacity-0 px-[8px] py-[4px] rounded-[8px] top-[calc(50%+0.42px)]" data-name="Tooltip">
          <div className="[word-break:break-word] content-center flex flex-wrap font-['Inter:Regular',sans-serif] font-normal gap-[4px_8px] items-center leading-[20px] not-italic relative rounded-[8px] shrink-0 text-[14px] text-black whitespace-nowrap" data-name="Text">
            <p className="relative shrink-0" style={{ fontFeatureSettings: "'ss01', 'cv01'" }}>
              Tooltip
            </p>
            <p className="relative shrink-0" style={{ fontFeatureSettings: "'ss01', 'cv01'" }}>
              ⌘
            </p>
          </div>
        </div>
      </div>
    );
  }
  if (property === "6B" && state === "Normal") {
    return (
      <div className={className || "h-[33.168px] relative w-[28.449px]"} data-name="Property=6B, State=Normal">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28.4489 33.1682">
          <g id="Frame">
            <mask height="32" id="mask0_1_7477" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="28" x="1" y="0">
              <path clipRule="evenodd" d={svgPaths.pe187280} fill="url(#paint0_linear_1_7477)" fillRule="evenodd" id="Subtract" />
            </mask>
            <g mask="url(#mask0_1_7477)">
              <path clipRule="evenodd" d={svgPaths.pe187280} fill="var(--fill-0, #9F9FF8)" fillRule="evenodd" id="Subtract_2" />
            </g>
          </g>
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_7477" x1="28.4489" x2="17.9783" y1="0" y2="15.3713">
              <stop />
              <stop offset="1" />
            </linearGradient>
          </defs>
        </svg>
        <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-[rgba(0,0,0,0.8)] content-stretch flex items-center left-[calc(50%+2.33px)] opacity-0 px-[8px] py-[4px] rounded-[8px] top-[calc(50%+0.42px)]" data-name="Tooltip">
          <div className="[word-break:break-word] content-center flex flex-wrap font-['Inter:Regular',sans-serif] font-normal gap-[4px_8px] items-center leading-[20px] not-italic relative rounded-[8px] shrink-0 text-[14px] text-black whitespace-nowrap" data-name="Text">
            <p className="relative shrink-0" style={{ fontFeatureSettings: "'ss01', 'cv01'" }}>
              Tooltip
            </p>
            <p className="relative shrink-0" style={{ fontFeatureSettings: "'ss01', 'cv01'" }}>
              ⌘
            </p>
          </div>
        </div>
      </div>
    );
  }
  if (property === "6B" && state === "Hover") {
    return (
      <div className={className || "h-[33.168px] relative w-[28.449px]"} data-name="Property=6B, State=Hover">
        <div className="absolute inset-[-12.06%_3.52%_12.06%_-3.52%]" data-name="Frame">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28.4489 33.1682">
            <g id="Frame">
              <mask height="32" id="mask0_1_7477" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="28" x="1" y="0">
                <path clipRule="evenodd" d={svgPaths.pe187280} fill="url(#paint0_linear_1_7477)" fillRule="evenodd" id="Subtract" />
              </mask>
              <g mask="url(#mask0_1_7477)">
                <path clipRule="evenodd" d={svgPaths.pe187280} fill="var(--fill-0, #9F9FF8)" fillRule="evenodd" id="Subtract_2" />
              </g>
            </g>
            <defs>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_7477" x1="28.4489" x2="17.9783" y1="0" y2="15.3713">
                <stop />
                <stop offset="1" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-[rgba(0,0,0,0.8)] content-stretch flex items-center left-[calc(50%+8.33px)] opacity-0 px-[8px] py-[4px] rounded-[8px] top-[calc(50%+2.42px)]" data-name="Tooltip">
          <div className="[word-break:break-word] content-center flex flex-wrap font-['Inter:Regular',sans-serif] font-normal gap-[4px_8px] items-center leading-[20px] not-italic relative rounded-[8px] shrink-0 text-[14px] text-black whitespace-nowrap" data-name="Text">
            <p className="relative shrink-0" style={{ fontFeatureSettings: "'ss01', 'cv01'" }}>
              Tooltip
            </p>
            <p className="relative shrink-0" style={{ fontFeatureSettings: "'ss01', 'cv01'" }}>
              ⌘
            </p>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className={className || "h-[89.3px] relative w-[60px]"} data-name="Property=2A, State=Default">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 60 89.2998">
        <g id="Frame">
          <mask height="88" id="mask0_1_7695" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="60" x="0" y="0">
            <path clipRule="evenodd" d={svgPaths.p175a1c80} fill="url(#paint0_linear_1_7695)" fillRule="evenodd" id="Subtract" />
          </mask>
          <g mask="url(#mask0_1_7695)">
            <path clipRule="evenodd" d={svgPaths.p175a1c80} fill="var(--fill-0, #92BFFF)" fillRule="evenodd" id="Subtract_2" />
          </g>
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_7695" x1="60" x2="30" y1="0" y2="34.5">
            <stop />
            <stop offset="1" />
          </linearGradient>
        </defs>
      </svg>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-[rgba(0,0,0,0.8)] content-stretch flex items-center left-[calc(50%-11.5px)] opacity-0 px-[8px] py-[4px] rounded-[8px] top-[calc(50%+0.35px)]" data-name="Tooltip">
        <div className="[word-break:break-word] content-center flex flex-wrap font-['Inter:Regular',sans-serif] font-normal gap-[4px_8px] items-center leading-[20px] not-italic relative rounded-[8px] shrink-0 text-[14px] text-black whitespace-nowrap" data-name="Text">
          <p className="relative shrink-0" style={{ fontFeatureSettings: "'ss01', 'cv01'" }}>
            Tooltip
          </p>
          <p className="relative shrink-0" style={{ fontFeatureSettings: "'ss01', 'cv01'" }}>
            ⌘
          </p>
        </div>
      </div>
    </div>
  );
}
type DonutChartProps = {
  className?: string;
  dataCount?: "2" | "3" | "4" | "5" | "6";
};

function DonutChart({ className, dataCount = "2" }: DonutChartProps) {
  const is3 = dataCount === "3";
  const is4 = dataCount === "4";
  const is5 = dataCount === "5";
  const is6 = dataCount === "6";
  return (
    <div className={className || `relative ${is3 ? "h-[119.997px] w-[120px]" : "size-[120px]"}`}>
      <DonutGraph className={`absolute ${is6 ? "inset-[38.33%_-0.1%_-0.25%_38.67%]" : is5 ? "inset-[0_0.28%_0.03%_38.29%]" : is4 ? "inset-[0_0.01%_0.03%_38.07%]" : is3 ? "inset-[0_-0.37%_0.01%_38.93%]" : "inset-[0_-0.3%_0.03%_7.5%]"}`} property={is6 ? "6F" : is5 ? "5E" : is4 ? "4D" : is3 ? "3C" : "2B"} />
      <DonutGraph className={`absolute ${is6 ? "inset-[57.5%_56.33%_1.71%_2.22%]" : is5 ? "inset-[57.5%_56.71%_1.71%_1.84%]" : is4 ? "inset-[37.5%_56.93%_1.51%_0.13%]" : is3 ? "bottom-[1.58%] left-[-0.32%] right-[56.9%] top-1/4" : "bottom-[25.58%] left-0 right-1/2 top-0"}`} property={is6 ? "6E" : is5 ? "5D" : is4 ? "4C" : is3 ? "3B" : undefined} />
      {["3", "4", "5", "6"].includes(dataCount) && <DonutGraph className={`absolute ${is6 ? "bottom-[37.82%] left-[-0.19%] right-[71.95%] top-1/4" : is5 ? "bottom-[37.82%] left-[0.27%] right-[71.49%] top-1/4" : is4 ? "inset-[6.67%_62.37%_58.08%_2.41%]" : "inset-[0_50.32%_64.05%_7.8%]"}`} property={is6 ? "6D" : is5 ? "5C" : is4 ? "4B" : "3A"} />}
      {["4", "5", "6"].includes(dataCount) && <DonutGraph className={`absolute ${is6 ? "inset-[6.67%_62.69%_63.86%_7.41%]" : is5 ? "inset-[6.67%_63.07%_63.86%_7.03%]" : "inset-[0_50.09%_72.36%_26.2%]"}`} property={is6 ? "6C" : is5 ? "5B" : "4A"} />}
      {["5", "6"].includes(dataCount) && <DonutGraph className={`absolute ${is6 ? "inset-[0_50.09%_72.36%_26.2%]" : "inset-[0_50.47%_72.36%_25.82%]"}`} property={is6 ? "6B" : "5A"} />}
      {is6 && <DonutGraph className="absolute inset-[0_2.13%_57.08%_51.39%]" property="6A" />}
    </div>
  );
}
type LineAProps = {
  className?: string;
  property?: "Default" | "2" | "3";
};

function LineA({ className, property = "Default" }: LineAProps) {
  const is2 = property === "2";
  return (
    <div className={className || "h-[240px] relative w-[560px]"}>
      <div className={`absolute inset-[10%_0_0_0] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_-24px] ${is2 ? "mask-size-[1px_240px]" : "mask-size-[560px_240px]"}`} style={is2 ? { maskImage: `url('${imgBackground1}')` } : { maskImage: `url('${imgBackground}')` }} data-name="Background">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 560 216">
          <g id="Background">
            <mask height="201" id="mask0_1_7469" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="560" x="0" y="15">
              <path d={svgPaths.pf6aae00} fill="url(#paint0_radial_1_7469)" id="Vector" />
            </mask>
            <g mask="url(#mask0_1_7469)">
              <path d={svgPaths.p19e38200} fill="var(--fill-0, black)" id="Vector_2" opacity="0.6" />
            </g>
          </g>
          <defs>
            <radialGradient cx="0" cy="0" gradientTransform="translate(279.999 39.6777) rotate(90) scale(147.822 279.999)" gradientUnits="userSpaceOnUse" id="paint0_radial_1_7469" r="1">
              <stop stopOpacity="0.1" />
              <stop offset="1" stopOpacity="0" />
            </radialGradient>
          </defs>
        </svg>
      </div>
      <div className={`absolute inset-[10%_0_24.58%_0] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_-24px] ${is2 ? "mask-size-[1px_240px]" : "mask-size-[560px_240px]"}`} style={is2 ? { maskImage: `url('${imgBackground1}')` } : { maskImage: `url('${imgBackground}')` }} data-name="Line">
        <div className="absolute inset-[9.58%_0_4.87%_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 561 134.319">
            <g id="Line">
              <path d={svgPaths.p3990800} stroke="url(#paint0_linear_1_7467)" strokeLinecap="round" />
              <path d={svgPaths.p3990800} stroke="var(--stroke-1, black)" strokeLinecap="round" style={{ mixBlendMode: "screen" }} />
            </g>
            <defs>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_7467" x1="3.13986" x2="560.5" y1="159.686" y2="159.686">
                <stop stopOpacity="0.4" />
                <stop offset="1" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  );
}
type LineBProps = {
  className?: string;
  property?: "Default" | "2" | "3";
};

function LineB({ className, property = "Default" }: LineBProps) {
  const is2 = property === "2";
  return (
    <div className={className || "h-[240px] relative w-[560px]"}>
      <div className={`absolute inset-[10%_0_24.58%_0] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_-24px] ${is2 ? "mask-size-[1px_240px]" : "mask-size-[560px_240px]"}`} style={is2 ? { maskImage: `url('${imgBackground1}')` } : { maskImage: `url('${imgBackground}')` }}>
        <div className="absolute inset-[-0.32%_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 561 158">
            <path d={svgPaths.p2a2d500} id="Line 2" stroke="var(--stroke-0, #A0BCE8)" strokeDasharray="2 4" strokeLinecap="round" />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default function Frame({ className }: { className?: string }) {
  return (
    <div className={className || "content-start flex flex-wrap gap-[28px] items-start relative w-[892px]"} data-name="Frame">
      <div className="bg-[#edeefc] flex-[1_0_0] min-w-[200px] relative rounded-[20px]" data-name="Card">
        <div className="content-stretch flex flex-col gap-[8px] items-start min-w-[inherit] p-[24px] relative size-full">
          <div className="content-stretch flex flex-col items-start justify-center relative rounded-[12px] shrink-0 w-full" data-name="Text">
            <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal h-[20px] leading-[20px] not-italic relative shrink-0 text-[14px] text-black w-full" style={{ fontFeatureSettings: "'ss01', 'cv01'" }}>
              Views
            </p>
          </div>
          <div className="content-center flex flex-wrap gap-y-[8px] items-center justify-between relative rounded-[8px] shrink-0 w-full" data-name="Content">
            <div className="content-stretch flex items-start relative shrink-0" data-name="Rolling number">
              <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Roll numbers">
                <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[4px] shrink-0" data-name="Number">
                  <div className="h-[36px] relative shrink-0 w-[16px]" data-name="Number">
                    <div className="[word-break:break-word] absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[0] left-0 not-italic text-[#1c1c1c] text-[24px] top-[-252px] whitespace-nowrap" style={{ fontFeatureSettings: "'ss01', 'cv01', 'cv11'" }}>
                      <p className="leading-[36px] mb-0">0</p>
                      <p className="leading-[36px] mb-0">1</p>
                      <p className="leading-[36px] mb-0">2</p>
                      <p className="leading-[36px] mb-0">3</p>
                      <p className="leading-[36px] mb-0">4</p>
                      <p className="leading-[36px] mb-0">5</p>
                      <p className="leading-[36px] mb-0">6</p>
                      <p className="leading-[36px] mb-0">7</p>
                      <p className="leading-[36px] mb-0">8</p>
                      <p className="leading-[36px] mb-0">9</p>
                      <p className="leading-[36px]">0</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Roll numbers">
                <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[4px] shrink-0" data-name="Number">
                  <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[36px] not-italic relative shrink-0 text-[#1c1c1c] text-[24px] whitespace-nowrap" style={{ fontFeatureSettings: "'ss01', 'cv01', 'cv11'" }}>
                    ,
                  </p>
                </div>
              </div>
              <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Roll numbers">
                <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[4px] shrink-0" data-name="Number">
                  <div className="h-[36px] relative shrink-0 w-[16px]" data-name="Number">
                    <div className="[word-break:break-word] absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[0] left-0 not-italic text-[#1c1c1c] text-[24px] top-[-72px] whitespace-nowrap" style={{ fontFeatureSettings: "'ss01', 'cv01', 'cv11'" }}>
                      <p className="leading-[36px] mb-0">0</p>
                      <p className="leading-[36px] mb-0">1</p>
                      <p className="leading-[36px] mb-0">2</p>
                      <p className="leading-[36px] mb-0">3</p>
                      <p className="leading-[36px] mb-0">4</p>
                      <p className="leading-[36px] mb-0">5</p>
                      <p className="leading-[36px] mb-0">6</p>
                      <p className="leading-[36px] mb-0">7</p>
                      <p className="leading-[36px] mb-0">8</p>
                      <p className="leading-[36px] mb-0">9</p>
                      <p className="leading-[36px]">0</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Roll numbers">
                <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[4px] shrink-0" data-name="Number">
                  <div className="h-[36px] relative shrink-0 w-[16px]" data-name="Number">
                    <div className="[word-break:break-word] absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[0] left-0 not-italic text-[#1c1c1c] text-[24px] top-[-216px] whitespace-nowrap" style={{ fontFeatureSettings: "'ss01', 'cv01', 'cv11'" }}>
                      <p className="leading-[36px] mb-0">0</p>
                      <p className="leading-[36px] mb-0">1</p>
                      <p className="leading-[36px] mb-0">2</p>
                      <p className="leading-[36px] mb-0">3</p>
                      <p className="leading-[36px] mb-0">4</p>
                      <p className="leading-[36px] mb-0">5</p>
                      <p className="leading-[36px] mb-0">6</p>
                      <p className="leading-[36px] mb-0">7</p>
                      <p className="leading-[36px] mb-0">8</p>
                      <p className="leading-[36px] mb-0">9</p>
                      <p className="leading-[36px]">0</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Roll numbers">
                <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[4px] shrink-0" data-name="Number">
                  <div className="h-[36px] relative shrink-0 w-[16px]" data-name="Number">
                    <div className="[word-break:break-word] absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[0] left-0 not-italic text-[#1c1c1c] text-[24px] top-[-180px] whitespace-nowrap" style={{ fontFeatureSettings: "'ss01', 'cv01', 'cv11'" }}>
                      <p className="leading-[36px] mb-0">0</p>
                      <p className="leading-[36px] mb-0">1</p>
                      <p className="leading-[36px] mb-0">2</p>
                      <p className="leading-[36px] mb-0">3</p>
                      <p className="leading-[36px] mb-0">4</p>
                      <p className="leading-[36px] mb-0">5</p>
                      <p className="leading-[36px] mb-0">6</p>
                      <p className="leading-[36px] mb-0">7</p>
                      <p className="leading-[36px] mb-0">8</p>
                      <p className="leading-[36px] mb-0">9</p>
                      <p className="leading-[36px]">0</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="content-center flex flex-[1_0_0] flex-wrap gap-[8px] items-center justify-end min-w-px relative rounded-[12px]" data-name="Icon & Text">
              <div className="content-stretch flex flex-col items-start justify-center relative rounded-[12px] shrink-0 w-[29px]" data-name="Text">
                <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[12px] text-black w-full" style={{ fontFeatureSettings: "'ss01', 'cv01'" }}>
                  +11.01%
                </p>
              </div>
              <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Icon">
                <div className="relative shrink-0 size-[16px]" data-name="State=Default">
                  <div className="absolute bottom-1/4 left-[9.37%] right-[12.5%] top-1/4" data-name="Vector">
                    <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.5 8">
                      <path clipRule="evenodd" d={svgPaths.p152e6a00} fill="var(--fill-0, black)" fillRule="evenodd" id="Vector" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#e6f1fd] flex-[1_0_0] min-w-[200px] relative rounded-[20px]" data-name="Card">
        <div className="content-stretch flex flex-col gap-[8px] items-start min-w-[inherit] p-[24px] relative size-full">
          <div className="content-stretch flex flex-col items-start justify-center relative rounded-[12px] shrink-0 w-full" data-name="Text">
            <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal h-[20px] leading-[20px] not-italic relative shrink-0 text-[14px] text-black w-full" style={{ fontFeatureSettings: "'ss01', 'cv01'" }}>
              Visits
            </p>
          </div>
          <div className="content-center flex flex-wrap gap-y-[8px] items-center justify-between relative rounded-[8px] shrink-0 w-full" data-name="Content">
            <div className="content-stretch flex items-start relative shrink-0" data-name="Rolling number">
              <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Roll numbers">
                <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[4px] shrink-0" data-name="Number">
                  <div className="h-[36px] relative shrink-0 w-[16px]" data-name="Number">
                    <div className="[word-break:break-word] absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[0] left-0 not-italic text-[#1c1c1c] text-[24px] top-[-108px] whitespace-nowrap" style={{ fontFeatureSettings: "'ss01', 'cv01', 'cv11'" }}>
                      <p className="leading-[36px] mb-0">0</p>
                      <p className="leading-[36px] mb-0">1</p>
                      <p className="leading-[36px] mb-0">2</p>
                      <p className="leading-[36px] mb-0">3</p>
                      <p className="leading-[36px] mb-0">4</p>
                      <p className="leading-[36px] mb-0">5</p>
                      <p className="leading-[36px] mb-0">6</p>
                      <p className="leading-[36px] mb-0">7</p>
                      <p className="leading-[36px] mb-0">8</p>
                      <p className="leading-[36px] mb-0">9</p>
                      <p className="leading-[36px]">0</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Roll numbers">
                <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[4px] shrink-0" data-name="Number">
                  <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[36px] not-italic relative shrink-0 text-[#1c1c1c] text-[24px] whitespace-nowrap" style={{ fontFeatureSettings: "'ss01', 'cv01', 'cv11'" }}>
                    ,
                  </p>
                </div>
              </div>
              <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Roll numbers">
                <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[4px] shrink-0" data-name="Number">
                  <div className="h-[36px] relative shrink-0 w-[16px]" data-name="Number">
                    <div className="[word-break:break-word] absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[0] left-0 not-italic text-[#1c1c1c] text-[24px] top-[-216px] whitespace-nowrap" style={{ fontFeatureSettings: "'ss01', 'cv01', 'cv11'" }}>
                      <p className="leading-[36px] mb-0">0</p>
                      <p className="leading-[36px] mb-0">1</p>
                      <p className="leading-[36px] mb-0">2</p>
                      <p className="leading-[36px] mb-0">3</p>
                      <p className="leading-[36px] mb-0">4</p>
                      <p className="leading-[36px] mb-0">5</p>
                      <p className="leading-[36px] mb-0">6</p>
                      <p className="leading-[36px] mb-0">7</p>
                      <p className="leading-[36px] mb-0">8</p>
                      <p className="leading-[36px] mb-0">9</p>
                      <p className="leading-[36px]">0</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Roll numbers">
                <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[4px] shrink-0" data-name="Number">
                  <div className="h-[36px] relative shrink-0 w-[16px]" data-name="Number">
                    <div className="[word-break:break-word] absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[0] left-0 not-italic text-[#1c1c1c] text-[24px] top-[-252px] whitespace-nowrap" style={{ fontFeatureSettings: "'ss01', 'cv01', 'cv11'" }}>
                      <p className="leading-[36px] mb-0">0</p>
                      <p className="leading-[36px] mb-0">1</p>
                      <p className="leading-[36px] mb-0">2</p>
                      <p className="leading-[36px] mb-0">3</p>
                      <p className="leading-[36px] mb-0">4</p>
                      <p className="leading-[36px] mb-0">5</p>
                      <p className="leading-[36px] mb-0">6</p>
                      <p className="leading-[36px] mb-0">7</p>
                      <p className="leading-[36px] mb-0">8</p>
                      <p className="leading-[36px] mb-0">9</p>
                      <p className="leading-[36px]">0</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Roll numbers">
                <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[4px] shrink-0" data-name="Number">
                  <div className="h-[36px] relative shrink-0 w-[16px]" data-name="Number">
                    <div className="[word-break:break-word] absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[0] left-0 not-italic text-[#1c1c1c] text-[24px] top-[-36px] whitespace-nowrap" style={{ fontFeatureSettings: "'ss01', 'cv01', 'cv11'" }}>
                      <p className="leading-[36px] mb-0">0</p>
                      <p className="leading-[36px] mb-0">1</p>
                      <p className="leading-[36px] mb-0">2</p>
                      <p className="leading-[36px] mb-0">3</p>
                      <p className="leading-[36px] mb-0">4</p>
                      <p className="leading-[36px] mb-0">5</p>
                      <p className="leading-[36px] mb-0">6</p>
                      <p className="leading-[36px] mb-0">7</p>
                      <p className="leading-[36px] mb-0">8</p>
                      <p className="leading-[36px] mb-0">9</p>
                      <p className="leading-[36px]">0</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="content-center flex flex-[1_0_0] flex-wrap gap-[8px] items-center justify-end min-w-px relative rounded-[12px]" data-name="Icon & Text">
              <div className="content-stretch flex flex-col items-start justify-center relative rounded-[12px] shrink-0 w-[29px]" data-name="Text">
                <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[12px] text-black w-full" style={{ fontFeatureSettings: "'ss01', 'cv01'" }}>
                  -0.03%
                </p>
              </div>
              <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Icon">
                <div className="relative shrink-0 size-[16px]" data-name="State=Default">
                  <div className="absolute inset-[21.88%_9.37%_28.13%_12.5%]" data-name="Vector">
                    <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.5 8">
                      <path clipRule="evenodd" d={svgPaths.p1622b780} fill="var(--fill-0, black)" fillRule="evenodd" id="Vector" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#edeefc] flex-[1_0_0] min-w-[200px] relative rounded-[20px]" data-name="Card">
        <div className="content-stretch flex flex-col gap-[8px] items-start min-w-[inherit] p-[24px] relative size-full">
          <div className="content-stretch flex flex-col items-start justify-center relative rounded-[12px] shrink-0 w-full" data-name="Text">
            <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal h-[20px] leading-[20px] not-italic relative shrink-0 text-[14px] text-black w-full" style={{ fontFeatureSettings: "'ss01', 'cv01'" }}>
              New Users
            </p>
          </div>
          <div className="content-center flex flex-wrap gap-y-[8px] items-center justify-between relative rounded-[8px] shrink-0 w-full" data-name="Content">
            <div className="content-stretch flex items-start relative shrink-0" data-name="Rolling number">
              <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Roll numbers">
                <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[4px] shrink-0" data-name="Number">
                  <div className="h-[36px] relative shrink-0 w-[16px]" data-name="Number">
                    <div className="[word-break:break-word] absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[0] left-0 not-italic text-[#1c1c1c] text-[24px] top-[-36px] whitespace-nowrap" style={{ fontFeatureSettings: "'ss01', 'cv01', 'cv11'" }}>
                      <p className="leading-[36px] mb-0">0</p>
                      <p className="leading-[36px] mb-0">1</p>
                      <p className="leading-[36px] mb-0">2</p>
                      <p className="leading-[36px] mb-0">3</p>
                      <p className="leading-[36px] mb-0">4</p>
                      <p className="leading-[36px] mb-0">5</p>
                      <p className="leading-[36px] mb-0">6</p>
                      <p className="leading-[36px] mb-0">7</p>
                      <p className="leading-[36px] mb-0">8</p>
                      <p className="leading-[36px] mb-0">9</p>
                      <p className="leading-[36px]">0</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Roll numbers">
                <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[4px] shrink-0" data-name="Number">
                  <div className="h-[36px] relative shrink-0 w-[16px]" data-name="Number">
                    <div className="[word-break:break-word] absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[0] left-0 not-italic text-[#1c1c1c] text-[24px] top-[-180px] whitespace-nowrap" style={{ fontFeatureSettings: "'ss01', 'cv01', 'cv11'" }}>
                      <p className="leading-[36px] mb-0">0</p>
                      <p className="leading-[36px] mb-0">1</p>
                      <p className="leading-[36px] mb-0">2</p>
                      <p className="leading-[36px] mb-0">3</p>
                      <p className="leading-[36px] mb-0">4</p>
                      <p className="leading-[36px] mb-0">5</p>
                      <p className="leading-[36px] mb-0">6</p>
                      <p className="leading-[36px] mb-0">7</p>
                      <p className="leading-[36px] mb-0">8</p>
                      <p className="leading-[36px] mb-0">9</p>
                      <p className="leading-[36px]">0</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Roll numbers">
                <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[4px] shrink-0" data-name="Number">
                  <div className="h-[36px] relative shrink-0 w-[16px]" data-name="Number">
                    <div className="[word-break:break-word] absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[0] left-0 not-italic text-[#1c1c1c] text-[24px] top-[-216px] whitespace-nowrap" style={{ fontFeatureSettings: "'ss01', 'cv01', 'cv11'" }}>
                      <p className="leading-[36px] mb-0">0</p>
                      <p className="leading-[36px] mb-0">1</p>
                      <p className="leading-[36px] mb-0">2</p>
                      <p className="leading-[36px] mb-0">3</p>
                      <p className="leading-[36px] mb-0">4</p>
                      <p className="leading-[36px] mb-0">5</p>
                      <p className="leading-[36px] mb-0">6</p>
                      <p className="leading-[36px] mb-0">7</p>
                      <p className="leading-[36px] mb-0">8</p>
                      <p className="leading-[36px] mb-0">9</p>
                      <p className="leading-[36px]">0</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="content-center flex flex-[1_0_0] flex-wrap gap-[8px] items-center justify-end min-w-px relative rounded-[12px]" data-name="Icon & Text">
              <div className="content-stretch flex flex-col items-start justify-center relative rounded-[12px] shrink-0 w-[29px]" data-name="Text">
                <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[12px] text-black w-full" style={{ fontFeatureSettings: "'ss01', 'cv01'" }}>
                  +15.03%
                </p>
              </div>
              <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Icon">
                <div className="relative shrink-0 size-[16px]" data-name="State=Default">
                  <div className="absolute bottom-1/4 left-[9.37%] right-[12.5%] top-1/4" data-name="Vector">
                    <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.5 8">
                      <path clipRule="evenodd" d={svgPaths.p152e6a00} fill="var(--fill-0, black)" fillRule="evenodd" id="Vector" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#e6f1fd] flex-[1_0_0] min-w-[200px] relative rounded-[20px]" data-name="Card">
        <div className="content-stretch flex flex-col gap-[8px] items-start min-w-[inherit] p-[24px] relative size-full">
          <div className="content-stretch flex flex-col items-start justify-center relative rounded-[12px] shrink-0 w-full" data-name="Text">
            <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal h-[20px] leading-[20px] not-italic relative shrink-0 text-[14px] text-black w-full" style={{ fontFeatureSettings: "'ss01', 'cv01'" }}>
              Active Users
            </p>
          </div>
          <div className="content-center flex flex-wrap gap-y-[8px] items-center justify-between relative rounded-[8px] shrink-0 w-full" data-name="Content">
            <div className="content-stretch flex items-start relative shrink-0" data-name="Rolling number">
              <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Roll numbers">
                <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[4px] shrink-0" data-name="Number">
                  <div className="h-[36px] relative shrink-0 w-[16px]" data-name="Number">
                    <div className="[word-break:break-word] absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[0] left-0 not-italic text-[#1c1c1c] text-[24px] top-[-72px] whitespace-nowrap" style={{ fontFeatureSettings: "'ss01', 'cv01', 'cv11'" }}>
                      <p className="leading-[36px] mb-0">0</p>
                      <p className="leading-[36px] mb-0">1</p>
                      <p className="leading-[36px] mb-0">2</p>
                      <p className="leading-[36px] mb-0">3</p>
                      <p className="leading-[36px] mb-0">4</p>
                      <p className="leading-[36px] mb-0">5</p>
                      <p className="leading-[36px] mb-0">6</p>
                      <p className="leading-[36px] mb-0">7</p>
                      <p className="leading-[36px] mb-0">8</p>
                      <p className="leading-[36px] mb-0">9</p>
                      <p className="leading-[36px]">0</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Roll numbers">
                <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[4px] shrink-0" data-name="Number">
                  <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[36px] not-italic relative shrink-0 text-[#1c1c1c] text-[24px] whitespace-nowrap" style={{ fontFeatureSettings: "'ss01', 'cv01', 'cv11'" }}>
                    ,
                  </p>
                </div>
              </div>
              <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Roll numbers">
                <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[4px] shrink-0" data-name="Number">
                  <div className="h-[36px] relative shrink-0 w-[16px]" data-name="Number">
                    <div className="[word-break:break-word] absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[0] left-0 not-italic text-[#1c1c1c] text-[24px] top-[-108px] whitespace-nowrap" style={{ fontFeatureSettings: "'ss01', 'cv01', 'cv11'" }}>
                      <p className="leading-[36px] mb-0">0</p>
                      <p className="leading-[36px] mb-0">1</p>
                      <p className="leading-[36px] mb-0">2</p>
                      <p className="leading-[36px] mb-0">3</p>
                      <p className="leading-[36px] mb-0">4</p>
                      <p className="leading-[36px] mb-0">5</p>
                      <p className="leading-[36px] mb-0">6</p>
                      <p className="leading-[36px] mb-0">7</p>
                      <p className="leading-[36px] mb-0">8</p>
                      <p className="leading-[36px] mb-0">9</p>
                      <p className="leading-[36px]">0</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Roll numbers">
                <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[4px] shrink-0" data-name="Number">
                  <div className="h-[36px] relative shrink-0 w-[16px]" data-name="Number">
                    <div className="[word-break:break-word] absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[0] left-0 not-italic text-[#1c1c1c] text-[24px] top-[-36px] whitespace-nowrap" style={{ fontFeatureSettings: "'ss01', 'cv01', 'cv11'" }}>
                      <p className="leading-[36px] mb-0">0</p>
                      <p className="leading-[36px] mb-0">1</p>
                      <p className="leading-[36px] mb-0">2</p>
                      <p className="leading-[36px] mb-0">3</p>
                      <p className="leading-[36px] mb-0">4</p>
                      <p className="leading-[36px] mb-0">5</p>
                      <p className="leading-[36px] mb-0">6</p>
                      <p className="leading-[36px] mb-0">7</p>
                      <p className="leading-[36px] mb-0">8</p>
                      <p className="leading-[36px] mb-0">9</p>
                      <p className="leading-[36px]">0</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Roll numbers">
                <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[4px] shrink-0" data-name="Number">
                  <div className="h-[36px] relative shrink-0 w-[16px]" data-name="Number">
                    <div className="[word-break:break-word] absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[0] left-0 not-italic text-[#1c1c1c] text-[24px] top-[-288px] whitespace-nowrap" style={{ fontFeatureSettings: "'ss01', 'cv01', 'cv11'" }}>
                      <p className="leading-[36px] mb-0">0</p>
                      <p className="leading-[36px] mb-0">1</p>
                      <p className="leading-[36px] mb-0">2</p>
                      <p className="leading-[36px] mb-0">3</p>
                      <p className="leading-[36px] mb-0">4</p>
                      <p className="leading-[36px] mb-0">5</p>
                      <p className="leading-[36px] mb-0">6</p>
                      <p className="leading-[36px] mb-0">7</p>
                      <p className="leading-[36px] mb-0">8</p>
                      <p className="leading-[36px] mb-0">9</p>
                      <p className="leading-[36px]">0</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="content-center flex flex-[1_0_0] flex-wrap gap-[8px] items-center justify-end min-w-px relative rounded-[12px]" data-name="Icon & Text">
              <div className="content-stretch flex flex-col items-start justify-center relative rounded-[12px] shrink-0 w-[29px]" data-name="Text">
                <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[12px] text-black w-full" style={{ fontFeatureSettings: "'ss01', 'cv01'" }}>
                  +6.08%
                </p>
              </div>
              <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Icon">
                <div className="relative shrink-0 size-[16px]" data-name="State=Default">
                  <div className="absolute bottom-1/4 left-[9.37%] right-[12.5%] top-1/4" data-name="Vector">
                    <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.5 8">
                      <path clipRule="evenodd" d={svgPaths.p152e6a00} fill="var(--fill-0, black)" fillRule="evenodd" id="Vector" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#f9f9fa] flex-[1_0_0] h-[330px] min-w-[662px] relative rounded-[20px]" data-name="Block">
        <div className="min-w-[inherit] overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex flex-col gap-[16px] items-start min-w-[inherit] p-[24px] relative size-full">
            <div className="content-center flex flex-wrap gap-[8px_16px] items-center relative rounded-[8px] shrink-0 w-full" data-name="Group">
              <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Tap">
                <div className="content-stretch flex flex-col items-start justify-center relative rounded-[12px] shrink-0 w-[29px]" data-name="Text">
                  <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[14px] text-black w-full" style={{ fontFeatureSettings: "'ss01', 'cv01'" }}>
                    Total Users
                  </p>
                </div>
              </div>
              <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Tap">
                <div className="content-stretch flex flex-col items-start justify-center relative rounded-[12px] shrink-0 w-[29px]" data-name="Text">
                  <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[14px] text-[rgba(0,0,0,0.4)] w-full" style={{ fontFeatureSettings: "'ss01', 'cv01'" }}>
                    Total Projects
                  </p>
                </div>
              </div>
              <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Tap">
                <div className="content-stretch flex flex-col items-start justify-center relative rounded-[12px] shrink-0 w-[29px]" data-name="Text">
                  <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[14px] text-[rgba(0,0,0,0.4)] w-full" style={{ fontFeatureSettings: "'ss01', 'cv01'" }}>
                    Operating Status
                  </p>
                </div>
              </div>
              <div className="content-stretch flex flex-col items-start justify-center relative rounded-[12px] shrink-0 w-[24px]" data-name="Text">
                <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[14px] text-[rgba(0,0,0,0.2)] w-full" style={{ fontFeatureSettings: "'ss01', 'cv01'" }}>
                  |
                </p>
              </div>
              <div className="content-stretch flex items-center pl-[4px] pr-[8px] py-[2px] relative rounded-[8px] shrink-0" data-name="Tag">
                <div className="relative shrink-0 size-[12px]" data-name="Dot2">
                  <div className="absolute inset-[31.25%]" data-name="Vector">
                    <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.5 4.5">
                      <path d={svgPaths.p1cdea100} fill="var(--fill-0, black)" id="Vector" />
                    </svg>
                  </div>
                </div>
                <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap" style={{ fontFeatureSettings: "'ss01', 'cv01'" }}>
                  This year
                </p>
              </div>
              <div className="content-stretch flex items-center pl-[4px] pr-[8px] py-[2px] relative rounded-[8px] shrink-0" data-name="Tag">
                <div className="relative shrink-0 size-[12px]" data-name="Dot2">
                  <div className="absolute inset-[31.25%]" data-name="Vector">
                    <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.5 4.5">
                      <path d={svgPaths.p1cdea100} fill="var(--fill-0, black)" id="Vector" />
                    </svg>
                  </div>
                </div>
                <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap" style={{ fontFeatureSettings: "'ss01', 'cv01'" }}>
                  Last year
                </p>
              </div>
            </div>
            <div className="content-stretch flex flex-[1_0_0] gap-[16px] items-start min-h-px relative w-full" data-name="ChartMotion">
              <div className="[word-break:break-word] content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal h-full items-end justify-between leading-[0] not-italic relative shrink-0 text-[12px] text-[rgba(0,0,0,0.4)] text-right w-[29px]" data-name="Left Text">
                <div className="flex flex-[1_0_0] flex-col justify-center min-h-px relative w-full" style={{ fontFeatureSettings: "'ss01', 'cv01'" }}>
                  <p className="leading-[16px]">30K</p>
                </div>
                <div className="flex flex-[1_0_0] flex-col justify-center min-h-px relative w-full" style={{ fontFeatureSettings: "'ss01', 'cv01'" }}>
                  <p className="leading-[16px]">20K</p>
                </div>
                <div className="flex flex-[1_0_0] flex-col justify-center min-h-px relative w-full" style={{ fontFeatureSettings: "'ss01', 'cv01'" }}>
                  <p className="leading-[16px]">10K</p>
                </div>
                <div className="flex flex-[1_0_0] flex-col justify-center min-h-px relative w-full" style={{ fontFeatureSettings: "'ss01', 'cv01'" }}>
                  <p className="leading-[16px]">0</p>
                </div>
              </div>
              <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start min-w-px relative" data-name="Frame">
                <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Horizontal Line">
                  <div className="flex flex-col justify-center size-full">
                    <div className="relative size-full" />
                  </div>
                </div>
                <div className="absolute inset-0" data-name="State=Default">
                  <div className="absolute inset-[10%_0_24.58%_0] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_-24px] mask-size-[560px_240px]" style={{ maskImage: `url('${imgLine2}')` }}>
                    <div className="absolute inset-[-0.31%_0]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 576 161.925">
                        <path d={svgPaths.p258ddc40} id="Line 2" stroke="var(--stroke-0, #A0BCE8)" strokeDasharray="2 4" strokeLinecap="round" />
                      </svg>
                    </div>
                  </div>
                  <div className="absolute inset-[10%_0_0_0] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_-24px] mask-size-[560px_240px]" style={{ maskImage: `url('${imgLine2}')` }} data-name="Background">
                    <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 575 221.4">
                      <g id="Background">
                        <mask height="207" id="mask0_1_7671" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="575" x="0" y="15">
                          <path d={svgPaths.p3e6f5300} fill="url(#paint0_radial_1_7671)" id="Vector" />
                        </mask>
                        <g mask="url(#mask0_1_7671)">
                          <path d={svgPaths.p29d6acf0} fill="var(--fill-0, black)" id="Vector_2" opacity="0.6" />
                        </g>
                      </g>
                      <defs>
                        <radialGradient cx="0" cy="0" gradientTransform="translate(287.499 40.6697) rotate(90) scale(151.518 287.499)" gradientUnits="userSpaceOnUse" id="paint0_radial_1_7671" r="1">
                          <stop stopOpacity="0.1" />
                          <stop offset="1" stopOpacity="0" />
                        </radialGradient>
                      </defs>
                    </svg>
                  </div>
                  <div className="absolute inset-[10%_0_24.58%_0] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_-24px] mask-size-[560px_240px]" style={{ maskImage: `url('${imgLine2}')` }} data-name="Line">
                    <div className="absolute inset-[9.32%_0_4.74%_0]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 576 138.305">
                        <g id="Line">
                          <path d={svgPaths.p2fb4f800} stroke="url(#paint0_linear_1_7699)" strokeLinecap="round" />
                          <path d={svgPaths.p2fb4f800} stroke="var(--stroke-1, black)" strokeLinecap="round" style={{ mixBlendMode: "screen" }} />
                        </g>
                        <defs>
                          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_7699" x1="3.21056" x2="575.5" y1="164.094" y2="164.094">
                            <stop stopOpacity="0.4" />
                            <stop offset="1" />
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="[word-break:break-word] absolute bottom-0 content-stretch flex font-['Inter:Regular',sans-serif] font-normal items-center leading-[0] left-0 not-italic right-0 text-[12px] text-[rgba(0,0,0,0.4)] text-center" data-name="Bottom Text">
                  <div className="flex flex-[1_0_0] flex-col justify-center min-w-px relative" style={{ fontFeatureSettings: "'ss01', 'cv01'" }}>
                    <p className="leading-[16px]">Jan</p>
                  </div>
                  <div className="flex flex-[1_0_0] flex-col justify-center min-w-px relative" style={{ fontFeatureSettings: "'ss01', 'cv01'" }}>
                    <p className="leading-[16px]">Feb</p>
                  </div>
                  <div className="flex flex-[1_0_0] flex-col justify-center min-w-px relative" style={{ fontFeatureSettings: "'ss01', 'cv01'" }}>
                    <p className="leading-[16px]">Mar</p>
                  </div>
                  <div className="flex flex-[1_0_0] flex-col justify-center min-w-px relative" style={{ fontFeatureSettings: "'ss01', 'cv01'" }}>
                    <p className="leading-[16px]">Apr</p>
                  </div>
                  <div className="flex flex-[1_0_0] flex-col justify-center min-w-px relative" style={{ fontFeatureSettings: "'ss01', 'cv01'" }}>
                    <p className="leading-[16px]">May</p>
                  </div>
                  <div className="flex flex-[1_0_0] flex-col justify-center min-w-px relative" style={{ fontFeatureSettings: "'ss01', 'cv01'" }}>
                    <p className="leading-[16px]">Jun</p>
                  </div>
                  <div className="flex flex-[1_0_0] flex-col justify-center min-w-px relative" style={{ fontFeatureSettings: "'ss01', 'cv01'" }}>
                    <p className="leading-[16px]">Jul</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#f9f9fa] flex-[1_0_0] h-[330px] max-w-[272px] min-w-[200px] relative rounded-[20px]" data-name="Block">
        <div className="max-w-[inherit] min-w-[inherit] overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex flex-col gap-[16px] items-start max-w-[inherit] min-w-[inherit] p-[24px] relative size-full">
            <div className="content-stretch flex flex-col items-start justify-center relative rounded-[12px] shrink-0 w-full" data-name="Text">
              <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[14px] text-black w-full" style={{ fontFeatureSettings: "'ss01', 'cv01'" }}>
                Traffic by Website
              </p>
            </div>
            <div className="content-stretch flex flex-[1_0_0] gap-[16px] items-start min-h-px relative w-full" data-name="Frame">
              <div className="h-full relative rounded-[12px] shrink-0 w-[57px]" data-name="Text">
                <div className="[word-break:break-word] content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal items-start justify-between leading-[16px] not-italic py-[8px] relative size-full text-[12px] text-black">
                  <p className="relative shrink-0 w-full" style={{ fontFeatureSettings: "'ss01', 'cv01'" }}>
                    Google
                  </p>
                  <p className="relative shrink-0 w-full" style={{ fontFeatureSettings: "'ss01', 'cv01'" }}>
                    YouTube
                  </p>
                  <p className="relative shrink-0 w-full" style={{ fontFeatureSettings: "'ss01', 'cv01'" }}>
                    Instagram
                  </p>
                  <p className="relative shrink-0 w-full" style={{ fontFeatureSettings: "'ss01', 'cv01'" }}>
                    Pinterest
                  </p>
                  <p className="relative shrink-0 w-full" style={{ fontFeatureSettings: "'ss01', 'cv01'" }}>
                    Facebook
                  </p>
                  <p className="relative shrink-0 w-full" style={{ fontFeatureSettings: "'ss01', 'cv01'" }}>
                    Twitter
                  </p>
                </div>
              </div>
              <div className="content-stretch flex flex-col gap-[8px] h-full items-start relative shrink-0 w-[80px]" data-name="Horizontal 03">
                <div className="flex-[1_0_0] min-h-px relative w-full" data-name="HorizontalBar 03">
                  <div className="flex flex-row items-center size-full">
                    <div className="content-stretch flex gap-[2px] items-center py-[16px] relative size-full">
                      <div className="bg-black flex-[1_0_0] h-full max-h-[8px] min-w-px relative rounded-[80px]" data-name="Rectangle" />
                      <div className="bg-[rgba(0,0,0,0.4)] flex-[1_0_0] h-full max-h-[8px] min-w-px relative rounded-[80px]" data-name="Rectangle" />
                      <div className="bg-[rgba(0,0,0,0.1)] flex-[1_0_0] h-full max-h-[8px] min-w-px relative rounded-[80px]" data-name="Rectangle" />
                      <div className="bg-black flex-[1_0_0] h-full max-h-[8px] min-w-px opacity-0 relative rounded-[80px]" data-name="Rectangle" />
                      <div className="bg-black flex-[1_0_0] h-full max-h-[8px] min-w-px opacity-0 relative rounded-[80px]" data-name="Rectangle" />
                      <div className="bg-black flex-[1_0_0] h-full max-h-[8px] min-w-px opacity-0 relative rounded-[80px]" data-name="Rectangle" />
                      <div className="bg-black flex-[1_0_0] h-full max-h-[8px] min-w-px opacity-0 relative rounded-[80px]" data-name="Rectangle" />
                    </div>
                  </div>
                </div>
                <div className="flex-[1_0_0] min-h-px relative w-full" data-name="HorizontalBar 03">
                  <div className="flex flex-row items-center size-full">
                    <div className="content-stretch flex gap-[2px] items-center py-[16px] relative size-full">
                      <div className="bg-black flex-[1_0_0] h-full max-h-[8px] min-w-px relative rounded-[80px]" data-name="Rectangle" />
                      <div className="bg-[rgba(0,0,0,0.4)] flex-[1_0_0] h-full max-h-[8px] min-w-px relative rounded-[80px]" data-name="Rectangle" />
                      <div className="bg-[rgba(0,0,0,0.1)] flex-[1_0_0] h-full max-h-[8px] min-w-px relative rounded-[80px]" data-name="Rectangle" />
                      <div className="bg-black flex-[1_0_0] h-full max-h-[8px] min-w-px opacity-0 relative rounded-[80px]" data-name="Rectangle" />
                    </div>
                  </div>
                </div>
                <div className="flex-[1_0_0] min-h-px relative w-full" data-name="HorizontalBar 03">
                  <div className="flex flex-row items-center size-full">
                    <div className="content-stretch flex gap-[2px] items-center py-[16px] relative size-full">
                      <div className="bg-black flex-[1_0_0] h-full max-h-[8px] min-w-px relative rounded-[80px]" data-name="Rectangle" />
                      <div className="bg-[rgba(0,0,0,0.4)] flex-[1_0_0] h-full max-h-[8px] min-w-px relative rounded-[80px]" data-name="Rectangle" />
                      <div className="bg-[rgba(0,0,0,0.1)] flex-[1_0_0] h-full max-h-[8px] min-w-px relative rounded-[80px]" data-name="Rectangle" />
                      <div className="bg-black flex-[1_0_0] h-full max-h-[8px] min-w-px opacity-0 relative rounded-[80px]" data-name="Rectangle" />
                      <div className="bg-black flex-[1_0_0] h-full max-h-[8px] min-w-px opacity-0 relative rounded-[80px]" data-name="Rectangle" />
                      <div className="bg-black flex-[1_0_0] h-full max-h-[8px] min-w-px opacity-0 relative rounded-[80px]" data-name="Rectangle" />
                    </div>
                  </div>
                </div>
                <div className="flex-[1_0_0] min-h-px relative w-full" data-name="HorizontalBar 03">
                  <div className="flex flex-row items-center size-full">
                    <div className="content-stretch flex gap-[2px] items-center py-[16px] relative size-full">
                      <div className="bg-black flex-[1_0_0] h-full max-h-[8px] min-w-px relative rounded-[80px]" data-name="Rectangle" />
                      <div className="bg-[rgba(0,0,0,0.4)] flex-[1_0_0] h-full max-h-[8px] min-w-px relative rounded-[80px]" data-name="Rectangle" />
                      <div className="bg-[rgba(0,0,0,0.1)] flex-[1_0_0] h-full max-h-[8px] min-w-px relative rounded-[80px]" data-name="Rectangle" />
                    </div>
                  </div>
                </div>
                <div className="flex-[1_0_0] min-h-px relative w-full" data-name="HorizontalBar 03">
                  <div className="flex flex-row items-center size-full">
                    <div className="content-stretch flex gap-[2px] items-center py-[16px] relative size-full">
                      <div className="bg-black flex-[1_0_0] h-full max-h-[8px] min-w-px relative rounded-[80px]" data-name="Rectangle" />
                      <div className="bg-[rgba(0,0,0,0.4)] flex-[1_0_0] h-full max-h-[8px] min-w-px relative rounded-[80px]" data-name="Rectangle" />
                      <div className="bg-[rgba(0,0,0,0.1)] flex-[1_0_0] h-full max-h-[8px] min-w-px relative rounded-[80px]" data-name="Rectangle" />
                      <div className="bg-black flex-[1_0_0] h-full max-h-[8px] min-w-px opacity-0 relative rounded-[80px]" data-name="Rectangle" />
                      <div className="bg-black flex-[1_0_0] h-full max-h-[8px] min-w-px opacity-0 relative rounded-[80px]" data-name="Rectangle" />
                      <div className="bg-black flex-[1_0_0] h-full max-h-[8px] min-w-px opacity-0 relative rounded-[80px]" data-name="Rectangle" />
                      <div className="bg-black flex-[1_0_0] h-full max-h-[8px] min-w-px opacity-0 relative rounded-[80px]" data-name="Rectangle" />
                      <div className="bg-black flex-[1_0_0] h-full max-h-[8px] min-w-px opacity-0 relative rounded-[80px]" data-name="Rectangle" />
                    </div>
                  </div>
                </div>
                <div className="flex-[1_0_0] min-h-px relative w-full" data-name="HorizontalBar 03">
                  <div className="flex flex-row items-center size-full">
                    <div className="content-stretch flex gap-[2px] items-center py-[16px] relative size-full">
                      <div className="bg-black flex-[1_0_0] h-full max-h-[8px] min-w-px relative rounded-[80px]" data-name="Rectangle" />
                      <div className="bg-[rgba(0,0,0,0.4)] flex-[1_0_0] h-full max-h-[8px] min-w-px relative rounded-[80px]" data-name="Rectangle" />
                      <div className="bg-[rgba(0,0,0,0.1)] flex-[1_0_0] h-full max-h-[8px] min-w-px relative rounded-[80px]" data-name="Rectangle" />
                      <div className="bg-black flex-[1_0_0] h-full max-h-[8px] min-w-px opacity-0 relative rounded-[80px]" data-name="Rectangle" />
                      <div className="bg-black flex-[1_0_0] h-full max-h-[8px] min-w-px opacity-0 relative rounded-[80px]" data-name="Rectangle" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#f9f9fa] flex-[1_0_0] h-[280px] min-w-[400px] relative rounded-[20px]" data-name="Block">
        <div className="min-w-[inherit] overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex flex-col gap-[16px] items-start min-w-[inherit] p-[24px] relative size-full">
            <div className="content-stretch flex flex-col items-start justify-center relative rounded-[12px] shrink-0 w-full" data-name="Text">
              <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[14px] text-black w-full" style={{ fontFeatureSettings: "'ss01', 'cv01'" }}>
                Traffic by Device
              </p>
            </div>
            <div className="content-stretch flex flex-[1_0_0] gap-[16px] items-start min-h-px relative w-full" data-name="ChartMotion">
              <div className="[word-break:break-word] content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal h-full items-end justify-between leading-[0] not-italic relative shrink-0 text-[12px] text-[rgba(0,0,0,0.4)] text-right w-[29px]" data-name="Left Text">
                <div className="flex flex-[1_0_0] flex-col justify-center min-h-px relative w-full" style={{ fontFeatureSettings: "'ss01', 'cv01'" }}>
                  <p className="leading-[16px]">30K</p>
                </div>
                <div className="flex flex-[1_0_0] flex-col justify-center min-h-px relative w-full" style={{ fontFeatureSettings: "'ss01', 'cv01'" }}>
                  <p className="leading-[16px]">20K</p>
                </div>
                <div className="flex flex-[1_0_0] flex-col justify-center min-h-px relative w-full" style={{ fontFeatureSettings: "'ss01', 'cv01'" }}>
                  <p className="leading-[16px]">10K</p>
                </div>
                <div className="flex flex-[1_0_0] flex-col justify-center min-h-px relative w-full" style={{ fontFeatureSettings: "'ss01', 'cv01'" }}>
                  <p className="leading-[16px]">0</p>
                </div>
              </div>
              <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start min-w-px relative" data-name="Frame">
                <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Horizontal Line">
                  <div className="flex flex-col justify-center size-full">
                    <div className="relative size-full" />
                  </div>
                </div>
                <div className="absolute content-stretch flex inset-0 items-end justify-between pb-[28px]" data-name="Number=6">
                  <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-center justify-end min-w-px relative" data-name="1">
                    <div className="bg-[#a0bce8] flex-[1_0_0] max-w-[28px] min-h-px opacity-0 relative rounded-tl-[8px] rounded-tr-[8px] w-full" data-name="Rectangle" />
                    <div className="bg-[#a0bce8] flex-[1_0_0] max-w-[28px] min-h-px opacity-0 relative w-full" data-name="Rectangle" />
                    <div className="bg-[#a0bce8] flex-[1_0_0] max-w-[28px] min-h-px opacity-0 relative w-full" data-name="Rectangle" />
                    <div className="bg-[#a0bce8] flex-[1_0_0] max-w-[28px] min-h-px opacity-0 relative w-full" data-name="Rectangle" />
                    <div className="bg-[#a0bce8] flex-[1_0_0] max-w-[28px] min-h-px relative rounded-tl-[8px] rounded-tr-[8px] w-full" data-name="Rectangle" />
                    <div className="bg-[#a0bce8] flex-[1_0_0] max-w-[28px] min-h-px relative w-full" data-name="Rectangle" />
                    <div className="bg-[#a0bce8] flex-[1_0_0] max-w-[28px] min-h-px relative w-full" data-name="Rectangle" />
                    <div className="bg-[#a0bce8] flex-[1_0_0] max-w-[28px] min-h-px relative rounded-bl-[8px] rounded-br-[8px] w-full" data-name="Rectangle" />
                    <div className="-translate-x-1/2 absolute bg-[rgba(0,0,0,0.8)] content-stretch flex items-center left-[calc(50%+0.5px)] opacity-0 px-[8px] py-[4px] rounded-[8px] top-[52px]" data-name="Tooltip">
                      <div className="content-stretch flex flex-col items-start justify-center relative rounded-[8px] shrink-0 w-[60px]" data-name="Text">
                        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[12px] text-white w-full" style={{ fontFeatureSettings: "'ss01', 'cv01'" }}>
                          2,000
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-center justify-end min-w-px relative" data-name="2">
                    <div className="bg-[#6be6d3] flex-[1_0_0] max-w-[28px] min-h-px opacity-0 relative rounded-tl-[8px] rounded-tr-[8px] w-full" data-name="Rectangle" />
                    <div className="bg-[#6be6d3] flex-[1_0_0] max-w-[28px] min-h-px relative rounded-tl-[8px] rounded-tr-[8px] w-full" data-name="Rectangle" />
                    <div className="bg-[#6be6d3] flex-[1_0_0] max-w-[28px] min-h-px relative w-full" data-name="Rectangle" />
                    <div className="bg-[#6be6d3] flex-[1_0_0] max-w-[28px] min-h-px relative w-full" data-name="Rectangle" />
                    <div className="bg-[#6be6d3] flex-[1_0_0] max-w-[28px] min-h-px relative w-full" data-name="Rectangle" />
                    <div className="bg-[#6be6d3] flex-[1_0_0] max-w-[28px] min-h-px relative w-full" data-name="Rectangle" />
                    <div className="bg-[#6be6d3] flex-[1_0_0] max-w-[28px] min-h-px relative w-full" data-name="Rectangle" />
                    <div className="bg-[#6be6d3] flex-[1_0_0] max-w-[28px] min-h-px relative rounded-bl-[8px] rounded-br-[8px] w-full" data-name="Rectangle" />
                    <div className="-translate-x-1/2 absolute bg-[rgba(0,0,0,0.8)] content-stretch flex items-center left-[calc(50%+0.5px)] opacity-0 px-[8px] py-[4px] rounded-[8px] top-[-8px]" data-name="Tooltip">
                      <div className="content-stretch flex flex-col items-start justify-center relative rounded-[8px] shrink-0 w-[60px]" data-name="Text">
                        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[12px] text-white w-full" style={{ fontFeatureSettings: "'ss01', 'cv01'" }}>
                          5,000
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-center justify-end min-w-px relative" data-name="3">
                    <div className="bg-black flex-[1_0_0] max-w-[28px] min-h-px opacity-0 relative rounded-tl-[8px] rounded-tr-[8px] w-full" data-name="Rectangle" />
                    <div className="bg-black flex-[1_0_0] max-w-[28px] min-h-px opacity-0 relative w-full" data-name="Rectangle" />
                    <div className="bg-black flex-[1_0_0] max-w-[28px] min-h-px opacity-0 relative w-full" data-name="Rectangle" />
                    <div className="bg-black flex-[1_0_0] max-w-[28px] min-h-px relative rounded-tl-[8px] rounded-tr-[8px] w-full" data-name="Rectangle" />
                    <div className="bg-black flex-[1_0_0] max-w-[28px] min-h-px relative w-full" data-name="Rectangle" />
                    <div className="bg-black flex-[1_0_0] max-w-[28px] min-h-px relative w-full" data-name="Rectangle" />
                    <div className="bg-black flex-[1_0_0] max-w-[28px] min-h-px relative w-full" data-name="Rectangle" />
                    <div className="bg-black flex-[1_0_0] max-w-[28px] min-h-px relative rounded-bl-[8px] rounded-br-[8px] w-full" data-name="Rectangle" />
                    <div className="-translate-x-1/2 absolute bg-[rgba(0,0,0,0.8)] content-stretch flex items-center left-[calc(50%+0.5px)] opacity-0 px-[8px] py-[4px] rounded-[8px] top-[32px]" data-name="Tooltip">
                      <div className="content-stretch flex flex-col items-start justify-center relative rounded-[8px] shrink-0 w-[60px]" data-name="Text">
                        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[12px] text-white w-full" style={{ fontFeatureSettings: "'ss01', 'cv01'" }}>
                          3,000
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex-[1_0_0] h-full min-w-px relative" data-name="4">
                    <div className="flex flex-col items-center justify-end size-full">
                      <div className="content-stretch flex flex-col items-center justify-end pt-[16px] relative size-full">
                        <div className="bg-[#7dbbff] flex-[1_0_0] max-w-[28px] min-h-px relative rounded-tl-[8px] rounded-tr-[8px] w-full" data-name="Rectangle" />
                        <div className="bg-[#7dbbff] flex-[1_0_0] max-w-[28px] min-h-px relative w-full" data-name="Rectangle" />
                        <div className="bg-[#7dbbff] flex-[1_0_0] max-w-[28px] min-h-px relative w-full" data-name="Rectangle" />
                        <div className="bg-[#7dbbff] flex-[1_0_0] max-w-[28px] min-h-px relative w-full" data-name="Rectangle" />
                        <div className="bg-[#7dbbff] flex-[1_0_0] max-w-[28px] min-h-px relative w-full" data-name="Rectangle" />
                        <div className="bg-[#7dbbff] flex-[1_0_0] max-w-[28px] min-h-px relative w-full" data-name="Rectangle" />
                        <div className="bg-[#7dbbff] flex-[1_0_0] max-w-[28px] min-h-px relative w-full" data-name="Rectangle" />
                        <div className="bg-[#7dbbff] flex-[1_0_0] max-w-[28px] min-h-px relative rounded-bl-[8px] rounded-br-[8px] w-full" data-name="Rectangle" />
                        <div className="-translate-x-1/2 absolute bg-[rgba(0,0,0,0.8)] content-stretch flex items-center left-[calc(50%+27px)] opacity-0 px-[8px] py-[4px] rounded-[8px] top-[-28px]" data-name="Tooltip">
                          <div className="content-stretch flex flex-col items-start justify-center relative rounded-[8px] shrink-0 w-[60px]" data-name="Text">
                            <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[12px] text-white w-full" style={{ fontFeatureSettings: "'ss01', 'cv01'" }}>
                              6,000
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-center justify-end min-w-px relative" data-name="5">
                    <div className="bg-[#b899eb] flex-[1_0_0] max-w-[28px] min-h-px opacity-0 relative rounded-tl-[8px] rounded-tr-[8px] w-full" data-name="Rectangle" />
                    <div className="bg-[#b899eb] flex-[1_0_0] max-w-[28px] min-h-px opacity-0 relative w-full" data-name="Rectangle" />
                    <div className="bg-[#b899eb] flex-[1_0_0] max-w-[28px] min-h-px opacity-0 relative w-full" data-name="Rectangle" />
                    <div className="bg-[#b899eb] flex-[1_0_0] max-w-[28px] min-h-px opacity-0 relative w-full" data-name="Rectangle" />
                    <div className="bg-[#b899eb] flex-[1_0_0] max-w-[28px] min-h-px opacity-0 relative w-full" data-name="Rectangle" />
                    <div className="bg-[#b899eb] flex-[1_0_0] max-w-[28px] min-h-px relative rounded-tl-[8px] rounded-tr-[8px] w-full" data-name="Rectangle" />
                    <div className="bg-[#b899eb] flex-[1_0_0] max-w-[28px] min-h-px relative w-full" data-name="Rectangle" />
                    <div className="bg-[#b899eb] flex-[1_0_0] max-w-[28px] min-h-px relative rounded-bl-[8px] rounded-br-[8px] w-full" data-name="Rectangle" />
                    <div className="-translate-x-1/2 absolute bg-[rgba(0,0,0,0.8)] content-stretch flex items-center left-[calc(50%+0.5px)] opacity-0 px-[8px] py-[4px] rounded-[8px] top-[72px]" data-name="Tooltip">
                      <div className="content-stretch flex flex-col items-start justify-center relative rounded-[8px] shrink-0 w-[60px]" data-name="Text">
                        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[12px] text-white w-full" style={{ fontFeatureSettings: "'ss01', 'cv01'" }}>
                          1,000
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-center justify-end min-w-px relative" data-name="6">
                    <div className="bg-[#71dd8c] flex-[1_0_0] max-w-[28px] min-h-px opacity-0 relative rounded-tl-[8px] rounded-tr-[8px] w-full" data-name="Rectangle" />
                    <div className="bg-[#71dd8c] flex-[1_0_0] max-w-[28px] min-h-px opacity-0 relative w-full" data-name="Rectangle" />
                    <div className="bg-[#71dd8c] flex-[1_0_0] max-w-[28px] min-h-px relative rounded-tl-[8px] rounded-tr-[8px] w-full" data-name="Rectangle" />
                    <div className="bg-[#71dd8c] flex-[1_0_0] max-w-[28px] min-h-px relative w-full" data-name="Rectangle" />
                    <div className="bg-[#71dd8c] flex-[1_0_0] max-w-[28px] min-h-px relative w-full" data-name="Rectangle" />
                    <div className="bg-[#71dd8c] flex-[1_0_0] max-w-[28px] min-h-px relative w-full" data-name="Rectangle" />
                    <div className="bg-[#71dd8c] flex-[1_0_0] max-w-[28px] min-h-px relative w-full" data-name="Rectangle" />
                    <div className="bg-[#71dd8c] flex-[1_0_0] max-w-[28px] min-h-px relative rounded-bl-[8px] rounded-br-[8px] w-full" data-name="Rectangle" />
                    <div className="-translate-x-1/2 absolute bg-[rgba(0,0,0,0.8)] content-stretch flex items-center left-[calc(50%+0.5px)] opacity-0 px-[8px] py-[4px] rounded-[8px] top-[12px]" data-name="Tooltip">
                      <div className="content-stretch flex flex-col items-start justify-center relative rounded-[8px] shrink-0 w-[60px]" data-name="Text">
                        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[12px] text-white w-full" style={{ fontFeatureSettings: "'ss01', 'cv01'" }}>
                          4,000
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="[word-break:break-word] absolute bottom-0 content-stretch flex font-['Inter:Regular',sans-serif] font-normal items-center leading-[0] left-0 not-italic right-0 text-[12px] text-[rgba(0,0,0,0.4)] text-center" data-name="Bottom Text">
                  <div className="flex flex-[1_0_0] flex-col justify-center min-w-px relative" style={{ fontFeatureSettings: "'ss01', 'cv01'" }}>
                    <p className="leading-[16px]">Linux</p>
                  </div>
                  <div className="flex flex-[1_0_0] flex-col justify-center min-w-px relative" style={{ fontFeatureSettings: "'ss01', 'cv01'" }}>
                    <p className="leading-[16px]">Mac</p>
                  </div>
                  <div className="flex flex-[1_0_0] flex-col justify-center min-w-px relative" style={{ fontFeatureSettings: "'ss01', 'cv01'" }}>
                    <p className="leading-[16px]">iOS</p>
                  </div>
                  <div className="flex flex-[1_0_0] flex-col justify-center min-w-px relative" style={{ fontFeatureSettings: "'ss01', 'cv01'" }}>
                    <p className="leading-[16px]">Windows</p>
                  </div>
                  <div className="flex flex-[1_0_0] flex-col justify-center min-w-px relative" style={{ fontFeatureSettings: "'ss01', 'cv01'" }}>
                    <p className="leading-[16px]">Android</p>
                  </div>
                  <div className="flex flex-[1_0_0] flex-col justify-center min-w-px relative" style={{ fontFeatureSettings: "'ss01', 'cv01'" }}>
                    <p className="leading-[16px]">Other</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#f9f9fa] flex-[1_0_0] h-[280px] min-w-[400px] relative rounded-[20px]" data-name="Block">
        <div className="min-w-[inherit] overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex flex-col gap-[16px] items-start min-w-[inherit] p-[24px] relative size-full">
            <div className="content-stretch flex flex-col items-start justify-center relative rounded-[12px] shrink-0 w-full" data-name="Text">
              <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[14px] text-black w-full" style={{ fontFeatureSettings: "'ss01', 'cv01'" }}>
                Traffic by Location
              </p>
            </div>
            <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Frame">
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex gap-[40px] items-center px-[20px] relative size-full">
                  <DonutChart className="relative shrink-0 size-[120px]" dataCount="4" />
                  <div className="content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-start min-w-px relative rounded-[16px]" data-name="Card">
                    <div className="content-center flex flex-wrap gap-y-[48px] items-center justify-between relative rounded-[12px] shrink-0 w-full" data-name="Frame">
                      <div className="content-stretch flex items-center pl-[4px] pr-[8px] py-[2px] relative rounded-[8px] shrink-0" data-name="Tag">
                        <div className="relative shrink-0 size-[12px]" data-name="Dot2">
                          <div className="absolute inset-[31.25%]" data-name="Vector">
                            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.5 4.5">
                              <path d={svgPaths.p1cdea100} fill="var(--fill-0, black)" id="Vector" />
                            </svg>
                          </div>
                        </div>
                        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap" style={{ fontFeatureSettings: "'ss01', 'cv01'" }}>
                          United States
                        </p>
                      </div>
                      <div className="content-stretch flex flex-col items-start justify-center relative rounded-[12px] shrink-0 w-[29px]" data-name="Text">
                        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[12px] text-black w-full" style={{ fontFeatureSettings: "'ss01', 'cv01'" }}>
                          52.1%
                        </p>
                      </div>
                    </div>
                    <div className="content-center flex flex-wrap gap-y-[48px] items-center justify-between relative rounded-[12px] shrink-0 w-full" data-name="Frame">
                      <div className="content-stretch flex items-center pl-[4px] pr-[8px] py-[2px] relative rounded-[8px] shrink-0" data-name="Tag">
                        <div className="relative shrink-0 size-[12px]" data-name="Dot2">
                          <div className="absolute inset-[31.25%]" data-name="Vector">
                            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.5 4.5">
                              <path d={svgPaths.p1cdea100} fill="var(--fill-0, black)" id="Vector" />
                            </svg>
                          </div>
                        </div>
                        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap" style={{ fontFeatureSettings: "'ss01', 'cv01'" }}>
                          Canada
                        </p>
                      </div>
                      <div className="content-stretch flex flex-col items-start justify-center relative rounded-[12px] shrink-0 w-[29px]" data-name="Text">
                        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[12px] text-black w-full" style={{ fontFeatureSettings: "'ss01', 'cv01'" }}>
                          22.8%
                        </p>
                      </div>
                    </div>
                    <div className="content-center flex flex-wrap gap-y-[48px] items-center justify-between relative rounded-[12px] shrink-0 w-full" data-name="Frame">
                      <div className="content-stretch flex items-center pl-[4px] pr-[8px] py-[2px] relative rounded-[8px] shrink-0" data-name="Tag">
                        <div className="relative shrink-0 size-[12px]" data-name="Dot2">
                          <div className="absolute inset-[31.25%]" data-name="Vector">
                            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.5 4.5">
                              <path d={svgPaths.p1cdea100} fill="var(--fill-0, black)" id="Vector" />
                            </svg>
                          </div>
                        </div>
                        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap" style={{ fontFeatureSettings: "'ss01', 'cv01'" }}>
                          Mexico
                        </p>
                      </div>
                      <div className="content-stretch flex flex-col items-start justify-center relative rounded-[12px] shrink-0 w-[29px]" data-name="Text">
                        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[12px] text-black w-full" style={{ fontFeatureSettings: "'ss01', 'cv01'" }}>
                          13.9%
                        </p>
                      </div>
                    </div>
                    <div className="content-center flex flex-wrap gap-y-[48px] items-center justify-between relative rounded-[12px] shrink-0 w-full" data-name="Frame">
                      <div className="content-stretch flex items-center pl-[4px] pr-[8px] py-[2px] relative rounded-[8px] shrink-0" data-name="Tag">
                        <div className="relative shrink-0 size-[12px]" data-name="Dot2">
                          <div className="absolute inset-[31.25%]" data-name="Vector">
                            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.5 4.5">
                              <path d={svgPaths.p1cdea100} fill="var(--fill-0, black)" id="Vector" />
                            </svg>
                          </div>
                        </div>
                        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap" style={{ fontFeatureSettings: "'ss01', 'cv01'" }}>
                          Other
                        </p>
                      </div>
                      <div className="content-stretch flex flex-col items-start justify-center relative rounded-[12px] shrink-0 w-[29px]" data-name="Text">
                        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[12px] text-black w-full" style={{ fontFeatureSettings: "'ss01', 'cv01'" }}>
                          11.2%
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#f9f9fa] flex-[1_0_0] h-[280px] min-w-[800px] relative rounded-[20px]" data-name="Block">
        <div className="min-w-[inherit] overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex flex-col gap-[16px] items-start min-w-[inherit] p-[24px] relative size-full">
            <div className="content-stretch flex flex-col items-start justify-center relative rounded-[12px] shrink-0 w-full" data-name="Text">
              <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[14px] text-black w-full" style={{ fontFeatureSettings: "'ss01', 'cv01'" }}>{`Marketing & SEO`}</p>
            </div>
            <div className="content-stretch flex flex-[1_0_0] gap-[16px] items-start min-h-px relative w-full" data-name="ChartMotion">
              <div className="[word-break:break-word] content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal h-full items-end justify-between leading-[0] not-italic relative shrink-0 text-[12px] text-[rgba(0,0,0,0.4)] text-right w-[29px]" data-name="Left Text">
                <div className="flex flex-[1_0_0] flex-col justify-center min-h-px relative w-full" style={{ fontFeatureSettings: "'ss01', 'cv01'" }}>
                  <p className="leading-[16px]">30K</p>
                </div>
                <div className="flex flex-[1_0_0] flex-col justify-center min-h-px relative w-full" style={{ fontFeatureSettings: "'ss01', 'cv01'" }}>
                  <p className="leading-[16px]">20K</p>
                </div>
                <div className="flex flex-[1_0_0] flex-col justify-center min-h-px relative w-full" style={{ fontFeatureSettings: "'ss01', 'cv01'" }}>
                  <p className="leading-[16px]">10K</p>
                </div>
                <div className="flex flex-[1_0_0] flex-col justify-center min-h-px relative w-full" style={{ fontFeatureSettings: "'ss01', 'cv01'" }}>
                  <p className="leading-[16px]">0</p>
                </div>
              </div>
              <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start min-w-px relative" data-name="Frame">
                <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Horizontal Line">
                  <div className="flex flex-col justify-center size-full">
                    <div className="relative size-full" />
                  </div>
                </div>
                <div className="absolute content-stretch flex inset-0 items-end justify-between pb-[28px]" data-name="Number=12">
                  <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-center justify-end min-w-px relative" data-name="1">
                    <div className="bg-[#9f9ff8] flex-[1_0_0] max-w-[28px] min-h-px opacity-0 relative rounded-tl-[8px] rounded-tr-[8px] w-full" data-name="Rectangle" />
                    <div className="bg-[#9f9ff8] flex-[1_0_0] max-w-[28px] min-h-px opacity-0 relative w-full" data-name="Rectangle" />
                    <div className="bg-[#9f9ff8] flex-[1_0_0] max-w-[28px] min-h-px opacity-0 relative w-full" data-name="Rectangle" />
                    <div className="bg-[#9f9ff8] flex-[1_0_0] max-w-[28px] min-h-px opacity-0 relative w-full" data-name="Rectangle" />
                    <div className="bg-[#9f9ff8] flex-[1_0_0] max-w-[28px] min-h-px relative rounded-tl-[8px] rounded-tr-[8px] w-full" data-name="Rectangle" />
                    <div className="bg-[#9f9ff8] flex-[1_0_0] max-w-[28px] min-h-px relative w-full" data-name="Rectangle" />
                    <div className="bg-[#9f9ff8] flex-[1_0_0] max-w-[28px] min-h-px relative w-full" data-name="Rectangle" />
                    <div className="bg-[#9f9ff8] flex-[1_0_0] max-w-[28px] min-h-px relative rounded-bl-[8px] rounded-br-[8px] w-full" data-name="Rectangle" />
                    <div className="-translate-x-1/2 absolute bg-[rgba(0,0,0,0.8)] content-stretch flex items-center left-[calc(50%+0.5px)] opacity-0 px-[8px] py-[4px] rounded-[8px] top-[52px]" data-name="Tooltip">
                      <div className="content-stretch flex flex-col items-start justify-center relative rounded-[8px] shrink-0 w-[60px]" data-name="Text">
                        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[12px] text-white w-full" style={{ fontFeatureSettings: "'ss01', 'cv01'" }}>
                          2,000
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-center justify-end min-w-px relative" data-name="2">
                    <div className="bg-[#96e2d6] flex-[1_0_0] max-w-[28px] min-h-px opacity-0 relative rounded-tl-[8px] rounded-tr-[8px] w-full" data-name="Rectangle" />
                    <div className="bg-[#96e2d6] flex-[1_0_0] max-w-[28px] min-h-px relative rounded-tl-[8px] rounded-tr-[8px] w-full" data-name="Rectangle" />
                    <div className="bg-[#96e2d6] flex-[1_0_0] max-w-[28px] min-h-px relative w-full" data-name="Rectangle" />
                    <div className="bg-[#96e2d6] flex-[1_0_0] max-w-[28px] min-h-px relative w-full" data-name="Rectangle" />
                    <div className="bg-[#96e2d6] flex-[1_0_0] max-w-[28px] min-h-px relative w-full" data-name="Rectangle" />
                    <div className="bg-[#96e2d6] flex-[1_0_0] max-w-[28px] min-h-px relative w-full" data-name="Rectangle" />
                    <div className="bg-[#96e2d6] flex-[1_0_0] max-w-[28px] min-h-px relative w-full" data-name="Rectangle" />
                    <div className="bg-[#96e2d6] flex-[1_0_0] max-w-[28px] min-h-px relative rounded-bl-[8px] rounded-br-[8px] w-full" data-name="Rectangle" />
                    <div className="-translate-x-1/2 absolute bg-[rgba(0,0,0,0.8)] content-stretch flex items-center left-[calc(50%+0.5px)] opacity-0 px-[8px] py-[4px] rounded-[8px] top-[-8px]" data-name="Tooltip">
                      <div className="content-stretch flex flex-col items-start justify-center relative rounded-[8px] shrink-0 w-[60px]" data-name="Text">
                        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[12px] text-white w-full" style={{ fontFeatureSettings: "'ss01', 'cv01'" }}>
                          5,000
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-center justify-end min-w-px relative" data-name="3">
                    <div className="bg-black flex-[1_0_0] max-w-[28px] min-h-px opacity-0 relative rounded-tl-[8px] rounded-tr-[8px] w-full" data-name="Rectangle" />
                    <div className="bg-black flex-[1_0_0] max-w-[28px] min-h-px opacity-0 relative w-full" data-name="Rectangle" />
                    <div className="bg-black flex-[1_0_0] max-w-[28px] min-h-px opacity-0 relative w-full" data-name="Rectangle" />
                    <div className="bg-black flex-[1_0_0] max-w-[28px] min-h-px relative rounded-tl-[8px] rounded-tr-[8px] w-full" data-name="Rectangle" />
                    <div className="bg-black flex-[1_0_0] max-w-[28px] min-h-px relative w-full" data-name="Rectangle" />
                    <div className="bg-black flex-[1_0_0] max-w-[28px] min-h-px relative w-full" data-name="Rectangle" />
                    <div className="bg-black flex-[1_0_0] max-w-[28px] min-h-px relative w-full" data-name="Rectangle" />
                    <div className="bg-black flex-[1_0_0] max-w-[28px] min-h-px relative rounded-bl-[8px] rounded-br-[8px] w-full" data-name="Rectangle" />
                    <div className="-translate-x-1/2 absolute bg-[rgba(0,0,0,0.8)] content-stretch flex items-center left-[calc(50%+0.5px)] opacity-0 px-[8px] py-[4px] rounded-[8px] top-[32px]" data-name="Tooltip">
                      <div className="content-stretch flex flex-col items-start justify-center relative rounded-[8px] shrink-0 w-[60px]" data-name="Text">
                        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[12px] text-white w-full" style={{ fontFeatureSettings: "'ss01', 'cv01'" }}>
                          3,000
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex-[1_0_0] h-full min-w-px relative" data-name="4">
                    <div className="flex flex-col items-center justify-end size-full">
                      <div className="content-stretch flex flex-col items-center justify-end pt-[16px] relative size-full">
                        <div className="bg-[#92bfff] flex-[1_0_0] max-w-[28px] min-h-px relative rounded-tl-[8px] rounded-tr-[8px] w-full" data-name="Rectangle" />
                        <div className="bg-[#92bfff] flex-[1_0_0] max-w-[28px] min-h-px relative w-full" data-name="Rectangle" />
                        <div className="bg-[#92bfff] flex-[1_0_0] max-w-[28px] min-h-px relative w-full" data-name="Rectangle" />
                        <div className="bg-[#92bfff] flex-[1_0_0] max-w-[28px] min-h-px relative w-full" data-name="Rectangle" />
                        <div className="bg-[#92bfff] flex-[1_0_0] max-w-[28px] min-h-px relative w-full" data-name="Rectangle" />
                        <div className="bg-[#92bfff] flex-[1_0_0] max-w-[28px] min-h-px relative w-full" data-name="Rectangle" />
                        <div className="bg-[#92bfff] flex-[1_0_0] max-w-[28px] min-h-px relative w-full" data-name="Rectangle" />
                        <div className="bg-[#92bfff] flex-[1_0_0] max-w-[28px] min-h-px relative rounded-bl-[8px] rounded-br-[8px] w-full" data-name="Rectangle" />
                        <div className="-translate-x-1/2 absolute bg-[rgba(0,0,0,0.8)] content-stretch flex items-center left-[calc(50%+27px)] opacity-0 px-[8px] py-[4px] rounded-[8px] top-[-28px]" data-name="Tooltip">
                          <div className="content-stretch flex flex-col items-start justify-center relative rounded-[8px] shrink-0 w-[60px]" data-name="Text">
                            <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[12px] text-white w-full" style={{ fontFeatureSettings: "'ss01', 'cv01'" }}>
                              6,000
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-center justify-end min-w-px relative" data-name="5">
                    <div className="bg-[#aec7ed] flex-[1_0_0] max-w-[28px] min-h-px opacity-0 relative rounded-tl-[8px] rounded-tr-[8px] w-full" data-name="Rectangle" />
                    <div className="bg-[#aec7ed] flex-[1_0_0] max-w-[28px] min-h-px opacity-0 relative w-full" data-name="Rectangle" />
                    <div className="bg-[#aec7ed] flex-[1_0_0] max-w-[28px] min-h-px opacity-0 relative w-full" data-name="Rectangle" />
                    <div className="bg-[#aec7ed] flex-[1_0_0] max-w-[28px] min-h-px opacity-0 relative w-full" data-name="Rectangle" />
                    <div className="bg-[#aec7ed] flex-[1_0_0] max-w-[28px] min-h-px opacity-0 relative w-full" data-name="Rectangle" />
                    <div className="bg-[#aec7ed] flex-[1_0_0] max-w-[28px] min-h-px relative rounded-tl-[8px] rounded-tr-[8px] w-full" data-name="Rectangle" />
                    <div className="bg-[#aec7ed] flex-[1_0_0] max-w-[28px] min-h-px relative w-full" data-name="Rectangle" />
                    <div className="bg-[#aec7ed] flex-[1_0_0] max-w-[28px] min-h-px relative rounded-bl-[8px] rounded-br-[8px] w-full" data-name="Rectangle" />
                    <div className="-translate-x-1/2 absolute bg-[rgba(0,0,0,0.8)] content-stretch flex items-center left-[calc(50%+0.5px)] opacity-0 px-[8px] py-[4px] rounded-[8px] top-[72px]" data-name="Tooltip">
                      <div className="content-stretch flex flex-col items-start justify-center relative rounded-[8px] shrink-0 w-[60px]" data-name="Text">
                        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[12px] text-white w-full" style={{ fontFeatureSettings: "'ss01', 'cv01'" }}>
                          1,000
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-center justify-end min-w-px relative" data-name="6">
                    <div className="bg-[#94e9b8] flex-[1_0_0] max-w-[28px] min-h-px opacity-0 relative rounded-tl-[8px] rounded-tr-[8px] w-full" data-name="Rectangle" />
                    <div className="bg-[#94e9b8] flex-[1_0_0] max-w-[28px] min-h-px opacity-0 relative w-full" data-name="Rectangle" />
                    <div className="bg-[#94e9b8] flex-[1_0_0] max-w-[28px] min-h-px relative rounded-tl-[8px] rounded-tr-[8px] w-full" data-name="Rectangle" />
                    <div className="bg-[#94e9b8] flex-[1_0_0] max-w-[28px] min-h-px relative w-full" data-name="Rectangle" />
                    <div className="bg-[#94e9b8] flex-[1_0_0] max-w-[28px] min-h-px relative w-full" data-name="Rectangle" />
                    <div className="bg-[#94e9b8] flex-[1_0_0] max-w-[28px] min-h-px relative w-full" data-name="Rectangle" />
                    <div className="bg-[#94e9b8] flex-[1_0_0] max-w-[28px] min-h-px relative w-full" data-name="Rectangle" />
                    <div className="bg-[#94e9b8] flex-[1_0_0] max-w-[28px] min-h-px relative rounded-bl-[8px] rounded-br-[8px] w-full" data-name="Rectangle" />
                    <div className="-translate-x-1/2 absolute bg-[rgba(0,0,0,0.8)] content-stretch flex items-center left-[calc(50%+0.5px)] opacity-0 px-[8px] py-[4px] rounded-[8px] top-[12px]" data-name="Tooltip">
                      <div className="content-stretch flex flex-col items-start justify-center relative rounded-[8px] shrink-0 w-[60px]" data-name="Text">
                        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[12px] text-white w-full" style={{ fontFeatureSettings: "'ss01', 'cv01'" }}>
                          4,000
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-center justify-end min-w-px relative" data-name="7">
                    <div className="bg-[#9f9ff8] flex-[1_0_0] max-w-[28px] min-h-px opacity-0 relative rounded-tl-[8px] rounded-tr-[8px] w-full" data-name="Rectangle" />
                    <div className="bg-[#9f9ff8] flex-[1_0_0] max-w-[28px] min-h-px opacity-0 relative w-full" data-name="Rectangle" />
                    <div className="bg-[#9f9ff8] flex-[1_0_0] max-w-[28px] min-h-px opacity-0 relative w-full" data-name="Rectangle" />
                    <div className="bg-[#9f9ff8] flex-[1_0_0] max-w-[28px] min-h-px opacity-0 relative w-full" data-name="Rectangle" />
                    <div className="bg-[#9f9ff8] flex-[1_0_0] max-w-[28px] min-h-px relative rounded-tl-[8px] rounded-tr-[8px] w-full" data-name="Rectangle" />
                    <div className="bg-[#9f9ff8] flex-[1_0_0] max-w-[28px] min-h-px relative w-full" data-name="Rectangle" />
                    <div className="bg-[#9f9ff8] flex-[1_0_0] max-w-[28px] min-h-px relative w-full" data-name="Rectangle" />
                    <div className="bg-[#9f9ff8] flex-[1_0_0] max-w-[28px] min-h-px relative rounded-bl-[8px] rounded-br-[8px] w-full" data-name="Rectangle" />
                    <div className="-translate-x-1/2 absolute bg-[rgba(0,0,0,0.8)] content-stretch flex items-center left-[calc(50%+0.5px)] opacity-0 px-[8px] py-[4px] rounded-[8px] top-[52px]" data-name="Tooltip">
                      <div className="content-stretch flex flex-col items-start justify-center relative rounded-[8px] shrink-0 w-[60px]" data-name="Text">
                        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[12px] text-white w-full" style={{ fontFeatureSettings: "'ss01', 'cv01'" }}>
                          2,000
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-center justify-end min-w-px relative" data-name="8">
                    <div className="bg-[#96e2d6] flex-[1_0_0] max-w-[28px] min-h-px opacity-0 relative rounded-tl-[8px] rounded-tr-[8px] w-full" data-name="Rectangle" />
                    <div className="bg-[#96e2d6] flex-[1_0_0] max-w-[28px] min-h-px relative rounded-tl-[8px] rounded-tr-[8px] w-full" data-name="Rectangle" />
                    <div className="bg-[#96e2d6] flex-[1_0_0] max-w-[28px] min-h-px relative w-full" data-name="Rectangle" />
                    <div className="bg-[#96e2d6] flex-[1_0_0] max-w-[28px] min-h-px relative w-full" data-name="Rectangle" />
                    <div className="bg-[#96e2d6] flex-[1_0_0] max-w-[28px] min-h-px relative w-full" data-name="Rectangle" />
                    <div className="bg-[#96e2d6] flex-[1_0_0] max-w-[28px] min-h-px relative w-full" data-name="Rectangle" />
                    <div className="bg-[#96e2d6] flex-[1_0_0] max-w-[28px] min-h-px relative w-full" data-name="Rectangle" />
                    <div className="bg-[#96e2d6] flex-[1_0_0] max-w-[28px] min-h-px relative rounded-bl-[8px] rounded-br-[8px] w-full" data-name="Rectangle" />
                    <div className="-translate-x-1/2 absolute bg-[rgba(0,0,0,0.8)] content-stretch flex items-center left-[calc(50%+0.5px)] opacity-0 px-[8px] py-[4px] rounded-[8px] top-[-8px]" data-name="Tooltip">
                      <div className="content-stretch flex flex-col items-start justify-center relative rounded-[8px] shrink-0 w-[60px]" data-name="Text">
                        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[12px] text-white w-full" style={{ fontFeatureSettings: "'ss01', 'cv01'" }}>
                          5,000
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-center justify-end min-w-px relative" data-name="9">
                    <div className="bg-black flex-[1_0_0] max-w-[28px] min-h-px opacity-0 relative rounded-tl-[8px] rounded-tr-[8px] w-full" data-name="Rectangle" />
                    <div className="bg-black flex-[1_0_0] max-w-[28px] min-h-px opacity-0 relative w-full" data-name="Rectangle" />
                    <div className="bg-black flex-[1_0_0] max-w-[28px] min-h-px opacity-0 relative w-full" data-name="Rectangle" />
                    <div className="bg-black flex-[1_0_0] max-w-[28px] min-h-px relative rounded-tl-[8px] rounded-tr-[8px] w-full" data-name="Rectangle" />
                    <div className="bg-black flex-[1_0_0] max-w-[28px] min-h-px relative w-full" data-name="Rectangle" />
                    <div className="bg-black flex-[1_0_0] max-w-[28px] min-h-px relative w-full" data-name="Rectangle" />
                    <div className="bg-black flex-[1_0_0] max-w-[28px] min-h-px relative w-full" data-name="Rectangle" />
                    <div className="bg-black flex-[1_0_0] max-w-[28px] min-h-px relative rounded-bl-[8px] rounded-br-[8px] w-full" data-name="Rectangle" />
                    <div className="-translate-x-1/2 absolute bg-[rgba(0,0,0,0.8)] content-stretch flex items-center left-[calc(50%+0.5px)] opacity-0 px-[8px] py-[4px] rounded-[8px] top-[32px]" data-name="Tooltip">
                      <div className="content-stretch flex flex-col items-start justify-center relative rounded-[8px] shrink-0 w-[60px]" data-name="Text">
                        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[12px] text-white w-full" style={{ fontFeatureSettings: "'ss01', 'cv01'" }}>
                          3,000
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-center justify-end min-w-px relative" data-name="10">
                    <div className="bg-[#92bfff] flex-[1_0_0] max-w-[28px] min-h-px relative rounded-tl-[8px] rounded-tr-[8px] w-full" data-name="Rectangle" />
                    <div className="bg-[#92bfff] flex-[1_0_0] max-w-[28px] min-h-px relative w-full" data-name="Rectangle" />
                    <div className="bg-[#92bfff] flex-[1_0_0] max-w-[28px] min-h-px relative w-full" data-name="Rectangle" />
                    <div className="bg-[#92bfff] flex-[1_0_0] max-w-[28px] min-h-px relative w-full" data-name="Rectangle" />
                    <div className="bg-[#92bfff] flex-[1_0_0] max-w-[28px] min-h-px relative w-full" data-name="Rectangle" />
                    <div className="bg-[#92bfff] flex-[1_0_0] max-w-[28px] min-h-px relative w-full" data-name="Rectangle" />
                    <div className="bg-[#92bfff] flex-[1_0_0] max-w-[28px] min-h-px relative w-full" data-name="Rectangle" />
                    <div className="bg-[#92bfff] flex-[1_0_0] max-w-[28px] min-h-px relative rounded-bl-[8px] rounded-br-[8px] w-full" data-name="Rectangle" />
                    <div className="-translate-x-1/2 absolute bg-[rgba(0,0,0,0.8)] content-stretch flex items-center left-[calc(50%+27px)] opacity-0 px-[8px] py-[4px] rounded-[8px] top-[-28px]" data-name="Tooltip">
                      <div className="content-stretch flex flex-col items-start justify-center relative rounded-[8px] shrink-0 w-[60px]" data-name="Text">
                        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[12px] text-white w-full" style={{ fontFeatureSettings: "'ss01', 'cv01'" }}>
                          6,000
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-center justify-end min-w-px relative" data-name="11">
                    <div className="bg-[#aec7ed] flex-[1_0_0] max-w-[28px] min-h-px opacity-0 relative rounded-tl-[8px] rounded-tr-[8px] w-full" data-name="Rectangle" />
                    <div className="bg-[#aec7ed] flex-[1_0_0] max-w-[28px] min-h-px opacity-0 relative w-full" data-name="Rectangle" />
                    <div className="bg-[#aec7ed] flex-[1_0_0] max-w-[28px] min-h-px opacity-0 relative w-full" data-name="Rectangle" />
                    <div className="bg-[#aec7ed] flex-[1_0_0] max-w-[28px] min-h-px opacity-0 relative w-full" data-name="Rectangle" />
                    <div className="bg-[#aec7ed] flex-[1_0_0] max-w-[28px] min-h-px opacity-0 relative w-full" data-name="Rectangle" />
                    <div className="bg-[#aec7ed] flex-[1_0_0] max-w-[28px] min-h-px relative rounded-tl-[8px] rounded-tr-[8px] w-full" data-name="Rectangle" />
                    <div className="bg-[#aec7ed] flex-[1_0_0] max-w-[28px] min-h-px relative w-full" data-name="Rectangle" />
                    <div className="bg-[#aec7ed] flex-[1_0_0] max-w-[28px] min-h-px relative rounded-bl-[8px] rounded-br-[8px] w-full" data-name="Rectangle" />
                    <div className="-translate-x-1/2 absolute bg-[rgba(0,0,0,0.8)] content-stretch flex items-center left-[calc(50%+0.5px)] opacity-0 px-[8px] py-[4px] rounded-[8px] top-[72px]" data-name="Tooltip">
                      <div className="content-stretch flex flex-col items-start justify-center relative rounded-[8px] shrink-0 w-[60px]" data-name="Text">
                        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[12px] text-white w-full" style={{ fontFeatureSettings: "'ss01', 'cv01'" }}>
                          1,000
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-center justify-end min-w-px relative" data-name="12">
                    <div className="bg-[#94e9b8] flex-[1_0_0] max-w-[28px] min-h-px opacity-0 relative rounded-tl-[8px] rounded-tr-[8px] w-full" data-name="Rectangle" />
                    <div className="bg-[#94e9b8] flex-[1_0_0] max-w-[28px] min-h-px opacity-0 relative w-full" data-name="Rectangle" />
                    <div className="bg-[#94e9b8] flex-[1_0_0] max-w-[28px] min-h-px relative rounded-tl-[8px] rounded-tr-[8px] w-full" data-name="Rectangle" />
                    <div className="bg-[#94e9b8] flex-[1_0_0] max-w-[28px] min-h-px relative w-full" data-name="Rectangle" />
                    <div className="bg-[#94e9b8] flex-[1_0_0] max-w-[28px] min-h-px relative w-full" data-name="Rectangle" />
                    <div className="bg-[#94e9b8] flex-[1_0_0] max-w-[28px] min-h-px relative w-full" data-name="Rectangle" />
                    <div className="bg-[#94e9b8] flex-[1_0_0] max-w-[28px] min-h-px relative w-full" data-name="Rectangle" />
                    <div className="bg-[#94e9b8] flex-[1_0_0] max-w-[28px] min-h-px relative rounded-bl-[8px] rounded-br-[8px] w-full" data-name="Rectangle" />
                    <div className="-translate-x-1/2 absolute bg-[rgba(0,0,0,0.8)] content-stretch flex items-center left-[calc(50%+0.5px)] opacity-0 px-[8px] py-[4px] rounded-[8px] top-[12px]" data-name="Tooltip">
                      <div className="content-stretch flex flex-col items-start justify-center relative rounded-[8px] shrink-0 w-[60px]" data-name="Text">
                        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[12px] text-white w-full" style={{ fontFeatureSettings: "'ss01', 'cv01'" }}>
                          4,000
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="[word-break:break-word] absolute bottom-0 content-stretch flex font-['Inter:Regular',sans-serif] font-normal items-center leading-[0] left-0 not-italic right-0 text-[12px] text-[rgba(0,0,0,0.4)] text-center" data-name="Bottom Text">
                  <div className="flex flex-[1_0_0] flex-col justify-center min-w-px relative" style={{ fontFeatureSettings: "'ss01', 'cv01'" }}>
                    <p className="leading-[16px]">Jan</p>
                  </div>
                  <div className="flex flex-[1_0_0] flex-col justify-center min-w-px relative" style={{ fontFeatureSettings: "'ss01', 'cv01'" }}>
                    <p className="leading-[16px]">Feb</p>
                  </div>
                  <div className="flex flex-[1_0_0] flex-col justify-center min-w-px relative" style={{ fontFeatureSettings: "'ss01', 'cv01'" }}>
                    <p className="leading-[16px]">Mar</p>
                  </div>
                  <div className="flex flex-[1_0_0] flex-col justify-center min-w-px relative" style={{ fontFeatureSettings: "'ss01', 'cv01'" }}>
                    <p className="leading-[16px]">Apr</p>
                  </div>
                  <div className="flex flex-[1_0_0] flex-col justify-center min-w-px relative" style={{ fontFeatureSettings: "'ss01', 'cv01'" }}>
                    <p className="leading-[16px]">May</p>
                  </div>
                  <div className="flex flex-[1_0_0] flex-col justify-center min-w-px relative" style={{ fontFeatureSettings: "'ss01', 'cv01'" }}>
                    <p className="leading-[16px]">Jun</p>
                  </div>
                  <div className="flex flex-[1_0_0] flex-col justify-center min-w-px relative" style={{ fontFeatureSettings: "'ss01', 'cv01'" }}>
                    <p className="leading-[16px]">Jul</p>
                  </div>
                  <div className="flex flex-[1_0_0] flex-col justify-center min-w-px relative" style={{ fontFeatureSettings: "'ss01', 'cv01'" }}>
                    <p className="leading-[16px]">Aug</p>
                  </div>
                  <div className="flex flex-[1_0_0] flex-col justify-center min-w-px relative" style={{ fontFeatureSettings: "'ss01', 'cv01'" }}>
                    <p className="leading-[16px]">Sep</p>
                  </div>
                  <div className="flex flex-[1_0_0] flex-col justify-center min-w-px relative" style={{ fontFeatureSettings: "'ss01', 'cv01'" }}>
                    <p className="leading-[16px]">Oct</p>
                  </div>
                  <div className="flex flex-[1_0_0] flex-col justify-center min-w-px relative" style={{ fontFeatureSettings: "'ss01', 'cv01'" }}>
                    <p className="leading-[16px]">Nov</p>
                  </div>
                  <div className="flex flex-[1_0_0] flex-col justify-center min-w-px relative" style={{ fontFeatureSettings: "'ss01', 'cv01'" }}>
                    <p className="leading-[16px]">Dec</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}