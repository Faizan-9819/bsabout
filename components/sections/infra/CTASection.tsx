import React from "react";

export default function CTASection() {
  // const img = "/infra/cta/ctabg.jpg";
  return (
    <section className="relative w-full min-h-[320px] lg:min-h-[310px] bg-neutral-800 text-white overflow-hidden font-sans flex items-center py-12 md:py-0">
      {/* Background Architectural Overlay Graphic */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-100 pointer-events-none select-none"
        style={{
          // Using a high-quality structural ceiling/glass frame to mirror the pattern
          backgroundImage: `url('/cta/ctabg.jpg')`,
        }}
      />

      {/* Coral/Red tinted overlay layer */}
      {/* <div className="absolute inset-0 z-0 bg-[#D26158]/20 mix-blend-color pointer-events-none select-none" /> */}

      {/* Main Structural Content Grid */}
      <div className="relative z-10 fix grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-6 lg:gap-12 items-center">
        {/* Left Column: Heading */}
        <div className="md:col-span-5 lg:col-span-4">
          <h2 className="text-[30px] lg:text-[37.5px] font-semibold tracking-[-1.12px] leading-[109%] text-white">
            Let's build what your operations depend on.
          </h2>
        </div>

        {/* Middle Column: Explanatory Subtext */}
        <div className="md:col-span-4 lg:col-span-5">
          <p className="text-[13px] text-start lg:text-[16.5px] lg:ps-8 font-[300] leading-[160%] ">
            Whether you're establishing a manufacturing plant, a{" "}
            <br className="hidden lg:inline-block" /> logistics hub, or a
            distribution operation, BuildINFRA{" "}
            <br className="hidden lg:inline-block" />
            turns the land you own into an operational asset,
            <br className="hidden lg:inline-block" /> developed faster,
            compliant throughout, and
            <br className="hidden lg:inline-block" /> accountable end to end.
          </p>
        </div>

        {/* Right Column: CTA Action Button Layout container */}
        <div className="md:col-span-3 lg:col-span-3 flex md:justify-end">
          <div className="bg-white p-1 inline-block shadow-lg">
            <button className="bg-white hover:bg-neutral-50 text-[#D26158] font-semibold text-sm py-3 px-5 transition-colors duration-200 flex items-center gap-4 group">
              <span className="text-[15.5px] font-semibold tracking-[-0.15px]">
                Schedule a Discussion
              </span>
              <span className="w-7 h-7 rounded bg-[#D26158]/10 text-[#D26158] flex items-center justify-center transform group-hover:translate-x-1 transition-transform duration-200">
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
          </div>
        </div>
      </div>
    </section>
  );
}
