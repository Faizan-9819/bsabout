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
//     desc: "Corridor and catchment analysis, parcel due diligence, infrastructure proximity scoring.",
//     strategicValue:
//       "The location decision de-risked before capital is committed.",
//     image: "/value/value1.jpg",
//   },
//   {
//     num: "02",
//     title: "Master Planning & Design",
//     desc: "Highest-use planning, parcelisation, MEP envelope, circulation and safety design.",
//     strategicValue:
//       "A facility planned around operations and future expansion, not just the footprint.",
//     image: "/value/value2.jpg",
//   },
//   {
//     num: "03",
//     title: "Approvals & Compliance",
//     desc: "Zoning, environmental, and statutory clearances run in parallel with engineering.",
//     strategicValue: "Approvals stop being the critical-path bottleneck.",
//     image: "/value/value3.jpg",
//   },
//   {
//     num: "04",
//     title: "Engineering & Development",
//     desc: "Civil, structural, MEP, and external infrastructure engineering packages.",
//     strategicValue:
//       "Constructability and scalability designed in, not retrofitted later.",
//     image: "/value/value4.jpg",
//   },
//   {
//     num: "05",
//     title: "Construction & Handover",
//     desc: "Multi-contractor execution under integrated development management.",
//     strategicValue:
//       "One partner owns the build outcome — not just a defined construction scope.",
//     image: "/value/value5.jpg",
//   },
//   {
//     num: "06",
//     title: "Operational Readiness",
//     desc: "Commissioning, certifications, and occupier fit-out coordination for day-one readiness.",
//     strategicValue:
//       "The facility is ready to operate, not merely ready to occupy.",
//     image: "/value/value6.jpg",
//   },
//   {
//     num: "07",
//     title: "Asset Management & Value Creation",
//     desc: "Lifecycle stewardship — optimisation, maintenance strategy, and capital-cycle planning.",
//     strategicValue: "Performance compounds beyond handover.",
//     image: "/value/value7.jpg",
//   },
// ];

// const fadeUp = {
//   hidden: { opacity: 0, y: 24 },
//   show: (i: number) => ({
//     opacity: 1,
//     y: 0,
//     transition: { delay: i * 0.08, duration: 0.6, ease: "easeOut" },
//   }),
// };

// export default function FullLifecycleApproach() {
//   const [activeStage, setActiveStage] = useState(0);

//   return (
//     <section
//       id="lifecycle"
//       className="relative bg-[url('/home/footer/bsfbg.webp')] bg-cover bg-center bg-no-repeat py-[80px] lg:py-[100px] text-white"
//     >
//       <div className="fix">
//         {/* ── Header Block ── */}
//         <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-12 lg:mb-16">
//           <motion.div
//             variants={fadeUp}
//             custom={0}
//             initial="hidden"
//             whileInView="show"
//             viewport={{ once: true, margin: "-60px" }}
//             className="max-w-[840px]"
//           >
//             <div className="flex items-center mb-4">
//               <div className="h-[2px] w-6 bg-white me-2" />
//               <span className="text-[12px] font-semibold tracking-[2px] uppercase text-white">
//                 LIFECYCLE
//               </span>
//             </div>
//             <h2
//               className="font-bold text-white leading-[1.1] tracking-[-1.3px]"
//               style={{ fontSize: "clamp(28px, 3.8vw, 44px)" }}
//             >
//               From land to long-term value{" "}
//               <br className="hidden lg:inline-block" />A continuous process.
//             </h2>
//           </motion.div>

//           <p className="lg:text-[18px] text-[14px] leading-[140%]">
//             Value is created in stages, each building on the last. BuildVALUE{" "}
//             <br className="hidden lg:inline-block" />
//             manages the full journey — running planning, approvals, and{" "}
//             <br className="hidden lg:inline-block" />
//             infrastructure in parallel rather than in sequence — so a dormant{" "}
//             <br className="hidden lg:inline-block" />
//             parcel becomes a performing asset faster, and with less risk to the{" "}
//             <br className="hidden lg:inline-block" />
//             owner.
//           </p>
//         </div>

//         {/* ── Two-column body ── */}
//         <div className="flex flex-col lg:flex-row items-start gap-10 lg:gap-12 relative w-full lg:justify-between">
//           {/* LEFT COLUMN CONTAINER (Sticky) */}
//           <div className="w-full lg:w-[40%] lg:sticky lg:top-[80px] h-fit">
//             <motion.div
//               variants={fadeUp}
//               custom={1}
//               initial="hidden"
//               whileInView="show"
//               viewport={{ once: true }}
//               className="flex flex-col gap-6"
//             >
//               {/* Image Container */}
//               <div className="relative rounded-2xl overflow-hidden bg-black/20">
//                 <AnimatePresence mode="wait">
//                   <motion.img
//                     key={`image-${activeStage}`}
//                     src={stages[activeStage].image}
//                     alt={`BuildSpace lifecycle - ${stages[activeStage].title}`}
//                     className="object-cover aspect-[5.49/4.39] h-auto w-full"
//                     initial={{ opacity: 0, scale: 1.05 }}
//                     animate={{ opacity: 1, scale: 1 }}
//                     exit={{ opacity: 0, scale: 1 }}
//                     transition={{ duration: 0.5, ease: "easeOut" }}
//                   />
//                 </AnimatePresence>

//                 {/* Stage badge */}
//                 <AnimatePresence mode="wait">
//                   <motion.div
//                     key={`badge-${activeStage}`}
//                     initial={{ opacity: 0, y: 10 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     exit={{ opacity: 0, y: -10 }}
//                     transition={{ duration: 0.35, ease: "easeOut" }}
//                     className="absolute bottom-4 left-4 text-[9px] font-mono tracking-widest text-white uppercase"
//                   >
//                     <span className="text-[#DA655B]">
//                       {stages[activeStage].num}
//                     </span>{" "}
//                     {stages[activeStage].title}
//                   </motion.div>
//                 </AnimatePresence>
//               </div>

//               {/* Animated description block */}
//               <AnimatePresence mode="wait">
//                 <motion.div
//                   key={activeStage}
//                   initial={{ opacity: 0, y: 14 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   exit={{ opacity: 0, y: -14 }}
//                   transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
//                   className="flex flex-col gap-3 pt-2"
//                 >
//                   <p className="text-white/70 text-[18px] font-thin leading-[1.6]">
//                     {stages[activeStage].desc}
//                   </p>
//                   {stages[activeStage].strategicValue && (
//                     <div className="text-[12px] mt-2 flex gap-2 items-start">
//                       <span className="font-semibold tracking-wider text-[11px] text-white uppercase shrink-0 pt-[2px]">
//                         Strategic Value:
//                       </span>
//                       <span className="text-white/90">
//                         {stages[activeStage].strategicValue}
//                       </span>
//                     </div>
//                   )}
//                 </motion.div>
//               </AnimatePresence>
//             </motion.div>
//           </div>

//           {/* RIGHT COLUMN — List of row waypoints */}
//           <motion.div
//             variants={fadeUp}
//             custom={2}
//             initial="hidden"
//             whileInView="show"
//             viewport={{ once: true }}
//             className="flex flex-col w-full lg:w-[50%] mrcont border-t border-white/10 lg:pb-[35vh]"
//           >
//             {stages.map((stage, i) => {
//               const isActive = activeStage === i;
//               return (
//                 <motion.div
//                   key={stage.num}
//                   onViewportEnter={() => setActiveStage(i)}
//                   viewport={{
//                     amount: "all",
//                     margin: "-10% 0px -50% 0px",
//                   }}
//                   className={`relative w-full flex items-center justify-between gap-6 border-b cursor-default px-2 lg:px-6.5 py-[48px] transition-colors duration-500 ${
//                     isActive
//                       ? "bg-white/10 px-6 border-white/40"
//                       : "border-white/10"
//                   }`}
//                 >
//                   {/* Indicator circle */}
//                   <span
//                     className={`flex-shrink-0 lg:w-12 lg:h-12 h-9 w-9 rounded-full flex items-center justify-center border transition-all duration-500 ${
//                       isActive ? "border-white bg-white" : "border-white/20"
//                     }`}
//                   >
//                     <ArrowLeft
//                       size={34}
//                       strokeWidth={0.8}
//                       className={`transition-colors duration-500 ${
//                         isActive ? "text-[#e27244]" : "text-white/50"
//                       }`}
//                     />
//                   </span>

//                   {/* Title */}
//                   <span
//                     className={`font-medium text-[14px] lg:text-[18px] text-center md:text-[20px] transition-colors duration-500 ${
//                       isActive ? "text-white" : "text-white/60"
//                     }`}
//                   >
//                     {stage.title}
//                   </span>

//                   {/* Number */}
//                   <span
//                     className={`text-[18px] font-mono lg:pr-[26px] tracking-wider transition-colors duration-500 ${
//                       isActive ? "text-white font-normal" : "text-white/40"
//                     }`}
//                   >
//                     {stage.num}
//                   </span>
//                 </motion.div>
//               );
//             })}
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent, Variants } from "framer-motion";
import { ArrowLeft, Plus, Minus } from "lucide-react";

const stages = [
  {
    num: "01",
    title: "Opportunity Identification",
    desc: "Sourcing development opportunities in high-demand industrial and logistics corridors.",
    strategicValue: "Exposure originates in genuine, demand-backed locations.",
    image: "/wealth/w1.jpg",
  },
  {
    num: "02",
    title: "Feasibility & Evaluation",
    desc: "Technical, commercial, and risk evaluation to confirm the asset thesis before capital commitment.",
    strategicValue: "Conviction is earned through diligence, not assumed.",
    image: "/wealth/OpportunityIdentification.jpg",
  },
  {
    num: "03",
    title: "Development Strategy",
    desc: "Defining the optimal asset type, scale, and structure for the corridor and the capital.",
    strategicValue:
      "A clear path from opportunity to a defined, investable asset.",
    image: "/wealth/feas.jpg",
  },
  {
    num: "04",
    title: "Infrastructure Creation",
    desc: "Developing the asset to Grade-A standard through BuildSpace's integrated development management.",
    strategicValue:
      "Quality and basis controlled at source — built, not bought at a premium.",
    image: "/wealth/DevelopmentStrategy.jpg",
  },
  {
    num: "05",
    title: "Occupier Alignment",
    desc: "Securing credible, long-term occupiers that underwrite the asset's income.",
    strategicValue:
      "Income durability through quality tenancy — the asset begins to perform.",
    image: "/wealth/wl.jpg",
  },
  {
    num: "06",
    title: "Asset Stabilisation",
    desc: "Bringing the asset to stabilised, income-producing performance.",
    strategicValue:
      "A de-risked, cash-generating asset with an established track record.",
    image: "/wealth/f2.jpg",
  },
  {
    num: "07",
    title: "Long-Term Asset Management",
    desc: "Lifecycle stewardship — optimisation, capital-cycle planning, and sustained value creation.",
    strategicValue:
      "Performance compounds, with ownership and alignment held throughout.",
    image: "/wealth/AssetStabilisation.jpg",
  },
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.6, ease: "easeOut" },
  }),
};

export default function FullLifecycleApproach() {
  const [activeStage, setActiveStage] = useState(0);
  const [targetStage, setTargetStage] = useState(0);
  const [openMobileStage, setOpenMobileStage] = useState<number | null>(0);
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  // Track normalized scroll progress and mathematically map to the target card index
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    // Only apply scroll-driven logic on desktop viewports
    if (typeof window !== "undefined" && window.innerWidth < 1024) return;

    // Start shifting cards only after the header block has mostly exited
    const startOffset = 0.22;
    // Complete all card transitions before the section finishes scrolling out
    const endOffset = 0.95;

    let activeIndex = 0;
    if (latest >= startOffset) {
      const adjustedProgress = Math.max(
        0,
        Math.min(1, (latest - startOffset) / (endOffset - startOffset))
      );
      // Map the progress after startOffset equally to remaining cards (indices 1 to 6)
      activeIndex = 1 + Math.min(
        stages.length - 2,
        Math.floor(adjustedProgress * (stages.length - 1))
      );
    }

    setTargetStage((prev) => {
      if (prev !== activeIndex) {
        return activeIndex;
      }
      return prev;
    });
  });

  // Smoothly step the activeStage state to catch up with targetStage
  // this avoids any skipped cards during fast scrolls while keeping direct adjacent changes instantaneous
  useEffect(() => {
    if (typeof window !== "undefined" && window.innerWidth < 1024) return;

    if (activeStage === targetStage) return;

    // If it's a direct transition to an adjacent card, do it immediately
    if (Math.abs(targetStage - activeStage) === 1) {
      setActiveStage(targetStage);
      return;
    }

    // For larger jumps (fast scroll), transition step-by-step
    const stepTime = 60; // time in ms per step for buttery visual transition
    const timer = setTimeout(() => {
      setActiveStage((prev) => {
        if (prev < targetStage) return prev + 1;
        if (prev > targetStage) return prev - 1;
        return prev;
      });
    }, stepTime);

    return () => clearTimeout(timer);
  }, [activeStage, targetStage]);

  return (
    <section
      ref={sectionRef}
      id="lifecycle"
      className="relative bg-[url('/home/footer/bsfbg.webp')] bg-cover bg-center bg-no-repeat py-[80px] lg:py-[100px] text-white"
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
            <div className="flex items-center mb-4">
              <div className="h-[2px] w-6 bg-white me-2" />
              <span className="text-[12px] font-semibold tracking-[2px] uppercase text-white">
                LIFECYCLE
              </span>
            </div>
            <h2
              className="font-bold text-white leading-[1.1] tracking-[-1.3px]"
              style={{ fontSize: "clamp(28px, 3.8vw, 44px)" }}
            >
              From land to long-term value{" "}
              <br className="hidden lg:inline-block" />A continuous process.
            </h2>
          </motion.div>

          <p className="lg:text-[18px] text-[14px] leading-[140%]">
            Value is created in stages, each building on the last. BuildVALUE{" "}
            <br className="hidden lg:inline-block" />
            manages the full journey — running planning, approvals, and{" "}
            <br className="hidden lg:inline-block" />
            infrastructure in parallel rather than in sequence — so a dormant{" "}
            <br className="hidden lg:inline-block" />
            parcel becomes a performing asset faster, and with less risk to the{" "}
            <br className="hidden lg:inline-block" />
            owner.
          </p>
        </div>

        {/* ── ======================================================== ── */}
        {/* ── DESKTOP VIEW ONLY (lg and above) — 100% UNCHANGED CODE   ── */}
        {/* ── ======================================================== ── */}
        <div className="hidden lg:flex flex-col lg:flex-row items-start gap-10 lg:gap-12 relative w-full lg:justify-between">
          {/* LEFT COLUMN CONTAINER (Sticky) */}
          <div className="w-full lg:w-[40%] lg:sticky lg:top-[80px] h-fit">
            <motion.div
              variants={fadeUp}
              custom={1}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="flex flex-col gap-6"
            >
              {/* Image Container */}
              <div className="relative rounded-2xl overflow-hidden bg-black/20">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={`image-desktop-${activeStage}`}
                    src={stages[activeStage].image}
                    alt={`BuildSpace lifecycle - ${stages[activeStage].title}`}
                    className="object-cover aspect-[5.49/4.39] h-auto w-full"
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                  />
                </AnimatePresence>

                {/* Stage badge */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`badge-desktop-${activeStage}`}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.35, ease: "easeOut" }}
                    className="absolute bottom-4 left-4 text-[11px] font-mono tracking-widest text-white uppercase"
                  >
                    <span className="text-[#DA655B] pr-3">
                      {stages[activeStage].num}
                    </span>{" "}
                    {stages[activeStage].title}
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Animated description block */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={`desc-desktop-${activeStage}`}
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
                         Value:
                      </span>
                      <span className="text-white/90">
                        {stages[activeStage].strategicValue}
                      </span>
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>
            </motion.div>
          </div>

          {/* RIGHT COLUMN — List of row waypoints */}
          <motion.div
            variants={fadeUp}
            custom={2}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="flex flex-col w-full lg:w-[50%] mrcont border-t border-white/10 lg:pb-[35vh]"
          >
            {stages.map((stage, i) => {
              const isActive = activeStage === i;
              return (
                <motion.div
                  key={`row-desktop-${stage.num}`}
                  className={`relative w-full flex items-center justify-between gap-6 border-b cursor-default px-2 lg:px-6.5 py-[48px] transition-colors duration-500 ${
                    isActive
                      ? "bg-white/10 px-6 border-white/40"
                      : "border-white/10"
                  }`}
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
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* ── ======================================================== ── */}
        {/* ── PREMIUM ACCORDION MOBILE VIEW (below lg)                ── */}
        {/* ── ======================================================== ── */}
        <div className="block lg:hidden w-full border-t border-white/10">
          {/* Accordion Trigger Track */}
          <div className="flex flex-col w-full">
            {stages.map((stage, i) => {
              const isOpen = openMobileStage === i;
              return (
                <div key={`accordion-item-${stage.num}`}>
                  <button
                    id={`accordion-trigger-${stage.num}`}
                    aria-expanded={isOpen}
                    aria-controls={`accordion-content-${stage.num}`}
                    onClick={() => setOpenMobileStage(isOpen ? null : i)}
                    className={`w-full min-h-[64px] py-4 flex items-center justify-between border-b text-left transition-colors duration-300 gap-4 outline-none ${
                      isOpen ? "border-white/40" : "border-white/10"
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      {/* Stage Ident Number */}
                      <span
                        className={`text-sm font-mono tracking-wider transition-colors duration-300 ${
                          isOpen ? "text-[#DA655B]" : "text-white/40"
                        }`}
                      >
                        {stage.num}
                      </span>
                      {/* Stage Title */}
                      <span
                        className={`text-base font-medium tracking-tight transition-colors duration-300 ${
                          isOpen ? "text-white" : "text-white/70"
                        }`}
                      >
                        {stage.title}
                      </span>
                    </div>

                    {/* Dynamic Action Trigger Toggle Icon */}
                    <div
                      className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center border transition-all duration-300 ${
                        isOpen
                          ? "border-white bg-white text-[#DA655B]"
                          : "border-white/20 text-white/60"
                      }`}
                    >
                      {isOpen ? (
                        <Minus size={16} strokeWidth={2.5} />
                      ) : (
                        <Plus size={16} strokeWidth={2.5} />
                      )}
                    </div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={`accordion-content-${stage.num}`}
                        role="region"
                        aria-labelledby={`accordion-trigger-${stage.num}`}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="w-full pt-4 pb-6 flex flex-col gap-6">
                          {/* Stage Media Node */}
                          <div className="relative rounded-2xl overflow-hidden bg-white/5 shadow-inner">
                            <motion.img
                              src={stage.image}
                              alt={`BuildSpace dynamic lifecycle - ${stage.title}`}
                              className="object-cover aspect-[5.49/3.8] h-auto w-full"
                              initial={{ opacity: 0, scale: 1.03 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ duration: 0.45, ease: "easeOut" }}
                            />
                          </div>

                          {/* Meta Text Block Wrapper */}
                          <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.38, ease: "easeOut" }}
                            className="flex flex-col gap-4"
                          >
                            {/* Description Narrative */}
                            <p className="text-white/70 text-base font-light leading-relaxed">
                              {stage.desc}
                            </p>

                            {/* Strategic Value Metric Node */}
                            {stage.strategicValue && (
                              <div className="text-xs p-4 rounded-xl bg-white/5 border border-white/5 flex gap-2 items-start mt-2">
                                <span className="font-semibold tracking-wider text-[11px] text-[#fff] uppercase shrink-0 pt-[2px]">
                                  Value:
                                </span>
                                <span className="text-white/90 font-normal leading-relaxed">
                                  {stage.strategicValue}
                                </span>
                              </div>
                            )}
                          </motion.div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
