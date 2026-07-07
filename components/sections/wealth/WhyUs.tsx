"use client";
import React, { useState } from "react";

interface AccordionItem {
  id: number;
  title: string;
  description: string;
}

export default function WhyUsAccordion() {
  const [openId, setOpenId] = useState<number>(4);

  const accordionData: AccordionItem[] = [
    {
      id: 1,
      title: "Development Opportunities",
      description:
        "Participate from the development stage and share in the value created as land becomes a Grade-A asset, entering at a basis earned rather than paid at market.",
    },
    {
      id: 2,
      title: "Industrial Infrastructure Assets",
      description:
        "Take direct exposure to stabilised, income-producing industrial and logistics assets, developed to institutional standards and held for durable yield.",
    },
    {
      id: 3,
      title: "Strategic Partnerships",
      description:
        "Long-term capital partnerships built on a shared asset thesis, aligned incentives, and an institutional governance framework.",
    },
    {
      id: 4,
      title: "Co-Development Opportunities",
      description:
        "Participate alongside BuildSpace and landowners in creating new assets, capturing development value from the ground up.",
    },
    {
      id: 5,
      title: "Long-Term Asset Platforms",
      description:
        "Scaled, multi-asset participation as the BuildSpace portfolio compounds across corridors and asset classes over the cycle.",
    },
  ];

  const selectAccordion = (id: number) => {
    if (openId !== id) {
      setOpenId(id);
    }
  };

  return (
    <section className="bg-white text-[#222222] py-16 lg:py-20">
      <div className="fix grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch">
        {/* Left Column */}
        <div className="lg:col-span-6 w-full h-[350px] lg:min-h-[450px] lg:h-full rounded-2xl overflow-hidden relative">
          <img
            src="/wealth/whyW.webp"
            alt="Hand pointing choosing right option workflow"
            className="w-full h-full object-cover absolute inset-0"
          />
        </div>

        {/* Right Column */}
        <div className="lg:col-span-6 flex flex-col justify-between h-full">
          <div className="flex flex-col space-y-4 mb-4 lg:mb-0">
            <div className="flex items-center gap-3">
              <span className="w-6 h-[2px] bg-[#1E40AF]"></span>
              <span className="text-xs md:text-[12px] tracking-[3px] text-[#1E40AF] font-semibold uppercase">
                why BUILDWEALTH{" "}
              </span>
            </div>

            <h2 className="text-[34px] md:text-[56px] bg-gradient-to-r from-[#BF584F] to-[#F6736A] bg-clip-text text-transparent font-bold tracking-[-1.56px] pb-2 leading-[110%]">
              Ways to <br className="hidden lg:inline-block" /> participate.
            </h2>

            <p className="text-[16px] lg:text-[20px] text-[#222] leading-[140%] pb-4 lg:pb-8 font-normal">
              Partnership over product: structured participation in the
              <br className="hidden lg:inline-block" /> assets BuildSpace
              develops and stewards.
            </p>
          </div>

          {/* Accordion Container */}
          <div className="w-full border-t border-neutral-200 flex flex-col justify-end">
            {accordionData.map((item) => {
              const isOpen = openId === item.id;

              return (
                <div
                  key={item.id}
                  className="border-b first:border-t-none! last:border-none! border-neutral-200 w-full"
                >
                  <button
                    onClick={() => selectAccordion(item.id)}
                    className="w-full flex justify-between cursor-pointer items-center lg:min-h-[88px] py-5 text-left transition-colors duration-200 group focus:outline-none"
                  >
                    <span
                      className="text-[18px] lg:text-[20px] tracking-tight pr-4 select-none transition-colors duration-300"
                      style={{
                        color: isOpen ? "#F56E6A" : "#222",
                      }}
                    >
                      {item.title}
                    </span>

                    <div
                      className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                        isOpen
                          ? "bg-[#0038A8] text-white rotate-180"
                          : "bg-[#0038A8] text-white group-hover:bg-[#002673]"
                      }`}
                    >
                      {isOpen ? (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={3}
                          stroke="currentColor"
                          className="w-3.5 h-3.5"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19.5 12h-15"
                          />
                        </svg>
                      ) : (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={3}
                          stroke="currentColor"
                          className="w-3.5 h-3.5"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 4.5v15m7.5-7.5h-15"
                          />
                        </svg>
                      )}
                    </div>
                  </button>

                  {/* Dynamic height container — single synced timing, no delay mismatch */}
                  <div
                    className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${
                      isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div
                        className={`transition-opacity duration-300 ease-in-out pb-5 min-h-[90px] ${
                          isOpen ? "opacity-100" : "opacity-0"
                        }`}
                      >
                        <p
                          className="leading-relaxed text-[15px] lg:text-[18px] lg:h-[88px] font-normal"
                          style={{
                            color: "#54514C",
                          }}
                        >
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
