"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { ArrowUpRight, ChevronDown, Play } from "lucide-react";
import { STATS } from "@/lib/constants";
import { ShowreelModal } from "@/components/ui/ShowreelModal";

export function HeroSection() {
  const [isShowreelOpen, setIsShowreelOpen] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 30, stiffness: 200 };
  const tiltX = useSpring(mouseX, springConfig);
  const tiltY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      mouseX.set((e.clientX - centerX) / 35);
      mouseY.set((e.clientY - centerY) / 35);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <>
      <section className="relative min-h-screen w-full overflow-hidden flex flex-col items-center justify-center pt-28 pb-16">
        {/* Background Video */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            poster="/images/og-image.jpg"
            className="h-full w-full object-cover opacity-35"
          >
            <source src="/video/hero-video.mp4" type="video/mp4" />
          </video>
        </div>

        {/* Radiant Gradient Overlays */}
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#0f0f0f]/90 via-[#0f0f0f]/75 to-[#0f0f0f]" />
        <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(163,255,0,0.12),rgba(255,255,255,0))]" />

        {/* Content */}
        <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center px-6 text-center">
          {/* Eyebrow Pill */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-accent backdrop-blur-md"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
            Creative Studio · AI Video &amp; Digital Growth
          </motion.div>

          {/* Hero Title with interactive 3D / parallax spring */}
          <motion.div
            style={{ x: tiltX, y: tiltY }}
            className="select-none"
          >
            <motion.h1
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-[clamp(56px,12vw,140px)] font-black tracking-[-2px] sm:tracking-[-4px] leading-[0.92] text-white"
            >
              OWL<span className="text-accent">.STUDIO</span>
            </motion.h1>
          </motion.div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-xl sm:text-2xl md:text-3xl font-medium tracking-tight text-gray-200"
          >
            Brands that think differently <span className="font-serif italic text-accent">move people.</span>
          </motion.p>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-4 max-w-2xl text-sm sm:text-base md:text-lg text-textMuted leading-relaxed"
          >
            We build bold brand identities, high-conversion Next.js platforms, generative AI video commercials,
            and cinematic short films designed to convert visitors into lifelong advocates.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-10 flex flex-wrap items-center justify-center gap-4"
          >
            <Link
              href="/#contact"
              className="group inline-flex items-center gap-2 rounded-full bg-accent px-8 py-4 text-sm sm:text-base font-bold text-black shadow-neon-glow transition-all duration-300 hover:bg-accent-hover hover:scale-105 active:scale-95"
            >
              Start a project
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>

            <button
              onClick={() => setIsShowreelOpen(true)}
              className="group inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/10 px-7 py-4 text-sm sm:text-base font-semibold text-white backdrop-blur-md transition-all duration-300 hover:border-accent hover:bg-accent hover:text-black hover:scale-105 active:scale-95"
            >
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-accent text-black group-hover:bg-black group-hover:text-white transition-colors">
                <Play className="h-3 w-3 fill-current ml-0.5" />
              </div>
              <span>Watch Studio Reel</span>
            </button>

            <Link
              href="/#ourwork"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-7 py-4 text-sm sm:text-base font-medium text-gray-300 transition-all duration-300 hover:border-white/30 hover:bg-white/10 hover:text-white hover:scale-105 active:scale-95"
            >
              See our work
            </Link>
          </motion.div>

          {/* Trust Pill */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-8"
          >
            <div className="inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs sm:text-sm text-gray-300 backdrop-blur-md">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-accent" />
              </span>
              Trusted by ambitious businesses in India, USA, UK &amp; Australia
            </div>
          </motion.div>

          {/* Stats Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-14 w-full max-w-4xl grid grid-cols-2 md:grid-cols-4 gap-4"
          >
            {STATS.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-white/10 bg-surface-card/40 p-4 sm:p-5 backdrop-blur-md transition-all hover:border-accent/40"
              >
                <div className="text-2xl sm:text-3xl font-black text-accent">{stat.num}</div>
                <div className="text-xs sm:text-sm font-semibold text-white mt-1">{stat.label}</div>
                <div className="text-[11px] text-textMuted mt-0.5 hidden sm:block">{stat.detail}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Scroll Down Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="mt-12 sm:mt-16 flex flex-col items-center gap-2 text-textMuted hover:text-accent transition-colors"
        >
          <Link
            href="/#services"
            aria-label="Scroll to services"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white/5 animate-bounce"
          >
            <ChevronDown className="h-4 w-4" />
          </Link>
          <span className="text-[11px] font-mono tracking-widest uppercase">Scroll</span>
        </motion.div>
      </section>

      {/* Showreel Lightbox Modal */}
      <ShowreelModal
        isOpen={isShowreelOpen}
        onClose={() => setIsShowreelOpen(false)}
      />
    </>
  );
}
