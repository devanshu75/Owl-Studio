import { Container } from "@/components/layout/Container";
import { Check, Package } from "lucide-react";

interface ServiceDeliverablesProps {
  deliverables: string[];
  benefits: string[];
}

export function ServiceDeliverables({
  deliverables,
  benefits,
}: ServiceDeliverablesProps) {
  return (
    <section className="relative py-24 sm:py-32 bg-white border-b border-brand-dark/10 overflow-hidden">
      <Container>
        {/* Deliverables Block */}
        <div className="mb-24">
          <div className="max-w-2xl mb-12">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-brand-muted mb-3">
              <span className="h-2 w-2 rounded-full bg-accent" />
              Tangible Assets
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-brand-dark uppercase tracking-tight">
              Production Deliverables
            </h2>
            <p className="mt-3 text-sm sm:text-base text-brand-muted">
              Every engagement produces concrete, production-ready assets and frameworks ready for commercial distribution.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {deliverables.map((item, idx) => (
              <div
                key={item}
                className="rounded-3xl border border-brand-dark/10 bg-[#F5F3EA] p-6 sm:p-8 flex flex-col justify-between shadow-owl-sm hover:border-brand-dark/30 hover:shadow-owl-md transition-all"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-xs font-bold text-accent-dark">
                      0{idx + 1} //
                    </span>
                    <Package className="h-4 w-4 text-brand-muted" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-brand-dark tracking-tight leading-snug">
                    {item}
                  </h3>
                </div>
                <div className="mt-6 pt-4 border-t border-brand-dark/10 text-[11px] font-mono text-brand-muted uppercase">
                  Production Asset
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits Block */}
        <div className="pt-16 border-t border-brand-dark/10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-4 space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-brand-muted">
                <span className="h-2 w-2 rounded-full bg-accent" />
                Strategic Value
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-brand-dark uppercase tracking-tight">
                Client Benefits
              </h3>
              <p className="text-sm text-brand-muted leading-relaxed">
                Measurable advantages your internal team and external brand gain from this partnership.
              </p>
            </div>

            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {benefits.map((benefit, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl border border-brand-dark/10 bg-[#F5F3EA] p-6 flex items-start gap-3.5"
                >
                  <div className="h-6 w-6 rounded-full bg-accent/40 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="h-3.5 w-3.5 text-brand-dark stroke-[3]" />
                  </div>
                  <span className="text-sm text-brand-dark/90 font-medium leading-relaxed">
                    {benefit}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
