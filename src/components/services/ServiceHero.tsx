"use client";

import Link from "next/link";
import { ArrowRight, ChevronRight } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { ServiceItemData } from "@/lib/services-data";
import { motion } from "framer-motion";

interface ServiceHeroProps {
  service: ServiceItemData;
}

export function ServiceHero({ service }: ServiceHeroProps) {
  return (
    <section className="relative pt-36 pb-20 border-b border-brand-dark/10 overflow-hidden bg-[#F5F3EA]">
      {/* Background ambient warm highlights */}
      <div className="pointer-events-none absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#FFF4B8]/60 blur-[130px] rounded-full -z-10" />

      <Container>
        {/* Semantic Breadcrumbs */}
        <nav
          aria-label="Breadcrumbs"
          className="flex items-center gap-2 text-xs font-semibold text-brand-muted mb-8"
        >
          <ol className="flex items-center gap-2">
            <li>
              <Link href="/" className="hover:text-brand-dark transition-colors">
                Home
              </Link>
            </li>
            <li aria-hidden="true">
              <ChevronRight className="h-3 w-3 text-brand-dark/30" />
            </li>
            <li>
              <Link href="/services" className="hover:text-brand-dark transition-colors">
                Services
              </Link>
            </li>
            <li aria-hidden="true">
              <ChevronRight className="h-3 w-3 text-brand-dark/30" />
            </li>
            <li aria-current="page" className="text-brand-dark font-bold">
              {service.title}
            </li>
          </ol>
        </nav>

        {/* Hero Content */}
        <div className="max-w-4xl space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-brand-muted"
          >
            <span className="h-2 w-2 rounded-full bg-accent" />
            <span>Service Focus</span>
            <span className="text-brand-dark/20">·</span>
            <span className="font-mono text-accent-dark font-bold">{service.num}</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tight text-brand-dark uppercase leading-[0.98]"
          >
            {service.title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl sm:text-2xl text-brand-dark font-medium leading-relaxed max-w-3xl"
          >
            {service.tagline}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="text-base sm:text-lg text-brand-muted leading-relaxed max-w-2xl font-normal"
          >
            {service.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="pt-4 flex flex-wrap items-center gap-4"
          >
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 rounded-full bg-accent px-8 py-4 text-base font-bold text-brand-dark shadow-owl-sm hover:bg-accent-hover hover:shadow-owl-md hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              <span>Start a Project</span>
              <ArrowRight className="h-4 w-4" />
            </Link>

            <a
              href="#related-work"
              className="inline-flex items-center gap-2 rounded-full border border-brand-dark/20 bg-white/90 px-8 py-4 text-base font-semibold text-brand-dark hover:border-brand-dark hover:bg-white hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              <span>View Case Examples</span>
            </a>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
