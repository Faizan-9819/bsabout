import React from "react";

const Hero = () => {
  return (
    <section
      style={{ backgroundImage: "url('/career/career_bg1.jpg')" }}
      className="relative w-full inset-0 bg-cover bg-center bg-no-repeat min-h-screen md:h-[100vh] flex items-center overflow-hidden"
    >
      {/* Background Image Layer */}
      <div className="absolute " />

      {/* Content Container */}
      <div className="relative w-full fix z-10">
        <div className="flex flex-col items-start max-w-xl">
          {/* Subheading / Label */}
          <div className="flex items-center gap-3 mb-2 md:mb-4">
            <span className="w-6 h-[1px] bg-white/60" />
            <span className="text-xs md:text-[12px] font-semibold tracking-[3px] text-[rgba(255,255,255,0.56)] uppercase">
              Industries we cater
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl lg:text-[52px] font-bold text-white tracking-tight">
            Sectors.{" "}
          </h1>
        </div>
        <button className="bg-[#D26158] hover:bg-[#bd534b] mt-10 text-white font-medium text-sm px-6 py-4 flex items-center gap-4 tracking-wide transition-colors group">
          Explore More
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 transform group-hover:translate-y-1 transition-transform"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </button>
      </div>
    </section>
  );
};

export default Hero;
