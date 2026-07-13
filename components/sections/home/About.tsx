"use client";

import Btn from "@/components/shared/Btn";
import { motion } from "framer-motion";

const bgPhoto = "/home/Spotlight/bgphoto.webp ";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.7, ease: "easeOut" as const },
  }),
};

export default function About() {
  return (
    <section
      id="about"
      className="relative min-h-screen  bg-white overflow-hidden flex flex-col justify-center"
    >
      {/* Background building photo — lower half */}
      <div className="absolute bottom-0 hidden lg:block left-0 right-0 h-[50%] lg:h-[80%] pointer-events-none">
        <img
          src={bgPhoto}
          alt=""
          className="w-full h-full  object-cover object-top"
          style={{
            maskImage: "linear-gradient(to bottom, transparent 0%, black 20%)",
          }}
        />
      </div>

      {/* Centre vertical divider */}
      <div className="absolute inset-y-0 left-1/2 w-px bg-[rgba(0,59,157,0.05)] -translate-x-1/2 hidden lg:block" />

      {/* Content */}
      <div className="relative z-10 fix py-[50px] lg:py-[80px] xl:py-[0px] ">
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-16 items-start">
          {/* Left col — headline */}
          <div className="flex flex-col gap-7 w-full lg:w-1/2">
            <motion.div
              variants={fadeUp}
              custom={0}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-80px" }}
              className="eyebrow text-[#003b9d]"
            >
              About BuildSpace
            </motion.div>

            <motion.h2
              variants={fadeUp}
              custom={1}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-80px" }}
              className="font-bold  leading-[1.1] md:leading-[1.07] tracking-[-1px] md:tracking-[-1.6px] text-[32px] md:text-[40px] lg:text-[48px]"
            >
              <span className="bg-gradient-to-r from-[#BF584F] to-[#F6736A] bg-clip-text text-transparent">
                Development Expertise
              </span>
              <br />
              <span className="bg-gradient-to-r from-[#BF584F] to-[#F6736A] bg-clip-text text-transparent">
                Across Industrial &{" "}
              </span>
              <br />
              <span className="bg-gradient-to-r from-[#BF584F] to-[#F6736A] bg-clip-text text-transparent">
                Logistics Assets
              </span>
            </motion.h2>
          </div>

          {/* Right col — body copy + CTAs */}
          <motion.div
            variants={fadeUp}
            custom={2}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            className="flex flex-col gap-[10px] pt-2 w-full lg:w-1/2"
          >
            <p className="text-[#222] text-[20px] font-normal leading-[1.4]">
              The success of industrial and logistics infrastructure is{" "}
              <br className="hidden 2xl:inline-block" />
              determined long before construction begins.
            </p>
            <p className="text-[#54514c] text-[16px] 2xl:text-[18px] font-normal leading-[1.4]">
              With over 50 years of combined experience, BuildSpace develops
              <br className="hidden 2xl:inline-block" />
              industrial and logistics assets through a fully integrated
              approach that
              <br className="hidden 2xl:inline-block" /> brings together land
              strategy, master planning, engineering, approvals,
              <br className="hidden 2xl:inline-block" /> compliance,
              development, and operational readiness.
            </p>
            <p className="text-[#54514c] text-[16px] lg:text-[18px] font-normal leading-[1.4]">
              As a 100% compliant industrial & logistics infrastructure
              developer, we
              <br className="hidden lg:inline-block" /> manage every stage of
              the development lifecycle—from identifying the
              <br className="hidden lg:inline-block" /> right opportunity and
              securing approvals to delivering institutional-
              <br className="hidden lg:inline-block" />
              grade assets built for long-term performance.
            </p>
            <p className="text-[#54514c] text-[16px] lg:text-[18px] font-normal leading-[1.4] max-w-[554px]">
              By integrating development expertise, execution capability, and
              lifecycle thinking within a single platform, BuildSpace creates
              infrastructure that supports business growth, operational
              efficiency, and enduring value creation.
            </p>

            <div className="flex flex-wrap items-center gap-4 sm:gap-6 pt-5">
              <Btn label="Learn More About Us" icon="arrow-right" />
              <Btn
                label="Meet Our Team"
                className="text-[#F56E6A]!"
                variant="ghost"
                icon="arrow-right"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
