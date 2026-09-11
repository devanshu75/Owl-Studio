import { Container } from "@/components/layout/Container";
import { ServiceFaq } from "@/lib/services-data";
import { HelpCircle } from "lucide-react";

interface ServiceFaqSectionProps {
  faq: ServiceFaq[];
  serviceTitle: string;
}

export function ServiceFaqSection({ faq, serviceTitle }: ServiceFaqSectionProps) {
  if (!faq || faq.length === 0) return null;

  return (
    <section className="relative py-24 sm:py-32 bg-white border-b border-brand-dark/10 overflow-hidden">
      <Container>
        <div className="max-w-2xl mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-brand-muted mb-3">
            <HelpCircle className="h-3.5 w-3.5 text-accent-dark" />
            Clarity &amp; Transparency
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-brand-dark uppercase tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-sm sm:text-base text-brand-muted">
            Direct answers to common questions regarding timelines, deliverables, and commissioning {serviceTitle}.
          </p>
        </div>

        <div className="space-y-6 max-w-4xl">
          {faq.map((item, idx) => (
            <div
              key={idx}
              className="rounded-3xl border border-brand-dark/10 bg-[#F5F3EA] p-8 sm:p-10 shadow-owl-sm space-y-3"
            >
              <h3 className="text-xl font-bold text-brand-dark leading-snug">
                {item.question}
              </h3>
              <p className="text-sm sm:text-base text-brand-muted leading-relaxed">
                {item.answer}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
