"use client";

import Link from "next/link";
import Btn from "@/components/shared/Btn";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";

const slides = [
  {
    bg: "/home/Spotlight/homespot1.webp",
    eyebrow: "Value Creation Platform",
    headline: "Unlocking land value.",
    sub: "Engineering long-term returns.",
  },
  {
    bg: "/home/Spotlight/homespot2.webp",
    eyebrow: "Infrastructure Excellence",
    headline: "Lorem ipsum dolor sit.",
    sub: "Amet consectetur adipiscing elit.",
  },
];

const navCards = [
  {
    bold: "INFRA",
    img: "/home/Spotlight/infra.jpg",
    href: "/infra",
  },
  {
    bold: "VALUE",
    img: "/home/Spotlight/value.webp",
    href: "/wealth",
  },
  {
    bold: "WEALTH",
    img: "/home/Spotlight/wealth.webp",
    href: "/value",
  },
];

const textVariants: Variants = {
  enter: { opacity: 0, y: 28 },
  center: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: { duration: 0.35, ease: "easeIn" },
  },
};

const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    x: 40,
  },
  show: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.5 + i * 0.12,
      duration: 0.55,
      ease: "easeOut" as const,
    },
  }),
};
export default function Hero() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [current, setCurrent] = useState(0);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setCurrent(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  return (
    <section className="relative w-full h-screen overflow-hidden ">
      {/* Embla — full bleed background slides */}
      <div className="absolute inset-0" ref={emblaRef}>
        <div className="flex h-full">
          {slides.map((s, i) => (
            <div key={i} className="relative flex-[0_0_100%] h-full">
              <img
                src={s.bg}
                alt=""
                className="absolute inset-0 w-full h-full object-cover object-center"
                draggable={false}
              />
              {/* <div className="absolute inset-0 bg-gradient-to-r from-[#001433]/80 via-[#001433]/30 to-transparent" /> */}
            </div>
          ))}
        </div>
      </div>

      {/* Full-height flex row */}
      <div className="relative z-10 h-full flex items-end xl:items-stretch fix">
        {/* Left column */}
        <div className="flex flex-col justify-end xl:justify-center pb-[104px] xl:pb-0 flex-1 min-w-0 xl:pr-16">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial="enter"
              animate="center"
              exit="exit"
              className="flex flex-col gap-5 mb-8 xl:mb-10"
            >
              <motion.p
                variants={textVariants}
                className="eyebrow text-white/60"
              >
                {slides[current].eyebrow}
              </motion.p>
              <motion.h1
                variants={textVariants}
                className="text-white font-bold leading-[1.15] tracking-[-1.6px]"
                style={{ fontSize: "clamp(36px, 4.5vw, 60px)" }}
              >
                {slides[current].headline}
                <br />
                <span className="font-light text-white/80">
                  {slides[current].sub}
                </span>
              </motion.h1>
              <motion.div variants={textVariants}>
                <Btn label="Explore Our Solutions" icon="arrow-right" />
              </motion.div>
            </motion.div>
          </AnimatePresence>

          {/* Nav arrows + counter */}
          <div className="flex items-center gap-3 xl:pb-12">
            <button
              onClick={scrollPrev}
              className="w-[54px] h-[54px] rounded-full border border-white/50 flex items-center justify-center text-white hover:border-white hover:bg-white/10 transition-all"
              aria-label="Previous"
            >
              <FaArrowLeft size={18} />
            </button>
            <button
              onClick={scrollNext}
              className="w-[54px] h-[54px] rounded-full border border-white/50 flex items-center justify-center text-white hover:border-white hover:bg-white/10 transition-all"
              aria-label="Next"
            >
              <FaArrowRight size={18} />
            </button>
          </div>
        </div>

        {/* Right column — fixed nav cards, page-load animation only, xl+ */}
        <div className="hidden xl:flex flex-col justify-center gap-[17px] pt-12">
          {navCards.map((card, i) => (
            <motion.div
              key={card.bold}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              animate="show"
            >
              <Link
                href={card.href}
                className="relative block w-[241px] overflow-hidden rounded-xl border border-white/20 backdrop-blur-[9px]"
                style={{
                  background:
                    "linear-gradient(155deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.05) 100%)",
                  boxShadow: "0 24px 57px rgba(0,10,30,0.42)",
                }}
              >
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    boxShadow: "inset 0 0.8px 0 rgba(255,255,255,0.24)",
                  }}
                />
                <div className="px-[14.8px] pt-[10.8px]">
                  <p className="text-white text-[18px] tracking-[-0.92px] mb-1">
                    Build<span className="font-bold">{card.bold}</span>
                  </p>
                </div>
                <div className="mx-[14.8px] mb-[10.8px] rounded-xl border border-white/20 overflow-hidden h-[110px]">
                  <img
                    src={card.img}
                    alt={`Build${card.bold}`}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    draggable={false}
                  />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>

      {/* BUILD watermark */}
      <div
        className="absolute bottom-0 left-0 plcont lg:-ml-4 select-none pointer-events-none font-extrabold leading-none"
        style={{
          fontSize: "clamp(100px, 18vw, 250px)",
          background:
            "linear-gradient(180deg, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0.03) 80%, rgba(255,255,255,0) 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          transform: "translateY(12%)",
        }}
        aria-hidden
      >
        BUILD
      </div>
    </section>
  );
}

// "use client";

// import Link from "next/link";
// import Btn from "@/components/shared/Btn";
// import { motion, AnimatePresence, type Variants } from "framer-motion";
// import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
// import useEmblaCarousel from "embla-carousel-react";
// import { useCallback, useEffect, useState } from "react";

// const slides = [
//   {
//     bg: "/home/Spotlight/homespot1.webp",
//     eyebrow: "Value Creation Platform",
//     headline: "Unlocking land value.",
//     sub: "Engineering long-term returns.",
//   },
//   {
//     bg: "/home/Spotlight/homespot2.webp",
//     eyebrow: "Infrastructure Excellence",
//     headline: "Lorem ipsum dolor sit.",
//     sub: "Amet consectetur adipiscing elit.",
//   },
//   // {
//   //   bg: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=1600&q=80",
//   //   eyebrow: "Wealth Engineering",
//   //   headline: "Lorem ipsum consectetur.",
//   //   sub: "Sed do eiusmod tempor incididunt.",
//   // },
// ];

// const navCards = [
//   {
//     bold: "INFRA",
//     img: "/home/Spotlight/infra.jpg",
//     href: "/infra",
//   },
//   {
//     bold: "VALUE",
//     img: "/home/Spotlight/value.webp",
//     href: "/wealth",
//   },
//   {
//     bold: "WEALTH",
//     img: "/home/Spotlight/wealth.webp",
//     href: "/value",
//   },
// ];

// const textVariants: Variants = {
//   enter: { opacity: 0, y: 28 },
//   center: {
//     opacity: 1,
//     y: 0,
//     transition: { duration: 0.6, ease: "easeOut" },
//   },
//   exit: {
//     opacity: 0,
//     y: -20,
//     transition: { duration: 0.35, ease: "easeIn" },
//   },
// };

// const cardVariants: Variants = {
//   hidden: {
//     opacity: 0,
//     x: 40,
//   },
//   show: (i: number) => ({
//     opacity: 1,
//     x: 0,
//     transition: {
//       delay: 0.5 + i * 0.12,
//       duration: 0.55,
//       ease: "easeOut" as const,
//     },
//   }),
// };

// export default function Hero() {
//   const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
//   const [current, setCurrent] = useState(0);

//   const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
//   const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

//   useEffect(() => {
//     if (!emblaApi) return;
//     const onSelect = () => setCurrent(emblaApi.selectedScrollSnap());
//     emblaApi.on("select", onSelect);
//     return () => {
//       emblaApi.off("select", onSelect);
//     };
//   }, [emblaApi]);

//   return (
//     <section className="relative w-full h-screen overflow-hidden">
//       {/* Embla — full bleed background slides */}
//       <div className="absolute inset-0" ref={emblaRef}>
//         <div className="flex h-full">
//           {slides.map((s, i) => (
//             <div key={i} className="relative flex-[0_0_100%] h-full">
//               <img
//                 src={s.bg}
//                 alt=""
//                 className="absolute inset-0 w-full h-full object-cover object-center"
//                 draggable={false}
//               />
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Multi-layered cinematic gradient canvas mask */}
//       <div
//         className="absolute inset-0 pointer-events-none z-[1]"
//         style={{
//           background: `
//             linear-gradient(180deg, rgba(0, 0, 0, 0.66) 0%, rgba(0, 0, 0, 0.00) 20%),
//             linear-gradient(87deg, rgba(107, 45, 19, 0.92) -13.15%, rgba(98, 41, 18, 0.55) 25.53%, rgba(61, 26, 12, 0.08) 57.37%),
//             linear-gradient(0deg, rgba(0, 20, 51, 0.90) 0%, rgba(0, 20, 51, 0.15) 38%, rgba(0, 20, 51, 0.00) 60%)
//           `,
//         }}
//       />

//       {/* Full-height flex row */}
//       <div className="relative z-10 h-full flex items-end xl:items-stretch fix">
//         {/* Left column */}
//         <div className="flex flex-col justify-end xl:justify-center pb-[104px] xl:pb-0 flex-1 min-w-0 xl:pr-16">
//           <AnimatePresence mode="wait">
//             <motion.div
//               key={current}
//               initial="enter"
//               animate="center"
//               exit="exit"
//               className="flex flex-col gap-5 mb-8 xl:mb-10"
//             >
//               <motion.p
//                 variants={textVariants}
//                 className="eyebrow text-white/60"
//               >
//                 {slides[current].eyebrow}
//               </motion.p>
//               <motion.h1
//                 variants={textVariants}
//                 className="text-white font-bold leading-[1.15] tracking-[-1px]"
//                 style={{ fontSize: "clamp(36px, 4.5vw, 60px)" }}
//               >
//                 {slides[current].headline}
//                 <br />
//                 <span className="font-light text-white/80">
//                   {slides[current].sub}
//                 </span>
//               </motion.h1>
//               <motion.div variants={textVariants}>
//                 <Btn label="Explore Our Solutions" icon="arrow-right" />
//               </motion.div>
//             </motion.div>
//           </AnimatePresence>

//           {/* Nav arrows + counter */}
//           <div className="flex items-center gap-3 xl:pb-12">
//             <button
//               onClick={scrollPrev}
//               className="w-[54px] h-[54px] rounded-full border border-white/50 flex items-center justify-center text-white hover:border-white hover:bg-white/10 transition-all"
//               aria-label="Previous"
//             >
//               <FaArrowLeft size={18} />
//             </button>
//             <button
//               onClick={scrollNext}
//               className="w-[54px] h-[54px] rounded-full border border-white/50 flex items-center justify-center text-white hover:border-white hover:bg-white/10 transition-all"
//               aria-label="Next"
//             >
//               <FaArrowRight size={18} />
//             </button>
//           </div>
//         </div>

//         {/* Right column — fixed nav cards, page-load animation only, xl+ */}
//         <div className="hidden xl:flex flex-col justify-center gap-[17px] pt-12">
//           {navCards.map((card, i) => (
//             <motion.div
//               key={card.bold}
//               custom={i}
//               variants={cardVariants}
//               initial="hidden"
//               animate="show"
//             >
//               <Link
//                 href={card.href}
//                 className="relative block w-[241px] overflow-hidden rounded-xl border border-white/20 backdrop-blur-[9px]"
//                 style={{
//                   background:
//                     "linear-gradient(155deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.05) 100%)",
//                   boxShadow: "0 24px 57px rgba(0,10,30,0.42)",
//                 }}
//               >
//                 <div
//                   className="absolute inset-0 pointer-events-none"
//                   style={{
//                     boxShadow: "inset 0 0.8px 0 rgba(255,255,255,0.24)",
//                   }}
//                 />
//                 <div className="px-[14.8px] pt-[10.8px]">
//                   <p className="text-white text-[18px] tracking-[-0.92px] mb-1">
//                     Build<span className="font-bold">{card.bold}</span>
//                   </p>
//                 </div>
//                 <div className="mx-[14.8px] mb-[10.8px] rounded-xl border border-white/20 overflow-hidden h-[110px]">
//                   <img
//                     src={card.img}
//                     alt={`Build${card.bold}`}
//                     className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
//                     draggable={false}
//                   />
//                 </div>
//               </Link>
//             </motion.div>
//           ))}
//         </div>
//       </div>

//       {/* BUILD watermark */}
//       <div
//         className="absolute bottom-0 left-0 plcont lg:-ml-4 select-none pointer-events-none font-extrabold leading-none z-[2]"
//         style={{
//           fontSize: "clamp(100px, 18vw, 250px)",
//           background:
//             "linear-gradient(180deg, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0.03) 80%, rgba(255,255,255,0) 100%)",
//           WebkitBackgroundClip: "text",
//           WebkitTextFillColor: "transparent",
//           transform: "translateY(12%)",
//         }}
//         aria-hidden
//       >
//         BUILD
//       </div>
//     </section>
//   );
// }
