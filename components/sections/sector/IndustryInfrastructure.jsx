import React from "react";
import { motion } from "framer-motion";

export default function IndustryInfrastructure() {
  return (
    <section className="bg-white  py-[50px] md:py-[80px]">
      {/* Container with standard Tailwind responsive max-widths and margins */}
      <div className="fix">
        {/* Flex container: Column on mobile, Row on large screens */}
        <div className="flex flex-col gap-3 lg:flex-row lg:gap-10 items-start">
          {/* Left Column (Heading Section) */}
          <div className="w-full lg:w-[50%] flex-shrink-0">
            <div className="flex items-center gap-3">
              {/* Decorative line */}
              <div className="eyebrow text-[#003B9D] text-[12px] font-semibold leading-[3.36px] uppercase mb-4">
                {/* <span className="w-6 h-[2px] bg-orange block"></span> */}
                Industries We Develop For
              </div>
            </div>

            <h2
              className="font-bold leading-[1.1] tracking-[-1.6px] md:text-[50px] text-[26px]"
              //   style={{ fontSize: "clamp(28px, 4vw, 56px)" }}
            >
              <span className="bg-gradient-to-r from-[#BF584F] to-[#F6736A] bg-clip-text text-transparent">
                Infrastructure built
              </span>
              <br />
              <span className="bg-gradient-to-r from-[#BF584F] to-[#F6736A] bg-clip-text text-transparent">
                around the realities of
              </span>
              <br />
              <span className="bg-gradient-to-r from-[#BF584F] to-[#F6736A] bg-clip-text text-transparent">
                each industry.
              </span>
            </h2>
          </div>

          {/* Right Column (Paragraphs Section) */}
          <div className="flex flex-col max-w-[610px]  gap-[10px] pt-2 w-full lg:w-1/2">
            <p className="text-[#54514C] text-[16px] lg:text-[18px] font-normal leading-[1.4]">
              Industrial infrastructure is not a single asset class. A
              manufacturing plant, a fulfilment centre, an inland container
              depot, and a hyperscale data centre may all begin as land and
              structure, but each is governed by entirely different operational
              logic, compliance demands, utility loads, and growth horizons.
            </p>
            <p className="text-[#54514c] text-[16px] lg:text-[18px] font-normal leading-[1.4]">
              BuildSpace develops across the full spectrum of industrial and
              logistics infrastructure, with the sector-specific understanding
              to plan each development around how the business will actually
              operate. The difference between a facility that performs and one
              that constrains is rarely the building itself. It is whether the
              development was shaped around the right location, the right
              specification, and the right capacity for what comes next.
            </p>
            <p className="text-[#54514c] text-[16px] lg:text-[18px] font-normal leading-[1.4]">
              That is the discipline BuildSpace brings to every sector it
              serves: industry-specific planning, integrated development
              management, and infrastructure engineered to be operationally
              efficient, scalable, compliant, and ready for long-term growth.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
