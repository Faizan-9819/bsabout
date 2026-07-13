import React, { FC } from "react";

const ProofAndScale: FC = () => {
  return (
    <section className="w-full min-h-screen bg-gradient-to-r from-[#BF584F] to-[#F6736A] flex items-center py-16 lg:py-0">
      <div className="fix flex flex-col justify-stretch lg:flex-row gap-12 lg:gap-16 items-start">
        {/* Left Side: Typography Content */}
        <div className="w-full lg:w-1/2 text-white space-y-6 md:space-y-7">
          <div>
            {/* Top Label */}
            {/* <div className="flex items-center gap-3 mb-3 md:mb-4">
              <span className="w-6 h-[1px] bg-white/60" />
              <span className="text-xs md:text-[12px] pb-2 font-semibold tracking-[3px] text-white/90 uppercase">
                Proof & Scale
              </span>
            </div> */}

            {/* Heading */}
            <h2 className="text-[20px] pb-6 md:text-[28px] font-bold tracking-tight leading-tight max-w-2xl">
              Building the Future of Industrial Infrastructure
            </h2>
            <div className="lg:w-[80%] 2xl:w-[75%] w-full h-[1px] bg-white" />
          </div>

          {/* Body Paragraphs */}
          <div className="space-y-6 text-sm md:text-base text-white leading-relaxed 2xl:max-w-[85%]">
            <p>
              At BuildSpace, we are building more than industrial and logistics{" "}
              infrastructure. We are building a platform driven by long-term
              thinking, disciplined execution, and ambitious growth.
            </p>
            <p>
              As we expand across India's key industrial corridors, we are
              always looking for talented people who bring strong expertise, a
              sense of ownership, and a growth mindset. Whether your strength is
              in development, operations, strategy, leasing, or execution, we
              believe great infrastructure is built by great teams.
            </p>
            <p>
              If you want to do work that lasts, on assets that shape how the
              country manufactures, stores, and moves goods, there is a place
              for you here.
            </p>
          </div>
        </div>

        {/* Right Side: Showcase Image Card */}
        <div className="w-full lg:w-[50%] flex items-center justify-center">
          <div className="relative w-full aspect-[4/3] lg:h-[500px] overflow-hidden rounded-sm">
            <img
              src="/career/career2.webp"
              alt="Industrial Infrastructure Professional Future"
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProofAndScale;
