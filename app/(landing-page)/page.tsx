import Navbar from "@/components/navbar/navbar";
import HeroSection from "./hero-section";
import Section from "./sections";

const LandingPage = () => {
  return (
    <div className="p-4">
      <Navbar />
      <HeroSection />
      <Section />
    </div>
  );
};

export default LandingPage;
