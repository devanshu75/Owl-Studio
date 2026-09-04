import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatPhoneNumber(value: string) {
  const cleaned = value.replace(/\D/g, "");
  if (cleaned.length <= 10) {
    return cleaned;
  }
  return cleaned.slice(0, 10);
}
