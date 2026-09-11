"use client";

import { Container } from "@/components/layout/Container";
import Marquee from "react-fast-marquee";
import { Sparkles, Eye, Layers, Palette, Wand2 } from "lucide-react";

export function CreativeShowcaseSection() {
  const showcaseSnippets = [
    {
      title: "Generative Lighting Study",
      category: "AI Advertising",
      tag: "CinemaScope 2.39:1",
      accent: "bg-[#FFF4B8]",
      desc: "Simulating volumetric dusk lighting across metallic product textures.",
    },
    {
      title: "Kinetic Micro-Type",
      category: "Design System",
      tag: "Variable Fonts",
      accent: "bg-[#EDEBE3]",
      desc: "Responsive typographic hierarchies built for high-contrast legibility.",
    },
    {
      title: "Editorial Beauty Monograph",
      category: "Social Creative",
      tag: "4:5 Portrait Feed",
      accent: "bg-[#F5F3EA]",
      desc: "Tactile macro botanicals paired with minimalist architectural framing.",
    },
    {
      title: "Conversion Funnel Wireframe",
      category: "Website UX",
      tag: "Next.js SSR",
      accent: "bg-[#FFF4B8]",
      desc: "Frictionless checkout paths engineered with sub-second LCP rendering.",
    },
    {
      title: "Geometric Monogram",
      category: "Graphic Identity",
      tag: "Vector Craft",
      accent: "bg-[#EDEBE3]",
      desc: "Golden-ratio emblem explorations for institutional venture brands.",
    },
  ];

  return (
    <section className="relative bg-[#EDEBE3] py-24 sm:py-32 overflow-hidden border-b border-brand-dark/10">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-brand-muted mb-3">
              <Sparkles className="h-3.5 w-3.5 text-accent-dark" />
              Explorations &amp; Lab Work
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-brand-dark uppercase">
              Creative Showcase
            </h2>
          </div>
          <p className="max-w-md text-base text-brand-muted leading-relaxed">
            Where we test unconventional visual ideas, generative synthesis experiments,
            and expressive editorial layouts.
          </p>
        </div>
      </Container>

      {/* Smooth Marquee Showcase Ticker */}
      <div className="py-6">
        <Marquee speed={35} pauseOnHover gradient={false}>
          <div className="flex gap-6 pr-6">
            {showcaseSnippets.map((item, idx) => (
              <div
                key={idx}
                className="w-80 sm:w-96 rounded-3xl border border-brand-dark/10 bg-white p-6 sm:p-8 shadow-owl-sm flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold uppercase tracking-widest text-brand-muted">
                      {item.category}
                    </span>
                    <span className="rounded-full bg-accent/30 px-2.5 py-0.5 text-[10px] font-bold text-brand-dark">
                      {item.tag}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-brand-dark tracking-tight">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-brand-muted leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-brand-dark/10 flex items-center justify-between text-xs font-mono text-brand-dark/60">
                  <span>EXP. {String(idx + 1).padStart(2, "0")}</span>
                  <div className="h-2 w-2 rounded-full bg-accent" />
                </div>
              </div>
            ))}
          </div>
        </Marquee>
      </div>

      <Container className="mt-12">
        <div className="rounded-2xl border border-brand-dark/10 bg-white/70 p-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm text-brand-muted">
          <div className="flex items-center gap-2">
            <Eye className="h-4 w-4 text-accent-dark" />
            <span>
              All lab experiments are created in-house with zero stock templates or unlicensed media.
            </span>
          </div>
          <span className="font-mono text-brand-dark font-semibold">OWL.LAB // 2026</span>
        </div>
      </Container>
    </section>
  );
}
