import Link from "next/link";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { company } from "@/lib/site-data";

export function CtaBanner() {
  return (
    <section className="bg-[#fbfaf4] py-24 relative overflow-hidden">
      {/* Subtle green glow */}
      <div className="pointer-events-none absolute right-0 top-0 h-80 w-80 rounded-full bg-[#90c955]/10 blur-[120px]" />
      <div className="pointer-events-none absolute left-0 bottom-0 h-64 w-64 rounded-full bg-[#1b291f]/6 blur-[100px]" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 md:px-10">
        <ScrollReveal className="flex flex-col items-start justify-between gap-10 md:flex-row md:items-center">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-[#274b30]/60">
              Start Today
            </p>
            <h2
              className="font-heading text-4xl font-semibold text-[#1b291f] md:text-5xl"
              style={{ letterSpacing: "-0.03em" }}
            >
              Ready to Switch to Solar?
            </h2>
            <p className="mt-4 max-w-lg text-sm leading-relaxed text-[#274b30]/70">
              Let&apos;s design a custom energy solution for your facility — PPA, CAPEX,
              or Open Access. Our team responds within 24 business hours.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="btn-lift group flex items-center justify-center gap-2 rounded-full bg-[#1b291f] px-8 py-4 text-sm font-semibold text-white"
            >
              Talk to Our Team
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </Link>
            <a
              href={company.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="btn-lift flex items-center justify-center gap-2 rounded-full border border-[#1b291f]/20 px-8 py-4 text-sm font-semibold text-[#1b291f] hover:bg-[#1b291f]/5"
            >
              Chat on WhatsApp
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
