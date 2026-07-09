"use client";

import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" as const },
  }),
};

const stats = [
  {
    value: "42 acres",
    label: "Master-planned site",
  },
  {
    value: "12.77 lakh sq ft",
    label: "Chargeable built-up area",
  },
  {
    value: "5 + ancillary",
    label: "Warehouses, plus admin, gatehouse, driver rest area & utilities",
  },
  {
    value: "30k–650k sq ft",
    label: "BTS flexibility per occupier",
  },
];

export default function ParkAbout() {
  return (
    <section className="relative bg-white">
      {/* Centre vertical divider */}
      <div className="absolute inset-y-0 left-1/2 w-px bg-[rgba(0,59,157,0.05)] -translate-x-1/2 hidden lg:block" />

      <div className="fix py-[60px] lg:py-[80px]">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-[79px] items-center justify-between">
          {/* Left col — heading + description */}
          <motion.div
            variants={fadeUp}
            custom={0}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            className="flex flex-col gap-5 w-full lg:w-1/2 lg:max-w-[529px]"
          >
            <div className="eyebrow text-[#003b9d]">About BuildSpace</div>
            <p className="font-bold leading-[1.25] tracking-tight lg:tracking-[-1.568px] text-[20px] lg:text-[32px] text-gradient-brand bg-gradient-to-r from-[#BF584F] to-[#F6736A] bg-clip-text text-transparent">
              A 42-acre Grade-A industrial and logistics park in Bhiwandi, on
              India&apos;s leading warehousing corridor. Master-planned across
              five buildings with built-to-suit flexibility from 30,000 to
              650,000 sq ft, Sahakar is engineered for scale, efficiency, and
              day-one operational readiness, with all major approvals secured
              and construction underway.
            </p>
          </motion.div>

          {/* Right col — stats grid */}
          <motion.div
            variants={fadeUp}
            custom={1}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            className="w-full lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 p-7 relative z-10 overflow-hidden"
            style={{
              background: "linear-gradient(90deg, #bf584f 0%, #f6736a 100%)",
            }}
          >
            {stats.map((stat, i) => (
              // <div
              //   key={stat.value}
              //   className="flex flex-col gap-[20px] pt-5 px-5 pb-10"
              //   style={{
              //     borderTop:
              //       i >= 2 ? "1px solid rgba(255,255,255,0.25)" : undefined,
              //     borderLeft:
              //       i % 2 === 1
              //         ? "1px solid rgba(255,255,255,0.25)"
              //         : undefined,
              //   }}
              // >
              //   <p className="font-bold pt-5 text-white leading-[1.4] text-[24px] sm:text-[26px] lg:text-[30px]">
              //     {stat.value}
              //   </p>
              //   <p className="text-[11px] font-semibold tracking-[2.42px] uppercase text-white/80 leading-[1.4]">
              //     {stat.label}
              //   </p>
              // </div>
              <div
                key={stat.value}
                className={`
    flex flex-col gap-[20px] pt-5 px-5 pb-5 sm:pb-10

    /* Mobile */
    border-b border-white/25 last:border-b-0

    /* Desktop */
    sm:border-b-0
    ${i >= 2 ? "sm:border-t sm:border-white/25" : ""}
    ${i % 2 === 1 ? "sm:border-l sm:border-white/25" : ""}
  `}
              >
                <p className="font-bold pt-0 sm:pt-5 text-white leading-[1.4] text-[24px] sm:text-[26px] lg:text-[30px]">
                  {stat.value}
                </p>

                <p className="text-[11px] font-semibold tracking-[2.42px] uppercase text-white/80 leading-[1.4]">
                  {stat.label}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
