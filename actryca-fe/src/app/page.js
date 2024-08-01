import FirstSection from "@/components/home/firstSection/FirstSection";
import MobileSection from "@/components/home/mobile-section/MobileSection";
import PopularArtists from "@/components/home/popular-artists/PopularArtists";
import Reviews from "@/components/home/reviews/Reviews";
import ServiceSection from "@/components/home/services/ServiceSection";
import WhyActrycaSection from "@/components/home/why-actryca/WhyActrycaSection";
import { ChevronUp } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col gap-32">
      <FirstSection />
      <WhyActrycaSection />
      <ServiceSection />
      <PopularArtists />
      <MobileSection />
      <Reviews />
      <Link
        href="/"
        className="bg-primary-50 fixed bottom-5 right-5 w-16 h-16 rounded-full center hover:opacity-90 transition-all"
      >
        <ChevronUp size={32} />
      </Link>
    </div>
  );
}
