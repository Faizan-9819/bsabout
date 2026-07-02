// // "use client";

// // import React, { useState, useRef } from "react";
// // import {
// //   motion,
// //   useScroll,
// //   useMotionValueEvent,
// //   useTransform,
// //   AnimatePresence,
// // } from "framer-motion";

// // const SLIDES = [
// //   {
// //     title: "",
// //     text: "To shape industrial infrastructure that enables sustainable economic growth while creating enduring value for businesses, communities, and stakeholders.",
// //     image: "/about/storycarousel/slide1.webp",
// //     sub: "our story",
// //   },
// //   {
// //     title: "",
// //     text: "Delivering institutional-grade assets that strategically scale capacity and empower logistics networks to operate with global efficiency.",
// //     image: "/about/storycarousel/slide2.webp",
// //     sub: "our vision",
// //   },
// //   {
// //     title: "",
// //     text: "Aligning landowners, asset operators, and global capital partners into a singular unified ecosystem that delivers shared prosperity.",
// //     image: "/about/storycarousel/slide3.webp",
// //     sub: "our mission",
// //   },
// // ];

// // function buildRange(index, segment, fade) {
// //   const half = fade / 2;
// //   const segStart = index * segment;
// //   const segEnd = (index + 1) * segment;
// //   const raw = [segStart, segStart + half, segEnd - half, segEnd];
// //   const clamped = raw.map((v) => Math.min(1, Math.max(0, v)));
// //   for (let k = 1; k < clamped.length; k++) {
// //     if (clamped[k] <= clamped[k - 1]) clamped[k] = clamped[k - 1] + 0.0001;
// //   }
// //   return clamped;
// // }

// // function BackgroundLayer({
// //   index,
// //   segment,
// //   fade,
// //   scrollYProgress,
// //   image,
// //   isFirst,
// //   isLast,
// // }) {
// //   const range = buildRange(index, segment, fade);
// //   const opacityOutput = [isFirst ? 1 : 0, 1, 1, isLast ? 1 : 0];
// //   const scaleOutput = [isFirst ? 1 : 1.02, 1, 1, isLast ? 1 : 0.99];
// //   const opacity = useTransform(scrollYProgress, range, opacityOutput);
// //   const scale = useTransform(scrollYProgress, range, scaleOutput);

// //   return (
// //     <motion.img
// //       src={image}
// //       alt="Our Story Background Step"
// //       style={{ opacity, scale }}
// //       className="absolute inset-0 w-full h-full object-cover -z-10 pointer-events-none"
// //     />
// //   );
// // }

// // export default function StoryCarousel() {
// //   const [activeIndex, setActiveIndex] = useState(0);
// //   const containerRef = useRef(null);

// //   const { scrollYProgress } = useScroll({
// //     target: containerRef,
// //     offset: ["start start", "end end"],
// //   });

// //   const segment = 1 / SLIDES.length;
// //   const fade = segment * 0.18;

// //   useMotionValueEvent(scrollYProgress, "change", (progress) => {
// //     const nextIndex = Math.min(
// //       SLIDES.length - 1,
// //       Math.max(0, Math.floor(progress / segment)),
// //     );
// //     setActiveIndex((prev) => (prev !== nextIndex ? nextIndex : prev));
// //   });

// //   return (
// //     <div ref={containerRef} className="relative h-[380vh] w-full max-lg:h-auto">
// //       <section className="sticky top-0 w-full h-screen min-h-[600px] flex items-center select-none overflow-hidden bg-navy max-lg:relative max-lg:h-auto max-lg:py-16">
// //         {/* BACKGROUND CROSS-FADE — scroll-linked */}
// //         {SLIDES.map((slide, index) => (
// //           <BackgroundLayer
// //             key={slide.image}
// //             index={index}
// //             segment={segment}
// //             fade={fade}
// //             scrollYProgress={scrollYProgress}
// //             image={slide.image}
// //             isFirst={index === 0}
// //             isLast={index === SLIDES.length - 1}
// //           />
// //         ))}

// //         {/* Ambient Overlay Vignette */}
// //         <div className="absolute inset-0 bg-gradient-to-r from-navy/90 via-navy/60 to-transparent -z-10" />

// //         {/* Global Structural Layout Container */}
// //         <div className="fix flex flex-row items-center justify-between relative max-lg:flex-col max-lg:justify-center max-lg:px-4">
// //           {/* Left Text Column — Fixed container */}
// //           <div className="relative w-full lg:w-7/12  flex flex-col justify-center text-white">
// //             <div className=" text-orange text-[44px]! font-extrabold leading-[1.1]  font-title flex items-center gap-2 mb-4">
// //               Guided by purpose.
// //               <br />
// //               Driven by long-term thinking.
// //             </div>
// //             {/* STATIC HEADER — Remains untouched and in place when changing slides */}
// //             {/* <div className="eyebrow text-orange font-title  flex items-center gap-2 mb-4">
// //               <span className="w-6 h-[2px] bg-orange block"></span>
// //               {SLIDES[activeIndex].sub}
// //             </div> */}

// //             {/* DYNAMIC TEXT — Only changes the slide content */}
// //             <AnimatePresence mode="wait">
// //               <motion.div
// //                 key={activeIndex}
// //                 initial={{ opacity: 0, y: 10 }}
// //                 animate={{ opacity: 1, y: 0 }}
// //                 exit={{ opacity: 0, y: -10 }}
// //                 transition={{ duration: 0.35, ease: "easeInOut" }}
// //                 className="space-y-6"
// //               >
// //                 <div className="eyebrow text-orange font-title  flex items-center gap-2 mb-4">
// //                   {/* <span className="w-6 h-[2px] bg-orange block"></span> */}
// //                   {SLIDES[activeIndex].sub}
// //                 </div>
// //                 <h2 className="text-5xl font-title font-medium whitespace-pre-line tracking-tight leading-tight text-white max-lg:text-3xl">
// //                   {SLIDES[activeIndex].title}
// //                 </h2>

// //                 <p className="text-lg font-body text-white/80 max-w-[428px] text-[40px]! leading-[1.1] tracking-[0%] ">
// //                   {SLIDES[activeIndex].text}
// //                 </p>
// //               </motion.div>
// //             </AnimatePresence>
// //           </div>

// //           {/* Right Layout Column: Fixed Operational Tracking Bar Elements */}
// //           <div className="flex flex-col space-y-4 z-20 shrink-0 max-lg:flex-row max-lg:space-y-0 max-lg:space-x-4 max-lg:mt-12">
// //             {SLIDES.map((_, index) => {
// //               const isActive = index === activeIndex;
// //               return (
// //                 <button
// //                   key={index}
// //                   onClick={() => {
// //                     if (!containerRef.current) return;
// //                     const rect = containerRef.current.getBoundingClientRect();
// //                     const scrollableHeight =
// //                       containerRef.current.offsetHeight - window.innerHeight;
// //                     const targetProgress = segment * index + segment / 2;
// //                     const targetScrollY =
// //                       window.scrollY +
// //                       rect.top +
// //                       targetProgress * scrollableHeight;
// //                     window.scrollTo({ top: targetScrollY, behavior: "smooth" });
// //                   }}
// //                   className="group relative flex items-center justify-center focus:outline-none cursor-pointer"
// //                   aria-label={`Go to slide ${index + 1}`}
// //                 >
// //                   <div
// //                     className={`rounded-full transition-all duration-500 ease-in-out ${
// //                       isActive
// //                         ? "bg-amber-600 h-8 w-1 max-lg:w-8 max-lg:h-1"
// //                         : "bg-white/30 h-6 w-1 max-lg:w-6 max-lg:h-1 group-hover:bg-white/60"
// //                     }`}
// //                   />
// //                 </button>
// //               );
// //             })}
// //           </div>
// //         </div>
// //       </section>
// //     </div>
// //   );
// // }

// "use client";

// import React, { useState, useRef } from "react";
// import {
//   motion,
//   useScroll,
//   useMotionValueEvent,
//   useTransform,
//   AnimatePresence,
// } from "framer-motion";

// const SLIDES = [
//   {
//     title: "",
//     text: "To shape industrial infrastructure that enables sustainable economic growth while creating enduring value for businesses, communities, and stakeholders.",
//     image: "/about/storycarousel/slide1.webp",
//     sub: "our story",
//   },
//   {
//     title: "",
//     text: "Delivering institutional-grade assets that strategically scale capacity and empower logistics networks to operate with global efficiency.",
//     image: "/about/storycarousel/slide2.webp",
//     sub: "our vision",
//   },
//   {
//     title: "",
//     text: "Aligning landowners, asset operators, and global capital partners into a singular unified ecosystem that delivers shared prosperity.",
//     image: "/about/storycarousel/slide3.webp",
//     sub: "our mission",
//   },
// ];

// function buildRange(index, segment, fade) {
//   const half = fade / 2;
//   const segStart = index * segment;
//   const segEnd = (index + 1) * segment;
//   const raw = [segStart, segStart + half, segEnd - half, segEnd];
//   const clamped = raw.map((v) => Math.min(1, Math.max(0, v)));
//   for (let k = 1; k < clamped.length; k++) {
//     if (clamped[k] <= clamped[k - 1]) clamped[k] = clamped[k - 1] + 0.0001;
//   }
//   return clamped;
// }

// function BackgroundLayer({
//   index,
//   segment,
//   fade,
//   scrollYProgress,
//   image,
//   isFirst,
//   isLast,
// }) {
//   const range = buildRange(index, segment, fade);
//   const opacityOutput = [isFirst ? 1 : 0, 1, 1, isLast ? 1 : 0];
//   const scaleOutput = [isFirst ? 1 : 1.02, 1, 1, isLast ? 1 : 0.99];
//   const opacity = useTransform(scrollYProgress, range, opacityOutput);
//   const scale = useTransform(scrollYProgress, range, scaleOutput);

//   return (
//     <motion.img
//       src={image}
//       alt="Our Story Background Step"
//       style={{ opacity, scale }}
//       className="absolute inset-0 w-full h-full object-cover -z-10 pointer-events-none"
//     />
//   );
// }

// export default function StoryCarousel() {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const containerRef = useRef(null);

//   const { scrollYProgress } = useScroll({
//     target: containerRef,
//     offset: ["start start", "end end"],
//   });

//   const segment = 1 / SLIDES.length;
//   const fade = segment * 0.18;

//   useMotionValueEvent(scrollYProgress, "change", (progress) => {
//     const nextIndex = Math.min(
//       SLIDES.length - 1,
//       Math.max(0, Math.floor(progress / segment)),
//     );
//     setActiveIndex((prev) => (prev !== nextIndex ? nextIndex : prev));
//   });

//   return (
//     <div ref={containerRef} className="relative h-[380vh] w-full max-lg:h-auto">
//       <section className="sticky top-0 w-full h-screen min-h-[600px] flex items-center select-none overflow-hidden bg-navy max-lg:relative max-lg:h-auto max-lg:py-16">
//         {/* BACKGROUND CROSS-FADE — scroll-linked */}
//         {SLIDES.map((slide, index) => (
//           <BackgroundLayer
//             key={slide.image}
//             index={index}
//             segment={segment}
//             fade={fade}
//             scrollYProgress={scrollYProgress}
//             image={slide.image}
//             isFirst={index === 0}
//             isLast={index === SLIDES.length - 1}
//           />
//         ))}

//         {/* Ambient Overlay Vignette */}
//         <div className="absolute inset-0 bg-gradient-to-r from-navy/90 via-navy/60 to-transparent -z-10" />

//         {/* Global Structural Layout Container */}
//         {/* Changed items-center to items-start so things anchor from the top */}
//         <div className="fix flex flex-row items-start justify-between relative max-lg:flex-col max-lg:justify-center max-lg:px-4">
//           {/* Left Text Column — Fixed container */}
//           <div className="relative w-full lg:w-7/12 flex flex-col justify-start text-white">
//             <div className="text-orange md:text-[44px]! text-[26px] font-extrabold leading-[1.1] font-title flex items-center gap-2 mb-8">
//               Guided by purpose.
//               <br />
//               Driven by long-term thinking.
//             </div>

//             {/* DYNAMIC TEXT WRAPPER — Set to display block with an explicit min-height or height layout constraint if needed, ensuring content always cascades downward */}
//             <div className="relative min-h-[280px] w-full block">
//               <AnimatePresence mode="wait">
//                 <motion.div
//                   key={activeIndex}
//                   initial={{ opacity: 0, y: 10 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   exit={{ opacity: 0, y: -10 }}
//                   transition={{ duration: 0.35, ease: "easeInOut" }}
//                   className="space-y-6 absolute top-0 left-0 w-full"
//                 >
//                   <div className="eyebrow text-orange font-title flex items-center gap-2 mb-4">
//                     {SLIDES[activeIndex].sub}
//                   </div>
//                   {/* {SLIDES[activeIndex].title && (
//                     <h2 className="text-5xl font-title font-medium whitespace-pre-line tracking-tight leading-tight text-white max-lg:text-3xl">
//                       {SLIDES[activeIndex].title}
//                     </h2>
//                   )} */}

//                   <p className="text-lg font-body text-white/80 max-w-[428px]  md:text-[40px]! text-[26px] leading-[1.1] tracking-[0%]">
//                     {SLIDES[activeIndex].text}
//                   </p>
//                 </motion.div>
//               </AnimatePresence>
//             </div>
//           </div>

//           {/* Right Layout Column: Fixed Operational Tracking Bar Elements */}
//           {/* Added self-center or self-start styling to separate it from the top alignment grid rule */}
//           <div className="flex flex-col space-y-4 z-20 shrink-0 self-center max-lg:flex-row max-lg:space-y-0 max-lg:space-x-4 max-lg:mt-12">
//             {SLIDES.map((_, index) => {
//               const isActive = index === activeIndex;
//               return (
//                 <button
//                   key={index}
//                   onClick={() => {
//                     if (!containerRef.current) return;
//                     const rect = containerRef.current.getBoundingClientRect();
//                     const scrollableHeight =
//                       containerRef.current.offsetHeight - window.innerHeight;
//                     const targetProgress = segment * index + segment / 2;
//                     const targetScrollY =
//                       window.scrollY +
//                       rect.top +
//                       targetProgress * scrollableHeight;
//                     window.scrollTo({ top: targetScrollY, behavior: "smooth" });
//                   }}
//                   className="group relative flex items-center justify-center focus:outline-none cursor-pointer"
//                   aria-label={`Go to slide ${index + 1}`}
//                 >
//                   <div
//                     className={`rounded-full transition-all duration-500 ease-in-out ${
//                       isActive
//                         ? "bg-amber-600 h-8 w-1 max-lg:w-8 max-lg:h-1"
//                         : "bg-white/30 h-6 w-1 max-lg:w-6 max-lg:h-1 group-hover:bg-white/60"
//                     }`}
//                   />
//                 </button>
//               );
//             })}
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }

"use client";

import React, { useState, useRef } from "react";
import {
  motion,
  useScroll,
  useMotionValueEvent,
  useTransform,
  AnimatePresence,
} from "framer-motion";

const SLIDES = [
  {
    title: "",
    text: "To shape industrial infrastructure that enables sustainable economic growth while creating enduring value for businesses, communities, and stakeholders.",
    image: "/about/storycarousel/slide1.webp",
    sub: "our story",
  },
  {
    title: "",
    text: "Delivering institutional-grade assets that strategically scale capacity and empower logistics networks to operate with global efficiency.",
    image: "/about/storycarousel/slide2.webp",
    sub: "our vision",
  },
  {
    title: "",
    text: "Aligning landowners, asset operators, and global capital partners into a singular unified ecosystem that delivers shared prosperity.",
    image: "/about/storycarousel/slide3.webp",
    sub: "our mission",
  },
];

function buildRange(index, segment, fade) {
  const half = fade / 2;
  const segStart = index * segment;
  const segEnd = (index + 1) * segment;
  const raw = [segStart, segStart + half, segEnd - half, segEnd];
  const clamped = raw.map((v) => Math.min(1, Math.max(0, v)));
  for (let k = 1; k < clamped.length; k++) {
    if (clamped[k] <= clamped[k - 1]) clamped[k] = clamped[k - 1] + 0.0001;
  }
  return clamped;
}

function BackgroundLayer({
  index,
  segment,
  fade,
  scrollYProgress,
  image,
  isFirst,
  isLast,
}) {
  const range = buildRange(index, segment, fade);
  const opacityOutput = [isFirst ? 1 : 0, 1, 1, isLast ? 1 : 0];
  const scaleOutput = [isFirst ? 1 : 1.02, 1, 1, isLast ? 1 : 0.99];
  const opacity = useTransform(scrollYProgress, range, opacityOutput);
  const scale = useTransform(scrollYProgress, range, scaleOutput);

  return (
    <motion.img
      src={image}
      alt="Our Story Background Step"
      style={{ opacity, scale }}
      className="absolute inset-0 w-full h-full object-cover -z-10 pointer-events-none"
    />
  );
}

export default function StoryCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const segment = 1 / SLIDES.length;
  const fade = segment * 0.18;

  useMotionValueEvent(scrollYProgress, "change", (progress) => {
    const nextIndex = Math.min(
      SLIDES.length - 1,
      Math.max(0, Math.floor(progress / segment)),
    );
    setActiveIndex((prev) => (prev !== nextIndex ? nextIndex : prev));
  });

  return (
    <div ref={containerRef} className="relative h-[380vh] w-full">
      <section className="sticky top-0 w-full h-screen min-h-[450px] md:min-h-[600px] flex items-center select-none overflow-hidden bg-navy">
        {/* BACKGROUND CROSS-FADE — scroll-linked */}
        {SLIDES.map((slide, index) => (
          <BackgroundLayer
            key={slide.image}
            index={index}
            segment={segment}
            fade={fade}
            scrollYProgress={scrollYProgress}
            image={slide.image}
            isFirst={index === 0}
            isLast={index === SLIDES.length - 1}
          />
        ))}

        {/* Ambient Overlay Vignette */}
        <div className="absolute inset-0 bg-gradient-to-r from-navy/90 via-navy/60 to-transparent -z-10" />

        {/* Global Structural Layout Container — Kept uniform across desktop and mobile */}
        <div className="fix flex flex-row items-start justify-between relative w-full px-4 md:px-8 gap-4">
          {/* Left Text Column — Preserved widths and layout flow */}
          <div className="relative w-9/12 md:w-7/12 flex flex-col justify-start text-white">
            <div className="text-orange text-[26px] md:text-[44px]! font-extrabold leading-[1.1] font-title flex items-center gap-2 mb-4 md:mb-8">
              Guided by purpose.
              <br />
              Driven by long-term thinking.
            </div>

            {/* DYNAMIC TEXT WRAPPER */}
            <div className="relative min-h-[180px] sm:min-h-[220px] md:min-h-[280px] w-full block">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.35, ease: "easeInOut" }}
                  className="space-y-3 md:space-y-6 absolute top-0 left-0 w-full"
                >
                  <div className="eyebrow text-orange text-[20px] md:text-base font-title flex items-center gap-2 mb-2 md:mb-4 uppercase tracking-wider">
                    {SLIDES[activeIndex].sub}
                  </div>

                  <p className="font-body text-white/80 max-w-[428px] text-[26px] md:text-[40px]! leading-[1.2] md:leading-[1.1] tracking-[0%]">
                    {SLIDES[activeIndex].text}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Right Layout Column: Fixed Operational Tracking Bar Elements — Vertical layout strictly maintained */}
          <div className="flex flex-col space-y-3 md:space-y-4 z-20 shrink-0 self-center">
            {SLIDES.map((_, index) => {
              const isActive = index === activeIndex;
              return (
                <button
                  key={index}
                  onClick={() => {
                    if (!containerRef.current) return;
                    const rect = containerRef.current.getBoundingClientRect();
                    const scrollableHeight =
                      containerRef.current.offsetHeight - window.innerHeight;
                    const targetProgress = segment * index + segment / 2;
                    const targetScrollY =
                      window.scrollY +
                      rect.top +
                      targetProgress * scrollableHeight;
                    window.scrollTo({ top: targetScrollY, behavior: "smooth" });
                  }}
                  className="group relative flex items-center justify-center focus:outline-none cursor-pointer p-1"
                  aria-label={`Go to slide ${index + 1}`}
                >
                  <div
                    className={`rounded-full transition-all duration-500 ease-in-out w-1 ${
                      isActive
                        ? "bg-amber-600 h-6 md:h-8"
                        : "bg-white/30 h-4 md:h-6 group-hover:bg-white/60"
                    }`}
                  />
                </button>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
