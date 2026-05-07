"use client";

import Link from "next/link";
import Image from "next/image";
import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { Project } from "@/lib/site-data";

type Filter = "All" | Project["serviceType"];

const FILTERS: Filter[] = ["All", "OPEX", "CAPEX", "Design & Engineering", "Open Access"];

const SERVICE_COLORS: Record<string, string> = {
  "OPEX":                "#ffe55d",
  "CAPEX":               "#90c955",
  "Design & Engineering":"#a78bfa",
  "Open Access":         "#60a5fa",
};

export function ProjectsFilter({ projects }: { projects: Project[] }) {
  const [active, setActive] = useState<Filter>("All");

  const filtered = useMemo(
    () => (active === "All" ? projects : projects.filter((p) => p.serviceType === active)),
    [active, projects],
  );

  return (
    <div>
      {/* Filter pills — CleanMax style */}
      <div className="mb-8 flex flex-wrap gap-2 items-center">
        {FILTERS.map((filter) => (
          <button
            key={filter}
            type="button"
            onClick={() => setActive(filter)}
            className={`btn-lift rounded-full border px-5 py-2 text-sm font-medium transition-all duration-200 ${
              active === filter
                ? "border-[#1b291f] bg-[#1b291f] text-white"
                : "border-[#d8dbd9] bg-white text-[#274b30] hover:border-[#274b30]"
            }`}
          >
            {filter}
          </button>
        ))}
        <span className="ml-auto text-sm text-[#274b30]/40">
          {filtered.length} project{filtered.length !== 1 ? "s" : ""}
        </span>
      </div>

      {/* Cards */}
      <motion.div layout className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {filtered.map((project) => {
            const accent = SERVICE_COLORS[project.serviceType] ?? "#ffe55d";
            return (
              <motion.article
                key={project.slug}
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="img-zoom flex flex-col overflow-hidden rounded-lg border border-[#d8dbd9]/40 bg-white shadow-sm card-hover"
              >
                {/* Photo header */}
                <div className="img-inner relative h-44 overflow-hidden">
                  <Image
                    src={project.imageUrl}
                    alt={project.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1b291f]/70 via-[#1b291f]/10 to-transparent" />
                  <span
                    className="absolute bottom-3 left-3 rounded-full px-3 py-1 text-xs font-semibold"
                    style={{ backgroundColor: `${accent}22`, color: accent, border: `1px solid ${accent}40` }}
                  >
                    {project.serviceType}
                  </span>
                  {project.status === "Upcoming" && (
                    <span className="absolute top-3 right-3 rounded-full bg-[#ffe55d] px-3 py-1 text-xs font-bold text-[#1b291f]">
                      Upcoming
                    </span>
                  )}
                </div>

                {/* Body */}
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="font-heading text-base font-semibold text-[#1b291f]" style={{ letterSpacing: "-0.02em" }}>
                    {project.name}
                  </h3>
                  <p className="mt-2 flex-1 text-sm text-[#274b30]/65 leading-relaxed">{project.summary}</p>
                  <div className="mt-4 flex flex-wrap items-center justify-between gap-2">
                    <div className="flex flex-wrap gap-1.5">
                      <span className="rounded-full bg-[#1b291f]/6 px-2.5 py-1 text-xs font-medium text-[#274b30]">
                        {project.capacity}
                      </span>
                      <span className="rounded-full bg-[#1b291f]/6 px-2.5 py-1 text-xs font-medium text-[#274b30]">
                        {project.state}
                      </span>
                    </div>
                    <Link
                      href={`/projects/${project.slug}`}
                      className="text-sm font-semibold text-[#274b30] underline underline-offset-4 hover:text-[#1b291f] transition-colors"
                    >
                      Case study →
                    </Link>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
