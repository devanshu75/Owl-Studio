import { Container } from "@/components/layout/Container";
import { Check } from "lucide-react";

interface ServiceWhatWeDoProps {
  headline: string;
  description: string;
  points: string[];
}

export function ServiceWhatWeDo({
  headline,
  description,
  points,
}: ServiceWhatWeDoProps) {
  return (
    <section className="relative py-24 sm:py-32 bg-[#F5F3EA] border-b border-brand-dark/10 overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-brand-muted">
              <span className="h-2 w-2 rounded-full bg-accent" />
              What Owl Studio Does
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-brand-dark uppercase tracking-tight leading-tight">
              {headline}
            </h2>

            <p className="text-base sm:text-lg text-brand-muted leading-relaxed">
              {description}
            </p>
          </div>

          {/* Right Column: Key Principles (7 cols) */}
          <div className="lg:col-span-7 bg-white rounded-3xl border border-brand-dark/10 p-8 sm:p-12 shadow-owl-sm space-y-6">
            <h3 className="text-xs font-bold uppercase tracking-wider text-brand-dark">
              Core Technical &amp; Creative Execution
            </h3>

            <div className="space-y-4">
              {points.map((pt, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-4 p-4 rounded-2xl bg-[#F5F3EA]/70 border border-brand-dark/5"
                >
                  <div className="h-6 w-6 rounded-full bg-accent flex items-center justify-center shrink-0 mt-0.5 shadow-owl-sm">
                    <Check className="h-3.5 w-3.5 text-brand-dark stroke-[3]" />
                  </div>
                  <p className="text-sm text-brand-dark/90 font-medium leading-relaxed">
                    {pt}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
