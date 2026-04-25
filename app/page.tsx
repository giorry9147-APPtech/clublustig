import Navbar from "@/app/components/Navbar";
import HeroSection from "@/app/components/HeroSection";
import EventsSection from "@/app/components/EventsSection";
import FeaturedEvent from "@/app/components/FeaturedEvent";
import VIPSection from "@/app/components/VIPSection";
import GallerySection from "@/app/components/GallerySection";
import LocationSection from "@/app/components/LocationSection";
import Footer from "@/app/components/Footer";

export default function Home() {
  return (
    <main className="relative bg-[#0a0a0a]">
      <Navbar />
      <HeroSection />
      <EventsSection />
      <FeaturedEvent />
      <VIPSection />
      <GallerySection />
      <LocationSection />
      <Footer />
    </main>
  );
}
