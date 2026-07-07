"use client";

import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";

import "swiper/css";

const TEAM_MEMBERS = [
  {
    name: "Rohan Latad",
    role: "Co-Founder & Director",
    image: "/about/Team/team1.webp", // Update paths to match your assets directory
    bio: "Over 15 years of experience in industrial infrastructure development, with leadership across more than 30 million sq. ft. of warehousing and industrial real estate projects.",
    linkedin: "#",
  },
  {
    name: "Pankaj Kakde",
    role: "Co-Founder & Director",
    image: "/about/Team/team2.webp",
    bio: "Specialist in master planning, design engineering, and project execution with over 25 years of experience across industrial, logistics, CFS, SEZ, and port-led infrastructure developments.",
    linkedin: "#",
  },
  {
    name: "Nitin Mumbaikar",
    role: "Co-Founder & Director",
    image: "/about/Team/team3.webp",
    bio: "Infrastructure and engineering leader with over 25 years of experience delivering large-scale industrial and logistics developments spanning master planning, execution, and asset creation.",
    linkedin: "#",
  },
];

export default function LeadershipTeam() {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef(null);

  // Layout boundaries: 3 slides total. Desktop shows all 3 (1 view page). Mobile slides individually.
  const totalDots = TEAM_MEMBERS.length;

  const handlePrev = () => {
    if (swiperRef.current) swiperRef.current.slidePrev();
  };

  const handleNext = () => {
    if (swiperRef.current) swiperRef.current.slideNext();
  };

  return (
    <section className="w-full relative  py-24 max-lg:py-16 overflow-hidden">
      {/* Global Framework Width Constraint */}

      <img
        src="/about/Team/teambg.webp"
        className="absolute inset-0 -z-10 w-full h-full object-cover pointer-events-none"
        alt=""
      />

      <div className="fix w-full flex flex-col">
        {/* Header Layout Block */}
        <div className="flex flex-col mb-[53px]">
          <div className="eyebrow text-[#003B9D] text-[12px] font-semibold leading-[3.36px] uppercase mb-4">
            {/* <span className="w-6 h-[2px] bg-orange block"></span> */}
            Leadership Team
          </div>

          <h2 className="text-h1 bg-gradient-to-r from-[rgba(191,88,79,1)] to-[rgba(246,115,106,1)] bg-clip-text text-transparent  text-[56px] font-bold tracking-[-1.568px] leading-[1.08] md:leading-[110%] mb-5">
            Built by people who have shaped <br /> industrial infrastructure at
            scale.
          </h2>

          <p className="text-[#000] text-[17px] font-light leading-[normal]">
            Decades of combined experience across infrastructure development,
            master <br /> planning, execution, and industrial asset creation.
          </p>
        </div>

        {/* Dynamic Card Area: Grid on Desktop, Carousel Swiper on Mobile */}
        <div className="w-full">
          <Swiper
            modules={[Navigation, Pagination]}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
            spaceBetween={30}
            slidesPerView={1}
            speed={500}
            breakpoints={{
              // Desktop View: Freeze Swiper actions, lay cards out side-by-side inside grid
              1024: {
                slidesPerView: 3,
                allowTouchMove: false,
                spaceBetween: 32,
              },
              // Tablet View
              640: {
                slidesPerView: 2,
                allowTouchMove: true,
                spaceBetween: 24,
              },
            }}
            className="w-full !overflow-visible "
          >
            {TEAM_MEMBERS.map((member, index) => (
              <SwiperSlide key={index} className="h-auto flex ">
                <div className="w-full bg-[#fff] border border-[#fff] shadow-[0_0_63px_0_rgba(0,20,51,0.06)] rounded-[20px] p-[15px] flex flex-col justify-between transition-all duration-300  group">
                  <div>
                    {/* Portrait Image Block Container */}
                    <div className="w-full aspect-[4/3] md:h-[370px] rounded-[14px] overflow-hidden mb-6 bg-[#eae6df]">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                    </div>

                    {/* Meta Identifiers */}
                    <h3 className="text-[22px] px-[8px] leading-normal  font-bold  mb-[6px]">
                      {member.name}
                    </h3>
                    <p className="text-[13px] px-[8px]  font-medium text-orange uppercase leading-normal mb-4">
                      {member.role}
                    </p>

                    {/* Narrative Description Block */}
                    <p className="text-[14px] max-w-[325px] px-[8px] text-[#000] leading-[1.4] mb-6">
                      {member.bio}
                    </p>
                  </div>

                  {/* Context Anchor Tag */}
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex text-[13px] px-[8px] leading-normal font-semibold font-body font-medium text-[#E27244] hover:text-orange/80 underline underline-offset-4 decoration-1 mt-auto w-max"
                  >
                    Connect on LinkedIn
                  </a>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Reference Layout Custom Action Navigation/Pagination Footer (Hidden on wide Desktop views) */}
        <div className="flex items-center justify-end mt-10 lg:hidden">
          {/* Dynamic Active Pill Track Indicators */}
          {/* <div className="flex gap-2">
            {Array.from({ length: totalDots }).map((_, i) => {
              const isSelected = i === activeIndex;
              return (
                <button
                  key={i}
                  onClick={() => swiperRef.current?.slideTo(i)}
                  className={`rounded-full transition-all duration-300 ${
                    isSelected
                      ? "w-[22px] h-[7px] bg-[#e27244]"
                      : "w-[7px] h-[7px] bg-[#d8d4cc] hover:bg-[#9c9895]"
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              );
            })}
          </div> */}

          {/* Button Navigation Triggers */}
          <div className="flex gap-2.5">
            <button
              onClick={handlePrev}
              disabled={activeIndex === 0}
              className="w-[46px] h-[46px] rounded-full border border-[#ddd8cf] bg-white flex items-center justify-center text-navy hover:border-[#e27244] hover:text-[#e27244] transition-colors disabled:opacity-30 disabled:pointer-events-none"
              aria-label="Previous"
            >
              <ChevronLeft size={18} strokeWidth={1.8} />
            </button>
            <button
              onClick={handleNext}
              disabled={activeIndex >= totalDots - 1}
              className="w-[46px] h-[46px] rounded-full border border-[#ddd8cf] bg-white flex items-center justify-center text-navy hover:border-[#e27244] hover:text-[#e27244] transition-colors disabled:opacity-30 disabled:pointer-events-none"
              aria-label="Next"
            >
              <ChevronRight size={18} strokeWidth={1.8} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
