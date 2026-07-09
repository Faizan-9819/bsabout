import React from "react";

export default function CTA() {
  // const img = "/infra/cta/ctabg.jpg";
  return (
    <section className="relative w-full min-h-[320px] lg:min-h-[310px] bg-neutral-800 text-white overflow-hidden font-sans flex items-center py-12 md:py-0">
      {/* Background Architectural Overlay Graphic */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-100 pointer-events-none select-none"
        style={{
          // Using a high-quality structural ceiling/glass frame to mirror the pattern
          backgroundImage: `url('/career/cta.webp')`,
        }}
      />

      {/* Coral/Red tinted overlay layer */}
      {/* <div className="absolute inset-0 z-0 bg-[#D26158]/20 mix-blend-color pointer-events-none select-none" /> */}
      {/* Main Structural Content Grid */}
      <div className="relative z-10 flex items-center flex-col flex-wrap h-full justify-center w-full fix gap-8 md:gap-6 lg:gap-8 items-center">
        {/* Left Column: Heading */}

        <h2 className="text-[30px] lg:text-[44px] tracking-[-1.12px] leading-[109%] text-white">
          Feel like this aligns? <br className="lg:hidden" /> Drop us a line!
        </h2>

        {/* Middle Column: Explanatory Subtext */}
        {/* <div className="md:col-span-4 lg:col-span-5">
          <p className="text-[13px] lg:text-start lg:text-[16.5px] font-[300] leading-[160%] ">
            Whether you hold a single strategic parcel or an <br />{" "}
            institutional land bank, BuildVALUE can assess its <br /> potential
            and chart a development path that creates <br /> long-term value —
            with ownership remaining yours <br />
            throughout.
          </p>
        </div> */}

        {/* Right Column: CTA Action Button Layout container */}

        <button className="bg-white cursor-pointer hover:bg-neutral-50 text-[#D26158] font-semibold text-sm px-3 py-2 lg:py-3 lg:px-5 transition-colors duration-200 flex items-center gap-4 group">
          <span className="text-[15.5px] font-semibold tracking-[-0.15px]">
            Learn More About Us
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
    </section>
  );
}
