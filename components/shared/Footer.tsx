"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, ArrowRight } from "lucide-react";

const logo =
  "https://www.figma.com/api/mcp/asset/c74f063f-3a8d-4d01-a7c3-17b0b252d0b6";
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
  { label: "BuildINFRA", href: "#model" },
  { label: "BuildVALUE", href: "#model" },
  { label: "BuildWEALTH", href: "#model" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
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
      <div className="absolute top-[-314px] right-[-80px] w-[837px] h-[837px] pointer-events-none opacity-70">
        <img src={ellipse1} alt="" className="w-full h-full object-contain" />
      </div>
      <div className="absolute top-[287px] left-[-37px] w-[424px] h-[425px] pointer-events-none opacity-70">
        <img src={ellipse2} alt="" className="w-full h-full object-contain" />
      </div>

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
          <div className="flex flex-col gap-4">
            <img
              src={logo}
              alt="BuildSpace"
              className="h-[75px] w-auto object-contain object-left"
            />
            <p className="text-white/70 font-light text-[15.5px] leading-[1.6]">
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
                  className="text-white/72  text-[14px] hover:text-white transition-colors"
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
            <div className="flex gap-8 text-white/74">
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
                  className="flex-1 min-w-0 bg-white/6 border border-white/16 text-white placeholder-white/40 text-[14px] font-normal px-[19px] py-[15.5px] rounded-full outline-none focus:border-white/50 transition-colors"
                />
                <button
                  type="submit"
                  className="w-[46px] h-[46px] rounded-full bg-white flex items-center justify-center flex-shrink-0 hover:bg-white/90 transition-colors"
                  aria-label="Subscribe"
                >
                  <ArrowRight
                    size={16}
                    strokeWidth={2}
                    className="text-[#e27244]"
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
