import ModernNavbar from "@/components/ModernNavbar";
import Hero3D from "@/components/Hero3D";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import TrainingSection from "@/components/TrainingSection";
import PortfolioSection from "@/components/PortfolioSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import ModernFooter from "@/components/ModernFooter";

export default function Home() {
  return (
    <main className="relative">
      <ModernNavbar />
      <Hero3D />
      <AboutSection />
      <ServicesSection />
      <TrainingSection />
      <PortfolioSection />
      <TestimonialsSection />
      <ContactSection />
      <ModernFooter />
    </main>
  );
}
