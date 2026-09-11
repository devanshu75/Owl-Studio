"use client";

import Link from "next/link";
import { ArrowUpRight, ArrowRight, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { ProjectItemData } from "@/lib/projects-data";

interface WorkPortfolioGridProps {
  projects: ProjectItemData[];
}

export function WorkPortfolioGrid({ projects }: WorkPortfolioGridProps) {
  if (projects.length === 0) {
    return (
      <div className="py-20 text-center rounded-3xl border border-dashed border-brand-dark/20 bg-white/50">
        <p className="text-base text-brand-muted">No projects found for this discipline.</p>
      </div>
    );
  }

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={projects.map((p) => p.slug).join("-")}
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -16 }}
        transition={{ duration: 0.3 }}
        className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-10"
      >
        {projects.map((project, idx) => {
          // Editorial Layout Asymmetry:
          // In 'All' view:
          // idx 0 -> 12 cols (Cinematic Panoramic Feature)
          // idx 1 -> 7 cols (Wide Feature)
          // idx 2 -> 5 cols (Vertical Tall Card)
          // idx 3 -> 12 cols (Editorial Horizontal Split)
          // idx 4 & 5 -> 6 cols each (Balanced Monograph Cards)
          let colSpan = "md:col-span-6";
          if (projects.length > 3) {
            if (idx === 0) colSpan = "md:col-span-12";
            else if (idx === 1) colSpan = "md:col-span-7";
            else if (idx === 2) colSpan = "md:col-span-5";
            else if (idx === 3) colSpan = "md:col-span-12";
            else colSpan = "md:col-span-6";
          } else if (projects.length === 1) {
            colSpan = "md:col-span-12";
          }

          const isFullWidth = colSpan === "md:col-span-12";

          return (
            <div key={project.slug} className={`${colSpan} group`}>
              <Link
                href={`/work/${project.slug}`}
                className={`flex flex-col justify-between h-full rounded-3xl border border-brand-dark/10 bg-white p-8 sm:p-10 lg:p-12 transition-all duration-300 hover:border-brand-dark/30 hover:shadow-owl-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-dark ${
                  isFullWidth ? "bg-[#FBF9F2]" : ""
                }`}
              >
                {isFullWidth ? (
                  /* 12-Column Heroic Card Split */
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                    <div className="lg:col-span-6 space-y-6">
                      <div className="flex flex-wrap items-center gap-3">
                        <span className="rounded-full bg-white border border-brand-dark/10 px-3 py-1 text-xs font-semibold text-brand-dark">
                          {project.category}
                        </span>
                        {project.isConcept && (
                          <span className="rounded-full bg-accent px-3 py-1 text-[11px] font-bold text-brand-dark uppercase tracking-wider shadow-sm">
                            Self-Initiated Concept
                          </span>
                        )}
                        <span className="font-mono text-xs text-brand-muted font-semibold">
                          {project.year}
                        </span>
                      </div>

                      <h3 className="text-3xl sm:text-5xl font-black tracking-tight text-brand-dark uppercase group-hover:text-accent-dark transition-colors leading-[1.05]">
                        {project.title}
                      </h3>

                      <p className="text-lg text-brand-dark font-medium leading-relaxed">
                        {project.tagline}
                      </p>

                      <p className="text-sm sm:text-base text-brand-muted leading-relaxed">
                        {project.shortDescription}
                      </p>

                      <div className="flex flex-wrap gap-2 pt-2">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-md bg-white border border-brand-dark/10 px-2.5 py-1 text-xs font-medium text-brand-dark"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <div className="pt-4 inline-flex items-center gap-2 font-bold text-sm text-brand-dark group-hover:translate-x-1 transition-transform">
                        <span>Read Case Study</span>
                        <ArrowRight className="h-4 w-4 text-accent-dark" />
                      </div>
                    </div>

                    {/* Right: Graphic Canvas Visual */}
                    <div className="lg:col-span-6">
                      <div className="relative aspect-[16/10] w-full rounded-2xl border border-brand-dark/10 bg-gradient-to-br from-amber-100 via-stone-100 to-amber-200 p-8 flex flex-col justify-between overflow-hidden shadow-inner group-hover:scale-[1.01] transition-transform duration-300">
                        <div className="flex justify-between items-start">
                          <span className="font-mono text-xs uppercase tracking-widest text-brand-dark/60 font-bold">
                            {project.category} // 0{idx + 1}
                          </span>
                          <div className="h-10 w-10 rounded-full bg-white flex items-center justify-center shadow-owl-sm group-hover:bg-accent transition-colors">
                            <ArrowUpRight className="h-4 w-4 text-brand-dark" />
                          </div>
                        </div>

                        <div className="space-y-1">
                          <div className="text-2xl sm:text-4xl font-black text-brand-dark">
                            {project.title}
                          </div>
                          <div className="text-xs text-brand-muted font-medium">
                            {project.meta.deliverables.slice(0, 2).join(" • ")}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  /* Standard / Split Card (6 or 7 or 5 cols) */
                  <div>
                    {/* Visual Preview Box */}
                    <div className="relative aspect-[16/10] w-full rounded-2xl border border-brand-dark/10 bg-gradient-to-br from-[#F5F3EA] via-stone-100 to-amber-100 p-6 flex flex-col justify-between mb-6 overflow-hidden group-hover:scale-[1.01] transition-transform duration-300">
                      <div className="flex justify-between items-start">
                        <span className="rounded-full bg-white/95 border border-brand-dark/10 px-3 py-1 text-xs font-semibold text-brand-dark">
                          {project.category}
                        </span>
                        <div className="h-9 w-9 rounded-full bg-white flex items-center justify-center shadow-owl-sm group-hover:bg-accent transition-colors">
                          <ArrowUpRight className="h-4 w-4 text-brand-dark" />
                        </div>
                      </div>

                      <div>
                        <div className="text-2xl sm:text-3xl font-black text-brand-dark">
                          {project.title}
                        </div>
                        <div className="text-xs text-brand-muted mt-0.5 line-clamp-1 font-medium">
                          {project.tagline}
                        </div>
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

                    <h3 className="text-2xl sm:text-3xl font-black tracking-tight text-brand-dark uppercase group-hover:text-accent-dark transition-colors">
                      {project.title}
                    </h3>

                    <p className="mt-2 text-sm text-brand-muted leading-relaxed line-clamp-3">
                      {project.shortDescription}
                    </p>

                    <div className="flex flex-wrap gap-2 mt-4">
                      {project.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="rounded-md bg-[#EDEBE3] px-2.5 py-0.5 text-[11px] font-medium text-brand-dark"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="mt-8 pt-4 border-t border-brand-dark/10 flex items-center justify-between text-xs font-bold text-brand-dark">
                      <span>Explore Case Study</span>
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform text-accent-dark" />
                    </div>
                  </div>
                )}
              </Link>
            </div>
          );
        })}
      </motion.div>
    </AnimatePresence>
  );
}
