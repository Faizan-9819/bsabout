import React from "react";

interface CapabilityCard {
  id: string;
  title: string;
  description: string;
  isActive?: boolean;
}

export default function CapabilitiesSection() {
  const capabilities: CapabilityCard[] = [
    // {
    //   id: "01",
    //   title: "Long-Term Thinking",
    //   description:
    //     "Assets held and managed across full capital cycles, with value measured in durability and total return, not exit timing.",
    //   isActive: true,
    // },
    {
      id: "01",
      title: "Long-Term Thinking",
      description:
        "Assets held and managed across full cycles — value measured in durability, not in exit timing.",
      isActive: true,
    },
    // {
    //   id: "02",
    //   title: "Infrastructure-Led Growth",
    //   description:
    //     "Direct exposure to the physical infrastructure underpinning real, demand-backed industrial and logistics activity.",
    // },
    {
      id: "02",
      title: "Infrastructure-Led Growth",
      description:
        "Exposure to the physical infrastructure underpinning real industrial and logistics demand.",
    },
    // {
    //   id: "03",
    //   title: "Development-Led Value Creation",
    //   description:
    //     "Value created at origin through development, so your basis is earned, not paid at acquisition.",
    // },
    {
      id: "03",
      title: "Development-Led Value Creation",
      description:
        "Value created at origin through development, not paid for at acquisition.",
    },
    // {
    //   id: "04",
    //   title: "Institutional Governance",
    //   description:
    //     "Transparent reporting, structured oversight, and independent discipline applied across every asset in the portfolio.",
    // },
    {
      id: "04",
      title: "Institutional Governance",
      description:
        "Transparent reporting, structured oversight, and independent discipline across every asset.",
    },
    // {
    //   id: "05",
    //   title: "Disciplined Capital Allocation",
    //   description:
    //     "Project-specific theses with clear underwriting logic, capital committed selectively rather than deployed for volume.",
    // },
    {
      id: "05",
      title: "Disciplined Capital Allocation",
      description:
        "Project-specific theses with clear logic — capital committed selectively, not deployed for volume.",
    },
    // {
    //   id: "06",
    //   title: "Sustainable Asset Performance",
    //   description:
    //     "ESG-aligned, future-ready assets underwritten for long-term relevance, income resilience, and durable value.",
    // },
    {
      id: "06",
      title: "Sustainable Asset Performance",
      description:
        "ESG-aligned, future-ready assets engineered for long-term relevance and resilience.",
    },
  ];

  return (
    <section className="relative min-h-screen bg-[url('/home/Spotlight/bgspot.webp')] bg-cover bg-center bg-no-repeat text-[#2D3142] py-16 md:py-24 overflow-hidden font-sans">
      <div className="relative z-10 fix flex flex-col gap-8 lg:gap-16">
        {/* Header Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-start">
          <div className="lg:col-span-7 flex flex-col space-y-4">
            {/* Tag Badge */}
            <div className="flex items-center gap-3">
              <span className="w-6 h-[2px] bg-[#1E40AF]"></span>
              <span className="text-xs md:text-[12px] tracking-[0.25em] text-[#1E40AF] font-semibold uppercase">
                Capabilities
              </span>
            </div>

            {/* Main Title */}
            <h2 className="text-[28px] lg:text-[56px] font-bold tracking-[-1.5px] bg-gradient-to-r from-[#BF584F] to-[#F6736A] bg-clip-text text-transparent leading-[110%]">
              How we think <br /> about capital.
            </h2>
          </div>

          {/* Subtext description right aligned on large screens */}
          <div className="lg:col-span-5 lg:pt-12">
            {/* <p className="text-[14px] lg:text-[18px] text-[#54514C] leading-[140%]">
              A disciplined, development-led philosophy, built for durable,{" "}
              <br className="hidden lg:inline-block" />
              risk-adjusted performance rather than speed.
            </p> */}
            <p className="text-[14px] lg:text-[18px] text-[#54514C] leading-[140%]">
              A disciplined, development-led philosophy — built for
              <br className="hidden lg:inline-block" />
              durability, not for speed.
            </p>
          </div>
        </div>

        {/* Content Main Section Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* Left Frame: Large Architectural Facility Render Image */}
          <div className="lg:col-span-5 h-full min-h-[350px] sm:min-h-[450px] lg:min-h-[580px] w-full rounded-2xl overflow-hidden shadow-sm relative">
            <img
              src="/wealth/wcapa.jpg"
              alt="Industrial Warehouse Facility Infrastructure"
              className="w-full h-full object-cover absolute inset-0"
            />
            {/* Decorative Architectural Line Overlay overlay to reflect screenshot composition overlay */}
          </div>

          {/* Right Frame: 2-Column Cards Grid mapping data */}
          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-5">
            {capabilities.map((item) => (
              <div
                key={item.id}
                className="group rounded-2xl p-6 md:p-8 flex flex-col justify-start border lg:min-h-[180px] bg-[#F2EDEE] border-[#F56E6A]  hover:bg-[linear-gradient(to_right,rgba(191,88,79,1),rgba(246,115,106,1))]  hover:border-transparent text-[#2D3142] hover:text-white hover:shadow-md hover:shadow-[#D26158]/20 transition-all duration-800"
              >
                {/* ID Index */}
                <span className="text-xs md:text-[20px] font-semibold tracking-wider mb-2 block text-[#F56E6A] group-hover:text-white transition-colors duration-200">
                  {item.id}
                </span>

                {/* Card Title */}
                <h3 className="text-base md:text-lg font-semibold tracking-tight mb-3 text-[#222] group-hover:text-white transition-colors duration-200">
                  {item.title}
                </h3>

                {/* Card Paragraph Details */}
                <p className="text-[11px] lg:text-[14px] leading-relaxed font-normal text-[#5C6175] group-hover:text-white/90 transition-colors duration-200">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
