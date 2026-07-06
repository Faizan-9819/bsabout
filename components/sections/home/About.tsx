// "use client";

// import Btn from "@/components/shared/Btn";
// import { motion } from "framer-motion";

// const bgPhoto =
//   "https://www.figma.com/api/mcp/asset/89e49c4e-94d5-4db8-8820-d9b7b3317e2f";

// const fadeUp = {
//   hidden: { opacity: 0, y: 28 },
//   show: (i: number) => ({
//     opacity: 1,
//     y: 0,
//     transition: { delay: i * 0.12, duration: 0.7, ease: "easeOut" as const },
//   }),
// };

// export default function About() {
//   return (
//     <section id="about" className="relative h-[100vh] bg-white overflow-hidden">
//       {/* Background building photo — lower half */}
//       <div className="absolute bottom-0 left-0 right-0 h-[80%] pointer-events-none">
//         <img
//           src={bgPhoto}
//           alt=""
//           className="w-full h-full object-cover object-top"
//           style={{
//             maskImage: "linear-gradient(to bottom, transparent 0%, black 20%)",
//           }}
//         />
//       </div>

//       {/* Centre vertical divider */}
//       <div className="absolute inset-y-0 left-1/2 w-px bg-[rgba(0,59,157,0.05)] -translate-x-1/2 hidden lg:block" />

//       {/* Content */}
//       <div className="relative z-10 fix py-[90px] lg:py-[70px]">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
//           {/* Left col — headline */}
//           <div className="flex flex-col gap-7">
//             <motion.div
//               variants={fadeUp}
//               custom={0}
//               initial="hidden"
//               whileInView="show"
//               viewport={{ once: true, margin: "-80px" }}
//               className="eyebrow text-[#003b9d]"
//             >
//               About BuildSpace
//             </motion.div>

//             <motion.h2
//               variants={fadeUp}
//               custom={1}
//               initial="hidden"
//               whileInView="show"
//               viewport={{ once: true, margin: "-80px" }}
//               className="font-bold text-[#BF584F] leading-[1.07] tracking-[-1.6px]"
//               style={{ fontSize: "48px" }}
//             >
//               Development Expertise Across Industrial & Logistics Assets
//             </motion.h2>
//           </div>

//           {/* Right col — body copy + CTAs */}
//           <motion.div
//             variants={fadeUp}
//             custom={2}
//             initial="hidden"
//             whileInView="show"
//             viewport={{ once: true, margin: "-80px" }}
//             className="flex flex-col gap-[10px] pt-2"
//           >
//             <p
//               className="text-[#222] font-normal leading-[1.4]"
//               style={{ fontSize: "18px" }}
//             >
//               The success of industrial and logistics infrastructure is
//               determined long before construction begins.
//             </p>
//             <p
//               className="text-[#54514c] font-normal leading-[1.4]"
//               style={{ fontSize: "16px" }}
//             >
//               With over 50 years of combined experience, BuildSpace develops
//               industrial and logistics assets through a fully integrated
//               approach that brings together land strategy, master planning,
//               engineering, approvals, compliance, development, and operational
//               readiness.
//             </p>
//             <p
//               className="text-[#54514c] font-normal leading-[1.4]"
//               style={{ fontSize: "clamp(14px, 1.2vw, 18px)" }}
//             >
//               As a 100% compliant industrial & logistics infrastructure
//               developer, we manage every stage of the development lifecycle—from
//               identifying the right opportunity and securing approvals to
//               delivering institutional-grade assets built for long-term
//               performance.
//             </p>
//             <p
//               className="text-[#54514c] font-normal leading-[1.4] max-w-[554px]"
//               style={{ fontSize: "clamp(14px, 1.2vw, 18px)" }}
//             >
//               By combining development expertise, execution capability, and
//               lifecycle thinking within a single platform, BuildSpace creates
//               infrastructure that supports business growth, operational
//               efficiency, and enduring value creation.
//             </p>

//             <div className="flex flex-wrap items-center gap-6 pt-5">
//               <Btn label="Learn More About Us" icon="arrow-right" />
//               <Btn
//                 label="Meet Our Team"
//                 className="text-[#F56E6A]"
//                 variant="ghost"
//                 icon="arrow-right"
//               />
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import Btn from "@/components/shared/Btn";
import { motion } from "framer-motion";

const bgPhoto =
  "https://www.figma.com/api/mcp/asset/89e49c4e-94d5-4db8-8820-d9b7b3317e2f";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.7, ease: "easeOut" as const },
  }),
};

export default function About() {
  return (
    <section
      id="about"
      className="relative min-h-screen lg:h-screen bg-white overflow-hidden flex flex-col justify-center"
    >
      {/* Background building photo — lower half */}
      <div className="absolute bottom-0 hidden lg:inline-block left-0 right-0 h-[50%] lg:h-[80%] pointer-events-none">
        <img
          src={bgPhoto}
          alt=""
          className="w-full h-full  object-cover object-top"
          style={{
            maskImage: "linear-gradient(to bottom, transparent 0%, black 20%)",
          }}
        />
      </div>

      {/* Centre vertical divider */}
      <div className="absolute inset-y-0 left-1/2 w-px bg-[rgba(0,59,157,0.05)] -translate-x-1/2 hidden lg:block" />

      {/* Content */}
      <div className="relative z-10 fix py-[60px] md:py-[90px] lg:py-[70px] w-full max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
          {/* Left col — headline */}
          <div className="flex flex-col gap-7 w-full lg:w-1/2">
            <motion.div
              variants={fadeUp}
              custom={0}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-80px" }}
              className="eyebrow text-[#003b9d]"
            >
              About BuildSpace
            </motion.div>

            <motion.h2
              variants={fadeUp}
              custom={1}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-80px" }}
              className="font-bold text-[#BF584F] leading-[1.1] md:leading-[1.07] tracking-[-1px] md:tracking-[-1.6px] text-[32px] md:text-[40px] lg:text-[48px]"
            >
              Development Expertise Across Industrial & Logistics Assets
            </motion.h2>
          </div>

          {/* Right col — body copy + CTAs */}
          <motion.div
            variants={fadeUp}
            custom={2}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            className="flex flex-col gap-[10px] pt-2 w-full lg:w-1/2"
          >
            <p
              className="text-[#222] font-normal leading-[1.4]"
              style={{ fontSize: "18px" }}
            >
              The success of industrial and logistics infrastructure is
              determined long before construction begins.
            </p>
            <p
              className="text-[#54514c] font-normal leading-[1.4]"
              style={{ fontSize: "16px" }}
            >
              With over 50 years of combined experience, BuildSpace develops
              industrial and logistics assets through a fully integrated
              approach that brings together land strategy, master planning,
              engineering, approvals, compliance, development, and operational
              readiness.
            </p>
            <p
              className="text-[#54514c] font-normal leading-[1.4]"
              style={{ fontSize: "clamp(14px, 1.2vw, 18px)" }}
            >
              As a 100% compliant industrial & logistics infrastructure
              developer, we manage every stage of the development lifecycle—from
              identifying the right opportunity and securing approvals to
              delivering institutional-grade assets built for long-term
              performance.
            </p>
            <p
              className="text-[#54514c] font-normal leading-[1.4] max-w-[554px]"
              style={{ fontSize: "clamp(14px, 1.2vw, 18px)" }}
            >
              By combining development expertise, execution capability, and
              lifecycle thinking within a single platform, BuildSpace creates
              infrastructure that supports business growth, operational
              efficiency, and enduring value creation.
            </p>

            <div className="flex flex-wrap items-center gap-4 sm:gap-6 pt-5">
              <Btn label="Learn More About Us" icon="arrow-right" />
              <Btn
                label="Meet Our Team"
                className="text-[#F56E6A]!"
                variant="ghost"
                icon="arrow-right"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
