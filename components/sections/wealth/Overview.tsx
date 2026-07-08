import React from "react";

export default function OverviewSection() {
  return (
    <section className="w-full bg-[#F8F9FA] text-[#2D3142] py-16 md:py-24 lg:py-32 font-sans overflow-hidden">
      <div className="fix flex lg:flex-row flex-col gap-5 lg:gap-18 justify-between">
        {/* Left Column */}
        <div className="flex flex-col space-y-6">
          {/* Section Subtitle Tag */}
          <div className="flex items-center gap-3">
            <span className="w-8 h-[2px] bg-[#1E40AF]"></span>
            <span className="text-xs md:text-[12px] tracking-[2.5px] text-[#1E40AF] font-semibold uppercase">
              Overview
            </span>
          </div>

          {/* Main Heading */}
          <h2 className="text-[30px] lg:text-[56px] font-bold tracking-[-1.5px] bg-gradient-to-r from-[#BF584F] to-[#F6736A] bg-clip-text text-transparent leading-[1.15]">
            The infrastructure <br className="hidden lg:inline-block" /> beneath
            India's industrial <br className="hidden lg:inline-block" /> growth
            is an asset class <br className="hidden lg:inline-block" /> in
            itself.
          </h2>

          {/* Core Body Paragraph */}
          <p className="text-sm lg:text-[18px] text-[#222] leading-[140%]">
            India's manufacturing and logistics expansion is creating sustained
            demand for
            <br className="hidden lg:inline-block" /> Grade-A industrial
            infrastructure and the assets that serve it offer something{" "}
            <br className="hidden lg:inline-block" />
            rare: long-duration, demand-backed income tied to the real economy.
            <br className="hidden lg:inline-block" />
            BuildWEALTH gives investors and capital partners a way to
            participate in that
            <br className="hidden lg:inline-block" /> growth, not through paper
            exposure, but through ownership in the{" "}
            <br className="hidden lg:inline-block" /> physical assets
            themselves.
          </p>
        </div>
        <div className="hidden lg:block w-px self-stretch bg-[rgba(0,59,157,0.05)]" />

        {/* Right Column */}
        <div className="flex flex-col h-full justify-between space-y-10 lg:pt-3">
          {/* Secondary Informational Paragraph */}
          <p className="text-sm lg:text-[18px] lg:mb-20 text-[#54514C] leading-[140%]">
            What distinguishes BuildWEALTH is where it sits in the capital
            stack. Most <br className="hidden lg:inline-block" /> capital enters
            industrial real estate after the asset is built and priced, paying{" "}
            <br className="hidden lg:inline-block" />
            market for stabilised income. BuildWEALTH participates from{" "}
            <br className="hidden lg:inline-block" />
            development, drawing on BuildSpace's own infrastructure and land-{" "}
            <br className="hidden lg:inline-block" />
            activation capability to create the very assets investors hold. That{" "}
            <br className="hidden lg:inline-block" />
            development-led origin means quality is controlled, basis is earned
            rather <br className="hidden lg:inline-block" /> than paid at a
            premium, and incentives are aligned. BuildSpace stewards{" "}
            <br className="hidden lg:inline-block" /> the asset across its full
            lifecycle, not just to the point of sale.
          </p>

          {/* Testimonial / Quote Box */}
          <div className="relative w-full max-w-xl overflow-hidden rounded-2xl border border-[#F56E6A]/30 bg-[linear-gradient(90deg,rgba(191,88,79,0.05)_0%,rgba(246,115,106,0.05)_100%)] px-2 py-1 backdrop-blur-[20px] md:px-0 flex flex-col items-center justify-center text-center">
            {/* Content */}
            {/* Opening Quote Icon Background */}
            {/* <span className="absolute left-6 top-4 text-6xl md:text-[88px] font-serif text-[#D26158]/10 select-none pointer-events-none leading-none">
              “
            </span> */}
            <div className="flex justify-start lg:py-1 w-full items-start">
              <img className="lg:ps-4 lg:w-auto w-10" src="/over.png" alt="" />
            </div>{" "}
            {/* Quote Statement */}
            <p className="text-[18px] md:text-[27px] bg-gradient-to-r from-[#BF584F] to-[#F6736A] bg-clip-text text-transparent py-4 lg:py-0 leading-[140%]">
              Ownership remains with the investor.{" "}
              <br className="hidden lg:inline-block" /> We create value, and we
              steward it.
            </p>
            {/* Closing Quote Icon Background */}
            {/* <span className="absolute right-6 bottom-[-10px] text-6xl md:text-7xl font-serif text-[#D26158]/10 select-none pointer-events-none leading-none">
              ”
            </span> */}
            <div className="flex justify-end w-full items-end">
              <img
                className="ps-4 rotate-180 lg:w-auto w-14"
                src="/over.png"
                alt=""
              />
            </div>{" "}
          </div>
        </div>
      </div>
    </section>
  );
}
