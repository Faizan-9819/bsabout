import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import HeroValue from "@/components/sections/wealth/HeroValue";
import React from "react";
import Second from "@/components/sections/wealth/Second";
import Overview from "@/components/sections/wealth/Overview";
import Capability from "@/components/sections/wealth/Capability";
import StagesTimeline from "@/components/sections/wealth/StagesTimeline";
import LifestyleValueW from "@/components/sections/wealth/LifestyleValueW";
import WhyUs from "@/components/sections/wealth/WhyUs";
import CtaV from "@/components/sections/wealth/CtaV";

const page = () => {
  return (
    <>
      <Navbar />
      <HeroValue />
      <Second />
      <Overview />
      <Capability />
      {/* <StagesTimeline /> */}
      <LifestyleValueW />
      <WhyUs />
      <CtaV />
      <Footer />
    </>
  );
};

export default page;
