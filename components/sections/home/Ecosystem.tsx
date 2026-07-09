"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const bgImg =
  "https://www.figma.com/api/mcp/asset/3d53e4ce-ebdf-4f87-bcc4-78bfe446b1cb";
const imgInfra = "home/footer/img1.jpg";
const imgWealth = "home/footer/value.webp";
const imgValue = "home/footer/wealth.webp";

const verticals = [
  {
    name: "Build",
    bold: "INFRA",
    img: imgInfra,
    href: "/infra",
    desc: "Industrial and logistics parks built from the ground up.",
  },
  {
    name: "Build",
    bold: "VALUE",
    img: imgWealth,
    href: "/value",
    desc: "Unlocking land value for owners, operators, and investors.",
  },
  {
    name: "Build",
    bold: "WEALTH",
    img: imgValue,
    href: "/wealth",
    desc: "Long-term participation in industrial growth.",
  },
];

const cardVariant = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.6, ease: "easeOut" as const },
  }),
};

export default function Ecosystem() {
  return (
    <section
      id="ecosystem"
      className="relative overflow-hidden py-[50px] lg:py-[100px]"
    >
      {/* Background image with dark overlay */}
      <div className="absolute inset-0">
        <img
          src="/section10_bg.webp"
          alt=""
          className="w-full h-full object-cover "
        />
        <div className="absolute inset-0 " />
        {/* Deep dark tint so it reads nearly black */}
        <div className="absolute inset-0 " />
      </div>

      <div className="fix relative z-10">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-12 lg:gap-20">
          {/* Left — headline */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:max-w-[400px] flex-shrink-0"
          >
            <h2
              className="font-bold text-white leading-[1.08] tracking-[-1.123px] mb-4"
              style={{ fontSize: "clamp(26px, 3vw, 37.4px)" }}
            >
              Choose your
              <br />
              growth path.
            </h2>
            <p className="text-white/70 font-light text-[16.5px] leading-[1.6]">
              Navigate the BuildSpace ecosystem through development, value, and
              wealth.
            </p>
          </motion.div>

          {/* Right — vertical cards */}
          <div className="flex flex-col sm:flex-row gap-4 flex-1 w-full">
            {verticals.map((v, i) => (
              <motion.a
                key={v.bold}
                href={v.href}
                variants={cardVariant}
                custom={i}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="w-full group relative rounded-xl flex-1 flex flex-col gap-3 p-[14.8px] border border-white/22 backdrop-blur-[8.8px] shadow-[0px_24px_57.6px_0px_rgba(0,10,30,0.42)] hover:border-white/40 transition-colors"
                style={{
                  background: "rgba(255,255,255,0.25)",
                  boxShadow: "inset 0px 0.8px 0px 0px rgba(255,255,255,0.24)",
                }}
              >
                {/* Brand name */}
                <div className="text-white text-[18px] tracking-[-0.925px]">
                  <span className="font-normal">{v.name}</span>
                  <span className="font-bold">{v.bold}</span>
                </div>

                {/* Thumbnail */}
                <div
                  className="relative overflow-hidden rounded-xl border border-white/26 shadow-[0px_17.6px_44px_0px_rgba(0,10,30,0.45)]"
                  style={{
                    height: "120px",
                    background:
                      "radial-gradient(ellipse at 30% 40%, rgba(12,93,146,1) 0%, rgba(7,64,109,1) 50%, rgba(2,34,71,1) 100%)",
                  }}
                >
                  <img
                    src={v.img}
                    alt={v.name + v.bold}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Desc */}
                {/* <p className="text-white/60 text-[12.5px] leading-[1.5]">
                  {v.desc}
                </p> */}

                {/* Arrow */}
                <div className="absolute top-3 right-3 w-7 h-7 rounded-full border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <ArrowUpRight
                    size={13}
                    strokeWidth={2}
                    className="text-white"
                  />
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
