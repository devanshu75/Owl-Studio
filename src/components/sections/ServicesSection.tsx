"use client";

import Link from "next/link";
import { ArrowUpRight, Sparkles, Video, Film, Code, Palette, Layout, TrendingUp } from "lucide-react";
import { SERVICES } from "@/lib/constants";

export function ServicesSection() {
  const categoryIcons: Record<string, typeof Code> = {
    Engineering: Code,
    Design: Palette,
    Experience: Layout,
    Growth: TrendingUp,
    "Creative AI": Sparkles,
    Cinema: Film,
    "Performance Video": Video,
  };

  return (
    <section id="services" className="relative bg-secondary py-20 sm:py-24 lg:py-28 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute top-1/3 left-0 w-96 h-96 bg-accent/5 blur-[120px] rounded-full" />
      <div className="pointer-events-none absolute bottom-1/4 right-0 w-96 h-96 bg-accent/5 blur-[140px] rounded-full" />

      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-white/10">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-accent mb-3">
              <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
              Creative Studio Capabilities
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white">
              Our <span className="font-serif italic font-normal text-gray-300">Services</span>
            </h2>
          </div>
          <p className="max-w-md text-sm sm:text-base text-textMuted leading-relaxed">
            From neural generative video and cinematic brand films to high-performance Next.js platforms.
          </p>
        </div>

        {/* Services List */}
        <div className="divide-y divide-white/10">
          {SERVICES.map((service) => {
            const Icon = categoryIcons[service.category] || Sparkles;
            return (
              <div
                key={service.num}
                className="group relative py-12 sm:py-16 transition-all duration-300"
              >
                {/* Hover highlight background */}
                <div className="pointer-events-none absolute inset-0 -mx-6 sm:-mx-8 rounded-2xl bg-white/[0.02] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                <div className="relative flex flex-col lg:flex-row lg:items-start justify-between gap-8">
                  {/* Left: Number & Category Badge */}
                  <div className="flex lg:flex-col items-center lg:items-start gap-4 lg:gap-2">
                    <span className="font-mono text-xl sm:text-2xl font-bold text-accent">
                      {service.num} —
                    </span>
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 text-[11px] font-medium text-gray-300">
                      <Icon className="h-3 w-3 text-accent" />
                      {service.category}
                    </span>
                  </div>

                  {/* Center: Title, Description, Deliverables & Tags */}
                  <div className="flex-1 max-w-3xl">
                    <div className="flex flex-wrap items-center gap-3">
                      <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white transition-colors duration-200 group-hover:text-accent">
                        {service.name}
                      </h3>
                      {service.aspectBadge && (
                        <span className="rounded-md border border-accent/30 bg-accent/10 px-2.5 py-0.5 font-mono text-[11px] font-semibold text-accent">
                          {service.aspectBadge}
                        </span>
                      )}
                    </div>

                    <p className="mt-4 text-base sm:text-lg text-textMuted leading-relaxed">
                      {service.description}
                    </p>

                    {/* Deliverables Bullet highlights */}
                    <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-gray-300">
                      {service.deliverables.map((item) => (
                        <div key={item} className="flex items-center gap-2">
                          <Sparkles className="h-3 w-3 text-accent shrink-0" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>

                    {/* Skill Badges */}
                    <div className="mt-6 flex flex-wrap gap-2">
                      {service.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-gray-300 transition-colors group-hover:border-accent/30 group-hover:text-white"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Right: Circular CTA action */}
                  <div className="self-end lg:self-center">
                    <Link
                      href="/#contact"
                      className="flex h-14 w-14 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white transition-all duration-300 group-hover:border-accent group-hover:bg-accent group-hover:text-black group-hover:scale-110"
                      aria-label={`Inquire about ${service.name}`}
                    >
                      <ArrowUpRight className="h-6 w-6 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Section Footer */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-6 border-t border-white/10 pt-8">
          <Link
            href="/#contact"
            className="inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 font-semibold text-black transition-all duration-300 hover:bg-accent hover:shadow-neon-sm hover:scale-105"
          >
            <span>Start a project</span>
            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-black text-white">
              <ArrowUpRight className="h-3.5 w-3.5" />
            </div>
          </Link>

          <span className="text-xs sm:text-sm font-mono tracking-wider text-textMuted uppercase">
            07 Bespoke Studio Disciplines · Available Worldwide
          </span>
        </div>
      </div>
    </section>
  );
}
