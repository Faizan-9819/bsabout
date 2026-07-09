import Hero from "@/components/sections/sector/Hero";
import Ctas from "@/components/sections/sector/CtaS";
import IndustryInfrastructureScannable from "@/components/sections/sector/IndustryInfrastructureScannable";
import IndustryInfrastructure from "@/components/sections/sector/IndustryInfrastructure";
import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import MobNav from "@/components/shared/MobNav";
import React from "react";

const page = () => {
  return (
    <>
      <Navbar />
      <MobNav />
      <Hero />
      <IndustryInfrastructure />
      <IndustryInfrastructureScannable />
      <Ctas />
      <Footer />
    </>
  );
};

export default page;
