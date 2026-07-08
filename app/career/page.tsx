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
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=600&h=400&fit=crop&auto=format",
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
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=600&h=400&fit=crop&auto=format",
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
      "https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h=400&fit=crop&auto=format",
    video_url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    title: "Innovation Hub",
    description:
      "We foster creativity and push boundaries to deliver cutting-edge solutions.",
    author: "Emily Rodriguez",
    designation: "Creative Director",
  },
  {
    id: "spotlight-4",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop&auto=format",
    video_url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    title: "Building",
    description:
      "Our team's commitment to excellence and innovation shapes every project we undertake.",
    author: "Sarah Johnson",
    designation: "Senior Product Lead",
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
