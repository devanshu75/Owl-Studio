"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";
import { SERVICES_DATA } from "@/lib/services-data";
import { Container } from "./Container";
import { useState } from "react";

export function Footer() {
  const currentYear = new Date().getFullYear();
  const [isHovered, setIsHovered] = useState(false);

  return (
    <footer className="relative bg-[#EDEBE3] border-t border-brand-dark/10 pt-20 pb-12 overflow-hidden">
      <Container>
        {/* Large Manifesto Banner */}
        <div className="border-b border-brand-dark/10 pb-16">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-brand-muted mb-4">
                <span className="h-2 w-2 rounded-full bg-accent" />
                Owl Studio Manifesto
              </div>
              <h2 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-brand-dark leading-[1.05]">
                LET&apos;S MAKE SOMETHING{" "}
                <span className="relative inline-block">
                  PEOPLE NOTICE.
                  <span className="absolute left-0 bottom-1 w-full h-3 bg-accent/40 -z-10 rounded-sm" />
                </span>
              </h2>
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-3 rounded-full bg-brand-dark px-8 py-4 text-base font-semibold text-white transition-all duration-300 hover:bg-black hover:shadow-owl-md hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>Start a Project</span>
                <div className="flex h-7 w-7 items-center justify-center rounded-full bg-accent text-brand-dark transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                  <ArrowUpRight className="h-4 w-4" />
                </div>
              </Link>
            </div>
          </div>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-12 py-16">
          {/* Col 1: Brand & Owl Interactive Emblem (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <Link
              href="/"
              className="inline-flex items-center gap-3 group"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <div className="relative h-11 w-11 sm:h-12 sm:w-12 transition-transform duration-300 group-hover:scale-110">
                <Image
                  src="/images/logo.svg"
                  alt="Owl Studio"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold tracking-tight text-brand-dark">
                  OWL STUDIO
                </span>
                <span className="text-xs text-brand-muted">
                  Creative work for modern brands.
                </span>
              </div>
            </Link>

            <p className="max-w-sm text-sm text-brand-muted leading-relaxed">
              Combining design, generative AI, websites, digital marketing, and social media
              to help modern brands stand out and grow.
            </p>

            {/* Subtle Interactive Owl Brand Indicator */}
            <div className="inline-flex items-center gap-2 rounded-full border border-brand-dark/10 bg-white px-3.5 py-1.5 text-xs text-brand-dark font-medium shadow-owl-sm">
              <span
                className={`h-2.5 w-2.5 rounded-full bg-accent transition-all duration-300 ${
                  isHovered ? "scale-125 shadow-gold-glow" : ""
                }`}
              />
              <span>Creative Agency · India &amp; Worldwide</span>
            </div>
          </div>

          {/* Col 2: Services (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <h3 className="text-xs font-semibold tracking-widest uppercase text-brand-dark/50">
              Services
            </h3>
            <ul className="space-y-3 text-sm">
              {SERVICES_DATA.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-brand-dark/80 hover:text-brand-dark font-medium transition-colors inline-flex items-center gap-2 group"
                  >
                    <span className="text-xs text-accent-dark font-mono">
                      {service.num}
                    </span>
                    <span>{service.title}</span>
                    <ArrowUpRight className="h-3.5 w-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-accent-dark" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Navigation & Social (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-xs font-semibold tracking-widest uppercase text-brand-dark/50">
              Navigation
            </h3>
            <ul className="space-y-2.5 text-sm font-medium text-brand-dark/80">
              <li>
                <Link href="/work" className="hover:text-brand-dark transition-colors">
                  Work
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-brand-dark transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-brand-dark transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-brand-dark transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-brand-dark transition-colors">
                  Contact
                </Link>
              </li>
            </ul>

            <div className="pt-4 border-t border-brand-dark/10 space-y-2">
              <h4 className="text-xs font-semibold tracking-widest uppercase text-brand-dark/50">
                Connect
              </h4>
              <div className="flex flex-wrap gap-4 text-xs font-medium text-brand-dark/80">
                <a
                  href="https://instagram.com/owlstudio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-brand-dark transition-colors"
                >
                  Instagram
                </a>
                <a
                  href="https://linkedin.com/company/owlstudio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-brand-dark transition-colors"
                >
                  LinkedIn
                </a>
                <a
                  href={`mailto:${SITE_CONFIG.contact.email}`}
                  className="hover:text-brand-dark transition-colors"
                >
                  Email
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Legal & Copyright Bar */}
        <div className="border-t border-brand-dark/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-brand-muted">
          <div>© {currentYear} Owl Studio. All rights reserved.</div>
          <div className="flex items-center gap-6">
            <Link
              href="/privacy-policy"
              className="hover:text-brand-dark transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="hover:text-brand-dark transition-colors"
            >
              Terms &amp; Conditions
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
