import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Sparkles, Wand2, Compass, Layers } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SITE_CONFIG, getCanonicalUrl } from "@/lib/constants";
import { getAboutPageSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "About Us | Multidisciplinary Creative Studio — Owl Studio",
  description:
    "Learn about Owl Studio's creative philosophy, AI-assisted workflows, and multidisciplinary craft spanning AI ads, websites, digital marketing, and brand identity.",
  alternates: {
    canonical: getCanonicalUrl("/about"),
  },
  openGraph: {
    title: "About Us | Multidisciplinary Creative Studio — Owl Studio",
    description:
      "A modern creative studio combining human art direction, generative AI workflows, and high-performance engineering for ambitious brands.",
    url: getCanonicalUrl("/about"),
    siteName: SITE_CONFIG.name,
    type: "website",
  },
};

export default function AboutPage() {
  const aboutSchema = getAboutPageSchema();
  const disciplines = [
    {
      title: "AI Advertising",
      slug: "ai-ads",
      tagline: "High-concept video and motion without 6-figure production friction.",
      description:
        "We build customized prompt pipelines and generative lighting workflows to produce broadcast-grade commercial video and paid social assets in days rather than months.",
    },
    {
      title: "Website Design",
      slug: "website-design",
      tagline: "Sub-second Next.js platforms engineered for high conversion.",
      description:
        "Digital flagships crafted with editorial elegance, accessible semantic HTML, and 100/100 Core Web Vitals to convert high-intent traffic into loyal customers.",
    },
    {
      title: "Digital Marketing",
      slug: "digital-marketing",
      tagline: "Full-funnel acquisition, paid performance, and conversion architecture.",
      description:
        "Performance marketing that pairs rigorous audience segmentation with high-frequency visual testing across Meta, Google, and emerging channels.",
    },
    {
      title: "Social Media Systems",
      slug: "social-media-management",
      tagline: "Curated editorial grids, high-retention carousels, and narrative direction.",
      description:
        "We treat your brand feed like a luxury quarterly monograph—eliminating low-effort filler in favor of disciplined typography and scroll-stopping visual craft.",
    },
    {
      title: "Graphic Designing",
      slug: "graphic-design",
      tagline: "Identity systems, bespoke typography, and physical packaging collateral.",
      description:
        "Monograms, vector marks, and comprehensive design manuals built with mathematical harmony and typographic conviction to endure across decades.",
    },
  ];

  const methodologySteps = [
    {
      step: "01",
      title: "Discovery & Market Architecture",
      body: "We audit your competitive landscape, customer psychology, and aesthetic vulnerabilities to identify an uncontested positioning angle.",
    },
    {
      step: "02",
      title: "Creative Concept & Thesis",
      body: "We articulate a bold creative hypothesis, testing narrative hooks, typographic directions, and visual tensions before touching production tools.",
    },
    {
      step: "03",
      title: "Synthesis & High-Craft Execution",
      body: "Our hybrid pipeline deploys neural models for visual scale alongside rigorous human post-production, code architecture, and color grading.",
    },
    {
      step: "04",
      title: "Launch & Continuous Iteration",
      body: "We deploy sub-second platforms, launch targeted creative suites, and systematically test messaging variations based on live audience engagement.",
    },
  ];

  return (
    <div className="bg-[#F5F3EA] min-h-screen pt-36 pb-24">
      {/* AboutPage Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }}
      />
      <Container>
        {/* Editorial Header */}
        <ScrollReveal yOffset={24}>
          <div className="max-w-4xl space-y-6 pb-16 border-b border-brand-dark/10">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-brand-muted">
              <span className="h-2 w-2 rounded-full bg-accent" />
              About Owl Studio
            </div>

            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tight text-brand-dark uppercase leading-[1.02]">
              We make brands <br />
              <span className="relative inline-block text-brand-dark">
                impossible to ignore.
                <span className="absolute left-0 bottom-1 w-full h-3 bg-accent/50 -z-10 rounded-sm" />
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-brand-muted leading-relaxed max-w-2xl font-normal">
              Owl Studio is an independent creative digital agency. We unite human art direction, generative AI pipelines, and performance engineering to help modern brands command attention and drive sustainable growth.
            </p>

            <div className="inline-flex items-center gap-2 rounded-full bg-white border border-brand-dark/10 px-3.5 py-1 text-xs font-mono text-brand-dark">
              <Sparkles className="h-3 w-3 text-accent-dark" />
              Honest Craft • No Inflated Metrics • Multi-Disciplinary Focus
            </div>
          </div>
        </ScrollReveal>

        {/* Section: Who We Are & Philosophy */}
        <ScrollReveal delay={0.1}>
          <div className="py-20 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start border-b border-brand-dark/10">
            <div className="lg:col-span-5 space-y-4">
              <div className="text-xs font-mono uppercase tracking-widest text-accent-dark font-bold">
                Our Core Philosophy
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-brand-dark uppercase tracking-tight">
                Craft Meets Algorithmic Speed
              </h2>
              <p className="text-base text-brand-muted leading-relaxed">
                We reject the false choice between patient human craftsmanship and high-velocity digital technology.
              </p>
            </div>

            <div className="lg:col-span-7 bg-white rounded-3xl border border-brand-dark/10 p-8 sm:p-12 shadow-owl-sm space-y-6">
              <blockquote className="text-xl sm:text-2xl font-bold text-brand-dark leading-snug border-l-4 border-accent pl-6 italic">
                &ldquo;Technology gives us new instruments of exploration; human taste and strategic conviction still make all the difference.&rdquo;
              </blockquote>
              <p className="text-sm sm:text-base text-brand-muted leading-relaxed">
                Anyone with a computer can generate mediocre images or spin up generic website templates. That is precisely why the internet is drowning in noise. We treat generative artificial intelligence not as an autopilot, but as an extraordinary digital darkroom—allowing experienced directors to visualize cinematic worlds without multimillion-dollar production delays.
              </p>
            </div>
          </div>
        </ScrollReveal>

        {/* Section: AI-Assisted Workflows */}
        <ScrollReveal delay={0.1}>
          <div className="py-20 border-b border-brand-dark/10">
            <div className="max-w-2xl mb-12">
              <div className="text-xs font-mono uppercase tracking-widest text-accent-dark font-bold mb-2">
                Technology &amp; Methodology
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-brand-dark uppercase tracking-tight">
                How We Use AI Authentically
              </h2>
              <p className="mt-2 text-base text-brand-muted leading-relaxed">
                A transparent look at the principles guiding our hybrid creative pipelines.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="rounded-3xl border border-brand-dark/10 bg-white p-8 shadow-owl-sm flex flex-col justify-between hover:border-brand-dark/30 hover:shadow-owl-md transition-all duration-300">
                <div>
                  <div className="h-10 w-10 rounded-full bg-[#EDEBE3] flex items-center justify-center mb-6 text-brand-dark">
                    <Wand2 className="h-5 w-5 text-accent-dark" />
                  </div>
                  <h3 className="text-xl font-bold text-brand-dark uppercase">
                    Seed Consistency &amp; Lighting
                  </h3>
                  <p className="mt-3 text-sm text-brand-muted leading-relaxed">
                    We don&apos;t use unguided prompts. We build custom seed locks, image-to-image constraints, and precise lighting directives simulating physical cinematography equipment.
                  </p>
                </div>
              </div>

              <div className="rounded-3xl border border-brand-dark/10 bg-white p-8 shadow-owl-sm flex flex-col justify-between hover:border-brand-dark/30 hover:shadow-owl-md transition-all duration-300">
                <div>
                  <div className="h-10 w-10 rounded-full bg-[#EDEBE3] flex items-center justify-center mb-6 text-brand-dark">
                    <Layers className="h-5 w-5 text-accent-dark" />
                  </div>
                  <h3 className="text-xl font-bold text-brand-dark uppercase">
                    Human Post-Production
                  </h3>
                  <p className="mt-3 text-sm text-brand-muted leading-relaxed">
                    Every generative sequence undergoes frame-by-frame color balancing in DaVinci Resolve, spatial sound design, and bespoke typographic composition to pass broadcast thresholds.
                  </p>
                </div>
              </div>

              <div className="rounded-3xl border border-brand-dark/10 bg-white p-8 shadow-owl-sm flex flex-col justify-between hover:border-brand-dark/30 hover:shadow-owl-md transition-all duration-300">
                <div>
                  <div className="h-10 w-10 rounded-full bg-[#EDEBE3] flex items-center justify-center mb-6 text-brand-dark">
                    <Compass className="h-5 w-5 text-accent-dark" />
                  </div>
                  <h3 className="text-xl font-bold text-brand-dark uppercase">
                    Radical Attribution
                  </h3>
                  <p className="mt-3 text-sm text-brand-muted leading-relaxed">
                    We never claim speculative concept explorations are real client projects. We label our R&amp;D work openly, establishing trust through uncompromising honesty.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Section: Disciplines Grid */}
        <ScrollReveal delay={0.1}>
          <div className="py-20 border-b border-brand-dark/10">
            <div className="max-w-2xl mb-12">
              <div className="text-xs font-mono uppercase tracking-widest text-accent-dark font-bold mb-2">
                Studio Disciplines
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-brand-dark uppercase tracking-tight">
                Unified Capabilities
              </h2>
              <p className="mt-2 text-base text-brand-muted leading-relaxed">
                When advertising, web platforms, and brand identity speak the same visual language, brand equity compounds exponentially.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {disciplines.map((d) => (
                <Link
                  key={d.slug}
                  href={`/services/${d.slug}`}
                  className="group rounded-3xl border border-brand-dark/10 bg-white p-8 flex flex-col justify-between hover:border-brand-dark/30 hover:shadow-owl-md hover:-translate-y-0.5 transition-all duration-300"
                >
                  <div>
                    <h3 className="text-xl font-black text-brand-dark uppercase group-hover:text-accent-dark transition-colors">
                      {d.title}
                    </h3>
                    <p className="mt-1 text-xs font-bold text-accent-dark">
                      {d.tagline}
                    </p>
                    <p className="mt-3 text-xs sm:text-sm text-brand-muted leading-relaxed">
                      {d.description}
                    </p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-brand-dark/10 flex items-center justify-between text-xs font-bold text-brand-dark">
                    <span>Explore Service</span>
                    <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform text-accent-dark" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Section: 4-Step Engagement Workflow */}
        <ScrollReveal delay={0.1}>
          <div className="py-20 border-b border-brand-dark/10">
            <div className="max-w-2xl mb-12">
              <div className="text-xs font-mono uppercase tracking-widest text-accent-dark font-bold mb-2">
                Studio Methodology
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-brand-dark uppercase tracking-tight">
                How We Approach Every Project
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {methodologySteps.map((m) => (
                <div
                  key={m.step}
                  className="rounded-3xl border border-brand-dark/10 bg-white p-6 sm:p-8 flex flex-col justify-between shadow-owl-sm hover:border-brand-dark/30 hover:shadow-owl-md transition-all duration-300"
                >
                  <div>
                    <span className="font-mono text-sm font-bold text-accent-dark">
                      {m.step} // Phase
                    </span>
                    <h3 className="mt-3 text-lg font-bold text-brand-dark uppercase">
                      {m.title}
                    </h3>
                    <p className="mt-3 text-xs sm:text-sm text-brand-muted leading-relaxed">
                      {m.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Bottom CTA */}
        <ScrollReveal delay={0.1}>
          <div className="pt-20 text-center space-y-6">
            <div className="inline-block rounded-full bg-accent/30 border border-accent/60 px-3 py-1 text-xs font-mono font-bold text-brand-dark uppercase tracking-wider">
              Collaboration
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-brand-dark uppercase tracking-tight">
              Ready to collaborate with Owl Studio?
            </h2>
            <p className="text-base sm:text-lg text-brand-muted max-w-xl mx-auto">
              Tell us about your brand objectives, and we will evaluate technical scope, timeline, and creative fit.
            </p>
            <div>
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 rounded-full bg-accent px-8 py-4 text-base font-bold text-brand-dark shadow-owl-sm transition-all hover:bg-accent-hover hover:shadow-owl-md hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>Start a Project</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </Container>
    </div>
  );
}
