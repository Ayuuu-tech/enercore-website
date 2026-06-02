"use client";

import Link from "next/link";
import { useRef, useEffect } from "react";
import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";

const WORD_VARIANTS = {
  hidden: { y: "110%", opacity: 0 },
  visible: (i: number) => ({
    y: "0%",
    opacity: 1,
    transition: { duration: 0.9, delay: 0.5 + i * 0.08, ease: [0.16, 1, 0.3, 1] },
  }),
};

function SplitReveal({ text, className }: { text: string; className?: string }) {
  return (
    <span className={className} aria-label={text}>
      {text.split(" ").map((word, i) => (
        <span key={i} className="inline-block overflow-hidden">
          <motion.span custom={i} variants={WORD_VARIANTS} initial="hidden" animate="visible" className="inline-block">
            {word}&nbsp;
          </motion.span>
        </span>
      ))}
    </span>
  );
}

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);

  /* Scroll parallax */
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end start"] });
  const contentY = useTransform(scrollYProgress, [0, 0.5], [0, 50]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.45], [1, 0]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);

  /* Mouse parallax */
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothX = useSpring(mouseX, { stiffness: 60, damping: 22 });
  const smoothY = useSpring(mouseY, { stiffness: 60, damping: 22 });
  const layer1X = useTransform(smoothX, [-1, 1], [-18, 18]);
  const layer1Y = useTransform(smoothY, [-1, 1], [-12, 12]);
  const layer2X = useTransform(smoothX, [-1, 1], [-8, 8]);
  const layer2Y = useTransform(smoothY, [-1, 1], [-5, 5]);
  const orb1X = useTransform(smoothX, [-1, 1], [-35, 35]);
  const orb1Y = useTransform(smoothY, [-1, 1], [-25, 25]);
  const orb2X = useTransform(smoothX, [-1, 1], [25, -25]);
  const orb2Y = useTransform(smoothY, [-1, 1], [18, -18]);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mouseX.set((e.clientX / window.innerWidth - 0.5) * 2);
      mouseY.set((e.clientY / window.innerHeight - 0.5) * 2);
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, [mouseX, mouseY]);

  return (
    <section
      ref={sectionRef}
      className="noise-overlay relative flex min-h-screen w-full flex-col items-start justify-center overflow-hidden pt-24 pb-16"
    >
      {/* ── Background video with scroll parallax ── */}
      <motion.div
        className="absolute inset-0"
        style={{ scale: imageScale, y: imageY }}
      >
        <div className="absolute inset-0 overflow-hidden" style={{ willChange: "transform" }}>
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 h-full w-full object-cover object-center"
          >
            <source src="/videos/drone-hero.mp4" type="video/mp4" />
          </video>
        </div>
        {/* Deep overlay — keeps text readable over bright aerial footage */}
        <div className="absolute inset-0 bg-[#0d1a10]/60" />
        {/* Left-heavy gradient for content legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#1b291f]/92 via-[#1b291f]/55 to-[#1b291f]/10" />
        {/* Vignette — darkens edges for cinematic feel */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,#0d1a10/60_100%)]" />
        {/* Bottom fade into next section */}
        <div className="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-[#1b291f] to-transparent" />
      </motion.div>

      {/* ── Floating gradient orbs (mouse-parallax) ── */}
      <motion.div
        className="orb-a pointer-events-none absolute -left-32 top-1/4 h-[480px] w-[480px] rounded-full bg-[#90c955]/12 blur-[130px]"
        style={{ x: orb1X, y: orb1Y }}
      />
      <motion.div
        className="orb-b pointer-events-none absolute right-[-8%] top-[15%] h-[420px] w-[420px] rounded-full bg-[#ffe55d]/8 blur-[150px]"
        style={{ x: orb2X, y: orb2Y }}
      />
      <motion.div
        className="orb-c pointer-events-none absolute bottom-[10%] left-[40%] h-[320px] w-[320px] rounded-full bg-[#274b30]/40 blur-[100px]"
      />

      {/* ── Content ── */}
      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative z-10 mx-auto w-full max-w-7xl px-6 md:px-10"
      >
        {/* Badge */}
        <motion.div
          style={{ x: layer2X, y: layer2Y }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mb-8 inline-flex items-center gap-3 rounded-full border border-white/12 bg-white/6 px-5 py-2.5 backdrop-blur-md"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#ffe55d] opacity-50" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-[#ffe55d]" />
          </span>
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-white/80">
            Powering India&apos;s Clean Future
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          style={{ x: layer1X, y: layer1Y, letterSpacing: "-0.04em", color: "#ffffff" }}
          className="font-heading text-[clamp(2.6rem,6.5vw,5.5rem)] font-semibold leading-[1.04]"
        >
          <SplitReveal text="Clean, Reliable Solar" />
          <br />
          <span className="block overflow-hidden">
            <motion.span
              className="inline-block"
              initial={{ y: "110%", opacity: 0 }}
              animate={{ y: "0%", opacity: 1 }}
              transition={{ duration: 0.9, delay: 1.0, ease: [0.16, 1, 0.3, 1] }}
            >
              for Growing{" "}
              <span style={{ color: "#ff6b2b" }}>I</span>
              <span style={{ color: "#ff6b2b" }}>n</span>
              <span style={{ color: "#ffffff" }}>d</span>
              <span style={{ color: "#90c955" }}>i</span>
              <span style={{ color: "#90c955" }}>a</span>
              <span style={{ color: "#ffffff" }}>.</span>
            </motion.span>
          </span>
        </motion.h1>

        {/* Subline */}
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.25, ease: [0.16, 1, 0.3, 1] }}
          className="mt-7 max-w-lg text-base text-[#8f9c93] md:text-lg leading-relaxed"
        >
          PPA, CAPEX, Open Access, Design &amp; Engineering, and RenewX Training
          for factories across India. Reduce power bills by up to 90%.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.45, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 flex flex-wrap gap-4"
        >
          <Link
            href="/contact"
            className="btn-lift btn-ripple group flex items-center gap-2.5 rounded-full bg-[#ffe55d] px-8 py-4 text-sm font-bold text-[#1b291f] shadow-lg shadow-[#ffe55d]/20"
          >
            Get a Free Quote
            <motion.span
              className="inline-block"
              animate={{ x: [0, 4, 0] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            >
              →
            </motion.span>
          </Link>
          <Link
            href="/projects"
            className="btn-lift group flex items-center gap-2.5 rounded-full border border-white/25 bg-white/6 px-8 py-4 text-sm font-semibold text-white backdrop-blur-sm hover:border-white/45 hover:bg-white/12"
          >
            View Our Projects
            <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
          </Link>
        </motion.div>

        {/* Trust strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8, duration: 0.7 }}
          className="mt-16 flex flex-wrap gap-x-10 gap-y-3"
        >
          {["12 MW+ Installed", "6+ Projects Delivered", "3 States Served", "MNRE Compliant"].map((item, i) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.9 + i * 0.08, duration: 0.5 }}
              className="flex items-center gap-2.5 text-sm text-white/45"
            >
              <span className="h-px w-6 rounded-full bg-[#ffe55d]/50" />
              {item}
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 0.6 }}
        className="absolute bottom-10 left-1/2 z-10 -translate-x-1/2"
      >
        <div className="scroll-bounce flex flex-col items-center gap-2">
          <span className="text-[9px] font-semibold uppercase tracking-[0.25em] text-white/25">Scroll</span>
          <div className="relative h-10 w-px overflow-hidden bg-white/10">
            <motion.div
              className="absolute top-0 h-1/2 w-full bg-gradient-to-b from-[#ffe55d]/80 to-transparent"
              animate={{ y: ["0%", "200%"] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeIn" }}
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
