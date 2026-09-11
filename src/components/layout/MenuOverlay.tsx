"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  ArrowUpRight,
  ChevronDown,
  Mail,
  Phone,
  MapPin,
  Send,
  Loader2,
  CheckCircle2,
  ArrowRight,
  MessageSquare,
} from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";
import { SERVICES_LIST } from "@/lib/validations/contact";

interface MenuOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

interface DrawerCategory {
  index: string;
  label: string;
  href: string;
  subitems?: { label: string; href: string; tag?: string }[];
}

export function MenuOverlay({ isOpen, onClose }: MenuOverlayProps) {
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);

  // Quick inquiry form state inside drawer
  const [showQuickForm, setShowQuickForm] = useState(false);
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    service: "AI Ads Generation",
    message: "",
  });
  const [formSubmitting, setFormSubmitting] = useState(false);
  const [formSuccess, setFormSuccess] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);

  // Background scroll lock & Lenis synchronization
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      // 1. Tell Lenis scroller to pause immediately
      window.dispatchEvent(new CustomEvent("owl:scroll-stop"));
      const win = window as unknown as {
        __lenis?: { stop: () => void; start: () => void };
      };
      if (win.__lenis) {
        win.__lenis.stop();
      }

      // 2. Lock browser window & body scrolling
      const prevBodyOverflow = document.body.style.overflow;
      const prevHtmlOverflow = document.documentElement.style.overflow;
      const prevTouchAction = document.body.style.touchAction;

      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
      document.body.style.touchAction = "none";

      window.addEventListener("keydown", handleKeyDown);

      return () => {
        // Restore scrolling when menu unmounts or closes
        window.dispatchEvent(new CustomEvent("owl:scroll-start"));
        if (win.__lenis) {
          win.__lenis.start();
        }
        document.body.style.overflow = prevBodyOverflow;
        document.documentElement.style.overflow = prevHtmlOverflow;
        document.body.style.touchAction = prevTouchAction;
        window.removeEventListener("keydown", handleKeyDown);
      };
    } else {
      // Menu is closed
      window.dispatchEvent(new CustomEvent("owl:scroll-start"));
      const win = window as unknown as {
        __lenis?: { stop: () => void; start: () => void };
      };
      if (win.__lenis) {
        win.__lenis.start();
      }
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
      document.body.style.touchAction = "";
      setExpandedCategory(null);
      setShowQuickForm(false);
    }
  }, [isOpen, onClose]);

  const toggleCategory = (label: string, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setExpandedCategory(expandedCategory === label ? null : label);
  };

  const handleQuickSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormError(null);

    if (!formState.name.trim() || formState.name.length < 2) {
      setFormError("Please enter your name (minimum 2 characters).");
      return;
    }
    if (!formState.email.trim() || !formState.email.includes("@")) {
      setFormError("Please enter a valid email address.");
      return;
    }
    if (!formState.message.trim() || formState.message.length < 10) {
      setFormError("Please share a brief message (minimum 10 characters).");
      return;
    }

    setFormSubmitting(true);
    try {
      const res = await fetch("/api/contact/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formState.name,
          email: formState.email,
          service: formState.service,
          message: formState.message,
          budgetRange: "Flexible / To be discussed",
        }),
      });

      const data = await res.json();
      if (!res.ok || !data.success) {
        throw new Error(data.message || "Failed to transmit brief.");
      }

      setFormSuccess(true);
      setFormState({
        name: "",
        email: "",
        service: "AI Ads Generation",
        message: "",
      });
    } catch (err: unknown) {
      setFormError(
        err instanceof Error
          ? err.message
          : "An unexpected error occurred. Please try again."
      );
    } finally {
      setFormSubmitting(false);
    }
  };

  const categories: DrawerCategory[] = [
    {
      index: "01",
      label: "Work",
      href: "/work/",
      subitems: [
        { label: "Beyond the Road (AI Ads)", href: "/work/beyond-the-road/" },
        { label: "Lumen Workspace (Web)", href: "/work/lumen-digital/" },
        { label: "Volt Urban Fleet (Marketing)", href: "/work/volt-mobility/" },
        { label: "Kora Botanicals (Social)", href: "/work/kora-skincare/" },
        { label: "Noir Parfums (Identity)", href: "/work/noir-fragrance/" },
        { label: "Apex Capital (Brand System)", href: "/work/apex-capital/" },
      ],
    },
    {
      index: "02",
      label: "Services",
      href: "/services/",
      subitems: [
        { label: "AI Ads Generation", href: "/services/ai-ads/", tag: "Flagship" },
        { label: "Website Design", href: "/services/website-design/", tag: "Next.js" },
        { label: "Digital Marketing", href: "/services/digital-marketing/", tag: "Growth" },
        { label: "Social Media Management", href: "/services/social-media-management/", tag: "Social" },
        { label: "Graphic Designing", href: "/services/graphic-design/", tag: "Identity" },
      ],
    },
    {
      index: "03",
      label: "About",
      href: "/about/",
      subitems: [
        { label: "Studio Philosophy", href: "/about/" },
        { label: "Methodology & Framework", href: "/about/#methodology" },
        { label: "AI-Assisted Pipelines", href: "/about/#workflows" },
      ],
    },
    {
      index: "04",
      label: "Journal",
      href: "/blog/",
    },
    {
      index: "05",
      label: "Contact",
      href: "/contact/",
    },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-label="Studio Navigation Menu"
          data-lenis-prevent
          initial={{ opacity: 0, y: "-100%" }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: "-100%" }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-50 flex flex-col bg-[#F5F3EA] text-brand-dark overflow-hidden"
        >
          {/* Top Bar (Pinned sticky header with Logo & Always-Visible Close Button) */}
          <header className="shrink-0 z-30 border-b border-brand-dark/10 bg-[#F5F3EA]/95 backdrop-blur-md px-5 py-4 sm:px-8 sm:py-5 lg:px-12">
            <div className="mx-auto max-w-7xl flex items-center justify-between">
              <Link
                href="/"
                onClick={onClose}
                className="flex items-center gap-3 group focus-visible:outline-none"
                aria-label="Owl Studio Home"
              >
                <div className="relative h-10 w-10 sm:h-11 sm:w-11 transition-transform duration-300 group-hover:scale-105">
                  <Image
                    src="/images/logo.svg"
                    alt="Owl Studio"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="text-xl font-bold tracking-tight text-brand-dark leading-none">
                    OWL<span className="text-accent-dark">.STUDIO</span>
                  </span>
                  <span className="hidden sm:inline-block font-mono text-[10px] tracking-widest uppercase text-brand-muted mt-0.5">
                    Creative Navigation
                  </span>
                </div>
              </Link>

              <button
                onClick={onClose}
                className="group flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-full border border-brand-dark/15 bg-white text-brand-dark transition-all hover:border-accent hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent shadow-owl-sm"
                aria-label="Close navigation menu"
              >
                <X className="h-5 w-5 sm:h-6 sm:w-6 transition-transform duration-300 group-hover:rotate-90" />
              </button>
            </div>
          </header>

          {/* Scrollable Body: Pure natural vertical scrolling with zero auto-margin clipping */}
          <div
            data-lenis-prevent
            className="flex-1 overflow-y-auto overscroll-contain px-5 py-8 sm:px-8 sm:py-10 lg:px-12"
            style={{
              WebkitOverflowScrolling: "touch",
              touchAction: "pan-y",
            }}
          >
            <div className="mx-auto max-w-7xl flex flex-col min-h-full justify-between gap-12">
              {/* Center Content: Two-Column Responsive Split */}
              <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-14 items-start flex-1">
                {/* Left/Main Column: Accordion Categories (7 cols) */}
                <nav className="lg:col-span-7" aria-label="Expanded studio categories">
                  <ul className="space-y-4 sm:space-y-5">
                    {categories.map((cat, idx) => {
                      const hasSubitems = Boolean(cat.subitems && cat.subitems.length > 0);
                      const isExpanded = expandedCategory === cat.label;

                      return (
                        <motion.li
                          key={cat.label}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{
                            delay: 0.05 + idx * 0.04,
                            duration: 0.3,
                            ease: [0.22, 1, 0.36, 1],
                          }}
                          className="border-b border-brand-dark/10 pb-3 sm:pb-4"
                        >
                          <div className="flex items-center justify-between group">
                            <Link
                              href={cat.href}
                              onClick={onClose}
                              className="flex items-baseline gap-3 sm:gap-5 text-2xl sm:text-3xl md:text-5xl font-extrabold tracking-tight text-brand-dark transition-all duration-200 hover:text-accent-dark hover:translate-x-1.5"
                            >
                              <span className="font-mono text-xs sm:text-sm font-semibold text-brand-muted group-hover:text-accent-dark">
                                {cat.index}
                              </span>
                              <span>{cat.label}</span>
                            </Link>

                            {hasSubitems && (
                              <button
                                onClick={(e) => toggleCategory(cat.label, e)}
                                className="p-2 text-brand-muted hover:text-brand-dark rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                                aria-expanded={isExpanded}
                                aria-label={`Toggle ${cat.label} sub-items`}
                              >
                                <ChevronDown
                                  className={`h-5 w-5 transition-transform duration-300 ${
                                    isExpanded ? "rotate-180 text-brand-dark" : ""
                                  }`}
                                />
                              </button>
                            )}
                          </div>

                          {/* Accordion Sub-items */}
                          <AnimatePresence>
                            {hasSubitems && isExpanded && (
                              <motion.ul
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: "auto" }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.25, ease: "easeInOut" }}
                                className="mt-3 pl-6 sm:pl-10 space-y-2.5 overflow-hidden"
                              >
                                {cat.subitems?.map((sub) => (
                                  <li key={sub.href}>
                                    <Link
                                      href={sub.href}
                                      onClick={onClose}
                                      className="group flex items-center justify-between py-1 text-sm sm:text-base font-medium text-brand-muted hover:text-brand-dark transition-colors"
                                    >
                                      <div className="flex items-center gap-2">
                                        <span className="h-1.5 w-1.5 rounded-full bg-accent group-hover:scale-150 transition-transform" />
                                        <span>{sub.label}</span>
                                      </div>
                                      {sub.tag && (
                                        <span className="text-[10px] font-mono uppercase bg-white border border-brand-dark/10 px-2 py-0.5 rounded-full text-brand-muted">
                                          {sub.tag}
                                        </span>
                                      )}
                                    </Link>
                                  </li>
                                ))}
                              </motion.ul>
                            )}
                          </AnimatePresence>
                        </motion.li>
                      );
                    })}
                  </ul>
                </nav>

                {/* Right Column: Contact Desk & Integrated Form (5 cols) */}
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  className="lg:col-span-5 rounded-3xl border border-brand-dark/10 bg-white p-6 sm:p-8 shadow-owl-md backdrop-blur-xl"
                >
                  <div className="flex items-center justify-between mb-6 pb-4 border-b border-brand-dark/10">
                    <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-brand-muted">
                      <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />
                      <span>Direct Studio Desk</span>
                    </div>
                    <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded-full bg-[#EDEBE3] text-brand-dark font-bold">
                      24h Response
                    </span>
                  </div>

                  {/* Direct Contact Channels */}
                  <div className="space-y-4 text-sm sm:text-base text-brand-dark">
                    <div>
                      <div className="text-[11px] font-mono text-brand-muted uppercase mb-1">
                        Inquiries &amp; Briefs
                      </div>
                      <a
                        href={`mailto:${SITE_CONFIG.contact.email}`}
                        onClick={onClose}
                        className="flex items-center gap-3 font-bold hover:text-accent-dark transition-colors text-base sm:text-lg break-all"
                      >
                        <div className="h-9 w-9 rounded-xl bg-[#EDEBE3] flex items-center justify-center shrink-0">
                          <Mail className="h-4 w-4 text-brand-dark" />
                        </div>
                        <span>{SITE_CONFIG.contact.email}</span>
                      </a>
                    </div>

                    <div>
                      <div className="text-[11px] font-mono text-brand-muted uppercase mb-1">
                        Direct Line
                      </div>
                      <a
                        href={`tel:${SITE_CONFIG.contact.phone.replace(/\s+/g, "")}`}
                        onClick={onClose}
                        className="flex items-center gap-3 font-semibold hover:text-accent-dark transition-colors"
                      >
                        <div className="h-9 w-9 rounded-xl bg-[#EDEBE3] flex items-center justify-center shrink-0">
                          <Phone className="h-4 w-4 text-brand-dark" />
                        </div>
                        <span>{SITE_CONFIG.contact.phoneDisplay}</span>
                      </a>
                    </div>

                    <div className="pt-1">
                      <div className="text-[11px] font-mono text-brand-muted uppercase mb-1">
                        Studio Presence
                      </div>
                      <div className="flex items-center gap-3 text-brand-muted text-xs sm:text-sm">
                        <div className="h-9 w-9 rounded-xl bg-[#EDEBE3] flex items-center justify-center shrink-0">
                          <MapPin className="h-4 w-4 text-brand-dark" />
                        </div>
                        <span>{SITE_CONFIG.contact.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Quick Project Inquiry Section / Form */}
                  <div className="mt-6 pt-6 border-t border-brand-dark/10">
                    {!showQuickForm ? (
                      <div className="space-y-3">
                        <Link
                          href="/contact/"
                          onClick={onClose}
                          className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-accent px-6 py-3.5 font-bold text-sm text-brand-dark shadow-owl-sm transition-all hover:bg-accent-hover hover:shadow-owl-md hover:scale-[1.01] active:scale-[0.99]"
                        >
                          <span>Start a project inquiry</span>
                          <ArrowUpRight className="h-4 w-4" />
                        </Link>

                        <button
                          type="button"
                          onClick={() => setShowQuickForm(true)}
                          className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-brand-dark/15 bg-[#F5F3EA] px-6 py-3 text-xs sm:text-sm font-semibold text-brand-dark transition-all hover:bg-[#EDEBE3]"
                        >
                          <MessageSquare className="h-4 w-4 text-brand-muted" />
                          <span>Send a quick note from menu</span>
                        </button>
                      </div>
                    ) : (
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-bold uppercase tracking-wider text-brand-dark">
                            Quick Project Note
                          </span>
                          <button
                            type="button"
                            onClick={() => {
                              setShowQuickForm(false);
                              setFormSuccess(false);
                              setFormError(null);
                            }}
                            className="text-xs text-brand-muted hover:text-brand-dark underline"
                          >
                            Cancel
                          </button>
                        </div>

                        {formSuccess ? (
                          <div className="p-4 rounded-2xl bg-[#EDEBE3] text-center space-y-3">
                            <div className="h-10 w-10 bg-accent/40 rounded-full flex items-center justify-center mx-auto text-brand-dark">
                              <CheckCircle2 className="h-5 w-5" />
                            </div>
                            <h4 className="text-sm font-bold text-brand-dark">
                              Brief Transmitted!
                            </h4>
                            <p className="text-xs text-brand-muted">
                              We received your project note and will reply within 24 hours.
                            </p>
                            <button
                              type="button"
                              onClick={() => setFormSuccess(false)}
                              className="text-xs font-bold text-brand-dark underline"
                            >
                              Send another note
                            </button>
                          </div>
                        ) : (
                          <form onSubmit={handleQuickSubmit} className="space-y-3">
                            {formError && (
                              <p className="text-xs text-red-600 bg-red-50 p-2.5 rounded-xl border border-red-200">
                                {formError}
                              </p>
                            )}

                            <div>
                              <input
                                type="text"
                                placeholder="Your name *"
                                value={formState.name}
                                onChange={(e) =>
                                  setFormState({ ...formState, name: e.target.value })
                                }
                                className="w-full rounded-xl border border-brand-dark/15 bg-[#F5F3EA]/70 px-3.5 py-2.5 text-sm text-brand-dark placeholder:text-brand-muted/70 focus:border-brand-dark focus:bg-white focus:outline-none transition-colors"
                              />
                            </div>

                            <div>
                              <input
                                type="email"
                                placeholder="Your email address *"
                                value={formState.email}
                                onChange={(e) =>
                                  setFormState({ ...formState, email: e.target.value })
                                }
                                className="w-full rounded-xl border border-brand-dark/15 bg-[#F5F3EA]/70 px-3.5 py-2.5 text-sm text-brand-dark placeholder:text-brand-muted/70 focus:border-brand-dark focus:bg-white focus:outline-none transition-colors"
                              />
                            </div>

                            <div>
                              <select
                                value={formState.service}
                                onChange={(e) =>
                                  setFormState({ ...formState, service: e.target.value })
                                }
                                className="w-full rounded-xl border border-brand-dark/15 bg-[#F5F3EA]/70 px-3.5 py-2.5 text-xs sm:text-sm text-brand-dark focus:border-brand-dark focus:bg-white focus:outline-none transition-colors"
                              >
                                {SERVICES_LIST.map((s) => (
                                  <option key={s} value={s}>
                                    {s}
                                  </option>
                                ))}
                              </select>
                            </div>

                            <div>
                              <textarea
                                rows={3}
                                placeholder="What would you like to build together? *"
                                value={formState.message}
                                onChange={(e) =>
                                  setFormState({ ...formState, message: e.target.value })
                                }
                                className="w-full rounded-xl border border-brand-dark/15 bg-[#F5F3EA]/70 p-3 text-sm text-brand-dark placeholder:text-brand-muted/70 focus:border-brand-dark focus:bg-white focus:outline-none transition-colors resize-none"
                              />
                            </div>

                            <button
                              type="submit"
                              disabled={formSubmitting}
                              className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-accent px-5 py-3 font-bold text-xs sm:text-sm text-brand-dark shadow-owl-sm hover:bg-accent-hover transition-all disabled:opacity-50"
                            >
                              {formSubmitting ? (
                                <>
                                  <Loader2 className="h-4 w-4 animate-spin" />
                                  <span>Transmitting...</span>
                                </>
                              ) : (
                                <>
                                  <span>Send Quick Brief</span>
                                  <Send className="h-3.5 w-3.5" />
                                </>
                              )}
                            </button>

                            <div className="pt-1 text-center">
                              <Link
                                href="/contact/"
                                onClick={onClose}
                                className="text-xs text-brand-muted hover:text-brand-dark inline-flex items-center gap-1 font-semibold"
                              >
                                <span>Or open complete project consultation page</span>
                                <ArrowRight className="h-3 w-3" />
                              </Link>
                            </div>
                          </form>
                        )}
                      </div>
                    )}
                  </div>

                  {/* Social Channels */}
                  <div className="mt-6 pt-4 border-t border-brand-dark/10 flex items-center justify-between text-xs text-brand-muted">
                    <span className="font-mono">Follow Studio</span>
                    <div className="flex gap-4">
                      {SITE_CONFIG.socials.map((s) => (
                        <a
                          key={s.name}
                          href={s.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={onClose}
                          className="font-bold text-brand-dark hover:text-accent-dark transition-colors"
                          aria-label={s.name}
                        >
                          {s.label}
                        </a>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Bottom Bar: Copyright & Discipline Motto */}
              <footer className="shrink-0 border-t border-brand-dark/10 pt-6 pb-12 sm:pb-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-brand-muted">
                <span>© {new Date().getFullYear()} Owl Studio. All rights reserved.</span>
                <span>Design, AI &amp; Marketing · Modern Creative Agency</span>
              </footer>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
