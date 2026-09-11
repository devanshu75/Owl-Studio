import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { getAllProjects } from "@/lib/projects-data";
import { SITE_CONFIG, getCanonicalUrl } from "@/lib/constants";
import { WorkPortfolioHub } from "@/components/work/WorkPortfolioHub";

export const metadata: Metadata = {
  title: "Work | Selected Portfolio & Case Studies — Owl Studio",
  description:
    "Explore Owl Studio's selected portfolio spanning cinematic AI advertising concepts, Next.js web applications, full-funnel digital marketing, social systems, and luxury brand identities.",
  alternates: {
    canonical: getCanonicalUrl("/work"),
  },
  openGraph: {
    title: "Work | Selected Portfolio & Case Studies — Owl Studio",
    description:
      "Curated index of creative advertising campaigns, high-performance web applications, and brand identities.",
    url: getCanonicalUrl("/work"),
    siteName: SITE_CONFIG.name,
    type: "website",
  },
};

export default function WorkPage() {
  const allProjects = getAllProjects();

  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Owl Studio Selected Portfolio",
    description:
      "A curated collection of selected work across AI Ads, Website Design, Digital Marketing, Social Media, and Graphic Design.",
    url: getCanonicalUrl("/work"),
    provider: {
      "@type": "Organization",
      name: SITE_CONFIG.name,
      url: getCanonicalUrl(),
    },
    hasPart: allProjects.map((p) => ({
      "@type": "CreativeWork",
      name: p.title,
      description: p.shortDescription,
      url: getCanonicalUrl(`/work/${p.slug}`),
      genre: p.category,
      creator: {
        "@type": "Organization",
        name: SITE_CONFIG.name,
      },
    })),
  };

  return (
    <div className="bg-[#F5F3EA] min-h-screen pt-36 pb-24">
      {/* Inject JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }}
      />

      <Container>
        {/* Editorial Page Header */}
        <div className="max-w-4xl space-y-6 pb-16 border-b border-brand-dark/10">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-brand-muted">
            <span className="h-2 w-2 rounded-full bg-accent" />
            Selected Portfolio &amp; Case Studies
          </div>

          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tight text-brand-dark uppercase leading-[1.02]">
            Work that commands <br />
            <span className="relative inline-block text-brand-dark">
              attention.
              <span className="absolute left-0 bottom-1 w-full h-3 bg-accent/50 -z-10 rounded-sm" />
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-brand-muted leading-relaxed max-w-2xl font-normal">
            A curated index of creative advertising campaigns, Next.js web applications,
            and brand identities. Transparently presented with honest conceptual labeling.
          </p>

          <div className="inline-flex items-center gap-2 rounded-full bg-white border border-brand-dark/10 px-3.5 py-1 text-xs font-mono text-brand-dark">
            <Sparkles className="h-3 w-3 text-accent-dark" />
            Zero Fabricated Metrics • Clear Concept Attribution
          </div>
        </div>

        {/* Interactive Portfolio Filter & Editorial Grid */}
        <div className="py-16">
          <WorkPortfolioHub allProjects={allProjects} />
        </div>

        {/* Bottom Conversion CTA */}
        <div className="pt-16 pb-8 text-center space-y-6 border-t border-brand-dark/10">
          <div className="inline-block rounded-full bg-accent/30 border border-accent/60 px-3 py-1 text-xs font-mono font-bold text-brand-dark uppercase tracking-wider">
            Collaboration
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-brand-dark uppercase tracking-tight">
            Have a project in mind?
          </h2>
          <p className="text-base sm:text-lg text-brand-muted max-w-xl mx-auto">
            From generative commercial campaigns to flagship web platforms, we help ambitious brands stand out.
          </p>
          <div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 rounded-full bg-accent px-8 py-4 text-base font-bold text-brand-dark shadow-owl-sm transition-all hover:bg-accent-hover hover:shadow-owl-md"
            >
              <span>Start a Project</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
}
