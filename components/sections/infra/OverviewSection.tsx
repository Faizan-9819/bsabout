import React from "react";

export default function OverviewSection() {
  return (
    <section className="w-full bg-[#F8F9FA] text-[#2D3142] py-16 md:py-24 lg:py-32 font-sans overflow-hidden">
      <div className="fix relative flex lg:flex-row flex-col gap-4 lg:gap-10 justify-between">
        {/* Left Column */}
        <div className="flex flex-col space-y-6">
          {/* Section Subtitle Tag */}
          <div className="flex items-center gap-3">
            <span className="w-8 h-[2px] bg-[#1E40AF]"></span>
            <span className="text-xs md:text-sm tracking-[0.25em] text-[#1E40AF] font-semibold uppercase">
              Overview
            </span>
          </div>

          {/* Main Heading */}
          <h2 className="text-[30px] lg:text-[56px] font-bold tracking-[-1.5px] bg-gradient-to-r from-[rgba(191,88,79,1)] to-[rgba(246,115,106,1)] bg-clip-text text-transparent leading-[1.15]">
            The facility decision is <br className="hidden lg:inline-block" />{" "}
            made long before the
            <br className="hidden lg:inline-block" /> first foundation.
          </h2>

          {/* Core Body Paragraph */}
          <p className="text-sm md:text-[18px] text-[#222] leading-relaxed font-normal max-w-xl">
            BuildINFRA develops industrial and logistics facilities for the
            businesses that will run them — manufacturers, logistics operators,
            and occupiers who need assets that are ready to perform, not just
            ready to hand over. For an occupier, the cost of a delayed facility
            is rarely the construction bill; it's the months of lost operations,
            deferred revenue, and stalled supply chains. Yet traditional
            development hands that risk straight to the occupier: multiple
            consultants, multiple contractors, multiple approval agencies, and a
            sequence of handovers where accountability dissolves at every seam.
          </p>
        </div>
        <div className="hidden lg:block absolute -top-40 -bottom-50 left-1/2 -translate-x-1/2 w-px bg-[rgba(0,59,157,0.05)]" />

        {/* Right Column */}
        <div className="flex flex-col h-full justify-between space-y-10 lg:pt-4">
          {/* Secondary Informational Paragraph */}
          <p className="text-sm md:text-[18px] lg:mb-20 text-[#54514C] leading-relaxed font-normal max-w-xl">
            BuildINFRA replaces that fragmentation with integrated development
            management — owning the entire lifecycle from land to day-one
            operations under a single line of accountability. We act on the
            owner's side, coordinating planning, approvals, engineering, and
            execution as one mandate, with critical workstreams run in parallel
            rather than in sequence. The result is faster mobilisation, fewer
            surprises, and a facility engineered around how your operation
            actually runs.
          </p>

          {/* Testimonial / Quote Box */}
          <div className="relative w-full max-w-xl overflow-hidden rounded-2xl border border-[#F56E6A]/30 bg-[linear-gradient(90deg,rgba(191,88,79,0.05)_0%,rgba(246,115,106,0.05)_100%)] px-8 py-6 lg:py-4 backdrop-blur-[20px] md:px-0 flex flex-col items-center justify-center text-center">
            {/* Content */}
            {/* Opening Quote Icon Background */}
            <div className="flex justify-start w-full items-start">
              <img className="lg:ps-4 lg:w-auto w-10" src="/over.png" alt="" />
            </div>{" "}
            {/* Quote Statement */}
            <p className="text-[20px] md:text-[27px] py-4 lg:py-1 bg-gradient-to-r from-[#BF584F] to-[#F6736A] bg-clip-text text-transparent leading-[140%]">
              We act more like a client than a contractor.{" "}
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
