import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Shield, Clock, Mail } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy and data protection practices of Owl Studio.",
};

export default function PrivacyPolicyPage() {
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
            <Shield className="h-3.5 w-3.5 text-accent" />
            Legal Notice &amp; Compliance
          </div>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
            Privacy Policy
          </h1>
          <div className="mt-4 flex items-center gap-2 text-xs sm:text-sm text-textMuted">
            <Clock className="h-4 w-4" />
            <span>Last updated: March 12, 2026</span>
          </div>
        </div>

        {/* Policy Body */}
        <div className="prose prose-invert max-w-none space-y-10 text-sm sm:text-base text-gray-300 leading-relaxed">
          <section className="rounded-2xl border border-white/10 bg-surface-card/60 p-6 sm:p-8 backdrop-blur-xl">
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">
              1. Overview
            </h2>
            <p>
              This Privacy Notice for <strong>Owl Studio</strong> (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;), describes how and why we might collect, store, use, and share your personal information when you use our services or visit our website at{" "}
              <a href={SITE_CONFIG.url} className="text-accent underline">
                {SITE_CONFIG.url}
              </a>.
            </p>
            <p className="mt-3">
              Reading this privacy notice will help you understand your privacy rights and choices. If you do not agree with our policies and practices, please do not use our Services. If you have questions or concerns, please contact us at{" "}
              <a href={`mailto:${SITE_CONFIG.contact.email}`} className="text-accent underline">
                {SITE_CONFIG.contact.email}
              </a>.
            </p>
          </section>

          <section className="rounded-2xl border border-white/10 bg-surface-card/60 p-6 sm:p-8 backdrop-blur-xl">
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">
              2. Information We Collect
            </h2>
            <h3 className="text-base sm:text-lg font-semibold text-white mt-4 mb-2">
              Personal Information You Disclose to Us
            </h3>
            <p>
              We collect personal information that you voluntarily provide to us when you express an interest in obtaining information about us or our services, when you submit our contact form, or when you otherwise contact us.
            </p>
            <ul className="list-disc pl-5 mt-3 space-y-2 text-textMuted">
              <li><strong>Contact Information:</strong> Names, email addresses, phone numbers, and company names.</li>
              <li><strong>Project Inquiries:</strong> Details regarding your project requirements, scope, budget, and timelines.</li>
            </ul>

            <h3 className="text-base sm:text-lg font-semibold text-white mt-6 mb-2">
              Information Automatically Collected
            </h3>
            <p>
              We automatically collect certain information when you visit, use, or navigate the Services. This information does not reveal your specific identity but may include device and usage information, such as your IP address, browser and device characteristics, operating system, language preferences, referring URLs, and device location.
            </p>
          </section>

          <section className="rounded-2xl border border-white/10 bg-surface-card/60 p-6 sm:p-8 backdrop-blur-xl">
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">
              3. How We Process Your Information
            </h2>
            <p>
              We process your personal information for a variety of reasons, depending on how you interact with our Services, including:
            </p>
            <ul className="list-disc pl-5 mt-3 space-y-2 text-textMuted">
              <li>To respond to user inquiries, project proposals, and provide customer support.</li>
              <li>To evaluate and improve our Services, marketing, and your experience through privacy-compliant analytics (e.g., Google Analytics 4).</li>
              <li>To protect our Services, comply with legal requirements, and prevent security vulnerabilities or fraud.</li>
            </ul>
          </section>

          <section className="rounded-2xl border border-white/10 bg-surface-card/60 p-6 sm:p-8 backdrop-blur-xl">
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">
              4. Analytics and Tracking Technologies
            </h2>
            <p>
              We use Google Analytics (measurement ID: <code className="text-accent bg-black/40 px-1.5 py-0.5 rounded">G-QH9R0EH7WG</code>) to analyze website traffic and visitor behavior in an aggregated, non-personally identifiable manner. You can opt out of Google Analytics tracking through Google&apos;s Ads Settings or by using the Google Analytics Opt-out Browser Add-on.
            </p>
          </section>

          <section className="rounded-2xl border border-white/10 bg-surface-card/60 p-6 sm:p-8 backdrop-blur-xl">
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">
              5. Data Security &amp; Retention
            </h2>
            <p>
              We have implemented appropriate and reasonable technical and organizational security measures designed to protect the security of any personal information we process. We retain your personal information only for as long as necessary for the purposes set out in this privacy notice, unless a longer retention period is required or permitted by law.
            </p>
          </section>

          <section className="rounded-2xl border border-white/10 bg-surface-card/60 p-6 sm:p-8 backdrop-blur-xl">
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">
              6. Your Legal Rights
            </h2>
            <p>
              Depending on your geographical location (including the European Economic Area, United Kingdom, United States, and India under applicable data protection laws), you may have the right to request access to, correction of, or deletion of your personal data held by us.
            </p>
            <p className="mt-3">
              To exercise these rights, please contact us at{" "}
              <a href={`mailto:${SITE_CONFIG.contact.email}`} className="text-accent underline">
                {SITE_CONFIG.contact.email}
              </a>.
            </p>
          </section>

          <section className="rounded-2xl border border-white/10 bg-surface-card/60 p-6 sm:p-8 backdrop-blur-xl">
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">
              7. Contact Us
            </h2>
            <p>
              If you have questions or comments about this policy, you may email us at:
            </p>
            <div className="mt-4 flex items-center gap-3 text-white font-medium">
              <Mail className="h-5 w-5 text-accent" />
              <span>{SITE_CONFIG.contact.email}</span>
            </div>
            <p className="mt-2 text-textMuted text-xs sm:text-sm">
              Owl Studio · {SITE_CONFIG.contact.location}
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
