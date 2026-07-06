import Navbar from "@/components/shared/Navbar";
import Hero from "../../components/sections/infra/Hero";
import React from "react";
import OverviewSection from "@/components/sections/infra/OverviewSection";
import CapabilitiesSection from "@/components/sections/infra/CapabilitiesSection";
// import ProjectsSection from "@/components/sections/infra/ProjectsSection";
// import FullLifecycleApproach from "@/components/sections/home/FullLifecycleApproach";
import Footer from "@/components/shared/Footer";
import CTASection from "@/components/sections/infra/CTASection";
import Lifecycle from "@/components/sections/infra/Lifecycle";
import WhyUsAccordion from "@/components/sections/infra/WhyUsAccordion";
import Second from "@/components/sections/infra/Second";

const page = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Second />
      <OverviewSection />
      <CapabilitiesSection />
      <Lifecycle />
      {/* <ProjectsSection /> */}
      <WhyUsAccordion />
      <CTASection />
      <Footer />
    </>
  );
};

export default page;
