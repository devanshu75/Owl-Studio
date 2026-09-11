import { Container } from "@/components/layout/Container";
import { ServiceProcessStep } from "@/lib/services-data";
import { ArrowRight } from "lucide-react";

interface ServiceProcessProps {
  process: ServiceProcessStep[];
  serviceTitle: string;
}

export function ServiceProcess({ process, serviceTitle }: ServiceProcessProps) {
  return (
    <section className="relative py-24 sm:py-32 bg-[#F5F3EA] border-b border-brand-dark/10 overflow-hidden">
      <Container>
        <div className="max-w-2xl mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-brand-muted mb-3">
            <span className="h-2 w-2 rounded-full bg-accent" />
            Methodology &amp; Workflow
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-brand-dark uppercase tracking-tight">
            How We Execute {serviceTitle}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-brand-muted">
            A structured, repeatable four-stage sprint ensuring rapid progress without skipping technical or creative rigor.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {process.map((step, idx) => (
            <div
              key={step.step}
              className="rounded-3xl border border-brand-dark/10 bg-white p-6 sm:p-8 flex flex-col justify-between shadow-owl-sm hover:border-brand-dark/30 hover:shadow-owl-md transition-all group"
            >
              <div>
                <div className="flex items-center justify-between mb-8">
                  <span className="font-mono text-3xl font-black text-brand-dark group-hover:text-accent-dark transition-colors">
                    {step.step}
                  </span>
                  <span className="h-2 w-2 rounded-full bg-accent opacity-60 group-hover:opacity-100 group-hover:scale-125 transition-all" />
                </div>

                <div className="text-[11px] font-bold uppercase tracking-wider text-accent-dark mb-1">
                  {step.tagline}
                </div>

                <h3 className="text-xl font-bold text-brand-dark tracking-tight leading-snug">
                  {step.title}
                </h3>

                <p className="mt-4 text-xs sm:text-sm text-brand-muted leading-relaxed">
                  {step.description}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-brand-dark/10 flex items-center justify-between text-[11px] font-mono text-brand-muted">
                <span>STAGE {idx + 1}/4</span>
                <ArrowRight className="h-3.5 w-3.5 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all text-accent-dark" />
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
