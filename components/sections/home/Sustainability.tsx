"use client";

import { motion } from "framer-motion";

const globeImg = "/globeImg.webp";
const iconLand =
  "https://www.figma.com/api/mcp/asset/0292cb79-1827-43e9-b91c-c61ef0d67a89";
const iconConstruction =
  "https://www.figma.com/api/mcp/asset/97b50932-2439-4830-bf5e-29da0568d264";
const iconGreen =
  "https://www.figma.com/api/mcp/asset/1dc604f6-cdfd-437c-bc91-6aba1e6538a8";
const iconStewardship =
  "https://www.figma.com/api/mcp/asset/33c1bf9b-87c2-4326-a034-692f97b46434";

const pillars = [
  {
    num: "01",
    icon: iconLand,
    title: "Responsible Land Planning",
    desc: "Planning sites for long-term environmental and operational viability, with quarterly air and noise monitoring reported to authorities.",
  },
  {
    num: "02",
    icon: iconConstruction,
    title: "Sustainable Construction",
    desc: "Prioritising environment-friendly materials and methods, in line with environmental compliance at every stage.",
  },
  {
    num: "03",
    icon: iconGreen,
    title: "Certified Green Development",
    desc: "Pursuing IGBC and EDGE Platinum certification, with assets designed to meet recognised green building benchmarks from the ground up.",
  },
  {
    num: "04",
    icon: iconStewardship,
    title: "Long-Term Stewardship",
    desc: "Maximising asset performance and environmental value beyond development, alongside community plantation drives.",
  },
];

const cardVariant = {
  hidden: { opacity: 0, y: 25 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.6, ease: "easeOut" },
  }),
};

function PillarCard({
  pillar,
  index,
}: {
  pillar: (typeof pillars)[0];
  index: number;
}) {
  return (
    <motion.div
      variants={cardVariant}
      custom={index}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-20px" }}
      className="relative overflow-hidden border border-white/40 p-6 backdrop-blur-[16px] rounded-[3px] w-full max-w-[360px] md:max-w-[400px] min-h-[160px] flex flex-col justify-between"
      style={{
        background:
          "linear-gradient(135deg, rgba(255,255,255,0.7) 0%, rgba(255,255,255,0.4) 100%)",
        boxShadow: "0px 20px 50px 0px rgba(0, 40, 80, 0.05)",
      }}
    >
      {/* Corner subtle light background layer */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(135deg, rgba(255,255,255,0.5) 0%, rgba(255,255,255,0) 30%)",
        }}
      />

      <div>
        {/* Card Header Top Row */}
        <div className="flex items-center justify-between mb-3">
          <img src={pillar.icon} alt="" className="w-7 h-7 object-contain" />
          <div className="flex flex-col items-end">
            <span className="text-[#00b050] text-[21px] font-thin leading-none tracking-wide">
              {pillar.num}
            </span>
            <div className="w-5.5 h-[1.5px] bg-[#00b050] mt-[3px] opacity-60" />
          </div>
        </div>

        {/* Card Content Titles */}
        <h3 className="text-[#003b9d] font-bold text-[16px] leading-[1.3] mb-2 tracking-[-0.3px]">
          {pillar.title}
        </h3>

        <p className="text-[#46566a] text-[12.5px] leading-[1.5] font-normal tracking-wide opacity-95">
          {pillar.desc}
        </p>
      </div>

      {/* Internal Premium Edge Shading */}
      <div
        className="absolute inset-0 pointer-events-none rounded-[3px]"
        style={{
          boxShadow:
            "inset 0px 1px 0px 0px rgba(255,255,255,0.8), inset 0px 0px 0px 1px rgba(255,255,255,0.15)",
        }}
      />
    </motion.div>
  );
}

export default function Sustainability() {
  return (
    <section
      id="sustainability"
      className="relative overflow-hidden sustainability-bg w-full flex flex-col justify-between py-[50px] md:py-[80px] lg:py-16"
    >
      {/* Curved Background Wave Lines Placeholder effect */}
      <div className="absolute inset-0 pointer-events-none opacity-40 z-0">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M-100,200 Q300,150 800,250 T1900,200"
            fill="none"
            stroke="#00b050"
            strokeWidth="0.5"
            opacity="0.15"
          />
          <path
            d="M-100,400 Q400,450 900,350 T1900,500"
            fill="none"
            stroke="#003b9d"
            strokeWidth="0.5"
            opacity="0.1"
          />
        </svg>
      </div>

      {/* Top Header Grid Content */}
      <div className="fix relative z-10 text-center flex flex-col items-center">
        {/* Track Tagline indicator */}
        <div className="flex items-center gap-2 mb-3">
          <div className="h-[1px] w-4 bg-[#003b9d] opacity-60" />
          <span className="text-[10px] font-bold uppercase tracking-[3px] text-[#003b9d]">
            Sustainability by Design
          </span>
          <div className="h-[1px] w-4 bg-[#003b9d] opacity-60" />
        </div>

        <h2 className="font-bold text-[#e27244] leading-[1.15] tracking-[-1px] text-[26px] sm:text-[34px] lg:text-[40px] mb-4">
          Sustainability is built into <br /> every decision we make.
        </h2>

        <p className="text-[#64748b] font-normal leading-[1.6] max-w-[840px] text-[12.5px] sm:text-[14.5px]">
          From land selection and planning to engineering, execution, and
          long-term asset performance, <br className="hidden md:inline" />
          sustainability is embedded across the development lifecycle. It is
          backed by measurable action, not intent alone.
        </p>
      </div>

      {/* ── CENTRAL STAGING VIEWPORT CANVAS LAYER ── */}
      <div className="relative fix flex flex-col items-center justify-end lg:h-[520px] xl:h-[500px]">
        {/* Giant Bottom-Centered Globe Graphic */}
        <div className="hidden sm:block w-full max-w-[400px] sm:max-w-[500px] lg:max-w-[850px] xl:max-w-[1250px] mx-auto lg:absolute lg:left-1/2 lg:bottom-[-45%] lg:-translate-x-1/2 z-0 pointer-events-none">
          <motion.img
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            src={globeImg}
            alt="Sustainability Globe Canvas"
            className="w-full h-auto object-contain mx-auto"
          />
        </div>

        <div className="block sm:hidden w-full max-w-[400px] sm:max-w-[500px] lg:max-w-[850px] xl:max-w-[1250px] mx-auto lg:absolute lg:left-1/2 lg:bottom-[-95%] lg:-translate-x-1/2 z-0 pointer-events-none">
          <motion.img
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            src={globeImg}
            alt="Sustainability Globe Canvas"
            className="w-full h-auto object-contain mx-auto"
          />
        </div>

        {/* Floating Matrix Overlay Controls */}
        <div className="sm:pt-0 pt-4 w-full flex flex-col items-center gap-6 lg:absolute lg:inset-x-0 lg:bottom-4 xl:bottom-12 lg:flex-row lg:justify-between lg:px-12 xl:px-16 z-10 pointer-events-none">
          {/* LEFT COLUMN MATRIX STACK (Cards 01 & 02 shifted slightly upwards on desktop layout) */}
          <div className="w-full lg:w-auto flex flex-col gap-5 sm:gap-6 pointer-events-auto items-center lg:items-start lg:max-w-[380px] xl:max-w-[420px] lg:-translate-y-12">
            <PillarCard pillar={pillars[0]} index={0} />
            <PillarCard pillar={pillars[1]} index={1} />
          </div>

          {/* RIGHT COLUMN MATRIX STACK (Cards 03 & 04) */}
          <div className="w-full lg:w-auto flex flex-col gap-5 sm:gap-6 pointer-events-auto items-center lg:items-end lg:max-w-[380px] xl:max-w-[420px]">
            <PillarCard pillar={pillars[2]} index={2} />
            <PillarCard pillar={pillars[3]} index={3} />
          </div>
        </div>
      </div>
    </section>
  );
}
