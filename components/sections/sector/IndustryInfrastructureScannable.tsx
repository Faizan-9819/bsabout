"use client";

import React, { useMemo } from "react";
import { Sector } from "@/app/types/sector";
import { sectors } from "@/data/sector";

import { SectorSection } from "./SectorSection";
import { SectorSidebar } from "./SectorSidebar";
import { MobileSectorDropdown } from "./MobileSectorDropdown";
import { useScrollSpy } from "@/components/hooks/useScrollSpy";

const IndustryInfrastructureScannable: React.FC = () => {
  // useMemo gives a stable array reference so the hook's effect never re-runs
  const sectorIds = useMemo(() => sectors.map((s: Sector) => s.id), []);

  const [activeId, setActiveId] = useScrollSpy(sectorIds);

  const handleSectionScroll = (id: string) => {
    setActiveId(id, true);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="w-full flex relative bg-white">
      {/* Sidebar — full height, flush left */}
      <SectorSidebar
        sectors={sectors}
        activeId={activeId}
        onSelect={handleSectionScroll}
      />

      {/* Main content */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Mobile dropdown */}
        <MobileSectorDropdown
          sectors={sectors}
          activeId={activeId}
          onSelect={handleSectionScroll}
        />

        <div className="px-[5%]  lg:pl-[29px] lg:pr-[80px] py-8">
          {sectors.map((sector: Sector, index: number) => (
            <SectorSection
              key={sector.id}
              sector={sector}
              reverse={index % 2 !== 0}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default IndustryInfrastructureScannable;
