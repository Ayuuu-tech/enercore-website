"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const MotionLink = motion(Link);

const STORAGE_KEY = "retap-2026-popup-dismissed";
const HIDE_FOR_MS = 24 * 60 * 60 * 1000; // 24 hours
const SHOW_DELAY_MS = 3200; // appear after the preloader curtain

/* Brand tokens (match globals.css) */
const GREEN = "#274b30";
const DARK = "#1b291f";
const LIME = "#90c955";
const YELLOW = "#ffe55d";

/* ── Tiny renewable-energy themed icons ───────────────────────────────────── */
function LeafIcon({ className = "", style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} style={style}>
      <path d="M5 19C5 11 11 5 19 5c0 8-6 14-14 14Z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M5 19C8 13 12 10 17 8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

function BoltIcon({ className = "", style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} style={style}>
      <path d="M13 2 4.5 13.5H11l-1 8.5L19.5 10H13l0-8Z" />
    </svg>
  );
}

function CheckIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path d="m5 12.5 4 4 10-10" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const FEATURES = [
  "Master Renewable Energy",
  "Industry Training",
  "Software Design",
  "Internship Opportunities",
  "Placement Assistance",
];

type Mode = "hidden" | "open" | "min";

export function ProjectGreenPopup() {
  const [mode, setMode] = useState<Mode>("hidden");
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    let startMinimized = false;
    try {
      const ts = localStorage.getItem(STORAGE_KEY);
      if (ts && Date.now() - Number(ts) < HIDE_FOR_MS) startMinimized = true;
    } catch {
      /* localStorage unavailable — show anyway */
    }
    // Only auto-open the full card on the home page; elsewhere start minimized.
    const t = setTimeout(
      () => setMode(startMinimized || !isHome ? "min" : "open"),
      SHOW_DELAY_MS,
    );
    return () => clearTimeout(t);
  }, [isHome]);

  // Collapse to the side tab when leaving home or when the user scrolls up.
  useEffect(() => {
    if (!isHome) {
      setMode((m) => (m === "open" ? "min" : m));
      return;
    }
    let lastY = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      if (y < lastY - 4) setMode((m) => (m === "open" ? "min" : m)); // scrolling up
      lastY = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isHome]);

  const minimize = () => {
    setMode("min");
    try {
      localStorage.setItem(STORAGE_KEY, String(Date.now()));
    } catch {
      /* ignore */
    }
  };

  const reopen = () => setMode("open");

  return (
    <>
      {/* ── Minimized vertical "Enquire Now" tab ──────────────────────── */}
      <AnimatePresence>
        {mode === "min" && (
          <motion.button
            type="button"
            onClick={reopen}
            aria-label="Open RETAP 2026 announcement"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 40 }}
            transition={{ type: "spring", stiffness: 260, damping: 26 }}
            whileHover={{ x: -3, boxShadow: `0 0 24px 2px ${YELLOW}aa` }}
            whileTap={{ scale: 0.97 }}
            className="fixed right-0 top-1/3 z-[9997] flex items-center gap-2 rounded-l-xl py-4 pl-2.5 pr-2"
            style={{
              background: YELLOW,
              color: DARK,
              boxShadow: "0 10px 30px -8px rgba(27,41,31,0.45)",
            }}
          >
            <span
              className="text-[13px] font-semibold tracking-wide"
              style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
            >
              Enquire Now
            </span>
          </motion.button>
        )}
      </AnimatePresence>

      {/* ── Expanded card ─────────────────────────────────────────────── */}
      <AnimatePresence>
        {mode === "open" && (
        <motion.aside
          role="dialog"
          aria-label="RETAP 2026 course announcement"
          initial={{ opacity: 0, x: 60, scale: 0.96 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          exit={{ opacity: 0, x: 40, scale: 0.95, transition: { duration: 0.25, ease: "easeIn" } }}
          transition={{ type: "spring", stiffness: 220, damping: 24, mass: 0.9 }}
          className="fixed right-4 top-20 z-[9997] w-[340px] max-w-[calc(100vw-2rem)] sm:right-5 sm:top-24
                     max-sm:left-1/2 max-sm:right-auto max-sm:top-20 max-sm:-translate-x-1/2"
        >
          {/* Idle float wrapper */}
          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="relative"
          >
            {/* Soft brand glow pulse */}
            <motion.div
              aria-hidden
              className="pointer-events-none absolute -inset-[1px] rounded-[20px]"
              animate={{ opacity: [0.25, 0.5, 0.25] }}
              transition={{ duration: 3.4, repeat: Infinity, ease: "easeInOut" }}
              style={{ boxShadow: `0 0 28px 2px ${LIME}40, 0 0 60px 8px ${LIME}1a` }}
            />

            <div
              className="relative overflow-hidden rounded-[20px] border p-5 backdrop-blur-xl"
              style={{
                borderColor: `${LIME}55`,
                color: GREEN,
                background: "linear-gradient(160deg, rgba(255,255,255,0.92) 0%, rgba(251,250,244,0.95) 100%)",
                boxShadow: "0 22px 50px -16px rgba(27,41,31,0.35), inset 0 1px 0 rgba(255,255,255,0.7)",
              }}
            >
              {/* Ambient lime corner wash */}
              <div
                aria-hidden
                className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full blur-2xl"
                style={{ background: `${LIME}33` }}
              />

              {/* Coming Soon badge */}
              <div className="absolute right-3 top-3">
                <motion.span
                  initial={{ scale: 0.6, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.4, type: "spring", stiffness: 300, damping: 18 }}
                  className="inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider"
                  style={{ background: `${GREEN}0f`, color: GREEN, border: `1px solid ${LIME}66` }}
                >
                  <motion.span
                    className="inline-block h-1.5 w-1.5 rounded-full"
                    style={{ background: LIME }}
                    animate={{ opacity: [1, 0.25, 1], scale: [1, 0.8, 1] }}
                    transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
                  />
                  Coming Soon
                </motion.span>
              </div>

              {/* Minimize button → collapses to side tab */}
              <motion.button
                onClick={minimize}
                aria-label="Minimize announcement"
                whileHover={{ scale: 1.1, backgroundColor: `${LIME}26` }}
                whileTap={{ scale: 0.85 }}
                transition={{ type: "spring", stiffness: 350, damping: 18 }}
                className="absolute left-3 top-3 flex h-7 w-7 items-center justify-center rounded-full border"
                style={{ borderColor: `${GREEN}1f`, color: `${GREEN}99` }}
              >
                <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none">
                  <path d="M5 12h14" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
                </svg>
              </motion.button>

              {/* Eyebrow */}
              <div className="mt-7 flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.18em]" style={{ color: GREEN }}>
                <BoltIcon className="h-3.5 w-3.5" style={{ color: LIME }} />
                New Course Launching
              </div>

              {/* Title */}
              <h3 className="font-heading mt-2 flex items-center gap-2 text-2xl font-bold leading-none" style={{ color: DARK }}>
                <LeafIcon className="h-6 w-6" style={{ color: LIME }} />
                RETAP 2026
              </h3>
              <p className="mt-1.5 text-[13px] font-medium" style={{ color: `${GREEN}99` }}>
                India&apos;s First RenewedTech Program
              </p>

              {/* Features */}
              <ul className="mt-4 space-y-1.5">
                {FEATURES.map((f, i) => (
                  <motion.li
                    key={f}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.25 + i * 0.07 }}
                    className="flex items-center gap-2 text-[13px]"
                    style={{ color: `${GREEN}cc` }}
                  >
                    <span
                      className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full"
                      style={{ background: `${LIME}26`, color: GREEN }}
                    >
                      <CheckIcon className="h-3 w-3" />
                    </span>
                    {f}
                  </motion.li>
                ))}
              </ul>

              {/* Registration line + countdown placeholder */}
              <div
                className="mt-4 flex items-center justify-between rounded-xl border px-3 py-2"
                style={{ borderColor: `${GREEN}14`, background: `${LIME}12` }}
              >
                <span className="text-[12px] font-medium" style={{ color: `${GREEN}cc` }}>Registration Opens Soon</span>
                <span className="flex items-center gap-1.5 text-[11px] font-semibold" style={{ color: GREEN }}>
                  <motion.span
                    className="inline-block h-1.5 w-1.5 rounded-full"
                    style={{ background: LIME }}
                    animate={{ opacity: [0.4, 1, 0.4] }}
                    transition={{ duration: 1.8, repeat: Infinity }}
                  />
                  Launching Soon
                </span>
              </div>

              {/* Buttons */}
              <div className="mt-4 flex gap-2.5">
                <MotionLink
                  href="/contact"
                  whileHover={{ scale: 1.03, boxShadow: `0 10px 26px -8px ${GREEN}80` }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ type: "spring", stiffness: 400, damping: 22 }}
                  className="flex-1 rounded-xl py-2.5 text-center text-[13px] font-semibold text-white"
                  style={{ background: GREEN }}
                >
                  Notify Me
                </MotionLink>
                <MotionLink
                  href="/retap"
                  whileHover={{ scale: 1.03, backgroundColor: `${LIME}1f`, borderColor: `${LIME}99` }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ type: "spring", stiffness: 400, damping: 22 }}
                  className="flex-1 rounded-xl border py-2.5 text-center text-[13px] font-semibold"
                  style={{ borderColor: `${GREEN}2e`, color: GREEN }}
                >
                  Learn More
                </MotionLink>
              </div>

              {/* Footer */}
              <p className="mt-3 text-center text-[11px] tracking-wide" style={{ color: `${GREEN}80` }}>
                Limited Seats <span style={{ color: LIME }}>•</span> Early Access
              </p>
            </div>
          </motion.div>
        </motion.aside>
        )}
      </AnimatePresence>
    </>
  );
}
