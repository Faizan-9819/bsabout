"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";

const mapImg =
  "https://www.figma.com/api/mcp/asset/3ef6634d-2f3c-40d8-a778-e45ad208d214";
const projectImg =
  "https://www.figma.com/api/mcp/asset/3ef6634d-2f3c-40d8-a778-e45ad208d214";

const filters = ["All Assets", "Industrial & Logistics Parks", "Land Parcels"];

const regions = [
  { id: "01", name: "Gujarat", x: "26%", y: "35%" },
  { id: "01", name: "Uttar Pradesh", x: "58%", y: "28%" },
  { id: "01", name: "Tamil Nadu", x: "55%", y: "75%" },
  { id: "01", name: "Andhra Pradesh", x: "62%", y: "62%" },
];

const projects = [
  {
    num: "01",
    name: "ABC Industrial Park",
    type: "Industrial Park",
    city: "Chakan, Pune",
    area: "0.36 MN. SQ. FT",
    img: projectImg,
    region: "Maharashtra",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.65, ease: "easeOut" as const },
  }),
};

export default function Developments() {
  const [activeFilter, setActiveFilter] = useState(0);

  return (
    <section
      id="developments"
      className="relative overflow-hidden py-[90px] lg:py-[100px]"
      style={{
        background:
          "linear-gradient(180deg, #120500 0%, #250b00 44%, #401300 100%)",
      }}
    >
      <div className="fix relative z-10">
        {/* Header */}
        <motion.div
          variants={fadeUp}
          custom={0}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="flex flex-col items-center text-center gap-5 mb-10"
        >
          <div className="eyebrow text-white/80">
            Developments & Strategic Assets
          </div>
          <h2
            className="font-bold text-white leading-[1.08] tracking-[-1.3px]"
            style={{ fontSize: "clamp(28px, 3.2vw, 43px)" }}
          >
            A Diverse Development Portfolio
            <br className="hidden lg:inline-block" />
            Across Region
          </h2>
        </motion.div>

        {/* Filter tabs */}
        <motion.div
          variants={fadeUp}
          custom={1}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-2 mb-10"
        >
          {filters.map((f, i) => (
            <button
              key={f}
              onClick={() => setActiveFilter(i)}
              className={`px-[21px] py-[11px] text-[14px] font-semibold tracking-tight transition-all ${
                i === activeFilter
                  ? "bg-[#e27244] text-white border border-transparent"
                  : "bg-white text-[#3a3733] border border-[#e2ddd3] hover:border-[#e27244]/50"
              }`}
            >
              {f}
            </button>
          ))}
        </motion.div>

        {/* Map + cards layout */}
        <motion.div
          variants={fadeUp}
          custom={2}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="relative flex flex-col lg:flex-row items-start gap-8"
        >
          {/* Map */}
          <div className="relative flex-1 min-h-[400px] lg:min-h-[600px] flex items-center justify-center">
            <img
              src={mapImg}
              alt="India Map"
              className="w-full max-w-[545px] h-auto drop-shadow-2xl relative z-10"
            />

            {/* Region pins */}
            {regions.map((r, i) => (
              <motion.div
                key={i}
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{
                  delay: 0.3 + i * 0.08,
                  type: "spring",
                  stiffness: 300,
                }}
                className="absolute z-20"
                style={{
                  left: r.x,
                  top: r.y,
                  transform: "translate(-50%, -50%)",
                }}
              >
                {/* Pulse ring */}
                <div className="relative">
                  <div className="w-3 h-3 rounded-full bg-[#e27244] relative z-10" />
                  <div className="absolute inset-0 w-3 h-3 rounded-full bg-[#e27244]/25 scale-[2.5]" />
                </div>
              </motion.div>
            ))}

            {/* Region labels */}
            {regions.map((r, i) => (
              <div
                key={`label-${i}`}
                className="absolute z-20 bg-white/70 backdrop-blur-sm px-[19px] py-[14px] flex items-center justify-between shadow-sm"
                style={{
                  left: i % 2 === 0 ? "2%" : "auto",
                  right: i % 2 !== 0 ? "0%" : "auto",
                  top: `${25 + i * 18}%`,
                  minWidth: "200px",
                  display: "flex",
                }}
              >
                <span className="w-9 h-9 rounded-full border border-[#868686] flex items-center justify-center text-[#212121] text-[15px] font-normal flex-shrink-0">
                  {r.id}
                </span>
                <span className="text-[#212121] text-[19px] font-normal tracking-tight">
                  {r.name}
                </span>
                <span className="w-[42px] h-[42px] rounded-full border border-black/16 flex items-center justify-center">
                  <ChevronLeft size={16} className="opacity-60" />
                  <ChevronRight size={16} className="opacity-60" />
                </span>
              </div>
            ))}
          </div>

          {/* Project card */}
          {projects.map((p) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6, ease: "easeOut" }}
              className="bg-white w-full lg:w-[322px] flex-shrink-0 overflow-hidden"
            >
              {/* Card header */}
              <div className="flex items-center justify-between px-5 py-4 border-b border-[#e3e3e3]">
                <span className="w-9 h-9 rounded-full border border-[#868686] flex items-center justify-center text-[15px] text-[#212121] font-normal">
                  04
                </span>
                <span className="text-[#212121] text-[19px] font-normal tracking-tight">
                  Maharashtra
                </span>
                <div className="flex gap-2">
                  {[ChevronLeft, ChevronRight].map((Icon, i) => (
                    <button
                      key={i}
                      className="w-[28.5px] h-[28.5px] rounded-full border border-black/16 flex items-center justify-center hover:bg-black/5 transition-colors"
                    >
                      <Icon size={14} strokeWidth={1.5} />
                    </button>
                  ))}
                </div>
              </div>

              {/* Image */}
              <div className="bg-[#e3e3e3] h-[141px] overflow-hidden rounded-[9.5px] mx-4 my-3">
                <img
                  src={p.img}
                  alt={p.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Details */}
              <div className="px-5 pb-5">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-[#787878] text-[22px]">{p.num}</span>
                  <span className="text-[#212121] text-[19px] font-normal tracking-tight">
                    {p.name}
                  </span>
                </div>

                <div className="flex flex-col gap-[10px] text-[15px] text-[#787878] font-normal mb-4">
                  {[
                    { key: "Type", val: p.type },
                    { key: "City", val: p.city },
                    { key: "Total Area", val: p.area },
                  ].map(({ key, val }) => (
                    <div
                      key={key}
                      className="flex items-center justify-between"
                    >
                      <span>{key}</span>
                      <span className="text-[#212121]">{val}</span>
                    </div>
                  ))}
                </div>

                <button className="flex items-center gap-2 text-[#003b9d] font-semibold text-[14.7px] tracking-tight hover:opacity-75 transition-opacity">
                  View Details
                  <span className="w-[28.5px] h-[28.5px] rounded-full bg-[#003b9d] text-white flex items-center justify-center flex-shrink-0">
                    <ArrowUpRight size={14} strokeWidth={2} />
                  </span>
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
