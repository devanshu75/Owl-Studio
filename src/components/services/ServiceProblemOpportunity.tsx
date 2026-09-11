import { Container } from "@/components/layout/Container";
import { AlertCircle, Sparkles } from "lucide-react";

interface ServiceProblemOpportunityProps {
  problemTitle: string;
  problemDescription: string;
  opportunityTitle: string;
  opportunityDescription: string;
}

export function ServiceProblemOpportunity({
  problemTitle,
  problemDescription,
  opportunityTitle,
  opportunityDescription,
}: ServiceProblemOpportunityProps) {
  return (
    <section className="relative py-24 sm:py-32 bg-white border-b border-brand-dark/10 overflow-hidden">
      <Container>
        <div className="max-w-2xl mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-brand-muted mb-3">
            <span className="h-2 w-2 rounded-full bg-accent" />
            Market Context &amp; Dynamics
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-brand-dark uppercase tracking-tight">
            The Problem &amp; The Opportunity
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Problem Card (6 cols) */}
          <div className="lg:col-span-6 rounded-3xl border border-brand-dark/10 bg-[#F5F3EA] p-8 sm:p-12 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 rounded-full bg-white border border-brand-dark/10 px-3 py-1 text-xs font-semibold text-brand-dark">
                <AlertCircle className="h-3.5 w-3.5 text-brand-muted" />
                <span>The Industry Reality</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-black text-brand-dark tracking-tight">
                {problemTitle}
              </h3>

              <p className="text-sm sm:text-base text-brand-muted leading-relaxed">
                {problemDescription}
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-brand-dark/10 text-xs font-mono text-brand-muted uppercase">
              // Bottleneck Identified
            </div>
          </div>

          {/* Opportunity Card (6 cols) */}
          <div className="lg:col-span-6 rounded-3xl border border-brand-dark/15 bg-[#FFF4B8]/40 p-8 sm:p-12 flex flex-col justify-between relative overflow-hidden">
            <div className="pointer-events-none absolute right-0 bottom-0 w-64 h-64 bg-accent/20 blur-[90px] rounded-full" />

            <div className="space-y-4 relative z-10">
              <div className="inline-flex items-center gap-2 rounded-full bg-accent px-3 py-1 text-xs font-bold text-brand-dark shadow-owl-sm">
                <Sparkles className="h-3.5 w-3.5 text-brand-dark" />
                <span>The Owl Studio Unlock</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-black text-brand-dark tracking-tight">
                {opportunityTitle}
              </h3>

              <p className="text-sm sm:text-base text-brand-dark/85 leading-relaxed font-medium">
                {opportunityDescription}
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-brand-dark/15 text-xs font-mono text-brand-dark/70 uppercase font-bold relative z-10">
              // The Competitive Edge
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
