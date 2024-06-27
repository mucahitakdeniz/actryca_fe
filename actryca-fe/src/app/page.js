import Reviews from "@/components/home/reviews/Reviews";
import Navbar from "@/components/home/navbar/Navbar";
import Footer from "@/components/home/footer/Footer";
import Image from "next/image";
import FirstSection from "@/components/home/firstSection/FirstSection";

export default function Home() {
  return (
    <div className="">
       <Navbar />
       <FirstSection />
      <Reviews />
      <Footer />
    </div>
  );
}
