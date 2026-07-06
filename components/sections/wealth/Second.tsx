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
      value: "Development-Led ",
      label: "Invest in assets we create, not just acquire",
    },
    {
      id: 2,
      value: "Aligned",
      label: "Shared incentives and institutional governance",
    },
    {
      id: 3,
      value: "Grade-A",
      label: "Institutional-grade industrial & logistics assets",
    },
    {
      id: 4,
      value: "Long-Term",
      label: "Underwritten for durable, risk-adjusted returns",
    },
  ];
  return (
    <>
      <section className="z-10 w-full bg-gradient-to-r from-[#BF584F] to-[#F6736A] py-8 xl:py-7">
        <div
          className="fix grid grid-cols-1 md:grid-cols-2 xl:flex max-w-full"
          style={{
            width: "100%",
            maxWidth: "1280px",
            minHeight: "156px",
            justifyContent: "center",
            alignItems: "flex-start",
          }}
        >
          {statsData.map((box, index) => {
            const isLast = index === statsData.length - 1;
            return (
              <div
                key={box.id}
                className={`flex-1 pt-6 pb-6 xl:py-8 px-4 xl:px-8 flex flex-col justify-between h-full ${
                  !isLast
                    ? "border-b border-white/20 md:border-b-0 xl:border-r border-white/20"
                    : ""
                }`}
              >
                <h2 className="text-[20px] lg:text-[30px] font-bold tracking-tight text-white mb-2">
                  {box.value}
                </h2>
                <p className="text-[11px] tracking-widest text-white/80 pt-4 uppercase font-medium leading-relaxed max-w-[240px]">
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
