"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, ChevronLeft, X } from "lucide-react";

const logo = "/bsw.svg";

const ease = [0.76, 0, 0.24, 1] as const;

const navLinks = ["About", "Solutions", "Approach", "Sectors", "Insights"];

const projectStates = [
  { name: "Maharashtra", cities: ["Chakan", "Nagpur", "Pune", "Bhiwandi"] },
  { name: "Gujarat", cities: ["Sanand"] },
  { name: "Tamil Nadu", cities: ["Hosur"] },
  { name: "Uttar Pradesh", cities: ["Dadri"] },
  { name: "Andhra Pradesh", cities: ["Gujarat"] },
  { name: "Tamil Nadu", cities: ["Sri City"] },
];

type Panel = { title: string; stateIndex?: number };

export default function MobNav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  // stack drives nested panels: [] = main links, [{title:"Projects"}] = states list, [{...}, {title:"Maharashtra", stateIndex:0}] = cities
  const [stack, setStack] = useState<Panel[]>([]);

  useEffect(() => {
    let lastY = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 20);
      if (!open) {
        if (y > lastY && y > 80) setHidden(true);
        else if (y < lastY) setHidden(false);
      }
      lastY = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [open]);

  useEffect(() => {
    if (open) setHidden(false);
    else setStack([]);
  }, [open]);

  const pushPanel = (panel: Panel) => setStack((p) => [...p, panel]);
  const popPanel = () => setStack((p) => p.slice(0, -1));

  const isWhite = scrolled;
  const currentPanel = stack[stack.length - 1] ?? null;

  return (
    <>
      {/* ── Fixed top bar ── */}
      <motion.header
        className="fixed top-0 left-0 right-0 z-50 lg:hidden"
        initial={{ y: 0, backgroundColor: "rgba(0,0,0,0)" }}
        animate={{
          y: hidden ? -80 : 0,
          backgroundColor: isWhite ? "#ffffff" : "rgba(0,0,0,0)",
          boxShadow: isWhite
            ? "0px 4px 10px rgba(0, 0, 0, 0.1)"
            : "0px 0px 0px rgba(0, 0, 0, 0)",
        }}
        transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
        style={{ height: 72 }}
      >
        <div className="fix flex items-center justify-between h-full">
          <a href="/" aria-label="BuildSpace home">
            <img
              src={logo}
              alt="BuildSpace"
              style={{
                height: 36,
                width: "auto",
                filter: isWhite ? "invert(1)" : "none",
                transition: "filter 0.35s ease",
              }}
            />
          </a>

          <button
            onClick={() => setOpen(true)}
            className="flex items-center gap-2 bg-white pl-4 pr-1.5 py-1.5 text-[#001b49] font-semibold text-[13px] tracking-tight"
            aria-label="Open menu"
          >
            Menu
            <span className="w-7 h-7 rounded-full bg-[#001b49] flex items-center justify-center shrink-0">
              <span
                className="relative flex items-center justify-center"
                style={{ width: 13, height: 13 }}
              >
                <span
                  style={{
                    position: "absolute",
                    width: 13,
                    height: 1.5,
                    background: "#fff",
                    borderRadius: 2,
                    transform: "translateY(-3.5px)",
                  }}
                />
                <span
                  style={{
                    position: "absolute",
                    width: 13,
                    height: 1.5,
                    background: "#fff",
                    borderRadius: 2,
                    transform: "translateY(3.5px)",
                  }}
                />
              </span>
            </span>
          </button>
        </div>
      </motion.header>

      {/* ── Fullscreen drawer ── */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="drawer-root"
            className="fixed inset-0 z-[200] lg:hidden overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {/* ── Panel 0: Main links ── */}
            <motion.div
              key="panel-main"
              className="absolute inset-0 bg-white flex flex-col"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.55, ease }}
            >
              {/* Header */}
              <div
                className="flex items-center justify-between px-6 border-b border-black/8"
                style={{ height: 72 }}
              >
                <img
                  src={logo}
                  alt="BuildSpace"
                  style={{ height: 36, width: "auto", filter: "invert(1)" }}
                />
                <button
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-2 text-[#001b49] font-semibold text-[13px] tracking-tight"
                >
                  Close
                  <span className="w-7 h-7 rounded-full bg-[#001b49] text-white flex items-center justify-center shrink-0">
                    <X size={13} strokeWidth={2.5} />
                  </span>
                </button>
              </div>

              {/* Links */}
              <div className="flex flex-col flex-1 overflow-y-auto">
                {navLinks.map((label) => (
                  <a
                    key={label}
                    href={`#${label.toLowerCase()}`}
                    onClick={() => setOpen(false)}
                    className="flex items-center justify-between px-6 py-5 border-b border-black/8 text-[22px] font-medium text-[#222] tracking-tight"
                  >
                    {label}
                  </a>
                ))}

                {/* Projects — pushes to state list */}
                <button
                  onClick={() => pushPanel({ title: "Projects" })}
                  className="flex items-center justify-between px-6 py-5 border-b border-black/8 text-[22px] font-medium text-[#222] tracking-tight w-full text-left"
                >
                  Projects
                  <ChevronRight
                    size={20}
                    strokeWidth={1.8}
                    className="text-[#909090]"
                  />
                </button>
              </div>
            </motion.div>

            {/* ── Panel 1: States list ── */}
            <AnimatePresence>
              {stack.length >= 1 && (
                <motion.div
                  key="panel-states"
                  className="absolute inset-0 bg-white flex flex-col"
                  initial={{ x: "100%" }}
                  animate={{ x: 0 }}
                  exit={{ x: "100%" }}
                  transition={{ duration: 0.45, ease }}
                >
                  {/* Header */}
                  <div
                    className="flex items-center justify-between px-6 border-b border-black/8"
                    style={{ height: 72 }}
                  >
                    <button
                      onClick={popPanel}
                      className="flex items-center gap-1 text-[#001b49] font-semibold text-[13px] tracking-tight"
                    >
                      <ChevronLeft size={16} strokeWidth={2.5} />
                      Back
                    </button>
                    <button
                      onClick={() => setOpen(false)}
                      className="flex items-center gap-2 text-[#001b49] font-semibold text-[13px] tracking-tight"
                    >
                      Close
                      <span className="w-7 h-7 rounded-full bg-[#001b49] text-white flex items-center justify-center shrink-0">
                        <X size={13} strokeWidth={2.5} />
                      </span>
                    </button>
                  </div>

                  {/* Section title */}
                  <p className="px-6 pt-6 pb-3 text-[12px] font-semibold tracking-[2px] uppercase text-[#909090]">
                    Projects
                  </p>

                  {/* State rows */}
                  <div className="flex flex-col flex-1 overflow-y-auto">
                    {projectStates.map((state, i) => (
                      <button
                        key={i}
                        onClick={() =>
                          pushPanel({ title: state.name, stateIndex: i })
                        }
                        className="flex items-center justify-between px-6 py-5 border-b border-black/8 text-[22px] font-medium text-[#222] tracking-tight w-full text-left"
                      >
                        {state.name}
                        <ChevronRight
                          size={20}
                          strokeWidth={1.8}
                          className="text-[#909090]"
                        />
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* ── Panel 2: Cities for selected state ── */}
            <AnimatePresence>
              {stack.length >= 2 && currentPanel?.stateIndex !== undefined && (
                <motion.div
                  key="panel-cities"
                  className="absolute inset-0 bg-white flex flex-col"
                  initial={{ x: "100%" }}
                  animate={{ x: 0 }}
                  exit={{ x: "100%" }}
                  transition={{ duration: 0.45, ease }}
                >
                  {/* Header */}
                  <div
                    className="flex items-center justify-between px-6 border-b border-black/8"
                    style={{ height: 72 }}
                  >
                    <button
                      onClick={popPanel}
                      className="flex items-center gap-1 text-[#001b49] font-semibold text-[13px] tracking-tight"
                    >
                      <ChevronLeft size={16} strokeWidth={2.5} />
                      Back
                    </button>
                    <button
                      onClick={() => setOpen(false)}
                      className="flex items-center gap-2 text-[#001b49] font-semibold text-[13px] tracking-tight"
                    >
                      Close
                      <span className="w-7 h-7 rounded-full bg-[#001b49] text-white flex items-center justify-center shrink-0">
                        <X size={13} strokeWidth={2.5} />
                      </span>
                    </button>
                  </div>

                  {/* Section title */}
                  <p className="px-6 pt-6 pb-3 text-[12px] font-semibold tracking-[2px] uppercase text-[#909090]">
                    {currentPanel.title}
                  </p>

                  {/* City rows */}
                  <div className="flex flex-col flex-1 overflow-y-auto">
                    {projectStates[currentPanel.stateIndex].cities.map(
                      (city) => (
                        <a
                          key={city}
                          href="#"
                          onClick={() => setOpen(false)}
                          className="flex items-center px-6 py-5 border-b border-black/8 text-[22px] font-medium text-[#222] tracking-tight"
                        >
                          {city}
                        </a>
                      ),
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
