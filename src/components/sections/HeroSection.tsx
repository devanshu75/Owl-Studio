"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { ArrowUpRight, Sparkles, ArrowRight } from "lucide-react";
import { Container } from "@/components/layout/Container";

export function HeroSection() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 30, stiffness: 180 };
  const tiltX = useSpring(mouseX, springConfig);
  const tiltY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      mouseX.set((e.clientX - centerX) / 45);
      mouseY.set((e.clientY - centerY) / 45);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <section className="relative min-h-[92vh] w-full flex flex-col justify-center pt-32 pb-20 overflow-hidden bg-[#F5F3EA]">
      {/* Subtle Warm Editorial Background Texture & Glow */}
      <div className="pointer-events-none absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-[#FFF4B8]/70 blur-[130px] rounded-full -z-10" />
      <div className="pointer-events-none absolute bottom-0 right-10 w-[400px] h-[400px] bg-[#EDEBE3] blur-[100px] rounded-full -z-10" />

      {/* Background Video (Subtle, Muted, Non-Blocking with light overlay) */}
      <div className="absolute inset-0 -z-20 overflow-hidden opacity-15 pointer-events-none">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="none"
          poster="/images/og-image.jpg"
          className="h-full w-full object-cover"
        >
          <source src="/video/hero-video.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-[#F5F3EA]/85 mix-blend-overlay" />
      </div>

      <Container className="relative z-10">
        <div className="max-w-5xl mx-auto flex flex-col items-center text-center">
          {/* Eyebrow Pill */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="mb-8 inline-flex items-center gap-2 rounded-full border border-brand-dark/10 bg-white/90 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-brand-dark shadow-owl-sm"
          >
            <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />
            <span>Creative Digital Agency</span>
            <span className="text-brand-muted">·</span>
            <span className="text-brand-muted font-normal">Design, AI &amp; Marketing</span>
          </motion.div>

          {/* Primary Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            style={{ x: tiltX, y: tiltY }}
            className="text-5xl sm:text-7xl md:text-8xl lg:text-[5.75rem] font-black tracking-tight text-brand-dark leading-[0.98] uppercase"
          >
            We make brands{" "}
            <span className="relative inline-block text-brand-dark">
              impossible
              <span className="absolute left-0 bottom-2 md:bottom-3 w-full h-3 md:h-4 bg-accent/60 -z-10 rounded-sm" />
            </span>{" "}
            to ignore.
          </motion.h1>

          {/* Supporting Statement */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25, ease: "easeOut" }}
            className="mt-8 max-w-2xl text-lg sm:text-xl text-brand-muted leading-relaxed font-normal"
          >
            AI-powered advertising, websites, digital marketing, social media and design
            for modern brands ready to stand out.
          </motion.p>

          {/* Dual CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35, ease: "easeOut" }}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto"
          >
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 rounded-full bg-accent px-8 py-4 text-base font-bold text-brand-dark shadow-owl-sm transition-all duration-300 hover:bg-accent-hover hover:shadow-owl-md hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>Start a Project</span>
              <ArrowUpRight className="h-4 w-4" />
            </Link>

            <Link
              href="/work"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full border border-brand-dark/20 bg-white/80 px-8 py-4 text-base font-semibold text-brand-dark transition-all duration-300 hover:border-brand-dark hover:bg-white hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>View Our Work</span>
              <ArrowRight className="h-4 w-4 text-brand-muted" />
            </Link>
          </motion.div>

          {/* Quick Capability Tags */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-16 flex flex-wrap items-center justify-center gap-3 text-xs text-brand-muted"
          >
            <span className="font-semibold text-brand-dark">Capabilities:</span>
            {["AI Ads", "Website Design", "Digital Marketing", "Social Media", "Graphic Design"].map(
              (cap) => (
                <span
                  key={cap}
                  className="rounded-full bg-white/80 border border-brand-dark/10 px-3 py-1 font-medium text-brand-dark/80"
                >
                  {cap}
                </span>
              )
            )}
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
