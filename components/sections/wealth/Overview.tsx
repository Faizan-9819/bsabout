import React from "react";

export default function OverviewSection() {
  return (
    <section className="w-full bg-[#F8F9FA] text-[#2D3142] py-16 md:py-24 lg:py-32 overflow-hidden">
      <div className="flex fix relative flex-col lg:grid lg:grid-cols-2 gap-10 lg:gap-16 xl:gap-24 justify-between">
        {/* Left Column */}
        <div className="flex flex-col space-y-6 w-full max-w-xl">
          {/* Section Subtitle Tag */}
          <div className="flex items-center gap-3">
            <span className="w-8 h-[2px] bg-[#1E40AF]"></span>
            <span className="text-xs md:text-[12px] tracking-[2.5px] text-[#1E40AF] font-semibold uppercase">
              Overview
            </span>
          </div>

          {/* Main Heading */}
          <h2 className="text-[30px] lg:text-[44px] xl:text-[56px] font-bold tracking-[-1.5px] bg-gradient-to-r from-[#BF584F] to-[#F6736A] bg-clip-text text-transparent leading-[1.15]">
            The infrastructure beneath India's industrial growth is an asset
            class in itself.
          </h2>

          {/* Core Body Paragraph */}
          <p className="text-sm lg:text-[18px] text-[#222] leading-[140%]">
            India's manufacturing and logistics expansion is creating sustained
            demand for Grade-A industrial infrastructure — and the assets that
            serve it offer something rare: long-duration, demand-backed income
            tied to the real economy. BuildWEALTH gives investors and capital
            partners a way to participate in that growth, not through paper
            exposure, but through ownership in the physical assets themselves.
          </p>
        </div>

        {/* Optional Center Divider (Maintains your subtle border mark alignment dynamically) */}
        <div className="hidden lg:block absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-px bg-[rgba(0,59,157,0.05)]" />

        {/* Right Column */}
        <div className="flex flex-col h-full justify-between space-y-10 lg:pt-3 w-full max-w-xl lg:max-w-none ml-auto">
          {/* Secondary Informational Paragraph */}
          <p className="text-sm lg:text-[18px] text-[#54514C] leading-[140%]">
            What distinguishes BuildWEALTH is where it sits. Most capital enters
            industrial real estate after the asset is built and priced.
            BuildWEALTH participates from development — drawing on BuildSpace's
            own infrastructure and land-activation capability to create the very
            assets investors hold. That development-led origin means quality is
            controlled, basis is earned rather than paid, and incentives are
            aligned: BuildSpace stewards the asset across its full lifecycle,
            not just to the point of sale.
          </p>

          {/* Testimonial / Quote Box */}
          <div className="relative w-full max-w-xl overflow-hidden rounded-2xl border border-[#F56E6A]/30 bg-[linear-gradient(90deg,rgba(191,88,79,0.05)_0%,rgba(246,115,106,0.05)_100%)] px-4 py-2 backdrop-blur-[20px] md:px-6 flex flex-col items-center justify-center text-center">
            {/* Content */}
            <div className="flex justify-start lg:py-1 w-full items-start">
              <img className="w-10 lg:w-auto" src="/over.png" alt="" />
            </div>

            {/* Quote Statement */}
            <p className="text-[18px] md:text-[27px] bg-gradient-to-r from-[#BF584F] to-[#F6736A] bg-clip-text text-transparent py-4 leading-[140%] font-medium">
              Ownership remains with the investor. We create value, and we
              steward it.
            </p>

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
