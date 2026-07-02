"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { ProjectData } from "/data/project";

interface StateCardProps {
  project: ProjectData;
  isActive: boolean;
  onClick: () => void;
}

export default function StateCard({
  project,
  isActive,
  onClick,
}: StateCardProps) {
  return (
    <motion.div
      layout
      onClick={onClick}
      className="cursor-pointer w-full"
      style={{ originY: 0 }}
    >
      <motion.div
        layout
        className={`
          relative overflow-hidden rounded-xl border transition-colors duration-300
          ${
            isActive
              ? "border-orange-400/60 bg-white shadow-xl shadow-orange-100/40"
              : "border-gray-200/80 bg-white/90 hover:border-orange-200 hover:shadow-md"
          }
        `}
        whileHover={{ scale: isActive ? 1 : 1.01 }}
        transition={{ duration: 0.2 }}
      >
        {/* Header — always visible */}
        <motion.div
          layout
          className="flex items-center justify-between px-4 py-3 gap-3"
        >
          {/* Number circle */}
          <motion.div
            className={`
              flex-shrink-0 w-8 h-8 rounded-full border-2 flex items-center justify-center
              text-xs font-bold tracking-wide transition-colors duration-300
              ${
                isActive
                  ? "border-orange-500 text-orange-600 bg-orange-50"
                  : "border-gray-300 text-gray-500 bg-gray-50"
              }
            `}
          >
            {project.number}
          </motion.div>

          {/* State name */}
          <motion.span
            layout
            className={`flex-1 text-sm font-semibold tracking-wide transition-colors duration-300
              ${isActive ? "text-gray-900" : "text-gray-600"}`}
          >
            {project.stateName}
          </motion.span>

          {/* Arrow — single icon, rotates on open */}
          <motion.div
            animate={{ rotate: isActive ? 180 : 0 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className={`flex-shrink-0 transition-colors duration-300
              ${isActive ? "text-orange-500" : "text-gray-400"}`}
          >
            <ChevronDown size={16} strokeWidth={2.5} />
          </motion.div>
        </motion.div>

        {/* Expanded content */}
        <AnimatePresence initial={false}>
          {isActive && (
            <motion.div
              key="content"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="overflow-hidden"
            >
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                exit={{ scaleX: 0 }}
                transition={{ duration: 0.3 }}
                className="h-px bg-gradient-to-r from-transparent via-orange-200 to-transparent mx-4"
              />

              <div className="p-4 pt-3">
                {/* Image */}
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1, duration: 0.35, ease: "easeOut" }}
                  className="relative w-full h-36 rounded-lg overflow-hidden mb-3"
                >
                  <img
                    src={project.image}
                    alt={project.projectName}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </motion.div>

                {/* Project info */}
                <motion.div
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.18, duration: 0.3, ease: "easeOut" }}
                  className="space-y-2"
                >
                  <p className="text-sm font-bold text-gray-900 leading-tight">
                    {project.projectName}
                  </p>
                  <div className="grid grid-cols-2 gap-x-3 gap-y-1.5">
                    <div>
                      <p className="text-[10px] font-semibold text-gray-400 uppercase tracking-widest">
                        Type
                      </p>
                      <p className="text-xs text-gray-700 font-medium">
                        {project.type}
                      </p>
                    </div>
                    <div>
                      <p className="text-[10px] font-semibold text-gray-400 uppercase tracking-widest">
                        City
                      </p>
                      <p className="text-xs text-gray-700 font-medium">
                        {project.city}
                      </p>
                    </div>
                    <div className="col-span-2">
                      <p className="text-[10px] font-semibold text-gray-400 uppercase tracking-widest">
                        Total Area
                      </p>
                      <p className="text-xs text-gray-700 font-medium">
                        {project.area}
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* CTA */}
                <motion.button
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.28, duration: 0.3, ease: "easeOut" }}
                  className="mt-3 w-full bg-orange-500 hover:bg-orange-600 text-white text-xs
                    font-bold py-2.5 px-4 rounded-lg tracking-wide transition-colors duration-200"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={(e) => e.stopPropagation()}
                >
                  View Details
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
}
