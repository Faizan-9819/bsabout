import React, { FC } from "react";

const ProofAndScale: FC = () => {
  return (
    <section className="w-full min-h-screen bg-gradient-to-r from-[#BF584F] to-[#F6736A] flex items-center py-16 lg:py-0">
      <div className="fix flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
        {/* Left Side: Typography Content */}
        <div className="w-full lg:w-1/2 text-white space-y-6 md:space-y-7">
          <div>
            {/* Top Label */}
            <div className="flex items-center gap-3 mb-3 md:mb-4">
              <span className="w-6 h-[1px] bg-white/60" />
              <span className="text-xs md:text-[12px] pb-2 font-semibold tracking-[3px] text-white/90 uppercase">
                Proof & Scale
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-[20px] pb-6 md:text-[28px] font-bold tracking-tight leading-tight max-w-2xl">
              Building the Future of Industrial Infrastructure
            </h2>
            <div className="lg:w-[70%] w-full h-[1px] bg-white" />
          </div>

          {/* Body Paragraphs */}
          <div className="space-y-6 text-sm md:text-base text-white font-light leading-relaxed max-w-3xl">
            <p>
              At Build Space Industrial Parks, we are building more than
              industrial and <br className="hidden lg:inline-block" /> logistics
              infrastructure — we are building a platform driven by long-term{" "}
              <br className="hidden lg:inline-block" />
              thinking, disciplined execution, and ambitious growth.
            </p>
            <p>
              As we continue to expand across key industrial corridors in India,
              we are <br className="hidden lg:inline-block" /> always looking
              for talented individuals who bring strong expertise,
              <br className="hidden lg:inline-block" /> ownership, and a growth
              mindset to the table. Whether in development,
              <br className="hidden lg:inline-block" /> operations, strategy,
              leasing, or execution, we believe great infrastructure is
              <br className="hidden lg:inline-block" /> built by great teams.
            </p>
            <p>
              As we continue to expand across key industrial corridors in India,
              we are
              <br className="hidden lg:inline-block" /> always looking for
              talented individuals who bring strong expertise,
              <br className="hidden lg:inline-block" /> ownership, and a growth
              mindset to the table. Whether in development,
              <br className="hidden lg:inline-block" /> operations, strategy,
              leasing, or execution, we believe great infrastructure is
              <br className="hidden lg:inline-block" /> built by great teams.
            </p>
          </div>
        </div>

        {/* Right Side: Showcase Image Card */}
        <div className="w-full lg:w-1/2 flex items-center justify-center">
          <div className="relative w-full aspect-[4/3] lg:h-[500px] overflow-hidden rounded-sm">
            <img
              src="/career/proof.jpg"
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
