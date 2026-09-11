"use client";

import { useState } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { Send, Loader2, CheckCircle2, ArrowRight } from "lucide-react";
import {
  contactFormSchema,
  type ContactFormData,
  SERVICES_LIST,
  BUDGET_RANGES,
} from "@/lib/validations/contact";

export function ContactFormClient() {
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
      company: "",
      service: "",
      budgetRange: "",
      message: "",
      honeypot: "",
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    try {
      const response = await fetch("/api/contact/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      let result: { success?: boolean; message?: string } | null = null;
      try {
        result = await response.json();
      } catch {
        result = null;
      }

      if (!response.ok || !result?.success) {
        throw new Error(result?.message || "Unable to transmit project brief. Please reach out to info@owlstudio.media directly.");
      }

      setIsSuccess(true);
      reset();
      toast.success("Brief transmitted! Our team will respond within 24 hours.");
    } catch (err: unknown) {
      const message =
        err instanceof Error ? err.message : "An unexpected error occurred. Please try again.";
      toast.error(message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="rounded-3xl border border-brand-dark/10 bg-white p-8 sm:p-12 shadow-owl-sm">
      {isSuccess ? (
        <div className="py-12 text-center space-y-5" role="status" aria-live="polite">
          <div className="h-16 w-16 bg-accent/40 rounded-full flex items-center justify-center mx-auto text-brand-dark shadow-sm">
            <CheckCircle2 className="h-8 w-8 text-brand-dark" />
          </div>
          <h2 className="text-3xl font-black text-brand-dark uppercase tracking-tight">
            Inquiry Received
          </h2>
          <p className="text-base text-brand-muted max-w-md mx-auto leading-relaxed">
            Thank you for reaching out to Owl Studio. A creative director will review your brief and follow up via email within 24 hours.
          </p>
          <div className="pt-4">
            <button
              onClick={() => setIsSuccess(false)}
              className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-xs font-bold text-brand-dark hover:bg-accent-hover transition-colors shadow-owl-sm"
            >
              <span>Submit Another Inquiry</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" noValidate>
          {/* Honeypot field for anti-spam (visually hidden) */}
          <div className="hidden" aria-hidden="true">
            <label htmlFor="website_hp">Leave this field blank</label>
            <input
              id="website_hp"
              type="text"
              tabIndex={-1}
              autoComplete="off"
              {...register("honeypot")}
            />
          </div>

          {/* Name & Email */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="name"
                className="block text-xs font-bold uppercase tracking-wider text-brand-dark mb-2"
              >
                Your Name <span className="text-accent-dark">*</span>
              </label>
              <input
                id="name"
                type="text"
                placeholder="e.g. Maya Chen"
                aria-invalid={errors.name ? "true" : "false"}
                aria-describedby={errors.name ? "name-error" : undefined}
                {...register("name")}
                className="w-full rounded-2xl border border-brand-dark/15 bg-[#F5F3EA]/50 px-4 py-3.5 text-sm text-brand-dark placeholder:text-brand-muted/60 focus:border-brand-dark focus:bg-white focus:outline-none transition-colors"
              />
              {errors.name && (
                <p id="name-error" className="mt-1 text-xs text-red-600 font-medium">
                  {errors.name.message}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-xs font-bold uppercase tracking-wider text-brand-dark mb-2"
              >
                Email Address <span className="text-accent-dark">*</span>
              </label>
              <input
                id="email"
                type="email"
                placeholder="maya@company.com"
                aria-invalid={errors.email ? "true" : "false"}
                aria-describedby={errors.email ? "email-error" : undefined}
                {...register("email")}
                className="w-full rounded-2xl border border-brand-dark/15 bg-[#F5F3EA]/50 px-4 py-3.5 text-sm text-brand-dark placeholder:text-brand-muted/60 focus:border-brand-dark focus:bg-white focus:outline-none transition-colors"
              />
              {errors.email && (
                <p id="email-error" className="mt-1 text-xs text-red-600 font-medium">
                  {errors.email.message}
                </p>
              )}
            </div>
          </div>

          {/* Company & Service */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="company"
                className="block text-xs font-bold uppercase tracking-wider text-brand-dark mb-2"
              >
                Company / Brand <span className="text-brand-muted font-normal text-[11px]">(Optional)</span>
              </label>
              <input
                id="company"
                type="text"
                placeholder="e.g. Acme Corp"
                {...register("company")}
                className="w-full rounded-2xl border border-brand-dark/15 bg-[#F5F3EA]/50 px-4 py-3.5 text-sm text-brand-dark placeholder:text-brand-muted/60 focus:border-brand-dark focus:bg-white focus:outline-none transition-colors"
              />
            </div>

            <div>
              <label
                htmlFor="service"
                className="block text-xs font-bold uppercase tracking-wider text-brand-dark mb-2"
              >
                Primary Service <span className="text-accent-dark">*</span>
              </label>
              <select
                id="service"
                aria-invalid={errors.service ? "true" : "false"}
                aria-describedby={errors.service ? "service-error" : undefined}
                {...register("service")}
                className="w-full rounded-2xl border border-brand-dark/15 bg-[#F5F3EA]/50 px-4 py-3.5 text-sm text-brand-dark focus:border-brand-dark focus:bg-white focus:outline-none transition-colors"
              >
                <option value="">Select a capability...</option>
                {SERVICES_LIST.map((srv) => (
                  <option key={srv} value={srv}>
                    {srv}
                  </option>
                ))}
              </select>
              {errors.service && (
                <p id="service-error" className="mt-1 text-xs text-red-600 font-medium">
                  {errors.service.message}
                </p>
              )}
            </div>
          </div>

          {/* Budget Range Selection */}
          <div>
            <label
              htmlFor="budgetRange"
              className="block text-xs font-bold uppercase tracking-wider text-brand-dark mb-2"
            >
              Estimated Budget Range <span className="text-accent-dark">*</span>
            </label>
            <select
              id="budgetRange"
              aria-invalid={errors.budgetRange ? "true" : "false"}
              aria-describedby={errors.budgetRange ? "budget-error" : undefined}
              {...register("budgetRange")}
              className="w-full rounded-2xl border border-brand-dark/15 bg-[#F5F3EA]/50 px-4 py-3.5 text-sm text-brand-dark focus:border-brand-dark focus:bg-white focus:outline-none transition-colors"
            >
              <option value="">Select an estimated investment tier...</option>
              {BUDGET_RANGES.map((b) => (
                <option key={b} value={b}>
                  {b}
                </option>
              ))}
            </select>
            {errors.budgetRange && (
              <p id="budget-error" className="mt-1 text-xs text-red-600 font-medium">
                {errors.budgetRange.message}
              </p>
            )}
          </div>

          {/* Project Description */}
          <div>
            <label
              htmlFor="message"
              className="block text-xs font-bold uppercase tracking-wider text-brand-dark mb-2"
            >
              Project Description &amp; Ambition <span className="text-accent-dark">*</span>
            </label>
            <textarea
              id="message"
              rows={5}
              placeholder="Tell us about your brand objectives, timeline, deliverables, and what made you reach out..."
              aria-invalid={errors.message ? "true" : "false"}
              aria-describedby={errors.message ? "message-error" : undefined}
              {...register("message")}
              className="w-full rounded-2xl border border-brand-dark/15 bg-[#F5F3EA]/50 p-4 text-sm text-brand-dark placeholder:text-brand-muted/60 focus:border-brand-dark focus:bg-white focus:outline-none transition-colors resize-none"
            />
            {errors.message && (
              <p id="message-error" className="mt-1 text-xs text-red-600 font-medium">
                {errors.message.message}
              </p>
            )}
          </div>

          {/* Privacy Notice */}
          <p className="text-xs text-brand-muted leading-relaxed">
            By transmitting this brief, you acknowledge that Owl Studio will process your details to evaluate your project inquiry in accordance with our{" "}
            <Link href="/privacy-policy" className="underline font-semibold text-brand-dark hover:text-accent-dark">
              Privacy Policy
            </Link>
            . We never share or sell contact data.
          </p>

          {/* Submit Action */}
          <div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full inline-flex items-center justify-center gap-3 rounded-full bg-accent px-8 py-4 text-base font-bold text-brand-dark shadow-owl-sm hover:bg-accent-hover hover:shadow-owl-md transition-all disabled:opacity-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-dark"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="h-5 w-5 animate-spin" />
                  <span>Transmitting Brief...</span>
                </>
              ) : (
                <>
                  <span>Transmit Project Brief</span>
                  <Send className="h-4 w-4" />
                </>
              )}
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
