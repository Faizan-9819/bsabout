"use client";

import { ArrowUpRight, ArrowRight } from "lucide-react";

interface BtnProps {
  label?: string;
  onClick?: () => void;
  className?: string;
  variant?: "solid" | "ghost" | "outline";
  icon?: "arrow-right" | "arrow-up-right" | "none";
}

export default function Btn({
  label = "Learn More",
  onClick,
  className = "",
  variant = "solid",
  icon = "arrow-right",
}: BtnProps) {
  if (variant === "ghost") {
    return (
      <button onClick={onClick} className={`btn-ghost-bs ${className}`}>
        {label}
        {icon !== "none" && (
          <span className="w-4 h-4 flex items-center justify-center">
            <ArrowRight size={15} strokeWidth={2} />
          </span>
        )}
      </button>
    );
  }

  if (variant === "outline") {
    return (
      <button
        onClick={onClick}
        className={`inline-flex items-center gap-3 px-6 py-3 border border-current font-semibold text-sm tracking-tight transition-opacity hover:opacity-75 ${className}`}
      >
        {label}
        {icon !== "none" && <ArrowRight size={15} strokeWidth={2} />}
      </button>
    );
  }

  return (
    <button onClick={onClick} className={`btn-bs ${className}`}>
      {label}
      {icon !== "none" && (
        <span className="btn-arrow">
          {icon === "arrow-up-right" ? (
            <ArrowUpRight size={16} strokeWidth={2} />
          ) : (
            <ArrowRight size={16} strokeWidth={2} />
          )}
        </span>
      )}
    </button>
  );
}
