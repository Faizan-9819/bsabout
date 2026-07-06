// "use client";
// import React, { useState } from "react";

// interface AccordionItem {
//   id: number;
//   title: string;
//   description: string;
// }

// export default function WhyUsAccordion() {
//   // Default to the 4th item (50+ Years Combined Experience) matching the screenshot.
//   const [openId, setOpenId] = useState<number>(4);

//   const accordionData: AccordionItem[] = [
//     {
//       id: 1,
//       title: "End-to-End Development Management",
//       description:
//         "Comprehensive lifecycle management handling everything from land acquisition, site planning, regulatory approvals, through design and execution under a single contract container.",
//     },
//     {
//       id: 2,
//       title: "100% Compliance Focused",
//       description:
//         "Rigorous alignment with local statutory frameworks, zoning regulations, international build parameters, and environmental compliance checks run concurrently.",
//     },
//     {
//       id: 3,
//       title: "Industrial & Logistics Specialists",
//       description:
//         "Deep domain knowledge tailored exclusively for manufacturing corridors, advanced warehouse layouts, distribution networks, and performance-ready heavy facility systems.",
//     },
//     {
//       id: 4,
//       title: "50+ Years Combined Experience",
//       description:
//         "Founder-led, with combined leadership experience spanning master planning, design engineering, and development management of large-scale industrial, warehousing, and SEZ infrastructure.",
//     },
//     {
//       id: 5,
//       title: "Institutional Development Standards",
//       description:
//         "Top-tier operational quality assurance matrices, rigorous safety codes, risk mitigation schedules, and investment-grade built environments designed for global occupiers.",
//     },
//   ];

//   // Modified toggle handler: if the clicked accordion is already open, it stays open.
//   const selectAccordion = (id: number) => {
//     if (openId !== id) {
//       setOpenId(id);
//     }
//   };

//   return (
//     <section className="w-full bg-white text-[#222222] py-16 md:py-24 px-6 md:px-12 lg:px-16 font-sans">
//       {/* items-stretch forces both child columns (image and text frame) to match equal height perfectly */}
//       <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch">
//         {/* Left Column: Visual Asset Panel matching the right panel's container height */}
//         <div className="lg:col-span-6 w-full h-full min-h-[400px] lg:min-h-0 rounded-2xl overflow-hidden relative shadow-sm">
//           <img
//             src="https://images.unsplash.com/photo-1541185933-ef5d8ed016c2?auto=format&fit=crop&q=80&w=1000"
//             alt="Hand pointing choosing right option workflow"
//             className="w-full h-full object-cover absolute inset-0"
//           />
//         </div>

//         {/* Right Column: Title Header & Accordion Content Container */}
//         <div className="lg:col-span-6 flex flex-col justify-between space-y-6 lg:space-y-0">
//           <div className="flex flex-col space-y-4">
//             {/* Subtitle Accent Tag */}
//             <div className="flex items-center gap-3">
//               <span className="w-6 h-[2px] bg-[#1E40AF]"></span>
//               <span className="text-xs md:text-sm tracking-[0.25em] text-[#1E40AF] font-bold uppercase">
//                 Why Us
//               </span>
//             </div>

//             {/* Heading with Custom Gradient */}
//             <h2
//               className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight pb-1 leading-[1.15]"
//               style={{
//                 backgroundImage:
//                   "linear-gradient(to right, rgba(191, 88, 79, 1), rgba(246, 115, 106, 1))",
//                 WebkitBackgroundClip: "text",
//                 WebkitTextFillColor: "transparent",
//                 backgroundClip: "text",
//               }}
//             >
//               Why occupiers choose BuildINFRA.
//             </h2>

//             {/* Context Intro text */}
//             <p className="text-sm md:text-base text-[#54514C] leading-relaxed max-w-xl pb-2 font-normal">
//               The difference is structural — in how we're positioned, how we
//               work, and who's accountable.
//             </p>
//           </div>

//           {/* Accordion List Container with fixed content height space parameters */}
//           <div className="w-full border-t border-neutral-200 flex flex-col justify-end">
//             {accordionData.map((item) => {
//               const isOpen = openId === item.id;

//               return (
//                 <div
//                   key={item.id}
//                   className="border-b border-neutral-200 w-full"
//                 >
//                   <button
//                     onClick={() => selectAccordion(item.id)}
//                     className="w-full flex justify-between items-center py-4 text-left transition-colors duration-200 group focus:outline-none"
//                   >
//                     {/* Accordion Title Header */}
//                     <span
//                       className="font-medium tracking-tight pr-4 select-none transition-colors duration-200"
//                       style={{
//                         fontSize: "20px",
//                         color: isOpen ? "#F56E6A" : "#222222",
//                       }}
//                     >
//                       {item.title}
//                     </span>

//                     {/* Styled Icon Trigger (Plus / Minus Layout) */}
//                     <div
//                       className={`w-7 h-7 rounded-full flex items-center justify-center transition-all duration-300 ${
//                         isOpen
//                           ? "bg-[#0038A8] text-white"
//                           : "bg-[#0038A8] text-white group-hover:bg-[#002673]"
//                       }`}
//                     >
//                       {isOpen ? (
//                         <svg
//                           xmlns="http://www.w3.org/2000/svg"
//                           fill="none"
//                           viewBox="0 0 24 24"
//                           strokeWidth={3}
//                           stroke="currentColor"
//                           className="w-3.5 h-3.5"
//                         >
//                           <path
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                             d="M19.5 12h-15"
//                           />
//                         </svg>
//                       ) : (
//                         <svg
//                           xmlns="http://www.w3.org/2000/svg"
//                           fill="none"
//                           viewBox="0 0 24 24"
//                           strokeWidth={3}
//                           stroke="currentColor"
//                           className="w-3.5 h-3.5"
//                         >
//                           <path
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                             d="M12 4.5v15m7.5-7.5h-15"
//                           />
//                         </svg>
//                       )}
//                     </div>
//                   </button>

//                   {/* Smooth Collapse Body with Fixed Max Height Limits to Prevent Jumping */}

//                   <div
//                     className={`overflow-hidden transition-all duration-500 ease-in-out ${
//                       isOpen ? " opacity-100" : " opacity-0"
//                     }`}
//                   >
//                     <p
//                       className="leading-relaxed font-normal"
//                       style={{
//                         fontSize: "18px",
//                         color: "#54514C",
//                       }}
//                     >
//                       {item.description}
//                     </p>
//                   </div>
//                 </div>
//               );
//             })}
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
//
//
//
//
//
//
//
//
// "use client";
// import React, { useState } from "react";

// interface AccordionItem {
//   id: number;
//   title: string;
//   description: string;
// }

// export default function WhyUsAccordion() {
//   // Default to the 4th item (50+ Years Combined Experience) matching the screenshot.
//   const [openId, setOpenId] = useState<number>(4);

//   const accordionData: AccordionItem[] = [
//     {
//       id: 1,
//       title: "End-to-End Development Management",
//       description:
//         "Comprehensive lifecycle management handling everything from land acquisition, site planning, regulatory approvals, through design and execution under a single contract container.",
//     },
//     {
//       id: 2,
//       title: "100% Compliance Focused",
//       description:
//         "Rigorous alignment with local statutory frameworks, zoning regulations, international build parameters, and environmental compliance checks run concurrently.",
//     },
//     {
//       id: 3,
//       title: "Industrial & Logistics Specialists",
//       description:
//         "Deep domain knowledge tailored exclusively for manufacturing corridors, advanced warehouse layouts, distribution networks, and performance-ready heavy facility systems.",
//     },
//     {
//       id: 4,
//       title: "50+ Years Combined Experience",
//       description:
//         "Founder-led, with combined leadership experience spanning master planning, design engineering, and development management of large-scale industrial, warehousing, and SEZ infrastructure.",
//     },
//     {
//       id: 5,
//       title: "Institutional Development Standards",
//       description:
//         "Top-tier operational quality assurance matrices, rigorous safety codes, risk mitigation schedules, and investment-grade built environments designed for global occupiers.",
//     },
//   ];

//   const selectAccordion = (id: number) => {
//     if (openId !== id) {
//       setOpenId(id);
//     }
//   };

//   return (
//     <section className="bg-white text-[#222222] py-16 lg:py-20">
//       {/* Using an exact, fixed layout grid block on desktop (min-h-[620px] max-h-[620px])
//         to guarantee the container never jumps or alters dimensions when items toggle.
//       */}
//       <div className="fix grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch">
//         {/* Left Column: Visual Asset Panel pinned absolutely to its layout slot to stop scaling jumps */}
//         <div className="lg:col-span-6 w-full h-[350px] sm:h-[450px] lg:h-full rounded-2xl overflow-hidden relative shadow-sm">
//           <img
//             src="https://images.unsplash.com/photo-1541185933-ef5d8ed016c2?auto=format&fit=crop&q=80&w=1000"
//             alt="Hand pointing choosing right option workflow"
//             className="w-full h-full object-cover absolute inset-0"
//           />
//         </div>

//         {/* Right Column: Title Header & Accordion Content Container */}
//         <div className="lg:col-span-6 flex flex-col justify-between h-full">
//           {/* Header Content Block */}
//           <div className="flex flex-col space-y-4 mb-4 lg:mb-0">
//             {/* Subtitle Accent Tag */}
//             <div className="flex items-center gap-3">
//               <span className="w-6 h-[2px] bg-[#1E40AF]"></span>
//               <span className="text-xs md:text-sm tracking-[0.25em] text-[#1E40AF] font-bold uppercase">
//                 Why Us
//               </span>
//             </div>

//             {/* Heading with Custom Gradient */}
//             <h2
//               className="text-[34px] md:text-[56px] font-bold tracking-[-1.56px] pb-2 leading-[110%]"
//               style={{
//                 backgroundImage:
//                   "linear-gradient(to right, rgba(191, 88, 79, 1), rgba(246, 115, 106, 1))",
//                 WebkitBackgroundClip: "text",
//                 WebkitTextFillColor: "transparent",
//                 backgroundClip: "text",
//               }}
//             >
//               Why occupiers <br /> choose <br /> BuildINFRA.
//             </h2>

//             {/* Context Intro text */}
//             <p className="text-[16px] lg:text-[20px] text-[#222] leading-[140%] pb-8 font-normal">
//               The difference is structural — in how we're positioned, how we
//               work, and who's accountable.
//             </p>
//           </div>

//           {/* Accordion Container */}
//           <div className="w-full border-t border-neutral-200 flex flex-col justify-end">
//             {accordionData.map((item) => {
//               const isOpen = openId === item.id;

//               return (
//                 <div
//                   key={item.id}
//                   className="border-b first:border-t-none! last:border-none! border-neutral-200 w-full"
//                 >
//                   <button
//                     onClick={() => selectAccordion(item.id)}
//                     className="w-full flex justify-between items-center min-h-[88px] py-5 text-left transition-colors duration-200 group focus:outline-none"
//                   >
//                     {/* Accordion Title */}
//                     <span
//                       className="font-medium tracking-tight pr-4 select-none transition-colors duration-200"
//                       style={{
//                         fontSize: "20px",
//                         color: isOpen ? "#F56E6A" : "#222222",
//                       }}
//                     >
//                       {item.title}
//                     </span>

//                     {/* Styled Icon Trigger */}
//                     <div
//                       className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
//                         isOpen
//                           ? "bg-[#0038A8] text-white"
//                           : "bg-[#0038A8] text-white group-hover:bg-[#002673]"
//                       }`}
//                     >
//                       {isOpen ? (
//                         <svg
//                           xmlns="http://www.w3.org/2000/svg"
//                           fill="none"
//                           viewBox="0 0 24 24"
//                           strokeWidth={3}
//                           stroke="currentColor"
//                           className="w-3.5 h-3.5"
//                         >
//                           <path
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                             d="M19.5 12h-15"
//                           />
//                         </svg>
//                       ) : (
//                         <svg
//                           xmlns="http://www.w3.org/2000/svg"
//                           fill="none"
//                           viewBox="0 0 24 24"
//                           strokeWidth={3}
//                           stroke="currentColor"
//                           className="w-3.5 h-3.5"
//                         >
//                           <path
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                             d="M12 4.5v15m7.5-7.5h-15"
//                           />
//                         </svg>
//                       )}
//                     </div>
//                   </button>

//                   {/* Smooth dynamic height container using CSS Grid transition tricks for maximum layout stability */}
//                   <div
//                     className={`grid transition-all duration-300 ease-in-out ${
//                       isOpen
//                         ? "grid-rows-[1.2fr] opacity-100 pb-0"
//                         : "grid-rows-[0fr] opacity-0"
//                     }`}
//                   >
//                     <div className="overflow-hidden">
//                       <p
//                         className="leading-relaxed font-normal"
//                         style={{
//                           fontSize: "18px",
//                           color: "#54514C",
//                         }}
//                       >
//                         {item.description}
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
"use client";
import React, { useState } from "react";

interface AccordionItem {
  id: number;
  title: string;
  description: string;
}

export default function WhyUsAccordion() {
  const [openId, setOpenId] = useState<number>(4);

  const accordionData: AccordionItem[] = [
    {
      id: 1,
      title: "You own the land. We deliver the facility.",
      description:
        "One partner owns the outcome from your land to live operations, removing the risk and delay of coordinating consultants, approvals, and contractors yourself.",
    },
    {
      id: 2,
      title: "Compliance handled, not chased.",
      description:
        "We manage statutory and regulatory compliance proactively throughout development, so approvals never become the obstacle between you and operations. 100% compliance-led.",
    },
    {
      id: 3,
      title: "Specialists in your kind of facility.",
      description:
        "Deep, single-vertical focus across manufacturing, warehousing, logistics, ICDs, fulfilment, EV, and data centres means your facility is developed by a team that understands how it will run.",
    },
    {
      id: 4,
      title: "50+ years behind your project.",
      description:
        "Founder-led experience across master planning, engineering, and development of large-scale industrial, warehousing, and SEZ infrastructure, applied directly to your development.",
    },
    {
      id: 5,
      title: "Institutional standards, for your own facility.",
      description:
        "Owner-side governance, transparent reporting, and institutional development discipline, so the facility you operate is built to a standard usually reserved for the largest developers.",
    },
  ];

  const selectAccordion = (id: number) => {
    if (openId !== id) {
      setOpenId(id);
    }
  };

  return (
    <section className="bg-white text-[#222222] py-16 lg:py-20">
      <div className="fix grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch">
        {/* Left Column */}
        <div className="lg:col-span-6 w-full h-[350px] lg:min-h-[450px] lg:h-full rounded-2xl overflow-hidden relative">
          <img
            src="/infra/lifecycle/infraWhy.jpg"
            alt="Hand pointing choosing right option workflow"
            className="w-full h-full object-cover absolute inset-0"
          />
        </div>

        {/* Right Column */}
        <div className="lg:col-span-6 flex flex-col justify-between h-full">
          <div className="flex flex-col space-y-4">
            <div className="flex items-center gap-3">
              <span className="w-6 h-[2px] bg-[#1E40AF]"></span>
              <span className="text-xs md:text-sm tracking-[0.25em] text-[#1E40AF] font-bold uppercase">
                Why Us
              </span>
            </div>

            <h2
              className="text-[34px] md:text-[56px] font-bold tracking-[-1.56px] pb-2 leading-[110%]"
              style={{
                backgroundImage:
                  "linear-gradient(to right, rgba(191, 88, 79, 1), rgba(246, 115, 106, 1))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Why businesses build <br /> with BuildINFRA.
            </h2>

            <p className="text-[16px] lg:text-[20px] text-[#222] leading-[140%] pb-8 font-normal">
              The difference is structural: in how we are positioned,{" "}
              <br className="hidden lg:inline-block" /> how we work, and who
              stays accountable.
            </p>
          </div>

          {/* Accordion Container */}
          <div className="w-full border-t border-neutral-200 flex flex-col justify-end">
            {accordionData.map((item) => {
              const isOpen = openId === item.id;

              return (
                <div
                  key={item.id}
                  className="border-b first:border-t-none! last:border-none! border-neutral-200 w-full"
                >
                  <button
                    onClick={() => selectAccordion(item.id)}
                    className="w-full flex justify-between items-center lg:min-h-[88px] py-5 text-left transition-colors duration-200 group focus:outline-none"
                  >
                    <span
                      className="text-[18px] lg:text-[20px] tracking-tight pr-4 select-none transition-colors duration-300"
                      style={{
                        color: isOpen ? "#F56E6A" : "#222",
                      }}
                    >
                      {item.title}
                    </span>

                    <div
                      className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                        isOpen
                          ? "bg-[#0038A8] text-white rotate-180"
                          : "bg-[#0038A8] text-white group-hover:bg-[#002673]"
                      }`}
                    >
                      {isOpen ? (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={3}
                          stroke="currentColor"
                          className="w-3.5 h-3.5"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19.5 12h-15"
                          />
                        </svg>
                      ) : (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={3}
                          stroke="currentColor"
                          className="w-3.5 h-3.5"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 4.5v15m7.5-7.5h-15"
                          />
                        </svg>
                      )}
                    </div>
                  </button>

                  {/* Dynamic height container — single synced timing, no delay mismatch */}
                  <div
                    className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${
                      isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div
                        className={`transition-opacity duration-300 ease-in-out pb-5 min-h-[90px] ${
                          isOpen ? "opacity-100" : "opacity-0"
                        }`}
                      >
                        <p
                          className="leading-relaxed text-[15px] lg:text-[18px] lg:h-[88px] font-normal"
                          style={{
                            color: "#54514C",
                          }}
                        >
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
