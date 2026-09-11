"use client";

import { Container } from "@/components/layout/Container";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export function BrandStatementSection() {
  return (
    <section className="relative bg-white py-24 sm:py-32 border-y border-brand-dark/10 overflow-hidden">
      {/* Subtle background decorative shapes */}
      <div className="pointer-events-none absolute left-0 top-1/2 -translate-y-1/2 w-72 h-72 bg-[#FFF4B8]/40 blur-[100px] rounded-full" />
      <div className="pointer-events-none absolute right-10 bottom-0 w-80 h-80 bg-[#EDEBE3]/60 blur-[90px] rounded-full" />

      <Container>
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-brand-muted">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            Brand Philosophy
          </div>

          <motion.blockquote
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-black tracking-tight text-brand-dark leading-[1.18] uppercase"
          >
            We combine AI, design, marketing and digital experiences to help modern
            brands{" "}
            <span className="relative inline-block text-brand-dark underline decoration-accent decoration-4 underline-offset-8">
              get noticed.
            </span>
          </motion.blockquote>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4 text-brand-muted text-base sm:text-lg"
          >
            <span className="font-serif italic text-brand-dark text-xl">
              &ldquo;Technology gives us new tools. Ideas still make the difference.&rdquo;
            </span>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
