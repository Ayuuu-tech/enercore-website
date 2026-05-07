import type { Metadata } from "next";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { ContactForm } from "@/components/forms/contact-form";
import { company } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Enercore for solar project consultation, OPEX/CAPEX feasibility, and quote requests. We respond within 24 business hours.",
};

const contactDetails = [
  { label: "Phone / WhatsApp", value: company.phone,   href: company.whatsapp, external: true },
  { label: "Email",            value: company.email,   href: `mailto:${company.email}`, external: false },
  { label: "Office",           value: company.address, href: null, external: false },
];

export default function ContactPage() {
  return (
    <>
      {/* Hero — dark green */}
      <section className="bg-[#1b291f] dot-grid relative overflow-hidden pt-36 pb-20 text-white">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_30%_50%,rgba(144,201,85,0.07),transparent_50%)]" />
        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 md:px-10">
          <ScrollReveal>
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-[#ffe55d]">Contact Us</p>
            <h1
              className="font-heading text-5xl font-semibold md:text-6xl"
              style={{ letterSpacing: "-0.04em", lineHeight: 1.05 }}
            >
              Let&apos;s Discuss Your<br />Solar Project
            </h1>
            <p className="mt-5 max-w-2xl text-base text-[#8f9c93] leading-relaxed">
              Share your requirement and our team will get back within 24 business hours
              with a tailored approach.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Content */}
      <section className="bg-white py-20">
        <div className="mx-auto w-full max-w-7xl px-6 md:px-10">
          <div className="grid gap-10 md:grid-cols-5 md:gap-14">
            {/* Form */}
            <div className="md:col-span-3">
              <ContactForm />
            </div>

            {/* Sidebar */}
            <aside className="md:col-span-2 space-y-5">
              <ScrollReveal delay={0.15}>
                <div className="rounded-lg border border-[#d8dbd9]/50 bg-[#fbfaf4] p-6">
                  <h2 className="font-heading text-xl font-semibold text-[#1b291f] mb-5" style={{ letterSpacing: "-0.02em" }}>
                    Other ways to reach us
                  </h2>
                  <div className="space-y-4">
                    {contactDetails.map(({ label, value, href, external }) => (
                      <div key={label}>
                        <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-[#274b30]/40">{label}</p>
                        {href ? (
                          <a
                            href={href}
                            target={external ? "_blank" : undefined}
                            rel={external ? "noreferrer" : undefined}
                            className="text-sm text-[#274b30] transition hover:text-[#1b291f] hover:underline underline-offset-4"
                          >
                            {value}
                          </a>
                        ) : (
                          <p className="text-sm text-[#274b30]/65 leading-relaxed">{value}</p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.25}>
                <div className="rounded-lg bg-[#1b291f] p-6 text-white">
                  <h3 className="font-heading text-lg font-semibold mb-2" style={{ letterSpacing: "-0.02em" }}>Response Time</h3>
                  <p className="text-sm text-[#8f9c93] leading-relaxed">
                    We respond to all inquiries within 24 business hours. Urgent projects can reach us directly on WhatsApp.
                  </p>
                  <a
                    href={company.whatsapp}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-lift mt-5 inline-flex items-center gap-2 rounded-full bg-[#25d366] px-5 py-2.5 text-sm font-semibold text-white"
                  >
                    Chat on WhatsApp →
                  </a>
                </div>
              </ScrollReveal>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
