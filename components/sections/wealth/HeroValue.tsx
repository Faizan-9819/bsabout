// import React from "react";

// // Define structure for the statistics data
// interface StatItem {
//   id: number;
//   value: string;
//   label: string;
// }

// export default function BuildSpaceHero() {
//   // Array holding the bottom box content
//   const statsData: StatItem[] = [
//     {
//       id: 1,
//       value: "Retain Ownership",
//       label: "Monetise land without relinquishing it",
//     },
//     {
//       id: 2,
//       value: "Grade-A",
//       label: "Institutional development standards",
//     },
//     {
//       id: 3,
//       value: "100%",
//       label: "Compliance-led development",
//     },
//     {
//       id: 4,
//       value: "50+ yrs",
//       label: "Combined leadership experience",
//     },
//   ];

//   return (
//     <section className="relative w-full min-h-screen bg-neutral-900 text-white font-sans overflow-x-hidden flex flex-col justify-between">
//       <div className="fix">
//         {/* Background Image Container */}
//         <div
//           className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
//           style={{
//             backgroundImage: `
//       linear-gradient(
//         180deg,
//         rgba(0, 20, 51, 0.66) 0%,
//         rgba(0, 20, 51, 0) 20%
//       ),
//       linear-gradient(
//         87deg,
//         rgba(107, 45, 19, 0.92) -13.15%,
//         rgba(98, 41, 18, 0.55) 25.53%,
//         rgba(61, 26, 12, 0.08) 57.37%
//       ),
//       linear-gradient(
//         0deg,
//         rgba(0, 20, 51, 0.9) 0%,
//         rgba(0, 20, 51, 0.15) 38%,
//         rgba(0, 20, 51, 0) 60%
//       ),
//       url("https://images.unsplash.com/photo-1616401784845-180882ba9ba8?auto=format&fit=crop&q=80&w=1920")
//     `,
//           }}
//         />

//         {/* Decorative Large Vertical Text on the Right */}
//         {/* Decorative Vertical Text */}
//         <div className="absolute right-8 lg:-right-50 rotate-270 top-90 -translate-y-1/2 z-10 pointer-events-none select-none">
//           <h2
//             className="text-[120px] font-extrabold leading-[0.82] tracking-[-4px] uppercase text-center"
//             style={{
//               writingMode: "vertical-rl",
//               textOrientation: "mixed",
//               background:
//                 "linear-gradient(180deg, rgba(255, 255, 255, 0.50) 0%, rgba(255, 255, 255, 0.28) 52%, rgba(255, 255, 255, 0.20) 100%)",
//               WebkitBackgroundClip: "text",
//               backgroundClip: "text",
//               WebkitTextFillColor: "transparent",
//             }}
//           >
//             V <br /> A <br />L <br />U <br />E
//           </h2>
//         </div>
//         {/* Header / Navbar Area */}

//         {/* Hero Content Area */}
//         <main className="relative z-10 w-full pt-40 pb-0 flex-grow flex flex-col justify-center items-start">
//           <p className="text-xs md:text-[12px] tracking-[3.12px] font-semibold text-neutral-400 uppercase mb-2 flex items-center gap-2">
//             <span className="w-6 h-[1px] bg-neutral-500 inline-block"></span>
//             BuildVALUE · For Landowners & Asset Holders
//           </p>

//           <h1 className="text-[30px] lg:text-[60px] font-bold tracking-tight leading-[1.1] mb-8">
//             Land holds value.
//             <br className="hidden md:inline" />
//             <span className="font-normal text-neutral-300">
//               Development unlocks it.
//             </span>
//           </h1>

//           <button className="bg-[#D26158] hover:bg-[#bd534b] text-white font-semibold text-[16px] px-6 py-4 flex items-center gap-4 tracking-wide transition-colors group">
//             Explore More
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="h-4 w-4 transform group-hover:translate-y-1 bg-transparent/80 transition-transform"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//               strokeWidth={2}
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 d="M19 14l-7 7m0 0l-7-7m7 7V3"
//               />
//             </svg>
//           </button>
//         </main>
//       </div>{" "}
//       {/* Dynamic Bottom Statistics Boxes Container */}
//     </section>
//   );
// }

// import React from "react";

// // Define structure for the statistics data
// interface StatItem {
//   id: number;
//   value: string;
//   label: string;
// }

// export default function BuildSpaceHero() {
//   // Array holding the bottom box content
//   const statsData: StatItem[] = [
//     {
//       id: 1,
//       value: "Retain Ownership",
//       label: "Monetise land without relinquishing it",
//     },
//     {
//       id: 2,
//       value: "Grade-A",
//       label: "Institutional development standards",
//     },
//     {
//       id: 3,
//       value: "100%",
//       label: "Compliance-led development",
//     },
//     {
//       id: 4,
//       value: "50+ yrs",
//       label: "Combined leadership experience",
//     },
//   ];

//   return (
//     <section className="w-full min-h-screen bg-neutral-900 text-white font-sans overflow-x-hidden flex flex-col justify-between bg-cover bg-center bg-no-repeat plcont bg-[url(/value/hero/herobg.webp)] bg-cover bg-no-repeat">
//       {/* Main Content Row containing Left Hero text and Right Vertical text */}
//       <div className="w-full pt-40 flex-grow flex flex-row justify-between items-center gap-8">
//         {/* Hero Content Area (Left Side) */}
//         <main className="flex flex-col justify-between lg:justify-center items-start">
//           <p className="text-xs md:text-[12px] tracking-[3.12px] font-semibold text-neutral-400 uppercase mb-14 lg:mb-2 flex items-center gap-2">
//             <span className="w-6 h-[1px] bg-neutral-500 inline-block"></span>
//             BuildVALUE · For Landowners & Asset Holders
//           </p>

//           <h1 className="text-[30px] lg:text-[60px] font-bold tracking-tight leading-[1.1] mb-8">
//             Land holds value.
//             <br className="hidden md:inline" />
//             <span className="font-normal text-neutral-300">
//               {" "}
//               Development unlocks it.
//             </span>
//           </h1>

//           <button className="bg-[#D26158] hover:bg-[#bd534b] text-white font-semibold text-[16px] px-6 py-4 flex items-center gap-4 tracking-wide transition-colors group">
//             Explore More
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="h-4 w-4 transform group-hover:translate-y-1 bg-transparent/80 transition-transform"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//               strokeWidth={2}
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 d="M19 14l-7 7m0 0l-7-7m7 7V3"
//               />
//             </svg>
//           </button>
//         </main>

//         {/* Decorative Large Vertical Text (Right Side) */}
//         <div className="hidden md:block pointer-events-none select-none">
//           <h2
//             className="hidden md:flex flex-col items-center text-[120px] font-extrabold leading-[0.82] tracking-[-4px] uppercase select-none pointer-events-none"
//             style={{
//               background:
//                 "linear-gradient(180deg, rgba(255, 255, 255, 0.50) 0%, rgba(255, 255, 255, 0.28) 52%, rgba(255, 255, 255, 0.20) 100%)",
//               WebkitBackgroundClip: "text",
//               backgroundClip: "text",
//               WebkitTextFillColor: "transparent",
//             }}
//           >
//             <span>V</span>
//             <span>A</span>
//             <span>L</span>
//             <span>U</span>
//             <span>E</span>
//           </h2>
//         </div>
//       </div>

//       {/* Dynamic Bottom Statistics Boxes Container (Placeholder for data rendering) */}
//       <div className="pb-12">{/* Map statsData here if needed */}</div>
//     </section>
//   );
// }

import React from "react";

// Define structure for the statistics data
interface StatItem {
  id: number;
  value: string;
  label: string;
}

export default function BuildSpaceHero() {
  // Array holding the bottom box content
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
    <section className="w-full min-h-screen bg-neutral-900 text-white font-sans overflow-x-hidden flex flex-col justify-between bg-cover bg-center bg-no-repeat plcont bg-[url(/wealth/wealth.webp)] bg-cover bg-no-repeat">
      {/* Main Content Row containing Left Hero text and Right/Bottom text */}
      <div className="w-full pt-2 flex-grow flex flex-col md:flex-row justify-end lg:justify-between items-start md:items-center gap-8 md:gap-8">
        {/* Hero Content Area (Left Side) */}
        <main className="flex flex-col justify-between lg:justify-center lg:mt-0 mt-2 pb-20 items-start">
          <p className="text-xs md:text-[12px] tracking-[3.12px] font-semibold text-neutral-400 uppercase mb-4 lg:mb-8 flex items-center gap-2">
            <span className="w-6 h-[1px] bg-[#a1a1a1] inline-block"></span>
            BuildWEALTH · For Investors & Capital Partners
          </p>

          <h1 className="text-[30px] lg:text-[60px] font-bold tracking-tight leading-[1.1] mb-8">
            Capital, aligned with
            <br className="hidden md:inline" />
            <span className="font-thin text-[rgba(255,255,255,0.82)]">
              {" "}
              industrial infrastructure.
            </span>
          </h1>

          <button className="bg-gradient-to-r from-[#BF584F] to-[#F6736A] cursor-pointer hover:bg-[#bd534b] text-white font-semibold text-[16px] px-6 py-4 flex items-center gap-4 tracking-wide transition-colors group">
            Explore More
            <span className="w-7 h-7 rounded bg-[#fff]/10 text-[#fff] flex items-center justify-center transform group-hover:translate-x-1 rotate-90 transition-transform duration-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2.5}
                stroke="currentColor"
                className="w-3 h-3"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                />
              </svg>
            </span>
          </button>
        </main>

        {/* Decorative Large Text (Right Side on Desktop / Horizontal at Bottom on Mobile) */}
        <div className="pointer-events-none select-none w-full md:w-auto flex justify-start md:justify-end">
          <h2
            className="flex flex-row md:flex-col items-center text-[64px] sm:text-[80px] md:text-[120px] font-extrabold leading-none md:leading-[0.82] tracking-normal md:tracking-[-4px] uppercase select-none pointer-events-none"
            style={{
              background:
                "linear-gradient(180deg, rgba(255, 255, 255, 0.50) 0%, rgba(255, 255, 255, 0.28) 52%, rgba(255, 255, 255, 0.20) 100%)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            <span>W</span>
            <span>E</span>
            <span>A</span>
            <span>L</span>
            <span>T</span>
            <span>H</span>
          </h2>
        </div>
      </div>

      {/* Dynamic Bottom Statistics Boxes Container (Placeholder for data rendering) */}
      <div className="pb-12">{/* Map statsData here if needed */}</div>
    </section>
  );
}
