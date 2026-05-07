import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatCapacity(capacity: string) {
  return capacity;
}

export const easeOutCubic = [0.25, 0.46, 0.45, 0.94] as const;
export const easeInOutQuart = [0.76, 0, 0.24, 1] as const;
