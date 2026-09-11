"use client";

import { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { EDITORIAL_EASE } from "@/lib/motion";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  yOffset?: number;
}

export function ScrollReveal({
  children,
  className = "",
  delay = 0,
  yOffset = 18,
}: ScrollRevealProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: yOffset }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{
        duration: 0.5,
        delay,
        ease: EDITORIAL_EASE,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
