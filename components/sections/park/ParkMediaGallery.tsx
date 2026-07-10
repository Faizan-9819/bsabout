// // // "use client";

// // // import { useCallback, useEffect, useState } from "react";
// // // import useEmblaCarousel from "embla-carousel-react";
// // // import { motion, AnimatePresence } from "framer-motion";
// // // import { ArrowLeft, ArrowRight } from "lucide-react";

// // // const tabs = ["Videos", "Images", "Masterplan"] as const;
// // // type Tab = (typeof tabs)[number];

// // // const IMAGE_POOL = ["/park/media.webp", "/park/media.webp", "/park/media.webp"];

// // // function buildSlides(seed: number): string[] {
// // //   return Array.from(
// // //     { length: 6 },
// // //     (_, i) => IMAGE_POOL[(i + seed) % IMAGE_POOL.length],
// // //   );
// // // }

// // // const slidesByTab: Record<Tab, string[]> = {
// // //   Videos: buildSlides(0),
// // //   Images: buildSlides(1),
// // //   Masterplan: buildSlides(2),
// // // };

// // // export default function ParkMediaGallery() {
// // //   const [activeTab, setActiveTab] = useState<Tab>("Videos");
// // //   const [activeIndex, setActiveIndex] = useState(0);
// // //   const [emblaRef, emblaApi] = useEmblaCarousel({
// // //     loop: true,
// // //     align: "start",
// // //     slidesToScroll: 1,
// // //     watchDrag: false,
// // //   });

// // //   const slides = slidesByTab[activeTab];

// // //   const handleTab = (tab: Tab) => {
// // //     if (tab === activeTab) return;
// // //     setActiveTab(tab);
// // //     setActiveIndex(0);
// // //   };

// // //   const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
// // //   const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

// // //   useEffect(() => {
// // //     if (!emblaApi) return;
// // //     const onSelect = () => setActiveIndex(emblaApi.selectedScrollSnap());
// // //     onSelect();
// // //     emblaApi.on("select", onSelect);
// // //     emblaApi.on("reInit", onSelect);
// // //     return () => {
// // //       emblaApi.off("select", onSelect);
// // //       emblaApi.off("reInit", onSelect);
// // //     };
// // //   }, [emblaApi]);

// // //   useEffect(() => {
// // //     emblaApi?.scrollTo(0);
// // //   }, [activeTab, emblaApi]);

// // //   return (
// // //     <section
// // //       className="overflow-hidden"
// // //       style={{ background: "linear-gradient(90deg, #bf584f 0%, #f6736a 100%)" }}
// // //     >
// // //       <div className="fix py-[60px] lg:py-[80px]">
// // //         <div className="flex flex-col gap-5 mb-8 lg:mb-[42px]">
// // //           <div className="flex items-center gap-[13px]">
// // //             <span className="h-px w-7 bg-white" />
// // //             <span className="text-[12px] font-semibold tracking-[3.36px] uppercase text-white">
// // //               Gallery
// // //             </span>
// // //           </div>
// // //           <h2 className="font-bold leading-[1.1] tracking-[-1.568px] text-white text-[28px] sm:text-[40px] lg:text-[56px]">
// // //             Media Gallery
// // //           </h2>

// // //           <div className="flex flex-wrap gap-[10px]">
// // //             {tabs.map((tab) => {
// // //               const isActive = tab === activeTab;
// // //               return (
// // //                 <button
// // //                   key={tab}
// // //                   onClick={() => handleTab(tab)}
// // //                   className={`px-[21px] py-[11px] text-[14px] font-semibold tracking-[-0.14px] border transition-colors ${
// // //                     isActive
// // //                       ? "bg-white border-[#f56e6a] text-[#f56e6a]"
// // //                       : "border-white text-white hover:bg-white/10"
// // //                   }`}
// // //                 >
// // //                   {tab}
// // //                 </button>
// // //               );
// // //             })}
// // //           </div>
// // //         </div>

// // //         <AnimatePresence mode="wait">
// // //           <motion.div
// // //             key={activeTab}
// // //             initial={{ opacity: 0 }}
// // //             animate={{ opacity: 1 }}
// // //             exit={{ opacity: 0 }}
// // //             transition={{ duration: 0.3 }}
// // //             className="relative pb-[80px]"
// // //           >
// // //             <div className="overflow-hidden min-h-[500px]" ref={emblaRef}>
// // //               <div className="flex items-start gap-[24px] lg:gap-[50px]">
// // //                 {slides.map((src, i) => {
// // //                   const isActive = i === activeIndex;
// // //                   return (
// // //                     <div
// // //                       key={i}
// // //                       className="shrink-0 basis-[76%] sm:basis-[62%] lg:basis-[55%] flex items-start justify-end"
// // //                     >
// // //                       <motion.div
// // //                         initial={false}
// // //                         animate={{
// // //                           scale: isActive ? 1 : 0.55,
// // //                           y: isActive ? 0 : "-22.5%",
// // //                           marginRight: isActive ? -96 : 20,
// // //                         }}
// // //                         transition={{
// // //                           scale: { duration: 0.7, ease: [0.7, 0, 0.4, 1] },
// // //                           y: { duration: 0.7, ease: [0.7, 0, 0.4, 1] },
// // //                           marginRight: {
// // //                             duration: 0.7,
// // //                             ease: [0.7, 0, 0.4, 1],
// // //                           },
// // //                         }}
// // //                         className="min-w-full rounded-[22px] overflow-hidden"
// // //                       >
// // //                         <img
// // //                           src={src}
// // //                           alt=""
// // //                           className="w-full h-full object-cover"
// // //                         />
// // //                       </motion.div>
// // //                     </div>
// // //                   );
// // //                 })}
// // //               </div>
// // //             </div>

// // //             {/* Nav arrows */}
// // //             <div className="absolute bottom-20 right-0 flex items-center gap-[14px]">
// // //               <button
// // //                 onClick={scrollPrev}
// // //                 aria-label="Previous slide"
// // //                 className="w-[54px] h-[54px] rounded-full border border-white/50 flex items-center justify-center text-white hover:bg-white/10 transition-colors cursor-pointer"
// // //               >
// // //                 <ArrowLeft size={18} strokeWidth={1.8} />
// // //               </button>
// // //               <button
// // //                 onClick={scrollNext}
// // //                 aria-label="Next slide"
// // //                 className="w-[54px] h-[54px] rounded-full border border-white/50 flex items-center justify-center text-white hover:bg-white/10 transition-colors cursor-pointer"
// // //               >
// // //                 <ArrowRight size={18} strokeWidth={1.8} />
// // //               </button>
// // //             </div>
// // //           </motion.div>
// // //         </AnimatePresence>
// // //       </div>
// // //     </section>
// // //   );
// // // }

// // "use client";

// // import { useCallback, useEffect, useState } from "react";
// // import useEmblaCarousel from "embla-carousel-react";
// // import { motion, AnimatePresence } from "framer-motion";
// // import { ArrowLeft, ArrowRight } from "lucide-react";

// // const tabs = ["Videos", "Images", "Masterplan"] as const;
// // type Tab = (typeof tabs)[number];

// // const IMAGE_POOL = ["/park/media.webp", "/park/media.webp", "/park/media.webp"];

// // function buildSlides(seed: number): string[] {
// //   return Array.from(
// //     { length: 6 },
// //     (_, i) => IMAGE_POOL[(i + seed) % IMAGE_POOL.length],
// //   );
// // }

// // const slidesByTab: Record<Tab, string[]> = {
// //   Videos: buildSlides(0),
// //   Images: buildSlides(1),
// //   Masterplan: buildSlides(2),
// // };

// // export default function ParkMediaGallery() {
// //   const [activeTab, setActiveTab] = useState<Tab>("Videos");
// //   const [activeIndex, setActiveIndex] = useState(0);
// //   const [emblaRef, emblaApi] = useEmblaCarousel({
// //     loop: true,
// //     align: "start",
// //     slidesToScroll: 1,
// //     watchDrag: false,
// //     duration: 30,
// //   });

// //   const slides = slidesByTab[activeTab];

// //   const handleTab = (tab: Tab) => {
// //     if (tab === activeTab) return;
// //     setActiveTab(tab);
// //     setActiveIndex(0);
// //   };

// //   const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
// //   const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

// //   useEffect(() => {
// //     if (!emblaApi) return;
// //     const onSelect = () => setActiveIndex(emblaApi.selectedScrollSnap());
// //     onSelect();
// //     emblaApi.on("select", onSelect);
// //     emblaApi.on("reInit", onSelect);
// //     return () => {
// //       emblaApi.off("select", onSelect);
// //       emblaApi.off("reInit", onSelect);
// //     };
// //   }, [emblaApi]);

// //   useEffect(() => {
// //     emblaApi?.scrollTo(0);
// //   }, [activeTab, emblaApi]);

// //   return (
// //     <section
// //       className="overflow-hidden"
// //       style={{ background: "linear-gradient(90deg, #bf584f 0%, #f6736a 100%)" }}
// //     >
// //       <div className="fix py-[60px] lg:py-[80px]">
// //         <div className="flex flex-col gap-5 mb-8 lg:mb-[42px]">
// //           <div className="flex items-center gap-[13px]">
// //             <span className="h-px w-7 bg-white" />
// //             <span className="text-[12px] font-semibold tracking-[3.36px] uppercase text-white">
// //               Gallery
// //             </span>
// //           </div>
// //           <h2 className="font-bold leading-[1.1] tracking-[-1.568px] text-white text-[28px] sm:text-[40px] lg:text-[56px]">
// //             Media Gallery
// //           </h2>

// //           <div className="flex flex-wrap gap-[10px]">
// //             {tabs.map((tab) => {
// //               const isActive = tab === activeTab;
// //               return (
// //                 <button
// //                   key={tab}
// //                   onClick={() => handleTab(tab)}
// //                   className={`px-[21px] py-[11px] text-[14px] font-semibold tracking-[-0.14px] border transition-colors ${
// //                     isActive
// //                       ? "bg-white border-[#f56e6a] text-[#f56e6a]"
// //                       : "border-white text-white hover:bg-white/10"
// //                   }`}
// //                 >
// //                   {tab}
// //                 </button>
// //               );
// //             })}
// //           </div>
// //         </div>

// //         <AnimatePresence mode="wait">
// //           <motion.div
// //             key={activeTab}
// //             initial={{ opacity: 0 }}
// //             animate={{ opacity: 1 }}
// //             exit={{ opacity: 0 }}
// //             transition={{ duration: 0.8 }}
// //             className="relative pb-[80px]"
// //           >
// //             <div
// //               className="overflow-hidden min-h-[400px] 2xl:min-h-[500px]"
// //               ref={emblaRef}
// //             >
// //               <div className="flex items-start justify-between">
// //                 {slides.map((src, i) => {
// //                   const isActive = i === activeIndex;
// //                   return (
// //                     <div
// //                       key={i}
// //                       className="shrink-0 basis-[76%] sm:basis-[62%] lg:basis-[55%] flex justify-end! items-start"
// //                     >
// //                       <motion.div
// //                         initial={false}
// //                         animate={{
// //                           scale: isActive ? 1 : 0.55,
// //                           y: isActive ? 0 : "-22.5%",
// //                         }}
// //                         transition={{
// //                           scale: { duration: 0.8, ease: [0.25, 1, 0.5, 1] },
// //                           y: { duration: 0.8, ease: [0.25, 1, 0.5, 1] },
// //                         }}
// //                         className={`min-w-full rounded-[22px] overflow-hidden ${isActive ? "mr-[-96px]" : ""}`}
// //                       >
// //                         <img
// //                           src={src}
// //                           alt=""
// //                           className="w-full h-full object-cover"
// //                         />
// //                       </motion.div>
// //                     </div>
// //                   );
// //                 })}
// //               </div>
// //             </div>

// //             {/* Nav arrows */}
// //             <div className="absolute bottom-20 right-0 flex items-center gap-[14px]">
// //               <button
// //                 onClick={scrollPrev}
// //                 aria-label="Previous slide"
// //                 className="w-[54px] h-[54px] rounded-full border border-white/50 flex items-center justify-center text-white hover:bg-white/10 transition-colors cursor-pointer"
// //               >
// //                 <ArrowLeft size={18} strokeWidth={1.8} />
// //               </button>
// //               <button
// //                 onClick={scrollNext}
// //                 aria-label="Next slide"
// //                 className="w-[54px] h-[54px] rounded-full border border-white/50 flex items-center justify-center text-white hover:bg-white/10 transition-colors cursor-pointer"
// //               >
// //                 <ArrowRight size={18} strokeWidth={1.8} />
// //               </button>
// //             </div>
// //           </motion.div>
// //         </AnimatePresence>
// //       </div>
// //     </section>
// //   );
// // }

// "use client";

// import { useCallback, useEffect, useState } from "react";
// import useEmblaCarousel from "embla-carousel-react";
// import { motion, AnimatePresence } from "framer-motion";
// import { ArrowLeft, ArrowRight } from "lucide-react";

// const tabs = ["Videos", "Images", "Masterplan"] as const;
// type Tab = (typeof tabs)[number];

// const IMAGE_POOL = ["/park/media.webp", "/park/media.webp", "/park/media.webp"];

// function buildSlides(seed: number): string[] {
//   return Array.from(
//     { length: 6 },
//     (_, i) => IMAGE_POOL[(i + seed) % IMAGE_POOL.length],
//   );
// }

// const slidesByTab: Record<Tab, string[]> = {
//   Videos: buildSlides(0),
//   Images: buildSlides(1),
//   Masterplan: buildSlides(2),
// };

// export default function ParkMediaGallery() {
//   const [activeTab, setActiveTab] = useState<Tab>("Videos");
//   const [activeIndex, setActiveIndex] = useState(0);
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);

//   // Responsive Embla initialization using a media query breakpoint (768px matching md)
//   const [emblaRef, emblaApi] = useEmblaCarousel({
//     loop: true,
//     align: "center", // fallback for mobile, overridden via styles/media on desktop
//     slidesToScroll: 1,
//     watchDrag: true, // Allow dragging on mobile for standard slider experience
//     duration: 30,
//     breakpoints: {
//       "(min-width: 768px)": {
//         align: "start",
//         watchDrag: false,
//       },
//     },
//   });

//   const slides = slidesByTab[activeTab];

//   const handleTab = (tab: Tab) => {
//     if (tab === activeTab) return;
//     setActiveTab(tab);
//     setActiveIndex(0);
//   };

//   const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
//   const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

//   useEffect(() => {
//     if (!emblaApi) return;
//     const onSelect = () => setActiveIndex(emblaApi.selectedScrollSnap());
//     onSelect();
//     emblaApi.on("select", onSelect);
//     emblaApi.on("reInit", onSelect);
//     return () => {
//       emblaApi.off("select", onSelect);
//       emblaApi.off("reInit", onSelect);
//     };
//   }, [emblaApi]);

//   useEffect(() => {
//     emblaApi?.scrollTo(0);
//   }, [activeTab, emblaApi]);

//   return (
//     <section
//       className="overflow-hidden"
//       style={{ background: "linear-gradient(90deg, #bf584f 0%, #f6736a 100%)" }}
//     >
//       <div className="fix py-[60px] lg:py-[80px]">
//         <div className="flex flex-col gap-5 mb-8 lg:mb-[42px]">
//           <div className="flex items-center gap-[13px]">
//             <span className="h-px w-7 bg-white" />
//             <span className="text-[12px] font-semibold tracking-[3.36px] uppercase text-white">
//               Gallery
//             </span>
//           </div>
//           <h2 className="font-bold leading-[1.1] tracking-[-1.568px] text-white text-[28px] sm:text-[40px] lg:text-[56px]">
//             Media Gallery
//           </h2>

//           {/* Responsive Tabs Wrapper */}
//           <div className="w-full flex md:block justify-center">
//             {/* Mobile View: Dropdown Selection */}
//             <div className="block md:hidden relative w-full">
//               <button
//                 type="button"
//                 onClick={() => setIsDropdownOpen((prev) => !prev)}
//                 className="w-full border border-[#e2ddd3] bg-white px-[21px] py-[11px] pr-12 text-left text-[15px] font-semibold text-[#3a3733] transition-colors duration-200 hover:border-[#f56e6a] focus:outline-none focus:border-[#f56e6a]"
//               >
//                 {activeTab}

//                 <svg
//                   className={`absolute right-4 top-1/2 h-5 w-5 -translate-y-1/2 transition-transform duration-300 ${
//                     isDropdownOpen ? "rotate-180" : ""
//                   }`}
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="#3a3733"
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
//                 <div className="absolute left-0 top-full z-50 mt-2 w-full overflow-hidden border border-[#e2ddd3] bg-white shadow-xl">
//                   {tabs.map((tab) => (
//                     <button
//                       key={tab}
//                       type="button"
//                       onClick={() => {
//                         handleTab(tab as Tab);
//                         setIsDropdownOpen(false);
//                       }}
//                       className={`block w-full px-[21px] py-3 text-left text-[15px] font-semibold transition-colors duration-200
//             ${
//               activeTab === tab
//                 ? "bg-[#f56e6a]/50 text-[#3a3733]"
//                 : "bg-white text-[#3a3733] hover:bg-[#f56e6a]/20"
//             }`}
//                     >
//                       {tab}
//                     </button>
//                   ))}
//                 </div>
//               )}
//             </div>

//             {/* Desktop View: Button List */}
//             <div className="hidden md:flex flex-wrap gap-[10px]">
//               {tabs.map((tab) => {
//                 const isActive = tab === activeTab;
//                 return (
//                   <button
//                     key={tab}
//                     onClick={() => handleTab(tab)}
//                     className={`px-[21px] py-[11px] text-[14px] font-semibold tracking-[-0.14px] border transition-colors ${
//                       isActive
//                         ? "bg-white border-[#f56e6a] text-[#f56e6a]"
//                         : "border-white text-white hover:bg-white/10"
//                     }`}
//                   >
//                     {tab}
//                   </button>
//                 );
//               })}
//             </div>
//           </div>
//         </div>

//         <AnimatePresence mode="wait">
//           <motion.div
//             key={activeTab}
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             transition={{ duration: 0.8 }}
//             className="relative pb-[100px] md:pb-[80px]"
//           >
//             <div
//               className="overflow-hidden min-h-[120px] sm:min-h-[400px] 2xl:min-h-[500px]"
//               ref={emblaRef}
//             >
//               <div className="flex items-start md:justify-between">
//                 {slides.map((src, i) => {
//                   const isActive = i === activeIndex;
//                   return (
//                     <div
//                       key={i}
//                       // Mobile: full 100% block with centered padding. Desktop: original partial percentage flex column width
//                       className="shrink-0 basis-full md:basis-[62%] lg:basis-[55%] px-1.5 md:px-0 flex justify-center md:justify-end! items-start"
//                     >
//                       {/* Desktop Animation layer */}
//                       <div className="hidden md:block w-full">
//                         <motion.div
//                           initial={false}
//                           animate={{
//                             scale: isActive ? 1 : 0.55,
//                             y: isActive ? 0 : "-22.5%",
//                           }}
//                           transition={{
//                             scale: { duration: 0.8, ease: [0.25, 1, 0.5, 1] },
//                             y: { duration: 0.8, ease: [0.25, 1, 0.5, 1] },
//                           }}
//                           className={`min-w-full rounded-[22px] overflow-hidden ${isActive ? "mr-[-96px]" : ""}`}
//                         >
//                           <img
//                             src={src}
//                             alt=""
//                             className="w-full h-full object-cover"
//                           />
//                         </motion.div>
//                       </div>

//                       {/* Mobile Plain View Layer (Static single centered frame with hidden neighbors) */}
//                       <div className="block md:hidden w-full rounded-[16px] overflow-hidden">
//                         <img
//                           src={src}
//                           alt=""
//                           className="w-full h-full object-cover"
//                         />
//                       </div>
//                     </div>
//                   );
//                 })}
//               </div>
//             </div>

//             {/* Nav arrows: Positioned globally down on mobile layout center, absolute layout preserved on desktop layout right */}
//             <div className="absolute bottom-5 left-1/2 -translate-x-1/2 md:translate-x-0 md:left-auto md:bottom-20 md:right-0 flex items-center gap-[14px]">
//               <button
//                 onClick={scrollPrev}
//                 aria-label="Previous slide"
//                 className="w-[54px] h-[54px] rounded-full border border-white/50 flex items-center justify-center text-white hover:bg-white/10 transition-colors cursor-pointer"
//               >
//                 <ArrowLeft size={18} strokeWidth={1.8} />
//               </button>
//               <button
//                 onClick={scrollNext}
//                 aria-label="Next slide"
//                 className="w-[54px] h-[54px] rounded-full border border-white/50 flex items-center justify-center text-white hover:bg-white/10 transition-colors cursor-pointer"
//               >
//                 <ArrowRight size={18} strokeWidth={1.8} />
//               </button>
//             </div>
//           </motion.div>
//         </AnimatePresence>
//       </div>
//     </section>
//   );
// }
"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";

const tabs = ["Videos", "Images", "Masterplan"] as const;
type Tab = (typeof tabs)[number];

const IMAGE_POOL = ["/park/media.webp", "/park/media.webp", "/park/media.webp"];

function buildSlides(seed: number): string[] {
  return Array.from(
    { length: 6 },
    (_, i) => IMAGE_POOL[(i + seed) % IMAGE_POOL.length],
  );
}

const slidesByTab: Record<Tab, string[]> = {
  Videos: buildSlides(0),
  Images: buildSlides(1),
  Masterplan: buildSlides(2),
};

export default function ParkMediaGallery() {
  const [activeTab, setActiveTab] = useState<Tab>("Videos");
  const [activeIndex, setActiveIndex] = useState(0);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Responsive Embla initialization using a media query breakpoint (768px matching md)
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "center", // fallback for mobile, overridden via styles/media on desktop
    slidesToScroll: 1,
    watchDrag: true, // Allow dragging on mobile for standard slider experience
    duration: 30,
    breakpoints: {
      "(min-width: 768px)": {
        align: "start",
        watchDrag: false,
      },
    },
  });

  const slides = slidesByTab[activeTab];

  const handleTab = (tab: Tab) => {
    if (tab === activeTab) return;
    setActiveTab(tab);
  };

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setActiveIndex(emblaApi.selectedScrollSnap());
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi]);

  // Only reset the carousel's scroll position once the outgoing tab has
  // fully faded out, so the currently visible track never jumps mid-exit.
  const handleExitComplete = useCallback(() => {
    emblaApi?.scrollTo(0, true);
    setActiveIndex(0);
  }, [emblaApi]);

  return (
    <section
      className="overflow-hidden"
      style={{ background: "linear-gradient(90deg, #bf584f 0%, #f6736a 100%)" }}
    >
      <div className="fix pb-20 py-[60px] lg:py-[80px]">
        <div className="flex flex-col gap-5 mb-8 lg:mb-[42px]">
          <div className="flex items-center gap-[13px]">
            <span className="h-px w-7 bg-white" />
            <span className="text-[12px] font-semibold tracking-[3.36px] uppercase text-white">
              Gallery
            </span>
          </div>
          <h2 className="font-bold leading-[1.1] tracking-[-1.568px] text-white text-[28px] sm:text-[40px] lg:text-[56px]">
            Media Gallery
          </h2>

          {/* Responsive Tabs Wrapper */}
          <div className="w-full flex md:block justify-center">
            {/* Mobile View: Dropdown Selection */}
            <div className="block md:hidden relative w-full">
              <button
                type="button"
                onClick={() => setIsDropdownOpen((prev) => !prev)}
                className="w-full border border-[#e2ddd3] bg-white px-[21px] py-[11px] pr-12 text-left text-[15px] font-semibold text-[#3a3733] transition-colors duration-200 hover:border-[#f56e6a] focus:outline-none focus:border-[#f56e6a]"
              >
                {activeTab}

                <svg
                  className={`absolute right-4 top-1/2 h-5 w-5 -translate-y-1/2 transition-transform duration-300 ${
                    isDropdownOpen ? "rotate-180" : ""
                  }`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="#3a3733"
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
                <div className="absolute left-0 top-full z-50 mt-2 w-full overflow-hidden border border-[#e2ddd3] bg-white shadow-xl">
                  {tabs.map((tab) => (
                    <button
                      key={tab}
                      type="button"
                      onClick={() => {
                        handleTab(tab as Tab);
                        setIsDropdownOpen(false);
                      }}
                      className={`block w-full px-[21px] py-3 text-left text-[15px] font-semibold transition-colors duration-200
            ${
              activeTab === tab
                ? "bg-[#f56e6a]/50 text-[#3a3733]"
                : "bg-white text-[#3a3733] hover:bg-[#f56e6a]/20"
            }`}
                    >
                      {tab}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Desktop View: Button List */}
            <div className="hidden md:flex flex-wrap gap-[10px]">
              {tabs.map((tab) => {
                const isActive = tab === activeTab;
                return (
                  <button
                    key={tab}
                    onClick={() => handleTab(tab)}
                    className={`px-[21px] py-[11px] text-[14px] font-semibold tracking-[-0.14px] border transition-colors ${
                      isActive
                        ? "bg-white border-[#f56e6a] text-[#f56e6a]"
                        : "border-white text-white hover:bg-white/10"
                    }`}
                  >
                    {tab}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        <div className="relative pb-[30px] md:pb-[0px]">
          <div
            className="overflow-hidden min-h-[200px] sm:min-h-[400px] 2xl:min-h-[500px]"
            ref={emblaRef}
          >
            <AnimatePresence mode="wait" onExitComplete={handleExitComplete}>
              <motion.div
                key={activeTab}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.35, ease: "easeInOut" }}
                className="flex items-start md:justify-between gap-0"
              >
                {slides.map((src, i) => {
                  const isActive = i === activeIndex;
                  return (
                    <div
                      key={i}
                      // Mobile: full 100% block with centered padding. Desktop: original partial percentage flex column width
                      className="shrink-0 basis-full md:basis-[62%] lg:basis-[55%] px-1.5 md:px-1.5 md:px-0 flex justify-center md:justify-end! items-start"
                    >
                      {/* Desktop Animation layer */}
                      <div className="hidden md:block w-full">
                        <motion.div
                          initial={false}
                          animate={{
                            scale: isActive ? 1 : 0.55,
                            y: isActive ? 0 : "-22.5%",
                          }}
                          transition={{
                            scale: { duration: 0.8, ease: [0.25, 1, 0.5, 1] },
                            y: { duration: 0.8, ease: [0.25, 1, 0.5, 1] },
                          }}
                          className={`min-w-full rounded-[22px] overflow-hidden ${isActive ? " lg:mr-[-130px] 2xl:mr-[-143px]" : ""}`}
                        >
                          <img
                            src={src}
                            alt=""
                            className="w-full h-full object-cover"
                          />
                        </motion.div>
                      </div>

                      {/* Mobile Plain View Layer (Static single centered frame with hidden neighbors) */}
                      <div className="block md:hidden w-full rounded-[16px] overflow-hidden">
                        <img
                          src={src}
                          alt=""
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  );
                })}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Nav arrows: Positioned globally down on mobile layout center, absolute layout preserved on desktop layout right */}
          <div
            className="absolute -bottom-8 lg:bottom-5 left-1/2 -translate-x-1/2 md:translate-x-0 md:left-auto 2xl:pr-8 lg:pr-6
            md:bottom-22 md:right-0 flex items-center gap-[14px]"
          >
            <button
              onClick={scrollPrev}
              aria-label="Previous slide"
              className="w-[54px] h-[54px] rounded-full border border-white/50 flex items-center justify-center text-white hover:bg-white/10 transition-colors cursor-pointer"
            >
              <ArrowLeft size={18} strokeWidth={1.8} />
            </button>
            <button
              onClick={scrollNext}
              aria-label="Next slide"
              className="w-[54px] h-[54px] rounded-full border border-white/50 flex items-center justify-center text-white hover:bg-white/10 transition-colors cursor-pointer"
            >
              <ArrowRight size={18} strokeWidth={1.8} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
