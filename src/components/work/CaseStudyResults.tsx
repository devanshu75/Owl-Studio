import { ShieldCheck, Target } from "lucide-react";
import { ProjectResults } from "@/lib/projects-data";

interface CaseStudyResultsProps {
  results: ProjectResults;
  isConcept: boolean;
}

export function CaseStudyResults({ results, isConcept }: CaseStudyResultsProps) {
  return (
    <div className="py-20 border-b border-brand-dark/10">
      <div className="rounded-3xl border border-brand-dark/10 bg-[#FBF9F2] p-8 sm:p-12 lg:p-14">
        <div className="max-w-3xl space-y-6">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-accent-dark font-bold">
            <ShieldCheck className="h-4 w-4" />
            Impact &amp; Benchmark Evaluation
          </div>

          <h2 className="text-3xl sm:text-4xl font-black text-brand-dark uppercase tracking-tight">
            {isConcept ? "Feasibility & Technical Proof" : "Verified Campaign Results"}
          </h2>

          <p className="text-base sm:text-lg text-brand-muted leading-relaxed">
            {results.summary}
          </p>

          <div className="pt-4 border-t border-brand-dark/10 space-y-3">
            <div className="text-xs font-mono font-bold uppercase tracking-wider text-brand-dark">
              Core Technical &amp; Creative Milestones:
            </div>
            <ul className="space-y-2.5">
              {results.benchmarks.map((bm, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm text-brand-dark font-medium">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-accent text-brand-dark shrink-0 mt-0.5">
                    <Target className="h-3 w-3" />
                  </span>
                  <span>{bm}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
