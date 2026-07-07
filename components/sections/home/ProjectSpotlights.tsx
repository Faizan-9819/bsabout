"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";

const initialProjectsData = [
  {
    id: 1,
    tag: "SAHAKAR LOGISTICS",
    title: "Sahakar Logistics Park - Bhiwandi, Mumbai",
    desc: "42-acre Grade-A logistics park, master-planned and delivered end to end through integrated development management.",
    image1: "/log1.webp",
  },
  {
    id: 2,
    tag: "INFINITE VALUE",
    title: "Strategic Industrial Hub - Phase II",
    desc: "Positioned near major transportation grids for extreme efficiency, localized supply lanes, and fast scalability pathways.",
    image1:
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=1200&q=80&auto=format&fit=crop",
  },
  {
    id: 3,
    tag: "BUILDWEALTH PARKS",
    title: "Logistics Gateway Matrix",
    desc: "Through custom state-of-the-art clear heights and engineering frameworks, serving global business networks flawlessly.",
    image1:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1200&q=80&auto=format&fit=crop",
  },
  {
    id: 4,
    tag: "PRIME STRATEGY",
    title: "Mega Infrastructure Zone",
    desc: "Comprehensive turn-key processing structures containing advanced clearances, automated operations, and regulatory approvals.",
    image1:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=80&auto=format&fit=crop",
  },
];

const logos = [
  { name: "APM Terminals", src: "/home/Spotlight/apm.svg" },
  { name: "ArcelorMittal", src: "/home/Spotlight/arc.svg" },
  { name: "Chandrashekhar", src: "/home/Spotlight/chand.svg" },
  { name: "CIDCO", src: "/home/Spotlight/cid.svg" },
  { name: "Balbharati", src: "/home/Spotlight/bal.svg" },
  { name: "Ganatra", src: "/home/Spotlight/gan.svg" },
];

export default function ProjectSpotlights() {
  const [activeCard, setActiveCard] = useState(0);
  const total = initialProjectsData.length;

  const handleNext = () => {
    setActiveCard((prev) => (prev + 1) % total);
  };

  const handlePrev = () => {
    setActiveCard((prev) => (prev - 1 + total) % total);
  };

  return (
    <section className="relative bg-[url('/home/Spotlight/bgspot.webp')] bg-cover bg-center overflow-hidden py-[50px] lg:py-[100px] font-sans select-none">
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none custom-topo-lines" />

      {/* 💡 Added default bounding layout pads to prevent component edge clipping on mobile viewports */}
      <div className="relative z-10 fix">
        {/* Eyebrow */}
        <div className="mb-6 flex items-center gap-2">
          <div className="h-px w-6 bg-[#e27244]" />
          <span className="text-[12px] font-semibold uppercase tracking-[3px] text-[#003b9d]">
            Project Spotlights
          </span>
        </div>

        {/* Title */}
        <h2 className="mb-12 text-[26px] font-bold tracking-[-0.8px] bg-gradient-to-r from-[#BF584F] to-[#F6736A] bg-clip-text text-transparent sm:text-[36px] lg:text-[44px] leading-[1.15]">
          Selected projects across industrial & logistics development
        </h2>

        {/* Height Balanced Container Frame */}
        {/* 💡 Adjusted responsive layout frames to switch flawlessly between mobile auto-height and fixed desktop calculations */}
        <div className="relative w-full h-auto sm:h-[420px] lg:h-[460px] lg:pr-24">
          {initialProjectsData.map((project, i) => {
            // ── UNTOUCHED ORIGINAL DESKTOP DECK CANVAS MATH ──
            let rel = (i - activeCard) % total;
            if (rel < 0) rel += total;
            if (rel > total / 2) rel -= total;

            const isVisible = rel >= 0 && rel <= 2;
            const effectiveRel = isVisible ? rel : 3;

            let tx;
            let sc = 1;

            if (effectiveRel === 0) {
              tx = "0%";
              sc = 1;
            } else if (effectiveRel === 1) {
              tx = "20%";
              sc = 0.85;
            } else if (effectiveRel === 2) {
              tx = "38%";
              sc = 0.7;
            } else if (effectiveRel === 3) {
              tx = "0%";
              sc = 0.8;
            }

            const ty = effectiveRel * 6;
            const op = 1;
            const zIdx = 40 - effectiveRel;

            return (
              <motion.div
                key={project.id}
                animate={{
                  x: tx,
                  y: ty,
                  scale: sc,
                  opacity: op,
                  // visibility: op === 0 ? "hidden" : "visible",
                }}
                transition={{
                  duration: 0.6,
                  ease: [0.25, 1, 0.5, 1],
                }}
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  zIndex: zIdx,
                  pointerEvents: rel === 0 ? "auto" : "none",
                  transformOrigin: "right center",
                }}
                // ── UNTOUCHED DESKTOP ONLY MARKUP LAYER ──
                className="hidden sm:block h-full max-w-[72%]"
              >
                {/* Card Main Block Body */}
                <div className="flex h-full bg-white shadow-[-20px_24px_48px_-15px_rgba(0,0,0,0.06),0_10px_30px_rgba(0,0,0,0.02)] border border-black/[0.04] rounded-sm overflow-hidden">
                  {/* Left Side Graphic Image Box */}
                  <div className="relative w-[110%] min-h-[200px] m-[32px] bg-[#e4e4e4] overflow-hidden">
                    {project.image1 ? (
                      <img
                        src={project.image1}
                        alt={project.title}
                        className="absolute inset-0 w-full h-full object-cover object-center"
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center text-[10px] tracking-widest text-black/25 font-bold uppercase">
                        [ Image Asset ]
                      </div>
                    )}
                  </div>

                  {/* Right Side Text Content Box */}
                  <div className="flex flex-col justify-center lg:gap-y-13 py-6 pr-6 lg:py-[35px] lg:w-[105%] lg:pr-10 bg-white">
                    <div className="mb-4 flex items-center gap-4 text-[18px] font-bold tracking-[1.5px] text-black/40 uppercase">
                      <img src="/home/Spotlight/spotlight1.svg" alt="" />
                      {project.tag}
                    </div>
                    <div>
                      <h3
                        className="mb-[14px] text-[18px] font-bold leading-[1.2] text-[#003b9d] lg:text-[19px] 
                      tracking-[-0.3px]"
                      >
                        {project.title}
                      </h3>
                      <p className="text-[15px] lg:w-[80%] leading-[140%] mt-5.5 text-[#54514c] lg:text-[20px] font-normal line-clamp-4">
                        {project.desc}
                      </p>
                    </div>

                    <div className="lg:mt-9 flex items-center gap-[9px] pt-2 ">
                      {/* <a
                        href="#"
                        className="inline-flex items-center gap-2.5 text-[12px] font-bold text-[#003b9d] group"
                      /> */}
                      <span className="group-hover:underline text-[#003B9D] font-semibold decoration-2 underline-offset-4 transition-all">
                        View Case Study
                      </span>
                      <div className="flex h-[30px] w-[30px] items-center justify-center rounded-full bg-[#003b9d] text-white transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                        <ArrowUpRight size={17} strokeWidth={2.5} />
                      </div>
                    </div>
                  </div>
                </div>
                {/* </div> */}
              </motion.div>
            );
          })}

          {/* ─── DYNAMIC MOBILE CAROUSEL SLIDER BLOCK ─────────────────────────── */}
          {/* Replaced the old static single view logic with a full-bleed moving horizontal slider element */}
          <div className="block sm:hidden overflow-hidden w-full">
            <motion.div
              // Shifts layout canvas exactly by 100% of the viewport width + 20px gaps setup
              animate={{ x: `calc(-${activeCard} * (100% + 20px))` }}
              transition={{ type: "spring", stiffness: 280, damping: 30 }}
              className="flex gap-[20px] w-full"
            >
              {initialProjectsData.map((project) => (
                <div
                  key={`mobile-project-${project.id}`}
                  className="w-full min-w-full flex-shrink-0 bg-white border border-black/[0.04] rounded-sm shadow-sm flex flex-col overflow-hidden"
                >
                  {/* Top Header-Image for Mobile Layouts */}
                  <div className="relative aspect-[16/10] bg-[#e4e4e4] w-full">
                    <img
                      src={project.image1}
                      alt={project.title}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </div>

                  {/* Bottom Structured Information Area */}
                  <div className="p-5 flex flex-col flex-1 justify-between">
                    <div>
                      <div className="text-[10px] font-bold text-black/40 tracking-wider mb-2 flex items-center gap-2 uppercase">
                        <img
                          src="/Spotlight/spotlight1.svg"
                          alt="spotlight"
                          className="w-3.5 h-3.5"
                        />
                        {project.tag}
                      </div>
                      <h3 className="text-[18px] font-bold text-[#003b9d] mb-3 leading-[1.3]">
                        {project.title}
                      </h3>
                      <p className="text-[13px] text-[#54514c] leading-relaxed mb-6 font-normal">
                        {project.desc}
                      </p>
                    </div>

                    <a
                      href="#"
                      className="text-[12px] font-bold text-[#003b9d] inline-flex items-center gap-1.5 self-start group"
                    >
                      View Case Study{" "}
                      <div className="flex h-5 w-5 items-center justify-center rounded-full bg-[#003b9d] text-white">
                        <ArrowUpRight size={10} strokeWidth={2.5} />
                      </div>
                    </a>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Navigation Control Bar */}
        <div className="mt-8 sm:mt-16 flex items-center justify-between pb-10">
          {/* Active Progress Dots Line Track */}
          <div className="flex items-center gap-2">
            {initialProjectsData.map((_, index) => {
              const isSelected = activeCard === index;
              return (
                <div
                  key={index}
                  className="relative h-1.5 rounded-full bg-black/[0.08] overflow-hidden transition-all duration-300"
                  style={{ width: isSelected ? "36px" : "6px" }}
                >
                  {isSelected && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute inset-0 bg-[#e27244] rounded-full"
                    />
                  )}
                </div>
              );
            })}
          </div>

          {/* Action Trigger Buttons */}
          <div className="flex items-center gap-3">
            <button
              onClick={handlePrev}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-black/15 bg-white text-[#54514c] hover:bg-black hover:text-white transition-all shadow-sm"
              aria-label="Previous card"
            >
              <ArrowLeft size={16} strokeWidth={2} />
            </button>
            <button
              onClick={handleNext}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-black/15 bg-white text-[#54514c] hover:bg-black hover:text-white transition-all shadow-sm"
              aria-label="Next card"
            >
              <ArrowRight size={16} strokeWidth={2} />
            </button>
          </div>
        </div>

        {/* Corporate Associates Bottom Infinite Ticker Box */}
        <div className="w-full border border-black/[0.04] bg-white py-8 px-6 rounded-sm shadow-[0_4px_20px_-4px_rgba(0,0,0,0.02)] overflow-hidden relative">
          {/* Left Side Masking Fade Gradient */}
          <div
            className="absolute left-0 top-0 bottom-0 z-10 pointer-events-none"
            style={{
              width: "127px",
              background:
                "linear-gradient(90deg, #FFF 0%, rgba(255, 255, 255, 0.00) 100%)",
            }}
          />

          {/* Right Side Masking Fade Gradient */}
          <div
            className="absolute right-0 top-0 bottom-0 z-10 pointer-events-none"
            style={{
              width: "127px",
              background:
                "linear-gradient(270deg, #FFF 0%, rgba(255, 255, 255, 0.00) 100%)",
            }}
          />

          <div className="relative flex w-full items-center">
            <motion.div
              className="flex gap-16 items-center flex-nowrap min-w-full"
              animate={{ x: ["0%", "-50%"] }}
              transition={{
                ease: "linear",
                duration: 25,
                repeat: Infinity,
              }}
            >
              {[...logos, ...logos, ...logos].map((logo, i) => (
                <div
                  key={i}
                  className="flex-shrink-0 flex items-center justify-center min-w-[140px] h-14 transition-all duration-300 hover:opacity-100 px-4"
                >
                  {logo.src ? (
                    <img
                      src={logo.src}
                      alt={`${logo.name} official corporate workspace logo`}
                      className="max-w-full max-h-full object-contain select-none pointer-events-none"
                    />
                  ) : (
                    <span className="text-[11px] font-bold uppercase tracking-[1.5px]">
                      {logo.name}
                    </span>
                  )}
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
