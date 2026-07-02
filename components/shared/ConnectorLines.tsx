"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { ProjectData } from "@/types";

interface Line {
  id: string;
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  isActive: boolean;
}

interface ConnectorLinesProps {
  projects: ProjectData[];
  activeId: string | null;
  mapRef: React.RefObject<HTMLDivElement>;
  leftCardsRef: React.RefObject<HTMLDivElement>;
  rightCardsRef: React.RefObject<HTMLDivElement>;
}

export default function ConnectorLines({
  projects,
  activeId,
  mapRef,
}: ConnectorLinesProps) {
  const [lines, setLines] = useState<Line[]>([]);
  const svgRef = useRef<SVGSVGElement>(null);

  const recalculate = useCallback(() => {
    if (!mapRef.current || !svgRef.current) return;
    const svgRect = svgRef.current.getBoundingClientRect();
    const mapRect = mapRef.current.getBoundingClientRect();

    const newLines: Line[] = [];
    projects.forEach((project) => {
      const cardEl = document.getElementById(`card-${project.id}`);
      if (!cardEl) return;

      const dotX =
        mapRect.left -
        svgRect.left +
        mapRect.width * (project.connectorCoordinates.mapX / 100);
      const dotY =
        mapRect.top -
        svgRect.top +
        mapRect.height * (project.connectorCoordinates.mapY / 100);

      const cardRect = cardEl.getBoundingClientRect();
      const cardY = cardRect.top - svgRect.top + cardRect.height / 2;
      const cardX =
        project.cardPosition === "left"
          ? cardRect.right - svgRect.left
          : cardRect.left - svgRect.left;

      newLines.push({
        id: project.id,
        x1: dotX,
        y1: dotY,
        x2: cardX,
        y2: cardY,
        isActive: project.id === activeId,
      });
    });
    setLines(newLines);
  }, [projects, activeId, mapRef]);

  useEffect(() => {
    const t = setTimeout(recalculate, 80);
    window.addEventListener("resize", recalculate);
    return () => {
      clearTimeout(t);
      window.removeEventListener("resize", recalculate);
    };
  }, [recalculate]);

  // Re-run after card expansion animation completes
  useEffect(() => {
    const t = setTimeout(recalculate, 450);
    return () => clearTimeout(t);
  }, [activeId]);

  return (
    <svg
      ref={svgRef}
      className="absolute inset-0 pointer-events-none hidden md:block"
      style={{ width: "100%", height: "100%", overflow: "visible", zIndex: 5 }}
    >
      <defs>
        <marker
          id="dot-marker"
          viewBox="0 0 4 4"
          refX="2"
          refY="2"
          markerWidth="4"
          markerHeight="4"
        >
          <circle cx="2" cy="2" r="1.5" fill="#cbd5e1" />
        </marker>
        <marker
          id="dot-marker-active"
          viewBox="0 0 4 4"
          refX="2"
          refY="2"
          markerWidth="4"
          markerHeight="4"
        >
          <circle cx="2" cy="2" r="1.5" fill="#f97316" />
        </marker>
      </defs>
      {lines.map((line) => {
        const midX = (line.x1 + line.x2) / 2;
        const d = `M ${line.x1} ${line.y1} C ${midX} ${line.y1}, ${midX} ${line.y2}, ${line.x2} ${line.y2}`;
        return (
          <path
            key={line.id}
            d={d}
            fill="none"
            stroke={line.isActive ? "#f97316" : "#cbd5e1"}
            strokeWidth={line.isActive ? 1.5 : 1}
            strokeDasharray={line.isActive ? undefined : "4 3"}
            opacity={line.isActive ? 0.9 : 0.6}
            style={{
              transition:
                "stroke 0.4s ease, stroke-width 0.4s ease, opacity 0.4s ease",
            }}
            markerEnd={
              line.isActive ? "url(#dot-marker-active)" : "url(#dot-marker)"
            }
          />
        );
      })}
    </svg>
  );
}
