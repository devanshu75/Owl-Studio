"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowUpRight,
  ArrowRight,
  ChevronDown,
  Wand2,
  Globe,
  TrendingUp,
  Share2,
  Palette,
  Sparkles,
} from "lucide-react";
import { MenuOverlay } from "./MenuOverlay";
import { SITE_CONFIG } from "@/lib/constants";

interface SubmenuItem {
  title: string;
  href: string;
  description: string;
  tag?: string;
  icon?: React.ComponentType<{ className?: string }>;
}

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const pathname = usePathname();

  // Close dropdown on route change
  useEffect(() => {
    setActiveDropdown(null);
    setIsMenuOpen(false);
  }, [pathname]);

  // Scroll detection for glassmorphism header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMouseEnter = (name: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveDropdown(name);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 160);
  };

  const servicesSubmenu: SubmenuItem[] = [
    {
      title: "AI Ads Generation",
      href: "/services/ai-ads/",
      description: "Generative video and concept commercials crafted with neural synthesis.",
      tag: "Flagship",
      icon: Wand2,
    },
    {
      title: "Website Design",
      href: "/services/website-design/",
      description: "Sub-second Next.js digital platforms engineered for conversion.",
      tag: "Digital",
      icon: Globe,
    },
    {
      title: "Digital Marketing",
      href: "/services/digital-marketing/",
      description: "Full-funnel customer acquisition, paid performance, and conversion design.",
      tag: "Growth",
      icon: TrendingUp,
    },
    {
      title: "Social Media Systems",
      href: "/services/social-media-management/",
      description: "Editorial Instagram grids, retention carousels, and narrative framing.",
      tag: "Social",
      icon: Share2,
    },
    {
      title: "Graphic Designing",
      href: "/services/graphic-design/",
      description: "Visual identity manuals, bespoke typography, and luxury packaging marks.",
      tag: "Brand",
      icon: Palette,
    },
  ];

  const workSubmenu: SubmenuItem[] = [
    {
      title: "Beyond the Road",
      href: "/work/beyond-the-road/",
      description: "Cinematic automotive AI advertising campaign.",
      tag: "AI Ads",
    },
    {
      title: "Lumen Workspace",
      href: "/work/lumen-digital/",
      description: "Next.js web platform and component design system.",
      tag: "Websites",
    },
    {
      title: "Volt Urban Fleet",
      href: "/work/volt-mobility/",
      description: "Multi-channel e-mobility acquisition funnel.",
      tag: "Growth",
    },
    {
      title: "Kora Botanicals",
      href: "/work/kora-skincare/",
      description: "Editorial wellness social narrative and tactile art direction.",
      tag: "Social",
    },
    {
      title: "Noir Parfums",
      href: "/work/noir-fragrance/",
      description: "Artisanal luxury identity and packaging system.",
      tag: "Identity",
    },
    {
      title: "Apex Capital",
      href: "/work/apex-capital/",
      description: "Institutional financial advisory brand system.",
      tag: "Brand",
    },
  ];

  const aboutSubmenu: SubmenuItem[] = [
    {
      title: "Studio Philosophy",
      href: "/about/",
      description: "Why we unite human art direction with cutting-edge AI velocity.",
    },
    {
      title: "Methodology",
      href: "/about/#methodology",
      description: "Our 5-step collaborative framework from discovery to launch.",
    },
    {
      title: "AI-Assisted Workflows",
      href: "/about/#workflows",
      description: "How we use generative pipelines responsibly for real business results.",
    },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "glass-nav py-3.5 shadow-owl-sm border-b border-brand-dark/10"
            : "bg-[#F5F3EA]/70 backdrop-blur-md py-5 sm:py-6 border-b border-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 sm:px-8">
          {/* Left: Brand Identity / Monks-Style Lockup */}
          <Link
            href="/"
            className="flex items-center gap-3 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-lg"
            aria-label="Owl Studio Home"
          >
            <div className="relative h-10 w-10 sm:h-11 sm:w-11 transition-transform duration-300 group-hover:scale-105">
              <Image
                src="/images/logo.svg"
                alt="Owl Studio Logo"
                fill
                priority
                className="object-contain"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-bold tracking-tight text-brand-dark text-lg sm:text-xl leading-none">
                OWL<span className="text-accent-dark">.STUDIO</span>
              </span>
              <span className="hidden sm:inline-block font-mono text-[10px] tracking-widest uppercase text-brand-muted mt-0.5">
                Creative Agency
              </span>
            </div>
          </Link>

          {/* Center: Desktop Navigation Bar with Monks-Inspired Hover & Dropdowns */}
          <nav
            className="hidden lg:flex items-center gap-1 xl:gap-2 text-sm font-medium text-brand-dark/80"
            aria-label="Main navigation"
          >
            {/* 1. Services with Mega-Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter("services")}
              onMouseLeave={handleMouseLeave}
            >
              <Link
                href="/services/"
                className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full transition-all duration-200 hover:text-brand-dark hover:bg-white/60 ${
                  pathname.startsWith("/services") ? "text-brand-dark font-semibold bg-white/50" : ""
                }`}
                aria-expanded={activeDropdown === "services"}
              >
                <span
                  className={`h-1.5 w-1.5 rounded-full transition-all duration-200 ${
                    activeDropdown === "services" || pathname.startsWith("/services")
                      ? "bg-accent scale-100 opacity-100"
                      : "bg-transparent scale-0 opacity-0"
                  }`}
                />
                <span>Services</span>
                <ChevronDown
                  className={`h-3.5 w-3.5 transition-transform duration-200 text-brand-muted ${
                    activeDropdown === "services" ? "rotate-180 text-brand-dark" : ""
                  }`}
                />
              </Link>

              {/* Services Dropdown Panel */}
              <AnimatePresence>
                {activeDropdown === "services" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.98 }}
                    transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute top-full left-1/2 -translate-x-1/2 pt-3 w-[560px] z-50 pointer-events-auto"
                  >
                    <div className="rounded-3xl border border-brand-dark/10 bg-white/95 backdrop-blur-2xl p-6 shadow-owl-lg">
                      <div className="flex items-center justify-between pb-3 mb-3 border-b border-brand-dark/10">
                        <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-brand-muted">
                          Synchronized Disciplines
                        </span>
                        <span className="text-[11px] font-mono text-accent-dark font-semibold">
                          05 Capabilities
                        </span>
                      </div>

                      <div className="grid grid-cols-1 gap-2">
                        {servicesSubmenu.map((item) => {
                          const IconComponent = item.icon;
                          return (
                            <Link
                              key={item.title}
                              href={item.href}
                              className="group flex items-start gap-3.5 p-3 rounded-2xl transition-all duration-200 hover:bg-[#F5F3EA]/80"
                            >
                              <div className="h-9 w-9 rounded-xl bg-[#EDEBE3] flex items-center justify-center shrink-0 text-brand-dark transition-colors group-hover:bg-accent group-hover:text-brand-dark">
                                {IconComponent && <IconComponent className="h-4 w-4" />}
                              </div>
                              <div className="flex-1 min-w-0">
                                <div className="flex items-center justify-between">
                                  <span className="text-sm font-bold text-brand-dark group-hover:text-accent-dark transition-colors">
                                    {item.title}
                                  </span>
                                  {item.tag && (
                                    <span className="text-[10px] font-mono uppercase bg-white border border-brand-dark/10 px-2 py-0.5 rounded-full text-brand-muted">
                                      {item.tag}
                                    </span>
                                  )}
                                </div>
                                <p className="text-xs text-brand-muted mt-0.5 leading-snug line-clamp-1">
                                  {item.description}
                                </p>
                              </div>
                            </Link>
                          );
                        })}
                      </div>

                      <div className="mt-4 pt-3 border-t border-brand-dark/10 flex items-center justify-between text-xs">
                        <span className="text-brand-muted">Explore how our disciplines interconnect</span>
                        <Link
                          href="/services/"
                          className="inline-flex items-center gap-1 font-bold text-brand-dark hover:text-accent-dark transition-colors"
                        >
                          <span>All Services</span>
                          <ArrowRight className="h-3 w-3" />
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* 2. Work with Curated Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter("work")}
              onMouseLeave={handleMouseLeave}
            >
              <Link
                href="/work/"
                className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full transition-all duration-200 hover:text-brand-dark hover:bg-white/60 ${
                  pathname.startsWith("/work") ? "text-brand-dark font-semibold bg-white/50" : ""
                }`}
                aria-expanded={activeDropdown === "work"}
              >
                <span
                  className={`h-1.5 w-1.5 rounded-full transition-all duration-200 ${
                    activeDropdown === "work" || pathname.startsWith("/work")
                      ? "bg-accent scale-100 opacity-100"
                      : "bg-transparent scale-0 opacity-0"
                  }`}
                />
                <span>Work</span>
                <ChevronDown
                  className={`h-3.5 w-3.5 transition-transform duration-200 text-brand-muted ${
                    activeDropdown === "work" ? "rotate-180 text-brand-dark" : ""
                  }`}
                />
              </Link>

              {/* Work Dropdown Panel */}
              <AnimatePresence>
                {activeDropdown === "work" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.98 }}
                    transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute top-full left-1/2 -translate-x-1/2 pt-3 w-[580px] z-50 pointer-events-auto"
                  >
                    <div className="rounded-3xl border border-brand-dark/10 bg-white/95 backdrop-blur-2xl p-6 shadow-owl-lg">
                      <div className="flex items-center justify-between pb-3 mb-3 border-b border-brand-dark/10">
                        <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-brand-muted">
                          Selected Case Studies
                        </span>
                        <span className="text-[11px] font-mono text-accent-dark font-semibold">
                          Self-Initiated &amp; Commissions
                        </span>
                      </div>

                      <div className="grid grid-cols-2 gap-3">
                        {workSubmenu.map((item) => (
                          <Link
                            key={item.title}
                            href={item.href}
                            className="group p-3 rounded-2xl transition-all duration-200 hover:bg-[#F5F3EA]/80 flex flex-col justify-between"
                          >
                            <div>
                              <div className="flex items-center justify-between mb-1">
                                <span className="text-sm font-bold text-brand-dark group-hover:text-accent-dark transition-colors">
                                  {item.title}
                                </span>
                                <span className="text-[10px] font-mono uppercase text-brand-muted bg-white border border-brand-dark/10 px-1.5 py-0.5 rounded">
                                  {item.tag}
                                </span>
                              </div>
                              <p className="text-xs text-brand-muted line-clamp-2 leading-relaxed">
                                {item.description}
                              </p>
                            </div>
                            <div className="pt-2 text-[11px] font-bold text-brand-dark flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                              <span>Read study</span>
                              <ArrowRight className="h-3 w-3 text-accent-dark" />
                            </div>
                          </Link>
                        ))}
                      </div>

                      <div className="mt-4 pt-3 border-t border-brand-dark/10 flex items-center justify-between text-xs">
                        <span className="text-brand-muted">Filtered by AI Ads, Web &amp; Marketing</span>
                        <Link
                          href="/work/"
                          className="inline-flex items-center gap-1 font-bold text-brand-dark hover:text-accent-dark transition-colors"
                        >
                          <span>Explore Portfolio</span>
                          <ArrowRight className="h-3 w-3" />
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* 3. About Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter("about")}
              onMouseLeave={handleMouseLeave}
            >
              <Link
                href="/about/"
                className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full transition-all duration-200 hover:text-brand-dark hover:bg-white/60 ${
                  pathname.startsWith("/about") ? "text-brand-dark font-semibold bg-white/50" : ""
                }`}
                aria-expanded={activeDropdown === "about"}
              >
                <span
                  className={`h-1.5 w-1.5 rounded-full transition-all duration-200 ${
                    activeDropdown === "about" || pathname.startsWith("/about")
                      ? "bg-accent scale-100 opacity-100"
                      : "bg-transparent scale-0 opacity-0"
                  }`}
                />
                <span>About</span>
                <ChevronDown
                  className={`h-3.5 w-3.5 transition-transform duration-200 text-brand-muted ${
                    activeDropdown === "about" ? "rotate-180 text-brand-dark" : ""
                  }`}
                />
              </Link>

              <AnimatePresence>
                {activeDropdown === "about" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.98 }}
                    transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute top-full left-1/2 -translate-x-1/2 pt-3 w-[380px] z-50 pointer-events-auto"
                  >
                    <div className="rounded-3xl border border-brand-dark/10 bg-white/95 backdrop-blur-2xl p-5 shadow-owl-lg space-y-2">
                      <div className="pb-2 mb-2 border-b border-brand-dark/10">
                        <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-brand-muted">
                          Studio Craft &amp; Philosophy
                        </span>
                      </div>

                      {aboutSubmenu.map((item) => (
                        <Link
                          key={item.title}
                          href={item.href}
                          className="group block p-3 rounded-2xl transition-all duration-200 hover:bg-[#F5F3EA]/80"
                        >
                          <div className="text-sm font-bold text-brand-dark group-hover:text-accent-dark transition-colors">
                            {item.title}
                          </div>
                          <p className="text-xs text-brand-muted mt-0.5 leading-snug">
                            {item.description}
                          </p>
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* 4. Journal (Blog) Direct Link */}
            <Link
              href="/blog/"
              className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full transition-all duration-200 hover:text-brand-dark hover:bg-white/60 ${
                pathname.startsWith("/blog") ? "text-brand-dark font-semibold bg-white/50" : ""
              }`}
            >
              <span
                className={`h-1.5 w-1.5 rounded-full transition-all duration-200 ${
                  pathname.startsWith("/blog") ? "bg-accent scale-100 opacity-100" : "bg-transparent scale-0 opacity-0"
                }`}
              />
              <span>Journal</span>
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent ml-0.5" />
            </Link>

            {/* 5. Contact Direct Link */}
            <Link
              href="/contact/"
              className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full transition-all duration-200 hover:text-brand-dark hover:bg-white/60 ${
                pathname.startsWith("/contact") ? "text-brand-dark font-semibold bg-white/50" : ""
              }`}
            >
              <span
                className={`h-1.5 w-1.5 rounded-full transition-all duration-200 ${
                  pathname.startsWith("/contact") ? "bg-accent scale-100 opacity-100" : "bg-transparent scale-0 opacity-0"
                }`}
              />
              <span>Contact</span>
            </Link>
          </nav>

          {/* Right: Monks-Style Action Group (Start Project Pill + Animated Hamburger) */}
          <div className="flex items-center gap-3 sm:gap-4">
            {/* Primary Action Button (Desktop only, keeping mobile/responsive header clean with just logo and hamburger) */}
            <Link
              href="/contact/"
              className="hidden lg:inline-flex items-center gap-2 rounded-full bg-accent px-4 py-2 sm:px-5 sm:py-2.5 text-xs sm:text-sm font-semibold text-brand-dark shadow-owl-sm transition-all duration-300 hover:bg-accent-hover hover:shadow-owl-md hover:scale-[1.02] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-dark"
            >
              <span>Start a project</span>
              <ArrowUpRight className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
            </Link>

            {/* Monks-Inspired 3-Line Animated Hamburger Button (Visible on Mobile & Tablet only) */}
            <button
              onClick={() => setIsMenuOpen(true)}
              className="lg:hidden group flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-full border border-brand-dark/15 bg-white/80 backdrop-blur-sm transition-all duration-200 hover:border-accent hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              aria-label="Open mobile navigation menu"
            >
              <div className="flex flex-col gap-1 w-4 sm:w-5 items-center justify-center">
                <span className="h-0.5 w-4 sm:w-5 rounded-full bg-brand-dark transition-all duration-300 group-hover:bg-brand-dark" />
                <span className="h-0.5 w-2.5 sm:w-3.5 rounded-full bg-brand-dark transition-all duration-300 group-hover:w-4 sm:group-hover:w-5" />
                <span className="h-0.5 w-4 sm:w-5 rounded-full bg-brand-dark transition-all duration-300 group-hover:bg-brand-dark" />
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Fullscreen Editorial Drawer (Inspired by Monks, styled for Owl Studio) */}
      <MenuOverlay isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  );
}
