import Link from "next/link";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { getProjectBySlug, ProjectItemData } from "@/lib/projects-data";

interface ServiceRelatedWorkProps {
  projectSlugs: string[];
  serviceTitle: string;
}

export function ServiceRelatedWork({
  projectSlugs,
  serviceTitle,
}: ServiceRelatedWorkProps) {
  const projects = projectSlugs
    .map((slug) => getProjectBySlug(slug))
    .filter((p): p is ProjectItemData => Boolean(p));

  if (projects.length === 0) return null;

  return (
    <section id="related-work" className="relative py-24 sm:py-32 bg-[#F5F3EA] border-b border-brand-dark/10 overflow-hidden">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-12 border-b border-brand-dark/10">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-brand-muted mb-3">
              <span className="h-2 w-2 rounded-full bg-accent" />
              Proof of Concept
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-brand-dark uppercase tracking-tight">
              Related Case Studies
            </h2>
          </div>
          <p className="max-w-md text-sm sm:text-base text-brand-muted leading-relaxed">
            Case studies demonstrating how our {serviceTitle} discipline functions in real-world scenarios.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div key={project.slug} className="group">
              <Link
                href={`/work/${project.slug}`}
                className="flex flex-col justify-between h-full rounded-3xl border border-brand-dark/10 bg-white p-8 sm:p-10 transition-all duration-300 hover:border-brand-dark/30 hover:shadow-owl-md"
              >
                <div>
                  {/* Visual Preview Box */}
                  <div className="relative aspect-[16/9] w-full rounded-2xl border border-brand-dark/10 bg-gradient-to-br from-[#F5F3EA] to-stone-200 p-6 flex flex-col justify-between mb-6 overflow-hidden">
                    <div className="flex justify-between items-start">
                      <span className="rounded-full bg-white/95 border border-brand-dark/10 px-3 py-1 text-xs font-semibold text-brand-dark">
                        {project.category}
                      </span>
                      <div className="h-8 w-8 rounded-full bg-white flex items-center justify-center shadow-owl-sm group-hover:bg-accent transition-colors">
                        <ArrowUpRight className="h-4 w-4 text-brand-dark" />
                      </div>
                    </div>
                    <div>
                      <div className="text-2xl font-black text-brand-dark">{project.title}</div>
                      <div className="text-xs text-brand-muted mt-0.5">{project.tagline}</div>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    {project.isConcept && (
                      <span className="rounded-full bg-accent/40 border border-accent/60 px-2.5 py-0.5 text-[10px] font-bold text-brand-dark uppercase tracking-wider">
                        Self-Initiated Concept
                      </span>
                    )}
                    <span className="font-mono text-xs text-brand-muted font-semibold">
                      {project.year}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold tracking-tight text-brand-dark group-hover:text-accent-dark transition-colors">
                    {project.title}
                  </h3>

                  <p className="mt-2 text-sm text-brand-muted leading-relaxed">
                    {project.shortDescription}
                  </p>

                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-md bg-[#EDEBE3] px-2.5 py-0.5 text-[11px] font-medium text-brand-dark"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-brand-dark/10 flex items-center justify-between text-xs font-bold text-brand-dark">
                  <span>Explore Case Study</span>
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform text-accent-dark" />
                </div>
              </Link>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
