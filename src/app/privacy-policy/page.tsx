import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Shield, Clock, Mail } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { SITE_CONFIG, getCanonicalUrl } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Privacy Policy | Owl Studio",
  description:
    "Privacy notice and data handling practices for Owl Studio's website and client communication channels.",
  alternates: {
    canonical: getCanonicalUrl("/privacy-policy"),
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-[#F5F3EA] min-h-screen pt-36 pb-24 text-brand-dark">
      <Container>
        {/* Back Link */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-muted hover:text-brand-dark transition-colors mb-8"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Home
        </Link>

        {/* Page Header */}
        <div className="border-b border-brand-dark/10 pb-8 mb-12 max-w-4xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-brand-dark/10 bg-white px-3.5 py-1 text-xs font-mono text-brand-dark mb-4">
            <Shield className="h-3.5 w-3.5 text-accent-dark" />
            Compliance &amp; Data Transparency
          </div>
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-brand-dark uppercase leading-[1.05]">
            Privacy Policy
          </h1>
          <div className="mt-4 flex items-center gap-2 text-xs font-mono text-brand-muted">
            <Clock className="h-3.5 w-3.5 text-accent-dark" />
            <span>Effective Date: March 10, 2026</span>
          </div>
        </div>

        {/* Notice to Owner Banner */}
        <div className="max-w-3xl mb-10 rounded-2xl border border-accent/60 bg-accent/20 p-5 text-xs text-brand-dark">
          <span className="font-bold uppercase tracking-wider">Note to Business Owner:</span> This policy is drafted to reflect the actual functionality of the Owl Studio website (project brief submissions, communication, and aggregate analytics). Bracketed terms [e.g. jurisdiction] should be reviewed by legal counsel prior to formal corporate registration.
        </div>

        {/* Policy Body */}
        <div className="max-w-3xl space-y-10 text-sm sm:text-base text-brand-muted leading-relaxed">
          <section className="rounded-3xl border border-brand-dark/10 bg-white p-8 sm:p-10 shadow-owl-sm">
            <h2 className="text-xl sm:text-2xl font-black text-brand-dark uppercase tracking-tight mb-4">
              1. Commitment to Privacy
            </h2>
            <p>
              Owl Studio (&quot;we&quot;, &quot;our&quot;, or &quot;the studio&quot;) respects the privacy of every client, collaborator, and website visitor. This policy explains what information we collect when you visit <a href={SITE_CONFIG.url} className="text-brand-dark underline font-medium">{SITE_CONFIG.url}</a>, submit a project inquiry, or engage our creative services, and how that information is safeguarded.
            </p>
          </section>

          <section className="rounded-3xl border border-brand-dark/10 bg-white p-8 sm:p-10 shadow-owl-sm">
            <h2 className="text-xl sm:text-2xl font-black text-brand-dark uppercase tracking-tight mb-4">
              2. Information We Collect
            </h2>
            <p className="mb-4">
              We collect information solely to evaluate project inquiries, communicate proposals, and deliver creative services. We do not sell, rent, or trade personal data to data brokers or third-party advertisers.
            </p>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2.5">
                <span className="h-1.5 w-1.5 rounded-full bg-accent mt-2 shrink-0" />
                <span><strong className="text-brand-dark">Voluntary Inquiries:</strong> When you complete our contact form, we collect your name, email address, company name, primary service of interest, budget range, and project description.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="h-1.5 w-1.5 rounded-full bg-accent mt-2 shrink-0" />
                <span><strong className="text-brand-dark">Technical &amp; Log Information:</strong> Like most modern websites, our hosting servers automatically record basic technical data such as browser type, operating system, and timestamp solely for performance monitoring and security.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="h-1.5 w-1.5 rounded-full bg-accent mt-2 shrink-0" />
                <span><strong className="text-brand-dark">Aggregate Analytics:</strong> We may utilize privacy-friendly analytics tools to evaluate page engagement in an aggregated, non-personally identifiable format.</span>
              </li>
            </ul>
          </section>

          <section className="rounded-3xl border border-brand-dark/10 bg-white p-8 sm:p-10 shadow-owl-sm">
            <h2 className="text-xl sm:text-2xl font-black text-brand-dark uppercase tracking-tight mb-4">
              3. How Your Information Is Used
            </h2>
            <p className="mb-3">
              We use collected information strictly to:
            </p>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2.5">
                <span className="h-1.5 w-1.5 rounded-full bg-accent mt-2 shrink-0" />
                <span>Evaluate your creative project scope and prepare accurate proposals.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="h-1.5 w-1.5 rounded-full bg-accent mt-2 shrink-0" />
                <span>Communicate regarding ongoing client engagements, invoices, and deliverables.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="h-1.5 w-1.5 rounded-full bg-accent mt-2 shrink-0" />
                <span>Maintain website security, prevent fraudulent automated submissions, and ensure operational integrity.</span>
              </li>
            </ul>
          </section>

          <section className="rounded-3xl border border-brand-dark/10 bg-white p-8 sm:p-10 shadow-owl-sm">
            <h2 className="text-xl sm:text-2xl font-black text-brand-dark uppercase tracking-tight mb-4">
              4. Data Retention &amp; Security
            </h2>
            <p>
              Inquiry submissions and client project records are retained only as long as necessary to conduct business, fulfill contractual obligations, or comply with legal accounting mandates. We employ encrypted transmission protocols (HTTPS/SSL) and industry-standard hosting safeguards to protect your communications.
            </p>
          </section>

          <section className="rounded-3xl border border-brand-dark/10 bg-white p-8 sm:p-10 shadow-owl-sm">
            <h2 className="text-xl sm:text-2xl font-black text-brand-dark uppercase tracking-tight mb-4">
              5. Your Rights &amp; Contact Information
            </h2>
            <p className="mb-4">
              Depending on your jurisdiction, you may have the right to request access to, correction of, or deletion of your personal communication records. To exercise these rights or raise inquiries regarding our data practices, please reach out directly:
            </p>
            <div className="pt-2">
              <a
                href={`mailto:${SITE_CONFIG.contact.email}`}
                className="inline-flex items-center gap-2.5 font-bold text-brand-dark hover:text-accent-dark transition-colors"
              >
                <div className="h-9 w-9 rounded-full bg-[#EDEBE3] flex items-center justify-center text-brand-dark">
                  <Mail className="h-4 w-4 text-brand-dark" />
                </div>
                <span>{SITE_CONFIG.contact.email}</span>
              </a>
              <div className="text-xs text-brand-muted mt-2">
                Owl Studio • {SITE_CONFIG.contact.location}
              </div>
            </div>
          </section>
        </div>
      </Container>
    </div>
  );
}
