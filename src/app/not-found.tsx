import Link from "next/link";
import { ArrowLeft, ArrowRight, Compass } from "lucide-react";
import { Container } from "@/components/layout/Container";

export default function NotFound() {
  const quickLinks = [
    { title: "Our Services", href: "/services" },
    { title: "Selected Work", href: "/work" },
    { title: "Studio Journal", href: "/blog" },
    { title: "Contact Us", href: "/contact" },
  ];

  return (
    <div className="relative min-h-[85vh] bg-[#F5F3EA] flex flex-col items-center justify-center text-center px-6 pt-36 pb-24 overflow-hidden">
      {/* Radiant ambient glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#FFF4B8]/70 blur-[150px] rounded-full -z-10" />

      <Container className="relative z-10 max-w-xl space-y-8">
        {/* Subtle Owl Glance Micro-Interaction */}
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl bg-white border border-brand-dark/10 shadow-owl-sm transition-transform hover:scale-105">
          <div className="relative flex items-center justify-center animate-owl-glance">
            {/* Minimalist owl face silhouette with blinking eyes */}
            <div className="flex items-center gap-3">
              <span className="h-4 w-4 rounded-full bg-accent border-2 border-brand-dark shadow-sm" />
              <span className="h-4 w-4 rounded-full bg-accent border-2 border-brand-dark shadow-sm" />
            </div>
          </div>
        </div>

        <div className="inline-flex items-center gap-2 rounded-full border border-brand-dark/10 bg-white px-4 py-1 text-xs font-mono font-bold uppercase tracking-wider text-brand-dark shadow-owl-sm">
          <Compass className="h-3.5 w-3.5 text-accent-dark" />
          Status 404 • Lost in the Clouds
        </div>

        <h1 className="text-5xl sm:text-7xl font-black tracking-tight text-brand-dark uppercase leading-[1.02]">
          This page <br />
          <span className="relative inline-block text-brand-dark">
            flew away.
            <span className="absolute left-0 bottom-1 w-full h-3 bg-accent/60 -z-10 rounded-sm" />
          </span>
        </h1>

        <p className="text-base sm:text-lg text-brand-muted leading-relaxed max-w-md mx-auto">
          The owl scouted the nocturnal horizon, but this coordinates link has moved, been renamed, or never existed in the first place.
        </p>

        {/* Primary Recovery Button */}
        <div className="pt-2">
          <Link
            href="/"
            className="inline-flex items-center gap-2.5 rounded-full bg-accent px-8 py-4 text-sm font-bold text-brand-dark shadow-owl-sm transition-all hover:bg-accent-hover hover:shadow-owl-md hover:scale-[1.02] active:scale-[0.98]"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Home</span>
          </Link>
        </div>

        {/* Quick Discovery Pathways */}
        <div className="pt-8 border-t border-brand-dark/10">
          <div className="text-xs font-mono uppercase tracking-wider text-brand-muted mb-4 font-semibold">
            Or continue exploring:
          </div>
          <div className="flex flex-wrap items-center justify-center gap-2">
            {quickLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="inline-flex items-center gap-1.5 rounded-full border border-brand-dark/10 bg-white px-4 py-2 text-xs font-bold text-brand-dark hover:border-brand-dark/30 hover:bg-accent hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                <span>{link.title}</span>
                <ArrowRight className="h-3 w-3" />
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}
