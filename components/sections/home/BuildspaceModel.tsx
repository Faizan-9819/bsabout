// "use client";

// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { ArrowUpRight, ArrowDownRight } from "lucide-react";

// const imgInfra  = "https://www.figma.com/api/mcp/asset/2ee1a2a9-1a6b-43db-8207-8839f931d669";
// const imgInfra2 = "https://www.figma.com/api/mcp/asset/8b6e8d84-d348-4782-8581-73c5ea3d0284";
// const iconInfraArrow  = "https://www.figma.com/api/mcp/asset/95ea72eb-38cd-40bb-b751-13aa1154fdc6";
// const iconValueArrow  = "https://www.figma.com/api/mcp/asset/d754c668-5002-456c-8a17-babdd1d576f5";
// const iconWealthArrow = "https://www.figma.com/api/mcp/asset/f1dae01a-6398-4b91-b51f-26b98817ffd8";

// const rows = [
//   {
//     num: "01",
//     brand: "Build",
//     sub: "INFRA",
//     color: "#e27244",
//     desc: "Industrial and logistics parks built from the ground up—land strategy, engineering, approvals, and delivery within a single integrated platform.",
//     expanded: true,
//   },
//   {
//     num: "02",
//     brand: "Build",
//     sub: "VALUE",
//     color: "#54514c",
//     desc: "Positioned near major hubs for cost efficiency and growth, our parks offer excellent access to highways.",
//     expanded: false,
//   },
//   {
//     num: "03",
//     brand: "Build",
//     sub: "WEALTH",
//     color: "#54514c",
//     desc: "Through three specialised verticals, BuildSpace serves the entire infrastructure value chain.",
//     expanded: false,
//   },
// ];

// const fadeUp = {
//   hidden: { opacity: 0, y: 24 },
//   show: (i: number) => ({
//     opacity: 1, y: 0,
//     transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" as const },
//   }),
// };

// export default function BuildspaceModel() {
//   const [activeRow, setActiveRow] = useState(0);

//   return (
//     <section id="model" className="bg-[#fafaf8] py-[80px] lg:py-[100px]">
//       <div className="fix">
//         {/* Header */}
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-[200px] mb-[56px] lg:mb-[64px]">
//           <motion.div
//             className="flex flex-col gap-7"
//             variants={fadeUp}
//             custom={0}
//             initial="hidden"
//             whileInView="show"
//             viewport={{ once: true, margin: "-60px" }}
//           >
//             <div className="eyebrow text-[#003b9d]">The BuildSpace Model</div>
//             <h2
//               className="font-bold text-[#e27244] leading-[1.1] tracking-[-1.6px]"
//               style={{ fontSize: "clamp(28px, 4vw, 56px)" }}
//             >
//               Three solutions.<br />One infrastructure ecosystem.
//             </h2>
//           </motion.div>

//           <motion.p
//             className="text-[#54514c] leading-[1.4] self-center"
//             style={{ fontSize: "clamp(14px, 1.2vw, 18px)" }}
//             variants={fadeUp}
//             custom={1}
//             initial="hidden"
//             whileInView="show"
//             viewport={{ once: true, margin: "-60px" }}
//           >
//             Every stakeholder enters the infrastructure journey with a different objective. Some need operational facilities, others seek to unlock land value, while many are looking for long-term participation in industrial growth. Through three specialised verticals, BuildSpace serves the entire infrastructure value chain.
//           </motion.p>
//         </div>

//         {/* Accordion rows */}
//         <div className="flex flex-col gap-px">
//           {rows.map((row, i) => {
//             const isActive = activeRow === i;
//             const numSize = isActive ? "clamp(80px, 10vw, 140px)" : "clamp(40px, 6vw, 70px)";
//             const titleSize = isActive ? "clamp(28px, 3.5vw, 48px)" : "clamp(24px, 3vw, 40px)";

//             return (
//               <motion.div
//                 key={row.num}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: i * 0.12, duration: 0.55, ease: "easeOut" }}
//                 className="model-row cursor-pointer py-5 lg:py-6"
//                 onClick={() => setActiveRow(i)}
//               >
//                 <div className="flex items-center gap-[89px]">
//                   {/* Number */}
//                   <div
//                     className={`font-normal text-right select-none transition-all duration-300 ${isActive ? "opacity-100" : "opacity-40"}`}
//                     style={{
//                       fontSize: numSize,
//                       letterSpacing: "-6.9px",
//                       background: "linear-gradient(180deg, rgba(0,0,0,0.22) 0%, rgba(0,0,0,0.1) 52%, rgba(0,0,0,0) 100%)",
//                       WebkitBackgroundClip: "text",
//                       WebkitTextFillColor: "transparent",
//                       backgroundClip: "text",
//                       minWidth: "clamp(50px, 8vw, 120px)",
//                       transition: "font-size 0.3s ease",
//                     }}
//                   >
//                     {row.num}
//                   </div>

//                   {/* Brand name */}
//                   <div
//                     className={`font-normal transition-all duration-300 ${isActive ? "opacity-100" : "opacity-80"}`}
//                     style={{
//                       fontSize: titleSize,
//                       color: isActive ? "#222" : "#54514c",
//                       letterSpacing: "-0.92px",
//                       minWidth: "clamp(180px, 20vw, 288px)",
//                       transition: "font-size 0.3s ease, color 0.3s ease",
//                     }}
//                   >
//                     {row.brand}<span style={{ color: row.color, fontWeight: 700 }}>{row.sub}</span>
//                   </div>
//                 </div>

//                 {/* Expanded content (image + desc for infra; desc for others) */}
//                 <AnimatePresence>
//                   {isActive && (
//                     <motion.div
//                       initial={{ opacity: 0, width: 0 }}
//                       animate={{ opacity: 1, width: "auto" }}
//                       exit={{ opacity: 0, width: 0 }}
//                       transition={{ duration: 0.35, ease: "easeOut" }}
//                       className="overflow-hidden"
//                     >
//                       {i === 0 ? (
//                         <div className="overflow-hidden bg-[#e4e4e4] relative h-[263px] w-[570px] max-w-full">
//                           <img src={imgInfra} alt="BuildINFRA" className="absolute inset-0 w-full h-full object-cover object-center" />
//                           <img src={imgInfra2} alt="" className="absolute bottom-0 left-0 w-full object-bottom pointer-events-none" />
//                         </div>
//                       ) : (
//                         <p
//                           className="text-[#54514c] leading-[1.4] max-w-[460px]"
//                           style={{ fontSize: "clamp(13px, 1.1vw, 16px)" }}
//                         >
//                           {row.desc}
//                         </p>
//                       )}
//                     </motion.div>
//                   )}
//                 </AnimatePresence>

//                 {/* Arrow icon */}
//                 <div
//                   className={`w-[56px] h-[56px] flex items-center justify-center rounded-full border transition-colors duration-300 flex-shrink-0 ${
//                     isActive
//                       ? "bg-[#003b9d] border-[#003b9d] text-white"
//                       : "bg-transparent border-[#dbdbdb] text-[#54514c]"
//                   }`}
//                 >
//                   {isActive ? (
//                     <ArrowUpRight size={22} strokeWidth={1.8} />
//                   ) : (
//                     <ArrowDownRight size={22} strokeWidth={1.5} />
//                   )}
//                 </div>
//               </motion.div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// }

// "use client";

// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// const imgInfra =
//   "https://www.figma.com/api/mcp/asset/2ee1a2a9-1a6b-43db-8207-8839f931d669";
// const imgInfra2 =
//   "https://www.figma.com/api/mcp/asset/8b6e8d84-d348-4782-8581-73c5ea3d0284";

// const rows = [
//   {
//     num: "01",
//     brand: "Build",
//     sub: "INFRA",
//     color: "#e27244",
//     desc: "Industrial and logistics parks built from the ground up—land strategy, engineering, approvals, and delivery within a single integrated platform.",
//     // Data objects updated to securely support their own images directly
//     image1: imgInfra,
//     image2: imgInfra2,
//   },
//   {
//     num: "02",
//     brand: "Build",
//     sub: "VALUE",
//     color: "#54514c",
//     desc: "Positioned near major hubs for cost efficiency and growth, our parks offer excellent access to highways.",
//     image1: imgInfra, // Replace with your specific second card image later
//     image2: imgInfra2, // Replace with your specific second card image 2 later
//   },
//   {
//     num: "03",
//     brand: "Build",
//     sub: "WEALTH",
//     color: "#54514c",
//     desc: "Through three specialised verticals, BuildSpace serves the entire infrastructure value chain.",
//     image1: imgInfra, // Replace with your specific third card image later
//     image2: imgInfra2, // Replace with your specific third card image 2 later
//   },
// ];

// const fadeUp = {
//   hidden: { opacity: 0, y: 24 },
//   show: (i: number) => ({
//     opacity: 1,
//     y: 0,
//     transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" as const },
//   }),
// };

// export default function BuildspaceModel() {
//   // Set default initial state to index 0 (first card open)
//   const [activeRow, setActiveRow] = useState(0);

//   return (
//     <section
//       id="model"
//       className="bg-[#fafaf8] py-[80px] lg:py-[100px]"
//       onMouseLeave={() => setActiveRow(0)} // Smoothly resets back to Card 1 when mouse leaves section
//     >
//       <div className="fix">
//         {/* Header */}
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-[200px] mb-[56px] lg:mb-[64px]">
//           <motion.div
//             className="flex flex-col gap-7"
//             variants={fadeUp}
//             custom={0}
//             initial="hidden"
//             whileInView="show"
//             viewport={{ once: true, margin: "-60px" }}
//           >
//             <div className="eyebrow text-[#003b9d]">The BuildSpace Model</div>
//             <h2
//               className="font-bold text-[#BF584F] leading-[1.1] tracking-[-1.6px]"
//               style={{ fontSize: "clamp(28px, 4vw, 56px)" }}
//             >
//               Three solutions.
//               <br />
//               One infrastructure ecosystem.
//             </h2>
//           </motion.div>

//           <motion.p
//             className="text-[#54514c] leading-[1.4] self-center"
//             style={{ fontSize: "clamp(14px, 1.2vw, 18px)" }}
//             variants={fadeUp}
//             custom={1}
//             initial="hidden"
//             whileInView="show"
//             viewport={{ once: true, margin: "-60px" }}
//           >
//             Industrial growth brings together different stakeholders, each with
//             a different objective. Some are building the infrastructure their
//             operations depend on. Others are unlocking the value held in land.
//             Many are seeking long-term participation in industrial growth
//             itself. BuildSpace meets all three through a single integrated
//             platform, spanning the entire infrastructure value chain from land
//             and development to capital and long-term performance.
//           </motion.p>
//         </div>

//         {/* Accordion rows */}
//         <div className="flex flex-col gap-px">
//           {rows.map((row, i) => {
//             const isActive = activeRow === i;
//             const numSize = isActive
//               ? "clamp(80px, 10vw, 140px)"
//               : "clamp(40px, 6vw, 70px)";
//             const titleSize = isActive
//               ? "clamp(28px, 3.5vw, 48px)"
//               : "clamp(24px, 3vw, 40px)";

//             return (
//               <motion.div
//                 key={row.num}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{
//                   delay: i * 0.12,
//                   duration: 0.55,
//                   ease: "easeOut",
//                 }}
//                 className="model-row cursor-pointer py-5 lg:py-6 flex items-center justify-between gap-4 border-b border-black/5"
//                 onMouseEnter={() => setActiveRow(i)} // Converted onClick completely to onMouseEnter hover activation
//               >
//                 <div className="flex items-center gap-[89px] flex-1">
//                   {/* Number */}
//                   <div
//                     className={`font-normal  select-none transition-all duration-300 ${isActive ? "opacity-100" : "opacity-40"}`}
//                     style={{
//                       fontSize: numSize,
//                       letterSpacing: "-6.9px",
//                       background:
//                         "linear-gradient(180deg, rgba(0,0,0,0.22) 0%, rgba(0,0,0,0.1) 52%, rgba(0,0,0,0) 100%)",
//                       WebkitBackgroundClip: "text",
//                       WebkitTextFillColor: "transparent",
//                       backgroundClip: "text",
//                       minWidth: "clamp(50px, 8vw, 120px)",
//                       transition: "font-size 0.3s ease",
//                     }}
//                   >
//                     {row.num}
//                   </div>

//                   {/* Brand name */}
//                   <div
//                     className={`font-normal transition-all duration-300 ${isActive ? "opacity-100" : "opacity-80"}`}
//                     style={{
//                       fontSize: titleSize,
//                       color: isActive ? "#222" : "#54514c",
//                       letterSpacing: "-0.92px",
//                       minWidth: "clamp(180px, 20vw, 288px)",
//                       transition: "font-size 0.3s ease, color 0.3s ease",
//                     }}
//                   >
//                     {row.brand}
//                     <span style={{ color: row.color, fontWeight: 700 }}>
//                       {row.sub}
//                     </span>
//                   </div>

//                   {/* Expanded content area (Every card now dynamically shows its own assigned image and text) */}
//                   <div className="flex-1 hidden md:block">
//                     <AnimatePresence mode="wait">
//                       {isActive && (
//                         <motion.div
//                           initial={{ opacity: 0, y: 15 }}
//                           animate={{ opacity: 1, y: 0 }}
//                           exit={{ opacity: 0, y: 15 }}
//                           transition={{ duration: 0.4, ease: "easeOut" }}
//                           className="overflow-hidden"
//                         >
//                           <div className="flex items-center gap-8">
//                             {/* Image Container Frame */}
//                             <div className="overflow-hidden bg-[#e4e4e4] relative h-[180px] w-[320px] rounded shrink-0">
//                               {/* Added fade-in + subtle zoom scale for Image 1 */}
//                               <motion.img
//                                 initial={{ opacity: 0, scale: 1.05 }}
//                                 animate={{ opacity: 1, scale: 1 }}
//                                 transition={{ duration: 0.5, ease: "easeOut" }}
//                                 src={row.image1}
//                                 alt={row.sub}
//                                 className="absolute inset-0 w-full h-full object-cover object-center"
//                               />

//                               {/* Added fade-in with a micro-delay for the overlay Image 2 to blend perfectly */}
//                               <motion.img
//                                 initial={{ opacity: 0 }}
//                                 animate={{ opacity: 1 }}
//                                 transition={{
//                                   duration: 0.4,
//                                   delay: 0.1,
//                                   ease: "easeOut",
//                                 }}
//                                 src={row.image2}
//                                 alt=""
//                                 className="absolute bottom-0 left-0 w-full object-bottom pointer-events-none"
//                               />
//                             </div>
//                           </div>
//                         </motion.div>
//                       )}

//                       {!isActive && (
//                         <p
//                           className={` text-[#54514c] leading-[1.4] max-w-[420px]`}
//                           style={{ fontSize: "clamp(13px, 1.1vw, 16px)" }}
//                         >
//                           {row.desc}
//                         </p>
//                       )}
//                     </AnimatePresence>
//                   </div>
//                 </div>

//                 {/* Arrow icon framework (Keeps identical custom styling, color states, and utilizes hardware-accelerated rotation) */}
//                 <div
//                   className={`w-[56px] h-[56px] flex items-center justify-center rounded-full border transition-colors duration-300 flex-shrink-0 ${
//                     isActive
//                       ? "bg-[#003b9d] border-[#003b9d] text-white"
//                       : "bg-transparent border-[#dbdbdb] text-[#54514c]"
//                   }`}
//                 >
//                   <motion.div
//                     animate={{ rotate: isActive ? -130 : 0 }}
//                     transition={{ duration: 0.35, ease: "easeOut" }}
//                     className="flex items-center justify-center"
//                   >
//                     {/* Single continuous arrow primitive pointing down by default, smoothly rotating up on hover */}
//                     <svg
//                       width="22"
//                       height="22"
//                       viewBox="0 0 24 24"
//                       fill="none"
//                       stroke="currentColor"
//                       strokeWidth={isActive ? 1.8 : 1.5}
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                     >
//                       <line x1="12" y1="5" x2="12" y2="19"></line>
//                       <polyline points="19 12 12 19 5 12"></polyline>
//                     </svg>
//                   </motion.div>
//                 </div>
//               </motion.div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// }

// "use client";

// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { HiArrowSmallDown } from "react-icons/hi2";
// import { ArrowDown } from "lucide-react";

// const imgInfra =
//   "https://www.figma.com/api/mcp/asset/2ee1a2a9-1a6b-43db-8207-8839f931d669";
// const imgInfra2 =
//   "https://www.figma.com/api/mcp/asset/8b6e8d84-d348-4782-8581-73c5ea3d0284";

// const rows = [
//   {
//     num: "01",
//     brand: "Build",
//     sub: "INFRA",
//     color: "#e27244",
//     title: "For occupiers & manufacturers",
//     desc: "Industrial and logistics facilities developed for the businesses that run them, engineered for performance and delivered ready to operate.",
//     image1: imgInfra,
//     image2: imgInfra2,
//   },
//   {
//     num: "02",
//     brand: "Build",
//     sub: "VALUE",
//     color: "#54514c",
//     title: "For landowners & asset holders",
//     desc: "Underutilised land transformed into institutional-grade assets, with ownership retained and long-term value unlocked through development.",
//     image1: imgInfra,
//     image2: imgInfra2,
//   },
//   {
//     num: "03",
//     brand: "Build",
//     sub: "WEALTH",
//     color: "#54514c",
//     title: "For investors & capital partners",
//     desc: "Development-led participation in Grade-A industrial and logistics assets, created and stewarded for durable, long-term performance.",
//     image1: imgInfra,
//     image2: imgInfra2,
//   },
// ];

// const fadeUp = {
//   hidden: { opacity: 0, y: 24 },
//   show: (i: number) => ({
//     opacity: 1,
//     y: 0,
//     transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" as const },
//   }),
// };

// export default function BuildspaceModel() {
//   const [activeRow, setActiveRow] = useState(0);

//   return (
//     <section
//       id="model"
//       className="bg-[#fafaf8] py-[80px] lg:py-[100px]"
//       onMouseLeave={() => setActiveRow(0)}
//     >
//       <div className="fix px-4 max-w-[1440px] mx-auto">
//         {/* Header */}
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-[200px] mb-[56px] lg:mb-[64px]">
//           <motion.div
//             className="flex flex-col gap-7"
//             variants={fadeUp}
//             custom={0}
//             initial="hidden"
//             whileInView="show"
//             viewport={{ once: true, margin: "-60px" }}
//           >
//             <div className="eyebrow text-[#003b9d] uppercase tracking-wider text-xs font-semibold">
//               The BuildSpace Model
//             </div>
//             <h2
//               className="font-bold text-[#BF584F] leading-[1.1] tracking-[-1.6px]"
//               style={{ fontSize: "clamp(28px, 4vw, 56px)" }}
//             >
//               Three solutions.
//               <br />
//               One infrastructure ecosystem.
//             </h2>
//           </motion.div>

//           <motion.p
//             className="text-[#54514c] leading-[1.4] self-center"
//             style={{ fontSize: "clamp(14px, 1.2vw, 18px)" }}
//             variants={fadeUp}
//             custom={1}
//             initial="hidden"
//             whileInView="show"
//             viewport={{ once: true, margin: "-60px" }}
//           >
//             Industrial growth brings together different stakeholders, each with
//             a different objective. Some are building the infrastructure their
//             operations depend on. Others are unlocking the value held in land.
//             Many are seeking long-term participation in industrial growth
//             itself. BuildSpace meets all three through a single integrated
//             platform, spanning the entire infrastructure value chain from land
//             and development to capital and long-term performance.
//           </motion.p>
//         </div>

//         {/* Accordion rows */}
//         <div className="flex flex-col border-t border-black/5">
//           {rows.map((row, i) => {
//             const isActive = activeRow === i;
//             const numSize = isActive
//               ? "clamp(80px, 10vw, 140px)"
//               : "clamp(40px, 6vw, 70px)";
//             const titleSize = isActive
//               ? "clamp(28px, 3.5vw, 48px)"
//               : "clamp(24px, 3vw, 40px)";

//             return (
//               <motion.div
//                 key={row.num}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{
//                   delay: i * 0.12,
//                   duration: 0.55,
//                   ease: "easeOut",
//                 }}
//                 className="model-row cursor-pointer py-6 lg:py-8 flex items-start justify-between gap-4 border-b border-black/5"
//                 onMouseEnter={() => setActiveRow(i)}
//               >
//                 <div className="flex items-start gap-8 lg:gap-[89px] flex-1">
//                   {/* Number */}
//                   <div
//                     className={`font-normal select-none transition-all duration-300 ${isActive ? "opacity-100" : "opacity-40"}`}
//                     style={{
//                       fontSize: numSize,
//                       letterSpacing: "-6.9px",
//                       background:
//                         "linear-gradient(180deg, rgba(0,0,0,0.22) 0%, rgba(0,0,0,0.1) 52%, rgba(0,0,0,0) 100%)",
//                       WebkitBackgroundClip: "text",
//                       WebkitTextFillColor: "transparent",
//                       backgroundClip: "text",
//                       minWidth: "clamp(50px, 8vw, 120px)",
//                       transition: "font-size 0.3s ease",
//                       lineHeight: 1,
//                     }}
//                   >
//                     {row.num}
//                   </div>

//                   {/* Brand name */}
//                   <div
//                     className={`font-normal transition-all duration-300`}
//                     style={{
//                       fontSize: titleSize,
//                       color: isActive ? "#222" : "#54514c",
//                       letterSpacing: "-0.92px",
//                       minWidth: "clamp(180px, 20vw, 288px)",
//                       transition: "font-size 0.3s ease, color 0.3s ease",
//                       lineHeight: 1.1,
//                     }}
//                   >
//                     {row.brand}
//                     <span style={{ color: row.color, fontWeight: 700 }}>
//                       {row.sub}
//                     </span>
//                   </div>

//                   {/* Expanded content area */}
//                   <div className="flex-1 hidden md:block self-start">
//                     <AnimatePresence mode="wait">
//                       {isActive && (
//                         <motion.div
//                           initial={{ opacity: 0, y: 15 }}
//                           animate={{ opacity: 1, y: 0 }}
//                           exit={{ opacity: 0, y: 15 }}
//                           transition={{ duration: 0.4, ease: "easeOut" }}
//                           className="flex flex-col gap-4 max-w-[480px]"
//                         >
//                           {/* Image Container Frame */}
//                           <div className="overflow-hidden bg-[#e4e4e4] relative h-[240px] w-full rounded">
//                             <motion.img
//                               initial={{ opacity: 0, scale: 1.05 }}
//                               animate={{ opacity: 1, scale: 1 }}
//                               transition={{ duration: 0.5, ease: "easeOut" }}
//                               src={row.image1}
//                               alt={row.sub}
//                               className="absolute inset-0 w-full h-full object-cover object-center"
//                             />

//                             <motion.img
//                               initial={{ opacity: 0 }}
//                               animate={{ opacity: 1 }}
//                               transition={{
//                                 duration: 0.4,
//                                 delay: 0.1,
//                                 ease: "easeOut",
//                               }}
//                               src={row.image2}
//                               alt=""
//                               className="absolute bottom-0 left-0 w-full object-bottom pointer-events-none"
//                             />
//                           </div>

//                           {/* Content below the photo inside active row */}
//                           <div className="flex flex-col gap-1.5">
//                             <h4 className="font-bold text-[#003b9d] text-base">
//                               {row.title}
//                             </h4>
//                             <p className="text-[#54514c] text-sm leading-[1.4]">
//                               {row.desc}
//                             </p>
//                           </div>
//                         </motion.div>
//                       )}
//                     </AnimatePresence>
//                   </div>
//                 </div>

//                 {/* Arrow icon framework */}
//                 <div
//                   className={`w-[56px] h-[56px] flex items-center justify-center rounded-full border transition-colors duration-300 flex-shrink-0 self-start ${
//                     isActive
//                       ? "bg-[#003b9d] border-[#003b9d] text-white"
//                       : "bg-transparent border-[#003b9d] "
//                   }`}
//                 >
//                   <motion.div
//                     animate={{ rotate: isActive ? -135 : 0 }}
//                     transition={{ duration: 0.35, ease: "easeOut" }}
//                     className="flex items-center group justify-center"
//                   >
//                     {/* <HiArrowSmallDown size={34} /> */}
//                     <ArrowDown
//                       className="group-hover:stroke-white group:stroke-[#003B9D]"
//                       strokeWidth={0.8}
//                       size={35}
//                     />
//                   </motion.div>
//                 </div>
//               </motion.div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// }

// "use client";

// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { ArrowDown } from "lucide-react";

// const imgInfra =
//   "https://www.figma.com/api/mcp/asset/2ee1a2a9-1a6b-43db-8207-8839f931d669";
// const imgInfra2 =
//   "https://www.figma.com/api/mcp/asset/8b6e8d84-d348-4782-8581-73c5ea3d0284";

// const rows = [
//   {
//     num: "01",
//     brand: "Build",
//     sub: "INFRA",
//     color: "#e27244",
//     title: "For occupiers & manufacturers",
//     desc: "Industrial and logistics facilities developed for the businesses that run them, engineered for performance and delivered ready to operate.",
//     image1: imgInfra,
//     image2: imgInfra2,
//   },
//   {
//     num: "02",
//     brand: "Build",
//     sub: "VALUE",
//     color: "#54514c",
//     title: "For landowners & asset holders",
//     desc: "Underutilised land transformed into institutional-grade assets, with ownership retained and long-term value unlocked through development.",
//     image1: imgInfra,
//     image2: imgInfra2,
//   },
//   {
//     num: "03",
//     brand: "Build",
//     sub: "WEALTH",
//     color: "#54514c",
//     title: "For investors & capital partners",
//     desc: "Development-led participation in Grade-A industrial and logistics assets, created and stewarded for durable, long-term performance.",
//     image1: imgInfra,
//     image2: imgInfra2,
//   },
// ];

// const fadeUp = {
//   hidden: { opacity: 0, y: 24 },
//   show: (i: number) => ({
//     opacity: 1,
//     y: 0,
//     transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" as const },
//   }),
// };

// export default function BuildspaceModel() {
//   const [activeRow, setActiveRow] = useState<number | null>(0);

//   const handleRowClick = (index: number) => {
//     setActiveRow((prev) => (prev === index ? null : index));
//   };

//   return (
//     <section
//       id="model"
//       className="bg-[#fafaf8] py-[80px] lg:py-[100px] overflow-hidden"
//     >
//       <div className="fix px-4 max-w-[1440px] mx-auto">
//         {/* Header */}
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-[200px] mb-[56px] lg:mb-[64px]">
//           <motion.div
//             className="flex flex-col gap-7"
//             variants={fadeUp}
//             custom={0}
//             initial="hidden"
//             whileInView="show"
//             viewport={{ once: true, margin: "-60px" }}
//           >
//             <div className="eyebrow text-[#003b9d] uppercase tracking-wider text-xs font-semibold">
//               The BuildSpace Model
//             </div>
//             <h2
//               className="font-bold text-[#BF584F] leading-[1.1] tracking-[-1.6px]"
//               style={{ fontSize: "clamp(28px, 4vw, 56px)" }}
//             >
//               Three solutions.
//               <br />
//               One infrastructure ecosystem.
//             </h2>
//           </motion.div>

//           <motion.p
//             className="text-[#54514c] leading-[1.4] self-center"
//             style={{ fontSize: "clamp(14px, 1.2vw, 18px)" }}
//             variants={fadeUp}
//             custom={1}
//             initial="hidden"
//             whileInView="show"
//             viewport={{ once: true, margin: "-60px" }}
//           >
//             Industrial growth brings together different stakeholders, each with
//             a different objective. Some are building the infrastructure their
//             operations depend on. Others are unlocking the value held in land.
//             Many are seeking long-term participation in industrial growth
//             itself. BuildSpace meets all three through a single integrated
//             platform, spanning the entire infrastructure value chain from land
//             and development to capital and long-term performance.
//           </motion.p>
//         </div>

//         {/* Accordion rows */}
//         <div className="flex flex-col border-t border-black/5">
//           {rows.map((row, i) => {
//             const isActive = activeRow === i;
//             const numSize = isActive
//               ? "clamp(80px, 10vw, 140px)"
//               : "clamp(40px, 6vw, 70px)";
//             const titleSize = isActive
//               ? "clamp(28px, 3.5vw, 48px)"
//               : "clamp(24px, 3vw, 40px)";

//             return (
//               <motion.div
//                 key={row.num}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{
//                   delay: i * 0.12,
//                   duration: 0.55,
//                   ease: "easeOut",
//                 }}
//                 className="model-row py-6 lg:py-8 border-b border-black/5"
//               >
//                 <button
//                   type="button"
//                   onClick={() => handleRowClick(i)}
//                   className="w-full text-left cursor-pointer"
//                 >
//                   <div className="flex items-start justify-between gap-4">
//                     <div className="flex items-start gap-8 lg:gap-[89px] flex-1 min-w-0">
//                       {/* Number */}
//                       <div
//                         className={`font-normal select-none transition-all duration-300 shrink-0 ${
//                           isActive ? "opacity-100" : "opacity-40"
//                         }`}
//                         style={{
//                           fontSize: numSize,
//                           letterSpacing: "-6.9px",
//                           background:
//                             "linear-gradient(180deg, rgba(0,0,0,0.22) 0%, rgba(0,0,0,0.1) 52%, rgba(0,0,0,0) 100%)",
//                           WebkitBackgroundClip: "text",
//                           WebkitTextFillColor: "transparent",
//                           backgroundClip: "text",
//                           minWidth: "clamp(50px, 8vw, 120px)",
//                           transition: "font-size 0.3s ease",
//                           lineHeight: 1,
//                         }}
//                       >
//                         {row.num}
//                       </div>

//                       {/* Brand name */}
//                       <div
//                         className="font-normal transition-all duration-300 shrink-0"
//                         style={{
//                           fontSize: titleSize,
//                           color: isActive ? "#222" : "#54514c",
//                           letterSpacing: "-0.92px",
//                           minWidth: "clamp(180px, 20vw, 288px)",
//                           transition: "font-size 0.3s ease, color 0.3s ease",
//                           lineHeight: 1.1,
//                         }}
//                       >
//                         {row.brand}
//                         <span style={{ color: row.color, fontWeight: 700 }}>
//                           {row.sub}
//                         </span>
//                       </div>

//                       {/* Desktop expanded content */}
//                       <div className="flex-1 hidden md:block min-w-0">
//                         <AnimatePresence initial={false}>
//                           {isActive && (
//                             <motion.div
//                               key={`desktop-${row.num}`}
//                               initial={{ opacity: 0, y: 12 }}
//                               animate={{ opacity: 1, y: 0 }}
//                               exit={{ opacity: 0, y: -8 }}
//                               transition={{ duration: 0.35, ease: "easeOut" }}
//                               className="flex flex-col gap-4 max-w-[480px]"
//                             >
//                               <div className="overflow-hidden bg-[#e4e4e4] relative h-[240px] w-full rounded">
//                                 <motion.img
//                                   initial={{ scale: 1.04 }}
//                                   animate={{ scale: 1 }}
//                                   transition={{
//                                     duration: 0.5,
//                                     ease: "easeOut",
//                                   }}
//                                   src={row.image1}
//                                   alt={row.sub}
//                                   className="absolute inset-0 w-full h-full object-cover object-center"
//                                 />

//                                 <img
//                                   src={row.image2}
//                                   alt=""
//                                   className="absolute bottom-0 left-0 w-full object-bottom pointer-events-none"
//                                 />
//                               </div>

//                               <div className="flex flex-col gap-1.5">
//                                 <h4 className="font-bold text-[#003b9d] text-base">
//                                   {row.title}
//                                 </h4>
//                                 <p className="text-[#54514c] text-sm leading-[1.4]">
//                                   {row.desc}
//                                 </p>
//                               </div>
//                             </motion.div>
//                           )}
//                         </AnimatePresence>
//                       </div>
//                     </div>

//                     {/* Arrow icon */}
//                     <div
//                       className={`w-[56px] h-[56px] flex items-center justify-center rounded-full border transition-colors duration-300 flex-shrink-0 self-start ${
//                         isActive
//                           ? "bg-[#003b9d] border-[#003b9d] text-white"
//                           : "bg-transparent border-[#003b9d]"
//                       }`}
//                     >
//                       <motion.div
//                         animate={{ rotate: isActive ? -135 : 0 }}
//                         transition={{ duration: 0.35, ease: "easeOut" }}
//                         className="flex items-center justify-center"
//                       >
//                         <ArrowDown
//                           className={
//                             isActive ? "stroke-white" : "stroke-[#003b9d]"
//                           }
//                           strokeWidth={0.8}
//                           size={35}
//                         />
//                       </motion.div>
//                     </div>
//                   </div>
//                 </button>

//                 {/* Mobile expanded content */}
//                 <AnimatePresence initial={false}>
//                   {isActive && (
//                     <motion.div
//                       key={`mobile-${row.num}`}
//                       initial={{ height: 0, opacity: 0 }}
//                       animate={{ height: "auto", opacity: 1 }}
//                       exit={{ height: 0, opacity: 0 }}
//                       transition={{ duration: 0.4, ease: "easeInOut" }}
//                       className="md:hidden overflow-hidden"
//                     >
//                       <div className="pt-6 pl-[calc(clamp(50px,8vw,120px)+2rem)]">
//                         <motion.div
//                           initial={{ y: 12 }}
//                           animate={{ y: 0 }}
//                           exit={{ y: -8 }}
//                           transition={{ duration: 0.35, ease: "easeOut" }}
//                           className="flex flex-col gap-4"
//                         >
//                           <div className="overflow-hidden bg-[#e4e4e4] relative h-[240px] w-full rounded">
//                             <motion.img
//                               initial={{ scale: 1.04 }}
//                               animate={{ scale: 1 }}
//                               transition={{ duration: 0.5, ease: "easeOut" }}
//                               src={row.image1}
//                               alt={row.sub}
//                               className="absolute inset-0 w-full h-full object-cover object-center"
//                             />

//                             <img
//                               src={row.image2}
//                               alt=""
//                               className="absolute bottom-0 left-0 w-full object-bottom pointer-events-none"
//                             />
//                           </div>

//                           <div className="flex flex-col gap-1.5">
//                             <h4 className="font-bold text-[#003b9d] text-base">
//                               {row.title}
//                             </h4>
//                             <p className="text-[#54514c] text-sm leading-[1.4]">
//                               {row.desc}
//                             </p>
//                           </div>
//                         </motion.div>
//                       </div>
//                     </motion.div>
//                   )}
//                 </AnimatePresence>
//               </motion.div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowDown } from "lucide-react";

const imgInfra =
  "https://www.figma.com/api/mcp/asset/2ee1a2a9-1a6b-43db-8207-8839f931d669";
const imgInfra2 =
  "https://www.figma.com/api/mcp/asset/8b6e8d84-d348-4782-8581-73c5ea3d0284";

const rows = [
  {
    num: "01",
    brand: "Build",
    sub: "INFRA",
    color: "#e27244",
    title: "For occupiers & manufacturers",
    desc: "Industrial and logistics facilities developed for the businesses that run them, engineered for performance and delivered ready to operate.",
    image1: imgInfra,
    image2: imgInfra2,
  },
  {
    num: "02",
    brand: "Build",
    sub: "VALUE",
    color: "#54514c",
    title: "For landowners & asset holders",
    desc: "Underutilised land transformed into institutional-grade assets, with ownership retained and long-term value unlocked through development.",
    image1: imgInfra,
    image2: imgInfra2,
  },
  {
    num: "03",
    brand: "Build",
    sub: "WEALTH",
    color: "#54514c",
    title: "For investors & capital partners",
    desc: "Development-led participation in Grade-A industrial and logistics assets, created and stewarded for durable, long-term performance.",
    image1: imgInfra,
    image2: imgInfra2,
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" as const },
  }),
};

export default function BuildspaceModel() {
  const [activeRow, setActiveRow] = useState<number | null>(0);

  const handleRowClick = (index: number) => {
    setActiveRow((prev) => (prev === index ? null : index));
  };

  return (
    <section
      id="model"
      className="bg-[#fafaf8] py-[80px] lg:py-[100px] overflow-hidden"
    >
      <div className="fix px-4 max-w-[1440px] mx-auto">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-[200px] mb-[56px] lg:mb-[64px]">
          <motion.div
            className="flex flex-col gap-7"
            variants={fadeUp}
            custom={0}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
          >
            <div className="eyebrow text-[#003b9d] uppercase tracking-wider text-xs font-semibold">
              The BuildSpace Model
            </div>
            <h2
              className="font-bold text-[#BF584F] leading-[1.1] tracking-[-1.6px]"
              style={{ fontSize: "clamp(28px, 4vw, 56px)" }}
            >
              Three solutions.
              <br />
              One infrastructure ecosystem.
            </h2>
          </motion.div>

          <motion.p
            className="text-[#54514c] leading-[1.4] self-center"
            style={{ fontSize: "clamp(14px, 1.2vw, 18px)" }}
            variants={fadeUp}
            custom={1}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
          >
            Industrial growth brings together different stakeholders, each with
            a different objective. Some are building the infrastructure their
            operations depend on. Others are unlocking the value held in land.
            Many are seeking long-term participation in industrial growth
            itself. BuildSpace meets all three through a single integrated
            platform, spanning the entire infrastructure value chain from land
            and development to capital and long-term performance.
          </motion.p>
        </div>

        {/* Accordion rows */}
        <div className="flex flex-col border-t border-black/5">
          {rows.map((row, i) => {
            const isActive = activeRow === i;

            return (
              <motion.div
                key={row.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: i * 0.12,
                  duration: 0.55,
                  ease: "easeOut",
                }}
                className="model-row border-b border-black/5"
              >
                <button
                  type="button"
                  onClick={() => handleRowClick(i)}
                  className="w-full text-left cursor-pointer py-6 lg:py-8"
                >
                  <div
                    className={`flex flex-col md:flex-row justify-between gap-6 lg:gap-8 ${isActive ? "items-center" : "items-start"}`}
                  >
                    {/* Left Column: Number and Brand Identifier */}
                    <div
                      className={`flex items-center gap-6 lg:gap-[89px] shrink-0 transition-all duration-300 ${isActive ? "self-center" : "self-start"}`}
                    >
                      {/* Number */}
                      <motion.div
                        animate={{ opacity: isActive ? 1 : 0.4 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        className="font-normal select-none shrink-0"
                        style={{
                          fontSize: "clamp(80px, 10vw, 140px)",
                          letterSpacing: "-6.9px",
                          background:
                            "linear-gradient(180deg, rgba(0,0,0,0.22) 0%, rgba(0,0,0,0.1) 52%, rgba(0,0,0,0) 100%)",
                          WebkitBackgroundClip: "text",
                          WebkitTextFillColor: "transparent",
                          backgroundClip: "text",
                          minWidth: "clamp(80px, 10vw, 140px)",
                          lineHeight: 1,
                        }}
                      >
                        {row.num}
                      </motion.div>

                      {/* Brand name */}
                      <motion.div
                        animate={{ color: isActive ? "#222" : "#54514c" }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        className="font-normal shrink-0"
                        style={{
                          fontSize: "clamp(28px, 3.5vw, 48px)",
                          letterSpacing: "-0.92px",
                          minWidth: "clamp(180px, 20vw, 288px)",
                          lineHeight: 1.1,
                        }}
                      >
                        {row.brand}
                        <span style={{ color: row.color, fontWeight: 700 }}>
                          {row.sub}
                        </span>
                      </motion.div>
                    </div>

                    {/* Middle Column: Smooth Image Expand + Always Visible Content */}
                    <div className="flex-1 w-full md:max-w-[540px] lg:max-w-[640px] flex flex-col gap-4">
                      <AnimatePresence initial={false}>
                        {isActive && (
                          <motion.div
                            key={`panel-${row.num}`}
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{
                              height: {
                                duration: 0.45,
                                ease: [0.4, 0, 0.2, 1],
                              },
                              opacity: { duration: 0.3, ease: "easeOut" },
                            }}
                            style={{ overflow: "hidden" }}
                          >
                            <div className="overflow-hidden bg-[#e4e4e4] relative h-[240px] w-full rounded mb-2">
                              <motion.img
                                initial={{ scale: 1.04 }}
                                animate={{ scale: 1 }}
                                transition={{ duration: 0.5, ease: "easeOut" }}
                                src={row.image1}
                                alt={row.sub}
                                className="absolute inset-0 w-full h-full object-cover object-center"
                              />
                              <img
                                src={row.image2}
                                alt=""
                                className="absolute bottom-0 left-0 w-full object-bottom pointer-events-none"
                              />
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>

                      <div className="flex flex-col gap-1.5">
                        <h4 className="font-bold text-[#003b9d] text-base">
                          {row.title}
                        </h4>
                        <p className="text-[#54514c] text-sm leading-[1.4]">
                          {row.desc}
                        </p>
                      </div>
                    </div>

                    {/* Right Column: Arrow icon staying at the absolute end */}
                    <div
                      className={`w-[56px] h-[56px] flex items-center justify-center rounded-full border transition-all duration-300 flex-shrink-0 ml-auto md:ml-0 ${
                        isActive
                          ? "bg-[#003b9d] border-[#003b9d] text-white self-center"
                          : "bg-transparent border-[#003b9d] self-start"
                      }`}
                    >
                      <motion.div
                        animate={{ rotate: isActive ? -135 : 0 }}
                        transition={{ duration: 0.35, ease: "easeOut" }}
                        className="flex items-center justify-center"
                      >
                        <ArrowDown
                          className={
                            isActive ? "stroke-white" : "stroke-[#003b9d]"
                          }
                          strokeWidth={0.8}
                          size={35}
                        />
                      </motion.div>
                    </div>
                  </div>
                </button>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
