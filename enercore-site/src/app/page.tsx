import { HeroSection } from "@/components/home/hero-section";
import { StatsSection } from "@/components/home/stats-section";
import { ServicesSection } from "@/components/home/services-section";
import { ScrollytellingSection } from "@/components/home/scrollytelling-section";
import { ProjectsSection } from "@/components/home/projects-section";
import { TestimonialsSection } from "@/components/home/testimonials-section";
import { ClientVideoSection } from "@/components/home/client-video-section";
import { ClientsSection } from "@/components/home/clients-section";
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
      <ClientVideoSection />
      <ClientsSection />
      <CtaBanner />
    </>
  );
}
