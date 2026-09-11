import { z } from "zod";

export const SERVICES_LIST = [
  "AI Ads Generation",
  "Website Design",
  "Digital Marketing",
  "Social Media Management",
  "Graphic Designing",
  "Other",
] as const;

export const BUDGET_RANGES = [
  "< $5,000",
  "$5,000 – $15,000",
  "$15,000 – $30,000",
  "$30,000+",
  "Flexible / To be discussed",
] as const;

export const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, { message: "Name must be at least 2 characters long." })
    .max(100, { message: "Name must be under 100 characters." }),
  email: z
    .string()
    .email({ message: "Please enter a valid email address." }),
  phone: z
    .string()
    .max(25, { message: "Phone number is too long." })
    .optional()
    .or(z.literal("")),
  company: z
    .string()
    .max(100, { message: "Company name must be under 100 characters." })
    .optional()
    .or(z.literal("")),
  service: z
    .string()
    .min(1, { message: "Please select a service capability." }),
  budgetRange: z
    .string()
    .min(1, { message: "Please select an estimated budget range." })
    .optional()
    .or(z.literal("")),
  message: z
    .string()
    .min(10, { message: "Please share a brief description of your project (min 10 characters)." })
    .max(3000, { message: "Description cannot exceed 3000 characters." }),
  honeypot: z
    .string()
    .optional()
    .or(z.literal("")),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
