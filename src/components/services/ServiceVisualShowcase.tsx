import { Container } from "@/components/layout/Container";
import { ServiceVisualExample } from "@/lib/services-data";
import { Sparkles, Eye } from "lucide-react";

interface ServiceVisualShowcaseProps {
  examples: ServiceVisualExample[];
  serviceTitle: string;
}

export function ServiceVisualShowcase({
  examples,
  serviceTitle,
}: ServiceVisualShowcaseProps) {
  return (
    <section className="relative py-24 sm:py-32 bg-white border-b border-brand-dark/10 overflow-hidden">
      <Container>
        <div className="max-w-2xl mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-brand-muted mb-3">
            <Sparkles className="h-3.5 w-3.5 text-accent-dark" />
            Visual Proof &amp; Artifacts
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-brand-dark uppercase tracking-tight">
            Visual Studies &amp; Explorations
          </h2>
          <p className="mt-3 text-sm sm:text-base text-brand-muted">
            Selected aesthetic treatments and concept layouts engineered under our {serviceTitle} pipeline.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {examples.map((item, idx) => (
            <div
              key={idx}
              className="rounded-3xl border border-brand-dark/10 bg-[#F5F3EA] p-6 sm:p-8 flex flex-col justify-between shadow-owl-sm group"
            >
              <div>
                {/* Visual Study Preview Window */}
                <div
                  className={`aspect-[16/10] rounded-2xl bg-gradient-to-br ${item.color} mb-6 border border-brand-dark/10 p-5 flex flex-col justify-between overflow-hidden shadow-inner group-hover:scale-[1.01] transition-transform`}
                >
                  <div className="flex items-center justify-between">
                    <span className="rounded-full bg-white/90 border border-brand-dark/10 px-2.5 py-0.5 text-[10px] font-bold text-brand-dark uppercase">
                      {item.tag}
                    </span>
                    <Eye className="h-4 w-4 text-brand-dark/60" />
                  </div>
                  <div>
                    <div className="text-lg font-black text-brand-dark leading-tight">
                      {item.title}
                    </div>
                    <div className="text-[11px] text-brand-dark/70 font-mono mt-0.5">
                      {item.category}
                    </div>
                  </div>
                </div>

                <div className="text-xs font-semibold uppercase tracking-wider text-brand-muted mb-1">
                  {item.category}
                </div>

                <h3 className="text-xl font-bold text-brand-dark tracking-tight leading-snug">
                  {item.title}
                </h3>

                <p className="mt-3 text-xs sm:text-sm text-brand-muted leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-brand-dark/10 flex items-center justify-between text-[11px] font-mono text-brand-muted">
                <span>STUDY 0{idx + 1}</span>
                <span className="text-brand-dark font-bold">OWL.STUDIO</span>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
