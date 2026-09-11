"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Check, ArrowRight } from "lucide-react";
import { SERVICES_DATA, ServiceItemData } from "@/lib/services-data";
import { Container } from "@/components/layout/Container";
import { motion } from "framer-motion";

export function ServicesSection() {
  const [activeSlug, setActiveSlug] = useState<string>(SERVICES_DATA[0].slug);

  const activeService =
    SERVICES_DATA.find((s) => s.slug === activeSlug) || SERVICES_DATA[0];

  return (
    <section className="relative bg-[#F5F3EA] py-24 sm:py-32 overflow-hidden">
      <Container>
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-brand-dark/10">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-brand-muted mb-3">
              <span className="h-2 w-2 rounded-full bg-accent" />
              Core Capabilities
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-brand-dark uppercase">
              Services We Provide
            </h2>
          </div>
          <p className="max-w-md text-base text-brand-muted leading-relaxed">
            Five synchronized disciplines designed to elevate your visual presence, digital
            platforms, and revenue pipeline.
          </p>
        </div>

        {/* Interactive Editorial Services Matrix */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left: Large Interactive Numbered Rows (7 cols) */}
          <div className="lg:col-span-7 divide-y divide-brand-dark/10">
            {SERVICES_DATA.map((service) => {
              const isActive = service.slug === activeSlug;
              return (
                <div
                  key={service.slug}
                  onMouseEnter={() => setActiveSlug(service.slug)}
                  className={`group py-8 sm:py-10 transition-all duration-300 cursor-pointer ${
                    isActive ? "opacity-100" : "opacity-60 hover:opacity-100"
                  }`}
                >
                  <div className="flex items-start justify-between gap-6">
                    <div className="space-y-2">
                      <div className="flex items-center gap-4">
                        <span className="font-mono text-sm sm:text-base font-bold text-accent-dark">
                          {service.num} —
                        </span>
                        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-brand-dark tracking-tight transition-colors group-hover:text-brand-dark">
                          {service.title}
                        </h3>
                      </div>
                      <p className="text-sm sm:text-base text-brand-muted max-w-xl pl-10 sm:pl-12">
                        {service.shortDescription}
                      </p>
                    </div>

                    <Link
                      href={`/services/${service.slug}`}
                      className="shrink-0 flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full border border-brand-dark/15 bg-white text-brand-dark transition-all duration-300 group-hover:border-accent group-hover:bg-accent group-hover:scale-105"
                      aria-label={`Explore ${service.title}`}
                    >
                      <ArrowUpRight className="h-5 w-5" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right: Live Dynamic Detail Panel (5 cols) */}
          <div className="lg:col-span-5 sticky top-28">
            <motion.div
              key={activeService.slug}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35 }}
              className="rounded-3xl border border-brand-dark/10 bg-white p-8 sm:p-10 shadow-owl-md"
            >
              <div className="inline-block rounded-full bg-brand-cream border border-brand-dark/10 px-3 py-1 text-xs font-semibold text-brand-dark mb-4">
                Service Focus · {activeService.num}
              </div>

              <h4 className="text-2xl font-black text-brand-dark tracking-tight">
                {activeService.title}
              </h4>

              <p className="mt-4 text-sm text-brand-muted leading-relaxed">
                {activeService.description}
              </p>

              <div className="mt-6 pt-6 border-t border-brand-dark/10">
                <div className="text-xs font-bold uppercase tracking-wider text-brand-dark mb-3">
                  Key Deliverables
                </div>
                <ul className="space-y-2.5">
                  {activeService.deliverables.slice(0, 4).map((d) => (
                    <li
                      key={d}
                      className="flex items-start gap-2.5 text-xs sm:text-sm text-brand-dark/80"
                    >
                      <div className="h-4 w-4 rounded-full bg-accent/30 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="h-2.5 w-2.5 text-brand-dark stroke-[3]" />
                      </div>
                      <span>{d}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 pt-6 border-t border-brand-dark/10 flex items-center justify-between">
                <Link
                  href={`/services/${activeService.slug}`}
                  className="inline-flex items-center gap-2 text-sm font-bold text-brand-dark hover:text-accent-dark transition-colors group"
                >
                  <span>Read Full Capability Deep Dive</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Hub CTA */}
        <div className="mt-16 pt-8 border-t border-brand-dark/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-sm text-brand-muted font-medium">
            Looking for an integrated multi-channel scope?
          </span>
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-sm font-bold text-brand-dark hover:text-accent-dark transition-colors"
          >
            <span>Explore All 5 Services in Detail</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </Container>
    </section>
  );
}
