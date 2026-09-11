"use client";

import Link from "next/link";
import { ArrowRight, Sparkles, CheckCircle2 } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { STUDIO_PILLARS } from "@/lib/constants";

export function AboutSection() {
  return (
    <section className="relative bg-[#F5F3EA] py-24 sm:py-32 border-b border-brand-dark/10 overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left: Headline & Manifesto (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-brand-muted">
              <span className="h-2 w-2 rounded-full bg-accent" />
              Why Owl Studio
            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-brand-dark uppercase leading-[1.05]">
              Small Studio. <br />
              <span className="relative inline-block">
                Big Ideas.
                <span className="absolute left-0 bottom-1 w-full h-3 bg-accent/50 -z-10 rounded-sm" />
              </span>
            </h2>

            <p className="text-base sm:text-lg text-brand-muted leading-relaxed">
              We don&apos;t just make things look good. We make them matter. In an era of infinite
              AI-generated noise, our focus is ruthless clarity, authentic brand craft, and
              measurable digital impact.
            </p>

            <div className="pt-4">
              <Link
                href="/about"
                className="group inline-flex items-center gap-2.5 rounded-full bg-brand-dark px-7 py-3.5 text-sm font-semibold text-white transition-all hover:bg-black hover:shadow-owl-sm"
              >
                <span>Read Our Origin Story</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          {/* Right: 4 Value Pillars (7 cols) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {STUDIO_PILLARS.map((pillar) => (
              <div
                key={pillar.num}
                className="rounded-3xl border border-brand-dark/10 bg-white p-6 sm:p-8 flex flex-col justify-between shadow-owl-sm transition-all duration-300 hover:border-brand-dark/30 hover:shadow-owl-md"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-sm font-bold text-accent-dark">
                      {pillar.num}
                    </span>
                    <div className="h-2 w-2 rounded-full bg-accent" />
                  </div>

                  <h3 className="text-xl font-bold text-brand-dark tracking-tight">
                    {pillar.title}
                  </h3>

                  <p className="mt-3 text-xs sm:text-sm text-brand-muted leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
