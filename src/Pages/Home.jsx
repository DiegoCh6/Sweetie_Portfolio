import { Navbar } from "../components/Navbar";
import { StarBackground } from "../components/StarBackground";
import { ThemeToggle } from "../components/ThemeToggle";
import { HeroSection } from "../components/HeroSection";
import { AboutSection } from "../components/AboutSection";
import { SkillsSection } from "../components/SkillsSection";
import { Experience } from "../components/Experience";
import { ContactSection } from "../components/ContactSection";
import { Footer } from "../components/Footer";

export const Home = () => {
  return (
  <div className="min-h-screen bg-background text-foreground overflow-x-hidden">

    {/* Theme Toggle */ }
    <ThemeToggle />
    <StarBackground />
    <Navbar />
    <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <Experience/>
        <ContactSection />
    </main>
    <Footer />
  </div>
  );
};