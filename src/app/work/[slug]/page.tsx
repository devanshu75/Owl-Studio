import { Metadata } from "next";
import { notFound } from "next/navigation";
import { Container } from "@/components/layout/Container";
import {
  PROJECTS_DATA,
  getProjectBySlug,
  getAdjacentProjects,
} from "@/lib/projects-data";
import { SITE_CONFIG, getCanonicalUrl } from "@/lib/constants";
import { CaseStudyHero } from "@/components/work/CaseStudyHero";
import { CaseStudyMetaStrip } from "@/components/work/CaseStudyMetaStrip";
import { CaseStudyNarrative } from "@/components/work/CaseStudyNarrative";
import { CaseStudyVisualShowcase } from "@/components/work/CaseStudyVisualShowcase";
import { CaseStudyProcessBTS } from "@/components/work/CaseStudyProcessBTS";
import { CaseStudyResults } from "@/components/work/CaseStudyResults";
import { CaseStudyNavigation } from "@/components/work/CaseStudyNavigation";

interface ProjectPageProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return PROJECTS_DATA.map((project) => ({
    slug: project.slug,
  }));
}

export function generateMetadata({ params }: ProjectPageProps): Metadata {
  const project = getProjectBySlug(params.slug);
  if (!project) return {};

  const pageTitle =
    project.seoTitle || `${project.title} — ${project.category} Case Study | Owl Studio`;
  const pageDescription = project.seoDescription || project.shortDescription;
  const pageUrl = getCanonicalUrl(`/work/${project.slug}`);

  return {
    title: pageTitle,
    description: pageDescription,
    alternates: {
      canonical: pageUrl,
    },
    openGraph: {
      title: pageTitle,
      description: pageDescription,
      url: pageUrl,
      siteName: SITE_CONFIG.name,
      type: "article",
    },
  };
}

export default function ProjectDetailPage({ params }: ProjectPageProps) {
  const project = getProjectBySlug(params.slug);
  if (!project) notFound();

  const { prev, next } = getAdjacentProjects(project.slug);
  const pageUrl = getCanonicalUrl(`/work/${project.slug}`);

  // Structured Data (CreativeWork + BreadcrumbList)
  const creativeWorkSchema = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    headline: project.tagline,
    description: project.description,
    url: pageUrl,
    genre: project.category,
    keywords: project.tags.join(", "),
    creator: {
      "@type": "Organization",
      name: SITE_CONFIG.name,
      url: getCanonicalUrl(),
    },
    dateCreated: project.year,
    isAccessibleForFree: true,
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: getCanonicalUrl(),
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Work",
        item: getCanonicalUrl("/work"),
      },
      {
        "@type": "ListItem",
        position: 3,
        name: project.title,
        item: pageUrl,
      },
    ],
  };

  return (
    <div className="bg-[#F5F3EA] min-h-screen pt-36 pb-24">
      {/* Inject JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(creativeWorkSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <Container>
        {/* 01 & 02: Breadcrumbs & Hero Header */}
        <CaseStudyHero project={project} />

        {/* 03: Structured Metadata Strip */}
        <CaseStudyMetaStrip meta={project.meta} tags={project.tags} />

        {/* 04: Editorial Case Narrative (Challenge, Idea, Strategy, Execution) */}
        <CaseStudyNarrative
          challenge={project.challenge}
          idea={project.idea}
          strategy={project.strategy}
          execution={project.execution}
        />

        {/* 05: Visual Studies & Collateral Artifacts */}
        <CaseStudyVisualShowcase gallery={project.gallery} />

        {/* 06: Behind The Scenes / Iterative Process */}
        <CaseStudyProcessBTS bts={project.bts} />

        {/* 07: Feasibility Proof / Results Benchmarks */}
        <CaseStudyResults results={project.results} isConcept={project.isConcept} />

        {/* 08 & 09: Sequential Case Study Navigation, Related Projects & CTA */}
        <CaseStudyNavigation
          currentProject={project}
          prevProject={prev}
          nextProject={next}
          relatedSlugs={project.relatedProjects}
        />
      </Container>
    </div>
  );
}
