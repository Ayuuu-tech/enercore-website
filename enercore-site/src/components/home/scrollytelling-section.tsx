"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { scrollPanels } from "@/lib/site-data";

function ScrollPanel({
  panel,
  index,
  total,
  scrollYProgress,
}: {
  panel: (typeof scrollPanels)[number];
  index: number;
  total: number;
  scrollYProgress: ReturnType<typeof useScroll>["scrollYProgress"];
}) {
  const seg   = 1 / total;
  const start = index * seg;
  const end   = (index + 1) * seg;

  const opacity = useTransform(
    scrollYProgress,
    [Math.max(0, start - seg * 0.2), start + seg * 0.18, end - seg * 0.18, Math.min(1, end + seg * 0.05)],
    [0, 1, 1, 0],
  );
  const y     = useTransform(scrollYProgress, [start, end], [50, -50]);
  const scale = useTransform(scrollYProgress, [start, end], [0.97, 1.02]);
  const lineW = useTransform(scrollYProgress,
    [Math.max(0, start - seg * 0.05), end - seg * 0.1],
    ["0%", "100%"],
  );

  return (
    <motion.div
      style={{ opacity }}
      className="absolute inset-0 flex items-center"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-[#0e1811]" />

      {/* Dot grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.035) 1px, transparent 1px)",
          backgroundSize: "38px 38px",
        }}
      />

      {/* Large bg number */}
      <div
        className="absolute right-10 top-1/2 -translate-y-1/2 font-heading font-bold text-white select-none pointer-events-none"
        style={{ fontSize: "clamp(8rem, 20vw, 18rem)", lineHeight: 1, color: "rgba(255,255,255,0.025)", letterSpacing: "-0.06em" }}
      >
        {String(index + 1).padStart(2, "0")}
      </div>

      {/* Accent glow */}
      <motion.div
        className="absolute left-1/3 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full blur-[140px]"
        style={{ backgroundColor: panel.accent, opacity: 0.07 }}
      />

      {/* Content */}
      <motion.div
        style={{ y, scale }}
        className="relative z-10 mx-auto w-full max-w-7xl px-6 md:px-10"
      >
        <div className="max-w-2xl">
          {/* Badge */}
          <motion.span
            className="mb-6 inline-flex items-center gap-2.5 rounded-full border px-5 py-2 text-xs font-bold uppercase tracking-[0.18em]"
            style={{ borderColor: `${panel.accent}45`, color: panel.accent, backgroundColor: `${panel.accent}10` }}
          >
            <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: panel.accent }} />
            {panel.badge}
          </motion.span>

          {/* Heading */}
          <h2
            className="font-heading text-4xl font-semibold text-white md:text-5xl lg:text-[3.75rem]"
            style={{ whiteSpace: "pre-line", letterSpacing: "-0.04em", lineHeight: 1.05 }}
          >
            {panel.title}
          </h2>

          {/* Animated underline */}
          <div className="my-6 h-px w-full bg-white/8">
            <motion.div className="h-full" style={{ width: lineW, backgroundColor: panel.accent }} />
          </div>

          <p className="max-w-lg text-base leading-relaxed text-[#8f9c93]">
            {panel.body}
          </p>

          {/* Stat */}
          <div className="mt-12 flex items-end gap-4">
            <span
              className="font-heading text-7xl font-semibold md:text-8xl"
              style={{ color: panel.accent, letterSpacing: "-0.05em", lineHeight: 1 }}
            >
              {panel.stat}
            </span>
            <span className="mb-2 text-xs font-semibold uppercase tracking-[0.15em] text-[#8f9c93]">
              {panel.statLabel}
            </span>
          </div>
        </div>
      </motion.div>

      {/* Side progress dots */}
      <div className="absolute right-6 top-1/2 flex -translate-y-1/2 flex-col gap-2.5 md:right-10">
        {scrollPanels.map((_, i) => (
          <motion.div
            key={i}
            className="rounded-full transition-all duration-500"
            style={{
              width:           i === index ? 6 : 4,
              height:          i === index ? 6 : 4,
              backgroundColor: i === index ? panel.accent : "rgba(255,255,255,0.18)",
            }}
          />
        ))}
      </div>
    </motion.div>
  );
}

export function ScrollytellingSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <section ref={containerRef} className="relative bg-[#0e1811]" style={{ height: `${scrollPanels.length * 100}vh` }}>
      <div className="sticky top-0 h-screen overflow-hidden">
        {scrollPanels.map((panel, index) => (
          <ScrollPanel
            key={panel.badge}
            panel={panel}
            index={index}
            total={scrollPanels.length}
            scrollYProgress={scrollYProgress}
          />
        ))}
      </div>
    </section>
  );
}
