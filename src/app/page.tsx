import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import DynamicBackground from "@/components/DynamicBackground";

export default function Home() {
  return (
    <main className="min-h-screen relative">
      <DynamicBackground />
      <Navigation />
      <div id="hero">
        <HeroSection />
      </div>
      <AboutSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
