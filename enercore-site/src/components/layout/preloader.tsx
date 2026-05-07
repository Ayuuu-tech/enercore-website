"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

export function Preloader() {
  const [visible, setVisible] = useState(true);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((c) => {
        if (c >= 100) { clearInterval(interval); return 100; }
        return c + Math.floor(Math.random() * 8) + 3;
      });
    }, 40);

    const timer = setTimeout(() => setVisible(false), 2400);
    return () => { clearInterval(interval); clearTimeout(timer); };
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-[#0e1811] overflow-hidden"
        >
          {/* Background orb */}
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#90c955]/6 blur-[150px]" />

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="relative flex flex-col items-center gap-8"
          >
            {/* Logo text */}
            <div className="flex items-center gap-3">
              <motion.div
                initial={{ scale: 0, rotate: -90 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ duration: 0.6, delay: 0.2, ease: [0.34, 1.56, 0.64, 1] }}
                className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#ffe55d]"
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="4" fill="#1b291f" />
                  <path d="M12 2v3M12 19v3M2 12h3M19 12h3M5.22 5.22l2.12 2.12M16.66 16.66l2.12 2.12M5.22 18.78l2.12-2.12M16.66 7.34l2.12-2.12" stroke="#1b291f" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </motion.div>
              <span className="font-heading text-3xl font-bold tracking-[0.08em] text-white">
                ENERCORE
              </span>
            </div>

            {/* Counter */}
            <motion.div
              className="font-heading text-7xl font-bold text-white/8 tabular-nums"
              style={{ letterSpacing: "-0.06em" }}
            >
              {Math.min(count, 100)}
            </motion.div>

            {/* Progress bar */}
            <div className="relative h-[1px] w-56 overflow-hidden rounded-full bg-white/8">
              <motion.div
                className="absolute inset-y-0 left-0 bg-gradient-to-r from-[#90c955] to-[#ffe55d]"
                style={{ width: `${Math.min(count, 100)}%` }}
                transition={{ duration: 0.05 }}
              />
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.35 }}
              transition={{ delay: 0.6 }}
              className="text-[10px] font-semibold uppercase tracking-[0.3em] text-white"
            >
              Industrial Solar Experts
            </motion.p>
          </motion.div>

          {/* Exit curtain */}
          <motion.div
            className="absolute inset-0 bg-[#0e1811] origin-top"
            initial={{ scaleY: 0 }}
            exit={{ scaleY: 1 }}
            transition={{ duration: 0.55, ease: [0.76, 0, 0.24, 1], delay: 0 }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
