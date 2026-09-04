"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ExternalLink, X, CheckCircle2, Layers } from "lucide-react";
import { PROJECTS } from "@/lib/constants";
import { motion, AnimatePresence } from "framer-motion";

type ProjectType = (typeof PROJECTS)[number];

export function WorkSection() {
  const [selectedProject, setSelectedProject] = useState<ProjectType | null>(null);

  return (
    <section id="ourwork" className="relative bg-tertiary py-20 sm:py-24 lg:py-28 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-accent mb-3">
              <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
              Selected Portfolio
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white">
              Our Work
            </h2>
          </div>
          <p className="max-w-md text-sm sm:text-base text-textMuted leading-relaxed">
            Real case studies from ambitious companies that scaled their visual identity and digital revenue with Owl Studio.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="space-y-12">
          {PROJECTS.map((project, index) => (
            <div
              key={project.id}
              className={`rounded-3xl border border-white/10 bg-gradient-to-br ${project.gradient} p-8 sm:p-12 lg:p-14 transition-all duration-300 hover:border-white/20`}
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
                {/* Left: Project Info (5 cols) */}
                <div className="lg:col-span-5 space-y-6">
                  <div className="inline-block rounded-full bg-black/40 px-3.5 py-1 text-xs font-semibold text-white/90 backdrop-blur-md border border-white/10">
                    {project.category}
                  </div>

                  <h3 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
                    {project.title}
                  </h3>

                  <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Impact Results */}
                  <div className="grid grid-cols-3 gap-3 pt-2">
                    {project.results.map((res) => (
                      <div
                        key={res.label}
                        className="rounded-xl border border-white/10 bg-black/30 p-3 backdrop-blur-md"
                      >
                        <div className="text-base sm:text-lg font-bold text-accent">{res.value}</div>
                        <div className="text-[10px] sm:text-xs text-textMuted mt-0.5">{res.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-lg bg-black/30 px-2.5 py-1 text-xs font-medium text-gray-300 border border-white/5"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* CTA button */}
                  <div className="pt-4">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="group inline-flex items-center gap-3 rounded-full bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur-md transition-all duration-300 hover:bg-white hover:text-black hover:scale-105"
                    >
                      <span>View case study</span>
                      <div className="flex h-7 w-7 items-center justify-center rounded-full bg-white/20 group-hover:bg-black group-hover:text-white transition-colors">
                        <ArrowUpRight className="h-4 w-4" />
                      </div>
                    </button>
                  </div>
                </div>

                {/* Right: Mockup Preview Cards (7 cols) */}
                <div className="lg:col-span-7">
                  <div
                    onClick={() => setSelectedProject(project)}
                    className="cursor-pointer group relative rounded-2xl border border-white/15 bg-black/40 p-6 backdrop-blur-xl transition-all duration-300 hover:border-accent/40"
                  >
                    {/* Main Mockup Card */}
                    <div className={`relative h-64 sm:h-80 w-full rounded-xl overflow-hidden bg-gradient-to-br ${project.gallery[0].color} border border-white/10 flex flex-col justify-between p-6 sm:p-8 shadow-2xl`}>
                      <div className="flex items-center justify-between">
                        <span className="font-mono text-xs uppercase tracking-wider text-accent font-semibold">
                          Case Study #0{index + 1}
                        </span>
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-black/50 text-white group-hover:scale-110 transition-transform">
                          <ExternalLink className="h-4 w-4" />
                        </div>
                      </div>

                      <div>
                        <div className="text-xl sm:text-2xl font-bold text-white mb-2">
                          {project.gallery[0].title}
                        </div>
                        <p className="text-xs sm:text-sm text-gray-300 line-clamp-2">
                          {project.gallery[0].caption}
                        </p>
                      </div>
                    </div>

                    {/* Secondary Thumbnails */}
                    <div className="mt-4 grid grid-cols-2 gap-4">
                      {project.gallery.slice(1).map((item, thumbIdx) => (
                        <div
                          key={thumbIdx}
                          className={`relative h-28 sm:h-32 rounded-xl overflow-hidden bg-gradient-to-br ${item.color} border border-white/10 p-4 flex flex-col justify-end transition-transform hover:scale-[1.02]`}
                        >
                          <div className="text-xs sm:text-sm font-semibold text-white line-clamp-1">
                            {item.title}
                          </div>
                          <div className="text-[11px] text-gray-300 line-clamp-1">
                            {item.caption}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Case Study Modal Preview */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-xl p-4 sm:p-6 md:p-10"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl border border-white/15 bg-[#0e1117] p-6 sm:p-10 text-white shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-gray-300 hover:text-white hover:bg-white/10 transition-colors"
                aria-label="Close modal"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="space-y-6">
                <div className="inline-block rounded-full bg-accent/10 border border-accent/30 px-3 py-1 text-xs font-semibold text-accent">
                  {selectedProject.category}
                </div>

                <h3 className="text-3xl sm:text-4xl font-black">
                  {selectedProject.title}
                </h3>

                <p className="text-lg text-gray-300">
                  {selectedProject.description}
                </p>

                {/* Key Results */}
                <div className="grid grid-cols-3 gap-4 pt-2">
                  {selectedProject.results.map((res) => (
                    <div
                      key={res.label}
                      className="rounded-2xl border border-white/10 bg-white/5 p-4 text-center"
                    >
                      <div className="text-2xl font-black text-accent">{res.value}</div>
                      <div className="text-xs text-textMuted mt-1">{res.label}</div>
                    </div>
                  ))}
                </div>

                {/* Gallery Slides */}
                <div className="space-y-4 pt-4">
                  <h4 className="text-sm font-semibold tracking-wider uppercase text-gray-400">
                    Project Deliverables &amp; Visual Breakdown
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {selectedProject.gallery.map((g, i) => (
                      <div
                        key={i}
                        className={`rounded-2xl border border-white/10 bg-gradient-to-br ${g.color} p-6 h-48 flex flex-col justify-end`}
                      >
                        <div className="font-bold text-white text-base">{g.title}</div>
                        <div className="text-xs text-gray-300 mt-1">{g.caption}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-lg bg-white/5 px-3 py-1 text-xs font-medium text-gray-300"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <Link
                    href="/#contact"
                    onClick={() => setSelectedProject(null)}
                    className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-bold text-black hover:bg-accent-hover transition-colors"
                  >
                    Build something similar
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
