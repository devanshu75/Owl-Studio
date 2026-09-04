import { HeroSection } from "@/components/sections/HeroSection";
import { MarqueeTicker } from "@/components/sections/MarqueeTicker";
import { StudioBentoSection } from "@/components/sections/StudioBentoSection";
import { FocusSection } from "@/components/sections/FocusSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { WorkSection } from "@/components/sections/WorkSection";
import { BlogPreviewSection } from "@/components/sections/BlogPreviewSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { FinalCtaSection } from "@/components/sections/FinalCtaSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <MarqueeTicker />
      <StudioBentoSection />
      <FocusSection />
      <ServicesSection />
      <WorkSection />
      <BlogPreviewSection />
      <AboutSection />
      <ContactSection />
      <FinalCtaSection />
    </>
  );
}
