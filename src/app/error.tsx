"use client";

import { useEffect } from "react";
import Link from "next/link";
import { AlertTriangle, RefreshCw, Home } from "lucide-react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Next.js Error Boundary caught an error:", error);
  }, [error]);

  return (
    <div className="relative min-h-[85vh] bg-primary flex flex-col items-center justify-center text-center px-6 pt-24 pb-16 overflow-hidden">
      <div className="relative z-10 max-w-md space-y-6">
        <div className="inline-flex items-center gap-2 rounded-full border border-rose-500/30 bg-rose-500/10 px-4 py-1.5 text-xs font-semibold text-rose-400">
          <AlertTriangle className="h-4 w-4" />
          Application Error
        </div>

        <h1 className="text-3xl sm:text-4xl font-extrabold text-white">
          Something went wrong
        </h1>

        <p className="text-sm sm:text-base text-textMuted leading-relaxed">
          An unexpected glitch occurred while loading this page. Our team has been notified.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
          <button
            onClick={() => reset()}
            className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-bold text-black shadow-neon-sm hover:bg-accent-hover transition-colors"
          >
            <RefreshCw className="h-4 w-4" />
            Try again
          </button>

          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-medium text-white hover:bg-white/10 transition-colors"
          >
            <Home className="h-4 w-4" />
            Home
          </Link>
        </div>
      </div>
    </div>
  );
}
