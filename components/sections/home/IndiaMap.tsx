"use client";

import { motion } from "framer-motion";
import { ProjectData } from "@/types";

interface IndiaMapProps {
  projects: ProjectData[];
  activeId: string | null;
  onStateClick: (id: string) => void;
}

const STATE_PATHS: Record<string, string> = {
  jammukashmir:
    "M 148 10 L 175 8 L 198 22 L 210 38 L 200 55 L 188 62 L 170 58 L 158 45 L 145 35 Z",
  ladakh:
    "M 200 8 L 240 5 L 265 25 L 258 50 L 240 60 L 215 55 L 205 40 L 208 22 Z",
  himachalpradesh:
    "M 165 58 L 190 60 L 208 70 L 205 88 L 188 95 L 170 90 L 158 78 Z",
  punjab: "M 142 68 L 168 62 L 172 80 L 165 95 L 148 98 L 132 88 L 130 75 Z",
  haryana:
    "M 168 80 L 188 78 L 195 95 L 190 110 L 172 112 L 162 100 L 165 88 Z",
  uttarakhand:
    "M 205 88 L 230 82 L 248 92 L 245 110 L 228 118 L 208 115 L 200 102 Z",
  delhi: "M 172 108 L 185 105 L 188 118 L 180 124 L 168 118 Z",
  rajasthan:
    "M 120 88 L 168 90 L 188 105 L 192 145 L 178 178 L 152 190 L 118 188 L 95 175 L 85 148 L 90 118 L 105 100 Z",
  uttarpradesh:
    "M 192 100 L 248 90 L 285 105 L 295 128 L 285 158 L 265 172 L 230 178 L 195 175 L 185 158 L 188 132 Z",
  bihar:
    "M 285 105 L 320 100 L 345 112 L 348 135 L 335 152 L 310 158 L 290 150 L 282 132 Z",
  jharkhand:
    "M 290 152 L 335 152 L 355 165 L 352 188 L 332 200 L 308 198 L 290 182 Z",
  westbengal:
    "M 345 110 L 372 108 L 385 128 L 380 165 L 368 195 L 352 215 L 338 210 L 335 185 L 348 165 L 350 135 Z",
  sikkim: "M 358 100 L 375 98 L 378 112 L 365 115 Z",
  assam:
    "M 375 105 L 418 102 L 438 115 L 435 132 L 415 140 L 390 138 L 375 125 Z",
  meghalaya: "M 390 138 L 422 135 L 432 148 L 420 158 L 395 155 Z",
  arunachalpradesh:
    "M 415 88 L 458 85 L 472 98 L 465 115 L 440 118 L 415 110 Z",
  nagaland: "M 435 115 L 458 112 L 465 128 L 452 138 L 432 135 Z",
  manipur: "M 438 135 L 460 132 L 468 148 L 458 162 L 440 160 L 432 148 Z",
  mizoram: "M 418 158 L 440 158 L 448 172 L 435 182 L 415 178 Z",
  tripura: "M 398 155 L 415 155 L 418 172 L 405 178 L 392 168 Z",
  odisha:
    "M 285 182 L 320 175 L 345 185 L 355 210 L 348 238 L 325 252 L 298 248 L 278 232 L 275 208 Z",
  chhattisgarh:
    "M 248 165 L 292 162 L 305 182 L 302 218 L 285 235 L 258 238 L 235 222 L 228 198 L 238 178 Z",
  madhyapradesh:
    "M 175 175 L 240 168 L 270 180 L 272 210 L 255 235 L 225 245 L 190 242 L 162 228 L 152 205 L 158 185 Z",
  gujarat:
    "M 85 148 L 120 145 L 148 158 L 158 178 L 148 205 L 128 225 L 102 235 L 78 228 L 62 210 L 55 188 L 62 168 Z",
  maharashtra:
    "M 148 190 L 178 185 L 215 192 L 235 215 L 230 248 L 210 268 L 182 278 L 155 272 L 132 255 L 118 235 L 118 210 Z",
  telangana:
    "M 248 222 L 282 215 L 302 228 L 298 258 L 278 272 L 252 275 L 232 262 L 228 240 Z",
  andhra:
    "M 252 272 L 290 265 L 318 272 L 325 298 L 312 322 L 290 335 L 265 330 L 245 315 L 238 295 Z",
  karnataka:
    "M 155 270 L 192 265 L 228 272 L 242 298 L 238 330 L 218 355 L 192 365 L 165 358 L 145 340 L 138 312 L 142 285 Z",
  goa: "M 138 312 L 150 308 L 155 322 L 142 328 Z",
  kerala:
    "M 162 355 L 182 350 L 195 368 L 195 400 L 185 425 L 170 435 L 155 428 L 148 408 L 150 382 Z",
  tamilnadu:
    "M 218 340 L 252 332 L 275 348 L 278 378 L 265 410 L 242 430 L 218 432 L 195 418 L 192 388 L 200 362 Z",
  andamannicobar: "M 430 285 L 438 280 L 444 295 L 438 310 L 428 305 Z",
  lakshadweep: "M 90 370 L 96 368 L 98 375 L 92 378 Z",
};

const STATE_DOTS: Record<string, { x: number; y: number }> = {
  gujarat: { x: 102, y: 190 },
  rajasthan: { x: 138, y: 142 },
  maharashtra: { x: 178, y: 235 },
  karnataka: { x: 188, y: 318 },
  telangana: { x: 265, y: 248 },
  delhi: { x: 178, y: 114 },
};

export default function IndiaMap({
  projects,
  activeId,
  onStateClick,
}: IndiaMapProps) {
  const projectStateIds = projects.flatMap((p) => p.svgStateId);

  return (
    <div className="relative w-full h-full">
      <svg
        viewBox="0 0 500 490"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
        style={{ filter: "drop-shadow(0 8px 32px rgba(0,0,0,0.08))" }}
      >
        {Object.entries(STATE_PATHS).map(([stateId, path]) => {
          const hasProject = projectStateIds.includes(stateId);
          const project = projects.find((p) => p.svgStateId.includes(stateId));
          const isActive = project?.id === activeId;

          const fill = isActive
            ? "#f97316"
            : hasProject
              ? "#ffffff"
              : "#e8edf2";
          const stroke = isActive
            ? "#ea6c09"
            : hasProject
              ? "#c8d4df"
              : "#d0d8e4";

          return (
            <motion.path
              key={stateId}
              d={path}
              stroke={stroke}
              strokeWidth={hasProject ? 1 : 0.8}
              animate={{ fill }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              onClick={() => {
                if (hasProject && project) onStateClick(project.id);
              }}
              whileHover={
                hasProject ? { fill: isActive ? "#f97316" : "#fff3e8" } : {}
              }
              style={{
                cursor: hasProject ? "pointer" : "default",
                outline: "none",
              }}
            />
          );
        })}

        {projects.map((project) => {
          const dot = STATE_DOTS[project.id];
          if (!dot) return null;
          const isActive = project.id === activeId;

          return (
            <g key={`dot-${project.id}`}>
              <motion.circle
                cx={dot.x}
                cy={dot.y}
                fill="none"
                stroke={isActive ? "#f97316" : "#94a3b8"}
                strokeWidth={1}
                animate={{ r: [5, 11], opacity: [0.7, 0] }}
                transition={{
                  duration: 1.8,
                  repeat: Infinity,
                  ease: "easeOut",
                }}
              />
              <motion.circle
                cx={dot.x}
                cy={dot.y}
                r={3.5}
                stroke="#fff"
                strokeWidth={1.5}
                animate={{ fill: isActive ? "#f97316" : "#64748b" }}
                transition={{ duration: 0.35 }}
                onClick={() => onStateClick(project.id)}
                style={{ cursor: "pointer" }}
              />
            </g>
          );
        })}
      </svg>
    </div>
  );
}
