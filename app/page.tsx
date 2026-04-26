import Navbar from "@/app/components/Navbar";
import HeroSection from "@/app/components/HeroSection";
import EventsSection from "@/app/components/EventsSection";
import FeaturedEvent from "@/app/components/FeaturedEvent";
import PartyCalendar from "@/app/components/PartyCalendar";
import GallerySection from "@/app/components/GallerySection";
import Footer from "@/app/components/Footer";

export default function Home() {
  return (
    <main className="relative bg-[#0a0a0a]">
      <Navbar />
      <HeroSection />
      <EventsSection />
      <FeaturedEvent />
      <PartyCalendar />
      <GallerySection />
      <Footer />
    </main>
  );
}
