
import Benefits from "@/components/Benefits";
import Community from "@/components/Community";
import Footer from "@/components/Footer";
// import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import Slider from "@/components/Slider";
import VisionSection from "@/components/VisionSection";

export default function Home() {
  return (
    <div className="max-w-[1440px] min-w-[380px] w-full h-fit">
      <div className="flex flex-col w-full h-full px-8 gap-8">
        <Header/>
        <HeroSection/>
        <Slider/>
        <Community/>
        <VisionSection/>
        <Benefits/>
      </div>
      <Footer/>
    </div>
  );
}
