import { Lightbulb, Workflow } from "lucide-react";
import { ProjectBtsStep } from "@/lib/projects-data";

interface CaseStudyProcessBTSProps {
  bts: ProjectBtsStep[];
}

export function CaseStudyProcessBTS({ bts }: CaseStudyProcessBTSProps) {
  return (
    <div className="py-20 border-b border-brand-dark/10">
      <div className="max-w-2xl mb-12">
        <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-accent-dark font-bold mb-2">
          <Workflow className="h-3.5 w-3.5" />
          Process &amp; Behind-The-Scenes
        </div>
        <h2 className="text-3xl sm:text-4xl font-black text-brand-dark uppercase tracking-tight">
          How We Engineered It
        </h2>
        <p className="mt-2 text-sm sm:text-base text-brand-muted">
          A transparent look into the iterative experiments, technical decisions, and studio breakthroughs that shaped this work.
        </p>
      </div>

      <div className="space-y-6">
        {bts.map((step, idx) => (
          <div
            key={idx}
            className="rounded-3xl border border-brand-dark/10 bg-white p-8 sm:p-10 shadow-owl-sm"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-4 space-y-2">
                <span className="inline-block rounded-full bg-accent/30 border border-accent/60 px-3 py-0.5 text-xs font-mono font-bold text-brand-dark uppercase tracking-wider">
                  {step.step}
                </span>
                <h3 className="text-2xl font-black text-brand-dark uppercase tracking-tight">
                  {step.title}
                </h3>
              </div>

              <div className="lg:col-span-8 space-y-4">
                <p className="text-sm sm:text-base text-brand-muted leading-relaxed">
                  {step.description}
                </p>

                <div className="rounded-2xl bg-[#F5F3EA] border border-brand-dark/10 p-5 flex items-start gap-3">
                  <Lightbulb className="h-4 w-4 text-accent-dark shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs font-mono font-bold uppercase tracking-wider text-brand-dark mb-0.5">
                      Studio Insight
                    </div>
                    <p className="text-xs sm:text-sm text-brand-muted leading-relaxed">
                      {step.insight}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
