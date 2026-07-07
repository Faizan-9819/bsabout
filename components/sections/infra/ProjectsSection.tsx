import React from "react";

export default function ProjectsSection() {
  return (
    <section className="relative min-h-screen bg-[#F2F4F5] text-[#2D3142] py-16 md:py-24 overflow-hidden font-sans flex flex-col justify-center">
      {/* Subtle Abstract Wave Topography Background Layer */}
      <div className="absolute inset-0 opacity-40 pointer-events-none mix-blend-multiply select-none z-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 800"
          fill="none"
          stroke="#D1D5DB"
          strokeWidth="1"
        >
          <path d="M-100,200 Q300,50 700,300 T1600,100" />
          <path d="M-100,250 Q350,100 750,350 T1600,150" />
          <path d="M-100,300 Q400,150 800,400 T1600,200" />
          <path d="M-100,350 Q450,200 850,450 T1600,250" />
        </svg>
      </div>

      <div className="relative z-10 fix flex flex-col gap-8 md:gap-14">
        {/* Header Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-12 items-end">
          <div className="lg:col-span-7 flex flex-col space-y-4">
            {/* Subsection Subtitle Tag */}
            <div className="flex items-center gap-3">
              <span className="w-6 h-[2px] bg-[#1E40AF]"></span>
              <span className="text-xs md:text-sm tracking-[0.25em] text-[#1E40AF] font-bold uppercase">
                Projects
              </span>
            </div>

            {/* Main Heading with requested Linear Gradient */}
            <h2
              className="text-4xl sm:text-5xl md:text-[56px] font-bold tracking-tight bg-clip-text text-transparent pb-1 leading-[1.15]"
              style={{
                backgroundImage:
                  "linear-gradient(to right, rgba(191, 88, 79, 1), rgba(246, 115, 106, 1))",
              }}
            >
              Proof in delivery.
            </h2>
          </div>

          {/* Right-aligned Subdescription text */}
          <div className="lg:col-span-5 lg:text-right lg:pb-2">
            <p className="text-[16px] md:text-[20px] text-[#222] font-normal">
              Selected developments — curated, not catalogued.
            </p>
          </div>
        </div>

        {/* Project Card Showcase */}
        <div className="w-full bg-white rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.03)] p-6 md:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Card Left: Project Thumbnail Image */}
          <div className="lg:col-span-5 w-full aspect-[16/10] sm:aspect-[16/9] lg:h-[340px] rounded-xl overflow-hidden relative">
            <img
              src="/log1.webp"
              alt="Sahakar Logistics Park Construction Site Supervisor"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Card Right: Detailed Description Content */}
          <div className="lg:col-span-7 flex flex-col justify-center items-start gap-y-6 lg:gap-y-15 lg:pr-6">
            {/* Branding Sublabel */}
            <div className="flex items-center gap-2 text-xs md:text-[18px] font-bold tracking-[0.15em] text-[#BDB9B1] uppercase">
              {/* Simple stylized SVG factory/warehouse logo icon */}
              <img src="/home/Spotlight/spotlight1.svg" alt="" />
              <span>Sahakar Logistics</span>
            </div>
            <div>
              {/* Case Study Project Name */}
              <h3 className="text-[15px] md:text-[19px] font-bold mb-2 lg:mb-4 tracking-tight text-[#003B9D]">
                Sahakar Logistics Park - Bhiwandi, Mumbai
              </h3>

              {/* Paragraph Text Description */}
              <p className="text-sm md:text-base text-[#5C6175] leading-relaxed max-w-xl font-normal">
                42-acre Grade-A logistics park, master-planned and delivered end
                to end <br /> through integrated development management.
              </p>
            </div>

            {/* Explicit Action Call Anchor */}
            <a
              href="#case-study"
              className="inline-flex items-center gap-3 text-xs md:text-sm font-bold text-[#0038A8] hover:text-[#002673] group transition-colors pt-2"
            >
              <span>View Case Study</span>
              <span className="w-7 h-7 bg-[#0038A8] group-hover:bg-[#002673] text-white rounded-full flex items-center justify-center transition-colors">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2.5}
                  stroke="currentColor"
                  className="w-3 h-3 transform rotate-45"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 10.5L12 3m0 0l7.5 7.5M12 3v18"
                  />
                </svg>
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
