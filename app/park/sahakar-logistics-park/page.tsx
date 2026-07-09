import type { Metadata } from "next";
import Navbar from "@/components/shared/Navbar";
import MobNav from "@/components/shared/MobNav";
import Footer from "@/components/shared/Footer";
import ParkHero from "@/components/sections/park/ParkHero";
import ParkAbout from "@/components/sections/park/ParkAbout";
import LocationMapClient from "@/components/sections/park/LocationMapClient";
import ParkDelivered from "@/components/sections/park/ParkDelivered";
import ParkSpecifications from "@/components/sections/park/ParkSpecifications";
import ParkMediaGallery from "@/components/sections/park/ParkMediaGallery";
import CtaV from "../../../components/sections/value/CtaV";
import ParkCta from "../../../components/sections/park/ParkCta";

export const metadata: Metadata = {
  title: "Sahakar Logistics Park — BuildSpace",
  description:
    "A 42-acre Grade-A industrial and logistics park in Bhiwandi, on India's leading warehousing corridor. Master-planned across five buildings with built-to-suit flexibility from 30,000 to 650,000 sq ft.",
};

export default function SahakarLogisticsParkPage() {
  return (
    <main className="flex flex-col">
      <Navbar />
      <MobNav />
      <ParkHero />
      <ParkAbout />
      <LocationMapClient />
      <ParkDelivered />
      <ParkSpecifications />
      <ParkMediaGallery />
      <ParkCta />
      <Footer />
    </main>
  );
}
