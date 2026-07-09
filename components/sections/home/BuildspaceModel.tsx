// "use client";
// import { useState } from "react";
// import { motion } from "framer-motion";
// import { ArrowDown } from "lucide-react";

// const imgInfra = "/home/bsmodel/imgInfra.webp";
// const imgInfra2 = "/home/bsmodel/imgInfra.webp";

// const rows = [
//   {
//     num: "01",
//     brand: "Build",
//     sub: "INFRA",
//     color: "#F56E6A",
//     title: "For occupiers across industry",
//     desc: "Industrial and logistics facilities for 3PL, retail, FMCG, FMCD, pharma, cold storage, and manufacturing operations, engineered for performance and delivered ready to operate.",
//     image1: imgInfra,
//     image2: imgInfra2,
//   },
//   {
//     num: "02",
//     brand: "Build",
//     sub: "VALUE",
//     color: "#F56E6A",
//     title: "For landowners & asset holders",
//     desc: "Underutilised land transformed into institutional-grade assets, with ownership retained and long-term value unlocked through development",
//     image1: "/home/bsmodel/model2.webp",
//     image2: "/home/bsmodel/model2.webp",
//   },
//   {
//     num: "03",
//     brand: "Build",
//     sub: "WEALTH",
//     color: "#F56E6A",
//     title: "For investors & capital partners",
//     desc: "Development-led participation in Grade A industrial and logistics assets, created and stewarded for durable, long-term performance.",
//     image1: "/home/bsmodel/model3.webp",
//     image2: "/home/bsmodel/model3.webp",
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
//       className="bg-[#fafaf8] py-[50px] lg:py-[100px] overflow-hidden"
//     >
//       <div className="fix mx-auto">
//         {/* Header */}
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-7 lg:gap-[200px] mb-[56px] lg:mb-[64px]">
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
//               className="font-bold leading-[1.1] tracking-[-1.6px]"
//               style={{ fontSize: "clamp(28px, 4vw, 56px)" }}
//             >
//               <span className="bg-gradient-to-r from-[#BF584F] to-[#F6736A] bg-clip-text text-transparent">
//                 Three solutions.
//               </span>
//               <br />
//               <span className="bg-gradient-to-r from-[#BF584F] to-[#F6736A] bg-clip-text text-transparent">
//                 One infrastructure
//               </span>
//               <br />
//               <span className="bg-gradient-to-r from-[#BF584F] to-[#F6736A] bg-clip-text text-transparent">
//                 ecosystem.
//               </span>
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
//             That end-to-end promise is delivered through three connected{" "}
//             <br className="hidden lg:inline-block" />
//             verticals, each built for a different stakeholder, all powered by
//             one
//             <br className="hidden lg:inline-block" /> development engine.
//             Occupiers building the infrastructure their
//             <br className="hidden lg:inline-block" /> operations depend on.
//             Landowners unlocking the value held in land.
//             <br className="hidden lg:inline-block" /> Investors seeking
//             long-term participation in industrial growth itself.
//             <br className="hidden lg:inline-block" /> Rather than three separate
//             services, BuildSpace brings them together
//             <br className="hidden lg:inline-block" /> as a single integrated
//             platform, spanning the entire value chain from{" "}
//             <br className="hidden lg:inline-block" />
//             land and development to capital and long-term performance.
//           </motion.p>
//         </div>

//         {/* Accordion Rows Layout Wrapper */}
//         <div className="flex flex-col border-t border-black/5">
//           {rows.map((row, i) => {
//             const isActive = activeRow === i;
//             return (
//               <div
//                 key={row.num}
//                 className="model-row border-b border-black/5 w-full"
//               >
//                 <button
//                   type="button"
//                   onClick={() => handleRowClick(i)}
//                   className="w-full text-left cursor-pointer py-6 lg:py-8 focus:outline-none relative px-4 md:px-0 pr-0 md:pr-[132px]"
//                 >
//                   <div className="flex flex-col md:flex-row justify-between md:gap-6 lg:gap-8 items-start">
//                     {/* Left & Top Main Container */}
//                     <div className="flex w-full md:w-auto justify-between md:justify-start items-start gap-4 md:gap-6 lg:gap-[89px] shrink-0">
//                       {/* Num + Brand/Sub wrapper -> Changed md:items-center for desktop vertical centering */}
//                       <div
//                         className={`flex  ${isActive ? "items-center md:items-center" : "items-center md:items-start"} gap-4 md:gap-6 lg:gap-[89px]`}
//                       >
//                         <motion.div
//                           animate={{ opacity: isActive ? 1 : 0.4 }}
//                           transition={{ duration: 0.3, ease: "easeInOut" }}
//                           className={`font-normal select-none shrink-0 ${isActive ? "text-[80px] md:text-[140px]" : "text-[60px] md:text-[70px]"}`}
//                           style={{
//                             letterSpacing: "-6.9px",
//                             background:
//                               "linear-gradient(180deg, rgba(0,0,0,0.22) 0%, rgba(0,0,0,0.1) 52%, rgba(0,0,0,0) 100%)",
//                             WebkitBackgroundClip: "text",
//                             WebkitTextFillColor: "transparent",
//                             backgroundClip: "text",
//                             minWidth: "clamp(80px, 10vw, 140px)",
//                             lineHeight: 1,
//                           }}
//                         >
//                           {row.num}
//                         </motion.div>

//                         {/* Brand Title Block */}
//                         <motion.div
//                           animate={{
//                             color: isActive ? "#222" : "#54514c",
//                             x:
//                               isActive &&
//                               typeof window !== "undefined" &&
//                               window.innerWidth >= 768
//                                 ? 12
//                                 : 0,
//                           }}
//                           transition={{ duration: 0.3, ease: "easeInOut" }}
//                           className={`font-normal text-[#222] shrink-0 transition-[font-size] duration-300 md:pt-0 ${isActive ? "md:text-[48px] text-[28px]" : "md:text-[40px] text-[24px]"}`}
//                           style={{
//                             letterSpacing: "-0.92px",
//                             minWidth: "clamp(120px, 20vw, 288px)",
//                             lineHeight: 1.1,
//                             paddingTop: isActive ? "0px" : "16px",
//                           }}
//                         >
//                           {row.brand}
//                           <span
//                             style={{
//                               color: isActive ? row.color : "",
//                               fontWeight: 700,
//                             }}
//                           >
//                             {row.sub}
//                           </span>
//                         </motion.div>
//                       </div>

//                       {/* Mobile Arrow */}
//                       <div
//                         className={`md:hidden mt-4 w-[32px] h-[32px] flex items-center justify-center rounded-full border shrink-0 transition-all duration-300 ${
//                           isActive
//                             ? "bg-[#003b9d] border-[#003b9d] text-white"
//                             : "bg-transparent border-[#003b9d]"
//                         }`}
//                       >
//                         <motion.div
//                           animate={{ rotate: isActive ? -135 : 0 }}
//                           transition={{ duration: 0.3, ease: "easeInOut" }}
//                           className="flex items-center justify-center"
//                         >
//                           <ArrowDown
//                             className={
//                               isActive ? "stroke-white" : "stroke-[#003b9d]"
//                             }
//                             strokeWidth={1.2}
//                             size={16}
//                           />
//                         </motion.div>
//                       </div>
//                     </div>

//                     {/* Middle Column (Holds Image + Content Details) */}
//                     <div className="flex-1 w-full flex flex-col lg:pt-4">
//                       {/* Synced Dynamic Expansion Height Image Wrapper */}
//                       <div
//                         className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${
//                           isActive ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
//                         }`}
//                       >
//                         <div className="overflow-hidden">
//                           <div
//                             className={`bg-[#e4e4e4] relative h-[240px] w-full rounded mb-5 overflow-hidden transition-opacity duration-300 ease-in-out ${
//                               isActive ? "opacity-100" : "opacity-0"
//                             }`}
//                           >
//                             <img
//                               src={row.image1}
//                               alt={row.sub}
//                               className="absolute inset-0 w-full h-full object-cover object-center"
//                             />
//                           </div>
//                         </div>
//                       </div>

//                       {/* Descriptive Row Text Content */}
//                       <div
//                         className={`grid transition-[grid-template-rows] duration-300 ease-in-out md:grid-rows-[1fr] ${
//                           isActive ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
//                         }`}
//                       >
//                         <div className="overflow-hidden">
//                           <div className="flex flex-col gap-1.5 relative pb-2">
//                             <h4 className="font-bold text-[#003b9d] text-[16px]">
//                               {row.title}
//                             </h4>
//                             <p className="text-[#54514c] text-[16px] leading-[1.4]">
//                               {row.desc}
//                             </p>
//                           </div>
//                         </div>
//                       </div>
//                     </div>

//                     {/* Desktop Arrow Column */}
//                     <div
//                       className={`hidden md:flex absolute right-0 w-[56px] h-[56px] items-center justify-center rounded-full border transition-all duration-300 ${
//                         isActive
//                           ? "bg-[#003b9d] border-[#003b9d] text-white top-1/2 -translate-y-1/2"
//                           : "bg-transparent border-[#003b9d] top-6 lg:top-8"
//                       }`}
//                     >
//                       <motion.div
//                         animate={{ rotate: isActive ? -135 : 0 }}
//                         transition={{ duration: 0.3, ease: "easeInOut" }}
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
//               </div>
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
    color: "#F56E6A",
    title: "For occupiers across industry",
    desc: "Industrial and logistics facilities for 3PL, retail, FMCG, FMCD, pharma, cold storage, and manufacturing operations, engineered for performance and delivered ready to operate.",
    image1: imgInfra,
    image2: imgInfra2,
  },
  {
    num: "02",
    brand: "Build",
    sub: "VALUE",
    color: "#F56E6A",
    title: "For landowners & asset holders",
    desc: "Underutilised land transformed into institutional-grade assets, with ownership retained and long-term value unlocked through development",
    image1: "/home/bsmodel/model2.webp",
    image2: "/home/bsmodel/model2.webp",
  },
  {
    num: "03",
    brand: "Build",
    sub: "WEALTH",
    color: "#F56E6A",
    title: "For investors & capital partners",
    desc: "Development-led participation in Grade A industrial and logistics assets, created and stewarded for durable, long-term performance.",
    image1: "/home/bsmodel/model3.webp",
    image2: "/home/bsmodel/model3.webp",
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
  // Always initialize with the first item open
  const [activeRow, setActiveRow] = useState<number>(0);

  const handleRowClick = (index: number) => {
    // Only switch if clicking a different row; one must always stay open
    if (activeRow !== index) {
      setActiveRow(index);
    }
  };

  return (
    <section
      id="model"
      className="bg-[#fafaf8] py-[50px] lg:py-[100px] overflow-hidden"
    >
      <div className="fix mx-auto">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-7 lg:gap-[200px] mb-[56px] lg:mb-[64px]">
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
              className="font-bold leading-[1.1] tracking-[-1.6px]"
              style={{ fontSize: "clamp(28px, 4vw, 56px)" }}
            >
              <span className="bg-gradient-to-r from-[#BF584F] to-[#F6736A] bg-clip-text text-transparent">
                Three solutions.
              </span>
              <br />
              <span className="bg-gradient-to-r from-[#BF584F] to-[#F6736A] bg-clip-text text-transparent">
                One infrastructure
              </span>
              <br />
              <span className="bg-gradient-to-r from-[#BF584F] to-[#F6736A] bg-clip-text text-transparent">
                ecosystem.
              </span>
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
            That end-to-end promise is delivered through three connected{" "}
            <br className="hidden lg:inline-block" />
            verticals, each built for a different stakeholder, all powered by
            one
            <br className="hidden lg:inline-block" /> development engine.
            Occupiers building the infrastructure their
            <br className="hidden lg:inline-block" /> operations depend on.
            Landowners unlocking the value held in land.
            <br className="hidden lg:inline-block" /> Investors seeking
            long-term participation in industrial growth itself.
            <br className="hidden lg:inline-block" /> Rather than three separate
            services, BuildSpace brings them together
            <br className="hidden lg:inline-block" /> as a single integrated
            platform, spanning the entire value chain from{" "}
            <br className="hidden lg:inline-block" />
            land and development to capital and long-term performance.
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
                  className="w-full text-left cursor-pointer py-6 lg:py-8 focus:outline-none relative px-4 md:px-0 pr-0 md:pr-[132px]"
                >
                  <div className="flex flex-col md:flex-row justify-between md:gap-6 lg:gap-8 items-start">
                    {/* Left & Top Main Container */}
                    <div className="flex w-full md:w-auto justify-between md:justify-start items-start gap-4 md:gap-6 lg:gap-[89px] shrink-0">
                      {/* Num + Brand/Sub wrapper */}
                      <div
                        className={`flex  ${isActive ? "items-center md:items-center" : "items-center md:items-start"} gap-4 md:gap-6 lg:gap-[89px]`}
                      >
                        <motion.div
                          animate={{ opacity: isActive ? 1 : 0.4 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          className={`font-normal select-none shrink-0 ${isActive ? "text-[80px] md:text-[140px]" : "text-[60px] md:text-[70px]"}`}
                          style={{
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

                        {/* Brand Title Block */}
                        <motion.div
                          animate={{
                            color: isActive ? "#222" : "#54514c",
                            x:
                              isActive &&
                              typeof window !== "undefined" &&
                              window.innerWidth >= 768
                                ? 12
                                : 0,
                          }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          className={`font-normal text-[#222] shrink-0 transition-[font-size] duration-300 md:pt-0 ${isActive ? "md:text-[48px] text-[28px]" : "md:text-[40px] text-[24px]"}`}
                          style={{
                            letterSpacing: "-0.92px",
                            minWidth: "clamp(120px, 20vw, 288px)",
                            lineHeight: 1.1,
                            paddingTop: isActive ? "0px" : "16px",
                          }}
                        >
                          {row.brand}
                          <span
                            style={{
                              color: isActive ? row.color : "",
                              fontWeight: 700,
                            }}
                          >
                            {row.sub}
                          </span>
                        </motion.div>
                      </div>

                      {/* Mobile Arrow */}
                      <div
                        className={`md:hidden mt-4 w-[32px] h-[32px] flex items-center justify-center rounded-full border shrink-0 transition-all duration-300 ${
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
                            strokeWidth={1.2}
                            size={16}
                          />
                        </motion.div>
                      </div>
                    </div>

                    {/* Middle Column (Holds Image + Content Details) */}
                    <div className="flex-1 w-full flex flex-col lg:pt-4">
                      {/* Synced Dynamic Expansion Height Image Wrapper */}
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
                          </div>
                        </div>
                      </div>

                      {/* Descriptive Row Text Content */}
                      <div
                        className={`grid transition-[grid-template-rows] duration-300 ease-in-out md:grid-rows-[1fr] ${
                          isActive ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                        }`}
                      >
                        <div className="overflow-hidden">
                          <div className="flex flex-col gap-1.5 relative pb-2">
                            <h4 className="font-bold text-[#003b9d] text-[16px]">
                              {row.title}
                            </h4>
                            <p className="text-[#54514c] text-[16px] leading-[1.4]">
                              {row.desc}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Desktop Arrow Column */}
                    <div
                      className={`hidden md:flex absolute right-0 w-[56px] h-[56px] items-center justify-center rounded-full border transition-all duration-300 ${
                        isActive
                          ? "bg-[#003b9d] border-[#003b9d] text-white top-1/2 -translate-y-1/2"
                          : "bg-transparent border-[#003b9d] top-6 lg:top-8"
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
