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
      title: "Development Management",
      description:
        "Owner-side oversight of the full mandate — scope, cost, time, and outcome held under single accountability.",
      isActive: true,
    },
    {
      id: "02",
      title: "Land Evaluation & Feasibility",
      description:
        "Corridor, catchment, and connectivity analysis with parcel due diligence to de-risk the location decision.",
    },
    {
      id: "03",
      title: "Master Planning & Engineering",
      description:
        "Process-led design — utilities, circulation, MEP envelope, and structural packages built around operational reality.",
    },
    {
      id: "04",
      title: "Approvals & Statutory Compliance",
      description:
        "Zoning, environmental, and statutory clearances tracked through a live compliance matrix, run parallel to engineering.",
    },
    {
      id: "05",
      title: "Construction & Execution Management",
      description:
        "Multi-contractor execution coordinated under integrated development management — built to spec, time, and budget.",
    },
    {
      id: "06",
      title: "Operational Readiness",
      description:
        "Commissioning, certifications, and fit-out coordination engineered for day-one operations, not just handover.",
    },
  ];

  return (
    <section className="relative w-full min-h-screen bg-[url('/home/Spotlight/bgspot.webp')] bg-cover bg-center bg-no-repeat text-[#2D3142] py-16 md:py-24 overflow-hidden">
      <div className="relative z-10 fix flex flex-col gap-8 lg:gap-16">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row justify-between  gap-6 lg:gap-12 items-center">
          <div className="lg:col-span-7 flex flex-col space-y-4">
            {/* Tag Badge */}
            <div className="flex items-center gap-3">
              <span className="w-6 h-[2px] bg-[#1E40AF]"></span>
              <span className="text-xs md:text-sm tracking-[0.25em] text-[#1E40AF] font-semibold uppercase">
                Capabilities
              </span>
            </div>

            {/* Main Title */}
            <h2 className="text-[28px] lg:text-[56px] font-bold tracking-[-1.5px] bg-gradient-to-r from-[rgba(191,88,79,1)] to-[rgba(246,115,106,1)] bg-clip-text text-transparent leading-[110%]">
              Integrated capability across <br className="hidden 2xl:flex" />{" "}
              the development mandate.{" "}
            </h2>
          </div>
          <p className="text-[18px] text-[#222]">
            One partner, coordinating every discipline that determines <br />{" "}
            whether a facility is delivered — and whether it performs.
          </p>

          {/* Subtext description right aligned on large screens */}
        </div>

        {/* Content Main Section Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* Left Frame: Large Architectural Facility Render Image */}
          <div className="lg:col-span-5 h-full min-h-[350px] sm:min-h-[450px] lg:min-h-[580px] w-full rounded-2xl overflow-hidden shadow-sm relative">
            <img
              src="/infra/lifecycle/infraCap.webp"
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
                className="group rounded-2xl p-6 md:p-8 flex flex-col justify-start  border lg:min-h-[180px] bg-[#F2EDEE] border-[#F56E6A] hover:bg-[linear-gradient(to_right,rgba(191,88,79,1),rgba(246,115,106,1))] hover:border-transparent text-[#2D3142] hover:text-white hover:shadow-md hover:shadow-[#D26158]/20 transition-all duration-800"
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
