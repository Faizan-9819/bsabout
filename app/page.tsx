import Navbar from "@/components/shared/Navbar";
import Hero from "@/components/sections/home/Hero";
import About from "@/components/sections/home/About";
import TrustMetrics from "@/components/sections/home/TrustMetrics";
import BuildspaceModel from "@/components/sections/home/BuildspaceModel";
import Developments from "@/components/sections/home/Developments";
import FullLifecycleApproach from "@/components/sections/home/FullLifecycleApproach";
import Industries from "@/components/sections/home/Industries";
import ProjectSpotlights from "@/components/sections/home/ProjectSpotlights";
import Sustainability from "@/components/sections/home/Sustainability";
import Insights from "@/components/sections/home/Insights";
import Ecosystem from "@/components/sections/home/Ecosystem";
import Footer from "@/components/shared/Footer";
import LifestyleValueW from "@/components/sections/home/LifestyleValueW";
import PortfolioSection from "@/components/sections/home/PortfolioSection";
import Map from "@/components/sections/home/Map";

export default function Home() {
  return (
    <main className="flex flex-col">
      <Navbar />
      <Hero />
      <About />
      <TrustMetrics />
      <Map />
      <BuildspaceModel />
      {/* <PortfolioSection /> */}
      <ProjectSpotlights />
      {/* <Developments /> */}
      <LifestyleValueW />
      <Industries />
      <Sustainability />
      <Insights />
      <Ecosystem />
      <Footer />
    </main>
  );
}
