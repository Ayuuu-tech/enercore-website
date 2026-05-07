import type { Metadata } from "next";
import Link from "next/link";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/scroll-reveal";
import { ServiceIcon, IconCheck } from "@/components/ui/icons";
import { services } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Enercore solar services: PPA Solar Plants, Open Access, CAPEX, RenewX Training, and AI-Enabled Tariff Calculator for industrial and commercial clients across India.",
};

export default function ServicesPage() {
  return (
    <>
      {/* Page hero — dark green (CleanMax) */}
      <section className="bg-[#1b291f] relative overflow-hidden pt-36 pb-20 text-white">
        <div className="dot-grid pointer-events-none absolute inset-0" />
        <div className="pointer-events-none absolute left-0 top-0 h-full w-full bg-[radial-gradient(ellipse_at_20%_60%,rgba(144,201,85,0.08),transparent_50%)]" />
        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 md:px-10">
          <ScrollReveal>
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-[#ffe55d]">Our Services</p>
            <h1
              className="font-heading text-5xl font-semibold md:text-6xl text-white"
              style={{ letterSpacing: "-0.04em", lineHeight: 1.05 }}
            >
              Our Solutions
            </h1>
            <p className="mt-5 max-w-2xl text-[#8f9c93] text-base leading-relaxed">
              Comprehensive offerings addressing every aspect of the renewable energy value chain —
              from zero-capex PPA to full ownership CAPEX, Open Access, training, and AI-powered tools.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Service blocks */}
      <section className="bg-white py-24">
        <div className="mx-auto w-full max-w-7xl px-6 md:px-10 space-y-6">
          {services.map((service, index) => (
            <ScrollReveal key={service.slug} delay={0.05 * index}>
              <article
                id={service.slug}
                className="grid gap-8 rounded-lg border border-[#d8dbd9]/50 bg-white p-8 shadow-sm transition hover:shadow-md md:grid-cols-12"
              >
                <div className="md:col-span-7">
                  <div className="mb-4 flex items-center gap-3">
                    <div
                      className="flex h-11 w-11 items-center justify-center rounded-lg"
                      style={{ backgroundColor: `${service.accent}18`, color: service.accent }}
                    >
                      <ServiceIcon name={service.iconName} size={20} />
                    </div>
                    <span className="rounded-full bg-[#1b291f]/6 px-3 py-1 text-xs font-medium text-[#274b30]">
                      Solution {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h2
                    className="font-heading text-2xl font-semibold text-[#1b291f] md:text-3xl"
                    style={{ letterSpacing: "-0.03em" }}
                  >
                    {service.title}
                  </h2>
                  <p className="mt-3 text-sm text-[#274b30]/70 leading-relaxed">{service.description}</p>
                </div>

                <div className="md:col-span-5 flex flex-col justify-center">
                  <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-[#274b30]/40">
                    Key Benefits
                  </p>
                  <ul className="space-y-2.5">
                    {service.benefits.map((benefit) => (
                      <li key={benefit} className="flex items-start gap-2.5 text-sm text-[#274b30]/70">
                        <span
                          className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-white"
                          style={{ backgroundColor: service.accent }}
                        >
                          <IconCheck size={11} />
                        </span>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-[#fbfaf4] py-20">
        <div className="mx-auto max-w-3xl px-6 text-center md:px-10">
          <ScrollReveal>
            <h2
              className="font-heading text-3xl font-semibold text-[#1b291f] md:text-4xl"
              style={{ letterSpacing: "-0.03em" }}
            >
              Not sure which model fits your business?
            </h2>
            <p className="mt-4 text-sm text-[#274b30]/60 leading-relaxed">
              Our team can compare PPA vs CAPEX vs Open Access, model your savings, and help you pick the right path — no commitment required.
            </p>
            <Link
              href="/contact"
              className="btn-lift mt-8 inline-flex items-center gap-2 rounded-full bg-[#1b291f] px-8 py-4 text-sm font-semibold text-white"
            >
              Book a Free Consultation →
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
