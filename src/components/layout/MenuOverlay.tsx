"use client";

import { useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowUpRight, Mail, Phone, MapPin } from "lucide-react";
import { NAV_LINKS, SITE_CONFIG } from "@/lib/constants";

interface MenuOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MenuOverlay({ isOpen, onClose }: MenuOverlayProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-label="Navigation Menu"
          initial={{ opacity: 0, y: "-100%" }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: "-100%" }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-50 flex flex-col justify-between bg-[#0a0c10]/98 backdrop-blur-2xl p-6 sm:p-10 md:p-16 lg:p-24 overflow-y-auto"
        >
          {/* Top Bar with Close button */}
          <div className="flex items-center justify-between border-b border-white/10 pb-6">
            <Link
              href="/"
              onClick={onClose}
              className="flex items-center gap-3 group"
            >
              <span className="text-xl font-bold tracking-wider text-white">
                OWL<span className="text-accent">.STUDIO</span>
              </span>
              <span className="hidden sm:inline-block font-mono text-xs text-textMuted uppercase">
                · Creative Agency
              </span>
            </Link>
            <button
              onClick={onClose}
              className="group flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white transition-all hover:border-accent hover:bg-accent hover:text-black"
              aria-label="Close menu"
            >
              <X className="h-6 w-6 transition-transform group-hover:rotate-90" />
            </button>
          </div>

          {/* Center Content: Two columns on desktop */}
          <div className="my-auto grid grid-cols-1 gap-12 py-12 lg:grid-cols-12 lg:gap-16 items-center">
            {/* Nav list - 7 cols */}
            <nav className="lg:col-span-7">
              <ul className="space-y-4 sm:space-y-6">
                {NAV_LINKS.map((item, idx) => (
                  <motion.li
                    key={item.label}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + idx * 0.08, duration: 0.4 }}
                  >
                    <Link
                      href={item.href}
                      onClick={onClose}
                      className="group flex items-baseline gap-4 sm:gap-6 text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white transition-all hover:text-accent hover:translate-x-3"
                    >
                      <span className="font-mono text-xs sm:text-sm text-accent opacity-70 group-hover:opacity-100">
                        {item.index}
                      </span>
                      <span>{item.label}</span>
                      <ArrowUpRight className="h-6 w-6 sm:h-8 sm:w-8 opacity-0 transition-all group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </nav>

            {/* Contact & Meta - 5 cols */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.4 }}
              className="lg:col-span-5 rounded-2xl border border-white/10 bg-surface-card/60 p-8 sm:p-10 backdrop-blur-xl"
            >
              <h3 className="text-sm font-semibold tracking-widest uppercase text-accent mb-6">
                Direct Dispatch
              </h3>

              <div className="space-y-4 text-sm sm:text-base text-gray-300">
                <a
                  href={`mailto:${SITE_CONFIG.contact.email}`}
                  className="flex items-center gap-3 transition-colors hover:text-white"
                >
                  <Mail className="h-4 w-4 text-accent" />
                  {SITE_CONFIG.contact.email}
                </a>

                <a
                  href={`tel:${SITE_CONFIG.contact.phone.replace(/\s+/g, "")}`}
                  className="flex items-center gap-3 transition-colors hover:text-white"
                >
                  <Phone className="h-4 w-4 text-accent" />
                  {SITE_CONFIG.contact.phoneDisplay}
                </a>

                <div className="flex items-center gap-3 text-textMuted pt-2">
                  <MapPin className="h-4 w-4 text-accent" />
                  {SITE_CONFIG.contact.location}
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-white/10">
                <Link
                  href="/#contact"
                  onClick={onClose}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-accent px-6 py-3.5 font-semibold text-black transition-all hover:bg-accent-hover hover:shadow-neon-sm"
                >
                  Start a project
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>

              <div className="mt-6 flex items-center justify-between text-xs sm:text-sm text-textMuted">
                <span>Follow studio</span>
                <div className="flex gap-4">
                  {SITE_CONFIG.socials.map((s) => (
                    <a
                      key={s.name}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium hover:text-accent transition-colors"
                      aria-label={s.name}
                    >
                      {s.label}
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Bottom Bar */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs text-textMuted">
            <span>© {new Date().getFullYear()} Owl Studio. All rights reserved.</span>
            <span>Creative Studio · Generative AI Video &amp; Web Growth</span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
