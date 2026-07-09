"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, ArrowRight } from "lucide-react";

const logo = "/BuildSpace1.svg";
const ellipse1 =
  "https://www.figma.com/api/mcp/asset/f4bef774-4308-429b-86c9-4f0a10299b51";
const ellipse2 =
  "https://www.figma.com/api/mcp/asset/198083c3-1c7d-41d9-9704-3964005559e6";

const exploreLeft = [
  { label: "Home", href: "#" },
  { label: "Approach", href: "#lifecycle" },
  { label: "Projects", href: "#projects" },
  { label: "Industries", href: "#industries" },
  { label: "Insights", href: "#insights" },
];

const exploreRight = [
  { label: "BuildINFRA", href: "https://buildspace-web.vercel.app/infra" },
  { label: "BuildVALUE", href: "https://buildspace-web.vercel.app/value" },
  { label: "BuildWEALTH", href: "https://buildspace-web.vercel.app/wealth" },
  { label: "About", href: "https://buildspace-web.vercel.app/about" },
  { label: "Contact", href: "https://buildspace-web.vercel.app/contact" },
];

const socials = [
  { label: "LinkedIn", src: "/home/footer/in.svg", href: "#" },
  { label: "YouTube", src: "/home/footer/yt.svg", href: "#" },
  { label: "Instagram", src: "/home/footer/insta.svg", href: "#" },
];

const legalLinks = [
  { label: "Privacy Policy", href: "#" },
  { label: "Terms & Conditions", href: "#" },
  { label: "Disclaimer", href: "#" },
];

export default function Footer() {
  const [email, setEmail] = useState("");

  return (
    <footer
      id="contact"
      className="relative overflow-hidden pt-[84px] pb-[30px] bg-[url('/home/footer/bsfbg.webp')] bg-cover bg-center bg-no-repeat"
    >
      {/* Decorative ellipses */}
      {/* <div className="absolute top-[-314px] right-[-80px] w-[837px] h-[837px] pointer-events-none opacity-70">
        <img src={ellipse1} alt="" className="w-full h-full object-contain" />
      </div>
      <div className="absolute top-[287px] left-[-37px] w-[424px] h-[425px] pointer-events-none opacity-70">
        <img src={ellipse2} alt="" className="w-full h-full object-contain" />
      </div> */}

      <div className="fix relative z-10">
        {/* Main grid */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="grid grid-cols-1 lg:grid-cols-[1.4fr_1.2fr_1fr] gap-12 lg:gap-14 mb-16"
        >
          {/* LEFT — logo + contact info */}
          <div className="flex flex-col gap-4 w-[320px]">
            <img
              src={logo}
              alt="BuildSpace"
              className="h-[75px] w-auto object-contain object-left"
            />
            <p className="text-white/70 font-light text-[15.5px] leading-[1.6] w-[300px]">
              Integrated industrial and Logistics infrastructure development
              platform.
            </p>

            <div className="flex flex-col gap-[11px] mt-2">
              <div className="flex items-start gap-[11px]">
                <MapPin
                  size={15}
                  strokeWidth={1.5}
                  className="text-white/60 flex-shrink-0 mt-[2px]"
                />
                <p className="text-white/62 font-light text-[14px] leading-[1.5]">
                  Buildspace Develoment Management Pvt Ltd — 1007, 10th Floor,
                  Mayuresh Square, Sector 17, CBD Belapur, Navi Mumbai,
                  <br />
                  Maharashtra 400614, India
                </p>
              </div>
              <div className="flex items-center gap-[11px]">
                <Phone
                  size={15}
                  strokeWidth={1.5}
                  className="text-white/60 flex-shrink-0"
                />
                <a
                  href="tel:9167020020"
                  className="text-white/62 font text-[14px] hover:text-white transition-colors"
                >
                  9167020020
                </a>
              </div>
              <div className="flex items-center gap-[11px]">
                <Mail
                  size={15}
                  strokeWidth={1.5}
                  className="text-white/72 flex-shrink-0"
                />
                <a
                  href="mailto:contact@webuildspace.in"
                  className="text-white/72  text-[14px] hover:text-white transition-colors font-light"
                >
                  contact@webuildspace.in
                </a>
              </div>
            </div>
          </div>

          {/* CENTER — navigation */}
          <div className="flex flex-col gap-5">
            <p className="text-white/40 font-semibold text-[11px] tracking-[2.2px] uppercase">
              Explore
            </p>
            <div className="flex gap-40 text-white/74">
              <ul className="flex flex-col gap-[13px]">
                {exploreLeft.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      className="text-white/74 font-normal text-[15px] hover:text-white transition-colors"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
              <ul className="flex flex-col gap-[13px]">
                {exploreRight.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      className="text-white/74 font-normal text-[15px] hover:text-white transition-colors"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* RIGHT — socials + newsletter */}
          <div className="flex flex-col gap-5">
            <p className="text-white/40 font-semibold text-[11px] tracking-[2.2px] uppercase">
              Connect
            </p>
            <div className="flex flex-col gap-3">
              {socials.map(({ label, src, href }) => (
                <a
                  key={label}
                  href={href}
                  className="flex items-center gap-3 group"
                >
                  <span className="w-[38px] h-[38px] rounded-full border border-white/16 bg-white/4 flex items-center justify-center flex-shrink-0 group-hover:bg-white/12 transition-colors">
                    <img src={src} alt="" />
                  </span>
                  <span className="text-white/74 font-medium text-[15px] group-hover:text-white transition-colors">
                    {label}
                  </span>
                </a>
              ))}
            </div>

            {/* Newsletter */}
            <div className="flex flex-col gap-4 mt-4">
              <p className="text-white/40 font-semibold text-[11px] tracking-[2.2px] uppercase">
                Newsletter
              </p>
              <form
                className="flex gap-2 max-w-[300px]"
                onSubmit={(e) => e.preventDefault()}
              >
                <input
                  type="email"
                  placeholder="Your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 min-w-0 bg-white/6 border border-white/16 text-white placeholder-white/40 text-[14px] font-normal px-[19px] py-[15.5px] outline-none focus:border-white/50 transition-colors"
                />
                <button
                  type="submit"
                  className="w-[46px] h-[46px] rounded-full bg-white flex items-center justify-center flex-shrink-0 hover:bg-white/90 transition-colors"
                  aria-label="Subscribe"
                >
                  <ArrowRight
                    size={16}
                    strokeWidth={2}
                    className="text-[#000000]"
                  />
                </button>
              </form>
            </div>
          </div>
        </motion.div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/12 pt-[27px]">
          <p className="text-white/50 font-light text-[13px]">
            © BuildSpace 2026
          </p>

          <div className="flex gap-6">
            {legalLinks.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="text-white/58 font-light text-[13px] hover:text-white transition-colors"
              >
                {l.label}
              </a>
            ))}
          </div>

          <p className="text-white/50 font-light text-[13px]">
            Website by{" "}
            <span className="text-white/62">Parashift Technologies</span>
          </p>
        </div>
      </div>
    </footer>
  );
}

// import React from "react";
// import {
//   FaLinkedinIn,
//   FaYoutube,
//   FaInstagram,
//   FaArrowRight,
// } from "react-icons/fa";
// import {
//   HiOutlineLocationMarker,
//   HiOutlinePhone,
//   HiOutlineMail,
// } from "react-icons/hi";

// const exploreLeft = [
//   { label: "Home", href: "https://buildspace-web.vercel.app/" },
//   { label: "Approach", href: "https://buildspace-web.vercel.app/approach" },
//   { label: "Projects", href: "https://buildspace-web.vercel.app/projects" },
//   { label: "Industries", href: "https://buildspace-web.vercel.app/industries" },
//   { label: "Insights", href: "https://buildspace-web.vercel.app/insights" },
// ];

// const exploreRight = [
//   { label: "BuildINFRA", href: "https://buildspace-web.vercel.app/infra" },
//   { label: "BuildVALUE", href: "https://buildspace-web.vercel.app/value" },
//   { label: "BuildWEALTH", href: "https://buildspace-web.vercel.app/wealth" },
//   { label: "About", href: "https://buildspace-web.vercel.app/about" },
//   { label: "Contact", href: "https://buildspace-web.vercel.app/contact" },
// ];

// const socials = [
//   {
//     label: "LinkedIn",
//     icon: <FaLinkedinIn className="text-white text-sm" />,
//     href: "#",
//   },
//   {
//     label: "YouTube",
//     icon: <FaYoutube className="text-white text-sm" />,
//     href: "#",
//   },
//   {
//     label: "Instagram",
//     icon: <FaInstagram className="text-white text-sm" />,
//     href: "#",
//   },
// ];

// const logo = "/BuildSpace1.svg";

// export const Footer: React.FC = () => {
//   return (
//     <footer className="w-full bg-gradient-to-r from-[#d66556] to-[#e86f5e] text-[#fceae6] font-sans pt-16 pb-8 px-6 md:px-12 lg:px-24">
//       {/* Top Section */}
//       <div className="fix grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-16 border-b border-white/10">
//         {/* Brand & Address Column */}
//         <div className="lg:col-span-5 flex flex-col space-y-5">
//           <div className="w-44">
//             <img
//               src={logo}
//               alt="Buildspace Logo"
//               className="w-full h-auto object-contain brightness-0 invert"
//             />
//           </div>
//           <p className="text-sm font-light text-white/80 max-w-sm leading-relaxed">
//             Integrated industrial and Logistics infrastructure development
//             platform.
//           </p>

//           <div className="flex flex-col space-y-3 pt-2 text-xs font-light text-white/80">
//             <div className="flex items-start space-x-3">
//               <HiOutlineLocationMarker className="text-base flex-shrink-0 mt-0.5" />
//               <p className="leading-relaxed">
//                 Buildspace Development Management Pvt Ltd -<br />
//                 1007, 10th Floor, Mayuresh Square, Sector 17,
//                 <br />
//                 CBD Belapur, Navi Mumbai,
//                 <br />
//                 Maharashtra 400614, India
//               </p>
//             </div>
//             <div className="flex items-center space-x-3">
//               <HiOutlinePhone className="text-base flex-shrink-0" />
//               <a
//                 href="tel:9167020020"
//                 className="hover:text-white transition-colors"
//               >
//                 91670 20020
//               </a>
//             </div>
//             <div className="flex items-center space-x-3">
//               <HiOutlineMail className="text-base flex-shrink-0" />
//               <a
//                 href="mailto:contact@webuildspace.in"
//                 className="hover:text-white transition-colors"
//               >
//                 contact@webuildspace.in
//               </a>
//             </div>
//           </div>
//         </div>

//         {/* Links Navigation Columns */}
//         <div className="lg:col-span-4 flex flex-col space-y-4">
//           <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-white/60">
//             Explore
//           </span>
//           <div className="grid grid-cols-2 gap-4 text-xs font-light text-white/80">
//             <div className="flex flex-col space-y-3">
//               {exploreLeft.map((link) => (
//                 <a
//                   key={link.label}
//                   href={link.href}
//                   className="hover:text-white transition-colors"
//                 >
//                   {link.label}
//                 </a>
//               ))}
//             </div>
//             <div className="flex flex-col space-y-3">
//               {exploreRight.map((link) => (
//                 <a
//                   key={link.label}
//                   href={link.href}
//                   className="hover:text-white transition-colors"
//                 >
//                   {link.label}
//                 </a>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* Connect & Newsletter Column */}
//         <div className="lg:col-span-3 flex flex-col space-y-6">
//           {/* Social Links */}
//           <div className="flex flex-col space-y-4">
//             <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-white/60">
//               Connect
//             </span>
//             <div className="flex flex-col space-y-3">
//               {socials.map((social) => (
//                 <a
//                   key={social.label}
//                   href={social.href}
//                   className="flex items-center space-x-3 text-xs font-light text-white/80 hover:text-white transition-colors group"
//                 >
//                   <div className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
//                     {social.icon}
//                   </div>
//                   <span>{social.label}</span>
//                 </a>
//               ))}
//             </div>
//           </div>

//           {/* Newsletter Input */}
//           <div className="flex flex-col space-y-3 pt-2">
//             <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-white/60">
//               Newsletter
//             </span>
//             <div className="relative flex items-center w-full max-w-[260px]">
//               <input
//                 type="email"
//                 placeholder="Your email address"
//                 className="w-full bg-white/10 text-white placeholder-white/50 text-xs px-4 py-3 rounded-full border border-white/10 focus:outline-none focus:border-white/30 pr-12"
//               />
//               <button
//                 type="button"
//                 className="absolute right-1 w-8 h-8 rounded-full bg-white flex items-center justify-center text-[#d66556] hover:bg-white/90 transition-colors"
//                 aria-label="Subscribe"
//               >
//                 <FaArrowRight className="text-xs" />
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Bottom Legal / Credits Section */}
//       <div className="max-w-7xl mx-auto pt-6 flex flex-col md:flex-row justify-between items-center text-[10px] text-white/50 font-light gap-4">
//         <div>© BuildSpace 2026</div>
//         <div className="flex space-x-6">
//           <a href="#" className="hover:text-white/80 transition-colors">
//             Privacy Policy
//           </a>
//           <a href="#" className="hover:text-white/80 transition-colors">
//             Terms & Conditions
//           </a>
//           <a href="#" className="hover:text-white/80 transition-colors">
//             Disclaimer
//           </a>
//         </div>
//         <div>
//           Website by{" "}
//           <a
//             href="#"
//             className="hover:text-white/80 transition-colors font-normal text-white/60"
//           >
//             Parashift Technologies
//           </a>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;
