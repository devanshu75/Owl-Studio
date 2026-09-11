import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { SERVICES_DATA, getServiceBySlug } from "@/lib/services-data";
import { SITE_CONFIG, getCanonicalUrl } from "@/lib/constants";
import { ServiceHero } from "@/components/services/ServiceHero";
import { ServiceProblemOpportunity } from "@/components/services/ServiceProblemOpportunity";
import { ServiceWhatWeDo } from "@/components/services/ServiceWhatWeDo";
import { ServiceDeliverables } from "@/components/services/ServiceDeliverables";
import { ServiceProcess } from "@/components/services/ServiceProcess";
import { ServiceVisualShowcase } from "@/components/services/ServiceVisualShowcase";
import { ServiceRelatedWork } from "@/components/services/ServiceRelatedWork";
import { ServiceFaqSection } from "@/components/services/ServiceFaqSection";

interface ServicePageProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return SERVICES_DATA.map((service) => ({
    slug: service.slug,
  }));
}

export function generateMetadata({ params }: ServicePageProps): Metadata {
  const service = getServiceBySlug(params.slug);
  if (!service) return {};

  const pageUrl = getCanonicalUrl(`/services/${service.slug}`);

  return {
    title: service.seoTitle,
    description: service.seoDescription,
    alternates: {
      canonical: pageUrl,
    },
    openGraph: {
      title: service.seoTitle,
      description: service.seoDescription,
      url: pageUrl,
      siteName: SITE_CONFIG.name,
      type: "website",
      images: [
        {
          url: `${SITE_CONFIG.url}/images/og-image.jpg`,
          width: 1200,
          height: 630,
          alt: service.title,
        },
      ],
    },
  };
}

export default function ServiceDetailPage({ params }: ServicePageProps) {
  const service = getServiceBySlug(params.slug);
  if (!service) notFound();

  const serviceUrl = getCanonicalUrl(`/services/${service.slug}`);

  // Structured Data (Service + BreadcrumbList)
  const jsonLdService = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    serviceType: service.title,
    description: service.description,
    provider: {
      "@type": "Organization",
      name: "Owl Studio",
      url: getCanonicalUrl(),
      logo: `${SITE_CONFIG.url}/images/logo.svg`,
    },
    areaServed: "Worldwide",
    url: serviceUrl,
  };

  const jsonLdBreadcrumbs = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: getCanonicalUrl(),
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Services",
        item: getCanonicalUrl("/services"),
      },
      {
        "@type": "ListItem",
        position: 3,
        name: service.title,
        item: serviceUrl,
      },
    ],
  };

  return (
    <>
      {/* Schema.org Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdService) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumbs) }}
      />

      {/* 01 & 02 & 03: Breadcrumbs, Hero & Service Introduction */}
      <ServiceHero service={service} />

      {/* 04: Problem / Opportunity */}
      <ServiceProblemOpportunity
        problemTitle={service.problemOpportunity.problemTitle}
        problemDescription={service.problemOpportunity.problemDescription}
        opportunityTitle={service.problemOpportunity.opportunityTitle}
        opportunityDescription={service.problemOpportunity.opportunityDescription}
      />

      {/* 05: What Owl Studio Does */}
      <ServiceWhatWeDo
        headline={service.whatWeDo.headline}
        description={service.whatWeDo.description}
        points={service.whatWeDo.points}
      />

      {/* 06 & 07: Deliverables & Benefits */}
      <ServiceDeliverables
        deliverables={service.deliverables}
        benefits={service.benefits}
      />

      {/* 08: Process */}
      <ServiceProcess
        process={service.process}
        serviceTitle={service.title}
      />

      {/* 09: Visual Examples */}
      <ServiceVisualShowcase
        examples={service.visualExamples}
        serviceTitle={service.title}
      />

      {/* 10: Related Work */}
      <ServiceRelatedWork
        projectSlugs={service.relatedProjectSlugs}
        serviceTitle={service.title}
      />

      {/* 11: FAQ */}
      <ServiceFaqSection
        faq={service.faq}
        serviceTitle={service.title}
      />

      {/* 12: Related Services */}
      <section className="py-24 sm:py-32 bg-[#F5F3EA] border-b border-brand-dark/10">
        <Container>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-12 border-b border-brand-dark/10">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-brand-muted mb-3">
                <span className="h-2 w-2 rounded-full bg-accent" />
                Connected Capabilities
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-brand-dark uppercase tracking-tight">
                Related Services
              </h2>
            </div>
            <p className="max-w-md text-sm sm:text-base text-brand-muted leading-relaxed">
              Combine {service.title} with our complementary disciplines for unified brand acceleration.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {service.relatedServices.map((slug) => {
              const rel = getServiceBySlug(slug);
              if (!rel) return null;
              return (
                <Link
                  key={rel.slug}
                  href={`/services/${rel.slug}`}
                  className="group rounded-3xl border border-brand-dark/10 bg-white p-8 flex flex-col justify-between hover:border-brand-dark/30 hover:shadow-owl-md transition-all"
                >
                  <div>
                    <span className="font-mono text-xs font-bold text-accent-dark">
                      {rel.num} //
                    </span>
                    <h3 className="mt-2 text-2xl font-bold text-brand-dark group-hover:text-accent-dark transition-colors">
                      {rel.title}
                    </h3>
                    <p className="mt-2 text-xs sm:text-sm text-brand-muted line-clamp-2 leading-relaxed">
                      {rel.shortDescription}
                    </p>
                  </div>
                  <div className="mt-8 pt-4 border-t border-brand-dark/10 flex items-center justify-between text-xs font-bold text-brand-dark">
                    <span>Explore Capability</span>
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform text-accent-dark" />
                  </div>
                </Link>
              );
            })}
          </div>
        </Container>
      </section>

      {/* 13: Service Dedicated Final CTA */}
      <section className="py-28 sm:py-36 bg-white overflow-hidden text-center relative">
        <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#FFF4B8]/50 blur-[130px] rounded-full" />

        <Container className="relative z-10">
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-brand-muted">
              <span className="h-2 w-2 rounded-full bg-accent" />
              Commission Owl Studio
            </div>

            <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black text-brand-dark uppercase tracking-tight leading-[1.05]">
              Ready to deploy <br />
              <span className="relative inline-block text-brand-dark">
                {service.title}?
                <span className="absolute left-0 bottom-2 w-full h-3 sm:h-4 bg-accent/60 -z-10 rounded-sm" />
              </span>
            </h2>

            <p className="mt-6 max-w-xl mx-auto text-base sm:text-lg text-brand-muted leading-relaxed">
              Let&apos;s build an unforgettable visual presence and accelerated growth trajectory for your brand.
            </p>

            <div className="pt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 rounded-full bg-accent px-9 py-4 font-bold text-brand-dark shadow-owl-sm hover:bg-accent-hover hover:shadow-owl-md hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                <span>Start a Project</span>
                <ArrowUpRight className="h-4 w-4" />
              </Link>

              <Link
                href="/work"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full border border-brand-dark/20 bg-white px-8 py-4 font-semibold text-brand-dark hover:border-brand-dark hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                <span>Browse All Work</span>
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
