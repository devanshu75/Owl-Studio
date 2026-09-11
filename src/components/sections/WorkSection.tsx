"use client";

import Link from "next/link";
import { ArrowUpRight, ArrowRight, Sparkles } from "lucide-react";
import { PROJECTS_DATA } from "@/lib/projects-data";
import { Container } from "@/components/layout/Container";
import { motion } from "framer-motion";

export function WorkSection() {
  const projects = PROJECTS_DATA.slice(0, 5);

  return (
    <section className="relative bg-white py-24 sm:py-32 border-b border-brand-dark/10 overflow-hidden">
      <Container>
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-12 border-b border-brand-dark/10">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-brand-muted mb-3">
              <span className="h-2 w-2 rounded-full bg-accent" />
              Selected Portfolio
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-brand-dark uppercase">
              Selected Work
            </h2>
          </div>
          <div className="max-w-md space-y-2">
            <p className="text-base text-brand-muted leading-relaxed">
              A curated selection of campaigns, digital experiences, and brand identities
              developed by Owl Studio.
            </p>
            <div className="inline-block rounded-full bg-[#EDEBE3] px-3 py-1 text-[11px] font-semibold text-brand-dark">
              Transparent Craft: Self-Initiated Concepts &amp; Commissions
            </div>
          </div>
        </div>

        {/* Asymmetric Editorial Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-10">
          {/* Featured Project 1: Full-width Heroic Card (12 cols) */}
          {projects[0] && (
            <div className="md:col-span-12 group">
              <Link
                href={`/work/${projects[0].slug}`}
                className="block rounded-3xl border border-brand-dark/10 bg-[#F5F3EA] p-8 sm:p-12 lg:p-16 transition-all duration-300 hover:border-brand-dark/30 hover:shadow-owl-lg"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  <div className="lg:col-span-6 space-y-6">
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="rounded-full bg-white border border-brand-dark/10 px-3 py-1 text-xs font-semibold text-brand-dark">
                        {projects[0].category}
                      </span>
                      {projects[0].isConcept && (
                        <span className="rounded-full bg-accent px-3 py-1 text-[11px] font-bold text-brand-dark uppercase tracking-wider">
                          Self-Initiated Concept
                        </span>
                      )}
                      <span className="text-xs text-brand-muted font-mono">{projects[0].year}</span>
                    </div>

                    <h3 className="text-3xl sm:text-5xl font-black tracking-tight text-brand-dark group-hover:text-accent-dark transition-colors">
                      {projects[0].title}
                    </h3>

                    <p className="text-base sm:text-lg text-brand-muted leading-relaxed">
                      {projects[0].shortDescription}
                    </p>

                    <div className="flex flex-wrap gap-2 pt-2">
                      {projects[0].tags.map((t) => (
                        <span
                          key={t}
                          className="rounded-md bg-white/80 border border-brand-dark/10 px-2.5 py-1 text-xs font-medium text-brand-dark/80"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    <div className="pt-4 inline-flex items-center gap-2 font-bold text-sm text-brand-dark group-hover:translate-x-1 transition-transform">
                      <span>Explore Case Study</span>
                      <ArrowRight className="h-4 w-4 text-accent-dark" />
                    </div>
                  </div>

                  {/* Right: Graphic Mockup Art */}
                  <div className="lg:col-span-6">
                    <div className="relative aspect-[16/10] w-full rounded-2xl border border-brand-dark/10 bg-gradient-to-br from-amber-100 via-stone-200 to-amber-200 p-6 flex flex-col justify-between overflow-hidden shadow-inner group-hover:scale-[1.01] transition-transform duration-300">
                      <div className="flex justify-between items-start">
                        <span className="font-mono text-xs text-brand-dark/60 font-semibold uppercase">
                          Creative AI Concept
                        </span>
                        <div className="h-8 w-8 rounded-full bg-white flex items-center justify-center shadow-owl-sm">
                          <ArrowUpRight className="h-4 w-4 text-brand-dark" />
                        </div>
                      </div>
                      <div className="space-y-1">
                        <div className="text-2xl sm:text-3xl font-black text-brand-dark">
                          {projects[0].title}
                        </div>
                        <div className="text-xs text-brand-muted">{projects[0].tagline}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          )}

          {/* Projects 2 & 3: Two Column Cards (6 cols each) */}
          {projects.slice(1, 5).map((project) => (
            <div key={project.slug} className="md:col-span-6 group">
              <Link
                href={`/work/${project.slug}`}
                className="flex flex-col justify-between h-full rounded-3xl border border-brand-dark/10 bg-[#F5F3EA] p-8 transition-all duration-300 hover:border-brand-dark/30 hover:shadow-owl-md"
              >
                <div>
                  {/* Visual Preview Box */}
                  <div className="relative aspect-[16/10] w-full rounded-2xl border border-brand-dark/10 bg-gradient-to-br from-white to-stone-200 p-6 flex flex-col justify-between mb-6 overflow-hidden">
                    <div className="flex justify-between items-start">
                      <span className="rounded-full bg-white/90 border border-brand-dark/10 px-2.5 py-0.5 text-[11px] font-semibold text-brand-dark">
                        {project.category}
                      </span>
                      <div className="h-8 w-8 rounded-full bg-white flex items-center justify-center shadow-owl-sm group-hover:bg-accent transition-colors">
                        <ArrowUpRight className="h-4 w-4 text-brand-dark" />
                      </div>
                    </div>
                    <div>
                      <div className="text-xl sm:text-2xl font-black text-brand-dark">
                        {project.title}
                      </div>
                      <div className="text-xs text-brand-muted mt-0.5 line-clamp-1">
                        {project.tagline}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 mb-3">
                    {project.isConcept && (
                      <span className="rounded-full bg-accent/30 border border-accent/50 px-2.5 py-0.5 text-[10px] font-bold text-brand-dark uppercase tracking-wider">
                        Self-Initiated Concept
                      </span>
                    )}
                    <span className="font-mono text-xs text-brand-muted">{project.year}</span>
                  </div>

                  <h4 className="text-2xl font-bold tracking-tight text-brand-dark group-hover:text-accent-dark transition-colors">
                    {project.title}
                  </h4>

                  <p className="mt-2 text-sm text-brand-muted leading-relaxed line-clamp-2">
                    {project.shortDescription}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-brand-dark/10 flex items-center justify-between text-xs font-bold text-brand-dark">
                  <span>View Case Study</span>
                  <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform text-accent-dark" />
                </div>
              </Link>
            </div>
          ))}
        </div>

        {/* Bottom CTA to Full Portfolio */}
        <div className="mt-16 text-center">
          <Link
            href="/work"
            className="inline-flex items-center gap-3 rounded-full border border-brand-dark/20 bg-surface px-8 py-4 text-sm font-bold text-brand-dark transition-all duration-300 hover:border-brand-dark hover:bg-brand-neutral hover:shadow-owl-sm"
          >
            <span>View All Selected Projects</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </Container>
    </section>
  );
}
