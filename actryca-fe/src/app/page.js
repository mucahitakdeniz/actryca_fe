import MobileSection from "@/components/home/mobile-section/MobileSection";
import PopularArtists from "@/components/home/popular-artists/PopularArtists";
import Reviews from "@/components/home/reviews/Reviews";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <h1>Hello World</h1>
      <PopularArtists/>
      <MobileSection/>
      <Reviews />
    </div>
  );
}
