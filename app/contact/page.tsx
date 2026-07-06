import ContactFormSection from "@/components/sections/contact/ContactFormSection";
import ContactHero from "@/components/sections/contact/ContactHero";
import MapSection from "@/components/sections/contact/MapSection";
import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import React from "react";

const page = () => {
  return (
    <>
      <Navbar />
      <ContactHero />
      <ContactFormSection />
      <MapSection />
      <Footer />
    </>
  );
};

export default page;
