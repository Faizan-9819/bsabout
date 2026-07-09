// "use client";
// import React, { useState } from "react";
// import { Sector } from "@/app/types/sector";

// interface MobileSectorDropdownProps {
//   sectors: Sector[];
//   activeId: string;
//   onSelect: (id: string) => void;
// }

// export const MobileSectorDropdown: React.FC<MobileSectorDropdownProps> = ({
//   sectors,
//   activeId,
//   onSelect,
// }) => {
//   const [isOpen, setIsOpen] = useState(false);
//   const activeSector = sectors.find((s) => s.id === activeId) || sectors[0];

//   const handleSelect = (id: string) => {
//     onSelect(id);
//     setIsOpen(false);
//   };

//   return (
//     <div
//       className="block md:hidden w-full sticky top-[72px] z-40 py-3 border-b border-white/10"
//       style={{
//         background:
//           "linear-gradient(180deg, #120500 0%, #250B00 44%, #401300 100%)",
//       }}
//     >
//       <div className="relative w-full px-4">
//         <button
//           onClick={() => setIsOpen(!isOpen)}
//           aria-haspopup="listbox"
//           aria-expanded={isOpen}
//           className="w-full flex items-center justify-between px-4 py-3 bg-white text-[#BF584F] font-semibold text-sm shadow-lg transition-transform active:scale-[0.99]"
//           style={{ borderRadius: 0 }}
//         >
//           <span>{activeSector?.title}</span>
//           <svg
//             className={`w-5 h-5 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke="currentColor"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth={2}
//               d="M19 9l-7 7-7-7"
//             />
//           </svg>
//         </button>

//         {isOpen && (
//           <>
//             {/* Backdrop */}
//             <div
//               className="fixed inset-0 z-10"
//               onClick={() => setIsOpen(false)}
//             />

//             {/* Dropdown list */}
//             <ul
//               role="listbox"
//               className="absolute left-4 right-4 mt-2 z-20 border border-white/20 shadow-2xl max-h-[64vh] overflow-y-auto p-1 flex flex-col gap-0.5"
//               style={{
//                 background:
//                   "linear-gradient(180deg, #120500 0%, #250B00 44%, #401300 100%)",
//                 borderRadius: 0,
//               }}
//             >
//               {sectors.map((sector) => {
//                 const isActive = sector.id === activeId;
//                 return (
//                   <li key={sector.id} role="option" aria-selected={isActive}>
//                     <button
//                       onClick={() => handleSelect(sector.id)}
//                       className={`w-full text-center px-4 py-3 text-sm font-medium transition-colors border-2 ${
//                         isActive
//                           ? "bg-white text-[#BF584F] border-transparent"
//                           : "bg-transparent text-white border-white/40 hover:border-white/90"
//                       }`}
//                       style={{ borderRadius: 0 }}
//                     >
//                       {sector.title}
//                     </button>
//                   </li>
//                 );
//               })}
//             </ul>
//           </>
//         )}
//       </div>
//     </div>
//   );
// };

"use client";
import React, { useState, useEffect } from "react";
import { Sector } from "@/app/types/sector";

interface MobileSectorDropdownProps {
  sectors: Sector[];
  activeId: string;
  onSelect: (id: string) => void;
}

export const MobileSectorDropdown: React.FC<MobileSectorDropdownProps> = ({
  sectors,
  activeId,
  onSelect,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isNavbarHidden, setIsNavbarHidden] = useState(false);
  const activeSector = sectors.find((s) => s.id === activeId) || sectors[0];

  // Track scroll direction to mirror the navbar's hide/show behavior
  useEffect(() => {
    let lastY = window.scrollY;

    const handleScroll = () => {
      const currentY = window.scrollY;

      if (currentY > lastY && currentY > 80) {
        // Scrolling down - Navbar hides, dropdown goes to top: 0
        setIsNavbarHidden(true);
      } else if (currentY < lastY) {
        // Scrolling up - Navbar shows, dropdown goes to top: 72px
        setIsNavbarHidden(false);
      }
      lastY = currentY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSelect = (id: string) => {
    onSelect(id);
    setIsOpen(false);
  };

  return (
    <div
      className="block md:hidden w-full sticky z-40 py-3 border-b border-white/10 transition-[top] duration-400 ease-[cubic-bezier(0.4,0,0.2,1)]"
      style={{
        // Dynamically changes between 72px and 0px instantly matching the navbar
        top: isNavbarHidden ? "0px" : "72px",
        background:
          "linear-gradient(180deg, #120500 0%, #250B00 44%, #401300 100%)",
      }}
    >
      <div className="relative w-full px-4">
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-haspopup="listbox"
          aria-expanded={isOpen}
          className="w-full flex items-center justify-between px-4 py-3 bg-white text-[#BF584F] font-semibold text-sm shadow-lg transition-transform active:scale-[0.99]"
          style={{ borderRadius: 0 }}
        >
          <span>{activeSector?.title}</span>
          <svg
            className={`w-5 h-5 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>

        {isOpen && (
          <>
            {/* Backdrop */}
            <div
              className="fixed inset-0 z-10"
              onClick={() => setIsOpen(false)}
            />

            {/* Dropdown list */}
            <ul
              role="listbox"
              className="absolute left-4 right-4 mt-2 z-20 border border-white/20 shadow-2xl max-h-[63vh] overflow-y-auto p-1 flex flex-col gap-0.5"
              style={{
                background:
                  "linear-gradient(180deg, #120500 0%, #250B00 44%, #401300 100%)",
                borderRadius: 0,
              }}
            >
              {sectors.map((sector) => {
                const isActive = sector.id === activeId;
                return (
                  <li key={sector.id} role="option" aria-selected={isActive}>
                    <button
                      onClick={() => handleSelect(sector.id)}
                      className={`w-full text-center px-4 py-3 text-sm font-medium transition-colors border-2 ${
                        isActive
                          ? "bg-white text-[#BF584F] border-transparent"
                          : "bg-transparent text-white border-white/40 hover:border-white/90"
                      }`}
                      style={{ borderRadius: 0 }}
                    >
                      {sector.title}
                    </button>
                  </li>
                );
              })}
            </ul>
          </>
        )}
      </div>
    </div>
  );
};
