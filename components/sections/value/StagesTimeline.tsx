// import React from "react";

// interface StageCard {
//   id: number;
//   title: string;
//   description: string;
// }

// export default function StagesTimeline() {
//   const stagesData: StageCard[] = [
//     {
//       id: 1,
//       title: "Planning",
//       description:
//         "Master planning and development strategy aligned to the land's highest sustainable use and long-term value.",
//     },
//     {
//       id: 2,
//       title: "Stakeholder Management",
//       description:
//         "Coordinating consultants, authorities, capital partners, and occupiers under a single point of accountability.",
//     },
//     {
//       id: 3,
//       title: "Compliance",
//       description:
//         "Statutory and regulatory clearances managed proactively through a live compliance matrix, run parallel to development.",
//     },
//     {
//       id: 4,
//       title: "Infrastructure Strategy",
//       description:
//         "Engineering the utilities, access, and external infrastructure that make the asset genuinely development-ready.",
//     },
//     {
//       id: 5,
//       title: "Delivery Oversight",
//       description:
//         "Integrated development management of execution — built to spec, time, and budget, with transparent governance throughout.",
//     },
//   ];

//   return (
//     <section className="w-full bg-[#F8F9FA] text-[#2D3142] py-16 md:py-24 px-6 md:px-12 lg:px-16 font-sans overflow-hidden">
//       <div className="fix flex flex-col gap-12 md:gap-16">
//         {/* Top Header Grid Area */}
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-end">
//           <div className="lg:col-span-6 flex flex-col space-y-4">
//             {/* Blue Subsection Line Accent Indicator */}
//             <div className="flex items-center gap-3">
//               <span className="w-6 h-[2px] bg-[#1E40AF]"></span>
//               <span className="text-xs md:text-sm tracking-[0.25em] text-[#1E40AF] font-bold uppercase">
//                 Stages
//               </span>
//             </div>

//             {/* Requested Heading Title with Linear Gradient Text at 40px Size */}
//             <h2
//               className="font-bold tracking-tight pb-1 leading-[1.2] text-3xl sm:text-[36px] md:text-[40px]"
//               style={{
//                 backgroundImage:
//                   "linear-gradient(to right, rgba(191, 88, 79, 1), rgba(246, 115, 106, 1))",
//                 WebkitBackgroundClip: "text",
//                 WebkitTextFillColor: "transparent",
//                 backgroundClip: "text",
//               }}
//             >
//               Owner-side development,
//               <br className="hidden lg:inline-block" />
//               end to end.
//             </h2>
//           </div>

//           {/* Right Description Text Block */}
//           <div className="lg:col-span-6 lg:pb-1">
//             <p className="text-sm md:text-[16px] text-[#414042] font-sans! leading-relaxed font-normal">
//               Identifying opportunity is only the beginning. The harder work is
//               execution — <br className="hidden lg:inline-block" />
//               and it's where most land-development ambitions stall. BuildVALUE
//               manages <br className="hidden lg:inline-block" /> the full development mandate on the landowner's
//               behalf, coordinating <br className="hidden lg:inline-block" /> planning, compliance, infrastructure,
//               and delivery as one accountable <br className="hidden lg:inline-block" /> workstream. The landowner
//               gains a developed asset without having to <br className="hidden lg:inline-block" /> assemble and
//               manage a development organisation themselves.
//             </p>
//           </div>
//         </div>

//         {/* Timeline Track & Cards Display Wrapper */}
//         <div className="relative w-full mt-6">
//           {/* Horizontal line marker tracking bar (hidden on small layouts to avoid layout breaks) */}
//           <div className="absolute top-[18px] left-0 w-full h-[2px] bg-[#E5E7EB] hidden lg:block z-0" />
//           <div className="absolute top-[18px] left-0 w-full h-[2px] bg-[#D26158]/50 hidden lg:block z-0" />

//           {/* Main Container Setup mapping stages */}
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-5 relative z-10">
//             {stagesData.map((stage) => (
//               <div
//                 key={stage.id}
//                 className="flex flex-col items-center lg:items-stretch group"
//               >
//                 {/* Checkpoint Timeline Node Dot Circle Indicator */}
//                 <div className="w-full flex justify-center items-center mb-6 relative">
//                   {/* Vertical fallback pipeline link indicator for compressed layouts */}
//                   <div className="absolute top-full left-1/2 w-[2px] h-6 bg-[#D26158]/20 lg:hidden -translate-x-1/2 last:hidden" />

//                   <div className="w-9 h-9 rounded-full bg-[#D26158] text-white flex items-center justify-center border border-[#E2E2E2] relative z-20">
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       fill="none"
//                       viewBox="0 0 24 24"
//                       strokeWidth={3}
//                       stroke="currentColor"
//                       className="w-4 h-4 text-white"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         d="M4.5 12.75l6 6 9-13.5"
//                       />
//                     </svg>
//                   </div>
//                 </div>

//                 {/* Info Card Content block container layout */}
//                 <div className="w-full bg-[#EAECEE]/20 border border-[#E5E7EB] rounded-2xl p-1.5 flex flex-col items-center text-center justify-center min-h-[240px] shadow-sm hover:shadow-md hover:border-[#D26158]/30 transition-all duration-300">
//                   {/* Stage Category Title */}
//                   <h3 className="text-[16px] lg:text-[20px] font-sans! tracking-tight text-[#222] mb-4">
//                     {stage.title}
//                   </h3>

//                   {/* Stage Detailed Narrative text descriptions */}
//                   <p className="text-xs md:text-[16px] h-[124px] px-6 text-[#414042] font-sans! leading-[155%]">
//                     {stage.description}
//                   </p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

//
//
//
//
//
//
//
//

"use client";
import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";

interface StageCard {
  id: number;
  title: string;
  description: string;
}

const stagesData: StageCard[] = [
  {
    id: 1,
    title: "Asset Positioning",
    description:
      "We position your developed asset within its corridor and market, so it is seen by the occupiers who value it most.",
  },
  {
    id: 2,
    title: "Tenant Attraction",
    description:
      "We market the asset and draw credible, long-term occupiers whose tenancy underwrites your income.",
  },
  {
    id: 3,
    title: "Tenant Alignment",
    description:
      "We match the right occupiers to the asset, aligning lease terms to your long-term income and value goals.",
  },
  {
    id: 4,
    title: "Income & Tenancy Management",
    description:
      "We manage tenancy and asset performance over time, so your income holds and compounds well beyond first occupancy.",
  },
];

function CheckpointCircle() {
  return (
    <div className="w-5 h-5 rounded-full bg-[#E37266] text-white flex items-center justify-center relative z-20 shadow-sm">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={3.5}
        stroke="currentColor"
        className="w-2.5 h-2.5 text-white"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4.5 12.75l6 6 9-13.5"
        />
      </svg>
    </div>
  );
}

function StageCardContent({ stage }: { stage: StageCard }) {
  return (
    <div className="w-full bg-[#F8F9FA] border border-[#E9EBEF] rounded-2xl pt-10 pb-10 px-6 flex flex-col items-center text-center min-h-[250px] font-sans! transition-all duration-300">
      <h3 className="text-[20px] font-normal font-sans! tracking-tight text-[#333A42] mb-5">
        {stage.title}
      </h3>
      <p className="text-[15px] text-[#5D636B] font-normal leading-[1.6]">
        {stage.description}
      </p>
    </div>
  );
}

export default function StagesTimeline() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "center",
    loop: false,
    containScroll: "trimSnaps",
    dragFree: false,
  });

  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const scrollPrev = useCallback(() => {
    emblaApi?.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    emblaApi?.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <section className="w-full bg-white py-16 md:py-20 font-sans overflow-hidden">
      <div className="w-full fix flex flex-col gap-12 md:gap-14">
        {/* Top Header Section — Flex Layout */}
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-8 ">
          <div className="flex flex-col space-y-5 lg:max-w-[48%]">
            {/* Header Accent Line Indicator */}
            <div className="flex items-center gap-3">
              <span className="w-6 h-[2px] bg-[#1E40AF]"></span>
              <span className="text-[11px] tracking-[3px] text-[#1E40AF] font-bold uppercase">
                LEASING & MARKETING
              </span>
            </div>

            {/* Heading Title */}
            <h2 className="font-bold tracking-tight text-3xl sm:text-[36px] md:text-[40px] leading-[1.2]  bg-gradient-to-r from-[rgba(191,88,79,1)] to-[rgba(246,115,106,1)] bg-clip-text text-transparent">
              A developed asset only creates <br className="hidden sm:inline" />{" "}
              value when it performs.
            </h2>
          </div>

          {/* Right Paragraph Block */}
          <div className="lg:max-w-[48%] lg:pt-10">
            <p className="text-[15px] sm:text-[16px] text-[#414042] leading-[1.65] font-normal">
              Building the asset is half the story. Its value to you depends on
              filling it with
              <br className="hidden md:inline-block" /> credible, long-term
              occupiers and positioning it to command strong, durable{" "}
              <br className="hidden md:inline-block" /> income. BuildVALUE
              carries the asset beyond development into{" "}
              <br className="hidden md:inline-block" /> performance, marketing
              it, securing the right tenants, and managing tenancy{" "}
              <br className="hidden md:inline-block" /> so your land does not
              just become a building, it becomes a source of lasting{" "}
              <br className="hidden md:inline-block" /> income, with ownership
              remaining yours.
            </p>
          </div>
        </div>

        {/* ============== DESKTOP TIMELINE ============== */}
        <div className="relative w-full mt-4 hidden lg:block">
          {/* Continuous Red Line running across full width of the viewport/component */}
          <div className="absolute top-[10px] left-0 right-0 h-[1.5px] bg-[#F4A59D] z-0" />

          {/* Flexible cards row with custom padding alignment matching the nodes */}
          <div className="flex flex-row justify-between items-start gap-20 relative z-10 w-full">
            {stagesData.map((stage) => (
              <div key={stage.id} className="flex flex-col items-center flex-1">
                {/* Node Dot Circle */}
                <div className="mb-6">
                  <CheckpointCircle />
                </div>

                {/* Card Block */}
                <StageCardContent stage={stage} />
              </div>
            ))}
          </div>
        </div>

        {/* ============== MOBILE / TABLET CAROUSEL ============== */}
        <div className="lg:hidden w-full mt-2 relative">
          <div className="overflow-hidden px-6" ref={emblaRef}>
            <div className="flex -ml-4">
              {stagesData.map((stage) => (
                <div
                  key={stage.id}
                  className="flex-[0_0_85%] sm:flex-[0_0_45%] min-w-0 pl-4"
                >
                  <div className="flex flex-col items-center relative">
                    {/* Background Full Line for mobile */}
                    <div className="absolute top-[10px] left-0 right-0 h-[1.5px] bg-[#F4A59D] z-0" />

                    <div className="mb-6 relative z-10">
                      <CheckpointCircle />
                    </div>

                    <StageCardContent stage={stage} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              type="button"
              aria-label="Previous slide"
              onClick={scrollPrev}
              disabled={!canScrollPrev}
              className="w-10 h-10 rounded-full bg-white border border-[#E5E7EB] flex items-center justify-center disabled:opacity-30"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-5 h-5 text-[#2D3142]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 19.5L8.25 12l7.5-7.5"
                />
              </svg>
            </button>

            <button
              type="button"
              aria-label="Next slide"
              onClick={scrollNext}
              disabled={!canScrollNext}
              className="w-10 h-10 rounded-full bg-white border border-[#E5E7EB] flex items-center justify-center disabled:opacity-30"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-5 h-5 text-[#2D3142]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
