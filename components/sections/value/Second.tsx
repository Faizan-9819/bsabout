import React from "react";

interface StatItem {
  id: number;
  value: string;
  label: string;
}

const Second = () => {
  const statsData: StatItem[] = [
    {
      id: 1,
      value: "Retain Ownership",
      label: "Monetise land without relinquishing it",
    },
    {
      id: 2,
      value: "Grade-A",
      label: "Institutional development standards",
    },
    {
      id: 3,
      value: "100%",
      label: "Compliance-led development",
    },
    {
      id: 4,
      value: "50+ yrs",
      label: "Combined leadership experience",
    },
  ];
  return (
    <>
      <section className="z-10 bg-gradient-to-r from-[#BF584F] to-[#F6736A] py-8 xl:py-7">
        <div className="fix grid grid-cols-1 md:grid-cols-2 xl:flex">
          {statsData.map((box, index) => {
            const isLast = index === statsData.length - 1;
            return (
              <div
                key={box.id}
                className={`flex-1 pt-6 pb-6 first:border-l first:border-white/20 xl:py-8 px-4 xl:px-8 flex flex-col justify-between h-full ${
                  !isLast
                    ? "border-b border-white/20 md:border-b-0 xl:border-r border-white/20"
                    : ""
                }`}
              >
                <h2 className="text-[20px] lg:text-[30px] font-bold tracking-tight text-white mb-2">
                  {box.value}
                </h2>
                <p className="text-[11px] tracking-[2.4px] text-white/80 pt-4 uppercase font-medium leading-relaxed max-w-[260px]">
                  {box.label}
                </p>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Second;
