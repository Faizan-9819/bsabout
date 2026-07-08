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
      title: "Unlocking Land Potential",
      description:
        "Your underperforming parcel becomes a Grade-A, income-producing industrial or logistics asset, working for you rather than sitting idle.",
    },
    {
      id: 2,
      title: "Retain Ownership",
      description:
        "You monetise through development, not disposal, keeping ownership while earning from the income and value uplift your land creates.",
    },
    {
      id: 3,
      title: "Development Expertise",
      description:
        "Founder-led capability across master planning, engineering, and development of large-scale industrial and warehousing infrastructure, applied directly to your land.",
    },
    {
      id: 4,
      title: "Risk Reduction",
      description:
        "We manage the development for you, with proactive compliance and transparent governance, so you carry none of the risk of doing it alone.",
    },
    {
      id: 5,
      title: "Industrial & Logistics Focus",
      description:
        "A dedicated single-vertical platform with real depth in the asset classes that define industrial growth, not diluted diversification.",
    },
    {
      id: 6,
      title: "Long-Term Value Creation",
      description:
        "Institutional thinking applied to your land, with an asset thesis that holds and compounds across the cycle.",
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
            src="/value/why/whyus.jpg"
            alt="Hand pointing choosing right option workflow"
            className="w-full h-full object-cover absolute inset-0"
          />
        </div>

        {/* Right Column */}
        <div className="lg:col-span-6 flex flex-col justify-between h-full">
          <div className="flex flex-col space-y-4 mb-4 lg:mb-0">
            <div className="flex items-center gap-3">
              <span className="w-6 h-[2px] bg-[#003B9D]"></span>
              <span className="text-xs md:text-[12px] tracking-[3.3px] text-[#003B9D] font-semibold uppercase">
                why BUILDVALUE{" "}
              </span>
            </div>

            <h2 className="text-[34px] md:text-[56px] bg-gradient-to-r from-[#BF584F] to-[#F6736A] bg-clip-text text-transparent font-bold tracking-[-1.56px] pb-2 leading-[110%]">
              Why landowners <br />
              partner with <br /> BuildVALUE.
            </h2>

            <p className="text-[16px] lg:text-[20px] text-[#222] leading-[140%] pb-4 lg:pb-8 font-normal">
              The difference is in retaining control while gaining a <br />{" "}
              developer's capability, capital, and discipline.
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
                    className="w-full flex justify-between items-center cursor-pointer lg:min-h-[88px] py-5 text-left transition-colors duration-200 group focus:outline-none"
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
                          className="leading-relaxed text-[15px] lg:text-[18px] lg:w-[78%] lg:h-[88px] font-normal"
                          style={{
                            color: "#54514C",
                          }}
                        >
                          {item.description}
                          {/* hdjhd */}
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
