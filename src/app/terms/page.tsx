import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, FileText, Clock, Mail } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms and conditions of engagement with Owl Studio agency services.",
};

export default function TermsPage() {
  return (
    <div className="relative min-h-screen bg-primary pt-32 pb-24 text-white">
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-accent/5 blur-[140px] rounded-full" />

      <div className="relative mx-auto max-w-4xl px-6 sm:px-8">
        {/* Back Link */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-accent hover:text-accent-hover transition-colors mb-8"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Home
        </Link>

        {/* Page Header */}
        <div className="border-b border-white/10 pb-8 mb-12">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-gray-300 mb-4">
            <FileText className="h-3.5 w-3.5 text-accent" />
            Terms of Service &amp; Client Agreement
          </div>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
            Terms of Service
          </h1>
          <div className="mt-4 flex items-center gap-2 text-xs sm:text-sm text-textMuted">
            <Clock className="h-4 w-4" />
            <span>Last updated: March 12, 2026</span>
          </div>
        </div>

        {/* Terms Body */}
        <div className="prose prose-invert max-w-none space-y-10 text-sm sm:text-base text-gray-300 leading-relaxed">
          <section className="rounded-2xl border border-white/10 bg-surface-card/60 p-6 sm:p-8 backdrop-blur-xl">
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">
              1. Acceptance of Terms
            </h2>
            <p>
              By accessing our website (<a href={SITE_CONFIG.url} className="text-accent underline">{SITE_CONFIG.url}</a>) or engaging <strong>Owl Studio</strong> for brand strategy, web design, web development, or digital marketing services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our website or services.
            </p>
          </section>

          <section className="rounded-2xl border border-white/10 bg-surface-card/60 p-6 sm:p-8 backdrop-blur-xl">
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">
              2. Scope of Services &amp; Proposals
            </h2>
            <p>
              All client engagements are governed by individual Statements of Work (SOW) or project proposals mutually agreed upon in writing. Each proposal defines specific deliverables, project milestones, client review periods, and compensation schedules.
            </p>
          </section>

          <section className="rounded-2xl border border-white/10 bg-surface-card/60 p-6 sm:p-8 backdrop-blur-xl">
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">
              3. Intellectual Property Rights
            </h2>
            <p>
              Upon receipt of full payment for completed milestones or deliverables, Owl Studio transfers full ownership rights of final, approved design assets, brand guidelines, and custom source code to the client. Owl Studio retains the right to display the final work in its portfolio, case studies, and marketing materials unless a non-disclosure agreement (NDA) explicitly prohibits it.
            </p>
          </section>

          <section className="rounded-2xl border border-white/10 bg-surface-card/60 p-6 sm:p-8 backdrop-blur-xl">
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">
              4. Payment &amp; Invoicing
            </h2>
            <p>
              Invoices are issued according to the milestones detailed in each project agreement. Payments are due within the terms specified on each invoice. Work on subsequent milestones may pause if outstanding balances exceed agreed payment windows.
            </p>
          </section>

          <section className="rounded-2xl border border-white/10 bg-surface-card/60 p-6 sm:p-8 backdrop-blur-xl">
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">
              5. Confidentiality
            </h2>
            <p>
              Both parties agree to protect and keep confidential any proprietary information, trade secrets, marketing strategies, or business metrics shared during the project duration.
            </p>
          </section>

          <section className="rounded-2xl border border-white/10 bg-surface-card/60 p-6 sm:p-8 backdrop-blur-xl">
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">
              6. Limitation of Liability
            </h2>
            <p>
              Owl Studio delivers professional creative and technical services to the highest commercial standards. In no event shall Owl Studio be liable for any indirect, incidental, or consequential damages resulting from the use or inability to use deliverables or website platforms.
            </p>
          </section>

          <section className="rounded-2xl border border-white/10 bg-surface-card/60 p-6 sm:p-8 backdrop-blur-xl">
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">
              7. Contact
            </h2>
            <p>
              For legal inquiries or questions regarding our terms, reach us at:
            </p>
            <div className="mt-4 flex items-center gap-3 text-white font-medium">
              <Mail className="h-5 w-5 text-accent" />
              <span>{SITE_CONFIG.contact.email}</span>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
