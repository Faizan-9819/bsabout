// "use client";

// import { motion, type Variants } from "framer-motion";

// const globeImg = "/globeImg.webp";
// const backgroundImg = "/home/sustainability/susbg.webp";

// const pillars = [
//   {
//     num: "01",
//     icon: "/home/sustainability/sustainability.svg",
//     title: "Responsible Land Planning",
//     points: [
//       "Locations planned for long-term environmental and operational viability",
//       "Quarterly air and noise monitoring",
//       "Results reported to the relevant authorities",
//     ],
//   },
//   {
//     num: "02",
//     icon: "/home/sustainability/sustanability2.svg",
//     title: "Designed to Breathe",
//     points: [
//       "Natural light and ventilation designed into every facility",
//       "Responsibly sourced, lower-impact materials",
//       "Environmental compliance maintained at every stage",
//     ],
//   },
//   {
//     num: "03",
//     icon: "/home/sustainability/sustanability3.svg",
//     title: "Green Building Standards",
//     points: [
//       "Pursuing IGBC and EDGE Platinum certification",
//       "Designed to recognised green building benchmarks from the ground up",
//       "Solar-ready roofing infrastructure",
//     ],
//   },
//   {
//     num: "04",
//     icon: "/home/sustainability/sustanability4.svg",
//     title: "Value Beyond Handover",
//     points: [
//       "Long-term asset performance and environmental value",
//       "Recycled water for non-potable use",
//       "Community plantation drives",
//     ],
//   },
// ];

// const cardVariant: Variants = {
//   hidden: { opacity: 0, y: 25 },
//   show: (i: number) => ({
//     opacity: 1,
//     y: 0,
//     transition: { delay: i * 0.12, duration: 0.6, ease: "easeOut" as const },
//   }),
// };

// function PillarCard({
//   pillar,
//   index,
// }: {
//   pillar: (typeof pillars)[0];
//   index: number;
// }) {
//   return (
//     <motion.div
//       variants={cardVariant}
//       custom={index}
//       initial="hidden"
//       whileInView="show"
//       viewport={{ once: true, margin: "-20px" }}
//       // Backdrop blur thoda kam kiya (20px) taaki cards aur zyada transparent aur light lagein
//       className="relative overflow-hidden p-5 backdrop-blur-[16px] rounded-[24px] w-full  flex flex-col justify-between"
//       style={{
//         // White opacity ko ekdum perfect mid-level (0.25 to 0.05) kar diya hai, ekdum light glass look ke liye
//         background:
//           "linear-gradient(135deg, rgba(255, 255, 255, 0.55) 0%, rgba(255, 255, 255, 0.20) 100%)",
//         boxShadow: "0px 20px 50px 0px rgba(0, 30, 60, 0.03)",
//         // Border ko bhi thoda subtle (0.25) kiya hai taaki heavy na dikhe
//         border: "1px solid rgba(255, 255, 255, 0.25)",
//       }}
//     >
//       <div>
//         {/* Card Header Top Row */}
//         <div className="flex items-center justify-between mb-[15px]">
//           <img
//             src={pillar.icon}
//             alt="pillar icon"
//             className="w-8 h-8 text-[#003B9D] object-contain"
//           />
//           <div className="flex flex-col items-end">
//             <span className="text-[#003b9d] text-[21px] tracking-[-0.42px] font-semibold leading-[18px] pb-[2px] border-b border-[#003b9d]/60">
//               {pillar.num}
//             </span>
//           </div>
//         </div>

//         {/* Card Content Titles */}
//         <h3 className="text-[#003b9d] font-bold text-[20px] leading-[21px] mb-[8.8px] tracking-[-0.38px]">
//           {pillar.title}
//         </h3>

//         {/* Bullet Points Rendered list */}
//         <ul className="list-disc pl-4 space-y-1">
//           {pillar.points.map((point, idx) => (
//             <li
//               key={idx}
//               className="text-[#2c3a47] text-[13px] leading-[18px] font-medium marker:text-[#46566a]"
//             >
//               {point}
//             </li>
//           ))}
//         </ul>
//       </div>
//     </motion.div>
//   );
// }

// export default function Sustainability() {
//   return (
//     <section
//       id="sustainability"
//       className="relative overflow-hidden sustainability-bg bg-cover bg-center bg-no-repeat w-full flex flex-col justify-between py-[50px] md:py-[80px] lg:py-16"
//       style={{ backgroundImage: `url(${backgroundImg})` }}
//     >
//       {/* Curved Background Wave Lines Placeholder effect */}
//       <div className="absolute inset-0 pointer-events-none opacity-40 z-0">
//         <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
//           <path
//             d="M-100,200 Q300,150 800,250 T1900,200"
//             fill="none"
//             stroke="#00b050"
//             strokeWidth="0.5"
//             opacity="0.15"
//           />
//           <path
//             d="M-100,400 Q400,450 900,350 T1900,500"
//             fill="none"
//             stroke="#003b9d"
//             strokeWidth="0.5"
//             opacity="0.1"
//           />
//         </svg>
//       </div>

//       {/* Top Header Grid Content */}
//       <div className="fix relative z-10 text-center flex flex-col items-center">
//         {/* Track Tagline indicator */}
//         <div className="flex items-center gap-2 mb-3">
//           <div className="h-[1px] w-4 bg-[#003b9d] opacity-60" />
//           <span className="text-[10px] font-bold uppercase tracking-[3px] text-[#003b9d]">
//             Sustainability by Design
//           </span>
//           {/* <div className="h-[1px] w-4 bg-[#003b9d] opacity-60" /> */}
//         </div>

//         <h2 className="font-bold leading-[1.15] tracking-[-1px] text-[26px] sm:text-[34px] lg:text-[40px] mb-4">
//           <span className="bg-gradient-to-r from-[#BF584F] to-[#F6736A] bg-clip-text text-transparent">
//             {" "}
//             Sustainability is built into
//           </span>{" "}
//           <br />{" "}
//           <span className="bg-gradient-to-r from-[#BF584F] to-[#F6736A] bg-clip-text text-transparent">
//             every decision we make.
//           </span>
//         </h2>

//         <p className="text-[#64748b] font-normal leading-[1.6] max-w-[840px] text-[12.5px] sm:text-[14.5px]">
//           From land selection and planning to engineering, execution, and
//           long-term asset performance, <br className="hidden md:inline" />
//           sustainability is embedded across the development lifecycle. It is
//           backed by measurable action, not intent alone.
//         </p>
//       </div>

//       {/* ── CENTRAL STAGING VIEWPORT CANVAS LAYER ── */}
//       <div className="relative fix flex flex-col items-center justify-end lg:h-[520px] xl:h-[500px]">
//         <div className="block sm:hidden w-full max-w-[400px] sm:max-w-[500px] lg:max-w-[850px] xl:max-w-[1250px] mx-auto lg:absolute lg:left-1/2 lg:bottom-[-95%] lg:-translate-x-1/2 z-0 pointer-events-none">
//           {/* <motion.img
//             initial={{ opacity: 0, y: 60 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 1, ease: "easeOut" }}
//             src={globeImg}
//             alt="Sustainability Globe Canvas"
//             className="w-full h-auto object-contain mx-auto"
//           /> */}
//         </div>

//         {/* Floating Matrix Overlay Controls */}
//         <div className="sm:pt-0 pt-4 w-full flex flex-col items-center gap-6 lg:absolute lg:inset-x-0 lg:bottom-[-20] xl:bottom-[-20] lg:flex-row lg:justify-between z-10 pointer-events-none">
//           {/* LEFT COLUMN MATRIX STACK */}
//           <div className="w-full lg:w-auto flex flex-col gap-5 sm:gap-6 pointer-events-auto items-center lg:items-start lg:max-w-[392px] lg:-translate-y-12">
//             <PillarCard pillar={pillars[0]} index={0} />
//             <PillarCard pillar={pillars[1]} index={1} />
//           </div>

//           {/* RIGHT COLUMN MATRIX STACK */}
//           <div className="w-full lg:w-auto flex flex-col gap-5 sm:gap-6 pointer-events-auto items-center lg:items-end lg:max-w-[392px]">
//             <PillarCard pillar={pillars[2]} index={2} />
//             <PillarCard pillar={pillars[3]} index={3} />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
"use client";

import { useCallback, useEffect, useState } from "react";
import { motion, type Variants } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import { ArrowLeft, ArrowRight } from "lucide-react";

const globeImg = "/globeImg.webp";
const backgroundImg = "/home/sustainability/susbg.webp";

const pillars = [
  {
    num: "01",
    icon: "/home/sustainability/sustainability.svg",
    title: "Responsible Land Planning",
    points: [
      "Locations planned for long-term environmental and operational viability",
      "Quarterly air and noise monitoring",
      "Results reported to the relevant authorities",
    ],
  },
  {
    num: "02",
    icon: "/home/sustainability/sustanability2.svg",
    title: "Designed to Breathe",
    points: [
      "Natural light and ventilation designed into every facility",
      "Responsibly sourced, lower-impact materials",
      "Environmental compliance maintained at every stage",
    ],
  },
  {
    num: "03",
    icon: "/home/sustainability/sustanability3.svg",
    title: "Green Building Standards",
    points: [
      "Pursuing IGBC and EDGE Platinum certification",
      "Designed to recognised green building benchmarks from the ground up",
      "Solar-ready roofing infrastructure",
    ],
  },
  {
    num: "04",
    icon: "/home/sustainability/sustanability4.svg",
    title: "Value Beyond Handover",
    points: [
      "Long-term asset performance and environmental value",
      "Recycled water for non-potable use",
      "Community plantation drives",
    ],
  },
];

const cardVariant: Variants = {
  hidden: { opacity: 0, y: 25 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.6, ease: "easeOut" as const },
  }),
};

function PillarCard({
  pillar,
  index,
  noAnimation = false,
}: {
  pillar: (typeof pillars)[0];
  index: number;
  noAnimation?: boolean;
}) {
  const cardStyle = {
    background:
      "linear-gradient(135deg, rgba(255, 255, 255, 0.55) 0%, rgba(255, 255, 255, 0.20) 100%)",
    boxShadow: "0px 20px 50px 0px rgba(0, 30, 60, 0.03)",
    border: "1px solid rgba(255, 255, 255, 0.25)",
  };

  const cardClassName =
    "relative overflow-hidden p-5 backdrop-blur-[16px] rounded-[24px] w-full flex flex-col justify-between";

  const cardContent = (
    <div>
      {/* Card Header Top Row */}
      <div className="flex items-center justify-between mb-[15px]">
        <img
          src={pillar.icon}
          alt="pillar icon"
          className="w-8 h-8 text-[#003B9D] object-contain"
        />
        <div className="flex flex-col items-end">
          <span className="text-[#003b9d] text-[21px] tracking-[-0.42px] font-semibold leading-[18px] pb-[2px] border-b border-[#003b9d]/60">
            {pillar.num}
          </span>
        </div>
      </div>

      {/* Card Content Titles */}
      <h3 className="text-[#003b9d] font-bold text-[20px] leading-[21px] mb-[8.8px] tracking-[-0.38px]">
        {pillar.title}
      </h3>

      {/* Bullet Points Rendered list */}
      <ul className="list-disc pl-4 space-y-1">
        {pillar.points.map((point, idx) => (
          <li
            key={idx}
            className="text-[#2c3a47] text-[13px] leading-[18px] font-medium marker:text-[#46566a]"
          >
            {point}
          </li>
        ))}
      </ul>
    </div>
  );

  if (noAnimation) {
    return (
      <div className={cardClassName} style={cardStyle}>
        {cardContent}
      </div>
    );
  }

  return (
    <motion.div
      variants={cardVariant}
      custom={index}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-20px" }}
      className={cardClassName}
      style={cardStyle}
    >
      {cardContent}
    </motion.div>
  );
}

function MobilePillarCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: "center",
    skipSnaps: false,
    duration: 20, // controls the slide-transition speed (lower = snappier)
  });
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

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
  }, [emblaApi, onSelect]);

  // No jump flag -> embla plays its native slide transition:
  // next moves right-to-left, prev moves left-to-right
  const handlePrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi],
  );
  const handleNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi],
  );

  return (
    <div className="w-full flex flex-col items-center gap-6 lg:hidden pointer-events-auto">
      <div className="w-full overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {pillars.map((pillar, index) => (
            <div
              key={pillar.num}
              className="flex-[0_0_88%] min-w-0 px-2 first:pl-0 last:pr-0"
            >
              <PillarCard pillar={pillar} index={index} noAnimation />
            </div>
          ))}
        </div>
      </div>

      <div className="flex items-center gap-3">
        <button
          onClick={handlePrev}
          disabled={!canScrollPrev}
          className="flex h-12 w-12 items-center justify-center rounded-full border border-black/15 bg-white text-[#003B9D] hover:bg-black hover:text-white transition-all shadow-sm disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-white disabled:hover:text-[#003B9D]"
          aria-label="Previous card"
        >
          <ArrowLeft size={16} strokeWidth={2} />
        </button>
        <button
          onClick={handleNext}
          disabled={!canScrollNext}
          className="flex h-12 w-12 items-center justify-center rounded-full border border-black/15 bg-white text-[#003B9D] hover:bg-black hover:text-white transition-all shadow-sm disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-white disabled:hover:text-[#003B9D]"
          aria-label="Next card"
        >
          <ArrowRight size={16} strokeWidth={2} />
        </button>
      </div>
    </div>
  );
}

export default function Sustainability() {
  return (
    <section
      id="sustainability"
      className="relative overflow-hidden sustainability-bg bg-cover bg-center bg-no-repeat w-full flex flex-col justify-between py-[50px] md:py-[80px] lg:py-16"
      style={{ backgroundImage: `url(${backgroundImg})` }}
    >
      {/* Curved Background Wave Lines Placeholder effect */}
      <div className="absolute inset-0 pointer-events-none opacity-40 z-0">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M-100,200 Q300,150 800,250 T1900,200"
            fill="none"
            stroke="#00b050"
            strokeWidth="0.5"
            opacity="0.15"
          />
          <path
            d="M-100,400 Q400,450 900,350 T1900,500"
            fill="none"
            stroke="#003b9d"
            strokeWidth="0.5"
            opacity="0.1"
          />
        </svg>
      </div>

      {/* Top Header Grid Content */}
      <div className="fix relative z-10 text-center flex flex-col items-center">
        {/* Track Tagline indicator */}
        <div className="flex items-center gap-2 mb-3">
          <div className="h-[1px] w-4 bg-[#003b9d] opacity-60" />
          <span className="text-[10px] font-bold uppercase tracking-[3px] text-[#003b9d]">
            Sustainability by Design
          </span>
        </div>

        <h2 className="font-bold leading-[1.15] tracking-[-1px] text-[26px] sm:text-[34px] lg:text-[40px] mb-4">
          <span className="bg-gradient-to-r from-[#BF584F] to-[#F6736A] bg-clip-text text-transparent">
            {" "}
            Sustainability is built into
          </span>{" "}
          <br />{" "}
          <span className="bg-gradient-to-r from-[#BF584F] to-[#F6736A] bg-clip-text text-transparent">
            every decision we make.
          </span>
        </h2>

        <p className="text-[#64748b] font-normal leading-[1.6] max-w-[840px] text-[12.5px] sm:text-[14.5px]">
          From land selection and planning to engineering, execution, and
          long-term asset performance, <br className="hidden md:inline" />
          sustainability is embedded across the development lifecycle. It is
          backed by measurable action, not intent alone.
        </p>
      </div>

      {/* ── CENTRAL STAGING VIEWPORT CANVAS LAYER ── */}
      <div className="relative fix flex flex-col items-center justify-end lg:h-[520px] xl:h-[500px] md:mt-0 mt-8">
        <div className="block sm:hidden w-full max-w-[400px] sm:max-w-[500px] lg:max-w-[850px] xl:max-w-[1250px] mx-auto lg:absolute lg:left-1/2 lg:bottom-[-95%] lg:-translate-x-1/2 z-0 pointer-events-none" />

        {/* Floating Matrix Overlay Controls */}
        <div className="sm:pt-0 pt-4 w-full flex flex-col items-center gap-6 lg:absolute lg:inset-x-0 lg:bottom-[-20] xl:bottom-[-20] lg:flex-row lg:justify-between z-10 pointer-events-none">
          {/* MOBILE: carousel (below lg) */}
          <MobilePillarCarousel />

          {/* DESKTOP LEFT COLUMN MATRIX STACK (unchanged) */}
          <div className="hidden lg:flex w-full lg:w-auto flex-col gap-5 sm:gap-6 pointer-events-auto items-center lg:items-start lg:max-w-[392px] lg:-translate-y-12">
            <PillarCard pillar={pillars[0]} index={0} />
            <PillarCard pillar={pillars[1]} index={1} />
          </div>

          {/* DESKTOP RIGHT COLUMN MATRIX STACK (unchanged) */}
          <div className="hidden lg:flex w-full lg:w-auto flex-col gap-5 sm:gap-6 pointer-events-auto items-center lg:items-end lg:max-w-[392px]">
            <PillarCard pillar={pillars[2]} index={2} />
            <PillarCard pillar={pillars[3]} index={3} />
          </div>
        </div>
      </div>
    </section>
  );
}
