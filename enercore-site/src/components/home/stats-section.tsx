"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { AnimatedCounter } from "@/components/ui/animated-counter";
import { stats } from "@/lib/site-data";

/* CleanMax "Scalable Solutions" white section — images float off left/right edges,
   centered heading + body + inline stats with | dividers */
export function StatsSection() {
  const ref    = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });

  const leftY  = useTransform(scrollYProgress, [0, 1], [-50, 50]);
  const rightY = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return (
    <section ref={ref} className="relative overflow-hidden bg-white py-28">

      {/* Left parallax image — bleeds off left edge */}
      <motion.div
        style={{ y: leftY }}
        className="absolute left-0 top-6 hidden h-[440px] w-[22%] max-w-[280px] overflow-hidden rounded-r-2xl shadow-xl lg:block"
      >
        <Image
          src="https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=560&q=80"
          alt=""
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/30" />
      </motion.div>

      {/* Right parallax image — bleeds off right edge */}
      <motion.div
        style={{ y: rightY }}
        className="absolute right-0 top-14 hidden h-[400px] w-[20%] max-w-[260px] overflow-hidden rounded-l-2xl shadow-xl lg:block"
      >
        <Image
          src="https://images.unsplash.com/photo-1548337138-e87d889cc369?auto=format&fit=crop&w=520&q=80"
          alt=""
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-l from-transparent to-white/30" />
      </motion.div>

      {/* Center content */}
      <div className="relative z-10 mx-auto max-w-xl px-6 text-center md:px-10">

        {/* Section label — CleanMax yellow square + spaced uppercase */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-5 flex items-center justify-center gap-2.5"
        >
          <span className="h-2.5 w-2.5 shrink-0 rounded-sm bg-[#ffe55d]" />
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#274b30]/55">
            Scalable Solutions
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, delay: 0.1 }}
          className="font-heading text-4xl font-semibold text-[#1b291f] md:text-5xl"
          style={{ letterSpacing: "-0.03em", lineHeight: 1.1 }}
        >
          Clean Energy,<br />Custom-Built for Your Vision
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-5 text-sm leading-[1.85] text-[#274b30]/60"
        >
          Navigating the path to clean energy can be complex — we make it simple.
          Our tailor-made PPA, CAPEX, and Open Access solutions have helped industrial
          businesses slash power costs reliably and cost-effectively.
        </motion.p>

        {/* Inline stats with | dividers — CleanMax pattern */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.32 }}
          className="mt-10 flex flex-wrap items-start justify-center divide-x divide-[#d8dbd9]"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center px-5 first:pl-0 last:pr-0">
              <span
                className="font-heading text-3xl font-semibold text-[#1b291f]"
                style={{ letterSpacing: "-0.04em" }}
              >
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </span>
              <span className="mt-1 text-xs font-medium text-[#274b30]/45 leading-snug max-w-[90px] text-center">
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
