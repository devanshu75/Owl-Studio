"use client";

import { motion } from "framer-motion";
import { BlogCategory } from "@/lib/blog-data";

interface BlogFilterBarProps {
  categories: { label: BlogCategory; count: number }[];
  activeCategory: BlogCategory;
  onSelectCategory: (cat: BlogCategory) => void;
}

export function BlogFilterBar({
  categories,
  activeCategory,
  onSelectCategory,
}: BlogFilterBarProps) {
  return (
    <div
      role="tablist"
      aria-label="Filter articles by category"
      className="flex items-center gap-2 overflow-x-auto py-2 no-scrollbar"
    >
      {categories.map(({ label, count }) => {
        const isActive = activeCategory === label;
        return (
          <button
            key={label}
            role="tab"
            aria-selected={isActive}
            onClick={() => onSelectCategory(label)}
            className={`relative flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-bold whitespace-nowrap transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-dark ${
              isActive
                ? "text-brand-dark"
                : "text-brand-muted hover:text-brand-dark bg-white/80 border border-brand-dark/10 hover:border-brand-dark/20"
            }`}
          >
            {isActive && (
              <motion.span
                layoutId="activeBlogFilterPill"
                className="absolute inset-0 rounded-full bg-accent shadow-owl-sm -z-10"
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
              />
            )}
            <span>{label === "All" ? "All Topics" : label}</span>
            <span
              className={`rounded-full px-1.5 py-0.5 text-[10px] font-mono font-semibold transition-colors ${
                isActive
                  ? "bg-brand-dark/15 text-brand-dark"
                  : "bg-[#EDEBE3] text-brand-muted"
              }`}
            >
              {count}
            </span>
          </button>
        );
      })}
    </div>
  );
}
