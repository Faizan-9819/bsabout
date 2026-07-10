import Hero from "@/components/sections/sector/Hero";
import Ctas from "@/components/sections/sector/CtaS";
import IndustryInfrastructureScannable from "@/components/sections/sector/IndustryInfrastructureScannable";
import IndustryInfrastructure from "@/components/sections/sector/IndustryInfrastructure";
import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import MobNav from "@/components/shared/MobNav";
import CtaS from "@/components/sections/sector/CtaS";
import React from "react";

const page = () => {
  return (
    <>
      <Navbar />
      <MobNav />
      <Hero />
      <IndustryInfrastructure />
      <IndustryInfrastructureScannable />
<<<<<<< HEAD
      <Ctas />
=======
      <CtaS />
>>>>>>> 698b07bedd3b85c4ed72f0c9bd0cb1989960995d
      <Footer />
    </>
  );
};

export default page;
