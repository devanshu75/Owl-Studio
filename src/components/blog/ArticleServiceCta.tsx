import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { getServiceBySlug } from "@/lib/services-data";
import { getProjectBySlug } from "@/lib/projects-data";

interface ArticleServiceCtaProps {
  relatedServiceSlug?: string;
  relatedCaseStudySlug?: string;
  category: string;
}

export function ArticleServiceCta({
  relatedServiceSlug,
  relatedCaseStudySlug,
  category,
}: ArticleServiceCtaProps) {
  const service = relatedServiceSlug ? getServiceBySlug(relatedServiceSlug) : null;
  const project = relatedCaseStudySlug ? getProjectBySlug(relatedCaseStudySlug) : null;

  return (
    <div className="max-w-3xl mx-auto my-16 rounded-3xl border border-brand-dark/10 bg-white p-8 sm:p-12 shadow-owl-md">
      <div className="space-y-6">
        <div className="inline-flex items-center gap-2 rounded-full bg-accent/30 border border-accent/60 px-3.5 py-1 text-xs font-mono font-bold text-brand-dark uppercase tracking-wider">
          <Sparkles className="h-3 w-3 text-accent-dark" />
          Put These Principles Into Practice
        </div>

        <h3 className="text-2xl sm:text-3xl font-black text-brand-dark uppercase tracking-tight">
          Ready to elevate your brand's {category.toLowerCase()}?
        </h3>

        <p className="text-sm sm:text-base text-brand-muted leading-relaxed">
          Owl Studio partners with ambitious founders and marketing leaders to engineer high-performance websites, AI-powered advertising, and enduring brand identities.
        </p>

        <div className="flex flex-wrap items-center gap-4 pt-2">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3.5 text-sm font-bold text-brand-dark shadow-owl-sm transition-all hover:bg-accent-hover hover:shadow-owl-md"
          >
            <span>Start a Project</span>
            <ArrowRight className="h-4 w-4" />
          </Link>

          {service && (
            <Link
              href={`/services/${service.slug}`}
              className="inline-flex items-center gap-2 rounded-full border border-brand-dark/15 bg-[#F5F3EA] px-6 py-3.5 text-sm font-bold text-brand-dark transition-all hover:border-brand-dark/40"
            >
              <span>Explore {service.title} Service</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          )}

          {project && (
            <Link
              href={`/work/${project.slug}`}
              className="inline-flex items-center gap-2 rounded-full border border-brand-dark/15 bg-[#F5F3EA] px-6 py-3.5 text-sm font-bold text-brand-dark transition-all hover:border-brand-dark/40"
            >
              <span>View {project.title} Case Study</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
