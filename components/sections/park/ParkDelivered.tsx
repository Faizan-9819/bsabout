"use client";

import { motion } from "framer-motion";
import { useState } from "react";
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" as const },
  }),
};

const items = [
  {
    num: "01",
    title: "Master planning & design",
    desc: "Intelligently zoned 42-acre site with five PEB warehouses and BTS flexibility, completed in-house.",
    active: true,
  },
  {
    num: "02",
    title: "Compliance-led approvals",
    desc: "Building permission, environment clearance, power assurance, and provisional Fire NOC secured ahead of build, run in parallel with engineering.",
  },
  {
    num: "03",
    title: "Engineered infrastructure",
    desc: "Grade-A specification throughout: M40 concrete aprons, centralised substation and STP, hydro-pneumatic water supply, and FM Global-standard fire systems.",
  },
  {
    num: "04",
    title: "Sustainability by design",
    desc: "Solar-ready roofing, recycled water for all non-potable use, and a development targeting IGBC Platinum certification.",
  },
  {
    num: "05",
    title: "Execution underway",
    desc: "Construction commenced with all major clearances in place; first buildings targeted for completion from December 2026.",
    wide: true,
  },
];

export default function ParkDelivered() {
  const [hoveredCard, setHoveredCard] = useState(null);
  return (
    <section className="bg-[url('/home/Spotlight/bgspot.webp')] bg-cover bg-center bg-no-repeat">
      <div className="fix py-[60px] lg:py-[80px]">
        <motion.div
          variants={fadeUp}
          custom={0}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="flex flex-col gap-[20px] lg:gap-[29px] mb-10 lg:mb-[48px]"
        >
          <div className="flex items-center gap-[13px]">
            <span className="h-px w-7 bg-[#003b9d]" />
            <span className="text-[12px] font-semibold tracking-[3.36px] uppercase text-[#003b9d]">
              What BuildINFRA Did
            </span>
          </div>
          <h2 className="font-bold leading-[1.1] tracking-[-1.568px] text-[28px] sm:text-[40px] lg:text-[56px] text-gradient-brand bg-gradient-to-r from-[#BF584F] to-[#F6736A]/90 bg-clip-text text-transparent">
            What BuildSpace Delivered
          </h2>
          <p className="text-[#54514c] leading-[1.4] text-[16px] lg:text-[18px]">
            BuildSpace led Sahakar Logistics Park end to end through integrated
            development management, taking the project from land and master
            planning through <br className="hidden lg:flex" /> engineering,
            statutory approvals, and execution under a single line of
            accountability.
          </p>
        </motion.div>

        <motion.div
          variants={fadeUp}
          custom={1}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="flex flex-col lg:flex-row gap-6 lg:gap-5 items-stretch"
        >
          {/* Image */}
          <div className="rounded-2xl overflow-hidden w-full lg:w-[570px] shrink-0 h-[280px] sm:h-[380px] lg:h-auto lg:self-stretch relative">
            <img
              src="/infra/lifecycle/infraCap.webp"
              alt="Sahakar Logistics Park — construction"
              className="absolute w-full h-full object-cover"
            />
            {/* <div className="absolute inset-0 bg-black/30" /> */}
          </div>

          {/* Cards grid */}
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-5">
            {/* {items.map((item, index) => {
              const isActive = hoveredCard === index;

              return (
                <div
                  key={item.num}
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                  className={`flex h-full flex-col justify-between gap-3 rounded-2xl px-6 py-5 tracking-[-0.145px] box-border border backdrop-blur-[20px] transition-colors duration-300
  ${item.wide ? "sm:col-span-2" : ""}
  ${isActive ? "text-white border-transparent" : "text-[#222] border-[#f56e6a]"}
`}
                  style={{
                    background: isActive
                      ? "linear-gradient(90deg, #bf584f 0%, #f6736a 100%)"
                      : "linear-gradient(90deg, rgba(191,88,79,0.05) 0%, rgba(246,115,106,0.05) 100%)",
                  }}
                >
                  <div>
                    <span
                      className={`text-[20px] font-semibold leading-none ${
                        isActive ? "text-white" : "text-[#f56e6a]"
                      }`}
                    >
                      {item.num}
                    </span>

                    <p
                      className={`text-[18px] pt-3 font-semibold leading-[1.3] ${
                        isActive ? "text-white" : "text-[#222]"
                      }`}
                    >
                      {item.title}
                    </p>
                  </div>

                  <p
                    className={`text-[14px] leading-[1.4] ${
                      isActive ? "text-[#e0e0e0]" : "text-[#54514c]"
                    }`}
                  >
                    {item.desc}
                  </p>
                </div>
              );
            })} */}

            {items.map((item, index) => {
              const isActive = hoveredCard === index;

              return (
                <div
                  key={item.num}
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                  className={`flex h-full flex-col justify-between gap-3
        rounded-2xl
        px-6 py-5
        tracking-[-0.145px]
        box-border
        border 
        backdrop-blur-[20px]
        transition-colors duration-300
        ${item.wide ? "sm:col-span-2" : ""}
        ${
          isActive
            ? "text-white border-transparent"
            : "text-[#222] border-[#F59B98]/50"
        }
      `}
                  style={{
                    background: isActive
                      ? "linear-gradient(90deg, #BF584F 0%, #F6736A 100%)"
                      : "linear-gradient(90deg, rgba(191, 88, 79, 0.05) 0%, rgba(246, 115, 106, 0.05) 100%)",
                  }}
                >
                  <div>
                    <span
                      className={`text-[20px] font-semibold leading-none ${
                        isActive ? "text-white" : "text-[#F56E6A]"
                      }`}
                    >
                      {item.num}
                    </span>

                    <p
                      className={`pt-3 text-[18px] font-semibold leading-[1.3] ${
                        isActive ? "text-white" : "text-[#222]"
                      }`}
                    >
                      {item.title}
                    </p>
                  </div>

                  <p
                    className={`text-[14px] leading-[1.4] ${
                      isActive ? "text-[#E0E0E0]" : "text-[#54514C]"
                    }`}
                  >
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </motion.div>

        <p className="text-[#222] leading-[1.4] text-[16px] sm:text-[18px] max-w-[1280px] mt-8">
          By running approvals, engineering, and pre-mobilisation in parallel,
          BuildSpace brought Sahakar from master plan to active construction
          with statutory clearances secured ahead of build, demonstrating the
          time-to-operations advantage of integrated development management.
        </p>
      </div>
    </section>
  );
}
