import { HeroSection } from "@/components/home/hero-section";
import { StatsSection } from "@/components/home/stats-section";
import { ServicesSection } from "@/components/home/services-section";
import { ScrollytellingSection } from "@/components/home/scrollytelling-section";
import { ProjectsSection } from "@/components/home/projects-section";
import { TestimonialsSection } from "@/components/home/testimonials-section";
import { CtaBanner } from "@/components/home/cta-banner";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <ServicesSection />
      <ScrollytellingSection />
      <ProjectsSection />
      <TestimonialsSection />
      <CtaBanner />
    </>
  );
}
