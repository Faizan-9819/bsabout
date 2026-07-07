import CareerHome from "@/components/sections/career/CareerHome";
import CTA from "@/components/sections/career/CTA";
import JoinUsSection from "@/components/sections/career/JoinUsSection";
import ProjectSpotlights from "@/components/sections/career/Projectspotlights";
import ProofAndScale from "@/components/sections/career/ProofAndScale";
import WhyUsCareer from "@/components/sections/career/WhyUsCareer";
import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import MobNav from "@/components/shared/MobNav";
import React from "react";

const spotlightData = [
  {
    id: "spotlight-1",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop",
    video_url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    title: "Building Amazing Products",
    description:
      "Our team's commitment to excellence and innovation shapes every project we undertake.",
    author: "Sarah Johnson",
    designation: "Senior Product Lead",
  },
  {
    id: "spotlight-2",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop",
    video_url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    title: "Team Collaboration",
    description:
      "Working together across disciplines to create exceptional results.",
    author: "Michael Chen",
    designation: "Engineering Manager",
  },
  {
    id: "spotlight-3",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop",
    video_url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    title: "Innovation Hub",
    description:
      "We foster creativity and push boundaries to deliver cutting-edge solutions.",
    author: "Emily Rodriguez",
    designation: "Creative Director",
  },
];

const page = () => {
  return (
    <>
      <Navbar />
      <MobNav />
      <CareerHome />
      <ProofAndScale />
      <WhyUsCareer />
      <CTA />
      <ProjectSpotlights spotlights={spotlightData} />
      <JoinUsSection />
      <Footer />
    </>
  );
};

export default page;
