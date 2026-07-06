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
//                 className="model-row border-b border-black/5"
//               >
//                 <button
//                   type="button"
//                   onClick={() => handleRowClick(i)}
//                   className="w-full text-left cursor-pointer py-6 lg:py-8"
//                 >
//                   <div
//                     className={`flex flex-col md:flex-row justify-between gap-6 lg:gap-8 ${isActive ? "items-center" : "items-start"}`}
//                   >
//                     {/* Left Column: Number and Brand Identifier */}
//                     <div
//                       className={`flex items-center gap-6 lg:gap-[89px] shrink-0 transition-all duration-300 ${isActive ? "self-center" : "self-start"}`}
//                     >
//                       {/* Number */}
//                       <motion.div
//                         animate={{ opacity: isActive ? 1 : 0.4 }}
//                         transition={{ duration: 0.3, ease: "easeOut" }}
//                         className="font-normal select-none shrink-0"
//                         style={{
//                           fontSize: "clamp(80px, 10vw, 140px)",
//                           letterSpacing: "-6.9px",
//                           background:
//                             "linear-gradient(180deg, rgba(0,0,0,0.22) 0%, rgba(0,0,0,0.1) 52%, rgba(0,0,0,0) 100%)",
//                           WebkitBackgroundClip: "text",
//                           WebkitTextFillColor: "transparent",
//                           backgroundClip: "text",
//                           minWidth: "clamp(80px, 10vw, 140px)",
//                           lineHeight: 1,
//                         }}
//                       >
//                         {row.num}
//                       </motion.div>

//                       {/* Brand name */}
//                       <motion.div
//                         animate={{ color: isActive ? "#222" : "#54514c" }}
//                         transition={{ duration: 0.3, ease: "easeOut" }}
//                         className="font-normal shrink-0"
//                         style={{
//                           fontSize: "clamp(28px, 3.5vw, 48px)",
//                           letterSpacing: "-0.92px",
//                           minWidth: "clamp(180px, 20vw, 288px)",
//                           lineHeight: 1.1,
//                         }}
//                       >
//                         {row.brand}
//                         <span style={{ color: row.color, fontWeight: 700 }}>
//                           {row.sub}
//                         </span>
//                       </motion.div>
//                     </div>

//                     {/* Middle Column: Smooth Image Expand + Always Visible Content */}
//                     <div className="flex-1 w-full md:max-w-[540px] lg:max-w-[640px] flex flex-col gap-4">
//                       <AnimatePresence initial={false}>
//                         {isActive && (
//                           <motion.div
//                             key={`panel-${row.num}`}
//                             initial={{ height: 0, opacity: 0 }}
//                             animate={{ height: "auto", opacity: 1 }}
//                             exit={{ height: 0, opacity: 0 }}
//                             transition={{
//                               height: {
//                                 duration: 0.45,
//                                 ease: [0.4, 0, 0.2, 1],
//                               },
//                               opacity: { duration: 0.3, ease: "easeOut" },
//                             }}
//                             style={{ overflow: "hidden" }}
//                           >
//                             <div className="overflow-hidden bg-[#e4e4e4] relative h-[240px] w-full rounded mb-2">
//                               <motion.img
//                                 initial={{ scale: 1.04 }}
//                                 animate={{ scale: 1 }}
//                                 transition={{ duration: 0.5, ease: "easeOut" }}
//                                 src={row.image1}
//                                 alt={row.sub}
//                                 className="absolute inset-0 w-full h-full object-cover object-center"
//                               />
//                               <img
//                                 src={row.image2}
//                                 alt=""
//                                 className="absolute bottom-0 left-0 w-full object-bottom pointer-events-none"
//                               />
//                             </div>
//                           </motion.div>
//                         )}
//                       </AnimatePresence>

//                       <div className="flex flex-col gap-1.5">
//                         <h4 className="font-bold text-[#003b9d] text-base">
//                           {row.title}
//                         </h4>
//                         <p className="text-[#54514c] text-sm leading-[1.4]">
//                           {row.desc}
//                         </p>
//                       </div>
//                     </div>

//                     {/* Right Column: Arrow icon staying at the absolute end */}
//                     <div
//                       className={`w-[56px] h-[56px] flex items-center justify-center rounded-full border transition-all duration-300 flex-shrink-0 ml-auto md:ml-0 ${
//                         isActive
//                           ? "bg-[#003b9d] border-[#003b9d] text-white self-center"
//                           : "bg-transparent border-[#003b9d] self-start"
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
//               </motion.div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// }
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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

//         {/* Accordion rows layout wrapper */}
//         <div className="flex flex-col border-t border-black/5">
//           {rows.map((row, i) => {
//             const isActive = activeRow === i;

//             return (
//               <motion.div
//                 key={row.num}
//                 layout
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{
//                   layout: { duration: 0.5, ease: [0.4, 0, 0.2, 1] },
//                   opacity: { duration: 0.4 },
//                 }}
//                 className="model-row border-b border-black/5"
//               >
//                 <button
//                   type="button"
//                   onClick={() => handleRowClick(i)}
//                   className="w-full text-left cursor-pointer py-6 lg:py-8 focus:outline-none"
//                 >
//                   <div className="flex flex-col md:flex-row justify-between gap-6 lg:gap-8 items-start">
//                     {/* Left Column */}
//                     <div className="flex items-start gap-6 lg:gap-[89px] shrink-0">
//                       <motion.div
//                         animate={{ opacity: isActive ? 1 : 0.4 }}
//                         transition={{ duration: 0.3, ease: "easeOut" }}
//                         className="font-normal select-none shrink-0"
//                         style={{
//                           fontSize: "clamp(80px, 10vw, 140px)",
//                           letterSpacing: "-6.9px",
//                           background:
//                             "linear-gradient(180deg, rgba(0,0,0,0.22) 0%, rgba(0,0,0,0.1) 52%, rgba(0,0,0,0) 100%)",
//                           WebkitBackgroundClip: "text",
//                           WebkitTextFillColor: "transparent",
//                           backgroundClip: "text",
//                           minWidth: "clamp(80px, 10vw, 140px)",
//                           lineHeight: 1,
//                         }}
//                       >
//                         {row.num}
//                       </motion.div>

//                       <motion.div
//                         animate={{ color: isActive ? "#222" : "#54514c" }}
//                         transition={{ duration: 0.3, ease: "easeOut" }}
//                         className="font-normal shrink-0 pt-2 lg:pt-4"
//                         style={{
//                           fontSize: "clamp(28px, 3.5vw, 48px)",
//                           letterSpacing: "-0.92px",
//                           minWidth: "clamp(180px, 20vw, 288px)",
//                           lineHeight: 1.1,
//                         }}
//                       >
//                         {row.brand}{" "}
//                         <span style={{ color: row.color, fontWeight: 700 }}>
//                           {row.sub}
//                         </span>
//                       </motion.div>
//                     </div>

//                     {/* Middle Column: Fixed Jar Effect via layout structure */}
//                     <div className="flex-1 w-full md:max-w-[540px] lg:max-w-[640px] flex flex-col pt-2 lg:pt-4">
//                       {/* 1. Dynamic AnimatePresence Section */}
//                       <AnimatePresence initial={false}>
//                         {isActive && (
//                           <motion.div
//                             key={`panel-${row.num}`}
//                             initial={{ height: 0, opacity: 0 }}
//                             animate={{ height: "auto", opacity: 1 }}
//                             exit={{ height: 0, opacity: 0 }}
//                             transition={{
//                               height: {
//                                 duration: 0.45,
//                                 ease: [0.4, 0, 0.2, 1],
//                               },
//                               opacity: { duration: 0.2 },
//                             }}
//                             style={{ overflow: "hidden" }}
//                           >
//                             <div className="overflow-hidden bg-[#e4e4e4] relative h-[240px] w-full rounded mb-5">
//                               <motion.img
//                                 initial={{ scale: 1.04 }}
//                                 animate={{ scale: 1 }}
//                                 transition={{ duration: 0.5, ease: "easeOut" }}
//                                 src={row.image1}
//                                 alt={row.sub}
//                                 className="absolute inset-0 w-full h-full object-cover object-center"
//                               />
//                               <img
//                                 src={row.image2}
//                                 alt=""
//                                 className="absolute bottom-0 left-0 w-full object-bottom pointer-events-none"
//                               />
//                             </div>
//                           </motion.div>
//                         )}
//                       </AnimatePresence>

//                       {/* 2. Text elements forced into layout-position tracking */}
//                       <motion.div
//                         layout="position"
//                         className="flex flex-col gap-1.5"
//                       >
//                         <h4 className="font-bold text-[#003b9d] text-base">
//                           {row.title}
//                         </h4>
//                         <p className="text-[#54514c] text-sm leading-[1.4]">
//                           {row.desc}
//                         </p>
//                       </motion.div>
//                     </div>

//                     {/* Right Column */}
//                     <div
//                       className={`w-[56px] h-[56px] flex items-center justify-center rounded-full border transition-all duration-300 flex-shrink-0 ml-auto md:ml-0 mt-2 lg:mt-4 ${
//                         isActive
//                           ? "bg-[#003b9d] border-[#003b9d] text-white"
//                           : "bg-transparent border-[#003b9d]"
//                       }`}
//                     >
//                       <motion.div
//                         animate={{ rotate: isActive ? -135 : 0 }}
//                         transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
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
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

const imgInfra = "/home/bsmodel/imgInfra.webp";
const imgInfra2 = "/home/bsmodel/imgInfra.webp";

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

        {/* Accordion Rows Layout Wrapper */}
        <div className="flex flex-col border-t border-black/5">
          {rows.map((row, i) => {
            const isActive = activeRow === i;
            return (
              <div
                key={row.num}
                className="model-row border-b border-black/5 w-full"
              >
                <button
                  type="button"
                  onClick={() => handleRowClick(i)}
                  className="w-full text-left cursor-pointer py-6 lg:py-8 focus:outline-none"
                >
                  <div className="flex flex-col md:flex-row justify-between gap-6 lg:gap-8 items-start">
                    {/* Left Column */}
                    <div className="flex items-start gap-6 lg:gap-[89px] shrink-0">
                      <motion.div
                        animate={{ opacity: isActive ? 1 : 0.4 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
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
                      <motion.div
                        animate={{ color: isActive ? "#222" : "#54514c" }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="font-normal shrink-0 pt-2 lg:pt-4"
                        style={{
                          fontSize: "clamp(28px, 3.5vw, 48px)",
                          letterSpacing: "-0.92px",
                          minWidth: "clamp(180px, 20vw, 288px)",
                          lineHeight: 1.1,
                        }}
                      >
                        {row.brand}{" "}
                        <span style={{ color: row.color, fontWeight: 700 }}>
                          {row.sub}
                        </span>
                      </motion.div>
                    </div>

                    {/* Middle Column */}
                    <div className="flex-1 w-full md:max-w-[540px] lg:max-w-[640px] flex flex-col pt-2 lg:pt-4">
                      {/* Synced Native CSS Grid Height Transition Wrapper */}
                      <div
                        className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${
                          isActive ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                        }`}
                      >
                        <div className="overflow-hidden">
                          <div
                            className={`bg-[#e4e4e4] relative h-[240px] w-full rounded mb-5 overflow-hidden transition-opacity duration-300 ease-in-out ${
                              isActive ? "opacity-100" : "opacity-0"
                            }`}
                          >
                            <img
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
                        </div>
                      </div>

                      {/* Static content flows seamlessly on DOM layout change */}
                      <div className="flex flex-col gap-1.5">
                        <h4 className="font-bold text-[#003b9d] text-base">
                          {row.title}
                        </h4>
                        <p className="text-[#54514c] text-sm leading-[1.4]">
                          {row.desc}
                        </p>
                      </div>
                    </div>

                    {/* Right Column */}
                    <div
                      className={`w-[56px] h-[56px] flex items-center justify-center rounded-full border transition-all duration-300 flex-shrink-0 ml-auto md:ml-0 mt-2 lg:mt-4 ${
                        isActive
                          ? "bg-[#003b9d] border-[#003b9d] text-white"
                          : "bg-transparent border-[#003b9d]"
                      }`}
                    >
                      <motion.div
                        animate={{ rotate: isActive ? -135 : 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
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
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
