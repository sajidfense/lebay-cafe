import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import StorySection from "@/components/StorySection";
import MenuSection from "@/components/MenuSection";
import HighTeaSection from "@/components/HighTeaSection";
import ExperienceSection from "@/components/ExperienceSection";
import Footer from "@/components/Footer";
import SEOSchema from "@/components/SEOSchema";

const Index = () => {
  return (
    <div className="min-h-screen">
      <SEOSchema />
      <Navigation />
      <main>
        <HeroSection />
        <StorySection />
        <MenuSection />
        <HighTeaSection />
        <ExperienceSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
