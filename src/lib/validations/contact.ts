import { z } from "zod";

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
    .min(7, { message: "Please enter a valid phone number." })
    .max(20, { message: "Phone number is too long." }),
  service: z
    .string()
    .min(1, { message: "Please select a service you're interested in." }),
  message: z
    .string()
    .min(10, { message: "Please share a bit more detail (at least 10 characters)." })
    .max(2000, { message: "Message cannot exceed 2000 characters." }),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

export const SERVICES_LIST = [
  "Web Development",
  "Web Design",
  "UI / UX Design",
  "Digital Marketing",
  "AI Generated Video & Motion",
  "Short Films & Brand Narratives",
  "High-Converting Video Ads",
  "Full Brand & Creative Studio Suite",
] as const;
