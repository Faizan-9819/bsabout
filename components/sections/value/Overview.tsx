import React from "react";

export default function OverviewSection() {
  return (
    <section className="w-full bg-[#F8F9FA] text-[#2D3142] py-16 md:py-24 lg:py-32 font-sans overflow-hidden">
      <div className="fix relative grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 xl:gap-24 justify-between w-full">
        {/* Left Column */}
        <div className="flex flex-col space-y-9 w-full">
          {/* Section Subtitle Tag */}
          <div className="flex items-center gap-3">
            <span className="w-8 h-[2px] bg-[#1E40AF]"></span>
            <span className="text-xs md:text-sm tracking-[0.25em] text-[#1E40AF] font-semibold uppercase">
              Overview · The Problem & The Model
            </span>
          </div>

          {/* Main Heading */}
          <h2 className="text-[30px] xl:text-[42px] 2xl:text-[56px] font-bold tracking-[-1.5px] bg-gradient-to-r from-[rgba(191,88,79,1)] to-[rgba(246,115,106,1)] bg-clip-text text-transparent leading-[1.15]">
            Most land underperforms — not for lack of value, but for lack of a
            development path.
          </h2>

          {/* Core Body Paragraph */}
          <p className="text-sm lg:text-[18px] text-[#222] leading-[140%]">
            BuildVALUE works with landowners whose parcels hold real development
            potential but generate little or no return. Across India's
            industrial corridors, strong land sits dormant — held without a
            strategy, while demand for industrial and logistics infrastructure
            continues to rise. The gap is rarely the land itself. It's the
            absence of a credible path from raw parcel to a developed,
            income-producing asset.
          </p>
        </div>

        {/* Absolute Center Divider Line */}
        <div className="hidden lg:block absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-px bg-[rgba(0,59,157,0.05)]" />

        {/* Right Column */}
        <div className="flex flex-col h-full w-full justify-between space-y-10 lg:pt-4">
          {/* Secondary Informational Paragraph */}
          <p className="text-sm lg:text-[18px] text-[#54514C] leading-[140%]">
            BuildVALUE bridges that gap through integrated development
            management taking land from assessment and feasibility through
            development and long-term asset performance under a single line of
            accountability. We bring the capital partners, development
            expertise, and execution capability to convert a parcel into a
            Grade-A industrial or logistics asset. Critically, the landowner
            retains ownership, benefiting from the income and value uplift of a
            professionally managed development rather than a one-time sale.
          </p>

          {/* Testimonial / Quote Box */}
          <div className="relative w-full max-w-xl overflow-hidden rounded-2xl border border-[#F56E6A]/30 bg-[linear-gradient(90deg,rgba(191,88,79,0.05)_0%,rgba(246,115,106,0.05)_100%)] px-4 py-4 backdrop-blur-[20px] md:px-6 flex flex-col items-center justify-center text-center">
            {/* Content Top Asset */}
            <div className="flex justify-start w-full items-start">
              <img className="w-10 lg:w-auto" src="/over.png" alt="" />
            </div>

            {/* Quote Statement */}
            <p className="text-[20px] md:text-[25px] px-4 py-4 bg-gradient-to-r from-[#BF584F] to-[#F6736A] bg-clip-text text-transparent leading-[140%] font-medium">
              We are creating value, not simply infrastructure.
            </p>

            {/* Content Bottom Asset */}
            <div className="flex justify-end w-full items-end">
              <img
                className="rotate-180 w-14 lg:w-auto"
                src="/over.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
