"use client";

import { motion } from "framer-motion";

export default function ParkHero() {
  return (
    <section className="relative w-full min-h-screen h-screen overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="/park/parkspot.webp"
          alt="Sahakar Logistics Park — aerial view"
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* Grid dividers + breadcrumb */}
      <div className="absolute inset-x-0 top-[13px] bottom-0 hidden lg:block fix">
        <div className="relative h-full">
          <span className="absolute left-px bottom-[73px] text-[12px] font-semibold tracking-[3.12px] uppercase text-white/56">
            Home &gt; About
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-end lg:justify-center plcont prcont pb-[64px] lg:pb-0">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="flex flex-col gap-5 lg:gap-[26px]"
        >
          <div className="flex items-center gap-[13px]">
            <span className="h-px w-7 bg-white/34" />
            <span className="text-[12px] font-semibold tracking-[3.12px] uppercase text-white/56">
              Project · Grade-A Logistics Park · Bhiwandi
            </span>
          </div>

          <div className="flex flex-col">
            <h1 className="font-bold text-white leading-[1.05] tracking-[-1.6px] text-[38px] sm:text-[52px] lg:text-[70px]">
              Sahakar Logistics Park
            </h1>
            <p className="font-light text-white/82 leading-[1.1] text-[20px] sm:text-[32px] lg:text-[50px]">
              Location - Bhiwandi, Mumbai, Maharashtra
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
