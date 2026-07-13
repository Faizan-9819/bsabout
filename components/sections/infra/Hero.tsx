import React from "react";

// Define structure for the statistics data
interface StatItem {
  id: number;
  value: string;
  label: string;
}

export default function BuildSpaceHero() {
  // Array holding the bottom box content

  return (
    <section className="w-full min-h-screen bg-neutral-900 text-white font-sans overflow-x-hidden flex flex-col justify-between bg-cover bg-center bg-no-repeat plcont bg-[url(/infra/lifecycle/infraHome.webp)] bg-cover bg-no-repeat">
      {/* Main Content Row containing Left Hero text and Right/Bottom text */}
      <div className="w-full pt-40 flex-grow flex flex-col md:flex-row justify-end lg:justify-between items-start md:items-center gap-8 md:gap-8">
        {/* Hero Content Area (Left Side) */}
        <main className="flex flex-col justify-between lg:justify-center items-start">
          <p className="text-xs md:text-[12px] tracking-[3.12px] font-semibold text-neutral-400 uppercase mb-4 lg:mb-2 flex items-center gap-2">
            <span className="w-6 h-[1px] bg-[#a1a1a1] inline-block"></span>
            BuildINFRA · For Occupiers & Manufacturers{" "}
          </p>

          <h1 className="text-[30px] lg:text-[60px] font-bold tracking-tight leading-[1.1] mb-8">
            Industrial infrastructure, <br className="hidden md:inline" />
            <span className="font-thin text-[rgba(255,255,255,0.82)]">
              {" "}
              {/* engineered for performance <br /> at scale.{" "} */}
              developed to be operational.
            </span>
          </h1>
          <p className="pb-8 text-[15px] lg:text-[18px]">
            Industrial and logistics facilities developed for the businesses
            that will run them — owned end to end,{" "}
            <br className="hidden lg:flex" /> from land to day-one operations,
            under a single line of accountability.
          </p>

          <button className="bg-gradient-to-r from-[#BF584F] to-[#F6736A] cursor-pointer hover:bg-[#bd534b] text-white font-semibold text-[14px] lg:text-[16px] p-3 py-2 lg:px-6 lg:py-4 flex items-center gap-4 tracking-wide transition-colors group">
            Explore More
            <span className="w-7 h-7 bg-[#fff]/10 text-[#fff] flex items-center justify-center transform rotate-90 transition-transform duration-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2.5}
                stroke="currentColor"
                className="w-3 h-3"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                />
              </svg>
            </span>
          </button>
        </main>

        {/* Decorative Large Text (Right Side on Desktop / Horizontal at Bottom on Mobile) */}
        <div className="pointer-events-none select-none w-full md:w-auto flex justify-start md:justify-end">
          <h2
            className="flex flex-row md:flex-col items-center text-[64px] sm:text-[80px] md:text-[120px] font-extrabold leading-none md:leading-[0.82] tracking-normal md:tracking-[-4px] uppercase select-none pointer-events-none"
            style={{
              background:
                "linear-gradient(180deg, rgba(255, 255, 255, 0.50) 0%, rgba(255, 255, 255, 0.28) 52%, rgba(255, 255, 255, 0.20) 100%)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            <span>I</span>
            <span>N</span>
            <span>F</span>
            <span>R</span>
            <span>A</span>
          </h2>
        </div>
      </div>

      {/* Dynamic Bottom Statistics Boxes Container (Placeholder for data rendering) */}
      <div className="pb-12">{/* Map statsData here if needed */}</div>
    </section>
  );
}
