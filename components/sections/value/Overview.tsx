import React from "react";

export default function OverviewSection() {
  return (
    <section className="w-full bg-[#F8F9FA] text-[#2D3142] py-16 md:py-24 lg:py-32 font-sans overflow-hidden">
      <div className="fix flex lg:flex-row flex-col gap-4 lg:gap-18 justify-between">
        {/* Left Column */}
        <div className="flex-1 max-w-[48%] flex flex-col space-y-6">
          {/* Section Subtitle Tag */}
          <div className="flex items-center gap-3">
            <span className="w-8 h-[2px] bg-[#1E40AF]"></span>
            <span className="text-xs md:text-sm tracking-[0.25em] text-[#1E40AF] font-semibold uppercase">
              Overview
            </span>
          </div>

          {/* Main Heading */}
          <h2 className="text-[30px] lg:text-[56px] font-bold tracking-[-1.5px] bg-gradient-to-r from-[rgba(191,88,79,1)] to-[rgba(246,115,106,1)] bg-clip-text text-transparent leading-[1.15]">
            Most land <br className="hidden lg:inline-block" /> underperforms —
            not for lack of value, but for lack of a development path.
          </h2>

          {/* Core Body Paragraph */}
          <p className="text-sm lg:text-[18px] text-[#222] leading-[140%]">
            BuildVALUE works with landowners whose parcels hold real development
            <br className="hidden lg:inline-block" />
            potential but generate little or no return. Across India's
            industrial corridors,
            <br className="hidden lg:inline-block" /> strong land sits dormant,
            held without a strategy, while demand for industrial
            <br className="hidden lg:inline-block" /> and logistics
            infrastructure keeps rising. The gap is rarely the land itself. It
            is
            <br className="hidden lg:inline-block" /> the absence of a credible
            path from raw parcel to a developed, income-
            <br className="hidden lg:inline-block" />
            producing asset.
          </p>
        </div>
        <div className="hidden lg:block w-px self-stretch bg-[rgba(0,59,157,0.05)]" />

        {/* Right Column */}
        <div className="flex flex-col h-full justify-between space-y-10 lg:pt-4">
          {/* Secondary Informational Paragraph */}
          <p className="text-sm lg:text-[18px] lg:mb-22 text-[#54514C] leading-[140%]">
            BuildVALUE is your solution partner across that entire path, taking
            your <br className="hidden lg:inline-block" />
            land from evaluation and feasibility through development and into
            long- <br className="hidden lg:inline-block" />
            term income under a single line of accountability. We bring the
            capital <br className="hidden lg:inline-block" />
            partners, development expertise, and execution to turn your parcel
            into a <br className="hidden lg:inline-block" />
            Grade-A industrial or logistics asset, then position it to perform.
            Critically, <br className="hidden lg:inline-block" />
            you retain ownership throughout, earning from the income and value
            uplift <br className="hidden lg:inline-block" />
            of a professionally managed development rather than a one-time sale.
          </p>

          {/* Testimonial / Quote Box */}
          <div className="relative w-full max-w-xl overflow-hidden rounded-2xl border border-[#F56E6A] bg-[linear-gradient(90deg,rgba(191,88,79,0.05)_0%,rgba(246,115,106,0.05)_100%)] px-8 py-6 lg:py-4 backdrop-blur-[20px] md:px-0 flex flex-col items-center justify-center text-center">
            {/* Content */}
            {/* Opening Quote Icon Background */}
            <div className="flex justify-start w-full items-start">
              <img className="lg:ps-4 lg:w-auto w-10" src="/over.png" alt="" />
            </div>{" "}
            {/* Quote Statement */}
            <p className="text-[20px] md:text-[27px] py-4 lg:py-1 bg-gradient-to-r from-[#BF584F] to-[#F6736A] bg-clip-text text-transparent leading-[140%]">
              We are creating value, not simply infrastructure.
            </p>
            {/* Closing Quote Icon Background */}
            <div className="flex justify-end w-full items-end">
              <img
                className="ps-4 rotate-180 lg:w-auto w-14"
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
