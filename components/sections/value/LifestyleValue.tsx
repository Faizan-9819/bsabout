"use client";

import { useState, useRef, useEffect } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
  Variants,
} from "framer-motion";
import { ArrowLeft, Plus, Minus } from "lucide-react";

const stages = [
  {
    num: "01",
    title: "Land Evaluation",
    desc: "Assessing the industrial and logistics development potential of the land you already own.",
    strategicValue:
      "A clear starting point, grounded in what your site can realistically support.",
    image: "/value/value2.jpg",
  },
  {
    num: "02",
    title: "Opportunity Assessment",
    desc: "Feasibility and risk evaluation to confirm what your land can sustainably become.",
    strategicValue:
      "Confidence before capital, with the development thesis tested early.",
    image: "/value/value3.jpg",
  },
  {
    num: "03",
    title: "Development Strategy",
    desc: "Defining the optimal asset type, scale, and phasing for your land and its market.",
    strategicValue:
      "A clear, value-maximising path from parcel to income-producing asset.",
    image: "/value/value4.jpg",
  },
  {
    num: "04",
    title: "Infrastructure Planning",
    desc: "Master planning and engineering the utilities, access, and envelope that make your land development-ready.",
    strategicValue:
      "Development-readiness designed in from the start, not retrofitted later.",
    image: "/value/value5.jpg",
  },
  {
    num: "05",
    title: "Market Positioning",
    desc: "Positioning the developed asset within its corridor and tenant market.",
    strategicValue: "The asset is built toward real demand, not in hope of it.",
    image: "/value/val6.jpg",
  },
  {
    num: "06",
    title: "Leasing & Tenant Alignment",
    desc: "Attracting credible, long-term tenants aligned to the asset and your income objectives.",
    strategicValue:
      "Income security through quality tenancy, as the asset begins to perform.",
    image: "/value/value7.jpg",
  },
  {
    num: "07",
    title: "Asset Value Creation",
    desc: "Long-term stewardship: optimisation, lifecycle planning, and sustained income and capital appreciation.",
    strategicValue: "Value compounds, and ownership stays with you throughout.",
    image: "/value/value1.jpg",
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

// Scroll-progress thresholds that map page scroll to the active stage index.
// Kept identical to the original mapping so sticky timing / activation
// thresholds are completely unchanged.
const SCROLL_START_OFFSET = 0.22;
const SCROLL_END_OFFSET = 0.95;

function progressToStageIndex(latest: number): number {
  if (latest < SCROLL_START_OFFSET) return 0;
  const adjustedProgress = Math.max(
    0,
    Math.min(
      1,
      (latest - SCROLL_START_OFFSET) /
        (SCROLL_END_OFFSET - SCROLL_START_OFFSET),
    ),
  );
  return (
    1 +
    Math.min(
      stages.length - 2,
      Math.floor(adjustedProgress * (stages.length - 1)),
    )
  );
}

// Inverse of progressToStageIndex: given a stage index, return the scroll
// progress value that sits in the middle of that stage's activation range —
// i.e. exactly where scrolling would naturally make it active.
function stageIndexToProgress(index: number): number {
  if (index <= 0) return SCROLL_START_OFFSET / 2;
  const mid = (index - 1 + 0.5) / (stages.length - 1);
  return SCROLL_START_OFFSET + mid * (SCROLL_END_OFFSET - SCROLL_START_OFFSET);
}

export default function FullLifecycleApproach() {
  const [activeStage, setActiveStage] = useState(0);
  const [openMobileStage, setOpenMobileStage] = useState<number | null>(0);
  const sectionRef = useRef<HTMLElement>(null);

  // While true, scroll-driven activation updates are ignored so a clicked
  // row's smooth scroll doesn't flicker through every stage it passes.
  const isClickScrollingRef = useRef(false);
  const scrollEndTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(
    null,
  );

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  // Track normalized scroll progress and update the active stage immediately.
  // No stepping, no catch-up animation — the active stage snaps directly to
  // whatever scroll position dictates (unless a click-triggered scroll is
  // currently in flight — see isClickScrollingRef below).
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    // Only apply scroll-driven logic on desktop viewports
    if (typeof window !== "undefined" && window.innerWidth < 1024) return;
    if (isClickScrollingRef.current) return;

    const activeIndex = progressToStageIndex(latest);

    setActiveStage((prev) => (prev !== activeIndex ? activeIndex : prev));
  });

  // Detect when the click-triggered smooth scroll has actually settled, so
  // natural scroll-driven activation can safely resume afterwards.
  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleScroll = () => {
      if (!isClickScrollingRef.current) return;
      if (scrollEndTimeoutRef.current)
        clearTimeout(scrollEndTimeoutRef.current);
      scrollEndTimeoutRef.current = setTimeout(() => {
        isClickScrollingRef.current = false;
      }, 150);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollEndTimeoutRef.current)
        clearTimeout(scrollEndTimeoutRef.current);
    };
  }, []);

  // Programmatically scroll the page so the clicked stage lands exactly
  // where it would naturally become active during scrolling.
  const scrollToStage = (index: number) => {
    if (typeof window === "undefined") return;
    const section = sectionRef.current;
    if (!section) return;

    const rect = section.getBoundingClientRect();
    const sectionTop = rect.top + window.scrollY;
    const scrollableRange = section.offsetHeight - window.innerHeight;
    const progress = stageIndexToProgress(index);
    const targetY = sectionTop + progress * Math.max(scrollableRange, 0);

    window.scrollTo({ top: targetY, behavior: "smooth" });
  };

  // Clicking a desktop row activates it immediately (image jumps straight to
  // that stage, no passing through the stages in between) and smoothly
  // scrolls the page to the matching position. Natural scroll continues to
  // drive activation afterwards once the smooth scroll has settled.
  const handleStageClick = (index: number) => {
    if (typeof window !== "undefined" && window.innerWidth < 1024) return;

    isClickScrollingRef.current = true;
    if (scrollEndTimeoutRef.current) clearTimeout(scrollEndTimeoutRef.current);
    // Fallback in case no further scroll events fire (e.g. already in view)
    scrollEndTimeoutRef.current = setTimeout(() => {
      isClickScrollingRef.current = false;
    }, 900);

    setActiveStage(index);
    scrollToStage(index);
  };

  return (
    <section
      ref={sectionRef}
      id="lifecycle"
      className="relative bg-[url('/home/footer/bsfbg.webp')] bg-cover bg-center bg-no-repeat py-[80px] lg:py-[100px] text-white"
    >
      <div className="fix">
        {/* ── Header Block ── */}
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-9 lg:mb-16">
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
            Value is created in stages, each building on the last. BuildVALUE
            <br className="hidden lg:inline-block" />
            manages the full journey, running planning, approvals, and
            <br className="hidden lg:inline-block" />
            infrastructure in parallel rather than in sequence, so your dormant
            <br className="hidden lg:inline-block" />
            parcel becomes a performing asset faster, and with less risk to you.
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
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{
                      delay: 0.05,
                      duration: 0.25,
                      ease: "easeInOut",
                    }}
                  />
                </AnimatePresence>

                {/* Bottom dark overlay */}
                <div className="absolute inset-x-0 bottom-0 h-[45%] bg-gradient-to-t from-black/85 via-black/45 to-transparent pointer-events-none z-10" />

                {/* Stage badge */}
                <div className="absolute bottom-4 left-4 z-20 text-[11px] tracking-[2px] text-white uppercase">
                  <span className="text-[#DA655B] pr-3">
                    {stages[activeStage].num}
                  </span>{" "}
                  {stages[activeStage].title}
                </div>
              </div>

              {/* Description block — updates instantly, no fade/translate */}
              <div className="flex justify-center flex-col gap-3 pt-2">
                <p className="text-white/90 text-[18px] font-thin leading-[1.6]">
                  {stages[activeStage].desc}
                </p>
                {stages[activeStage].strategicValue && (
                  <div className="text-[12px] mt-2 flex gap-2 items-start">
                    <span className="font-medium tracking-normal text-[18px] text-[rgba(255,255,255,0.84)] shrink-0">
                      Value:
                    </span>
                    <span className="text-[rgba(255,255,255,0.84)] font-thin text-[18px]">
                      {stages[activeStage].strategicValue}
                    </span>
                  </div>
                )}
              </div>
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
                  onClick={() => handleStageClick(i)}
                  className={`relative w-full flex items-center justify-between gap-6 border-b cursor-pointer select-none px-2 lg:px-6.5 py-[38px] transition-colors duration-100 ease-linear ${
                    isActive
                      ? "bg-white/10 px-6 border-white/40"
                      : "border-white/10"
                  }`}
                >
                  {/* Indicator circle */}
                  <span
                    className={`flex-shrink-0 lg:w-12 lg:h-12 h-9 w-9 rounded-full flex items-center justify-center border transition-all duration-100 ease-linear ${
                      isActive ? "border-white bg-white" : "border-white/20"
                    }`}
                  >
                    <ArrowLeft
                      size={34}
                      strokeWidth={0.8}
                      className={`transition-colors duration-100 ease-linear ${
                        isActive ? "text-[#e27244]" : "text-white/50"
                      }`}
                    />
                  </span>

                  {/* Title */}
                  <span
                    className={`text-[18px] lg:text-[25px] tracking-[-0.5px] text-center md:text-[20px] transition-colors duration-100 ease-linear ${
                      isActive ? "text-white" : "text-[rgba(255,255,255,0.7)]"
                    }`}
                  >
                    {stage.title}
                  </span>

                  {/* Number */}
                  <span
                    className={`text-[16px] lg:text-[25px] font-thin lg:pr-[26px] tracking-wider transition-colors duration-100 ease-linear`}
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
                          isOpen ? "text-[#fff]" : "text-white/40"
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
                        transition={{
                          duration: 0.35,
                          ease: [0.25, 0.1, 0.25, 1],
                        }}
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
