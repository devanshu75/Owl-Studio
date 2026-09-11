import Link from "next/link";
import { ChevronRight, ArrowUpRight, Sparkles } from "lucide-react";
import { ProjectItemData } from "@/lib/projects-data";

interface CaseStudyHeroProps {
  project: ProjectItemData;
}

export function CaseStudyHero({ project }: CaseStudyHeroProps) {
  return (
    <div className="space-y-10 pb-16 border-b border-brand-dark/10">
      {/* Breadcrumbs */}
      <nav
        aria-label="Breadcrumbs"
        className="flex items-center gap-2 text-xs font-semibold text-brand-muted"
      >
        <Link href="/" className="hover:text-brand-dark transition-colors">
          Home
        </Link>
        <ChevronRight className="h-3 w-3" />
        <Link href="/work" className="hover:text-brand-dark transition-colors">
          Work
        </Link>
        <ChevronRight className="h-3 w-3" />
        <span className="text-brand-dark">{project.title}</span>
      </nav>

      {/* Header Info */}
      <div className="max-w-4xl space-y-6">
        <div className="flex flex-wrap items-center gap-3">
          <span className="rounded-full bg-white border border-brand-dark/10 px-3.5 py-1 text-xs font-semibold text-brand-dark">
            {project.category}
          </span>
          {project.isConcept && (
            <span className="rounded-full bg-accent px-3.5 py-1 text-xs font-bold text-brand-dark uppercase tracking-wider shadow-sm">
              Self-Initiated Concept
            </span>
          )}
          <span className="font-mono text-xs text-brand-muted font-semibold">
            Timeline: {project.meta.timeline}
          </span>
          <span className="font-mono text-xs text-brand-muted font-semibold">
            {project.year}
          </span>
        </div>

        <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tight text-brand-dark uppercase leading-[1.02]">
          {project.title}
        </h1>

        <p className="text-xl sm:text-2xl text-brand-dark font-medium leading-relaxed max-w-3xl">
          {project.tagline}
        </p>

        <p className="text-base sm:text-lg text-brand-muted leading-relaxed max-w-2xl">
          {project.description}
        </p>
      </div>

      {/* Hero Visual Canvas */}
      <div className="relative aspect-[16/9] sm:aspect-[21/9] w-full rounded-3xl border border-brand-dark/10 bg-gradient-to-br from-amber-100 via-stone-100 to-amber-200 p-8 sm:p-12 flex flex-col justify-between overflow-hidden shadow-owl-md">
        <div className="flex justify-between items-start">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/90 border border-brand-dark/10 px-4 py-1.5 text-xs font-mono font-bold text-brand-dark uppercase">
            <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />
            {project.meta.clientOrConcept}
          </div>
          <div className="hidden sm:flex items-center gap-2 text-xs font-mono font-semibold text-brand-dark/80 bg-white/80 px-3.5 py-1.5 rounded-full border border-brand-dark/10">
            {project.meta.tools.join(" • ")}
          </div>
        </div>

        <div className="max-w-2xl bg-white/90 backdrop-blur-md rounded-2xl p-6 border border-brand-dark/10 shadow-owl-sm">
          <div className="text-xs font-mono uppercase tracking-widest text-accent-dark font-bold mb-1">
            Art Direction &amp; Spec Focus
          </div>
          <div className="text-xl sm:text-2xl font-black text-brand-dark uppercase">
            {project.title}
          </div>
          <div className="text-xs sm:text-sm text-brand-muted mt-1">
            {project.shortDescription}
          </div>
        </div>
      </div>
    </div>
  );
}
