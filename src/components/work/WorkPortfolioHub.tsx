"use client";

import { useState } from "react";
import { ProjectItemData, getProjectsByCategory } from "@/lib/projects-data";
import { WorkFilterBar, ProjectCategoryFilter } from "@/components/work/WorkFilterBar";
import { WorkPortfolioGrid } from "@/components/work/WorkPortfolioGrid";

interface WorkPortfolioHubProps {
  allProjects: ProjectItemData[];
}

export function WorkPortfolioHub({ allProjects }: WorkPortfolioHubProps) {
  const [activeCategory, setActiveCategory] = useState<ProjectCategoryFilter>("All");

  const categories: { label: ProjectCategoryFilter; count: number }[] = [
    { label: "All", count: allProjects.length },
    {
      label: "AI Ads",
      count: allProjects.filter((p) => p.category === "AI Ads").length,
    },
    {
      label: "Websites",
      count: allProjects.filter((p) => p.category === "Websites").length,
    },
    {
      label: "Digital Marketing",
      count: allProjects.filter((p) => p.category === "Digital Marketing").length,
    },
    {
      label: "Social Media",
      count: allProjects.filter((p) => p.category === "Social Media").length,
    },
    {
      label: "Graphic Design",
      count: allProjects.filter((p) => p.category === "Graphic Design").length,
    },
  ];

  const filteredProjects =
    activeCategory === "All"
      ? allProjects
      : allProjects.filter((p) => p.category === activeCategory);

  return (
    <div className="space-y-12">
      {/* Category Filter Pills */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-brand-dark/10">
        <WorkFilterBar
          categories={categories}
          activeCategory={activeCategory}
          onSelectCategory={setActiveCategory}
        />
        <div className="text-xs font-mono text-brand-muted hidden md:block">
          Showing {filteredProjects.length} of {allProjects.length} projects
        </div>
      </div>

      {/* Editorial Portfolio Grid */}
      <WorkPortfolioGrid projects={filteredProjects} />
    </div>
  );
}
