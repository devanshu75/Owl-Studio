import Link from "next/link";
import { ArrowUpRight, ArrowRight } from "lucide-react";

export function FinalCtaSection() {
  return (
    <section className="relative bg-[#020617] py-24 sm:py-28 lg:py-32 overflow-hidden">
      {/* Radiant ambient glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-accent/10 blur-[150px] rounded-full" />

      <div className="relative mx-auto max-w-6xl px-6 sm:px-8 text-center">
        <h2 className="font-extrabold tracking-tight leading-none">
          <span className="block text-gray-200 text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
            Ready to
          </span>
          <span className="block text-accent text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl mt-2 drop-shadow-[0_0_35px_rgba(163,255,0,0.4)]">
            stand out?
          </span>
        </h2>

        <p className="mt-8 max-w-xl mx-auto text-base sm:text-lg text-gray-400 leading-relaxed">
          Join ambitious startups and established companies that chose Owl Studio to build their
          definitive digital presence and accelerate revenue growth.
        </p>

        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-5">
          <Link
            href="/#contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-accent px-9 py-4 font-bold text-black shadow-neon-glow transition-all duration-300 hover:bg-accent-hover hover:scale-105 active:scale-95"
          >
            Start a Project
            <ArrowUpRight className="h-4 w-4" />
          </Link>

          <Link
            href="/#ourwork"
            className="group w-full sm:w-auto inline-flex items-center justify-center gap-3 rounded-full border border-gray-700 bg-white/5 px-8 py-4 font-medium text-gray-200 transition-all duration-300 hover:border-white/30 hover:bg-white/10 hover:text-white"
          >
            <span>See our work</span>
            <div className="flex h-7 w-7 items-center justify-center rounded-full border border-gray-600 group-hover:border-white transition-colors">
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
