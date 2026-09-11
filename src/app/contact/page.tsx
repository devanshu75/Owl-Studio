import { Metadata } from "next";
import { Mail, MapPin, Sparkles, ShieldCheck, Clock } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { ContactFormClient } from "@/components/contact/ContactFormClient";
import { SITE_CONFIG, getCanonicalUrl } from "@/lib/constants";
import { getContactPageSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Start a Project | Contact Owl Studio",
  description:
    "Initiate a project inquiry with Owl Studio. We collaborate with ambitious brands across AI Ads, Website Design, Digital Marketing, Social Media, and Brand Identity.",
  alternates: {
    canonical: getCanonicalUrl("/contact"),
  },
  openGraph: {
    title: "Start a Project | Contact Owl Studio",
    description:
      "Initiate a project inquiry with Owl Studio. We respond within 24 business hours.",
    url: getCanonicalUrl("/contact"),
    siteName: SITE_CONFIG.name,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Start a Project | Contact Owl Studio",
    description:
      "Initiate a project inquiry with Owl Studio. We respond within 24 business hours.",
  },
};

export default function ContactPage() {
  const contactSchema = getContactPageSchema();

  return (
    <div className="bg-[#F5F3EA] min-h-screen pt-36 pb-24">
      {/* ContactPage Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
      />
      <Container>
        {/* Header */}
        <div className="max-w-4xl space-y-6 pb-16 border-b border-brand-dark/10">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-brand-muted">
            <span className="h-2 w-2 rounded-full bg-accent" />
            Start a Project Inquiry
          </div>

          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tight text-brand-dark uppercase leading-[1.02]">
            Let&apos;s build something <br />
            <span className="relative inline-block text-brand-dark">
              unforgettable.
              <span className="absolute left-0 bottom-1 w-full h-3 bg-accent/50 -z-10 rounded-sm" />
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-brand-muted leading-relaxed max-w-2xl font-normal">
            Whether you are commissioning a high-impact AI advertising campaign, architecting a Next.js digital flagship, or refreshing your brand identity, we are ready to collaborate.
          </p>

          <div className="inline-flex items-center gap-2 rounded-full bg-white border border-brand-dark/10 px-3.5 py-1 text-xs font-mono text-brand-dark">
            <Clock className="h-3.5 w-3.5 text-accent-dark" />
            Inquiries Reviewed Within 24 Hours • Honest Scoping
          </div>
        </div>

        {/* Main Grid */}
        <div className="py-16 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Studio Channels & Commitments (5 cols) */}
          <div className="lg:col-span-5 space-y-8">
            <div className="rounded-3xl border border-brand-dark/10 bg-white p-8 sm:p-10 shadow-owl-sm space-y-6">
              <h2 className="text-xs font-bold uppercase tracking-wider text-brand-muted">
                Studio Channels
              </h2>

              <div className="space-y-5">
                <div>
                  <div className="text-xs font-mono text-brand-muted mb-1">Direct Inquiries:</div>
                  <a
                    href={`mailto:${SITE_CONFIG.contact.email}`}
                    className="flex items-center gap-3 text-lg font-bold text-brand-dark hover:text-accent-dark transition-colors"
                  >
                    <div className="h-10 w-10 rounded-full bg-[#EDEBE3] flex items-center justify-center shrink-0">
                      <Mail className="h-4 w-4 text-brand-dark" />
                    </div>
                    <span>{SITE_CONFIG.contact.email}</span>
                  </a>
                </div>

                <div>
                  <div className="text-xs font-mono text-brand-muted mb-1">Studio Presence:</div>
                  <div className="flex items-center gap-3 text-brand-dark font-medium">
                    <div className="h-10 w-10 rounded-full bg-[#EDEBE3] flex items-center justify-center shrink-0">
                      <MapPin className="h-4 w-4 text-brand-dark" />
                    </div>
                    <div>
                      <div>{SITE_CONFIG.contact.location}</div>
                      <div className="text-xs text-brand-muted">Global Client Engagements (Remote &amp; On-Site)</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* How We Evaluate Briefs */}
            <div className="rounded-3xl border border-brand-dark/10 bg-[#EDEBE3] p-8 space-y-4">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-dark">
                <ShieldCheck className="h-4 w-4 text-accent-dark" />
                Our Consultation Process
              </div>
              <ul className="space-y-2 text-xs sm:text-sm text-brand-muted leading-relaxed">
                <li className="flex items-start gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent mt-1.5 shrink-0" />
                  <span>We evaluate technical feasibility, timeline, and aesthetic fit within 24 hours.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent mt-1.5 shrink-0" />
                  <span>If there is a mutual match, we schedule a 30-minute discovery workshop.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent mt-1.5 shrink-0" />
                  <span>We deliver a transparent Statement of Work with fixed milestones and clear deliverables.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column: Project Enquiry Form (7 cols) */}
          <div className="lg:col-span-7">
            <ContactFormClient />
          </div>
        </div>
      </Container>
    </div>
  );
}
