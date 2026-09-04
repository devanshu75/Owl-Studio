"use client";

import { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { FOCUS_CARDS } from "@/lib/constants";
import { Sparkles } from "lucide-react";

export function FocusSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start" },
    [Autoplay({ delay: 4000, stopOnInteraction: false })]
  );
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
    onSelect();
  }, [emblaApi, onSelect]);

  const scrollTo = (index: number) => {
    if (emblaApi) emblaApi.scrollTo(index);
  };

  return (
    <section className="relative bg-primary py-20 sm:py-24 lg:py-28 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-accent mb-3">
            <Sparkles className="h-3.5 w-3.5" />
            Core Expertise
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white">
            Our Focus
          </h2>
          <p className="mt-4 max-w-xl text-sm sm:text-base text-textMuted">
            Where strategic intellect meets uncompromising visual execution.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex -ml-6">
            {FOCUS_CARDS.map((card) => (
              <div
                key={card.id}
                className="flex-[0_0_100%] min-w-0 pl-6 md:flex-[0_0_50%] lg:flex-[0_0_33.333%]"
              >
                <div className="group relative flex h-full flex-col justify-between rounded-2xl border border-white/10 bg-gradient-to-b from-[#171a20]/90 to-[#111317]/90 p-8 sm:p-10 backdrop-blur-xl transition-all duration-300 hover:border-accent/40 hover:-translate-y-1.5 hover:shadow-card-glass">
                  {/* Icon Container */}
                  <div>
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-white/5 p-3 text-accent transition-all group-hover:border-accent/50 group-hover:bg-accent/10">
                      {card.icon === "strategy" && (
                        <svg viewBox="0 0 100 100" className="h-10 w-10 stroke-current fill-none stroke-[3]">
                          <rect x="15" y="15" width="70" height="70" rx="6" />
                          <circle cx="50" cy="50" r="22" />
                          <circle cx="50" cy="50" r="5" className="fill-accent stroke-none" />
                        </svg>
                      )}
                      {card.icon === "design" && (
                        <svg viewBox="0 0 100 100" className="h-10 w-10 stroke-current fill-none stroke-[3]">
                          <rect x="25" y="25" width="50" height="50" rx="4" />
                          <rect x="35" y="35" width="50" height="50" rx="4" />
                          <circle cx="80" cy="20" r="5" className="fill-accent stroke-none" />
                        </svg>
                      )}
                      {card.icon === "digital" && (
                        <svg viewBox="0 0 100 100" className="h-10 w-10 stroke-current fill-none stroke-[3]">
                          <polyline points="20,70 40,50 60,60 80,30" />
                          <circle cx="80" cy="30" r="5" className="fill-accent stroke-none" />
                        </svg>
                      )}
                    </div>

                    <h3 className="mt-8 text-2xl font-bold tracking-tight text-white group-hover:text-accent transition-colors">
                      {card.title}
                    </h3>

                    <p className="mt-4 text-sm sm:text-base leading-relaxed text-textMuted">
                      {card.description}
                    </p>
                  </div>

                  {/* Feature Tags */}
                  <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap gap-2">
                    {card.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-white/5 px-2.5 py-1 text-xs text-gray-300 font-medium border border-white/5 group-hover:border-accent/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Carousel Pagination Dots */}
        <div className="mt-10 flex items-center justify-center gap-2">
          {FOCUS_CARDS.map((_, idx) => (
            <button
              key={idx}
              onClick={() => scrollTo(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className={`h-2 transition-all duration-300 rounded-full ${
                selectedIndex === idx
                  ? "w-8 bg-accent"
                  : "w-2 bg-white/20 hover:bg-white/40"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
