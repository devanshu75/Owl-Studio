"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Clock, Sparkles, Cpu, Film, Zap } from "lucide-react";
import { STUDIO_DISCIPLINES, SITE_CONFIG } from "@/lib/constants";

export function StudioBentoSection() {
  const [time, setTime] = useState<string>("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const formatted = now.toLocaleTimeString("en-US", {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      });
      setTime(formatted);
    };

    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative bg-[#0c0e13] py-20 sm:py-24 border-b border-white/10 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-accent/5 blur-[150px] rounded-full" />

      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-accent mb-3">
              <Sparkles className="h-3.5 w-3.5" />
              Creative Intelligence
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white">
              Studio Command Center
            </h2>
          </div>
          <p className="max-w-md text-sm sm:text-base text-textMuted leading-relaxed">
            Where human art direction meets generative computing and relentless engineering precision.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Card 1: Studio Live Clock & Availability (7 cols) */}
          <div className="md:col-span-7 rounded-3xl border border-white/10 bg-surface-card/80 p-8 sm:p-10 backdrop-blur-xl flex flex-col justify-between relative overflow-hidden group hover:border-accent/40 transition-colors">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-accent" />
                </span>
                <span className="font-mono text-xs uppercase tracking-widest text-accent font-semibold">
                  Live Studio Dispatch
                </span>
              </div>
              <span className="font-mono text-xs text-textMuted uppercase">
                IST · Asia/Kolkata
              </span>
            </div>

            <div className="my-8">
              <div className="font-mono text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white flex items-baseline gap-3">
                <Clock className="h-8 w-8 sm:h-10 sm:w-10 text-accent stroke-[2.5]" />
                <span>{time || "12:00:00 PM"}</span>
              </div>
              <p className="mt-3 text-sm sm:text-base text-gray-300 font-medium">
                {SITE_CONFIG.contact.availability} · Direct commissions worldwide.
              </p>
            </div>

            <div className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 text-xs text-textMuted">
              <span>HQ: Pune / Mumbai, India</span>
              <Link
                href="/#contact"
                className="inline-flex items-center gap-1.5 font-semibold text-accent hover:underline"
              >
                Schedule consultation
                <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>

          {/* Card 2: Creative AI & Neural Stack (5 cols) */}
          <div className="md:col-span-5 rounded-3xl border border-white/10 bg-gradient-to-br from-[#131720] to-[#0d1017] p-8 sm:p-10 backdrop-blur-xl flex flex-col justify-between group hover:border-accent/40 transition-colors">
            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-accent mb-6">
                <Cpu className="h-6 w-6" />
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                Generative Video Engine
              </h3>
              <p className="text-xs sm:text-sm text-textMuted leading-relaxed">
                We harness state-of-the-art neural diffusion to craft cinematic commercials, hyper-realistic product visuals, and video ads at a fraction of traditional shoot costs.
              </p>
            </div>

            <div className="mt-6 pt-6 border-t border-white/10 flex flex-wrap gap-2">
              {["Runway Gen-3", "Sora", "Midjourney v6", "ComfyUI", "DaVinci Resolve"].map((tech) => (
                <span
                  key={tech}
                  className="rounded-full bg-white/5 border border-white/10 px-3 py-1 text-xs text-gray-300 font-mono"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Card 3: Creative Disciplines (8 cols) */}
          <div className="md:col-span-8 rounded-3xl border border-white/10 bg-surface-card/60 p-8 sm:p-10 backdrop-blur-xl group hover:border-accent/40 transition-colors">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-textMuted">
                <Film className="h-4 w-4 text-accent" />
                Active Disciplines
              </div>
              <span className="text-xs font-mono text-accent">08 Core Capabilities</span>
            </div>

            <div className="flex flex-wrap gap-2.5">
              {STUDIO_DISCIPLINES.map((discipline, idx) => (
                <span
                  key={discipline}
                  className="rounded-xl border border-white/10 bg-black/40 px-4 py-2.5 text-xs sm:text-sm font-medium text-white transition-all hover:border-accent hover:bg-accent/10 hover:text-accent"
                >
                  <span className="font-mono text-accent/70 mr-2">0{idx + 1}.</span>
                  {discipline}
                </span>
              ))}
            </div>
          </div>

          {/* Card 4: Kinetic Performance Metrics (4 cols) */}
          <div className="md:col-span-4 rounded-3xl border border-white/10 bg-surface-card/60 p-8 sm:p-10 backdrop-blur-xl flex flex-col justify-between group hover:border-accent/40 transition-colors">
            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-accent mb-6">
                <Zap className="h-6 w-6" />
              </div>

              <h3 className="text-xl font-bold text-white mb-2">
                Velocity &amp; Polish
              </h3>
              <p className="text-xs text-textMuted">
                Ultra-smooth 60fps physics, zero layout shifts, and responsive touch gestures across every display.
              </p>
            </div>

            <div className="mt-6 pt-6 border-t border-white/10 space-y-2 text-xs font-mono text-gray-300">
              <div className="flex justify-between">
                <span>Rendering Target:</span>
                <span className="text-accent">60 to 120 FPS</span>
              </div>
              <div className="flex justify-between">
                <span>Speed Index:</span>
                <span className="text-accent">&lt; 0.8s LCP</span>
              </div>
              <div className="flex justify-between">
                <span>Accessibility:</span>
                <span className="text-accent">WAI-ARIA AAA</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
