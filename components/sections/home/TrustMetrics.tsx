// "use client";

// import { useRef } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { useGSAP } from "@gsap/react";

// // Register the ScrollTrigger plugin once at module load.
// gsap.registerPlugin(ScrollTrigger);

// const iconExperience = "/about/metrics/metric1.svg";
// const iconCompleted = "/about/metrics/metric2.svg";
// const iconConstruction = "/about/metrics/metric3.svg";
// const iconUpcoming = "/about/metrics/metric5.svg";
// const iconLand = "/about/metrics/metric6.svg";

// const stats = [
//   {
//     icon: iconExperience,
//     label: "Combined Experience",
//     value: "50",
//     suffix: "+",
//     sub: "",
//   },
//   {
//     icon: iconCompleted,
//     label: "Completed Projects",
//     value: "2M",
//     suffix: "",
//     sub: "Sq ft delivered",
//   },
//   {
//     icon: iconConstruction,
//     label: "Under Construction",
//     value: "1.3M",
//     suffix: "",
//     sub: "Sq ft",
//   },
//   {
//     icon: iconUpcoming,
//     label: "Upcoming Projects",
//     value: "3M",
//     suffix: "",
//     sub: "Sq ft in development",
//   },
//   {
//     icon: iconLand,
//     label: "Land Available",
//     value: "165",
//     suffix: "",
//     sub: "Acres under mandate",
//   },
//   {
//     icon: iconLand,
//     label: "Land Available",
//     value: "165",
//     suffix: "",
//     sub: "Acres under mandate",
//   },
//   {
//     icon: iconLand,
//     label: "Land Available",
//     value: "165",
//     suffix: "",
//     sub: "Acres under mandate",
//   },
// ];

// export default function AboutMetrics() {
//   // =========================================================================
//   // REFS
//   // =========================================================================
//   const componentRef = useRef(null); // Animation scope wrapper
//   const sectionRef = useRef(null); // The 80vh container that gets pinned
//   const sliderRef = useRef(null); // The horizontal track moving on X-axis
//   const containerRef = useRef(null); // Bounding viewport window container
//   const progressBarRef = useRef(null); // The bottom horizontal indicator element

//   // =========================================================================
//   // GSAP SCROLLTRIGGER ENGINE
//   // =========================================================================
//   useGSAP(
//     () => {
//       if (!sliderRef.current || !containerRef.current || !sectionRef.current)
//         return;

//       // Calculate the precise total horizontal overflow width dynamically
//       const getScrollAmount = () => {
//         const totalWidth = sliderRef.current.scrollWidth;
//         const visibleWidth = containerRef.current.clientWidth;
//         return -(totalWidth - visibleWidth);
//       };

//       // Create the synchronized scrubbing timeline driven directly by Lenis
//       const tl = gsap.timeline({
//         scrollTrigger: {
//           trigger: sectionRef.current,
//           pin: true, // Uses GSAP's spacer layout to lock position natively
//           start: "top top", // Pins the instant the 80vh section touches viewport top
//           end: () => `+=${Math.abs(getScrollAmount())}`, // Duration matches required horizontal distance
//           scrub: 1, // Links animation position smoothly to Lenis scroll speed
//           invalidateOnRefresh: true, // Recalculates metrics on window resize events
//           anticipatePin: 1, // Maximizes layout stability over fast scroll velocities
//           pinSpacing: true, // Keeps subsequent sections down until slider completes translation
//         },
//       });

//       // Move the slider row along the X axis
//       tl.to(sliderRef.current, {
//         x: () => getScrollAmount(),
//         ease: "none", // Mandatory for accurate scrub pacing
//       });

//       // Scale the custom progress bar bar concurrently
//       tl.to(
//         progressBarRef.current,
//         {
//           scaleX: 1,
//           ease: "none",
//         },
//         0, // Force timeline sequence parallel execution
//       );

//       // Smooth Snap Boundary Controls
//       const snapTrigger = ScrollTrigger.create({
//         trigger: sectionRef.current,
//         start: "top top",
//         end: () => `+=${Math.abs(getScrollAmount())}`,
//         snap: {
//           snapTo: 1 / (stats.length - 1),
//           duration: { min: 0.1, max: 0.25 },
//           delay: 0.01,
//           ease: "power2.out",
//         },
//       });

//       // Explicit performance refresh handler
//       const handleResize = () => ScrollTrigger.refresh();
//       window.addEventListener("resize", handleResize);

//       return () => {
//         window.removeEventListener("resize", handleResize);
//         tl.scrollTrigger?.kill();
//         tl.kill();
//         snapTrigger.kill();
//       };
//     },
//     { scope: componentRef },
//   );

//   // =========================================================================
//   // JSX LAYOUT
//   // =========================================================================
//   return (
//     <div ref={componentRef} className="relative w-full">
//       <section
//         ref={sectionRef}
//         className="relative h-[80vh] w-full flex flex-col justify-center overflow-hidden py-[64px]"
//         style={{
//           background:
//             "linear-gradient(90deg, #BF584F 0%, #F6736A 100%), #E27244",
//         }}
//       >
//         <div className="relative z-10 w-full mt-10">
//           <div className="px-6 md:px-[120px] text-[12px] tracking-[3.36px] eyebrow text-white/80 mb-4 uppercase">
//             by the numbers
//           </div>

//           <p className="px-6 md:px-[120px] text-[24px] md:text-[28px] text-white font-semibold leading-[30px] md:leading-[33px] tracking-[-0.56px] mb-[40px]">
//             Meaningful scale and expertise across the industrial & logistics
//             infrastructure lifecycle.
//           </p>

//           <div
//             ref={containerRef}
//             className="overflow-hidden w-full px-6 md:px-[120px]"
//           >
//             <div
//               ref={sliderRef}
//               className="flex items-stretch gap-0 will-change-transform"
//             >
//               {stats.map((stat, i) => (
//                 <div
//                   key={`${stat.label}-${i}`}
//                   className={`flex flex-col gap-3 pt-3 pb-1 pr-12 w-[280px] md:w-[310px] shrink-0 ${
//                     i !== 0 ? "border-l border-white/24 pl-12" : "pl-0"
//                   }`}
//                 >
//                   <div className="h-[54px] flex items-end">
//                     <img
//                       src={stat.icon}
//                       alt=""
//                       className="w-[50px] h-[50px] object-contain opacity-90"
//                     />
//                   </div>

//                   <p className="uppercase mt-3 text-[11px] text-[#FFFFFF80] font-semibold tracking-[2.42px]">
//                     {stat.label}
//                   </p>

//                   <div className="stat-number text-white text-3xl md:text-4xl font-bold">
//                     {stat.value}
//                     <span className="font-medium">{stat.suffix}</span>
//                   </div>

//                   {stat.sub && (
//                     <p className="stat-sub text-[#FFFFFF82] tracking-[0.15px] text-[13px]">
//                       {stat.sub}
//                     </p>
//                   )}
//                 </div>
//               ))}
//             </div>
//           </div>

//           <div className="px-6 md:px-[120px] flex items-center gap-3 justify-end mt-8">
//             <span className="text-white/70 font-semibold text-[10.5px] tracking-[2.1px] uppercase">
//               Scroll
//             </span>
//             <div className="w-[46px] h-[1px] bg-white/40 relative overflow-hidden">
//               <div
//                 ref={progressBarRef}
//                 className="absolute inset-y-0 left-0 w-full bg-white origin-left scale-x-0 will-change-transform"
//               />
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }

// "use client";

// import { useRef } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { useGSAP } from "@gsap/react";

// // Register the ScrollTrigger plugin once at module load.
// gsap.registerPlugin(ScrollTrigger);

// const iconExperience = "/about/metrics/metric1.svg";
// const iconCompleted = "/about/metrics/metric2.svg";
// const iconConstruction = "/about/metrics/metric3.svg";
// const iconUpcoming = "/about/metrics/metric5.svg";
// const iconLand = "/about/metrics/metric6.svg";

// const stats = [
//   {
//     icon: iconExperience,
//     label: "Combined Experience",
//     value: "50",
//     suffix: "+",
//     sub: "",
//   },
//   {
//     icon: iconCompleted,
//     label: "Completed Projects",
//     value: "2M",
//     suffix: "",
//     sub: "Sq ft delivered",
//   },
//   {
//     icon: iconConstruction,
//     label: "Under Construction",
//     value: "1.3M",
//     suffix: "",
//     sub: "Sq ft",
//   },
//   {
//     icon: iconUpcoming,
//     label: "Upcoming Projects",
//     value: "3M",
//     suffix: "",
//     sub: "Sq ft in development",
//   },
//   {
//     icon: iconLand,
//     label: "Land Available",
//     value: "165",
//     suffix: "",
//     sub: "Acres under mandate",
//   },
//   {
//     icon: iconLand,
//     label: "Land Available",
//     value: "165",
//     suffix: "",
//     sub: "Acres under mandate",
//   },
//   {
//     icon: iconLand,
//     label: "Land Available",
//     value: "165",
//     suffix: "",
//     sub: "Acres under mandate",
//   },
// ];

// export default function AboutMetrics() {
//   // =========================================================================
//   // REFS
//   // =========================================================================
//   const componentRef = useRef(null); // Animation scope wrapper
//   const sectionRef = useRef(null); // The 80vh container that gets pinned
//   const sliderRef = useRef(null); // The horizontal track moving on X-axis
//   const containerRef = useRef(null); // Bounding viewport window container
//   const progressBarRef = useRef(null); // The bottom horizontal indicator element

//   // =========================================================================
//   // GSAP SCROLLTRIGGER ENGINE
//   // =========================================================================
//   useGSAP(
//     () => {
//       if (!sliderRef.current || !containerRef.current || !sectionRef.current)
//         return;

//       // Calculate the precise total horizontal overflow width dynamically
//       const getScrollAmount = () => {
//         const totalWidth = sliderRef.current.scrollWidth;
//         const visibleWidth = containerRef.current.clientWidth;
//         return -(totalWidth - visibleWidth);
//       };

//       // Create the synchronized scrubbing timeline driven directly by Lenis
//       const tl = gsap.timeline({
//         scrollTrigger: {
//           trigger: sectionRef.current,
//           pin: true, // Uses GSAP's spacer layout to lock position natively
//           start: "bottom bottom", // Pins the instant the 80vh section touches viewport top
//           end: () => `+=${Math.abs(getScrollAmount())}`, // Duration matches required horizontal distance
//           scrub: 1, // Links animation position smoothly to Lenis scroll speed
//           invalidateOnRefresh: true, // Recalculates metrics on window resize events
//           anticipatePin: 1, // Maximizes layout stability over fast scroll velocities
//           pinSpacing: true, // Keeps subsequent sections down until slider completes translation
//         },
//       });

//       // Move the slider row along the X axis
//       tl.to(sliderRef.current, {
//         x: () => getScrollAmount(),
//         ease: "none", // Mandatory for accurate scrub pacing
//       });

//       // Scale the custom progress bar bar concurrently
//       tl.to(
//         progressBarRef.current,
//         {
//           scaleX: 1,
//           ease: "none",
//         },
//         0, // Force timeline sequence parallel execution
//       );

//       // Smooth Snap Boundary Controls
//       const snapTrigger = ScrollTrigger.create({
//         trigger: sectionRef.current,
//         start: "bottom bottom",
//         end: () => `+=${Math.abs(getScrollAmount())}`,
//         snap: {
//           snapTo: 1 / (stats.length - 1),
//           duration: { min: 0.1, max: 0.25 },
//           delay: 0.01,
//           ease: "power2.out",
//         },
//       });

//       // Explicit performance refresh handler
//       const handleResize = () => ScrollTrigger.refresh();
//       window.addEventListener("resize", handleResize);

//       return () => {
//         window.removeEventListener("resize", handleResize);
//         tl.scrollTrigger?.kill();
//         tl.kill();
//         snapTrigger.kill();
//       };
//     },
//     { scope: componentRef },
//   );

//   // =========================================================================
//   // JSX LAYOUT
//   // =========================================================================
//   return (
//     <div ref={componentRef} className="relative w-full">
//       <section
//         ref={sectionRef}
//         className="relative h-screen w-full flex flex-col justify-center overflow-hidden py-[64px]"
//         style={{
//           background:
//             "linear-gradient(90deg, #BF584F 0%, #F6736A 100%), #E27244",
//         }}
//       >
//         <div className="relative z-10 w-full mt-10">
//           <div className="px-6 md:px-[120px] text-[12px] tracking-[3.36px] eyebrow text-white/80 mb-4 uppercase">
//             by the numbers
//           </div>

//           <p className="px-6 md:px-[120px] text-[24px] md:text-[28px] text-white font-semibold leading-[1.08] md:leading-[33px] tracking-[-0.56px] mb-[40px]">
//             Meaningful scale and expertise across the industrial & logistics
//             infrastructure lifecycle.
//           </p>

//           <div
//             ref={containerRef}
//             className="overflow-hidden w-full px-6 md:px-[120px]  "
//           >
//             <div
//               ref={sliderRef}
//               className="flex items-stretch gap-0 will-change-transform"
//             >
//               {stats.map((stat, i) => (
//                 <div
//                   key={`${stat.label}-${i}`}
//                   className={`flex flex-col gap-3 pt-3 pb-1 pr-12 w-[280px] md:w-[310px] shrink-0 ${
//                     i !== 0 ? "border-l border-white/24 pl-12" : "pl-0"
//                   }`}
//                 >
//                   <div className="h-[54px] flex items-end">
//                     <img
//                       src={stat.icon}
//                       alt=""
//                       className="w-[50px] h-[50px] object-contain opacity-90"
//                     />
//                   </div>

//                   <p className="uppercase mt-3 text-[11px] text-[#FFFFFF80] font-semibold tracking-[2.42px]">
//                     {stat.label}
//                   </p>

//                   <div className="stat-number text-white text-3xl md:text-4xl font-bold">
//                     {stat.value}
//                     <span className="font-medium">{stat.suffix}</span>
//                   </div>

//                   {stat.sub && (
//                     <p className="stat-sub text-[#FFFFFF82] tracking-[0.15px] text-[13px]">
//                       {stat.sub}
//                     </p>
//                   )}
//                 </div>
//               ))}
//             </div>
//           </div>

//           <div className="px-6 md:px-[120px] flex items-center gap-3 justify-end mt-8">
//             <span className="text-white/70 font-semibold text-[10.5px] tracking-[2.1px] uppercase">
//               Scroll
//             </span>
//             <div className="w-[46px] h-[1px] bg-white/40 relative overflow-hidden">
//               <div
//                 ref={progressBarRef}
//                 className="absolute inset-y-0 left-0 w-full bg-white origin-left scale-x-0 will-change-transform"
//               />
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }

// "use client";

// import { useRef, useState, useEffect } from "react";
// import { motion, useScroll, useTransform, useSpring } from "framer-motion";

// const iconExperience = "/about/metrics/metric1.svg";
// const iconCompleted = "/about/metrics/metric2.svg";
// const iconConstruction = "/about/metrics/metric3.svg";
// const iconUpcoming = "/about/metrics/metric5.svg";
// const iconLand = "/about/metrics/metric6.svg";

// const stats = [
//   {
//     icon: iconExperience,
//     label: "Combined Experience",
//     value: "50",
//     suffix: "+",
//     sub: "",
//   },
//   {
//     icon: iconCompleted,
//     label: "Completed Projects",
//     value: "2M",
//     suffix: "",
//     sub: "Sq ft delivered",
//   },
//   {
//     icon: iconConstruction,
//     label: "Under Construction",
//     value: "1.3M",
//     suffix: "",
//     sub: "Sq ft",
//   },
//   {
//     icon: iconUpcoming,
//     label: "Upcoming Projects",
//     value: "3M",
//     suffix: "",
//     sub: "Sq ft in development",
//   },
//   {
//     icon: iconLand,
//     label: "Land Available",
//     value: "165",
//     suffix: "",
//     sub: "Acres under mandate",
//   },
//   {
//     icon: iconLand,
//     label: "Land Available",
//     value: "165",
//     suffix: "",
//     sub: "Acres under mandate",
//   },
//   {
//     icon: iconLand,
//     label: "Land Available",
//     value: "165",
//     suffix: "",
//     sub: "Acres under mandate",
//   },
// ];

// export default function AboutMetrics() {
//   // =========================================================================
//   // REFS FOR TRACKING ELEMS
//   // =========================================================================
//   const ghostScrollRef = useRef(null); // Controls full scroll duration
//   const containerRef = useRef(null); // Visible viewport wrapper window
//   const sliderRef = useRef(null); // Element row container track

//   // State to hold dynamic layout metrics safely on client resize events
//   const [scrollRange, setScrollRange] = useState(0);

//   useEffect(() => {
//     const calculateRange = () => {
//       if (sliderRef.current && containerRef.current) {
//         const totalWidth = sliderRef.current.scrollWidth;
//         const visibleWidth = containerRef.current.clientWidth;
//         setScrollRange(totalWidth - visibleWidth);
//       }
//     };

//     // Run layout calculations on initial load and setup event listener
//     calculateRange();
//     window.addEventListener("resize", calculateRange);
//     return () => window.removeEventListener("resize", calculateRange);
//   }, []);

//   // =========================================================================
//   // FRAMER MOTION CORE SCROLL ENGINE
//   // =========================================================================
//   const { scrollYProgress } = useScroll({
//     target: ghostScrollRef,
//     offset: ["start start", "end end"],
//   });

//   // Map vertical progression directly to horizontal translation value
//   const rawX = useTransform(scrollYProgress, [0, 1], [0, -scrollRange]);

//   // Smooth out scrubbing velocities nicely
//   const xTransform = useSpring(rawX, { stiffness: 90, damping: 20, mass: 0.6 });
//   const progressScaleX = useSpring(scrollYProgress, {
//     stiffness: 100,
//     damping: 25,
//   });

//   return (
//     /* Ghost spacing wrapper: h-[300vh] provides deep, cinematic horizontal scroll tracking time */
//     <div ref={ghostScrollRef} className="relative w-full h-[300vh]">
//       {/* Sticky box pins visual stage to viewport layer perfectly */}
//       <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-center">
//         <section
//           className="relative w-full h-full flex flex-col justify-center py-16"
//           style={{
//             background:
//               "linear-gradient(90deg, #BF584F 0%, #F6736A 100%), #E27244",
//           }}
//         >
//           <div className="relative z-10 w-full">
//             {/* Header Content Section */}
//             <div className="px-6 md:px-[120px] text-[12px] tracking-[3.36px] eyebrow text-white/80 mb-4 uppercase">
//               by the numbers
//             </div>

//             <p className="px-6 md:px-[120px] text-[24px] md:text-[36px] text-white font-semibold leading-[1.15] tracking-[-0.56px] max-w-[900px] mb-[64px]">
//               Meaningful scale and expertise across the industrial & logistics
//               infrastructure lifecycle.
//             </p>

//             {/* Clipping Viewport Window */}
//             <div
//               ref={containerRef}
//               className="overflow-hidden w-full px-6 md:px-[120px]"
//             >
//               {/* Horizontal Slider Track Elements Container */}
//               <motion.div
//                 ref={sliderRef}
//                 style={{ x: xTransform }}
//                 className="flex items-stretch gap-0 will-change-transform"
//               >
//                 {stats.map((stat, i) => (
//                   <div
//                     key={`${stat.label}-${i}`}
//                     className={`flex flex-col gap-3 pt-3 pb-1 pr-12 w-[280px] md:w-[340px] shrink-0 ${
//                       i !== 0 ? "border-l border-white/20 pl-12" : "pl-0"
//                     }`}
//                   >
//                     <div className="h-[54px] flex items-end">
//                       <img
//                         src={stat.icon}
//                         alt=""
//                         className="w-[50px] h-[50px] object-contain opacity-90"
//                       />
//                     </div>

//                     <p className="uppercase mt-4 text-[11px] text-white/60 font-semibold tracking-[2.42px]">
//                       {stat.label}
//                     </p>

//                     <div className="stat-number text-white text-4xl md:text-5xl font-bold tracking-tight my-1">
//                       {stat.value}
//                       <span className="font-medium text-3xl md:text-4xl ml-0.5">
//                         {stat.suffix}
//                       </span>
//                     </div>

//                     {stat.sub && (
//                       <p className="stat-sub text-white/70 tracking-[0.15px] text-[13.5px] font-normal">
//                         {stat.sub}
//                       </p>
//                     )}
//                   </div>
//                 ))}
//               </motion.div>
//             </div>

//             {/* Interactive Bottom Tracker Indicator */}
//             <div className="px-6 md:px-[120px] flex items-center gap-4 justify-end mt-16">
//               <span className="text-white/70 font-semibold text-[10.5px] tracking-[2.1px] uppercase">
//                 Scroll
//               </span>
//               <div className="w-[60px] h-[1px] bg-white/30 relative overflow-hidden">
//                 <motion.div
//                   style={{ scaleX: progressScaleX }}
//                   className="absolute inset-y-0 left-0 w-full bg-white origin-left will-change-transform"
//                 />
//               </div>
//             </div>
//           </div>
//         </section>
//       </div>
//     </div>
//   );
// }

"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

const iconExperience = "/about/metrics/metric1.svg";
const iconCompleted = "/about/metrics/metric2.svg";
const iconConstruction = "/about/metrics/metric3.svg";
const iconUpcoming = "/about/metrics/metric5.svg";
const iconLand = "/about/metrics/metric6.svg";

const stats = [
  {
    icon: iconExperience,
    label: "Combined Experience",
    value: "50",
    suffix: "+",
    sub: "",
  },
  {
    icon: iconCompleted,
    label: "Completed Projects",
    value: "2M",
    suffix: "",
    sub: "Sq ft delivered",
  },
  {
    icon: iconConstruction,
    label: "Under Construction",
    value: "1.3M",
    suffix: "",
    sub: "Sq ft",
  },
  {
    icon: iconUpcoming,
    label: "Upcoming Projects",
    value: "3M",
    suffix: "",
    sub: "Sq ft in development",
  },
  {
    icon: iconLand,
    label: "Land Available",
    value: "165",
    suffix: "",
    sub: "Acres under mandate",
  },
  {
    icon: iconLand,
    label: "Land Available",
    value: "165",
    suffix: "",
    sub: "Acres under mandate",
  },
  {
    icon: iconLand,
    label: "Land Available",
    value: "165",
    suffix: "",
    sub: "Acres under mandate",
  },
];

export default function TrustMetrics() {
  // =========================================================================
  // REFS FOR TRACKING ELEMS
  // =========================================================================
  // const ghostScrollRef = useRef(null);
  // const containerRef = useRef(null);
  // const sliderRef = useRef(null);

  const ghostScrollRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);
  const [scrollRange, setScrollRange] = useState(0);

  useEffect(() => {
    const calculateRange = () => {
      if (sliderRef.current && containerRef.current) {
        const totalWidth = sliderRef.current.scrollWidth;
        const visibleWidth = containerRef.current.clientWidth;
        setScrollRange(totalWidth - visibleWidth);
      }
    };

    calculateRange();
    window.addEventListener("resize", calculateRange);
    return () => window.removeEventListener("resize", calculateRange);
  }, []);

  // =========================================================================
  // FRAMER MOTION CORE SCROLL ENGINE
  // =========================================================================
  const { scrollYProgress } = useScroll({
    target: ghostScrollRef,
    offset: ["start start", "end end"],
  });

  const rawX = useTransform(scrollYProgress, [0, 1], [0, -scrollRange]);

  const xTransform = useSpring(rawX, { stiffness: 90, damping: 20, mass: 0.6 });
  const progressScaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 25,
  });

  return (
    <div ref={ghostScrollRef} className="relative w-full h-[300vh]">
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-center">
        <section
          className="relative w-full h-full flex flex-col justify-center py-16"
          style={{
            background:
              "linear-gradient(90deg, #BF584F 0%, #F6736A 100%), #E27244",
          }}
        >
          <div className="relative z-10 w-full">
            {/* Header Content Section */}
            <div className="px-6 md:px-[120px] text-[12px] tracking-[3.36px] eyebrow text-white/80 mb-4 uppercase">
              by the numbers
            </div>

            <p className="px-6 md:px-[120px] text-[24px] md:text-[36px] text-white font-semibold leading-[1.15] tracking-[-0.56px] mb-[64px]">
              Meaningful scale and expertise across the industrial & logistics
              infrastructure lifecycle.
            </p>

            {/* Clipping Viewport Window */}
            {/* Note: Removed px-6 md:px-[120px] from parent wrapper so track matches total window width bounds natively */}
            <div ref={containerRef} className="overflow-hidden w-full">
              {/* Horizontal Slider Track Elements Container */}
              {/* Added padding directly here so the first card matches your content grid align line layout */}
              <motion.div
                ref={sliderRef}
                style={{ x: xTransform }}
                className="flex items-stretch gap-0 will-change-transform px-6 "
              >
                {stats.map((stat, i) => (
                  <div
                    key={`${stat.label}-${i}`}
                    className={`flex flex-col gap-3 pt-3 pb-1 w-[280px] md:w-[340px] shrink-0 ${
                      i !== 0
                        ? "border-l border-white/20 pl-12 pr-12"
                        : "pl-0 pr-12"
                    }`}
                  >
                    <div className="h-[54px] flex items-end">
                      <img
                        src={stat.icon}
                        alt=""
                        className="w-[50px] h-[50px] object-contain opacity-90"
                      />
                    </div>

                    <p className="uppercase mt-4 text-[11px] text-white/60 font-semibold tracking-[2.42px]">
                      {stat.label}
                    </p>

                    <div className="stat-number text-white text-4xl md:text-5xl font-bold tracking-tight my-1">
                      {stat.value}
                      <span className="font-medium text-3xl md:text-4xl ml-0.5">
                        {stat.suffix}
                      </span>
                    </div>

                    {stat.sub && (
                      <p className="stat-sub text-white/70 tracking-[0.15px] text-[13.5px] font-normal">
                        {stat.sub}
                      </p>
                    )}
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Interactive Bottom Tracker Indicator */}
            <div className="px-6 md:px-[120px] flex items-center gap-4 justify-end mt-16">
              <span className="text-white/70 font-semibold text-[10.5px] tracking-[2.1px] uppercase">
                Scroll
              </span>
              <div className="w-[60px] h-[1px] bg-white/30 relative overflow-hidden">
                <motion.div
                  style={{ scaleX: progressScaleX }}
                  className="absolute inset-y-0 left-0 w-full bg-white origin-left will-change-transform"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
