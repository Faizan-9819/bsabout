// "use client";

// import { useState, useRef } from "react";
// import { motion } from "framer-motion";
// import {
//   ArrowRight,
//   ArrowUpRight,
//   ChevronLeft,
//   ChevronRight,
// } from "lucide-react";

// const img1 =
//   "https://www.figma.com/api/mcp/asset/38d6db67-758d-44d4-8f53-18677632af81";
// const img2 =
//   "https://www.figma.com/api/mcp/asset/36ed8db7-2022-4c1e-8209-3d00967058fc";
// const img3 =
//   "https://www.figma.com/api/mcp/asset/1c3b7cb5-20a1-46f2-829f-d5286ad6bcc8";
// const img4 =
//   "https://www.figma.com/api/mcp/asset/0bc793ac-d527-46e1-95ef-ecdf9a953ea3";
// const img5 =
//   "https://www.figma.com/api/mcp/asset/95d5a61e-241f-4cbe-bdc5-213534f5f9fd";

// const articles = [
//   {
//     id: 1,
//     img: img1,
//     category: "Market Outlook",
//     title: "India's logistics corridors are redrawing the industrial map",
//     date: "14 May 2026",
//   },
//   {
//     id: 2,
//     img: img2,
//     category: "Development",
//     title: "Designing manufacturing campuses for operational day one",
//     date: "2 May 2026",
//   },
//   {
//     id: 3,
//     img: img3,
//     category: "Infrastructure",
//     title: "Why inland container depots are the next freight battleground",
//     date: "21 Apr 2026",
//   },
//   {
//     id: 4,
//     img: img4,
//     category: "Capital",
//     title: "The capital discipline behind data-centre development at scale",
//     date: "9 Apr 2026",
//   },
//   {
//     id: 5,
//     img: img5,
//     category: "Sustainability",
//     title: "Responsible land planning as a long-term value strategy",
//     date: "28 Mar 2026",
//   },
// ];

// const VISIBLE = 3;

// export default function Insights() {
//   const [start, setStart] = useState(0);
//   const trackRef = useRef<HTMLDivElement>(null);

//   const maxStart = articles.length - VISIBLE;

//   function prev() {
//     setStart((s) => Math.max(0, s - 1));
//   }
//   function next() {
//     setStart((s) => Math.min(maxStart, s + 1));
//   }

//   const dots = articles.length - VISIBLE + 1;

//   return (
//     <section
//       id="insights"
//       className="bg-white py-[80px] lg:py-[100px] overflow-hidden"
//     >
//       <div className="fix">
//         {/* Header row */}
//         {/* <motion.div
//           initial={{ opacity: 0, y: 24 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, margin: "-60px" }}
//           transition={{ duration: 0.6, ease: "easeOut" }}
//           className="flex items-end justify-between mb-10 gap-6"
//         >
//           <div>
//             <div className="eyebrow text-[#003b9d] mb-4">Industry Insights</div>
//             <h2
//               className="font-bold text-[#e27244] leading-[1.1] tracking-[-1.568px]"
//               style={{ fontSize: "clamp(24px, 3vw, 40px)" }}
//             >
//               Blogs and News
//             </h2>
//           </div>
//           <a
//             href="#"
//             className="flex-shrink-0 flex items-center gap-3 bg-[#e27244] text-white font-semibold text-[15.5px] pl-[26px] pr-4 py-[15px] hover:bg-[#c9603a] transition-colors"
//           >
//             View All
//             <span className="w-[30px] h-[30px] bg-white/16 flex items-center justify-center flex-shrink-0">
//               <ArrowUpRight size={16} strokeWidth={2} />
//             </span>
//           </a>
//         </motion.div> */}
//         <motion.div
//           initial={{ opacity: 0, y: 24 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, margin: "-60px" }}
//           transition={{ duration: 0.6, ease: "easeOut" }}
//           // 💡 Changed flex-row to flex-col on mobile, back to items-end justify-between on desktop
//           className="flex flex-col items-start gap-4 mb-8 md:flex-row md:items-end md:justify-between md:mb-10 md:gap-6"
//         >
//           <div>
//             {/* 💡 Adjusted margins for a tighter mobile grid layout */}
//             <div className="eyebrow text-[#003b9d] mb-2 md:mb-4">
//               Industry Insights
//             </div>
//             <h2
//               // 💡 Switched hardcoded tight negative tracking to a looser tracking on mobile, preserving desktop tracking
//               className="font-bold text-[#e27244] leading-[1.1] tracking-[-0.5px] md:tracking-[-1.568px]"
//               style={{ fontSize: "clamp(24px, 3vw, 40px)" }}
//             >
//               Blogs and News
//             </h2>
//           </div>

//           <a
//             href="#"
//             // 💡 Modified button structure to fit nicely on mobile layouts
//             className="hidden w-full justify-between md:w-auto flex-shrink-0 sm:flex items-center gap-3 bg-[#e27244] text-white font-semibold text-[15.5px] pl-[26px] pr-4 py-[15px] hover:bg-[#c9603a] transition-colors"
//           >
//             View All
//             <span className="w-[30px] h-[30px] bg-white/16 flex items-center justify-center flex-shrink-0">
//               <ArrowUpRight size={16} strokeWidth={2} />
//             </span>
//           </a>
//         </motion.div>

//         {/* Cards slider */}
//         {/* <div ref={trackRef} className="overflow-hidden">
//           <motion.div
//             animate={{ x: `calc(-${start} * (100% / ${VISIBLE} + 8.67px))` }}
//             transition={{ type: "spring", stiffness: 300, damping: 35 }}
//             className="flex gap-[26px]"
//           >
//             {articles.map((article, i) => (
//               <motion.div
//                 key={article.id}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{
//                   delay: i * 0.08,
//                   duration: 0.55,
//                   ease: "easeOut",
//                 }}
//                 className="flex-shrink-0 bg-white rounded-t-[20px] border border-[#ece8e0] flex flex-col overflow-hidden shadow-[0px_1px_3px_0px_rgba(0,20,51,0.04)]"
//                 style={{
//                   width: `calc((100% - ${(VISIBLE - 1) * 26}px) / ${VISIBLE})`,
//                 }}
//               >
//                 <div className="relative aspect-[343/214] bg-[#06173a] overflow-hidden flex-shrink-0">
//                   <img
//                     src={article.img}
//                     alt={article.title}
//                     className="absolute inset-0 w-full h-full object-cover"
//                   />
//                   <div className="absolute top-3.5 left-3.5">
//                     <span className="bg-white/92 backdrop-blur-[4px] text-[#001b49] font-semibold text-[11.5px] tracking-[0.23px] px-3 py-1.5 rounded-full shadow-[0px_4px_14px_0px_rgba(0,10,30,0.16)]">
//                       {article.category}
//                     </span>
//                   </div>
//                 </div>

//                 <div className="flex flex-col justify-between p-[22px] flex-1">
//                   <h3
//                     className="text-[#54514c] font-bold leading-[1.26] tracking-[-0.37px] mb-3"
//                     style={{ fontSize: "clamp(15px, 1.3vw, 18.5px)" }}
//                   >
//                     {article.title}
//                   </h3>
//                   <p className="text-[#8b877f] text-[13px] font-medium tracking-[0.13px] mb-4">
//                     {article.date}
//                   </p>
//                   <a
//                     href="#"
//                     className="flex items-center gap-2 text-[#e27244] font-semibold text-[14px] tracking-[-0.14px] hover:opacity-75 transition-opacity"
//                   >
//                     Read Article
//                     <ArrowRight size={15} strokeWidth={2} />
//                   </a>
//                 </div>
//               </motion.div>
//             ))}
//           </motion.div>
//         </div> */}
//         {/* 1. Ensure the outermost parent container is full width and handles overflow correctly */}
//         <>
//           {/* ─── DESKTOP CAROUSEL (100% UNTOUCHED ORIGINAL) ─── */}
//           <div ref={trackRef} className="hidden lg:block overflow-hidden">
//             <motion.div
//               animate={{ x: `calc(-${start} * (100% / ${VISIBLE} + 8.67px))` }}
//               transition={{ type: "spring", stiffness: 300, damping: 35 }}
//               className="flex gap-[26px]"
//             >
//               {articles.map((article, i) => (
//                 <motion.div
//                   key={article.id}
//                   initial={{ opacity: 0, y: 20 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   viewport={{ once: true }}
//                   transition={{
//                     delay: i * 0.08,
//                     duration: 0.55,
//                     ease: "easeOut",
//                   }}
//                   className="flex-shrink-0 bg-white rounded-t-[20px] border border-[#ece8e0] flex flex-col overflow-hidden shadow-[0px_1px_3px_0px_rgba(0,20,51,0.04)]"
//                   style={{
//                     width: `calc((100% - ${(VISIBLE - 1) * 26}px) / ${VISIBLE})`,
//                   }}
//                 >
//                   {/* Image */}
//                   <div className="relative aspect-[343/214] bg-[#06173a] overflow-hidden flex-shrink-0">
//                     <img
//                       src={article.img}
//                       alt={article.title}
//                       className="absolute inset-0 w-full h-full object-cover"
//                     />
//                     {/* Category badge */}
//                     <div className="absolute top-3.5 left-3.5">
//                       <span className="bg-white/92 backdrop-blur-[4px] text-[#001b49] font-semibold text-[11.5px] tracking-[0.23px] px-3 py-1.5 rounded-full shadow-[0px_4px_14px_0px_rgba(0,10,30,0.16)]">
//                         {article.category}
//                       </span>
//                     </div>
//                   </div>

//                   {/* Body */}
//                   <div className="flex flex-col justify-between p-[22px] flex-1">
//                     <h3
//                       className="text-[#54514c] font-bold leading-[1.26] tracking-[-0.37px] mb-3"
//                       style={{ fontSize: "clamp(15px, 1.3vw, 18.5px)" }}
//                     >
//                       {article.title}
//                     </h3>
//                     <p className="text-[#8b877f] text-[13px] font-medium tracking-[0.13px] mb-4">
//                       {article.date}
//                     </p>
//                     <a
//                       href="#"
//                       className="flex items-center gap-2 text-[#e27244] font-semibold text-[14px] tracking-[-0.14px] hover:opacity-75 transition-opacity"
//                     >
//                       Read Article
//                       <ArrowRight size={15} strokeWidth={2} />
//                     </a>
//                   </div>
//                 </motion.div>
//               ))}
//             </motion.div>
//           </div>

//           {/* ─── MOBILE CAROUSEL (SHOWS EXACTLY ONE CARD & SLIDES 100%) ─── */}
//           <div className="block lg:hidden overflow-hidden w-full ">
//             <motion.div
//               // Shifts by exactly 100% width of the mobile card container container plus its 24px layout gap
//               animate={{ x: `calc(-${start} * (100% + 24px))` }}
//               transition={{ type: "spring", stiffness: 280, damping: 30 }}
//               className="flex gap-[24px] w-full"
//             >
//               {articles.map((article, i) => (
//                 <div
//                   key={`mobile-${article.id}`}
//                   className="w-full min-w-full flex-shrink-0 bg-white rounded-t-[20px] border border-[#ece8e0] flex flex-col overflow-hidden shadow-[0px_1px_3px_0px_rgba(0,20,51,0.04)]"
//                 >
//                   {/* Image */}
//                   <div className="relative aspect-[343/214] bg-[#06173a] overflow-hidden flex-shrink-0">
//                     <img
//                       src={article.img}
//                       alt={article.title}
//                       className="absolute inset-0 w-full h-full object-cover"
//                     />
//                     <div className="absolute top-3.5 left-3.5">
//                       <span className="bg-white/92 backdrop-blur-[4px] text-[#001b49] font-semibold text-[11.5px] tracking-[0.23px] px-3 py-1.5 rounded-full shadow-[0px_4px_14px_0px_rgba(0,10,30,0.16)]">
//                         {article.category}
//                       </span>
//                     </div>
//                   </div>

//                   {/* Body */}
//                   <div className="flex flex-col justify-between p-[22px] flex-1">
//                     <h3 className="text-[#54514c] font-bold text-[17px] leading-[1.3] tracking-[-0.3px] mb-3">
//                       {article.title}
//                     </h3>
//                     <p className="text-[#8b877f] text-[13px] font-medium tracking-[0.13px] mb-4">
//                       {article.date}
//                     </p>
//                     <a
//                       href="#"
//                       className="flex items-center gap-2 text-[#e27244] font-semibold text-[14px] tracking-[-0.14px] hover:opacity-75 transition-opacity"
//                     >
//                       Read Article
//                       <ArrowRight size={15} strokeWidth={2} />
//                     </a>
//                   </div>
//                 </div>
//               ))}
//             </motion.div>
//           </div>
//         </>

//         {/* Controls */}
//         <div className="flex items-center justify-between mt-7">
//           {/* Dots */}
//           <a
//             href="#"
//             // 💡 Modified button structure to fit nicely on mobile layouts
//             className="flex sm:hidden  justify-between w-auto flex-shrink-0  items-center gap-3  bg-[#e27244]  text-white font-semibold text-[15.5px] pl-[26px] pr-4 py-[15px] hover:bg-[#c9603a] transition-colors"
//           >
//             View All
//             <span className="w-[30px] h-[30px] bg-white/16 flex items-center justify-center flex-shrink-0">
//               <ArrowUpRight size={16} strokeWidth={2} />
//             </span>
//           </a>

//           {/* Prev / Next */}
//           <div className="flex gap-2.5">
//             <button
//               onClick={prev}
//               disabled={start === 0}
//               className="w-[46px] h-[46px] rounded-full border border-[#ddd8cf] bg-white flex items-center justify-center hover:border-[#e27244] hover:text-[#e27244] transition-colors disabled:opacity-30"
//               aria-label="Previous"
//             >
//               <ChevronLeft size={18} strokeWidth={1.8} />
//             </button>
//             <button
//               onClick={next}
//               disabled={start >= maxStart}
//               className="w-[46px] h-[46px] rounded-full border border-[#ddd8cf] bg-white flex items-center justify-center hover:border-[#e27244] hover:text-[#e27244] transition-colors disabled:opacity-30"
//               aria-label="Next"
//             >
//               <ChevronRight size={18} strokeWidth={1.8} />
//             </button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// "use client";

// import { useState, useRef, useEffect } from "react";
// import { motion, LayoutGroup } from "framer-motion";
// import {
//   ArrowRight,
//   ArrowUpRight,
//   ChevronLeft,
//   ChevronRight,
// } from "lucide-react";

// const img1 = "/home/insights/insight1.webp";
// const img2 = "/home/insights/insight2.webp";
// const img3 = "/home/insights/insight3.webp";
// const img4 = "/home/insights/insight4.webp";
// const img5 = "/home/insights/insight5.webp";

// const articles = [
//   {
//     id: 1,
//     img: img1,
//     category: "Market Outlook",
//     title: "India's logistics corridors are redrawing the industrial map",
//     date: "14 May 2026",
//   },
//   {
//     id: 2,
//     img: img2,
//     category: "Development",
//     title: "Designing manufacturing campuses for operational day one",
//     date: "2 May 2026",
//   },
//   {
//     id: 3,
//     img: img3,
//     category: "Infrastructure",
//     title: "Why inland container depots are the next freight battleground",
//     date: "21 Apr 2026",
//   },
//   {
//     id: 4,
//     img: img4,
//     category: "Capital",
//     title: "The capital discipline behind data-centre development at scale",
//     date: "9 Apr 2026",
//   },
//   {
//     id: 5,
//     img: img5,
//     category: "Sustainability",
//     title: "Responsible land planning as a long-term value strategy",
//     date: "28 Mar 2026",
//   },
// ];

// const VISIBLE = 3;

// export default function Insights() {
//   const [start, setStart] = useState(0);
//   const [isLargeScreen, setIsLargeScreen] = useState(true);
//   const trackRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const checkSize = () => {
//       setIsLargeScreen(window.innerWidth >= 1024);
//     };
//     checkSize();
//     window.addEventListener("resize", checkSize);
//     return () => window.removeEventListener("resize", checkSize);
//   }, []);

//   const maxStart = isLargeScreen
//     ? articles.length - VISIBLE
//     : articles.length - 1;

//   function prev() {
//     setStart((s) => Math.max(0, s - 1));
//   }
//   function next() {
//     setStart((s) => Math.min(maxStart, s + 1));
//   }

//   useEffect(() => {
//     if (start > maxStart) {
//       setStart(maxStart);
//     }
//   }, [maxStart, start]);

//   return (
//     <section
//       id="insights"
//       className="bg-white py-[50px] lg:py-[100px] overflow-hidden"
//     >
//       <div className="fix">
//         {/* Header row */}
//         <motion.div
//           initial={{ opacity: 0, y: 24 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, margin: "-60px" }}
//           transition={{ duration: 0.6, ease: "easeOut" }}
//           className="flex flex-col items-start gap-4 mb-8 md:flex-row md:items-end md:justify-between md:mb-10 md:gap-6"
//         >
//           <div>
//             <div className="eyebrow text-[#003b9d] mb-2 md:mb-4">
//               Industry Insights
//             </div>
//             <h2
//               className="font-bold  bg-gradient-to-r from-[#BF584F] to-[#F6736A] bg-clip-text text-transparent leading-[1.1] tracking-[-0.5px] md:tracking-[-1.568px]"
//               style={{ fontSize: "clamp(24px, 3vw, 40px)" }}
//             >
//               Blogs and News
//             </h2>
//           </div>

//           <a
//             href="#"
//             className="hidden w-full justify-between md:w-auto flex-shrink-0 sm:flex items-center gap-3 bg-gradient-to-r from-[#BF584F] to-[#F6736A] text-white font-semibold text-[15.5px] pl-[26px] pr-4 py-[15px] hover:bg-[#c9603a] transition-colors"
//           >
//             View All
//             <span className="w-[30px] h-[30px] bg-white/16 flex items-center justify-center flex-shrink-0">
//               <ArrowUpRight size={16} strokeWidth={2} />
//             </span>
//           </a>
//         </motion.div>

//         {/* Cards slider */}
//         <>
//           {/* ─── DESKTOP CAROUSEL ─── */}
//           <div ref={trackRef} className="hidden lg:block overflow-hidden">
//             <motion.div
//               animate={{ x: `calc(-${start} * (100% / ${VISIBLE} + 8.67px))` }}
//               transition={{ type: "spring", stiffness: 300, damping: 35 }}
//               className="flex gap-[26px]"
//             >
//               {articles.map((article, i) => (
//                 <motion.div
//                   key={article.id}
//                   initial={{ opacity: 0, y: 20 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   viewport={{ once: true }}
//                   transition={{
//                     delay: i * 0.08,
//                     duration: 0.55,
//                     ease: "easeOut",
//                   }}
//                   className="flex-shrink-0 bg-white rounded-t-[20px] border border-[#ece8e0] flex flex-col overflow-hidden shadow-[0px_1px_3px_0px_rgba(0,20,51,0.04)]"
//                   style={{
//                     width: `calc((100% - ${(VISIBLE - 1) * 26}px) / ${VISIBLE})`,
//                   }}
//                 >
//                   <div className="relative aspect-[343/214] bg-[#06173a] overflow-hidden flex-shrink-0">
//                     <img
//                       src={article.img}
//                       alt={article.title}
//                       className="absolute inset-0 w-full h-full object-cover"
//                     />
//                     <div className="absolute top-3.5 left-3.5">
//                       <span className="bg-white/92 backdrop-blur-[4px] text-[#001b49] font-semibold text-[11.5px] tracking-[0.23px] px-3 py-1.5 rounded-full shadow-[0px_4px_14px_0px_rgba(0,10,30,0.16)]">
//                         {article.category}
//                       </span>
//                     </div>
//                   </div>

//                   <div className="flex flex-col justify-between p-[22px] flex-1">
//                     <h3
//                       className="text-[#54514c] font-bold leading-[1.26] tracking-[-0.37px] mb-3"
//                       style={{ fontSize: "clamp(15px, 1.3vw, 18.5px)" }}
//                     >
//                       {article.title}
//                     </h3>
//                     <p className="text-[#8b877f] text-[13px] font-medium tracking-[0.13px] mb-4">
//                       {article.date}
//                     </p>
//                     <a
//                       href="#"
//                       className="flex items-center gap-2 text-[#e27244] font-semibold text-[14px] tracking-[-0.14px] hover:opacity-75 transition-opacity"
//                     >
//                       Read Article
//                       <ArrowRight size={15} strokeWidth={2} />
//                     </a>
//                   </div>
//                 </motion.div>
//               ))}
//             </motion.div>
//           </div>

//           {/* ─── MOBILE CAROUSEL ─── */}
//           <div className="block lg:hidden overflow-hidden w-full">
//             <motion.div
//               animate={{ x: `calc(-${start} * (100% + 24px))` }}
//               transition={{ type: "spring", stiffness: 280, damping: 30 }}
//               className="flex gap-[24px] w-full"
//             >
//               {articles.map((article) => (
//                 <div
//                   key={`mobile-${article.id}`}
//                   className="w-full min-w-full flex-shrink-0 bg-white rounded-t-[20px] border border-[#ece8e0] flex flex-col overflow-hidden shadow-[0px_1px_3px_0px_rgba(0,20,51,0.04)]"
//                 >
//                   <div className="relative aspect-[343/214] bg-[#06173a] overflow-hidden flex-shrink-0">
//                     <img
//                       src={article.img}
//                       alt={article.title}
//                       className="absolute inset-0 w-full h-full object-cover"
//                     />
//                     <div className="absolute top-3.5 left-3.5">
//                       <span className="bg-white/92 backdrop-blur-[4px] text-[#001b49] font-semibold text-[11.5px] tracking-[0.23px] px-3 py-1.5 rounded-full shadow-[0px_4px_14px_0px_rgba(0,10,30,0.16)]">
//                         {article.category}
//                       </span>
//                     </div>
//                   </div>

//                   <div className="flex flex-col justify-between p-[22px] flex-1">
//                     <h3 className="text-[#54514c] font-bold text-[17px] leading-[1.3] tracking-[-0.3px] mb-3">
//                       {article.title}
//                     </h3>
//                     <p className="text-[#8b877f] text-[13px] font-medium tracking-[0.13px] mb-4">
//                       {article.date}
//                     </p>
//                     <a
//                       href="#"
//                       className="flex items-center gap-2 text-[#e27244] font-semibold text-[14px] tracking-[-0.14px] hover:opacity-75 transition-opacity"
//                     >
//                       Read Article
//                       <ArrowRight size={15} strokeWidth={2} />
//                     </a>
//                   </div>
//                 </div>
//               ))}
//             </motion.div>
//           </div>
//         </>

//         {/* Controls */}
//         <div className="flex items-center justify-between mt-7">
//           <a
//             href="#"
//             className="flex sm:hidden justify-between w-auto flex-shrink-0 items-center gap-3 bg-[#e27244] text-white font-semibold text-[15.5px] pl-[26px] pr-4 py-[15px] hover:bg-[#c9603a] transition-colors"
//           >
//             View All
//             <span className="w-[30px] h-[30px] bg-white/16 flex items-center justify-center flex-shrink-0">
//               <ArrowUpRight size={16} strokeWidth={2} />
//             </span>
//           </a>

//           {/* ─── DESKTOP ONLY SLIDING INDICATOR DOTS ─── */}
//           <LayoutGroup id="carousel-dots">
//             <div className="hidden lg:flex items-center gap-2">
//               {articles.map((_, index) => {
//                 const targetsSlideIndex = Math.min(index, maxStart);
//                 const isSelected = start === index;

//                 return (
//                   <button
//                     key={`dot-${index}`}
//                     onClick={() => setStart(targetsSlideIndex)}
//                     className="relative h-1.5 rounded-full bg-[#ddd8cf] overflow-hidden transition-all duration-300 focus:outline-none cursor-pointer"
//                     style={{ width: isSelected ? "36px" : "6px" }}
//                     aria-label={`Go to item ${index + 1}`}
//                   >
//                     {isSelected && (
//                       <motion.div
//                         layoutId="activeIndicator"
//                         className="absolute inset-0 bg-[#e27244] rounded-full"
//                         transition={{
//                           type: "spring",
//                           stiffness: 300,
//                           damping: 30,
//                         }}
//                       />
//                     )}
//                   </button>
//                 );
//               })}
//             </div>
//           </LayoutGroup>

//           {/* Prev / Next */}
//           <div className="flex gap-2.5 ml-auto sm:ml-0">
//             <button
//               onClick={prev}
//               disabled={start === 0}
//               className="w-[46px] h-[46px] rounded-full border border-[#ddd8cf] bg-white flex items-center justify-center hover:border-[#e27244] hover:text-[#e27244] transition-colors disabled:opacity-30"
//               aria-label="Previous"
//             >
//               <ChevronLeft size={18} strokeWidth={1.8} />
//             </button>
//             <button
//               onClick={next}
//               disabled={start >= maxStart}
//               className="w-[46px] h-[46px] rounded-full border border-[#ddd8cf] bg-white flex items-center justify-center hover:border-[#e27244] hover:text-[#e27244] transition-colors disabled:opacity-30"
//               aria-label="Next"
//             >
//               <ChevronRight size={18} strokeWidth={1.8} />
//             </button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// "use client";

// import { useState, useRef, useEffect } from "react";
// import { motion, LayoutGroup } from "framer-motion";
// import {
//   ArrowRight,
//   ArrowUpRight,
//   ChevronLeft,
//   ChevronRight,
// } from "lucide-react";
// import { FaArrowLeft } from "react-icons/fa6";
// import { FaArrowRight } from "react-icons/fa6";

// const img1 = "/home/insights/insight1.webp";
// const img2 = "/home/insights/insight2.webp";
// const img3 = "/home/insights/insight3.webp";
// const img4 = "/home/insights/insight4.webp";
// const img5 = "/home/insights/insight5.webp";

// const articles = [
//   {
//     id: 1,
//     img: img1,
//     category: "Market Outlook",
//     title: "India's logistics corridors are redrawing the industrial map",
//     date: "14 May 2026",
//   },
//   {
//     id: 2,
//     img: img2,
//     category: "Development",
//     title: "Designing manufacturing campuses for operational day one",
//     date: "2 May 2026",
//   },
//   {
//     id: 3,
//     img: img3,
//     category: "Infrastructure",
//     title: "Why inland container depots are the next freight battleground",
//     date: "21 Apr 2026",
//   },
//   {
//     id: 4,
//     img: img4,
//     category: "Capital",
//     title: "The capital discipline behind data-centre development at scale",
//     date: "9 Apr 2026",
//   },
//   {
//     id: 5,
//     img: img5,
//     category: "Sustainability",
//     title: "Responsible land planning as a long-term value strategy",
//     date: "28 Mar 2026",
//   },
// ];

// const VISIBLE = 3;
// // This determines how many card spaces are calculated for the total viewport width.
// // 3.4 leaves exactly enough room to show 3 full cards and a partial 4th card peek.
// const DESKTOP_PEEK_FACTOR = 3.4;

// export default function Insights() {
//   const [start, setStart] = useState(0);
//   const [isLargeScreen, setIsLargeScreen] = useState(true);
//   const trackRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const checkSize = () => {
//       setIsLargeScreen(window.innerWidth >= 1024);
//     };
//     checkSize();
//     window.addEventListener("resize", checkSize);
//     return () => window.removeEventListener("resize", checkSize);
//   }, []);

//   const maxStart = isLargeScreen
//     ? articles.length - VISIBLE
//     : articles.length - 1;

//   function prev() {
//     setStart((s) => Math.max(0, s - 1));
//   }
//   function next() {
//     setStart((s) => Math.min(maxStart, s + 1));
//   }

//   useEffect(() => {
//     if (start > maxStart) {
//       setStart(maxStart);
//     }
//   }, [maxStart, start]);

//   return (
//     <section
//       id="insights"
//       className="bg-white py-[50px] lg:py-[100px] overflow-hidden"
//     >
//       <div className="fix">
//         {/* Header row */}
//         <motion.div
//           initial={{ opacity: 0, y: 24 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, margin: "-60px" }}
//           transition={{ duration: 0.6, ease: "easeOut" }}
//           className="flex flex-col items-start gap-4 mb-8 md:flex-row md:items-end md:justify-between md:mb-10 md:gap-6"
//         >
//           <div>
//             <div className="eyebrow text-[#003b9d] mb-2 md:mb-4">
//               Industry Insights
//             </div>
//             <h2
//               className="font-bold bg-gradient-to-r from-[#BF584F] to-[#F6736A] bg-clip-text text-transparent leading-[1.1] tracking-[-0.5px] md:tracking-[-1.568px]"
//               style={{ fontSize: "clamp(24px, 3vw, 40px)" }}
//             >
//               Blogs and News
//             </h2>
//           </div>

//           <a
//             href="#"
//             className="hidden w-full justify-between md:w-auto flex-shrink-0 sm:flex items-center gap-3 bg-gradient-to-r from-[#BF584F] to-[#F6736A] text-white font-semibold text-[15.5px] pl-[26px] pr-4 py-[15px] hover:bg-[#c9603a] transition-colors"
//           >
//             View All
//             <span className="w-[30px] h-[30px] bg-white/16 flex items-center justify-center flex-shrink-0">
//               <ArrowUpRight size={16} strokeWidth={2} />
//             </span>
//           </a>
//         </motion.div>

//         {/* Cards slider */}
//         <>
//           {/* ─── DESKTOP CAROUSEL ─── */}
//           <div ref={trackRef} className="hidden lg:block overflow-hidden">
//             <motion.div
//               animate={{
//                 x: `calc(-${start} * (100% / ${DESKTOP_PEEK_FACTOR} + 26px))`,
//               }}
//               transition={{ type: "spring", stiffness: 300, damping: 35 }}
//               className="flex gap-[26px]"
//             >
//               {articles.map((article, i) => (
//                 <motion.div
//                   key={article.id}
//                   initial={{ opacity: 0, y: 20 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   viewport={{ once: true }}
//                   transition={{
//                     delay: i * 0.08,
//                     duration: 0.55,
//                     ease: "easeOut",
//                   }}
//                   className="flex-shrink-0 bg-white rounded-t-[20px] border border-[#ece8e0] flex flex-col overflow-hidden shadow-[0px_1px_3px_0px_rgba(0,20,51,0.04)]"
//                   style={{
//                     width: `calc((100% - ${(Math.ceil(DESKTOP_PEEK_FACTOR) - 1) * 26}px) / ${DESKTOP_PEEK_FACTOR})`,
//                   }}
//                 >
//                   <div className="relative aspect-[343/214] bg-[#06173a] overflow-hidden flex-shrink-0">
//                     <img
//                       src={article.img}
//                       alt={article.title}
//                       className="absolute inset-0 w-full h-full object-cover"
//                     />
//                     <div className="absolute top-3.5 left-3.5">
//                       <span className="bg-white/92 backdrop-blur-[4px] text-[#001b49] font-semibold text-[11.5px] tracking-[0.23px] px-3 py-1.5 rounded-full shadow-[0px_4px_14px_0px_rgba(0,10,30,0.16)]">
//                         {article.category}
//                       </span>
//                     </div>
//                   </div>

//                   <div className="flex flex-col justify-between p-[22px] flex-1">
//                     <h3
//                       className="text-[#54514c] font-bold leading-[1.26] tracking-[-0.37px] mb-3"
//                       style={{ fontSize: "clamp(15px, 1.3vw, 18.5px)" }}
//                     >
//                       {article.title}
//                     </h3>
//                     <p className="text-[#8b877f] text-[13px] font-medium tracking-[0.13px] mb-4">
//                       {article.date}
//                     </p>
//                     <a
//                       href="#"
//                       className="flex items-center gap-2 text-[#e27244] font-semibold text-[14px] tracking-[-0.14px] hover:opacity-75 transition-opacity"
//                     >
//                       Read Article
//                       <ArrowRight size={15} strokeWidth={2} />
//                     </a>
//                   </div>
//                 </motion.div>
//               ))}
//             </motion.div>
//           </div>

//           {/* ─── MOBILE CAROUSEL ─── */}
//           <div className="block lg:hidden overflow-hidden w-full">
//             <motion.div
//               animate={{ x: `calc(-${start} * (100% + 24px))` }}
//               transition={{ type: "spring", stiffness: 280, damping: 30 }}
//               className="flex gap-[24px] w-full"
//             >
//               {articles.map((article) => (
//                 <div
//                   key={`mobile-${article.id}`}
//                   className="w-full min-w-full flex-shrink-0 bg-white rounded-t-[20px] border border-[#ece8e0] flex flex-col overflow-hidden shadow-[0px_1px_3px_0px_rgba(0,20,51,0.04)]"
//                 >
//                   <div className="relative aspect-[343/214] bg-[#06173a] overflow-hidden flex-shrink-0">
//                     <img
//                       src={article.img}
//                       alt={article.title}
//                       className="absolute inset-0 w-full h-full object-cover"
//                     />
//                     <div className="absolute top-3.5 left-3.5">
//                       <span className="bg-white/92 backdrop-blur-[4px] text-[#001b49] font-semibold text-[11.5px] tracking-[0.23px] px-3 py-1.5 rounded-full shadow-[0px_4px_14px_0px_rgba(0,10,30,0.16)]">
//                         {article.category}
//                       </span>
//                     </div>
//                   </div>

//                   <div className="flex flex-col justify-between p-[22px] flex-1">
//                     <h3 className="text-[#54514c] font-bold text-[17px] leading-[1.3] tracking-[-0.3px] mb-3">
//                       {article.title}
//                     </h3>
//                     <p className="text-[#8b877f] text-[13px] font-medium tracking-[0.13px] mb-4">
//                       {article.date}
//                     </p>
//                     <a
//                       href="#"
//                       className="flex items-center gap-2 text-[#e27244] font-semibold text-[14px] tracking-[-0.14px] hover:opacity-75 transition-opacity"
//                     >
//                       Read Article
//                       <ArrowRight size={15} strokeWidth={2} />
//                     </a>
//                   </div>
//                 </div>
//               ))}
//             </motion.div>
//           </div>
//         </>

//         {/* Controls */}
//         <div className="flex items-center justify-between mt-7">
//           <a
//             href="#"
//             className="flex sm:hidden justify-between w-auto flex-shrink-0 items-center gap-3 bg-[#e27244] text-white font-semibold text-[15.5px] pl-[26px] pr-4 py-[15px] hover:bg-[#c9603a] transition-colors"
//           >
//             View All
//             <span className="w-[30px] h-[30px] bg-white/16 flex items-center justify-center flex-shrink-0">
//               <ArrowUpRight size={16} strokeWidth={2} />
//             </span>
//           </a>

//           {/* ─── DESKTOP ONLY SLIDING INDICATOR DOTS ─── */}
//           <LayoutGroup id="carousel-dots">
//             <div className="hidden lg:flex items-center gap-2">
//               {articles.map((_, index) => {
//                 const targetsSlideIndex = Math.min(index, maxStart);
//                 const isSelected = start === index;

//                 return (
//                   <button
//                     key={`dot-${index}`}
//                     onClick={() => setStart(targetsSlideIndex)}
//                     className="relative h-1.5 rounded-full bg-[#ddd8cf] overflow-hidden transition-all duration-300 focus:outline-none cursor-pointer"
//                     style={{ width: isSelected ? "36px" : "6px" }}
//                     aria-label={`Go to item ${index + 1}`}
//                   >
//                     {isSelected && (
//                       <motion.div
//                         layoutId="activeIndicator"
//                         className="absolute inset-0 bg-[#e27244] rounded-full"
//                         transition={{
//                           type: "spring",
//                           stiffness: 300,
//                           damping: 30,
//                         }}
//                       />
//                     )}
//                   </button>
//                 );
//               })}
//             </div>
//           </LayoutGroup>

//           {/* Prev / Next */}
//           <div className="flex gap-2.5 ml-auto sm:ml-0">
//             <button
//               onClick={prev}
//               disabled={start === 0}
//               className="w-[46px] h-[46px] rounded-full border border-[#ddd8cf] bg-white flex items-center justify-center hover:border-[#e27244] hover:text-[#e27244] transition-colors disabled:opacity-30"
//               aria-label="Previous"
//             >
//               <FaArrowLeft size={15} strokeWidth={0.8} />
//             </button>
//             <button
//               onClick={next}
//               disabled={start >= maxStart}
//               className="w-[46px] h-[46px] rounded-full border border-[#ddd8cf] bg-white flex items-center justify-center hover:border-[#e27244] hover:text-[#e27244] transition-colors disabled:opacity-30"
//               aria-label="Next"
//             >
//               <FaArrowRight size={15} strokeWidth={0.8} />
//             </button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import { useState, useRef, useEffect } from "react";
import { motion, LayoutGroup } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";

const img1 = "/home/insights/insight1.webp";
const img2 = "/home/insights/insight2.webp";
const img3 = "/home/insights/insight3.webp";
const img4 = "/home/insights/insight4.webp";
const img5 = "/home/insights/insight5.webp";

const articles = [
  {
    id: 1,
    img: img1,
    category: "Market Outlook",
    title: "India's logistics corridors are redrawing the industrial map",
    date: "14 May 2026",
  },
  {
    id: 2,
    img: img2,
    category: "Development",
    title: "Designing manufacturing campuses for operational day one",
    date: "2 May 2026",
  },
  {
    id: 3,
    img: img3,
    category: "Infrastructure",
    title: "Why inland container depots are the next freight battleground",
    date: "21 Apr 2026",
  },
  {
    id: 4,
    img: img4,
    category: "Capital",
    title: "The capital discipline behind data-centre development at scale",
    date: "9 Apr 2026",
  },
  {
    id: 5,
    img: img5,
    category: "Sustainability",
    title: "Responsible land planning as a long-term value strategy",
    date: "28 Mar 2026",
  },
];

const VISIBLE = 3;
// This determines how many card spaces are calculated for the total viewport width.
// 3.4 leaves exactly enough room to show 3 full cards and a partial 4th card peek.
const DESKTOP_PEEK_FACTOR = 3.4;
const GAP_PX = 26;

export default function Insights() {
  const [start, setStart] = useState(0);
  const [isLargeScreen, setIsLargeScreen] = useState(true);

  // Outer clipped viewport for the desktop track
  const desktopContainerRef = useRef<HTMLDivElement>(null);
  // Inner flex row holding all the cards
  const desktopTrackRef = useRef<HTMLDivElement>(null);
  // The very first card, used to measure real rendered width
  const firstCardRef = useRef<HTMLDivElement>(null);

  // Real measured px step (card width + gap) and the real max scroll distance
  const [stepPx, setStepPx] = useState(0);
  const [maxTranslatePx, setMaxTranslatePx] = useState(0);
  // How many discrete stop positions actually exist on desktop
  const [desktopMaxStart, setDesktopMaxStart] = useState(
    Math.max(0, articles.length - VISIBLE),
  );

  useEffect(() => {
    const checkSize = () => {
      setIsLargeScreen(window.innerWidth >= 1024);
    };
    checkSize();
    window.addEventListener("resize", checkSize);
    return () => window.removeEventListener("resize", checkSize);
  }, []);

  useEffect(() => {
    function measure() {
      const container = desktopContainerRef.current;
      const track = desktopTrackRef.current;
      const firstCard = firstCardRef.current;
      if (!container || !track || !firstCard) return;

      const containerWidth = container.clientWidth;
      const trackWidth = track.scrollWidth;
      const cardWidth = firstCard.getBoundingClientRect().width;
      const step = cardWidth + GAP_PX;
      const maxT = Math.max(0, trackWidth - containerWidth);
      const steps = step > 0 ? Math.ceil(maxT / step) : 0;

      setStepPx(step);
      setMaxTranslatePx(maxT);
      setDesktopMaxStart(steps);
    }

    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  const mobileMaxStart = articles.length - 1;
  const maxStart = isLargeScreen ? desktopMaxStart : mobileMaxStart;

  function prev() {
    setStart((s) => Math.max(0, s - 1));
  }
  function next() {
    setStart((s) => Math.min(maxStart, s + 1));
  }

  useEffect(() => {
    if (start > maxStart) {
      setStart(maxStart);
    }
  }, [maxStart, start]);

  // The last step snaps to the real max scroll distance instead of a uniform
  // step multiple, so the final card always sits flush against the edge.
  const desktopTranslateX = -Math.min(start * stepPx, maxTranslatePx);

  return (
    <section
      id="insights"
      className="bg-white py-[50px] lg:py-[100px] overflow-hidden"
    >
      <div className="fix">
        {/* Header row */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col items-start gap-4 mb-8 md:flex-row md:items-end md:justify-between md:mb-10 md:gap-6"
        >
          <div>
            <div className="eyebrow text-[#003b9d] mb-2 md:mb-4">
              Industry Insights
            </div>
            <h2
              className="font-bold bg-gradient-to-r from-[#BF584F] to-[#F6736A] bg-clip-text text-transparent leading-[1.1] tracking-[-0.5px] md:tracking-[-1.568px]"
              style={{ fontSize: "clamp(24px, 3vw, 40px)" }}
            >
              Blogs and News
            </h2>
          </div>

          <a
            href="#"
            className="hidden w-full justify-between md:w-auto flex-shrink-0 sm:flex items-center gap-3 bg-gradient-to-r from-[#BF584F] to-[#F6736A] text-white font-semibold text-[15.5px] pl-[26px] pr-4 py-[15px] hover:bg-[#c9603a] transition-colors"
          >
            View All
            <span className="w-[30px] h-[30px] bg-white/16 flex items-center justify-center flex-shrink-0">
              <ArrowUpRight size={16} strokeWidth={2} />
            </span>
          </a>
        </motion.div>

        {/* Cards slider */}
        <>
          {/* ─── DESKTOP CAROUSEL ─── */}
          <div
            ref={desktopContainerRef}
            className="hidden lg:block overflow-hidden"
          >
            <motion.div
              ref={desktopTrackRef}
              animate={{ x: desktopTranslateX }}
              transition={{ type: "spring", stiffness: 300, damping: 35 }}
              className="flex gap-[26px]"
            >
              {articles.map((article, i) => (
                <motion.div
                  key={article.id}
                  ref={i === 0 ? firstCardRef : undefined}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: i * 0.08,
                    duration: 0.55,
                    ease: "easeOut",
                  }}
                  className="flex-shrink-0 bg-white rounded-t-[20px] border border-[#ece8e0] flex flex-col overflow-hidden shadow-[0px_1px_3px_0px_rgba(0,20,51,0.04)]"
                  style={{
                    width: `calc((100% - ${(Math.ceil(DESKTOP_PEEK_FACTOR) - 1) * 26}px) / ${DESKTOP_PEEK_FACTOR})`,
                  }}
                >
                  <div className="relative aspect-[343/214] bg-[#06173a] overflow-hidden flex-shrink-0">
                    <img
                      src={article.img}
                      alt={article.title}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute top-3.5 left-3.5">
                      <span className="bg-white/92 backdrop-blur-[4px] text-[#001b49] font-semibold text-[11.5px] tracking-[0.23px] px-3 py-1.5 rounded-full shadow-[0px_4px_14px_0px_rgba(0,10,30,0.16)]">
                        {article.category}
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-col justify-between p-[22px] flex-1">
                    <h3
                      className="text-[#54514c] font-bold leading-[1.26] tracking-[-0.37px] mb-3"
                      style={{ fontSize: "clamp(15px, 1.3vw, 18.5px)" }}
                    >
                      {article.title}
                    </h3>
                    <p className="text-[#8b877f] text-[13px] font-medium tracking-[0.13px] mb-4">
                      {article.date}
                    </p>
                    <a
                      href="#"
                      className="flex items-center gap-2 text-[#e27244] font-semibold text-[14px] tracking-[-0.14px] hover:opacity-75 transition-opacity"
                    >
                      Read Article
                      <ArrowRight size={15} strokeWidth={2} />
                    </a>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* ─── MOBILE CAROUSEL ─── */}
          <div className="block lg:hidden overflow-hidden w-full">
            <motion.div
              animate={{ x: `calc(-${start} * (100% + 24px))` }}
              transition={{ type: "spring", stiffness: 280, damping: 30 }}
              className="flex gap-[24px] w-full"
            >
              {articles.map((article) => (
                <div
                  key={`mobile-${article.id}`}
                  className="w-full min-w-full flex-shrink-0 bg-white rounded-t-[20px] border border-[#ece8e0] flex flex-col overflow-hidden shadow-[0px_1px_3px_0px_rgba(0,20,51,0.04)]"
                >
                  <div className="relative aspect-[343/214] bg-[#06173a] overflow-hidden flex-shrink-0">
                    <img
                      src={article.img}
                      alt={article.title}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute top-3.5 left-3.5">
                      <span className="bg-white/92 backdrop-blur-[4px] text-[#001b49] font-semibold text-[11.5px] tracking-[0.23px] px-3 py-1.5 rounded-full shadow-[0px_4px_14px_0px_rgba(0,10,30,0.16)]">
                        {article.category}
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-col justify-between p-[22px] flex-1">
                    <h3 className="text-[#54514c] font-bold text-[17px] leading-[1.3] tracking-[-0.3px] mb-3">
                      {article.title}
                    </h3>
                    <p className="text-[#8b877f] text-[13px] font-medium tracking-[0.13px] mb-4">
                      {article.date}
                    </p>
                    <a
                      href="#"
                      className="flex items-center gap-2 text-[#e27244] font-semibold text-[14px] tracking-[-0.14px] hover:opacity-75 transition-opacity"
                    >
                      Read Article
                      <ArrowRight size={15} strokeWidth={2} />
                    </a>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </>

        {/* Controls */}
        <div className="flex items-center justify-between mt-7">
          <a
            href="#"
            className="flex sm:hidden justify-between w-auto flex-shrink-0 items-center gap-3 bg-[#e27244] text-white font-semibold text-[15.5px] pl-[26px] pr-4 py-[15px] hover:bg-[#c9603a] transition-colors"
          >
            View All
            <span className="w-[30px] h-[30px] bg-white/16 flex items-center justify-center flex-shrink-0">
              <ArrowUpRight size={16} strokeWidth={2} />
            </span>
          </a>

          {/* ─── DESKTOP ONLY SLIDING INDICATOR DOTS ─── */}
          {/* Exactly one dot per real stop position (desktopMaxStart + 1) */}
          <LayoutGroup id="carousel-dots">
            <div className="hidden lg:flex items-center gap-2">
              {Array.from({ length: desktopMaxStart + 1 }).map((_, index) => {
                const isSelected = start === index;

                return (
                  <button
                    key={`dot-${index}`}
                    onClick={() => setStart(index)}
                    className="relative h-1.5 rounded-full bg-[#ddd8cf] overflow-hidden transition-all duration-300 focus:outline-none cursor-pointer"
                    style={{ width: isSelected ? "36px" : "6px" }}
                    aria-label={`Go to item ${index + 1}`}
                  >
                    {isSelected && (
                      <motion.div
                        layoutId="activeIndicator"
                        className="absolute inset-0 bg-[#e27244] rounded-full"
                        transition={{
                          type: "spring",
                          stiffness: 300,
                          damping: 30,
                        }}
                      />
                    )}
                  </button>
                );
              })}
            </div>
          </LayoutGroup>

          {/* Prev / Next */}
          <div className="flex gap-2.5 ml-auto sm:ml-0">
            <button
              onClick={prev}
              disabled={start === 0}
              className="w-[46px] h-[46px] rounded-full border border-[#ddd8cf] bg-white flex items-center justify-center hover:border-[#e27244] text-[#003B9D] hover:text-[#e27244] transition-colors disabled:opacity-30"
              aria-label="Previous"
            >
              <FaArrowLeft size={15} strokeWidth={0.8} />
            </button>
            <button
              onClick={next}
              disabled={start >= maxStart}
              className="w-[46px] h-[46px] rounded-full border border-[#ddd8cf] bg-white flex items-center justify-center hover:border-[#e27244] text-[#003B9D] hover:text-[#e27244] transition-colors disabled:opacity-30"
              aria-label="Next"
            >
              <FaArrowRight size={15} strokeWidth={0.8} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
