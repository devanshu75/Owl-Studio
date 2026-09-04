"use client";

import { Sparkles, Globe2, Target, Zap, TrendingUp, ShieldCheck } from "lucide-react";
import { ABOUT_VALUES } from "@/lib/constants";

export function AboutSection() {
  const icons = [Target, Zap, TrendingUp, ShieldCheck];

  return (
    <section id="about" className="relative bg-primary py-20 sm:py-24 lg:py-28 overflow-hidden">
      {/* Subtle background glow */}
      <div className="pointer-events-none absolute right-0 top-1/4 w-96 h-96 bg-accent/5 blur-[140px] rounded-full" />

      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-accent">
              <Sparkles className="h-3.5 w-3.5" />
              Who We Are
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
              We engineer brands that command attention and drive revenue.
            </h2>

            <p className="text-base sm:text-lg text-textMuted leading-relaxed">
              Owl Studio is a strategic branding and digital growth studio. We partner with founders,
              pioneering startups, and market leaders to transform raw potential into market-defining digital presences.
            </p>

            <div className="pt-4">
              <div className="inline-flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-gray-300">
                <Globe2 className="h-5 w-5 text-accent shrink-0" />
                <div>
                  <div className="font-semibold text-white">Global Reach · Local Roots</div>
                  <div className="text-xs text-textMuted mt-0.5">
                    Operating from India, serving clients across North America, Europe &amp; Asia-Pacific.
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: 4 Value Pillars (7 cols) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {ABOUT_VALUES.map((val, idx) => {
              const Icon = icons[idx] || Sparkles;
              return (
                <div
                  key={val.title}
                  className="group rounded-2xl border border-white/10 bg-surface-card/70 p-6 sm:p-8 backdrop-blur-xl transition-all duration-300 hover:border-accent/40 hover:-translate-y-1 hover:shadow-card-glass"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-accent transition-colors group-hover:border-accent/50 group-hover:bg-accent/10">
                    <Icon className="h-6 w-6" />
                  </div>

                  <h3 className="mt-6 text-xl font-bold text-white group-hover:text-accent transition-colors">
                    {val.title}
                  </h3>

                  <p className="mt-3 text-sm sm:text-base text-textMuted leading-relaxed">
                    {val.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
