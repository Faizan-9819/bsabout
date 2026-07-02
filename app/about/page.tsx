import Navbar from "@/components/shared/Navbar";
import MobNav from "@/components/shared/MobNav";
// import About from "@/components/sections/home/About";
import Ecosystem from "@/components/sections/about/Ecosystem";
import Footer from "@/components/shared/Footer";
import AboutMetrics from "@/components/sections/about/AboutMetrics";
import OurStory from "@/components/sections/about/OurStory";
import StoryCarousel from "@/components/sections/about/StoryCarousel";
import LeadershipTeam from "@/components/sections/about/LeadershipTeam";
import ExploreMore from "@/components/sections/about/ExploreMore";
import Hero from "@/components/sections/about/Hero";

export default function Home() {
  return (
    <main className="flex flex-col">
      <Navbar />
      <MobNav />
      <Hero />
      <OurStory />
      <StoryCarousel />
      <LeadershipTeam />
      <AboutMetrics />
      <ExploreMore />
      <Ecosystem />
      <Footer />
    </main>
  );
}
