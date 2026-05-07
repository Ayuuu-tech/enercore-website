"use client";

import Link from "next/link";
import Image from "next/image";
import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { StaggerContainer, StaggerItem } from "@/components/ui/scroll-reveal";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { projects } from "@/lib/site-data";

const SERVICE_COLORS: Record<string, string> = {
  "OPEX":                "#ffe55d",
  "CAPEX":               "#90c955",
  "Design & Engineering":"#a78bfa",
  "Open Access":         "#60a5fa",
};

function TiltCard({ children, className }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [6, -6]), { stiffness: 300, damping: 30 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-6, 6]), { stiffness: 300, damping: 30 });
  const brightness = useSpring(1, { stiffness: 300, damping: 30 });

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top)  / rect.height - 0.5);
    brightness.set(1.04);
  };
  const onLeave = () => { x.set(0); y.set(0); brightness.set(1); };

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ rotateX, rotateY, filter: useTransform(brightness, (v) => `brightness(${v})`), transformStyle: "preserve-3d" }}
      className={`card-3d ${className}`}
    >
      {children}
    </motion.div>
  );
}

export function ProjectsSection() {
  const featured = projects.filter((p) => p.status === "Completed").slice(0, 4);

  return (
    <section className="bg-[#f7f6ef] py-28">
      <div className="mx-auto w-full max-w-7xl px-6 md:px-10">
        {/* Header */}
        <ScrollReveal className="mb-14">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#274b30]/55">
            Our Work
          </p>
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <h2
              className="font-heading text-4xl font-semibold text-[#1b291f] md:text-5xl"
              style={{ letterSpacing: "-0.03em" }}
            >
              Featured Installations
            </h2>
            <Link
              href="/projects"
              className="group inline-flex items-center gap-2 text-sm font-semibold text-[#274b30] transition-all hover:text-[#1b291f]"
            >
              View all projects
              <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">→</span>
            </Link>
          </div>
        </ScrollReveal>

        {/* Grid with 3D tilt */}
        <StaggerContainer className="grid gap-5 md:grid-cols-2">
          {featured.map((project) => {
            const accent = SERVICE_COLORS[project.serviceType] ?? "#ffe55d";
            return (
              <StaggerItem key={project.slug}>
                <Link href={`/projects/${project.slug}`} className="block">
                  <TiltCard className="overflow-hidden rounded-xl border border-[#d8dbd9]/40 bg-white shadow-sm">
                    {/* Photo */}
                    <div className="relative h-60 overflow-hidden">
                      <Image
                        src={project.imageUrl}
                        alt={project.name}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#1b291f]/85 via-[#1b291f]/25 to-transparent" />

                      {/* Service badge */}
                      <div className="absolute bottom-4 left-4 flex flex-col gap-1.5">
                        <span
                          className="inline-block rounded-full px-3 py-1 text-xs font-bold"
                          style={{ backgroundColor: `${accent}22`, color: accent, border: `1px solid ${accent}45` }}
                        >
                          {project.serviceType}
                        </span>
                        <h3 className="font-heading text-xl font-semibold text-white" style={{ letterSpacing: "-0.025em" }}>
                          {project.name}
                        </h3>
                      </div>

                      {/* Capacity badge top-right */}
                      <span className="absolute right-4 top-4 rounded-full bg-black/40 px-3 py-1 text-xs font-semibold text-white/90 backdrop-blur-sm">
                        {project.capacity}
                      </span>
                    </div>

                    {/* Info */}
                    <div className="p-5">
                      <p className="text-sm leading-relaxed text-[#274b30]/65">{project.summary}</p>
                      <div className="mt-4 flex items-center justify-between">
                        <span className="rounded-full bg-[#1b291f]/6 px-3 py-1.5 text-xs font-medium text-[#274b30]">
                          {project.location}
                        </span>
                        <span className="inline-flex items-center gap-1 text-sm font-bold text-[#274b30] transition-all duration-200 group-hover:gap-2">
                          Case study
                          <motion.span
                            animate={{ x: [0, 3, 0] }}
                            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
                          >
                            →
                          </motion.span>
                        </span>
                      </div>
                    </div>
                  </TiltCard>
                </Link>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
