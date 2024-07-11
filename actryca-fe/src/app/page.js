import FirstSection from "@/components/home/firstSection/FirstSection";
import MobileSection from "@/components/home/mobile-section/MobileSection";
import PopularArtists from "@/components/home/popular-artists/PopularArtists";
import Reviews from "@/components/home/reviews/Reviews";
import ServiceSection from "@/components/home/services/ServiceSection";
import WhyActrycaSection from "@/components/home/why-actryca/WhyActrycaSection";

export default function Home() {
  return (
    <div className="flex flex-col gap-32">
      <FirstSection />
      <WhyActrycaSection />
      <ServiceSection />
      <PopularArtists />
      <MobileSection />
      <Reviews />
    </div>
  );
}
