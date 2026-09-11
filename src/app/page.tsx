import { Metadata } from "next";
import { HeroSection } from "@/components/sections/HeroSection";
import { BrandStatementSection } from "@/components/sections/BrandStatementSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { WorkSection } from "@/components/sections/WorkSection";
import { CreativeShowcaseSection } from "@/components/sections/CreativeShowcaseSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { BlogPreviewSection } from "@/components/sections/BlogPreviewSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { FinalCtaSection } from "@/components/sections/FinalCtaSection";
import { SITE_CONFIG, getCanonicalUrl } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Owl Studio — Creative Digital Agency | AI Ads, Websites & Marketing",
  description:
    "Owl Studio is a modern creative agency combining AI, design, websites, digital marketing, social media, and creative advertising for brands ready to stand out.",
  alternates: {
    canonical: getCanonicalUrl(),
  },
  openGraph: {
    title: "Owl Studio — Creative Digital Agency | AI Ads, Websites & Marketing",
    description:
      "We make brands impossible to ignore through AI-powered advertising, bespoke websites, and performance digital marketing.",
    url: getCanonicalUrl(),
    siteName: SITE_CONFIG.name,
    images: [
      {
        url: `${SITE_CONFIG.url}/images/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Owl Studio Creative Agency",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function HomePage() {
  return (
    <>
      {/* 01: Hero Section */}
      <HeroSection />

      {/* 02: Intro / Brand Statement */}
      <BrandStatementSection />

      {/* 03: 5 Core Services Section */}
      <ServicesSection />

      {/* 04: Selected Portfolio Work */}
      <WorkSection />

      {/* 05: Creative Lab Showcase */}
      <CreativeShowcaseSection />

      {/* 06: 5-Step Process */}
      <ProcessSection />

      {/* 07: Latest Blog Insights */}
      <BlogPreviewSection />

      {/* 08: Why Owl Studio / About */}
      <AboutSection />

      {/* 09: Final Collaborative CTA */}
      <FinalCtaSection />
    </>
  );
}
