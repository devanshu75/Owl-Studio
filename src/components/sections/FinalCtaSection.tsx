import Link from "next/link";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { Container } from "@/components/layout/Container";

export function FinalCtaSection() {
  return (
    <section className="relative bg-white py-28 sm:py-36 overflow-hidden">
      {/* Background ambient warm wash */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#FFF4B8]/50 blur-[130px] rounded-full" />

      <Container className="relative z-10 text-center">
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-brand-muted mb-2">
            <span className="h-2 w-2 rounded-full bg-accent" />
            Let&apos;s Collaborate
          </div>

          <h2 className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tight text-brand-dark leading-[0.98] uppercase">
            Have something <br />
            <span className="relative inline-block text-brand-dark">
              worth building?
              <span className="absolute left-0 bottom-2 w-full h-3 sm:h-4 bg-accent/60 -z-10 rounded-sm" />
            </span>
          </h2>

          <p className="mt-8 max-w-xl mx-auto text-base sm:text-lg text-brand-muted leading-relaxed font-normal">
            Whether you need a high-converting website, an AI advertising campaign, or a
            complete brand overhaul, let&apos;s build something impossible to ignore.
          </p>

          <div className="pt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 rounded-full bg-accent px-9 py-4 font-bold text-brand-dark shadow-owl-sm transition-all duration-300 hover:bg-accent-hover hover:shadow-owl-md hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>Start a Project</span>
              <ArrowUpRight className="h-4 w-4" />
            </Link>

            <Link
              href="/work"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full border border-brand-dark/20 bg-white/80 px-8 py-4 font-semibold text-brand-dark transition-all duration-300 hover:border-brand-dark hover:bg-white hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>View Our Work</span>
              <ArrowRight className="h-4 w-4 text-brand-muted" />
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
