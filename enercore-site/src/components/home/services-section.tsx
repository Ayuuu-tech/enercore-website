"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { ServiceIcon } from "@/components/ui/icons";
import { services } from "@/lib/site-data";

/* Full-bleed image per service — CleanMax pattern */
const SERVICE_IMAGES: Record<string, string> = {
  "ppa-solar-plants":     "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1400&q=80",
  "open-access-solar":    "https://images.unsplash.com/photo-1548337138-e87d889cc369?auto=format&fit=crop&w=1400&q=80",
  "capex-solar-plants":   "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1400&q=80",
  "renewx-training":      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1400&q=80",
  "ai-tariff-calculator": "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=1400&q=80",
};

export function ServicesSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section
      className="relative bg-[#111d14] py-28 overflow-hidden"
      onMouseLeave={() => setActiveIndex(null)}
    >
      <div className="mx-auto w-full max-w-7xl px-6 md:px-10">

        {/* Header — CleanMax pattern: yellow square label + centered heading */}
        <ScrollReveal className="mb-14 text-center">
          <div className="mb-5 flex items-center justify-center gap-2.5">
            <span className="h-2.5 w-2.5 shrink-0 rounded-sm bg-[#ffe55d]" />
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8f9c93]">
              Our Offerings
            </span>
          </div>
          <h2
            className="font-heading text-4xl font-semibold text-white md:text-5xl"
            style={{ letterSpacing: "-0.03em", lineHeight: 1.08 }}
          >
            Smart Solutions.<br />Designed for Your Net-Zero Goals
          </h2>
        </ScrollReveal>

        {/* ── Desktop: CleanMax expanding cards with image reveal ── */}
        <div className="hidden md:flex gap-2.5 h-[340px]">
          {services.map((service, i) => {
            const isActive = activeIndex === i;
            const img = SERVICE_IMAGES[service.slug];

            return (
              <motion.div
                key={service.slug}
                style={{ flexGrow: 1, border: "1px solid rgba(255,255,255,0.06)" }}
                animate={{ flexGrow: isActive ? 5 : 1 }}
                transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
                className="relative overflow-hidden rounded-xl flex-shrink-0 cursor-pointer"
                onMouseEnter={() => setActiveIndex(i)}
              >
                {/* Background image — always visible, brightens on hover */}
                {img && (
                  <div className="absolute inset-0">
                    <Image src={img} alt={service.title} fill className="object-cover" />
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-t from-[#0d1810]/95 via-[#1b291f]/80 to-[#1b291f]/60"
                      animate={{ opacity: isActive ? 0.7 : 1 }}
                      transition={{ duration: 0.4 }}
                    />
                  </div>
                )}

                {/* Accent top border */}
                <motion.div
                  className="absolute left-0 right-0 top-0 h-[2px]"
                  style={{ background: `linear-gradient(90deg, ${service.accent}, transparent)` }}
                  animate={{ opacity: isActive ? 1 : 0.2 }}
                  transition={{ duration: 0.3 }}
                />

                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-6">
                  {/* Icon */}
                  <motion.div
                    className="mb-3 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl"
                    animate={{
                      backgroundColor: isActive ? `${service.accent}28` : "rgba(255,255,255,0.07)",
                      color: isActive ? service.accent : "#8f9c93",
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <ServiceIcon name={service.iconName} size={20} />
                  </motion.div>

                  {/* Title */}
                  <h3
                    className="font-heading font-semibold text-white overflow-hidden text-ellipsis whitespace-nowrap"
                    style={{
                      fontSize: isActive ? "1.1rem" : "0.88rem",
                      letterSpacing: "-0.02em",
                      transition: "font-size 0.3s ease",
                    }}
                  >
                    {service.title}
                  </h3>

                  {/* Divider line — CleanMax pattern */}
                  <motion.div
                    className="my-3 h-px bg-white/15"
                    animate={{ opacity: isActive ? 1 : 0.5 }}
                    transition={{ duration: 0.3 }}
                  />

                  {/* Expanding description + CTA */}
                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, delay: 0.08 }}
                        className="overflow-hidden"
                      >
                        <p className="text-sm leading-relaxed text-[#8f9c93] line-clamp-3">
                          {service.short}
                        </p>
                        <Link
                          href={`/services#${service.slug}`}
                          className="btn-lift mt-4 inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-xs font-bold"
                          style={{ backgroundColor: service.accent, color: "#1b291f" }}
                        >
                          Learn more
                          <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
                            <path d="M1 10L10 1M10 1H4M10 1V7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </Link>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Collapsed state: show small description hint */}
                  {!isActive && (
                    <p className="text-xs text-[#8f9c93]/60 line-clamp-2 leading-relaxed">
                      {service.short}
                    </p>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* ── Mobile: stacked cards with image header ── */}
        <div className="flex flex-col gap-4 md:hidden">
          {services.map((service, i) => {
            const img = SERVICE_IMAGES[service.slug];
            return (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07, duration: 0.5 }}
                className="overflow-hidden rounded-xl border border-white/6"
              >
                {img && (
                  <div className="relative h-32 w-full">
                    <Image src={img} alt={service.title} fill className="object-cover" />
                    <div className="absolute inset-0 bg-[#1b291f]/60" />
                  </div>
                )}
                <div className="bg-[#1e3826] p-5">
                  <h3 className="font-heading text-base font-semibold text-white" style={{ letterSpacing: "-0.02em" }}>
                    {service.title}
                  </h3>
                  <div className="my-3 h-px bg-white/12" />
                  <p className="text-sm text-[#8f9c93] leading-relaxed">{service.short}</p>
                  <Link
                    href={`/services#${service.slug}`}
                    className="mt-4 inline-flex items-center gap-1 text-sm font-semibold transition-all duration-200 hover:gap-2"
                    style={{ color: service.accent }}
                  >
                    Learn more →
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* View all CTA */}
        <ScrollReveal delay={0.2} className="mt-12 text-center">
          <Link
            href="/services"
            className="btn-lift inline-flex items-center gap-2 rounded-full border border-white/18 px-8 py-4 text-sm font-semibold text-white hover:border-white/35 hover:bg-white/5"
          >
            Explore all solutions →
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
}
