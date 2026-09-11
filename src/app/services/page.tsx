import { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Check, ArrowRight, Sparkles, Layers, Eye } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { SERVICES_DATA } from "@/lib/services-data";
import { SITE_CONFIG, getCanonicalUrl } from "@/lib/constants";
import { getServicesCollectionSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Services & Capabilities | Creative Digital Agency — Owl Studio",
  description:
    "Explore Owl Studio's 5 core disciplines: AI Ads Generation, Website Design, Digital Marketing, Social Media Management, and Graphic Designing. Built for modern brands.",
  alternates: {
    canonical: getCanonicalUrl("/services"),
  },
  openGraph: {
    title: "Services & Capabilities | Creative Digital Agency — Owl Studio",
    description:
      "Explore Owl Studio's 5 core disciplines: AI Ads Generation, Website Design, Digital Marketing, Social Media Management, and Graphic Designing.",
    url: getCanonicalUrl("/services"),
    siteName: SITE_CONFIG.name,
    type: "website",
  },
};

export default function ServicesPage() {
  const [s1, s2, s3, s4, s5] = SERVICES_DATA;
  const servicesSchema = getServicesCollectionSchema(SERVICES_DATA);

  const masterProcess = [
    {
      num: "01",
      title: "Discover",
      desc: "Deep dissection of business model, audience intent, and market white space.",
    },
    {
      num: "02",
      title: "Strategy",
      desc: "Establishing narrative framing, channel architecture, and conversion hypotheses.",
    },
    {
      num: "03",
      title: "Create",
      desc: "High-velocity production of visual assets, bespoke code, and campaign creatives.",
    },
    {
      num: "04",
      title: "Launch",
      desc: "Flawless deployment across live production servers and targeted ad networks.",
    },
    {
      num: "05",
      title: "Improve",
      desc: "Iterative analytics tracking, attribution modeling, and conversion optimization.",
    },
  ];

  return (
    <div className="bg-[#F5F3EA] min-h-screen pt-36 pb-24">
      {/* Services Collection Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }}
      />
      <Container>
        {/* Header */}
        <div className="max-w-4xl space-y-6 pb-16 border-b border-brand-dark/10">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-brand-muted">
            <span className="h-2 w-2 rounded-full bg-accent" />
            Agency Disciplines &amp; Capabilities
          </div>

          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tight text-brand-dark uppercase leading-[0.98]">
            Synchronized <br />
            <span className="relative inline-block text-brand-dark">
              capabilities.
              <span className="absolute left-0 bottom-2 w-full h-3 sm:h-4 bg-accent/60 -z-10 rounded-sm" />
            </span>
          </h1>

          <p className="text-lg sm:text-2xl text-brand-muted leading-relaxed max-w-2xl font-normal">
            Five core disciplines designed to work independently or in synergy to elevate modern
            brands across every digital touchpoint.
          </p>

          {/* Jump Links Pill Row */}
          <div className="pt-2 flex flex-wrap gap-2 text-xs font-semibold text-brand-dark">
            {SERVICES_DATA.map((s) => (
              <a
                key={s.slug}
                href={`#${s.slug}`}
                className="rounded-full bg-white border border-brand-dark/10 px-4 py-2 hover:border-brand-dark hover:bg-accent/20 transition-all shadow-owl-sm"
              >
                {s.num} {s.title}
              </a>
            ))}
          </div>
        </div>

        {/* Varied Editorial Service Showcase */}
        <div className="py-20 space-y-16 border-b border-brand-dark/10">
          {/* Feature 1: AI Ads Generation (Full Width Heroic Card) */}
          <div
            id={s1.slug}
            className="rounded-3xl border border-brand-dark/10 bg-white p-8 sm:p-12 lg:p-16 shadow-owl-sm transition-all hover:border-brand-dark/30 hover:shadow-owl-md"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-6 space-y-6">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-sm font-bold text-accent-dark">
                    {s1.num} //
                  </span>
                  <span className="rounded-full bg-[#FFF4B8] px-3 py-0.5 text-xs font-bold text-brand-dark uppercase">
                    Generative Creative
                  </span>
                </div>

                <h2 className="text-4xl sm:text-5xl font-black text-brand-dark tracking-tight uppercase leading-tight">
                  {s1.title}
                </h2>

                <p className="text-base sm:text-lg text-brand-muted leading-relaxed">
                  {s1.description}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2">
                  {s1.deliverables.slice(0, 4).map((d) => (
                    <div key={d} className="flex items-center gap-2 text-xs sm:text-sm text-brand-dark/80 font-medium">
                      <Check className="h-3.5 w-3.5 text-accent-dark shrink-0" />
                      <span>{d}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4">
                  <Link
                    href={`/services/${s1.slug}`}
                    className="inline-flex items-center gap-3 rounded-full bg-accent px-8 py-3.5 text-sm font-bold text-brand-dark hover:bg-accent-hover hover:shadow-owl-md transition-all shadow-owl-sm"
                  >
                    <span>Explore Dedicated AI Ads Page</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-6">
                <div className="relative aspect-[16/10] w-full rounded-2xl border border-brand-dark/10 bg-gradient-to-br from-amber-100 via-stone-200 to-amber-200 p-8 flex flex-col justify-between shadow-inner">
                  <div className="flex justify-between items-start">
                    <span className="font-mono text-xs font-bold text-brand-dark uppercase tracking-wider">
                      AI Production Study
                    </span>
                    <div className="h-8 w-8 rounded-full bg-white flex items-center justify-center shadow-owl-sm">
                      <ArrowUpRight className="h-4 w-4 text-brand-dark" />
                    </div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-2xl sm:text-3xl font-black text-brand-dark">
                      CinemaScope Synthetic Frames
                    </div>
                    <div className="text-xs text-brand-muted">
                      Volumetric lighting &amp; character consistency at production speed
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Features 2 & 3: Two Column Asymmetric Grid (Website Design & Digital Marketing) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Website Design (6 cols) */}
            <div
              id={s2.slug}
              className="lg:col-span-6 rounded-3xl border border-brand-dark/10 bg-white p-8 sm:p-10 shadow-owl-sm flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="font-mono text-xs font-bold text-accent-dark">
                    {s2.num} //
                  </span>
                  <span className="rounded-full bg-[#EDEBE3] px-3 py-0.5 text-xs font-bold text-brand-dark uppercase">
                    Next.js Engineering
                  </span>
                </div>

                <div className="aspect-[16/9] w-full rounded-2xl bg-gradient-to-br from-yellow-100 to-yellow-200 mb-6 border border-brand-dark/10 p-6 flex flex-col justify-between">
                  <span className="text-[10px] font-mono font-bold uppercase text-brand-dark/60">
                    100/100 Core Web Vitals
                  </span>
                  <div className="text-xl font-black text-brand-dark">
                    Fast, Editorial Digital Platforms
                  </div>
                </div>

                <h2 className="text-3xl font-black text-brand-dark tracking-tight uppercase">
                  {s2.title}
                </h2>

                <p className="mt-3 text-sm text-brand-muted leading-relaxed">
                  {s2.description}
                </p>

                <div className="mt-6 space-y-2">
                  {s2.deliverables.slice(0, 3).map((d) => (
                    <div key={d} className="flex items-center gap-2 text-xs text-brand-dark/80">
                      <Check className="h-3 w-3 text-accent-dark shrink-0" />
                      <span>{d}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-brand-dark/10">
                <Link
                  href={`/services/${s2.slug}`}
                  className="inline-flex items-center gap-2 text-sm font-bold text-brand-dark hover:text-accent-dark transition-colors"
                >
                  <span>Explore Website Design</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Digital Marketing (6 cols) */}
            <div
              id={s3.slug}
              className="lg:col-span-6 rounded-3xl border border-brand-dark/10 bg-white p-8 sm:p-10 shadow-owl-sm flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="font-mono text-xs font-bold text-accent-dark">
                    {s3.num} //
                  </span>
                  <span className="rounded-full bg-[#EDEBE3] px-3 py-0.5 text-xs font-bold text-brand-dark uppercase">
                    Performance Acquisition
                  </span>
                </div>

                <div className="aspect-[16/9] w-full rounded-2xl bg-gradient-to-br from-teal-100 to-teal-300 mb-6 border border-brand-dark/10 p-6 flex flex-col justify-between">
                  <span className="text-[10px] font-mono font-bold uppercase text-brand-dark/60">
                    Compounding Growth Funnels
                  </span>
                  <div className="text-xl font-black text-brand-dark">
                    Data-Informed Paid &amp; Search Scale
                  </div>
                </div>

                <h2 className="text-3xl font-black text-brand-dark tracking-tight uppercase">
                  {s3.title}
                </h2>

                <p className="mt-3 text-sm text-brand-muted leading-relaxed">
                  {s3.description}
                </p>

                <div className="mt-6 space-y-2">
                  {s3.deliverables.slice(0, 3).map((d) => (
                    <div key={d} className="flex items-center gap-2 text-xs text-brand-dark/80">
                      <Check className="h-3 w-3 text-accent-dark shrink-0" />
                      <span>{d}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-brand-dark/10">
                <Link
                  href={`/services/${s3.slug}`}
                  className="inline-flex items-center gap-2 text-sm font-bold text-brand-dark hover:text-accent-dark transition-colors"
                >
                  <span>Explore Digital Marketing</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>

          {/* Features 4 & 5: Two Column Cards (Social Media & Graphic Design) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Social Media Management (6 cols) */}
            <div
              id={s4.slug}
              className="lg:col-span-6 rounded-3xl border border-brand-dark/10 bg-white p-8 sm:p-10 shadow-owl-sm flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="font-mono text-xs font-bold text-accent-dark">
                    {s4.num} //
                  </span>
                  <span className="rounded-full bg-[#EDEBE3] px-3 py-0.5 text-xs font-bold text-brand-dark uppercase">
                    Editorial Channels
                  </span>
                </div>

                <div className="aspect-[16/9] w-full rounded-2xl bg-gradient-to-br from-stone-200 to-stone-400 mb-6 border border-brand-dark/10 p-6 flex flex-col justify-between">
                  <span className="text-[10px] font-mono font-bold uppercase text-brand-dark/60">
                    High-Retention Feed Design
                  </span>
                  <div className="text-xl font-black text-brand-dark">
                    Curated Social Monographs &amp; Reels
                  </div>
                </div>

                <h2 className="text-3xl font-black text-brand-dark tracking-tight uppercase">
                  {s4.title}
                </h2>

                <p className="mt-3 text-sm text-brand-muted leading-relaxed">
                  {s4.description}
                </p>

                <div className="mt-6 space-y-2">
                  {s4.deliverables.slice(0, 3).map((d) => (
                    <div key={d} className="flex items-center gap-2 text-xs text-brand-dark/80">
                      <Check className="h-3 w-3 text-accent-dark shrink-0" />
                      <span>{d}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-brand-dark/10">
                <Link
                  href={`/services/${s4.slug}`}
                  className="inline-flex items-center gap-2 text-sm font-bold text-brand-dark hover:text-accent-dark transition-colors"
                >
                  <span>Explore Social Media Management</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Graphic Designing (6 cols) */}
            <div
              id={s5.slug}
              className="lg:col-span-6 rounded-3xl border border-brand-dark/10 bg-white p-8 sm:p-10 shadow-owl-sm flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="font-mono text-xs font-bold text-accent-dark">
                    {s5.num} //
                  </span>
                  <span className="rounded-full bg-[#EDEBE3] px-3 py-0.5 text-xs font-bold text-brand-dark uppercase">
                    Brand Systems &amp; Identity
                  </span>
                </div>

                <div className="aspect-[16/9] w-full rounded-2xl bg-gradient-to-br from-stone-300 to-stone-500 mb-6 border border-brand-dark/10 p-6 flex flex-col justify-between">
                  <span className="text-[10px] font-mono font-bold uppercase text-white/70">
                    Vector Craft &amp; Typography
                  </span>
                  <div className="text-xl font-black text-white">
                    Iconic Identity &amp; Print Packaging
                  </div>
                </div>

                <h2 className="text-3xl font-black text-brand-dark tracking-tight uppercase">
                  {s5.title}
                </h2>

                <p className="mt-3 text-sm text-brand-muted leading-relaxed">
                  {s5.description}
                </p>

                <div className="mt-6 space-y-2">
                  {s5.deliverables.slice(0, 3).map((d) => (
                    <div key={d} className="flex items-center gap-2 text-xs text-brand-dark/80">
                      <Check className="h-3 w-3 text-accent-dark shrink-0" />
                      <span>{d}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-brand-dark/10">
                <Link
                  href={`/services/${s5.slug}`}
                  className="inline-flex items-center gap-2 text-sm font-bold text-brand-dark hover:text-accent-dark transition-colors"
                >
                  <span>Explore Graphic Designing</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Master Cross-Disciplinary Process Section */}
        <div className="py-24 border-b border-brand-dark/10">
          <div className="max-w-2xl mb-16">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-brand-muted mb-3">
              <span className="h-2 w-2 rounded-full bg-accent" />
              Cross-Disciplinary Workflow
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-brand-dark uppercase tracking-tight">
              How Our Disciplines Connect
            </h2>
            <p className="mt-3 text-base text-brand-muted">
              Whether deploying a single service or an integrated multi-channel campaign, every project runs through our five-stage framework.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {masterProcess.map((step) => (
              <div
                key={step.num}
                className="rounded-3xl border border-brand-dark/10 bg-white p-6 sm:p-8 flex flex-col justify-between shadow-owl-sm"
              >
                <div>
                  <span className="font-mono text-2xl font-black text-accent-dark">
                    {step.num} //
                  </span>
                  <h3 className="mt-4 text-xl font-bold text-brand-dark">{step.title}</h3>
                  <p className="mt-2 text-xs sm:text-sm text-brand-muted leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="pt-24 text-center space-y-6">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-brand-muted">
            <span className="h-2 w-2 rounded-full bg-accent" />
            Project Commissioning
          </div>

          <h2 className="text-4xl sm:text-6xl font-black text-brand-dark uppercase tracking-tight">
            Have a project requiring multiple capabilities?
          </h2>

          <p className="text-base sm:text-lg text-brand-muted max-w-xl mx-auto">
            We architect tailored multidisciplinary teams across design, code, and marketing to achieve your growth targets.
          </p>

          <div className="pt-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 rounded-full bg-accent px-9 py-4 text-base font-bold text-brand-dark shadow-owl-sm hover:bg-accent-hover hover:shadow-owl-md hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              <span>Start a Project Consultation</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
}
