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
    <section className="bg-[#eeeeeb]">
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
          <h2 className="font-bold leading-[1.1] tracking-[-1.568px] text-[28px] sm:text-[40px] lg:text-[56px] text-gradient-brand bg-gradient-to-r from-[#BF584F] to-[#F6736A] bg-clip-text text-transparent">
            What BuildSpace Delivered
          </h2>
          <p className="text-[#54514c] leading-[1.4] text-[16px] sm:text-[18px] max-w-[900px]">
            BuildSpace led Sahakar Logistics Park end to end through integrated
            development management, taking the project from land and master
            planning through engineering, statutory approvals, and execution
            under a single line of accountability.
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
          <div className="rounded-2xl overflow-hidden bg-[#e4e4e4] w-full lg:w-[570px] shrink-0 h-[280px] sm:h-[380px] lg:h-[557px] relative">
            <img
              src="/park/builtto.jpg"
              alt="Sahakar Logistics Park — construction"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/30" />
          </div>

          {/* Cards grid */}
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-5">
            {/* {items.map((item) => (
              <div
                key={item.num}
                className={`flex flex-col gap-3 rounded-2xl px-6 py-5 tracking-[-0.145px] ${
                  item.wide ? "sm:col-span-2" : ""
                } ${
                  item.active
                    ? "text-white"
                    : "border border-[#f56e6a] bg-gradient-to-r from-[rgba(191,88,79,0.05)] to-[rgba(246,115,106,0.05)] backdrop-blur-[20px]"
                }`}
                style={
                  item.active
                    ? {
                        background:
                          "linear-gradient(90deg, #bf584f 0%, #f6736a 100%)",
                      }
                    : undefined
                }
              >
                <span
                  className={`text-[20px] font-semibold ${
                    item.active ? "text-white" : "text-[#f56e6a]"
                  }`}
                >
                  {item.num}
                </span>
                <p
                  className={`text-[18px] font-semibold leading-[1.3] ${
                    item.active ? "text-white" : "text-[#222]"
                  }`}
                >
                  {item.title}
                </p>
                <p
                  className={`text-[14px] leading-[1.4] ${
                    item.active ? "text-[#e0e0e0]" : "text-[#54514c]"
                  }`}
                >
                  {item.desc}
                </p>
              </div>
            ))} */}
            {items.map((item, index) => {
              const isActive =
                hoveredCard === index || (hoveredCard === null && item.active);

              return (
                <div
                  key={item.num}
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                  className={`flex flex-col gap-3 rounded-2xl px-6 py-5 tracking-[-0.145px] transition-all duration-300 ${
                    item.wide ? "sm:col-span-2" : ""
                  } ${
                    isActive
                      ? "text-white"
                      : "border border-[#f56e6a] bg-gradient-to-r from-[rgba(191,88,79,0.05)] to-[rgba(246,115,106,0.05)] backdrop-blur-[20px]"
                  }`}
                  style={
                    isActive
                      ? {
                          background:
                            "linear-gradient(90deg, #bf584f 0%, #f6736a 100%)",
                        }
                      : undefined
                  }
                >
                  <span
                    className={`text-[20px] font-semibold ${
                      isActive ? "text-white" : "text-[#f56e6a]"
                    }`}
                  >
                    {item.num}
                  </span>

                  <p
                    className={`text-[18px] font-semibold leading-[1.3] ${
                      isActive ? "text-white" : "text-[#222]"
                    }`}
                  >
                    {item.title}
                  </p>

                  <p
                    className={`text-[14px] leading-[1.4] ${
                      isActive ? "text-[#e0e0e0]" : "text-[#54514c]"
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
