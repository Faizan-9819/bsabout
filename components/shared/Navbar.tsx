// "use client";

// import { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import { FiChevronDown } from "react-icons/fi";

// const logo =
//   "https://www.figma.com/api/mcp/asset/35b17058-cb11-451c-81a0-c92a5474e56d";

// const H_CLOSED = 104;
// const H_OPEN = 205;
// const H_DROPDOWN = 438;

// const projectStates = [
//   { name: "Maharashtra", cities: ["Chakan", "Nagpur", "Pune", "Bhiwandi"] },
//   { name: "Gujarat", cities: ["Sanand"] },
//   { name: "Tamil Nadu", cities: ["Hosur"] },
//   { name: "Uttar Pradesh", cities: ["Dadri"] },
//   { name: "Andhra Pradesh", cities: ["Gujarat"] },
//   { name: "Tamil Nadu", cities: ["Sri City"] },
// ];

// const projectImg =
//   "https://www.figma.com/api/mcp/asset/6d133426-d132-4865-9a5b-1c60b83a969f";

// const ease = [0.76, 0, 0.24, 1] as const;

// export default function Navbar() {
//   const [open, setOpen] = useState(false);
//   const [projectsOpen, setProjectsOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const onScroll = () => setScrolled(window.scrollY > 20);
//     window.addEventListener("scroll", onScroll, { passive: true });
//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);

//   useEffect(() => {
//     if (!open) setProjectsOpen(false);
//   }, [open]);

//   const isWhite = open || scrolled;
//   const targetH = open ? (projectsOpen ? H_DROPDOWN : H_OPEN) : H_CLOSED;

//   return (
//     <motion.header
//       className="fixed top-0 left-5 right-5 z-50 overflow-hidden"
//       animate={{
//         height: targetH,
//         backgroundColor: isWhite ? "#ffffff" : "rgba(0,0,0,0)",
//       }}
//       transition={{
//         height: { duration: 0.55, ease },
//         backgroundColor: { duration: 0.4, ease: [0.4, 0, 0.2, 1] },
//       }}
//     >
//       {/* ─── Row 1: Logo + Menu/Close — always visible ─── */}
//       <div className="fix flex items-center justify-between h-[104px]">
//         <a href="/" aria-label="BuildSpace home">
//           <img
//             src={logo}
//             alt="BuildSpace"
//             className="h-11 w-auto transition-[filter] duration-400 ease-out"
//             style={{
//               filter: isWhite ? "invert(1)" : "none",
//             }}
//           />
//         </a>

//         <button
//           onClick={() => setOpen((v) => !v)}
//           className="flex items-center gap-3 bg-white pl-[22px] pr-2 py-2 text-[#001b49] font-semibold text-[14.5px] tracking-tight hover:opacity-80 transition-opacity"
//           aria-label="Toggle menu"
//         >
//           {open ? "Close" : "Menu"}
//           {/* Animated 2-line hamburger → X */}
//           <span className="w-8 h-8 rounded-full bg-[#001b49] flex items-center justify-center shrink-0">
//             <span className="relative flex flex-col items-center justify-center w-[15px] h-[15px]">
//               <motion.span
//                 animate={open ? { rotate: 45, y: 0 } : { rotate: 0, y: -4 }}
//                 transition={{ duration: 0.3, ease }}
//                 className="absolute w-[15px] h-[1.8px] bg-white rounded-[2px]"
//               />
//               <motion.span
//                 animate={open ? { rotate: -45, y: 0 } : { rotate: 0, y: 4 }}
//                 transition={{ duration: 0.3, ease }}
//                 className="absolute w-[15px] h-[1.8px] bg-white rounded-[2px]"
//               />
//             </span>
//           </span>
//         </button>
//       </div>

//       {/* ─── Divider — single line between logo row and nav row ─── */}
//       <div className="h-px bg-[rgba(0,0,0,0.08)]" />

//       {/* ─── Row 2: Nav links — occupies H_OPEN - H_CLOSED - 1px ─── */}
//       <motion.div
//         className="fix flex items-center justify-between h-[100px]"
//         animate={{ opacity: open ? 1 : 0 }}
//         transition={{ duration: 0.3, delay: open ? 0.18 : 0 }}
//       >
//         {/* About — active/underlined in Figma */}
//         <div className="relative flex flex-col items-start py-1">
//           <a
//             href="#about"
//             onClick={() => setOpen(false)}
//             className="text-[24px] font-medium text-[#f56e6a] tracking-[-0.15px] whitespace-nowrap"
//           >
//             About
//           </a>
//           <div className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#f56e6a]" />
//         </div>

//         {(["Solutions", "Approach", "Sectors"] as const).map((label) => (
//           <a
//             key={label}
//             href={`#${label.toLowerCase()}`}
//             onClick={() => setOpen(false)}
//             className="text-[24px] font-medium text-[#909090] tracking-[-0.15px] whitespace-nowrap hover:text-[#212121] transition-colors"
//           >
//             {label}
//           </a>
//         ))}

//         {/* Projects with rotating chevron */}
//         <button
//           onClick={() => setProjectsOpen((v) => !v)}
//           className="bg-none border-none py-1 cursor-pointer flex items-center gap-0.5 text-[24px] font-medium tracking-[-0.15px] whitespace-nowrap relative transition-colors"
//           style={{ color: projectsOpen ? "#f56e6a" : "#909090" }}
//         >
//           Projects
//           <motion.span
//             animate={{ rotate: projectsOpen ? 180 : 0 }}
//             transition={{ duration: 0.3, ease }}
//             className="flex items-center"
//           >
//             <FiChevronDown size={20} strokeWidth={1.8} />
//           </motion.span>
//           {projectsOpen && (
//             <div className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#f56e6a]" />
//           )}
//         </button>

//         <a
//           href="#insights"
//           onClick={() => setOpen(false)}
//           className="text-[24px] font-medium text-[#909090] tracking-[-0.15px] whitespace-nowrap hover:text-[#212121] transition-colors"
//         >
//           Insights
//         </a>
//       </motion.div>

//       {/* ─── Row 3: Projects dropdown content ─── */}
//       <motion.div
//         className="fix flex items-start pt-7 pb-7 h-[233px]"
//         animate={{ opacity: projectsOpen && open ? 1 : 0 }}
//         transition={{ duration: 0.28, delay: projectsOpen && open ? 0.25 : 0 }}
//       >
//         {/* Building image */}
//         <div className="w-[340px] h-[171px] shrink-0 overflow-hidden">
//           <img
//             src={projectImg}
//             alt="Projects"
//             className="w-full h-full object-cover"
//           />
//         </div>

//         {/* State + city columns */}
//         <div className="flex items-start justify-between flex-1 pl-14">
//           {projectStates.map((state, i) => (
//             <div key={i} className="flex flex-col gap-[18px] w-[150px]">
//               <p className="text-[20px] font-normal text-[#212121] tracking-[-0.4px] leading-none m-0">
//                 {state.name}
//               </p>
//               {state.cities.map((city) => (
//                 <a
//                   key={city}
//                   href="#"
//                   className="text-[16px] text-[#909090] tracking-[-0.32px] leading-none no-underline hover:text-[#212121] transition-colors"
//                 >
//                   {city}
//                 </a>
//               ))}
//             </div>
//           ))}
//         </div>
//       </motion.div>
//     </motion.header>
//   );
// }
"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FiChevronDown } from "react-icons/fi";

const logo = "/bsd.svg";

const H_CLOSED = 104;
const H_OPEN = 205;
const H_DROPDOWN = 438;

const projectStates = [
  { name: "Maharashtra", cities: ["Chakan", "Nagpur", "Pune", "Bhiwandi"] },
  { name: "Gujarat", cities: ["Sanand"] },
  { name: "Tamil Nadu", cities: ["Hosur"] },
  { name: "Uttar Pradesh", cities: ["Dadri"] },
  { name: "Andhra Pradesh", cities: ["Gujarat"] },
  { name: "Tamil Nadu", cities: ["Sri City"] },
];

const projectImg = "/bsw.svg";

const ease = [0.76, 0, 0.24, 1] as const;

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [projectsOpen, setProjectsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    let lastY = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 20);
      // Only hide/show when menu is closed
      if (!open) {
        if (y > lastY && y > 80)
          setHidden(true); // scrolling down
        else if (y < lastY) setHidden(false); // scrolling up
      }
      lastY = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [open]);

  // When menu opens, always show navbar
  useEffect(() => {
    if (open) setHidden(false);
    else setProjectsOpen(false);
  }, [open]);

  const isWhite = open || scrolled;
  const targetH = open ? (projectsOpen ? H_DROPDOWN : H_OPEN) : H_CLOSED;

  return (
    <motion.header
      className="fixed top-0 lg:left-5 lg:right-5 left-0 right-0 z-50 overflow-hidden hidden md:block"
      initial={{ y: 0, height: H_CLOSED, backgroundColor: "rgba(0,0,0,0)" }}
      animate={{
        y: hidden ? -H_CLOSED : 0,
        height: targetH,
        backgroundColor: isWhite ? "#ffffff" : "rgba(0,0,0,0)",
        boxShadow: scrolled
          ? "0px 4px 12px rgba(0,0,0,0.04)"
          : "0px 0px 0px rgba(0,0,0,0)",
      }}
      transition={{
        y: { duration: 0.4, ease: [0.4, 0, 0.2, 1] },
        height: { duration: 0.55, ease },
        backgroundColor: { duration: 0.4, ease: [0.4, 0, 0.2, 1] },
        boxShadow: { duration: 0.4, ease: [0.4, 0, 0.2, 1] },
      }}
    >
      {/* ─── Row 1: Logo + Menu/Close — always visible ─── */}
      <div className="fix flex items-center justify-between h-[104px]">
        <a href="/" aria-label="BuildSpace home">
          <img
            src={logo}
            alt="BuildSpace"
            className="h-11 w-auto transition-[filter] duration-400 ease-out"
            style={{
              filter: isWhite ? "invert(1)" : "none",
            }}
          />
        </a>

        <button
          onClick={() => setOpen((v) => !v)}
          className="flex items-center gap-3 bg-white pl-[22px] pr-2 py-2 text-[#001b49] font-semibold text-[14.5px] tracking-tight hover:opacity-80 transition-opacity"
          aria-label="Toggle menu"
        >
          {open ? "Close" : "Menu"}
          {/* Animated 2-line hamburger → X */}
          <span className="w-8 h-8 rounded-full bg-[#001b49] flex items-center justify-center shrink-0">
            <span className="relative flex flex-col items-center justify-center w-[15px] h-[15px]">
              <motion.span
                animate={open ? { rotate: 45, y: 0 } : { rotate: 0, y: -4 }}
                transition={{ duration: 0.3, ease }}
                className="absolute w-[15px] h-[1.8px] bg-white rounded-[2px]"
              />
              <motion.span
                animate={open ? { rotate: -45, y: 0 } : { rotate: 0, y: 4 }}
                transition={{ duration: 0.3, ease }}
                className="absolute w-[15px] h-[1.8px] bg-white rounded-[2px]"
              />
            </span>
          </span>
        </button>
      </div>

      {/* ─── Divider — single line between logo row and nav row ─── */}
      <div className="h-px bg-[rgba(0,0,0,0.08)]" />

      {/* ─── Row 2: Nav links — occupies H_OPEN - H_CLOSED - 1px ─── */}
      <motion.div
        className="fix flex items-center justify-between h-[100px]"
        initial={{ opacity: 0 }}
        animate={{ opacity: open ? 1 : 0 }}
        transition={{ duration: 0.3, delay: open ? 0.18 : 0 }}
      >
        {(["About", "Solutions", "Approach", "Sectors"] as const).map(
          (label) => (
            <a
              key={label}
              href={`#${label.toLowerCase()}`}
              onClick={() => setOpen(false)}
              className="text-[24px] font-medium text-[#909090] tracking-[-0.15px] whitespace-nowrap hover:text-[#212121] transition-colors"
            >
              {label}
            </a>
          ),
        )}

        {/* Projects with rotating chevron */}
        <button
          onClick={() => setProjectsOpen((v) => !v)}
          className="bg-none border-none py-1 cursor-pointer flex items-center gap-0.5 text-[24px] font-medium tracking-[-0.15px] whitespace-nowrap relative transition-colors"
          style={{ color: projectsOpen ? "#f56e6a" : "#909090" }}
        >
          Projects
          <motion.span
            animate={{ rotate: projectsOpen ? 180 : 0 }}
            transition={{ duration: 0.3, ease }}
            className="flex items-center"
          >
            <FiChevronDown size={20} strokeWidth={1.8} />
          </motion.span>
          {projectsOpen && (
            <div className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#f56e6a]" />
          )}
        </button>

        <a
          href="#insights"
          onClick={() => setOpen(false)}
          className="text-[24px] font-medium text-[#909090] tracking-[-0.15px] whitespace-nowrap hover:text-[#212121] transition-colors"
        >
          Insights
        </a>
      </motion.div>

      {/* ─── Row 3: Projects dropdown content ─── */}
      <motion.div
        className="fix flex items-start pt-7 pb-7 h-[233px]"
        initial={{ opacity: 0 }}
        animate={{ opacity: projectsOpen && open ? 1 : 0 }}
        transition={{ duration: 0.28, delay: projectsOpen && open ? 0.25 : 0 }}
      >
        {/* Building image */}
        <div className="w-[340px] h-[171px] shrink-0 overflow-hidden">
          <img
            src={projectImg}
            alt="Projects"
            className="w-full h-full object-cover"
          />
        </div>

        {/* State + city columns */}
        <div className="flex items-start justify-between flex-1 pl-14">
          {projectStates.map((state, i) => (
            <div key={i} className="flex flex-col gap-[18px] w-[150px]">
              <p className="text-[20px] font-normal text-[#212121] tracking-[-0.4px] leading-none m-0">
                {state.name}
              </p>
              {state.cities.map((city) => (
                <a
                  key={city}
                  href="#"
                  className="text-[16px] text-[#909090] tracking-[-0.32px] leading-none no-underline hover:text-[#212121] transition-colors"
                >
                  {city}
                </a>
              ))}
            </div>
          ))}
        </div>
      </motion.div>
    </motion.header>
  );
}
