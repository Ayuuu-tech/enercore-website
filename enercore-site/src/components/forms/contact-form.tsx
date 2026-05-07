"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { cn } from "@/lib/utils";

const schema = z.object({
  name:        z.string().min(2, "Name must be at least 2 characters"),
  company:     z.string().min(2, "Company name is required"),
  email:       z.string().email("Please enter a valid email"),
  phone:       z.string().min(10, "Enter a valid phone number"),
  state:       z.string().optional(),
  projectType: z.string().optional(),
  message:     z.string().optional(),
  website:     z.string().optional(), /* honeypot */
});

type FormValues = z.infer<typeof schema>;

const projectTypes = [
  "OPEX Project",
  "CAPEX / EPC",
  "Design & Engineering",
  "Asset Management",
  "End-to-End Consulting",
  "Other",
];

const inputClass =
  "mt-1.5 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-brand-navy outline-none transition placeholder:text-slate-400 focus:border-brand-amber focus:bg-white focus:ring-2 focus:ring-brand-amber/20";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [statusMessage, setStatusMessage] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormValues) => {
    /* Honeypot check */
    if (data.website) return;

    setStatus("loading");
    setStatusMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = (await res.json()) as { message?: string };
      if (!res.ok) throw new Error(json.message ?? "Submission failed");
      setStatus("success");
      setStatusMessage("Thanks! Our team will reach out within 24 business hours.");
      reset();
    } catch (err) {
      setStatus("error");
      setStatusMessage(err instanceof Error ? err.message : "Something went wrong.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm space-y-5"
      noValidate
    >
      <h2 className="font-heading text-xl font-bold text-brand-navy">Send an Inquiry</h2>

      <div className="grid gap-5 md:grid-cols-2">
        {/* Name */}
        <label className="block">
          <span className="text-sm font-semibold text-slate-700">Name *</span>
          <input {...register("name")} placeholder="Your full name" className={inputClass} />
          {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name.message}</p>}
        </label>

        {/* Company */}
        <label className="block">
          <span className="text-sm font-semibold text-slate-700">Company *</span>
          <input {...register("company")} placeholder="Company name" className={inputClass} />
          {errors.company && <p className="mt-1 text-xs text-red-500">{errors.company.message}</p>}
        </label>

        {/* Email */}
        <label className="block">
          <span className="text-sm font-semibold text-slate-700">Email *</span>
          <input {...register("email")} type="email" placeholder="work@company.com" className={inputClass} />
          {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email.message}</p>}
        </label>

        {/* Phone */}
        <label className="block">
          <span className="text-sm font-semibold text-slate-700">Phone *</span>
          <input {...register("phone")} type="tel" placeholder="+91 98765 43210" className={inputClass} />
          {errors.phone && <p className="mt-1 text-xs text-red-500">{errors.phone.message}</p>}
        </label>

        {/* State */}
        <label className="block">
          <span className="text-sm font-semibold text-slate-700">State</span>
          <input {...register("state")} placeholder="e.g. Rajasthan" className={inputClass} />
        </label>

        {/* Project type */}
        <label className="block">
          <span className="text-sm font-semibold text-slate-700">Project Type</span>
          <select {...register("projectType")} className={cn(inputClass, "cursor-pointer")}>
            <option value="">Select type</option>
            {projectTypes.map((t) => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>
        </label>
      </div>

      {/* Message */}
      <label className="block">
        <span className="text-sm font-semibold text-slate-700">Message</span>
        <textarea
          {...register("message")}
          rows={4}
          placeholder="Tell us about your requirement, capacity, location, timeline..."
          className={inputClass}
        />
      </label>

      {/* Honeypot */}
      <input {...register("website")} tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full rounded-full bg-brand-navy py-4 text-sm font-semibold text-white transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-60 md:w-auto md:px-10"
      >
        {status === "loading" ? "Sending…" : "Submit Inquiry →"}
      </button>

      {statusMessage && (
        <p
          className={cn(
            "rounded-xl px-4 py-3 text-sm font-medium",
            status === "success"
              ? "bg-emerald-50 text-emerald-700"
              : "bg-red-50 text-red-600",
          )}
        >
          {statusMessage}
        </p>
      )}
    </form>
  );
}
