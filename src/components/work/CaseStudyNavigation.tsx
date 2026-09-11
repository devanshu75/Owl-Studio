import Link from "next/link";
import { ArrowRight, ArrowLeft, ArrowUpRight } from "lucide-react";
import { ProjectItemData, getProjectBySlug } from "@/lib/projects-data";

interface CaseStudyNavigationProps {
  currentProject: ProjectItemData;
  prevProject: ProjectItemData;
  nextProject: ProjectItemData;
  relatedSlugs: string[];
}

export function CaseStudyNavigation({
  currentProject,
  prevProject,
  nextProject,
  relatedSlugs,
}: CaseStudyNavigationProps) {
  return (
    <div className="pt-20 space-y-20">
      {/* Related Projects Grid */}
      <div className="border-b border-brand-dark/10 pb-20">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <div className="text-xs font-mono uppercase tracking-widest text-accent-dark font-bold mb-2">
              Cross-Disciplinary Synergy
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-brand-dark uppercase tracking-tight">
              Related Case Studies
            </h2>
          </div>
          <Link
            href="/work"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-dark hover:text-accent-dark transition-colors"
          >
            <span>All Projects</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {relatedSlugs.map((slug) => {
            const rel = getProjectBySlug(slug);
            if (!rel) return null;
            return (
              <Link
                key={rel.slug}
                href={`/work/${rel.slug}`}
                className="group rounded-3xl border border-brand-dark/10 bg-white p-6 sm:p-8 flex flex-col justify-between hover:border-brand-dark/30 hover:shadow-owl-sm transition-all"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-semibold text-accent-dark uppercase">
                      {rel.category}
                    </span>
                    <span className="font-mono text-xs text-brand-muted">{rel.year}</span>
                  </div>

                  <h3 className="text-2xl font-bold text-brand-dark group-hover:text-accent-dark transition-colors">
                    {rel.title}
                  </h3>

                  <p className="mt-2 text-xs sm:text-sm text-brand-muted line-clamp-2 leading-relaxed">
                    {rel.shortDescription}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-brand-dark/10 flex items-center justify-between text-xs font-bold text-brand-dark">
                  <span>View Case Study</span>
                  <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform text-accent-dark" />
                </div>
              </Link>
            );
          })}
        </div>
      </div>

      {/* Sequential Next / Previous Case Study */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 border-b border-brand-dark/10 pb-20">
        <Link
          href={`/work/${prevProject.slug}`}
          className="group rounded-3xl border border-brand-dark/10 bg-white p-6 sm:p-8 flex flex-col justify-between hover:border-brand-dark/30 transition-all"
        >
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-brand-muted font-semibold mb-2">
            <ArrowLeft className="h-3.5 w-3.5 group-hover:-translate-x-1 transition-transform" />
            Previous Case Study
          </div>
          <div className="text-xl sm:text-2xl font-black text-brand-dark uppercase group-hover:text-accent-dark transition-colors">
            {prevProject.title}
          </div>
          <div className="text-xs text-brand-muted mt-1">{prevProject.category}</div>
        </Link>

        <Link
          href={`/work/${nextProject.slug}`}
          className="group rounded-3xl border border-brand-dark/10 bg-white p-6 sm:p-8 flex flex-col justify-between hover:border-brand-dark/30 transition-all text-right sm:text-right"
        >
          <div className="flex items-center justify-end gap-2 text-xs font-mono uppercase tracking-widest text-brand-muted font-semibold mb-2">
            Next Case Study
            <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
          </div>
          <div className="text-xl sm:text-2xl font-black text-brand-dark uppercase group-hover:text-accent-dark transition-colors">
            {nextProject.title}
          </div>
          <div className="text-xs text-brand-muted mt-1">{nextProject.category}</div>
        </Link>
      </div>

      {/* Commission / Contact CTA */}
      <div className="text-center space-y-6 pt-4 pb-12">
        <div className="inline-flex items-center gap-2 rounded-full bg-accent/30 border border-accent/60 px-4 py-1.5 text-xs font-mono font-bold text-brand-dark uppercase tracking-wider">
          Ready to Collaborate?
        </div>
        <h2 className="text-3xl sm:text-5xl font-black text-brand-dark uppercase tracking-tight">
          Have an ambitious project in mind?
        </h2>
        <p className="text-base sm:text-lg text-brand-muted max-w-xl mx-auto">
          We partner with bold brands and startups to engineer digital flagships, high-performing campaigns, and unforgettable identities.
        </p>
        <div className="pt-2">
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 rounded-full bg-accent px-8 py-4 text-base font-bold text-brand-dark shadow-owl-sm transition-all hover:bg-accent-hover hover:shadow-owl-md"
          >
            <span>Start a Project</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
