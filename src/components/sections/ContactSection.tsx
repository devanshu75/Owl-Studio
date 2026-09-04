"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import {
  User,
  Mail,
  Phone,
  Briefcase,
  MessageSquare,
  Send,
  Loader2,
  CheckCircle2,
  AlertCircle,
  Clock,
  Sparkles,
} from "lucide-react";
import {
  contactFormSchema,
  type ContactFormData,
  SERVICES_LIST,
} from "@/lib/validations/contact";
import { SITE_CONFIG } from "@/lib/constants";

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const resData = await response.json();

      if (!response.ok) {
        throw new Error(resData.message || "Failed to submit message");
      }

      setIsSuccess(true);
      reset();
      toast.success("Message sent successfully! We'll get back to you within 24 hours.", {
        duration: 5000,
      });
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : "Something went wrong. Please try again.";
      toast.error(message, { duration: 5000 });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative bg-secondary py-20 sm:py-24 lg:py-28 overflow-hidden">
      {/* Radiant ambient glow */}
      <div className="pointer-events-none absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-accent/5 blur-[160px] rounded-full" />

      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-accent">
              <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
              Contact
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
              Let&apos;s join forces.
            </h2>

            <p className="text-base sm:text-lg text-textMuted leading-relaxed">
              As long as there&apos;s room to turn things up a notch, we&apos;re in. Tell us about your
              goals, timeline, and vision. We will deliver an actionable strategy.
            </p>

            <div className="space-y-4 pt-4 border-t border-white/10 text-sm sm:text-base">
              <a
                href={`mailto:${SITE_CONFIG.contact.email}`}
                className="flex items-center gap-3 text-gray-300 hover:text-accent transition-colors"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-accent">
                  <Mail className="h-4 w-4" />
                </div>
                <span>{SITE_CONFIG.contact.email}</span>
              </a>

              <a
                href={`tel:${SITE_CONFIG.contact.phone.replace(/\s+/g, "")}`}
                className="flex items-center gap-3 text-gray-300 hover:text-accent transition-colors"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-accent">
                  <Phone className="h-4 w-4" />
                </div>
                <span>{SITE_CONFIG.contact.phoneDisplay}</span>
              </a>

              <div className="flex items-center gap-3 text-textMuted pt-2">
                <Clock className="h-4 w-4 text-accent" />
                <span className="text-xs sm:text-sm">
                  Guaranteed response time: Within 24 hours
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-[#171a20]/90 to-[#111317]/90 p-8 sm:p-12 backdrop-blur-2xl shadow-2xl">
              <div className="flex items-center justify-between pb-6 mb-6 border-b border-white/10">
                <h3 className="text-xl font-bold text-white">Start a Conversation</h3>
                <span className="text-xs font-mono text-accent uppercase">Phase 01: Inquiry</span>
              </div>

              {isSuccess && (
                <div className="mb-6 rounded-2xl border border-accent/40 bg-accent/10 p-4 flex items-start gap-3 text-sm text-accent">
                  <CheckCircle2 className="h-5 w-5 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold">Message Received!</div>
                    <div className="text-gray-300 text-xs mt-0.5">
                      Thank you for reaching out. A partner from Owl Studio will review your project and contact you shortly.
                    </div>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                {/* Name */}
                <div>
                  <label className="block text-xs font-medium uppercase tracking-wider text-textMuted mb-2">
                    Your Name
                  </label>
                  <div className="relative">
                    <User className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Devan Sharma"
                      {...register("name")}
                      className={`w-full rounded-xl border bg-[#1f232b]/80 pl-11 pr-4 py-3.5 text-sm text-white placeholder-gray-500 outline-none transition-all ${
                        errors.name
                          ? "border-rose-500 focus:ring-1 focus:ring-rose-500"
                          : "border-white/10 focus:border-accent focus:ring-1 focus:ring-accent"
                      }`}
                    />
                  </div>
                  {errors.name && (
                    <p className="mt-1 text-xs text-rose-400 flex items-center gap-1">
                      <AlertCircle className="h-3 w-3" />
                      {errors.name.message}
                    </p>
                  )}
                </div>

                {/* Email & Phone (2 cols on sm) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-medium uppercase tracking-wider text-textMuted mb-2">
                      Email Address
                    </label>
                    <div className="relative">
                      <Mail className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                      <input
                        type="email"
                        placeholder="you@company.com"
                        {...register("email")}
                        className={`w-full rounded-xl border bg-[#1f232b]/80 pl-11 pr-4 py-3.5 text-sm text-white placeholder-gray-500 outline-none transition-all ${
                          errors.email
                            ? "border-rose-500 focus:ring-1 focus:ring-rose-500"
                            : "border-white/10 focus:border-accent focus:ring-1 focus:ring-accent"
                        }`}
                      />
                    </div>
                    {errors.email && (
                      <p className="mt-1 text-xs text-rose-400 flex items-center gap-1">
                        <AlertCircle className="h-3 w-3" />
                        {errors.email.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-medium uppercase tracking-wider text-textMuted mb-2">
                      Phone Number
                    </label>
                    <div className="relative">
                      <Phone className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                      <input
                        type="tel"
                        placeholder="+91 98765 43210"
                        {...register("phone")}
                        className={`w-full rounded-xl border bg-[#1f232b]/80 pl-11 pr-4 py-3.5 text-sm text-white placeholder-gray-500 outline-none transition-all ${
                          errors.phone
                            ? "border-rose-500 focus:ring-1 focus:ring-rose-500"
                            : "border-white/10 focus:border-accent focus:ring-1 focus:ring-accent"
                        }`}
                      />
                    </div>
                    {errors.phone && (
                      <p className="mt-1 text-xs text-rose-400 flex items-center gap-1">
                        <AlertCircle className="h-3 w-3" />
                        {errors.phone.message}
                      </p>
                    )}
                  </div>
                </div>

                {/* Service Selection */}
                <div>
                  <label className="block text-xs font-medium uppercase tracking-wider text-textMuted mb-2">
                    Service Required
                  </label>
                  <div className="relative">
                    <Briefcase className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <select
                      {...register("service")}
                      className={`w-full rounded-xl border bg-[#1f232b]/80 pl-11 pr-4 py-3.5 text-sm text-white outline-none transition-all appearance-none cursor-pointer ${
                        errors.service
                          ? "border-rose-500 focus:ring-1 focus:ring-rose-500"
                          : "border-white/10 focus:border-accent focus:ring-1 focus:ring-accent"
                      }`}
                    >
                      <option value="" className="bg-[#171a20] text-gray-400">
                        Select a service...
                      </option>
                      {SERVICES_LIST.map((svc) => (
                        <option key={svc} value={svc} className="bg-[#171a20] text-white">
                          {svc}
                        </option>
                      ))}
                    </select>
                  </div>
                  {errors.service && (
                    <p className="mt-1 text-xs text-rose-400 flex items-center gap-1">
                      <AlertCircle className="h-3 w-3" />
                      {errors.service.message}
                    </p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-medium uppercase tracking-wider text-textMuted mb-2">
                    Project Details &amp; Objectives
                  </label>
                  <div className="relative">
                    <MessageSquare className="pointer-events-none absolute left-4 top-4 h-4 w-4 text-gray-400" />
                    <textarea
                      rows={4}
                      placeholder="Briefly describe what you're building, target timeline, and goals..."
                      {...register("message")}
                      className={`w-full rounded-xl border bg-[#1f232b]/80 pl-11 pr-4 py-3.5 text-sm text-white placeholder-gray-500 outline-none resize-none transition-all ${
                        errors.message
                          ? "border-rose-500 focus:ring-1 focus:ring-rose-500"
                          : "border-white/10 focus:border-accent focus:ring-1 focus:ring-accent"
                      }`}
                    />
                  </div>
                  {errors.message && (
                    <p className="mt-1 text-xs text-rose-400 flex items-center gap-1">
                      <AlertCircle className="h-3 w-3" />
                      {errors.message.message}
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full rounded-xl bg-accent py-4 text-sm font-bold text-black transition-all duration-300 hover:bg-accent-hover hover:shadow-neon-glow hover:scale-[1.01] active:scale-[0.99] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      Submitting your project...
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4" />
                      Submit Project Brief
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
