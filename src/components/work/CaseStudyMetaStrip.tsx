import { CheckCircle2, Layers, Clock, Wrench, Sparkles } from "lucide-react";
import { ProjectMeta } from "@/lib/projects-data";

interface CaseStudyMetaStripProps {
  meta: ProjectMeta;
  tags: string[];
}

export function CaseStudyMetaStrip({ meta, tags }: CaseStudyMetaStripProps) {
  return (
    <div className="py-12 border-b border-brand-dark/10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Classification */}
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-brand-muted font-semibold">
            <Sparkles className="h-3.5 w-3.5 text-accent-dark" />
            Classification
          </div>
          <div className="text-base font-bold text-brand-dark">
            {meta.status}
          </div>
          <p className="text-xs text-brand-muted leading-relaxed">
            {meta.clientOrConcept}
          </p>
        </div>

        {/* Role & Disciplines */}
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-brand-muted font-semibold">
            <Layers className="h-3.5 w-3.5 text-accent-dark" />
            Role &amp; Disciplines
          </div>
          <div className="text-base font-bold text-brand-dark">
            {meta.disciplines.join(", ")}
          </div>
          <p className="text-xs text-brand-muted leading-relaxed">
            {meta.role}
          </p>
        </div>

        {/* Timeline & Tools */}
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-brand-muted font-semibold">
            <Clock className="h-3.5 w-3.5 text-accent-dark" />
            Timeline &amp; Stack
          </div>
          <div className="text-base font-bold text-brand-dark">
            {meta.timeline}
          </div>
          <div className="flex flex-wrap gap-1.5 pt-1">
            {meta.tools.map((tool) => (
              <span
                key={tool}
                className="rounded bg-[#EDEBE3] px-2 py-0.5 text-[10px] font-mono font-medium text-brand-dark"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>

        {/* Deliverables Matrix */}
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-brand-muted font-semibold">
            <CheckCircle2 className="h-3.5 w-3.5 text-accent-dark" />
            Core Deliverables
          </div>
          <ul className="space-y-1.5 pt-1">
            {meta.deliverables.map((item, idx) => (
              <li
                key={idx}
                className="flex items-start gap-2 text-xs text-brand-dark font-medium leading-tight"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-accent mt-1 shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
