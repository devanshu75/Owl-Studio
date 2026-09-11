import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, FileText, Clock, Mail } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { SITE_CONFIG, getCanonicalUrl } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Terms of Service | Owl Studio",
  description:
    "Standard terms of service and commercial engagement guidelines for Owl Studio creative services.",
  alternates: {
    canonical: getCanonicalUrl("/terms"),
  },
};

export default function TermsPage() {
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
            <FileText className="h-3.5 w-3.5 text-accent-dark" />
            Client Agreement &amp; Studio Guidelines
          </div>
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-brand-dark uppercase leading-[1.05]">
            Terms of Service
          </h1>
          <div className="mt-4 flex items-center gap-2 text-xs font-mono text-brand-muted">
            <Clock className="h-3.5 w-3.5 text-accent-dark" />
            <span>Effective Date: March 10, 2026</span>
          </div>
        </div>

        {/* Notice to Owner Banner */}
        <div className="max-w-3xl mb-10 rounded-2xl border border-accent/60 bg-accent/20 p-5 text-xs text-brand-dark">
          <span className="font-bold uppercase tracking-wider">Note to Business Owner:</span> These terms outline standard professional practices for digital agencies (Statements of Work, IP transfer upon payment, portfolio showcase rights, and limitation of liability). Custom client agreements or signed Statements of Work supersede these generic terms.
        </div>

        {/* Terms Body */}
        <div className="max-w-3xl space-y-10 text-sm sm:text-base text-brand-muted leading-relaxed">
          <section className="rounded-3xl border border-brand-dark/10 bg-white p-8 sm:p-10 shadow-owl-sm">
            <h2 className="text-xl sm:text-2xl font-black text-brand-dark uppercase tracking-tight mb-4">
              1. Engagement &amp; Statements of Work
            </h2>
            <p>
              Owl Studio delivers bespoke creative, advertising, and web engineering services. Individual client projects are governed by specific Statements of Work (SOW) or project proposals that explicitly define milestones, agreed deliverables, review cycles, and compensation schedules.
            </p>
          </section>

          <section className="rounded-3xl border border-brand-dark/10 bg-white p-8 sm:p-10 shadow-owl-sm">
            <h2 className="text-xl sm:text-2xl font-black text-brand-dark uppercase tracking-tight mb-4">
              2. Intellectual Property &amp; Deliverables
            </h2>
            <p className="mb-3">
              We take intellectual property integrity seriously:
            </p>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2.5">
                <span className="h-1.5 w-1.5 rounded-full bg-accent mt-2 shrink-0" />
                <span><strong className="text-brand-dark">Ownership Transfer:</strong> Upon full and final payment of all agreed invoice fees, Owl Studio assigns to the client complete ownership rights to final approved design files, brand vector assets, and bespoke web code created for the project.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="h-1.5 w-1.5 rounded-full bg-accent mt-2 shrink-0" />
                <span><strong className="text-brand-dark">Portfolio Showcase:</strong> Unless an explicit Non-Disclosure Agreement (NDA) has been executed prior to project kickoff, Owl Studio reserves the right to showcase approved work, visual artifacts, and case study narratives on our website and social channels.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="h-1.5 w-1.5 rounded-full bg-accent mt-2 shrink-0" />
                <span><strong className="text-brand-dark">Unused Concepts:</strong> Preliminary mockups, unused sketches, prompt pipelines, and conceptual options that are not selected remain the proprietary intellectual property of Owl Studio.</span>
              </li>
            </ul>
          </section>

          <section className="rounded-3xl border border-brand-dark/10 bg-white p-8 sm:p-10 shadow-owl-sm">
            <h2 className="text-xl sm:text-2xl font-black text-brand-dark uppercase tracking-tight mb-4">
              3. Client Responsibilities &amp; Materials
            </h2>
            <p>
              Clients agree to provide required assets (such as high-resolution photography, brand guidelines, and copy) in a timely manner. Delays in providing necessary feedback or assets may naturally extend project completion schedules. Clients warrant that all supplied materials are either owned or properly licensed.
            </p>
          </section>

          <section className="rounded-3xl border border-brand-dark/10 bg-white p-8 sm:p-10 shadow-owl-sm">
            <h2 className="text-xl sm:text-2xl font-black text-brand-dark uppercase tracking-tight mb-4">
              4. Payment &amp; Milestone Invoicing
            </h2>
            <p>
              Invoices are issued according to project milestone schedules agreed in writing. Work on subsequent project phases begins once previous milestone invoices are cleared. Invoices are payable in the designated currency within the stated net window.
            </p>
          </section>

          <section className="rounded-3xl border border-brand-dark/10 bg-white p-8 sm:p-10 shadow-owl-sm">
            <h2 className="text-xl sm:text-2xl font-black text-brand-dark uppercase tracking-tight mb-4">
              5. Limitation of Liability
            </h2>
            <p>
              Owl Studio executes services with the highest professional diligence. To the maximum extent permitted by applicable law, Owl Studio shall not be liable for indirect, incidental, or consequential damages resulting from platform downtime, third-party hosting failures, or algorithm changes implemented by external search or advertising networks.
            </p>
          </section>

          <section className="rounded-3xl border border-brand-dark/10 bg-white p-8 sm:p-10 shadow-owl-sm">
            <h2 className="text-xl sm:text-2xl font-black text-brand-dark uppercase tracking-tight mb-4">
              6. Legal Inquiries
            </h2>
            <p className="mb-4">
              If you have questions regarding our commercial terms or wish to discuss an NDA before commissioning a project:
            </p>
            <div>
              <a
                href={`mailto:${SITE_CONFIG.contact.email}`}
                className="inline-flex items-center gap-2.5 font-bold text-brand-dark hover:text-accent-dark transition-colors"
              >
                <div className="h-9 w-9 rounded-full bg-[#EDEBE3] flex items-center justify-center text-brand-dark">
                  <Mail className="h-4 w-4 text-brand-dark" />
                </div>
                <span>{SITE_CONFIG.contact.email}</span>
              </a>
            </div>
          </section>
        </div>
      </Container>
    </div>
  );
}
