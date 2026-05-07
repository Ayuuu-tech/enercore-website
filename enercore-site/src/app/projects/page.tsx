import type { Metadata } from "next";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { ProjectsFilter } from "@/components/projects/projects-filter";
import { projects } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Browse Enercore's solar project portfolio — delivered across OPEX, CAPEX, design, and open access engagements.",
};

export default function ProjectsPage() {
  return (
    <>
      <section className="bg-[#1b291f] relative overflow-hidden pt-36 pb-20 text-white">
        <div className="dot-grid pointer-events-none absolute inset-0" />
        <div className="pointer-events-none absolute left-0 top-0 h-full w-full bg-[radial-gradient(ellipse_at_80%_40%,rgba(144,201,85,0.08),transparent_50%)]" />
        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 md:px-10">
          <ScrollReveal>
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-[#ffe55d]">Our Portfolio</p>
            <h1
              className="font-heading text-5xl font-semibold md:text-6xl"
              style={{ letterSpacing: "-0.04em", lineHeight: 1.05 }}
            >
              Projects &amp; Outcomes
            </h1>
            <p className="mt-5 max-w-2xl text-base text-[#8f9c93] leading-relaxed">
              From utility-scale open-access plants to industrial rooftops — every project
              is built around performance reliability and measurable business ROI.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto w-full max-w-7xl px-6 md:px-10">
          <ProjectsFilter projects={projects} />
        </div>
      </section>
    </>
  );
}
