import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import MobNav from "@/components/shared/MobNav";
import HeroValue from "@/components/sections/value/HeroValue";
import React from "react";
import Second from "@/components/sections/value/Second";
import Overview from "@/components/sections/value/Overview";
import Capability from "@/components/sections/value/Capability";
import StagesTimeline from "@/components/sections/value/StagesTimeline";
import LifestyleValue from "@/components/sections/value/LifestyleValue";
import WhyUs from "@/components/sections/value/WhyUs";
import CtaV from "@/components/sections/value/CtaV";
import ProjectsSection from "@/components/sections/infra/ProjectsSection";

const page = () => {
  return (
    <>
      <Navbar />
      <MobNav />
      <HeroValue />
      <Second />
      <Overview />
      <Capability />
      <StagesTimeline />
      <LifestyleValue />
      <WhyUs />
      <ProjectsSection />
      <CtaV />
      <Footer />
    </>
  );
};

export default page;
