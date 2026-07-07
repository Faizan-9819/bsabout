"use client";

import React from "react";
import { motion } from "framer-motion";

export default function OurStory() {
  // Animation Variants for staggered content appearance
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.25, 1, 0.5, 1] },
    },
  };

  return (
    <section className="section bg-off-white w-full overflow-hidden">
      <div className="fix flex flex-col">
        {/* Top Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full flex flex-col space-y-4 mb-8 lg:mb-12"
        >
          {/* Eyebrow / Subheading */}
          <div className="eyebrow text-[#003B9D] text-[12px] font-semibold leading-[3.36px] uppercase mb-[29px]">
            {/* <span className="w-6 h-[2px] bg-blue block"></span> */}
            Our Story
          </div>
          {/* Main Section Heading */}
          <h1 className="md:text-[56px] text-[26px] leading-[1.1] md:leading-[59.92px] tracking-[-0.995px] md:tracking-[-1.568px]">
            <span className=" font-bold bg-gradient-to-r from-[#BF584F] to-[#F6736A] bg-clip-text text-transparent ">
              From Opportunity
            </span>{" "}
            to Infrastructure
          </h1>
        </motion.div>

        {/* Two-Column Content Flexbox Wrapper (Stretches Columns to Equal Height) */}
        <div className="w-full flex flex-col lg:flex-row items-stretch gap-8 lg:gap-16">
          {/* Left Column: Image Wrapper (Stretches explicitly to match content height of the right column) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2  lg:min-h-full rounded-[10px] overflow-hidden relative shadow-sm shrink-0"
          >
            <img
              src="/about/ourStory/ourstory.webp"
              alt="Modern architectural skyline looking up"
              className="w-full h-full lg:absolute lg:top-0 lg:left-0 object-cover"
            />
          </motion.div>

          {/* Right Column: Copywriting Blocks (Determines the natural height) */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="w-full lg:w-1/2 flex flex-col space-y-6 justify-center"
          >
            {/* Primary Narrative */}
            <motion.div
              variants={itemVariants}
              className="space-y-4  leading-[1.4] text-[18px]  "
            >
              <p className="text-[#222] text-[20px]">
                Industrial growth begins long before construction starts. It
                begins with identifying the right opportunity, understanding
                what land can become, and building a strategy that turns
                possibility into performance.
              </p>
              <p className="text-[#54514C] text-[18px]">
                BuildSpace is created to bridge the gap that fragments most
                industrial development — between land opportunity,
                infrastructure execution, and long-term value creation. We bring
                these together as a single, integrated platform, led by a team
                with over 50 years of combined experience across industrial,
                logistics, and warehousing infrastructure.
              </p>
            </motion.div>

            {/* Verticals Focus Block */}
            <motion.div
              variants={itemVariants}
              className="space-y-4 font-body leading-[1.4] text-[18px] "
            >
              <p className="text-[#54514C]">
                That platform works through three connected verticals.{" "}
                <span className="text-[#F56E6A] leading-[1.4] hover:underline cursor-pointer">
                  BuildINFRA
                </span>{" "}
                develops industrial and logistics facilities for the businesses
                that operate them.{" "}
                <span className="text-[#F56E6A] leading-[1.4] hover:underline cursor-pointer">
                  BuildVALUE
                </span>{" "}
                transforms underutilised land into institutional-grade assets,
                with ownership retained by the landowner.{" "}
                <span className="text-[#F56E6A] leading-[1.4] hover:underline cursor-pointer">
                  BuildWEALTH
                </span>{" "}
                opens participation in those assets to investors and capital
                partners.
              </p>
              <p className="text-[#54514C]">
                Because these verticals share one development engine, BuildSpace
                participates across the entire lifecycle — from planning
                infrastructure and activating land to stewarding assets for the
                long term. Land, development, and capital don't operate as
                separate services here. They work as one.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
