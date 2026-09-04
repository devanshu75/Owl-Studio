"use client";

import Marquee from "react-fast-marquee";
import { MARQUEE_ITEMS } from "@/lib/constants";

export function MarqueeTicker() {
  return (
    <div className="relative w-full border-y border-white/10 bg-[#0c0e12] py-4 sm:py-5 overflow-hidden">
      {/* Side gradient fades */}
      <div className="pointer-events-none absolute left-0 top-0 bottom-0 z-10 w-16 sm:w-32 bg-gradient-to-r from-[#0f0f0f] to-transparent" />
      <div className="pointer-events-none absolute right-0 top-0 bottom-0 z-10 w-16 sm:w-32 bg-gradient-to-l from-[#0f0f0f] to-transparent" />

      <Marquee
        speed={45}
        gradient={false}
        pauseOnHover
        className="overflow-hidden"
      >
        <div className="flex items-center gap-8 sm:gap-12 pr-8 sm:pr-12 select-none">
          {MARQUEE_ITEMS.map((item, idx) => (
            <div key={`${item}-${idx}`} className="flex items-center gap-3 sm:gap-4">
              <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
              <span className="text-sm sm:text-base md:text-lg font-semibold uppercase tracking-wider text-gray-300 transition-colors hover:text-accent">
                {item}
              </span>
            </div>
          ))}
        </div>
      </Marquee>
    </div>
  );
}
