import React from "react";

interface CapabilityCard {
  id: string;
  title: string;
  description: string;
  isActive?: boolean;
}

export default function CapabilitiesSection() {
  const capabilities: CapabilityCard[] = [
    {
      id: "01",
      title: "Site Assessment",
      description:
        "We evaluate the land you hold (its physical characteristics, title, and zoning) to establish a clear, confident baseline for what can be developed.",
      isActive: true,
    },
    {
      id: "02",
      title: "Feasibility Analysis",
      description:
        "We confirm what your land can sustainably support: what can be built, at what scale, and what income it can realistically return.",
    },
    {
      id: "03",
      title: "Location Strategy",
      description:
        "We analyse corridor, catchment, and connectivity to position your parcel within real industrial and logistics demand, not assumed demand.",
    },
    {
      id: "04",
      title: "Industrial Positioning",
      description:
        "We define the highest-value use for your land (park, warehousing, manufacturing, ICD, or fulfilment) so it is developed toward its strongest return.",
    },
    {
      id: "05",
      title: "Development Potential",
      description:
        "We master-plan your parcel for scale and future expansion, unlocking its full potential rather than just its immediate footprint.",
    },
    {
      id: "06",
      title: "Market Alignment",
      description:
        "We match the development thesis to occupier demand and capital appetite before you commit, so the asset is built toward income from the start.",
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
              <span className="text-xs md:text-sm tracking-[0.25em] text-[#1E40AF] font-semibold uppercase">
                Capabilities
              </span>
            </div>

            {/* Main Title */}
            <h2 className="text-[28px] lg:text-[56px] font-bold tracking-[-1.5px] bg-gradient-to-r from-[#BF584F] to-[#F6736A] bg-clip-text text-transparent leading-[110%]">
              Reading the land before <br /> developing it.
            </h2>
          </div>

          {/* Subtext description right aligned on large screens */}
          <div className="lg:col-span-5 lg:pt-12">
            <p className="text-[14px] lg:text-[18px] text-[#54514C] leading-[140%]">
              Value is not assumed. It is identified. Activation begins with{" "}
              <br className="hidden lg:inline-block" />
              understanding exactly what your parcel can become.
            </p>
          </div>
        </div>

        {/* Content Main Section Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* Left Frame: Large Architectural Facility Render Image */}
          <div className="lg:col-span-5 h-full min-h-[350px] sm:min-h-[450px] lg:min-h-[580px] w-full rounded-2xl overflow-hidden shadow-sm relative">
            <img
              src="/infra/lifecycle/life1.jpg"
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
                className="group rounded-2xl p-6 md:p-8 flex flex-col justify-start  border lg:min-h-[180px] bg-[#F2EDEE] border-[#F56E6A]  hover:bg-[linear-gradient(to_right,rgba(246,115,106,1),rgba(191,88,79,1))] hover:border-transparent text-[#2D3142] hover:text-white hover:shadow-md hover:shadow-[#D26158]/20 transition-all duration-800"
              >
                {/* ID Index */}
                <span className="text-xs md:text-[20px] font-semibold tracking-wider mb-2 block text-[#F56E6A] group-hover:text-white transition-colors duration-200">
                  {item.id}
                </span>

                {/* Card Title */}
                <h3 className="text-base md:text-lg font-bold tracking-tight mb-3 text-[#2D3142] group-hover:text-white transition-colors duration-200">
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
