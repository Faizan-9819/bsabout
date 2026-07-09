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
    title: "Building Industrial Infrastructure Through Great People",
    description:
      "At Build Space Industrial Parks, we are building more than industrial and logistics infrastructure — we are building a platform driven by long-term thinking, disciplined execution, and ambitious growth.",
    author: "Maria CHougale",
    designation: "Sales Executive",
  },
  {
    id: "spotlight-2",
    image:
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=600&h=400&fit=crop&auto=format",
    video_url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    title: "Team Collaboration",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
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
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
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
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
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
