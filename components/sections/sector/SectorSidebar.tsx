"use client";
import React from "react";
import { Sector } from "@/app/types/sector";

interface SectorSidebarProps {
  sectors: Sector[];
  activeId: string;
  onSelect: (id: string) => void;
}

export const SectorSidebar: React.FC<SectorSidebarProps> = ({
  sectors,
  activeId,
  onSelect,
}) => {
  return (
    <nav
      aria-label="Sector navigation"
      className="hidden md:flex flex-col w-fit shrink-0 sticky top-0 self-start min-h-screen"
      style={{
        background:
          "linear-gradient(180deg, #120500 0%, #250B00 44%, #401300 100%)",
        padding: "114px 40px 40px 80px",
      }}
    >
      <div className="flex flex-col lg:gap-y-2 xl:gap-y-[12px] w-full">
        {sectors.map((sector) => {
          const isActive = activeId === sector.id;
          return (
            <button
              key={sector.id}
              onClick={() => onSelect(sector.id)}
              aria-current={isActive ? "true" : undefined}
              className={`w-full min-w-[180px] text-center px-4 py-[10px] text-[14px] font-medium tracking-wide whitespace-nowrap border-2 ${
                isActive
                  ? "bg-white text-[#BF584F] border-[#F56E6A]"
                  : "bg-transparent text-white border-white/40 hover:border-white/80 hover:bg-white/5"
              }`}
              style={{
                transition:
                  "background-color 0.25s ease, color 0.25s ease, border-color 0.25s ease",
              }}
            >
              {sector.title}
            </button>
          );
        })}
      </div>
    </nav>
  );
};
