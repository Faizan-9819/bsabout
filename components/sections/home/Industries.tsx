// "use client";

// import { motion } from "framer-motion";
// import { ArrowUpRight } from "lucide-react";

// const imgLogistics = "/ind.webp";
// const imgManufacturing = "/ind1.webp";
// const imgIndustrialPark = "/ind2.webp";
// const imgICD = "/ind3.webp";
// const imgDataCentres = "/ind5.webp";
// const imgLandDev = "/ind4.webp";

// const industries = [
//   {
//     num: "01",
//     title: "Logistics & Distribution",
//     desc: "Large-format warehousing and distribution hubs engineered for modern supply chain efficiency.",
//     img: imgLogistics,
//     col: "lg:col-span-2",
//     row: "lg:row-span-2",
//   },
//   {
//     num: "02",
//     title: "Manufacturing",
//     desc: "Plug-and-play manufacturing facilities with heavy-power infrastructure and flexible bay configurations.",
//     img: imgManufacturing,
//     col: "lg:col-span-2",
//     row: "lg:row-span-1",
//   },
//   {
//     num: "03",
//     title: "Industrial Parks",
//     desc: "Integrated industrial campuses with shared utilities, security, and common amenities.",
//     img: imgIndustrialPark,
//     col: "lg:col-span-1",
//     row: "lg:row-span-1",
//   },
//   {
//     num: "04",
//     title: "ICD & Freight Infrastructure",
//     desc: "Inland container depots and multimodal freight facilities connecting road, rail, and port networks.",
//     img: imgICD,
//     col: "lg:col-span-1",
//     row: "lg:row-span-1",
//   },
//   {
//     num: "05",
//     title: "Data Centres",
//     desc: "Carrier-neutral colocation and hyperscale data centre facilities in strategic Tier-2 and Tier-3 markets.",
//     img: imgDataCentres,
//     col: "lg:col-span-2",
//     row: "lg:row-span-1",
//   },
//   {
//     num: "06",
//     title: "Land Development",
//     desc: "Unlocking raw land value through strategic acquisition, rezoning, and masterplanned development.",
//     img: imgLandDev,
//     col: "lg:col-span-2",
//     row: "lg:row-span-1",
//   },
// ];

// const cardVariant = {
//   hidden: { opacity: 0, y: 28 },
//   show: (i: number) => ({
//     opacity: 1,
//     y: 0,
//     transition: { delay: i * 0.09, duration: 0.6, ease: "easeOut" as const },
//   }),
// };

// function IndustryCard({
//   industry,
//   index,
// }: {
//   industry: (typeof industries)[0];
//   index: number;
// }) {
//   return (
//     <motion.div
//       variants={cardVariant}
//       custom={index}
//       initial="hidden"
//       whileInView="show"
//       viewport={{ once: true, margin: "-60px" }}
//       className={`group relative overflow-hidden rounded-3xl min-h-[260px] lg:min-h-[270px] ${industry.col} ${industry.row}`}
//     >
//       {/* Background image */}
//       <img
//         src={industry.img}
//         alt={industry.title}
//         className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
//       />

//       {/* Dark gradient overlay */}
//       {/* <div
//         className="absolute inset-0"
//         style={{
//           background:
//             "linear-gradient(180deg, rgba(0,0,0,0.08) 0%, rgba(10,10,10,0.35) 45%, rgba(10,10,10,0.82) 100%)",
//         }}
//       /> */}

//       {/* Content */}
//       <div className="absolute inset-0 flex flex-col justify-between p-6 lg:p-8">
//         {/* Number + arrow */}
//         <div className="flex items-start justify-between">
//           <span
//             className="text-white/40 font-normal leading-none"
//             style={{ fontSize: "clamp(13px, 1.1vw, 15px)" }}
//           >
//             {industry.num}
//           </span>
//           <span className="w-9 h-9 rounded-full border border-white/25 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//             <ArrowUpRight size={14} strokeWidth={2} className="text-white" />
//           </span>
//         </div>

//         {/* Title + desc */}
//         <div>
//           <h3
//             className="text-white font-semibold leading-[1.22] tracking-[-0.4px] mb-2"
//             style={{ fontSize: "clamp(17px, 1.6vw, 24px)" }}
//           >
//             {industry.title}
//           </h3>
//           <p className="text-white/60 text-[13px] leading-[1.55] max-w-[380px] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//             {industry.desc}
//           </p>
//         </div>
//       </div>
//     </motion.div>
//   );
// }

// export default function Industries() {
//   return (
//     <section id="industries" className="bg-white py-[80px] lg:py-[100px]">
//       <div className="fix">
//         {/* Header */}
//         <motion.div
//           initial={{ opacity: 0, y: 24 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, margin: "-60px" }}
//           transition={{ duration: 0.6, ease: "easeOut" }}
//           className="flex flex-col items-center text-center gap-4 mb-12 lg:mb-14"
//         >
//           <div className="eyebrow text-[#003b9d]">Industries We Serve</div>
//           <h2
//             className="font-bold text-[#120500] leading-[1.1] tracking-[-1.2px] max-w-[760px]"
//             style={{ fontSize: "clamp(24px, 3vw, 43px)" }}
//           >
//             Industrial and logistics infrastructure designed around operational
//             needs.
//           </h2>
//         </motion.div>

//         {/* Grid — 4 cols on desktop */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 auto-rows-[280px] lg:auto-rows-[300px] gap-3">
//           {industries.map((ind, i) => (
//             <IndustryCard key={ind.num} industry={ind} index={i} />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
const imgLogistics = "/ind.webp";
const imgManufacturing = "/ind1.webp";
const imgIndustrialPark = "/ind2.webp";
const imgICD = "/ind3.webp";
const imgDataCentres = "/ind5.webp";
const imgLandDev = "/ind4.webp";

const industries = [
  {
    num: "01",
    title: "Logistics & Distribution",
    desc: "Large-format warehousing and distribution hubs engineered for modern supply chain efficiency.",
    img: imgLogistics,
  },
  {
    num: "02",
    title: "Manufacturing",
    desc: "Plug-and-play manufacturing facilities with heavy-power infrastructure and flexible bay configurations.",
    img: imgManufacturing,
  },
  {
    num: "03",
    title: "Industrial Parks",
    desc: "Integrated industrial campuses with shared utilities, security, and common amenities.",
    img: imgIndustrialPark,
  },
  {
    num: "04",
    title: "ICD & Freight Infrastructure",
    desc: "Inland container depots and multimodal freight facilities connecting road, rail, and port networks.",
    img: imgICD,
  },
  {
    num: "05",
    title: "Data Centres",
    desc: "Carrier-neutral colocation and hyperscale data centre facilities in strategic Tier-2 and Tier-3 markets.",
    img: imgDataCentres,
  },
  {
    num: "06",
    title: "Land Development",
    desc: "Unlocking raw land value through strategic acquisition, rezoning, and masterplanned development.",
    img: imgLandDev,
  },
];

const cardVariant = {
  hidden: { opacity: 0, y: 28 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.09, duration: 0.6, ease: "easeOut" as const },
  }),
};

// function IndustryCard({
//   industry,
//   index,
//   className = "",
// }: {
//   industry: (typeof industries)[0];
//   index: number;
//   className?: string;
// }) {
//   return (
//     <motion.div
//       variants={cardVariant}
//       custom={index}
//       initial="hidden"
//       whileInView="show"
//       viewport={{ once: true, margin: "-60px" }}
//       className={`group relative overflow-hidden rounded-3xl ${className}`}
//     >
//       {/* Background image */}
//       <img
//         src={industry.img}
//         alt={industry.title}
//         className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
//       />

//       {/* Dark gradient overlay */}
//       <div
//         className="absolute inset-0"
//         style={{
//           background:
//             "linear-gradient(180deg, rgba(0,0,0,0.08) 0%, rgba(0,0,0,0.25) 50%, rgba(0,0,0,0.65) 100%)",
//         }}
//       />

//       {/* Content */}
//       <div className="absolute inset-0 flex flex-col justify-between p-5 lg:p-6">
//         {/* Number + arrow */}
//         <div className="flex items-start justify-between">
//           <span className="text-white/40 font-medium text-[12px] leading-none">
//             {industry.num}
//           </span>
//           <span className="w-9 h-9 rounded-full border border-white/25 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//             <ArrowUpRight size={14} strokeWidth={2} className="text-white" />
//           </span>
//         </div>

//         {/* Title + desc */}
//         <div>
//           <h3
//             className="text-white font-bold leading-[1.2] tracking-[-0.4px] mb-2"
//             style={{ fontSize: "clamp(16px, 1.5vw, 22px)" }}
//           >
//             {industry.title}
//           </h3>
//           <p className="text-white/60 text-[13px] leading-[1.55] max-w-[380px] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//             {industry.desc}
//           </p>
//         </div>
//       </div>
//     </motion.div>
//   );
// }

function IndustryCard({
  industry,
  index,
  className = "",
  isMobile = false, // 💡 Add this new optional boolean flag
}: {
  industry: (typeof industries)[0];
  index: number;
  className?: string;
  isMobile?: boolean; // 💡 Add typing support for it
}) {
  return (
    <motion.div
      // 💡 If it's mobile, we bypass variants, initial, whileInView, and viewport entirely!
      variants={isMobile ? undefined : cardVariant}
      custom={index}
      initial={isMobile ? undefined : "hidden"}
      whileInView={isMobile ? undefined : "show"}
      viewport={isMobile ? undefined : { once: true, margin: "-60px" }}
      className={`group relative overflow-hidden rounded-3xl ${className}`}
    >
      {/* Background image */}
      <img
        src={industry.img}
        alt={industry.title}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
      />

      {/* Dark gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(0,0,0,0.08) 0%, rgba(0,0,0,0.25) 50%, rgba(0,0,0,0.65) 100%)",
        }}
      />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-between p-5 lg:p-6">
        {/* Number + arrow */}
        <div className="flex items-start justify-between">
          <span className="text-white/40 font-medium text-[12px] leading-none">
            {industry.num}
          </span>
          <span className="w-9 h-9 rounded-full border border-white/25 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <ArrowUpRight size={14} strokeWidth={2} className="text-white" />
          </span>
        </div>

        {/* Title + desc */}
        <div>
          <h3
            className="text-white font-bold leading-[1.2] tracking-[-0.4px] mb-2"
            style={{ fontSize: "clamp(16px, 1.5vw, 22px)" }}
          >
            {industry.title}
          </h3>
          <p className="text-white/60 text-[13px] leading-[1.55] max-w-[380px] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {industry.desc}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default function Industries() {
  const [indStart, setIndStart] = useState(0);

  const handlePrev = () => {
    setIndStart((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setIndStart((prev) => Math.min(industries.length - 1, prev + 1));
  };
  return (
    <section id="industries" className="bg-white py-[50px] lg:py-[100px]">
      <div className="fix">
        {/* Header */}
        {/* <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col items-center text-center gap-4 mb-12 lg:mb-14"
        >
          <div className="eyebrow text-[#003B9D]">Industries We Serve</div>
          <h2
            className="font-bold text-[#E27244] leading-[110%] tracking-[-1.5px] max-w-[760px]"
            style={{ fontSize: "clamp(24px, 3vw, 43px)" }}
          >
            Industrial and logistics infrastructure designed around operational
            needs.
          </h2>
        </motion.div> */}

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          // 💡 Kept desktop text alignment & gaps, but adjusted margin-bottom for a cleaner look on mobile (`mb-8 md:mb-12 lg:mb-14`)
          className="flex flex-col items-center gap-[24px]  mb-8 md:mb-12 lg:mb-14"
        >
          <div className="eyebrow text-[#003B9D]">Industries We Serve</div>
          <h2
            // 💡 Modified `tracking-[-0.5px] md:tracking-[-1.5px]`
            // This removes the severe letter-spacing squeeze on mobile screens but retains your exact desktop look.
            className="font-bold bg-gradient-to-r from-[rgba(191,88,79,1)] to-[rgba(246,115,106,1)] bg-clip-text text-transparent text-center  leading-[110%] tracking-[-0.5px] md:tracking-[-1.5px] md:px-0"
            style={{ fontSize: "clamp(24px, 3vw, 40px)" }}
          >
            Industrial and logistics infrastructure <br /> designed around
            operational needs.
          </h2>
          <p className="text-center text-[18px] text-[#54514C] ">
            Every industry requires a different infrastructure strategy. From
            logistics and <br /> manufacturing to freight, industrial parks, and
            strategic land development, BuildSpace <br /> creates environments
            aligned with operational realities and long-term growth.
          </p>
        </motion.div>

        {/* ── MOBILE / TABLET: single column stack ── */}
        {/* <div className="flex flex-col gap-3 lg:hidden">
          {industries.map((ind, i) => (
            <IndustryCard
              key={ind.num}
              industry={ind}
              index={i}
              className="h-[240px] text-[28px]! sm:h-[260px]"
            />
          ))}
        </div> */}

        <div className="block lg:hidden w-full">
          {/* ─── CAROUSEL TRACK ────────────────────────────────────────────────── */}
          <div className="overflow-hidden w-full">
            <motion.div
              animate={{ x: `calc(-${indStart} * (100% + 24px))` }}
              transition={{ type: "spring", stiffness: 280, damping: 30 }}
              className="flex gap-[24px] w-full"
            >
              {industries.map((ind, i) => (
                <div
                  key={`mobile-ind-${ind.num}`}
                  className="w-full min-w-full flex-shrink-0"
                >
                  <IndustryCard
                    industry={ind}
                    index={i}
                    isMobile={true} // 👈 Pass this flag right here!
                    className="h-[240px] text-[28px]! sm:h-[260px] w-full"
                  />
                </div>
              ))}
            </motion.div>
          </div>

          {/* ─── CONTROLS & PAGINATION ─────────────────────────────────────────── */}
          <div className="flex items-center justify-between mt-6 px-1">
            {/* Pagination Dots Indicator */}
            <div className="flex items-center gap-2">
              {industries.map((_, idx) => (
                <button
                  key={`dot-${idx}`}
                  onClick={() => setIndStart(idx)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    idx === indStart ? "w-6 bg-[#e27244]" : "w-2 bg-[#ece8e0]"
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            {/* Navigation Action Buttons */}
            <div className="flex items-center gap-2">
              <button
                onClick={handlePrev}
                disabled={indStart === 0}
                className="w-11 h-11 rounded-full border border-[#ece8e0] bg-white flex items-center justify-center text-[#54514c] transition-colors hover:bg-gray-50 disabled:opacity-30 disabled:pointer-events-none"
              >
                <ChevronLeft size={18} strokeWidth={2} />
              </button>
              <button
                onClick={handleNext}
                disabled={indStart === industries.length - 1}
                className="w-11 h-11 rounded-full border border-[#ece8e0] bg-white flex items-center justify-center text-[#54514c] transition-colors hover:bg-gray-50 disabled:opacity-30 disabled:pointer-events-none"
              >
                <ChevronRight size={18} strokeWidth={2} />
              </button>
            </div>
          </div>
        </div>

        {/* ── DESKTOP: nested-flex masonry ── */}
        <div className="hidden lg:flex flex-col gap-3">
          {/* Row 1 */}
          <div className="flex gap-3" style={{ height: "400px" }}>
            {/* Left: Logistics — ~49% */}
            <div style={{ flex: "0 0 49.5%" }}>
              <IndustryCard
                industry={industries[0]}
                index={0}
                className="h-full"
              />
            </div>

            {/* Right stack — ~51% */}
            <div
              className="flex flex-col gap-3"
              style={{ flex: "0 0 calc(49.5% - 12px)" }}
            >
              {/* Manufacturing — full width of right, ~170px */}
              <div style={{ height: "170px" }}>
                <IndustryCard
                  industry={industries[1]}
                  index={1}
                  className="h-full"
                />
              </div>

              {/* Industrial Parks + ICD — equal halves, remaining height */}
              <div className="flex gap-3" style={{ flex: 1 }}>
                <div style={{ flex: 1 }}>
                  <IndustryCard
                    industry={industries[2]}
                    index={2}
                    className="h-full"
                  />
                </div>
                <div style={{ flex: 1 }}>
                  <IndustryCard
                    industry={industries[3]}
                    index={3}
                    className="h-full"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Row 2: Data Centres + Land Development — equal halves, ~165px */}
          <div className="flex gap-3" style={{ height: "190px" }}>
            <div style={{ flex: 1 }}>
              <IndustryCard
                industry={industries[4]}
                index={4}
                className="h-full"
              />
            </div>
            <div style={{ flex: 1 }}>
              <IndustryCard
                industry={industries[5]}
                index={5}
                className="h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
