import Link from "next/link";
import { ArrowLeft, Compass } from "lucide-react";

export default function NotFound() {
  return (
    <div className="relative min-h-[85vh] bg-primary flex flex-col items-center justify-center text-center px-6 pt-24 pb-16 overflow-hidden">
      {/* Radiant ambient glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent/10 blur-[160px] rounded-full" />

      <div className="relative z-10 max-w-lg space-y-6">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-semibold text-accent backdrop-blur-md">
          <Compass className="h-4 w-4" />
          Error 404
        </div>

        <h1 className="text-6xl sm:text-8xl font-black tracking-tight text-white">
          4<span className="text-accent">0</span>4
        </h1>

        <h2 className="text-2xl sm:text-3xl font-bold text-gray-200">
          Page not found
        </h2>

        <p className="text-sm sm:text-base text-textMuted leading-relaxed">
          The digital destination you are searching for does not exist, has been relocated, or is temporarily unavailable.
        </p>

        <div className="pt-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full bg-accent px-8 py-3.5 text-sm font-bold text-black shadow-neon-sm transition-all hover:bg-accent-hover hover:scale-105"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
