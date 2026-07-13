"use client";

import React from "react";
import { ArrowRight } from "lucide-react";

const CARDS = [
  {
    tag: "Industries We Enable",
    image: "/about/exploremore/next1.webp", // Update paths to match your public directory assets
    description:
      "Every industry requires a different infrastructure strategy. BuildSpace creates environments aligned with operational realities and long-term growth.",
    linkText: "Learn More",

    linkUrl: "#",
  },
  {
    tag: "Careers at BuildSpace",
    image: "/about/exploremore/exp2.webp",
    description:
      "Join a team focused on development, execution, and <br/> creating lasting impact.",
    linkText: "Learn More",
    linkUrl: "#",
  },
];

export default function ExploreMore() {
  return (
    <section className="w-full bg-white   py-24 max-lg:pb-16 overflow-hidden z-50">
      {/* Global Width Constraint Framework */}
      <div className="fix w-full flex flex-col">
        {/* Section Heading Group */}
        <div className="flex flex-col mb-[27px]">
          <div className="eyebrow pt-1 text-[#003B9D] text-[12px] font-semibold leading-[3.36px] uppercase mb-[29px]">
            {/* <span className="w-6 h-[2px] bg-orange block"></span> */}
            Next Steps
          </div>

          <h2 className="md:text-[56px] text-[26px] bg-gradient-to-r from-[#BF584F] to-[#F6736A] bg-clip-text text-transparent  font-bold tracking-[-1.568px] leading-[1.1]">
            Explore more of BuildSpace
          </h2>
        </div>

        {/* Flexbox Layout Container Area */}
        <div className="w-full flex flex-row gap-8 max-sm:flex-col max-sm:gap-6">
          {CARDS.map((card, index) => (
            <div
              key={index}
              className="w-[calc(50%-16px)] max-sm:w-full bg-[#FFF] border border-[0.8px] border-[#ECE8E0] rounded-[24px] p-6 max-sm:p-5 flex flex-col justify-between transition-all duration-300  group"
              style={{ boxShadow: "0 0 63px 0 rgba(0, 20, 51, 0.06)" }}
            >
              <div>
                {/* Visual Thumbnail Frame */}
                <div
                  style={{ boxShadow: "0 0 63px 0 rgba(0, 20, 51, 0.06)" }}
                  className="w-full aspect-[16/10] rounded-[16px] overflow-hidden mb-5 md:mb-12 bg-[#eae6df]"
                >
                  <img
                    src={card.image}
                    alt={card.tag}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-102"
                    loading="lazy"
                  />
                </div>

                {/* Info Text Stack */}
                <h3 className="md:text-[27px]  font-bold leading-normal text-[#222] md:mb-10 mb-3 ">
                  {card.tag}
                </h3>

                <p
                  className="text-body font-body text-[#54514C] leading-[var(--lh-body)] md:mb-8 mb-4 max-sm:mb-6 text-[16px]! font-light"
                  dangerouslySetInnerHTML={{ __html: card.description }}
                >
                  {/* {card.description}  */}
                </p>
              </div>

              {/* Action Redirection Anchor */}
              <a
                href={card.linkUrl}
                className="inline-flex items-center gap-2 font-semibold  hover:gap-3 transition-all duration-200 mt-auto w-max text-[#E27244] text-[15.5px]!"
              >
                {card.linkText}
                <ArrowRight size={16} strokeWidth={2} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
