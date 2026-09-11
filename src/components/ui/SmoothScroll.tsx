"use client";

import { useEffect } from "react";
import Lenis from "lenis";

interface SmoothScrollProps {
  children: React.ReactNode;
}

export function SmoothScroll({ children }: SmoothScrollProps) {
  useEffect(() => {
    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.5,
    });

    // Expose lenis instance globally for modal scroll lock
    (window as unknown as { __lenis?: Lenis }).__lenis = lenis;

    const handleStop = () => lenis.stop();
    const handleStart = () => lenis.start();

    window.addEventListener("owl:scroll-stop", handleStop);
    window.addEventListener("owl:scroll-start", handleStart);

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    const rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("owl:scroll-stop", handleStop);
      window.removeEventListener("owl:scroll-start", handleStart);
      lenis.destroy();
      delete (window as unknown as { __lenis?: Lenis }).__lenis;
    };
  }, []);

  return <>{children}</>;
}
