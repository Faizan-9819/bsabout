// "use client";

// import { useState, useRef } from "react";
// import { motion } from "framer-motion";

// const tabs = [
//   "Building Specifications",
//   "Infrastructure & Utilities",
//   "Smart & Safety",
// ] as const;
// type Tab = (typeof tabs)[number];

// const specsByTab: Record<Tab, { label: string; value: string }[]> = {
//   "Building Specifications": [
//     { label: "Structure", value: "Pre-Engineered Buildings (PEB)" },
//     { label: "Eave Height", value: "12 m clear" },
//     { label: "Flooring", value: "FM-2, 5T/sqm load-bearing" },
//     { label: "Roof", value: "Standing seam with insulation" },
//     { label: "Plinth Height", value: "1.2 m" },
//     { label: "Lighting", value: "150 Lux LED" },
//     { label: "Ventilation", value: "Ridge ventilators, 6 air changes/hour" },
//     { label: "Side Walls", value: "3.5 m RCC / lightweight wall panels" },
//     { label: "Elevation", value: "Modern façade with optional glass paneling" },
//     { label: "Solar Ready", value: "Standing seam provision for solar panels" },
//   ],
//   "Infrastructure & Utilities": [
//     { label: "Power Supply", value: "Dedicated substation, HT connection" },
//     {
//       label: "Water Supply",
//       value: "Hydro-pneumatic system with borewell backup",
//     },
//     {
//       label: "Sewage Treatment",
//       value: "Onsite STP, recycled for non-potable use",
//     },
//     {
//       label: "Internal Roads",
//       value: "Concrete, engineered for heavy trailers",
//     },
//     { label: "Truck Apron", value: "Wide-radius M40 concrete apron" },
//     { label: "Fire Systems", value: "FM Global-standard fire protection" },
//     { label: "Backup Power", value: "DG backup for common & critical loads" },
//     { label: "Drainage", value: "Stormwater drainage across the site" },
//   ],
//   "Smart & Safety": [
//     {
//       label: "CCTV Surveillance",
//       value: "Hi-resolution PTZ & IR cameras at gates",
//     },
//     {
//       label: "Access Control",
//       value: "Motorised sliding gate with boom barriers",
//     },
//     {
//       label: "Visitor Management",
//       value: "Digital visitor & gate management system",
//     },
//     {
//       label: "EV Charging",
//       value: "2 common charging points + future-ready infrastructure",
//     },
//     {
//       label: "Admin Building",
//       value: "RCC/PEB structure with facility management office",
//     },
//     {
//       label: "Gate House",
//       value: "RCC/PEB with glass paneling & access control",
//     },
//     {
//       label: "Driver Rest Area",
//       value: "RCC block with toilets & resting facilities",
//     },
//   ],
// };

// export default function ParkSpecifications() {
//   const [activeTab, setActiveTab] = useState<Tab>("Building Specifications");
//   const rows = specsByTab[activeTab];
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
//   const dropdownRef = useRef<HTMLDivElement>(null);

//   return (
//     <section className="bg-white">
//       <div className="fix py-[60px] lg:py-[80px] flex flex-col items-center">
//         <div className="flex flex-col items-center gap-[20px] lg:gap-[30px] mb-10 lg:mb-[50px] text-center">
//           <div className="flex justify-center items-center gap-[13px]">
//             <span className="h-px w-7 bg-[#003b9d]" />
//             <span className="text-[11px] font-semibold tracking-[3.36px] text-start uppercase text-[#003b9d]">
//               Engineered to Specification
//             </span>
//           </div>
//           <h2 className="font-bold leading-[1.1] tracking-[-1.568px] text-[26px] sm:text-[32px] lg:text-[40px] text-gradient-brand bg-gradient-to-r from-[#BF584F] to-[#F6736A] bg-clip-text text-transparent">
//             Built to Grade-A standard, specified to perform.
//           </h2>

//           {/* Tabs */}
//           {/* Tabs */}
//           <div className="w-full flex justify-center">
//             {/* Mobile Dropdown View */}
//             <div ref={dropdownRef} className="relative block w-full md:hidden">
//               <button
//                 type="button"
//                 onClick={() => setIsDropdownOpen((prev) => !prev)}
//                 className="flex w-full items-center justify-between border border-[#e2ddd3] bg-white px-[21px] py-[11px] text-[15px] font-semibold text-[#3a3733] transition-all duration-200 hover:border-[#f56e6a] focus:border-[#f56e6a] focus:outline-none"
//               >
//                 <span>{activeTab}</span>

//                 <svg
//                   className={`h-5 w-5 transition-transform duration-300 ${
//                     isDropdownOpen ? "rotate-180" : ""
//                   }`}
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                   strokeWidth={2}
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     d="M19 9l-7 7-7-7"
//                   />
//                 </svg>
//               </button>

//               {isDropdownOpen && (
//                 <div className="absolute left-0 right-0 top-full z-50 mt-2 overflow-hidden rounded-md border border-[#e2ddd3] bg-white shadow-xl">
//                   {tabs.map((tab) => (
//                     <button
//                       key={tab}
//                       type="button"
//                       onClick={() => {
//                         setActiveTab(tab as Tab);
//                         setIsDropdownOpen(false);
//                       }}
//                       className={`w-full px-[21px] py-3 text-left text-[15px] font-semibold transition-colors duration-200 ${
//                         activeTab === tab
//                           ? "bg-[#f56e6a]/50 text-[#3a3733]"
//                           : "text-[#3a3733] hover:bg-[#f56e6a]/20"
//                       }`}
//                     >
//                       {tab}
//                     </button>
//                   ))}
//                 </div>
//               )}
//             </div>

//             {/* Desktop Button View */}
//             <div className="hidden md:flex flex-wrap justify-center gap-[10px]">
//               {tabs.map((tab) => {
//                 const isActive = tab === activeTab;
//                 return (
//                   <button
//                     key={tab}
//                     onClick={() => setActiveTab(tab)}
//                     className={`px-[21px] py-[10px] text-[15px] sm:text-[16px] font-semibold tracking-[-0.14px] transition-colors border ${
//                       isActive
//                         ? "bg-[#f56e6a] border-[#f56e6a] text-white"
//                         : "bg-white border-[#e2ddd3] text-[#3a3733] hover:border-[#f56e6a]"
//                     }`}
//                   >
//                     {tab}
//                   </button>
//                 );
//               })}
//             </div>
//           </div>
//         </div>

//         <motion.div
//           key={activeTab}
//           initial={{ opacity: 0, y: 12 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.4, ease: "easeOut" }}
//           className="w-full flex flex-col lg:flex-row gap-5 items-stretch"
//         >
//           {/* Image (Increased width to 680px) */}
//           <div className="rounded-2xl overflow-hidden bg-[#e4e4e4] w-full lg:w-[680px] shrink-0 h-[260px] sm:h-[360px] lg:h-[557px] relative">
//             <img
//               src="/park/builtto.jpg"
//               alt="Sahakar Logistics Park — warehouse interior"
//               className="absolute inset-0 w-full h-full object-cover"
//             />
//           </div>

//           {/* Table Container */}
//           <div className="flex-1 rounded-2xl overflow-hidden border border-[#d2d2d2]">
//             {/* Unequal column ratios: Specification takes 35%, Detail takes 65% */}
//             <div className="grid grid-cols-[35%_65%] h-full grid-auto-rows-fr">
//               {/* Header */}
//               <div className="bg-[#f56e6a] border-b border-r border-[#d2d2d2] flex items-center justify-center px-5 py-[15px]">
//                 <p className="text-white font-light text-[15px] lg:text-[18px] sm:text-[20px]">
//                   Specification
//                 </p>
//               </div>
//               <div className="bg-[#f56e6a] border-b border-[#d2d2d2] flex items-center justify-center px-5 py-[10px]">
//                 <p className="text-white font-light text-[15px] lg:text-[18px] sm:text-[20px]">
//                   Detail
//                 </p>
//               </div>

//               {/* Rows */}
//               {rows.map((row, i) => {
//                 const isLastRow = i === rows.length - 1;
//                 return (
//                   <div key={row.label} className="contents">
//                     {/* Specification Column (Lesser width) */}
//                     <div
//                       className={`border-r border-[#d2d2d2] flex items-center justify-center text-center px-4 py-[10px] ${
//                         !isLastRow ? "border-b" : ""
//                       } ${i % 2 === 1 ? "bg-[#f6f6f6]" : ""}`}
//                     >
//                       <p className="text-black font-light text-[14px] sm:text-[16px]">
//                         {row.label}
//                       </p>
//                     </div>
//                     {/* Detail Column (More width) */}
//                     <div
//                       className={`flex items-center justify-center text-center px-4 py-[10px] ${
//                         !isLastRow ? "border-b border-[#d2d2d2]" : ""
//                       } ${i % 2 === 1 ? "bg-[#f6f6f6]" : ""}`}
//                     >
//                       <p className="text-black font-light text-[14px] sm:text-[16px]">
//                         {row.value}
//                       </p>
//                     </div>
//                   </div>
//                 );
//               })}
//             </div>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// }

"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";

const tabs = [
  "Building Specifications",
  "Infrastructure & Utilities",
  "Smart & Safety",
] as const;
type Tab = (typeof tabs)[number];

interface InfraAccordionItem {
  id: number;
  title: string;
  description: React.ReactNode;
}

// Intro mapping definitions per tab selection
const tabIntros: Record<Tab, string> = {
  "Building Specifications": "Engineered for speed, safety, and scalability.",
  "Infrastructure & Utilities":
    "Reliable infrastructure for uninterrupted operations.",
  "Smart & Safety": "Secure, connected, and future-ready",
};

const specsByTab: Record<
  Exclude<Tab, "Infrastructure & Utilities">,
  { label: string; value: string }[]
> = {
  "Building Specifications": [
    { label: "Structure", value: "Pre-Engineered Buildings (PEB)" },
    { label: "Eave Height", value: "12 m clear" },
    { label: "Flooring", value: "FM-2, 5T/sqm load-bearing" },
    { label: "Roof", value: "Standing seam with insulation" },
    { label: "Plinth Height", value: "1.2 m" },
    { label: "Lighting", value: "150 Lux LED" },
    { label: "Ventilation", value: "Ridge ventilators, 6 air changes/hour" },
    { label: "Side Walls", value: "3.5 m RCC / lightweight wall panels" },
    { label: "Elevation", value: "Modern façade with optional glass paneling" },
    { label: "Solar Ready", value: "Standing seam provision for solar panels" },
  ],
  "Smart & Safety": [
    {
      label: "CCTV Surveillance",
      value: "Hi-resolution PTZ & IR cameras at gates",
    },
    {
      label: "Access Control",
      value: "Motorised sliding gate with boom barriers",
    },
    {
      label: "Visitor Management",
      value: "Digital visitor & gate management system",
    },
    {
      label: "EV Charging",
      value: "2 common charging points + future-ready infrastructure",
    },
    {
      label: "Admin Building",
      value: "RCC/PEB structure with facility management office",
    },
    {
      label: "Gate House",
      value: "RCC/PEB with glass paneling & access control",
    },
    {
      label: "Driver Rest Area",
      value: "RCC block with toilets & resting facilities",
    },
  ],
};

const infraAccordionData: InfraAccordionItem[] = [
  {
    id: 1,
    title: "Fire Fighting",
    description: (
      <ul className="list-disc pl-5 space-y-1">
        <li>High side: 5-pump system to FM Global standards</li>
        <li>Sprinkler system: K-115 standard</li>
        <li>Hydrant and fire alarm system</li>
        <li>Fire water storage in modular above-ground tanks</li>
      </ul>
    ),
  },
  {
    id: 2,
    title: "Electrical",
    description: (
      <ul className="list-disc pl-5 space-y-1">
        <li>Power requirement: 1,500 KVA (1.5 KVA/sqft for warehousing)</li>
        <li>Common facility load: 600 KVA connected, 500 KVA max demand</li>
        <li>DG backup: 100% for common facilities</li>
      </ul>
    ),
  },
  {
    id: 3,
    title: "Water & Waste Management",
    description: (
      <ul className="list-disc pl-5 space-y-1">
        <li>Source: Borewell / tanker with necessary liaison</li>
        <li>Storage: Modular above-ground tanks</li>
        <li>Treatment: Advanced water filtration system</li>
        <li>Availability: 24×7 water supply</li>
        <li>STP provided; recycled water used for flushing and landscaping</li>
      </ul>
    ),
  },
  {
    id: 4,
    title: "Sustainability",
    description: (
      <ul className="list-disc pl-5 space-y-1">
        <li>IGBC Platinum certification targeted</li>
        <li>Solar-ready roofing infrastructure</li>
        <li>Recycled water for all non-potable purposes</li>
        <li>Advanced filtration and on-site STP</li>
      </ul>
    ),
  },
];

export default function ParkSpecifications() {
  const [activeTab, setActiveTab] = useState<Tab>("Building Specifications");
  const [openAccordionId, setOpenAccordionId] = useState<number>(1);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const selectAccordion = (id: number) => {
    if (openAccordionId !== id) {
      setOpenAccordionId(id);
    }
  };

  return (
    <section className="bg-white">
      {/* <div className="fix py-[60px] lg:py-[80px] flex flex-col items-center"> */}
      <div className="fix pt-[60px] lg:py-[80px] flex flex-col items-center">
        <div className="flex flex-col items-center gap-[20px] lg:gap-[30px] mb-10 lg:mb-[50px] text-center w-full">
          <div className="flex justify-center items-center gap-[13px]">
            <span className="h-px w-7 bg-[#003b9d]" />
            <span className="text-[11px] font-semibold tracking-[3.36px] text-start uppercase text-[#003b9d]">
              Engineered to Specification
            </span>
          </div>
          <h2 className="font-bold leading-[1.1] tracking-[-1.568px] text-[26px] sm:text-[32px] lg:text-[40px] text-gradient-brand bg-gradient-to-r from-[#BF584F] to-[#F6736A] bg-clip-text text-transparent">
            Built to Grade-A standard, specified to perform.
          </h2>

          {/* Dynamic intro text placeholder assigned globally for all tabs */}
          <p className="text-[16px] lg:text-[20px] text-[#222] max-w-2xl leading-[140%] font-normal mt-2">
            {tabIntros[activeTab]}
          </p>

          <div className="w-full flex justify-center mt-2">
            {/* Mobile Dropdown View */}
            <div
              ref={dropdownRef}
              className="relative block w-full md:hidden max-w-sm"
            >
              <button
                type="button"
                onClick={() => setIsDropdownOpen((prev) => !prev)}
                className="flex w-full items-center justify-between border border-[#e2ddd3] bg-white px-[21px] py-[11px] text-[15px] font-semibold text-[#3a3733] transition-all duration-200 hover:border-[#f56e6a] focus:border-[#f56e6a] focus:outline-none"
              >
                <span>{activeTab}</span>
                <svg
                  className={`h-5 w-5 transition-transform duration-300 ${
                    isDropdownOpen ? "rotate-180" : ""
                  }`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {isDropdownOpen && (
                <div className="absolute left-0 right-0 top-full z-50 mt-2 overflow-hidden rounded-md border border-[#e2ddd3] bg-white shadow-xl">
                  {tabs.map((tab) => (
                    <button
                      key={tab}
                      type="button"
                      onClick={() => {
                        setActiveTab(tab);
                        setIsDropdownOpen(false);
                      }}
                      className={`w-full px-[21px] py-3 text-left text-[15px] font-semibold transition-colors duration-200 ${
                        activeTab === tab
                          ? "bg-[#f56e6a]/50 text-[#3a3733]"
                          : "text-[#3a3733] hover:bg-[#f56e6a]/20"
                      }`}
                    >
                      {tab}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Desktop Button View */}
            <div className="hidden md:flex flex-wrap justify-center gap-[10px]">
              {tabs.map((tab) => {
                const isActive = tab === activeTab;
                return (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-[21px] py-[10px] text-[15px] sm:text-[16px] font-semibold tracking-[-0.14px] transition-colors border ${
                      isActive
                        ? "bg-[#f56e6a] border-[#f56e6a] text-white"
                        : "bg-white border-[#e2ddd3] text-[#3a3733] hover:border-[#f56e6a]"
                    }`}
                  >
                    {tab}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="w-full flex flex-col lg:flex-row gap-5 items-stretch"
        >
          {/* Image Container Panel (Height locked to 557px) */}
          <div className="rounded-2xl overflow-hidden bg-[#e4e4e4] w-full lg:w-[680px] shrink-0 h-[260px] sm:h-[360px] lg:h-[557px] relative">
            <img
              src="/park/builtto.jpg"
              alt="Sahakar Logistics Park specifications"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          {/* Right Panel Block (Height locked explicitly to h-[557px] on all layout engines) */}
          {activeTab === "Infrastructure & Utilities" ? (
            /* Layout Mode: Accordion View */
            // <div className="flex-1 rounded-2xl p-6 sm:p-8 bg-white min-h-[555px] lg:h-[557px] overflow-y-auto">
            <div className="flex-1 rounded-2xl lg:p-8 bg-white min-h-[485px] lg:h-[560px] overflow-y-auto">
              <div className="w-full border-t border-neutral-200 flex flex-col">
                {infraAccordionData.map((item) => {
                  const isOpen = openAccordionId === item.id;

                  return (
                    <div
                      key={item.id}
                      className="border-b first:border-t first:border-t-transparent! last:border-b-0 border-neutral-200 w-full"
                    >
                      <button
                        type="button"
                        onClick={() => selectAccordion(item.id)}
                        className="w-full flex justify-between items-center py-5 text-left transition-colors duration-200 group focus:outline-none"
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

                      <div
                        className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${
                          isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                        }`}
                      >
                        <div className="overflow-hidden">
                          <div
                            className={`transition-opacity duration-300 ease-in-out pb-5 text-[15px] lg:text-[16px] leading-relaxed ${
                              isOpen ? "opacity-100" : "opacity-0"
                            }`}
                            style={{ color: "#54514C" }}
                          >
                            {/* CHANGE THIS ITEM BELOW: Make sure it does NOT contain lg:h-[88px] or fixed height tags */}
                            <p className="leading-relaxed text-[15px] lg:text-[18px] lg:w-[78%] font-normal">
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
          ) : (
            /* Layout Mode: Structured Table Grid */
            <div className="flex-1 rounded-2xl overflow-hidden border border-[#d2d2d2] bg-white lg:h-[557px] overflow-y-auto">
              <div className="grid grid-cols-[35%_65%] w-full h-full grid-auto-rows-fr">
                {/* Header */}
                <div className="bg-[#f56e6a] border-b border-r border-[#d2d2d2] flex items-center justify-center px-5 py-[15px]">
                  <p className="text-white font-light text-[15px] lg:text-[18px] sm:text-[20px]">
                    Specification
                  </p>
                </div>
                <div className="bg-[#f56e6a] border-b border-[#d2d2d2] flex items-center justify-center px-5 py-[10px]">
                  <p className="text-white font-light text-[15px] lg:text-[18px] sm:text-[20px]">
                    Detail
                  </p>
                </div>

                {/* Grid Rows Mapping */}
                {specsByTab[
                  activeTab as Exclude<Tab, "Infrastructure & Utilities">
                ].map((row, i, arr) => {
                  const isLastRow = i === arr.length - 1;
                  return (
                    <div key={row.label} className="contents">
                      <div
                        className={`border-r border-[#d2d2d2] flex items-center justify-center text-center px-4 py-[10px] ${
                          !isLastRow ? "border-b" : ""
                        } ${i % 2 === 1 ? "bg-[#f6f6f6]" : ""}`}
                      >
                        <p className="text-black font-light text-[14px] sm:text-[16px]">
                          {row.label}
                        </p>
                      </div>
                      <div
                        className={`flex items-center justify-center text-center px-4 py-[10px] ${
                          !isLastRow ? "border-b border-[#d2d2d2]" : ""
                        } ${i % 2 === 1 ? "bg-[#f6f6f6]" : ""}`}
                      >
                        <p className="text-black font-light text-[14px] sm:text-[16px]">
                          {row.value}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
