import React from "react";
import { Sector } from "@/app/types/sector";

interface SectorSectionProps {
  sector: Sector;
  reverse: boolean;
}

export const SectorSection: React.FC<SectorSectionProps> = ({
  sector,
  reverse,
}) => {
  const {
    id,
    title,
    subtitleOne,
    descriptionOne,
    subtitleTwo,
    descriptionTwo,
    image,
  } = sector;

  return (
    <section id={id} className="w-full py-10 last:border-0 scroll-mt-[100px]">
      <div
        className={`flex flex-col gap-6 md:gap-[29px] justify-between items-stretch w-full ${
          reverse ? "md:flex-row-reverse" : "md:flex-row"
        }`}
      >
        {/* Image — stretches to content height, no fixed height */}
        <div className="w-full md:w-[408px] lg:w-[408px] shrink-0 overflow-hidden rounded-lg bg-neutral-100">
          <img
            src={image}
            alt={`${title} facility`}
            loading="lazy"
            className="w-full h-full object-cover min-h-[220px]"
          />
        </div>

        {/* Content */}
        <div className="flex-1 flex flex-col justify-center py-2 ">
          <h2 className="text-2xl md:text-[32px] font-bold tracking-[-1.568px] leading-[1.1] mb-3 bg-gradient-to-r from-[#BF584F] to-[#F6736A] bg-clip-text text-transparent">
            {title}
          </h2>

          <div className="flex flex-col gap-4">
            <div>
              <h3 className="text-[14px] xl:text-[18px] leading-[1.4] font-semibold text-[#54514C] mb-1">
                {subtitleOne}
              </h3>
              <p className="text-[13px] xl:text-[16px] leading-[1.4] text-neutral-500">
                {descriptionOne}
              </p>
            </div>
            <div>
              <h3 className="text-[14px] xl:text-[18px] leading-[1.4] font-semibold text-[#54514C] mb-1">
                {subtitleTwo}
              </h3>
              <p className="text-[13px] xl:text-[16px] leading-[1.4] text-neutral-500">
                {descriptionTwo}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
