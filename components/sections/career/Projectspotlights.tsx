// "use client";

// import React, { useState, useRef, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { Play } from "lucide-react";

// /**
//  * Expected shape of each item in `spotlights`:
//  * {
//  *   id: string | number,          // optional, used as stable key
//  *   image: string,                // image url/path
//  *   video_url?: string,           // optional iframe embed url
//  *   title: string,
//  *   description?: string,
//  *   author: string,
//  *   designation?: string,
//  * }
//  */

// const getSidebarOrder = (length, activeIndex) => {
//   const order = [];
//   for (let i = 1; i < length; i++) {
//     order.push((activeIndex + i) % length);
//   }
//   return order;
// };

// const ProjectSpotlights = ({ spotlights = [] }) => {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const [isPlaying, setIsPlaying] = useState(false);
//   const sidebarRef = useRef(null);
//   const isHoveringSidebar = useRef(false);

//   useEffect(() => {
//     setIsPlaying(false);
//   }, [activeIndex]);

//   // === PREVENT PARENT SCROLL WHEN HOVERING SIDEBAR (desktop) ===
//   useEffect(() => {
//     const sidebar = sidebarRef.current;
//     if (!sidebar) return;

//     const handleWheel = (e) => {
//       if (!isHoveringSidebar.current) return;

//       const atTop = sidebar.scrollTop === 0;
//       const atBottom =
//         Math.ceil(sidebar.scrollTop + sidebar.clientHeight) >=
//         sidebar.scrollHeight;

//       if ((e.deltaY < 0 && atTop) || (e.deltaY > 0 && atBottom)) {
//         return; // let parent handle
//       }

//       e.stopPropagation();
//       e.preventDefault();
//       sidebar.scrollTop += e.deltaY;
//     };

//     const handleMouseEnter = () => (isHoveringSidebar.current = true);
//     const handleMouseLeave = () => (isHoveringSidebar.current = false);

//     sidebar.addEventListener("wheel", handleWheel, { passive: false });
//     sidebar.addEventListener("mouseenter", handleMouseEnter);
//     sidebar.addEventListener("mouseleave", handleMouseLeave);

//     return () => {
//       sidebar.removeEventListener("wheel", handleWheel);
//       sidebar.removeEventListener("mouseenter", handleMouseEnter);
//       sidebar.removeEventListener("mouseleave", handleMouseLeave);
//     };
//   }, [spotlights]);

//   if (!spotlights.length) return null;

//   const active = spotlights[activeIndex];
//   const sidebarOrder = getSidebarOrder(spotlights.length, activeIndex);

//   return (
//     <section
//       className="relative w-full py-16 xl:py-24 bg-[#F5F1EC] bg-cover bg-center bg-no-repeat overflow-hidden"
//       style={{ backgroundImage: "url('/career/Project.webp')" }}
//     >
//       <div className="fix relative z-10">
//         {/* Heading */}
//         <div className="flex flex-col gap-3 mb-8 xl:mb-12">
//           <div className="flex items-center gap-3">
//             <span className="w-8 h-[2px] bg-[#003b9d]" />
//             <span className="text-[12px] xl:text-[14px] font-semibold tracking-[0.2em] text-[#003b9d] uppercase bw-sb">
//               Project Spotlights
//             </span>
//           </div>
//           <h2
//             className="font-sora font-bold text-[#DA655B]"
//             style={{ fontSize: "clamp(28px, 4vw, 44px)" }}
//           >
//             See what our people says!
//           </h2>
//         </div>

//         {/* Content */}
//         <div className="flex flex-col justify-around lg:flex-row gap-6 xl:gap-20">
//           {/* Active card */}
//           <div className="w-[70%] flex flex-col">
//             <div className="relative w-full h-[240px] sm:h-[320px] xl:h-[420px] overflow-hidden">
//               <AnimatePresence mode="wait">
//                 {isPlaying && active.video_url ? (
//                   <motion.iframe
//                     key={`video-${activeIndex}`}
//                     initial={{ opacity: 0 }}
//                     animate={{ opacity: 1 }}
//                     exit={{ opacity: 0 }}
//                     src={active.video_url}
//                     className="w-full h-full"
//                     frameBorder="0"
//                     allow="autoplay; fullscreen"
//                     allowFullScreen
//                     title={active.title}
//                   />
//                 ) : (
//                   <motion.div
//                     key={`image-${activeIndex}`}
//                     initial={{ opacity: 0 }}
//                     animate={{ opacity: 1 }}
//                     exit={{ opacity: 0 }}
//                     transition={{ duration: 0.35 }}
//                     className="relative w-full h-full"
//                   >
//                     <img
//                       src={active.image}
//                       alt={active.title}
//                       className="w-full h-full object-cover"
//                     />
//                     {active.video_url && (
//                       <button
//                         onClick={() => setIsPlaying(true)}
//                         aria-label="Play video"
//                         className="absolute inset-0 flex items-center justify-center group"
//                       >
//                         <span className="w-14 h-14 xl:w-16 xl:h-16 rounded-full bg-white/90 flex items-center justify-center">
//                           <Play
//                             className="w-6 h-6 xl:w-7 xl:h-7 text-[#003b9d] ml-1"
//                             fill="#003b9d"
//                           />
//                         </span>
//                       </button>
//                     )}
//                   </motion.div>
//                 )}
//               </AnimatePresence>
//             </div>

//             <div className="pt-5 xl:pt-6">
//               <h3 className="font-sora font-bold text-[#1a1a1a] text-[18px] xl:text-[24px] mb-3">
//                 {active.title}
//               </h3>
//               {active.description && (
//                 <p className="font-inter text-[13px] xl:text-[15px] text-[#5a5a5a] leading-relaxed mb-4">
//                   {active.description}
//                 </p>
//               )}
//               <p className="font-sora font-bold text-[12px] xl:text-[14px] text-[#1a1a1a] tracking-wide">
//                 - {active.author}
//               </p>
//               {active.designation && (
//                 <p className="font-inter text-[11px] xl:text-[12px] text-[#8a8a8a] tracking-[0.15em] uppercase mt-1">
//                   {active.designation}
//                 </p>
//               )}
//             </div>
//           </div>

//           {/* Sidebar list */}
//           <div className="w-[30%] relative">
//             <div
//               ref={sidebarRef}
//               className="flex lg:flex-col gap-3 xl:gap-4 overflow-x-auto lg:overflow-x-visible lg:overflow-y-auto max-h-none lg:max-h-[560px] pb-2 lg:pb-0 lg:pr-1 snap-x lg:snap-none snap-mandatory scrollbar-thin scrollbar-thumb-rounded scrollbar-thumb-gray-300 overscroll-contain"
//               style={{
//                 WebkitOverflowScrolling: "touch",
//                 scrollBehavior: "smooth",
//               }}
//             >
//               <AnimatePresence initial={false}>
//                 {sidebarOrder.map((itemIndex) => {
//                   const item = spotlights[itemIndex];
//                   return (
//                     <motion.button
//                       key={item.id ?? item.title ?? itemIndex}
//                       onClick={() => setActiveIndex(itemIndex)}
//                       initial={{ opacity: 0 }}
//                       animate={{ opacity: 1 }}
//                       exit={{ opacity: 0 }}
//                       transition={{ duration: 0.3 }}
//                       className="   flex-shrink-0 snap-start text-left bg-white overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
//                     >
//                       <div className="relative w-full h-[110px] xl:h-[130px] overflow-hidden">
//                         <img
//                           src={item.image}
//                           alt={item.title}
//                           loading="lazy"
//                           className="w-full h-full object-cover"
//                         />
//                         {item.video_url && (
//                           <img
//                             src="/culture/CTA.svg"
//                             alt="play"
//                             className="absolute bottom-2 right-2 w-7 h-7"
//                           />
//                         )}
//                       </div>
//                       <div className="p-3 xl:p-4">
//                         <p className="font-sora font-bold text-[13px] xl:text-[15px] text-[#DA655B] mb-2 leading-snug">
//                           {item.title}
//                         </p>
//                         {item.description && (
//                           <p
//                             className="font-inter text-[11px] xl:text-[12px] text-[#8a8a8a] leading-relaxed mb-2"
//                             style={{
//                               display: "-webkit-box",
//                               WebkitLineClamp: 2,
//                               WebkitBoxOrient: "vertical",
//                               overflow: "hidden",
//                             }}
//                           >
//                             {item.description}
//                           </p>
//                         )}
//                         <p className="font-inter font-semibold text-[11px] xl:text-[12px] text-[#1a1a1a] uppercase tracking-wide">
//                           {item.author}
//                         </p>
//                         {item.designation && (
//                           <p className="font-inter text-[10px] xl:text-[11px] text-[#8a8a8a] uppercase tracking-[0.1em] mt-0.5">
//                             {item.designation}
//                           </p>
//                         )}
//                       </div>
//                     </motion.button>
//                   );
//                 })}
//               </AnimatePresence>
//             </div>

//             {/* bottom fade, desktop only */}
//             <div className="hidden lg:block pointer-events-none absolute bottom-0 left-0 w-full h-14 bg-gradient-to-t from-[#F5F1EC] to-transparent" />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ProjectSpotlights;

"use client";

import React, { useState, useRef, useEffect, FC, WheelEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play } from "lucide-react";

/**
 * Expected shape of each item in `spotlights`:
 */
export interface SpotlightItem {
  id?: string | number;
  image: string;
  video_url?: string;
  title: string;
  description?: string;
  author: string;
  designation?: string;
}

interface ProjectSpotlightsProps {
  spotlights?: SpotlightItem[];
}

const getSidebarOrder = (length: number, activeIndex: number): number[] => {
  const order: number[] = [];
  for (let i = 1; i < length; i++) {
    order.push((activeIndex + i) % length);
  }
  return order;
};

const ProjectSpotlights: FC<ProjectSpotlightsProps> = ({ spotlights = [] }) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const sidebarRef = useRef<HTMLDivElement>(null);
  const isHoveringSidebar = useRef<boolean>(false);

  useEffect(() => {
    setIsPlaying(false);
  }, [activeIndex]);

  // === PREVENT PARENT SCROLL WHEN HOVERING SIDEBAR (desktop) ===
  useEffect(() => {
    const sidebar = sidebarRef.current;
    if (!sidebar) return;

    const handleWheel = (e: globalThis.WheelEvent) => {
      if (!isHoveringSidebar.current) return;

      const atTop = sidebar.scrollTop === 0;
      const atBottom =
        Math.ceil(sidebar.scrollTop + sidebar.clientHeight) >=
        sidebar.scrollHeight;

      if ((e.deltaY < 0 && atTop) || (e.deltaY > 0 && atBottom)) {
        return; // let parent handle
      }

      e.stopPropagation();
      e.preventDefault();
      sidebar.scrollTop += e.deltaY;
    };

    const handleMouseEnter = () => (isHoveringSidebar.current = true);
    const handleMouseLeave = () => (isHoveringSidebar.current = false);

    sidebar.addEventListener("wheel", handleWheel, { passive: false });
    sidebar.addEventListener("mouseenter", handleMouseEnter);
    sidebar.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      sidebar.removeEventListener("wheel", handleWheel);
      sidebar.removeEventListener("mouseenter", handleMouseEnter);
      sidebar.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [spotlights]);

  if (!spotlights.length) return null;

  const active = spotlights[activeIndex];
  const sidebarOrder = getSidebarOrder(spotlights.length, activeIndex);

  return (
    <section
      className="relative w-full py-16 xl:py-24 bg-[#F5F1EC] bg-cover bg-center bg-no-repeat overflow-hidden"
      style={{ backgroundImage: "url('/career/Project.webp')" }}
    >
      <div className="fix relative z-10">
        {/* Heading */}
        <div className="flex flex-col gap-3 mb-8 xl:mb-12">
          <div className="flex items-center gap-3">
            <span className="w-8 h-[2px] bg-[#003b9d]" />
            <span className="text-[12px] xl:text-[14px] font-semibold tracking-[0.2em] text-[#003b9d] uppercase bw-sb">
              Project Spotlights
            </span>
          </div>
          <h2
            className="font-sora font-bold text-[#DA655B]"
            style={{ fontSize: "clamp(28px, 4vw, 44px)" }}
          >
            See what our people says!
          </h2>
        </div>

        {/* Content */}
        <div className="flex flex-col lg:flex-row gap-6 xl:gap-8">
          {/* Active card */}
          <div className="flex-[1.4] flex flex-col">
            <div className="relative w-full h-[240px] sm:h-[320px] xl:h-[420px] overflow-hidden">
              <AnimatePresence mode="wait">
                {isPlaying && active.video_url ? (
                  <motion.iframe
                    key={`video-${activeIndex}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    src={active.video_url}
                    className="w-full h-full"
                    allow="autoplay; fullscreen"
                    allowFullScreen
                    title={active.title}
                  />
                ) : (
                  <motion.div
                    key={`image-${activeIndex}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.35 }}
                    className="relative w-full h-full"
                  >
                    <img
                      src={active.image}
                      alt={active.title}
                      className="w-full h-full object-cover"
                    />
                    {active.video_url && (
                      <button
                        onClick={() => setIsPlaying(true)}
                        aria-label="Play video"
                        className="absolute inset-0 flex items-center justify-center group"
                      >
                        <span className="w-14 h-14 xl:w-16 xl:h-16 rounded-full bg-white/90 flex items-center justify-center">
                          <Play
                            className="w-6 h-6 xl:w-7 xl:h-7 text-[#003b9d] ml-1"
                            fill="#003b9d"
                          />
                        </span>
                      </button>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <div className="pt-5 xl:pt-6">
              <h3 className="font-sora font-bold text-[#1a1a1a] text-[18px] xl:text-[24px] mb-3">
                {active.title}
              </h3>
              {active.description && (
                <p className="font-inter text-[13px] xl:text-[15px] text-[#5a5a5a] leading-relaxed mb-4">
                  {active.description}
                </p>
              )}
              <p className="font-sora font-bold text-[12px] xl:text-[14px] text-[#1a1a1a] tracking-wide">
                - {active.author}
              </p>
              {active.designation && (
                <p className="font-inter text-[11px] xl:text-[12px] text-[#8a8a8a] tracking-[0.15em] uppercase mt-1">
                  {active.designation}
                </p>
              )}
            </div>
          </div>

          {/* Sidebar list */}
          <div className="flex-1 relative">
            <div
              ref={sidebarRef}
              className="flex lg:flex-col gap-3 xl:gap-4 overflow-x-auto lg:overflow-x-visible lg:overflow-y-auto max-h-none lg:max-h-[560px] pb-2 lg:pb-0 lg:pr-1 snap-x lg:snap-none snap-mandatory scrollbar-thin scrollbar-thumb-rounded scrollbar-thumb-gray-300 overscroll-contain"
              style={{
                WebkitOverflowScrolling: "touch",
                scrollBehavior: "smooth",
              }}
            >
              <AnimatePresence initial={false}>
                {sidebarOrder.map((itemIndex) => {
                  const item = spotlights[itemIndex];
                  return (
                    <motion.button
                      key={item.id ?? item.title ?? itemIndex}
                      onClick={() => setActiveIndex(itemIndex)}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="min-w-[240px] sm:min-w-[260px] lg:min-w-0 lg:w-full flex-shrink-0 snap-start text-left bg-white overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
                    >
                      <div className="relative w-full h-[110px] xl:h-[130px] overflow-hidden">
                        <img
                          src={item.image}
                          alt={item.title}
                          loading="lazy"
                          className="w-full h-full object-cover"
                        />
                        {item.video_url && (
                          <img
                            src="/culture/CTA.svg"
                            alt="play"
                            className="absolute bottom-2 right-2 w-7 h-7"
                          />
                        )}
                      </div>
                      <div className="p-3 xl:p-4">
                        <p className="font-sora font-bold text-[13px] xl:text-[15px] text-[#DA655B] mb-2 leading-snug">
                          {item.title}
                        </p>
                        {item.description && (
                          <p
                            className="font-inter text-[11px] xl:text-[12px] text-[#8a8a8a] leading-relaxed mb-2"
                            style={{
                              display: "-webkit-box",
                              WebkitLineClamp: 2,
                              WebkitBoxOrient: "vertical",
                              overflow: "hidden",
                            }}
                          >
                            {item.description}
                          </p>
                        )}
                        <p className="font-inter font-semibold text-[11px] xl:text-[12px] text-[#1a1a1a] uppercase tracking-wide">
                          {item.author}
                        </p>
                        {item.designation && (
                          <p className="font-inter text-[10px] xl:text-[11px] text-[#8a8a8a] uppercase tracking-[0.1em] mt-0.5">
                            {item.designation}
                          </p>
                        )}
                      </div>
                    </motion.button>
                  );
                })}
              </AnimatePresence>
            </div>

            {/* bottom fade, desktop only */}
            <div className="hidden lg:block pointer-events-none absolute bottom-0 left-0 w-full h-14 bg-gradient-to-t from-[#F5F1EC] to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectSpotlights;
