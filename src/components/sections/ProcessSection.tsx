"use client";

import { Container } from "@/components/layout/Container";
import { ArrowRight } from "lucide-react";

export function ProcessSection() {
  const steps = [
    {
      num: "01",
      title: "Discover",
      tagline: "Unearthing the Core Advantage",
      desc: "We dissect your business model, customer psychology, competitor landscape, and core growth bottlenecks.",
    },
    {
      num: "02",
      title: "Strategy",
      tagline: "Mapping the Creative Direction",
      desc: "We define the narrative framework, design language, channel architecture, and conversion hypotheses.",
    },
    {
      num: "03",
      title: "Create",
      tagline: "Rapid Iterative Production",
      desc: "Our creative team builds high-fidelity visual concepts, custom web architecture, video ads, and design collateral.",
    },
    {
      num: "04",
      title: "Launch",
      tagline: "Flawless Deployment",
      desc: "We transition prototypes into live production platforms, optimized ad campaigns, and high-resolution assets.",
    },
    {
      num: "05",
      title: "Improve",
      tagline: "Data-Informed Refinement",
      desc: "We monitor performance metrics, heatmaps, and campaign engagement to continually optimize conversion ROI.",
    },
  ];

  return (
    <section className="relative bg-[#F5F3EA] py-24 sm:py-32 border-b border-brand-dark/10 overflow-hidden">
      <Container>
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-12 border-b border-brand-dark/10">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-brand-muted mb-3">
              <span className="h-2 w-2 rounded-full bg-accent" />
              How We Operate
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-brand-dark uppercase">
              Our Process
            </h2>
          </div>
          <p className="max-w-md text-base text-brand-muted leading-relaxed">
            A battle-tested methodology blending high-velocity exploration with rigorous
            engineering and art direction.
          </p>
        </div>

        {/* 5-Step Process Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          {steps.map((step, idx) => (
            <div
              key={step.num}
              className="group rounded-3xl border border-brand-dark/10 bg-white p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:border-brand-dark/30 hover:shadow-owl-md hover:-translate-y-1"
            >
              <div>
                <div className="flex items-center justify-between mb-8">
                  <span className="font-mono text-3xl font-black text-brand-dark group-hover:text-accent-dark transition-colors">
                    {step.num}
                  </span>
                  <span className="h-2 w-2 rounded-full bg-accent opacity-60 group-hover:opacity-100 group-hover:scale-125 transition-all" />
                </div>

                <h3 className="text-2xl font-black tracking-tight text-brand-dark">
                  {step.title}
                </h3>

                <div className="mt-1 text-xs font-semibold uppercase tracking-wider text-accent-dark">
                  {step.tagline}
                </div>

                <p className="mt-4 text-xs sm:text-sm text-brand-muted leading-relaxed">
                  {step.desc}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-brand-dark/10 flex items-center justify-between text-xs font-mono text-brand-muted">
                <span>PHASE {idx + 1}/5</span>
                <ArrowRight className="h-3.5 w-3.5 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all text-accent-dark" />
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
