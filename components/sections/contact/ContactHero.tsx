import React, { FC } from "react";

const ContactHero: FC = () => {
  return (
    <section
      style={{ backgroundImage: "url('/contact/HContact.jpg')" }}
      className="relative w-full inset-0 bg-cover bg-center bg-no-repeat min-h-screen md:h-[100vh] flex items-center overflow-hidden"
    >
      {/* Background Image Layer */}
      <div className="absolute " />

      {/* Content Container */}
      <div className="relative w-full fix z-10">
        <div className="flex flex-col items-start max-w-xl">
          {/* Subheading / Label */}
          <div className="flex items-center gap-3 mb-2 md:mb-4">
            <span className="w-6 h-[1px] bg-white/60" />
            <span className="text-xs md:text-[12px] font-semibold tracking-[3px] text-[rgba(255,255,255,0.56)] uppercase">
              Connect
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl lg:text-[52px] font-bold text-white tracking-tight">
            Contact Us
          </h1>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;
