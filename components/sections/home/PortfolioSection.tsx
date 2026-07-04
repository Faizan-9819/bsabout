"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import IndiaMap from "./IndiaMap";
import StateCard from "../shared/StateCard";
import ConnectorLines from "../shared/ConnectorLines";
import { projects } from "@data/project";


export default function PortfolioSection() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const mapRef = useRef<HTMLDivElement>(null);
  const leftCardsRef = useRef<HTMLDivElement>(null);
  const rightCardsRef = useRef<HTMLDivElement>(null);

  const handleStateClick = (id: string) => {
    setActiveId((prev) => (prev === id ? null : id));
  };

  const leftProjects = projects.filter((p) => p.cardPosition === "left");
  const rightProjects = projects.filter((p) => p.cardPosition === "right");

  return (
    <section className="relative w-full min-h-screen bg-[#f7f8fa] overflow-hidden py-16 px-4">
      {/* Dot grid background */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, #d1d5db 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-12"
        >
          <p className="text-xs font-bold tracking-[0.3em] text-orange-500 uppercase mb-3">
            Our Presence
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight">
            Projects Across India
          </h2>
          <p className="mt-3 text-gray-500 text-sm max-w-md mx-auto">
            Explore our portfolio of landmark developments spanning six states
          </p>
        </motion.div>

        {/* Three-column layout */}
        <div className="relative flex flex-col md:flex-row items-start justify-center gap-6 md:gap-0">
          <ConnectorLines
            projects={projects}
            activeId={activeId}
            mapRef={mapRef as React.RefObject<HTMLDivElement>}
            leftCardsRef={leftCardsRef as React.RefObject<HTMLDivElement>}
            rightCardsRef={rightCardsRef as React.RefObject<HTMLDivElement>}
          />

          {/* Left cards */}
          <div
            ref={leftCardsRef}
            className="w-full md:w-[220px] lg:w-[240px] flex flex-col gap-3
              md:pt-16 md:pr-4 lg:pr-6 z-10 order-2 md:order-1"
          >
            {leftProjects.map((project, i) => (
              <motion.div
                key={project.id}
                id={`card-${project.id}`}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  delay: i * 0.1 + 0.3,
                  duration: 0.5,
                  ease: "easeOut",
                }}
              >
                <StateCard
                  project={project}
                  isActive={activeId === project.id}
                  onClick={() => handleStateClick(project.id)}
                />
              </motion.div>
            ))}
          </div>

          {/* Map */}
          <div
            ref={mapRef}
            className="w-full md:w-[320px] lg:w-[400px] xl:w-[460px] flex-shrink-0 z-10 order-1 md:order-2"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <IndiaMap
                projects={projects}
                activeId={activeId}
                onStateClick={handleStateClick}
              />
            </motion.div>
          </div>

          {/* Right cards */}
          <div
            ref={rightCardsRef}
            className="w-full md:w-[220px] lg:w-[240px] flex flex-col gap-3
              md:pt-32 md:pl-4 lg:pl-6 z-10 order-3"
          >
            {rightProjects.map((project, i) => (
              <motion.div
                key={project.id}
                id={`card-${project.id}`}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  delay: i * 0.1 + 0.3,
                  duration: 0.5,
                  ease: "easeOut",
                }}
              >
                <StateCard
                  project={project}
                  isActive={activeId === project.id}
                  onClick={() => handleStateClick(project.id)}
                />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Legend */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-10 flex items-center justify-center gap-6 text-xs text-gray-400"
        >
          <span className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-sm bg-white border border-gray-300 inline-block" />
            Project Location
          </span>
          <span className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-sm bg-orange-400 inline-block" />
            Selected State
          </span>
          <span className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-sm bg-[#e8edf2] border border-gray-200 inline-block" />
            Other States
          </span>
        </motion.div>
      </div>
    </section>
  );
}
