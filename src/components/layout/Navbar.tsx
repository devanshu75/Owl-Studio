"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { MenuOverlay } from "./MenuOverlay";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "glass-nav py-3.5 shadow-2xl"
            : "bg-transparent py-5 sm:py-6"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 sm:px-8">
          {/* Left: Hamburger menu toggle */}
          <div className="flex items-center">
            <button
              onClick={() => setIsMenuOpen(true)}
              className="group flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 transition-all duration-200 hover:border-accent hover:bg-accent/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              aria-label="Open navigation menu"
            >
              <div className="flex flex-col gap-1.5 w-5">
                <span className="h-0.5 w-5 rounded-full bg-white transition-all group-hover:bg-accent group-hover:translate-x-0.5" />
                <span className="h-0.5 w-3.5 rounded-full bg-white transition-all group-hover:bg-accent group-hover:w-5" />
                <span className="h-0.5 w-5 rounded-full bg-white transition-all group-hover:bg-accent group-hover:-translate-x-0.5" />
              </div>
            </button>
          </div>

          {/* Center: Brand Logo */}
          <Link
            href="/"
            className="flex items-center gap-2.5 transition-transform hover:scale-105"
            aria-label="Owl Studio Home"
          >
            <div className="relative h-8 w-8 sm:h-9 sm:w-9">
              <Image
                src="/images/logo.svg"
                alt="Owl Studio Logo"
                fill
                priority
                className="object-contain"
              />
            </div>
            <span className="hidden sm:inline-block font-bold tracking-tight text-white text-lg sm:text-xl">
              OWL<span className="text-accent">.STUDIO</span>
            </span>
          </Link>

          {/* Right: Desktop links & CTA */}
          <div className="flex items-center gap-5 sm:gap-7">
            <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-gray-300">
              <Link
                href="/#services"
                className="transition-colors hover:text-accent"
              >
                Services
              </Link>
              <Link
                href="/#ourwork"
                className="transition-colors hover:text-accent"
              >
                Our Work
              </Link>
              <Link
                href="/#about"
                className="transition-colors hover:text-accent"
              >
                About
              </Link>
              <Link
                href="/blog"
                className="transition-colors hover:text-accent flex items-center gap-1.5"
              >
                <span>Journal</span>
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              </Link>
            </nav>

            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-4 py-2 sm:px-5 sm:py-2.5 text-xs sm:text-sm font-semibold text-accent transition-all duration-300 hover:bg-accent hover:text-black hover:shadow-neon-sm hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>Start a project</span>
              <ArrowUpRight className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
            </Link>
          </div>
        </div>
      </header>

      {/* Fullscreen Overlay Menu */}
      <MenuOverlay isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  );
}
