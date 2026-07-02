// "use client";

// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { ArrowLeft, ArrowRight } from "lucide-react";

// const workerImg =
//   "https://www.figma.com/api/mcp/asset/9f2c7ce7-3a74-4a24-8f56-723c60d3867c";

// const stages = [
//   {
//     num: "01",
//     title: "Land Identification & Feasibility",
//     desc: "Strategic site selection using demand mapping, infrastructure proximity analysis, and regulatory pre-checks to identify high-value development opportunities.",
//   },
//   {
//     num: "02",
//     title: "Master Planning & Design",
//     desc: "Comprehensive masterplanning that balances operational efficiency, scalability, and future-proofing across mixed-use industrial and logistics environments.",
//   },
//   {
//     num: "03",
//     title: "Approvals & Compliance",
//     desc: "End-to-end management of statutory approvals, environmental clearances, and regulatory filings to de-risk development timelines.",
//   },
//   {
//     num: "04",
//     title: "Engineering & Development",
//     desc: "Detailed engineering, value engineering, and technical delivery across civil, structural, MEP, and ancillary infrastructure systems.",
//   },
//   {
//     num: "05",
//     title: "Construction & Handover",
//     desc: "Project management of construction, quality assurance, safety systems, and structured handover with operational readiness validation.",
//   },
//   {
//     num: "06",
//     title: "Marketing & Leasing",
//     desc: "Demand origination, tenant mix optimisation, and long-form lease structuring to maximise occupancy, rental yield, and tenant retention.",
//   },
//   {
//     num: "07",
//     title: "Asset Management & Value Creation",
//     desc: "Ongoing property management, capital expenditure planning, and portfolio-level value creation to sustain and grow asset performance over time.",
//   },
// ];

// const fadeUp = {
//   hidden: { opacity: 0, y: 24 },
//   show: (i: number) => ({
//     opacity: 1,
//     y: 0,
//     transition: { delay: i * 0.08, duration: 0.6, ease: "easeOut" as const },
//   }),
// };

// export default function FullLifecycleApproach() {
//   const [activeStage, setActiveStage] = useState(6);

//   return (
//     <section
//       id="lifecycle"
//       className="relative bg-[url('/home/footer/bsfbg.webp')] bg-cover bg-center bg-no-repeat overflow-hidden py-[80px] lg:py-[100px]"
//     >
//       <div className="fix">
//         {/* Header */}
//         <motion.div
//           variants={fadeUp}
//           custom={0}
//           initial="hidden"
//           whileInView="show"
//           viewport={{ once: true, margin: "-60px" }}
//           className="mb-12 lg:mb-16 max-w-[840px]"
//         >
//           <div className="eyebrow text-white/60 mb-5">
//             Full Lifecycle Approach
//           </div>
//           <h2
//             className="font-bold text-white leading-[1.07] tracking-[-1.3px]"
//             style={{ fontSize: "clamp(26px, 3.5vw, 48px)" }}
//           >
//             Partnering with occupiers, landowners & investors across the entire
//             asset lifecycle
//           </h2>
//         </motion.div>

//         {/* Two-column layout */}
//         <div className="flex flex-col lg:grid lg:grid-cols-[1fr_1fr] gap-12 lg:gap-20 items-start">
//           {/* Left — sticky image card */}
//           <motion.div
//             variants={fadeUp}
//             custom={1}
//             initial="hidden"
//             whileInView="show"
//             viewport={{ once: true }}
//             className="lg:sticky lg:top-[100px] flex flex-col gap-6"
//           >
//             {/* Photo card */}
//             <div
//               className="relative overflow-hidden"
//               style={{ aspectRatio: "4/5" }}
//             >
//               <img
//                 src={workerImg}
//                 alt="BuildSpace lifecycle"
//                 className="w-full h-full object-cover"
//               />
//               {/* Overlay gradient */}
//               <div
//                 className="absolute inset-0"
//                 style={{
//                   background:
//                     "linear-gradient(180deg, rgba(0,27,73,0) 40%, rgba(0,27,73,0.72) 100%)",
//                 }}
//               />
//               {/* Active stage description overlay */}
//               <AnimatePresence mode="wait">
//                 <motion.div
//                   key={activeStage}
//                   initial={{ opacity: 0, y: 12 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   exit={{ opacity: 0, y: -8 }}
//                   transition={{ duration: 0.3, ease: "easeOut" }}
//                   className="absolute bottom-0 left-0 right-0 p-6"
//                 >
//                   <p className="text-white/50 text-[11px] font-semibold tracking-[2px] uppercase mb-2">
//                     Stage {stages[activeStage].num}
//                   </p>
//                   <h3
//                     className="text-white font-semibold leading-[1.25] mb-3"
//                     style={{ fontSize: "clamp(15px, 1.4vw, 20px)" }}
//                   >
//                     {stages[activeStage].title}
//                   </h3>
//                   <p className="text-white/70 text-[13px] leading-[1.55]">
//                     {stages[activeStage].desc}
//                   </p>
//                 </motion.div>
//               </AnimatePresence>
//             </div>
//           </motion.div>

//           {/* Right — stage list */}
//           <motion.div
//             variants={fadeUp}
//             custom={2}
//             initial="hidden"
//             whileInView="show"
//             viewport={{ once: true }}
//             className="flex flex-col gap-0"
//           >
//             {stages.map((stage, i) => {
//               const isActive = activeStage === i;
//               return (
//                 <motion.button
//                   key={stage.num}
//                   onClick={() => setActiveStage(i)}
//                   initial={{ opacity: 0, x: 20 }}
//                   whileInView={{ opacity: 1, x: 0 }}
//                   viewport={{ once: true }}
//                   transition={{
//                     delay: 0.15 + i * 0.07,
//                     duration: 0.5,
//                     ease: "easeOut",
//                   }}
//                   className={`group relative w-full text-left flex items-center justify-start gap-5 px-6.5 py-12 transition-all duration-300 ${
//                     isActive
//                       ? "bg-[rgba(255,255,255,0.12)] border-l-2 border-[#e27244]"
//                       : "border-l-2 border-white/10 hover:border-white/30 hover:bg-white/5"
//                   }`}
//                 >
//                   {/* Circle icon */}
//                   <span
//                     className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center border transition-colors duration-300 ${
//                       isActive
//                         ? "border-[#e27244] bg-[#fff]"
//                         : "border-white/25 group-hover:border-white/50"
//                     }`}
//                   >
//                     <ArrowLeft
//                       size={34}
//                       strokeWidth={0.8}
//                       className={`transition-colors duration-300 ${
//                         isActive ? "text-[#e27244]" : "text-white/50"
//                       }`}
//                     />
//                   </span>

//                   {/* Stage name */}
//                   <span
//                     className={`flex-1 font-medium leading-[1.3] text-center text-[25px] transition-colors duration-300 ${
//                       isActive
//                         ? "text-white"
//                         : "text-white/55 group-hover:text-white/80"
//                     }`}
//                   >
//                     {stage.title}
//                   </span>

//                   {/* Stage number */}
//                   <span
//                     style={{ color: "white" }}
//                     className="text-[25px] font-thin tracking-[1.5px] shrink-0 transition-colors duration-300 text-white!"
//                   >
//                     {stage.num}
//                   </span>
//                 </motion.button>
//               );
//             })}
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// }

// "use client";

// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { ArrowLeft, ArrowUpRight } from "lucide-react";

// const workerImg =
//   "https://www.figma.com/api/mcp/asset/9f2c7ce7-3a74-4a24-8f56-723c60d3867c";

// const stages = [
//   {
//     num: "01",
//     title: "Land Identification & Feasibility",
//     desc: "Corridor and catchment analysis, parcel due diligence, and infrastructure proximity scoring to establish what a site can become.",
//     strategicValue:
//       "De-risks the location decision before capital is committed.",
//   },
//   {
//     num: "02",
//     title: " Master Planning & Design",
//     desc: "Highest-use planning, parcelisation, utility envelope, and circulation design built around operational reality and future expansion.",
//     strategicValue: "Plans the asset around performance, not just footprint.",
//   },
//   {
//     num: "03",
//     title: "Approvals & Compliance",
//     desc: "Zoning, environmental, and statutory clearances managed proactively through a live compliance matrix, run parallel to engineering.",
//     strategicValue:
//       "Stops approvals from becoming the critical-path bottleneck.",
//   },
//   {
//     num: "04",
//     title: "Engineering & Development",
//     desc: "Civil, structural, MEP, and external infrastructure packages coordinated under a single development framework.",
//     strategicValue:
//       "Builds constructibility and scalability in from the start.",
//   },
//   {
//     num: "05",
//     title: "Construction & Handover",
//     desc: "Multi-contractor execution coordinated under integrated development management, built to spec, time, and budget.",
//     strategicValue:
//       "One partner owns the outcome, not just a construction scope.",
//   },
//   {
//     num: "06",
//     title: "Marketing & Leasing",
//     desc: "Positioning the developed asset within its corridor and attracting credible, long-term occupiers aligned to its performance.",
//     strategicValue: " Converts a built asset into a performing one.",
//   },
//   {
//     num: "07",
//     title: "Asset Management & Value Creation",
//     desc: "Supporting long-term asset performance through optimisation, lifecycle planning, and strategic asset stewardship.",
//     strategicValue: "Sustains and compounds returns over time.",
//   },
// ];

// const fadeUp = {
//   hidden: { opacity: 0, y: 24 },
//   show: (i: number) => ({
//     opacity: 1,
//     y: 0,
//     transition: { delay: i * 0.08, duration: 0.6, ease: "easeOut" as const },
//   }),
// };

// export default function FullLifecycleApproach() {
//   const [activeStage, setActiveStage] = useState(0);

//   return (
//     <section
//       id="lifecycle"
//       className="relative bg-[url('/home/footer/bsfbg.webp')] bg-cover bg-center bg-no-repeat overflow-hidden py-[80px] lg:py-[100px] text-white "
//     >
//       <div className="fix">
//         {/* Header Block with CTA Button */}
//         <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-12 lg:mb-16">
//           <motion.div
//             variants={fadeUp}
//             custom={0}
//             initial="hidden"
//             whileInView="show"
//             viewport={{ once: true, margin: "-60px" }}
//             className="max-w-[840px]"
//           >
//             <div className="text-[11px] font-semibold tracking-[2px] uppercase text-white/60 mb-3">
//               ONE DEVELOPMENT PLATFORM. THREE STAKEHOLDER JOURNEYS.
//             </div>
//             <h2
//               className="font-bold text-white leading-[1.1] tracking-[-1.3px]"
//               style={{ fontSize: "clamp(28px, 3.8vw, 44px)" }}
//             >
//               Partnering with occupiers, landowners & investors across the
//               entire asset lifecycle
//             </h2>
//           </motion.div>

//           {/* Top Right Action Button */}
//           <motion.button
//             variants={fadeUp}
//             custom={0.5}
//             initial="hidden"
//             whileInView="show"
//             viewport={{ once: true }}
//             className="flex items-center gap-2 px-5 py-2.5 bg-white/10 hover:bg-white/20 transition-all border border-white/20 rounded-sm text-[12px] font-medium tracking-[0.5px] uppercase shrink-0"
//           >
//             <span className="pr-3 text-white"> Explore Our Approach </span>
//             <ArrowUpRight
//               className="bg-white text-[#D86356]"
//               size={26}
//               strokeWidth={0.8}
//               // stroke="1"
//             />
//           </motion.button>
//         </div>

//         {/* Two-column layout */}
//         <div className="flex flex-col lg:flex-row items-start gap-10 lg:gap-12">
//           {/* Left Column — Sticky Smaller Image & External Content below it */}
//           <motion.div
//             variants={fadeUp}
//             custom={1}
//             initial="hidden"
//             whileInView="show"
//             viewport={{ once: true }}
//             className="lg:sticky lg:top-[120px] flex flex-col gap-6 w-full max-w-[620px]"
//           >
//             {/* Image Container (Smaller size) */}
//             <div className="relative rounded-2xl overflow-hidden aspect-[4/3] w-full bg-black/20">
//               <img
//                 src={workerImg}
//                 alt="BuildSpace lifecycle"
//                 className="w-full h-full object-cover"
//               />
//               {/* Discrete indicator badge bottom-left */}
//               <div className="absolute bottom-4 left-4 text-[9px] font-mono tracking-widest text-white uppercase">
//                 <span className="text-[#DA655B]">
//                   {" "}
//                   {stages[activeStage].num}
//                 </span>{" "}
//                 {stages[activeStage].title}
//               </div>
//             </div>

//             {/* Content BELOW the image */}
//             <AnimatePresence mode="wait">
//               <motion.div
//                 key={activeStage}
//                 initial={{ opacity: 0, y: 10 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 exit={{ opacity: 0, y: -10 }}
//                 transition={{ duration: 0.25, ease: "easeOut" }}
//                 className="flex flex-col gap-3 pt-2"
//               >
//                 <p className="text-white/70 text-[18px] font-thin leading-[1.6]">
//                   {stages[activeStage].desc}
//                 </p>
//                 {stages[activeStage].strategicValue && (
//                   <div className="text-[12px] mt-2 flex gap-2 items-start">
//                     <span className="font-semibold tracking-wider text-[11px] text-white uppercase shrink-0 pt-[2px]">
//                       Strategic Value:
//                     </span>
//                     <span className="text-white/90">
//                       {stages[activeStage].strategicValue}
//                     </span>
//                   </div>
//                 )}
//               </motion.div>
//             </AnimatePresence>
//           </motion.div>

//           {/* Right Column — Stage Accordion List */}
//           <motion.div
//             variants={fadeUp}
//             custom={2}
//             initial="hidden"
//             whileInView="show"
//             viewport={{ once: true }}
//             className="flex flex-col w-full mrcont border-t border-white/10"
//           >
//             {stages.map((stage, i) => {
//               const isActive = activeStage === i;
//               return (
//                 <button
//                   key={stage.num}
//                   onClick={() => setActiveStage(i)}
//                   className={`group relative w-full flex items-center justify-between px-2 lg:px-6.5 gap-6 py-4 lg:py-6 border-b transition-all duration-300 ${
//                     isActive
//                       ? "bg-white/10 px-6 border-white/40"
//                       : "border-white/10 hover:bg-white/5"
//                   }`}
//                 >
//                   {/* Left Side: Indicator Circle & Title */}

//                   <span
//                     className={`flex-shrink-0 lg:w-12 lg:h-12 h-9 w-9 rounded-full flex items-center justify-center border transition-all duration-300 ${
//                       isActive
//                         ? "border-white bg-white"
//                         : "border-white/20 group-hover:border-white/40"
//                     }`}
//                   >
//                     <ArrowLeft
//                       size={34}
//                       strokeWidth={0.8}
//                       className={`transition-colors duration-300 ${
//                         isActive ? "text-[#e27244]" : "text-white/50"
//                       }`}
//                     />
//                   </span>

//                   <span
//                     className={`font-medium text-[14px] lg:text-[18px] text-center md:text-[20px] transition-colors duration-300 ${
//                       isActive
//                         ? "text-white"
//                         : "text-white/60 group-hover:text-white/90"
//                     }`}
//                   >
//                     {stage.title}
//                   </span>

//                   {/* Right Side: Stage Number */}
//                   <span
//                     className={`text-[18px] font-mono lg:pr-[26px] tracking-wider transition-colors duration-300 ${
//                       isActive ? "text-white font-normal" : "text-white/40"
//                     }`}
//                   >
//                     {stage.num}
//                   </span>
//                 </button>
//               );
//             })}
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

const workerImg =
  "https://www.figma.com/api/mcp/asset/9f2c7ce7-3a74-4a24-8f56-723c60d3867c";

const stages = [
  {
    num: "01",
    title: "Land Identification & Feasibility",
    desc: "Corridor and catchment analysis, parcel due diligence, and infrastructure proximity scoring to establish what a site can become.",
    strategicValue:
      "De-risks the location decision before capital is committed.",
  },
  {
    num: "02",
    title: "Master Planning & Design",
    desc: "Highest-use planning, parcelisation, utility envelope, and circulation design built around operational reality and future expansion.",
    strategicValue: "Plans the asset around performance, not just footprint.",
  },
  {
    num: "03",
    title: "Approvals & Compliance",
    desc: "Zoning, environmental, and statutory clearances managed proactively through a live compliance matrix, run parallel to engineering.",
    strategicValue:
      "Stops approvals from becoming the critical-path bottleneck.",
  },
  {
    num: "04",
    title: "Engineering & Development",
    desc: "Civil, structural, MEP, and external infrastructure packages coordinated under a single development framework.",
    strategicValue:
      "Builds constructibility and scalability in from the start.",
  },
  {
    num: "05",
    title: "Construction & Handover",
    desc: "Multi-contractor execution coordinated under integrated development management, built to spec, time, and budget.",
    strategicValue:
      "One partner owns the outcome, not just a construction scope.",
  },
  {
    num: "06",
    title: "Marketing & Leasing",
    desc: "Positioning the developed asset within its corridor and attracting credible, long-term occupiers aligned to its performance.",
    strategicValue: "Converts a built asset into a performing one.",
  },
  {
    num: "07",
    title: "Asset Management & Value Creation",
    desc: "Supporting long-term asset performance through optimisation, lifecycle planning, and strategic asset stewardship.",
    strategicValue: "Sustains and compounds returns over time.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.6, ease: "easeOut" as const },
  }),
};

export default function FullLifecycleApproach() {
  const [activeStage, setActiveStage] = useState(0);

  // One ref per stage row — IntersectionObserver watches these
  const rowRefs = useRef<(HTMLDivElement | null)[]>([]);
  // Track which indices are currently intersecting so we can always
  // resolve to the topmost one (handles fast upward scrolls cleanly)
  const visibleIndices = useRef<Set<number>>(new Set());

  const setRowRef = useCallback(
    (i: number) => (el: HTMLDivElement | null) => {
      rowRefs.current[i] = el;
    },
    [],
  );

  useEffect(() => {
    // rootMargin pushes the activation zone to 40–45 % from the top,
    // meaning a row fires when its top edge crosses just past the mid-screen
    // band — exactly like Apple / Stripe editorial pages.
    //
    //   top:    -45vh  → only elements whose top is above 45 % qualify
    //   bottom: -45vh  → only elements whose bottom is above 55 % qualify
    //
    // Net effect: the centre of the row must sit inside the middle 10 % band
    // of the viewport. Widen the band (e.g. -40 % / -40 %) for easier firing.
    const observer = new IntersectionObserver(
      (entries) => {
        let changed = false;

        entries.forEach((entry) => {
          const idx = Number((entry.target as HTMLElement).dataset.index);
          if (entry.isIntersecting) {
            visibleIndices.current.add(idx);
            changed = true;
          } else {
            if (visibleIndices.current.has(idx)) {
              visibleIndices.current.delete(idx);
              changed = true;
            }
          }
        });

        if (!changed) return;

        if (visibleIndices.current.size === 0) return; // no row in band — keep last active

        // Topmost visible index wins — guarantees correct upward-scroll reversal
        const next = Math.min(...visibleIndices.current);
        setActiveStage((prev) => (prev === next ? prev : next));
      },
      {
        // Central band: fires when the row centre is roughly in the middle 20 % of viewport
        rootMargin: "-42% 0px -42% 0px",
        threshold: 0,
      },
    );

    rowRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    // ── Natural document flow. No wrapper height manipulation. No scroll-jacking. ──
    <section
      id="lifecycle"
      className="relative bg-[url('/home/footer/bsfbg.webp')] bg-cover bg-center bg-no-repeat overflow-hidden py-[80px] lg:py-[100px] text-white"
    >
      <div className="fix">
        {/* ── Header Block ── */}
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-12 lg:mb-16">
          <motion.div
            variants={fadeUp}
            custom={0}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            className="max-w-[840px]"
          >
            <div className="text-[11px] font-semibold tracking-[2px] uppercase text-white/60 mb-3">
              ONE DEVELOPMENT PLATFORM. THREE STAKEHOLDER JOURNEYS.
            </div>
            <h2
              className="font-bold text-white leading-[1.1] tracking-[-1.3px]"
              style={{ fontSize: "clamp(28px, 3.8vw, 44px)" }}
            >
              Partnering with occupiers, landowners & investors across the
              entire asset lifecycle
            </h2>
          </motion.div>

          <motion.button
            variants={fadeUp}
            custom={0.5}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="flex items-center gap-2 px-5 py-2.5 bg-white/10 hover:bg-white/20 transition-all border border-white/20 rounded-sm text-[12px] font-medium tracking-[0.5px] uppercase shrink-0"
          >
            <span className="pr-3 text-white">Explore Our Approach</span>
            <ArrowUpRight
              className="bg-white text-[#D86356]"
              size={26}
              strokeWidth={0.8}
            />
          </motion.button>
        </div>

        {/* ── Two-column body ── */}
        <div className="flex flex-col lg:flex-row items-start gap-10 lg:gap-12">
          {/* ────────────────────────────────────────────────
              LEFT COLUMN
              • sticky via CSS — no JS, no wrapper tricks
              • top offset keeps it clear of any fixed nav
              • self-start so it only stretches to its own
                height, not the right column's height
          ──────────────────────────────────────────────── */}
          <motion.div
            variants={fadeUp}
            custom={1}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="lg:sticky lg:top-[100px] lg:self-start flex flex-col gap-6 w-full max-w-[620px] shrink-0"
          >
            {/* Image */}
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] w-full bg-black/20">
              <img
                src={workerImg}
                alt="BuildSpace lifecycle"
                className="w-full h-full object-cover"
              />
              {/* Stage badge — crossfades with content */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={`badge-${activeStage}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                  className="absolute bottom-4 left-4 text-[9px] font-mono tracking-widest text-white uppercase"
                >
                  <span className="text-[#DA655B]">
                    {stages[activeStage].num}
                  </span>{" "}
                  {stages[activeStage].title}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Animated description block */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStage}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -14 }}
                transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
                className="flex flex-col gap-3 pt-2"
              >
                <p className="text-white/70 text-[18px] font-thin leading-[1.6]">
                  {stages[activeStage].desc}
                </p>
                {stages[activeStage].strategicValue && (
                  <div className="text-[12px] mt-2 flex gap-2 items-start">
                    <span className="font-semibold tracking-wider text-[11px] text-white uppercase shrink-0 pt-[2px]">
                      Strategic Value:
                    </span>
                    <span className="text-white/90">
                      {stages[activeStage].strategicValue}
                    </span>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </motion.div>

          {/* ────────────────────────────────────────────────
              RIGHT COLUMN
              • normal document flow — page scrolls it
              • each row is a waypoint the observer watches
              • generous py creates natural scroll distance
                so each stage gets time to register
          ──────────────────────────────────────────────── */}
          <motion.div
            variants={fadeUp}
            custom={2}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="flex flex-col w-full mrcont border-t border-white/10"
          >
            {stages.map((stage, i) => {
              const isActive = activeStage === i;
              return (
                <div
                  key={stage.num}
                  ref={setRowRef(i)}
                  data-index={i}
                  // Generous vertical padding = natural scroll distance per stage
                  // (no artificial height — the content itself creates the scroll)
                  className={`relative w-full flex items-center justify-between gap-6 border-b cursor-default
                    px-2 lg:px-6.5
                    py-[clamp(28px,5vw,48px)]
                    transition-colors duration-500
                    ${isActive ? "bg-white/10 px-6 border-white/40" : "border-white/10"}
                  `}
                >
                  {/* Indicator circle */}
                  <span
                    className={`flex-shrink-0 lg:w-12 lg:h-12 h-9 w-9 rounded-full flex items-center justify-center border transition-all duration-500 ${
                      isActive ? "border-white bg-white" : "border-white/20"
                    }`}
                  >
                    <ArrowLeft
                      size={34}
                      strokeWidth={0.8}
                      className={`transition-colors duration-500 ${
                        isActive ? "text-[#e27244]" : "text-white/50"
                      }`}
                    />
                  </span>

                  {/* Title */}
                  <span
                    className={`font-medium text-[14px] lg:text-[18px] text-center md:text-[20px] transition-colors duration-500 ${
                      isActive ? "text-white" : "text-white/60"
                    }`}
                  >
                    {stage.title}
                  </span>

                  {/* Number */}
                  <span
                    className={`text-[18px] font-mono lg:pr-[26px] tracking-wider transition-colors duration-500 ${
                      isActive ? "text-white font-normal" : "text-white/40"
                    }`}
                  >
                    {stage.num}
                  </span>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
