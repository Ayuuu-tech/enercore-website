"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";
import { navLinks } from "@/lib/site-data";

export function SiteHeader() {
  const pathname  = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  useEffect(() => { setMobileOpen(false); }, [pathname]);

  return (
    <>
      {/* Reading progress bar */}
      <motion.div className="scroll-progress-bar" style={{ scaleX }} />

      {/* Always-white navbar — CleanMax style */}
      <header className="fixed top-0 z-50 w-full bg-white border-b border-[#e5e8e6]" style={{ boxShadow: "0 1px 8px rgba(27,41,31,0.06)" }}>
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-[14px] md:px-10">

          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/logo.png"
              alt="Enercore New Energy Pvt Ltd"
              width={791}
              height={316}
              style={{ height: "34px", width: "auto" }}
              priority
            />
          </Link>

          {/* Desktop nav — CleanMax: simple links, underline on active */}
          <nav className="hidden items-center gap-7 md:flex">
            {navLinks.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`group relative py-1 text-sm font-medium transition-colors duration-200 ${
                    active ? "text-[#1b291f]" : "text-[#274b30]/55 hover:text-[#1b291f]"
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute bottom-0 left-0 h-px w-full rounded-full bg-[#1b291f] transition-transform duration-300 origin-left ${
                      active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                    }`}
                  />
                </Link>
              );
            })}
          </nav>

          {/* CTA — CleanMax yellow pill with external arrow */}
          <div className="hidden md:block">
            <Link
              href="/contact"
              className="btn-lift inline-flex items-center gap-2 rounded-full bg-[#ffe55d] px-6 py-2.5 text-sm font-semibold text-[#1b291f] hover:bg-[#f5de40]"
            >
              Contact Us
              <svg width="13" height="13" viewBox="0 0 13 13" fill="none" className="shrink-0">
                <path d="M1.5 11.5L11.5 1.5M11.5 1.5H4M11.5 1.5V9" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>

          {/* Mobile burger */}
          <button
            type="button"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
            className="flex flex-col items-center justify-center gap-[5px] p-2 md:hidden"
          >
            {[0, 1, 2].map((i) => (
              <motion.span
                key={i}
                className="block h-[2px] rounded-full bg-[#1b291f]"
                animate={{
                  width:   i === 1 ? (mobileOpen ? "24px" : "16px") : "24px",
                  opacity: i === 1 && mobileOpen ? 0 : 1,
                  rotate:  i === 0 ? (mobileOpen ? 45 : 0) : i === 2 ? (mobileOpen ? -45 : 0) : 0,
                  y:       i === 0 ? (mobileOpen ? 7 : 0)  : i === 2 ? (mobileOpen ? -7 : 0) : 0,
                }}
                transition={{ duration: 0.22 }}
              />
            ))}
          </button>
        </div>

        {/* Mobile drawer */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.nav
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="overflow-hidden border-t border-[#e5e8e6] bg-white md:hidden"
            >
              <ul className="flex flex-col gap-1 px-6 py-4">
                {navLinks.map((link, i) => (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05, duration: 0.25 }}
                  >
                    <Link
                      href={link.href}
                      className={`block rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${
                        pathname === link.href
                          ? "bg-[#1b291f]/5 text-[#1b291f] font-semibold"
                          : "text-[#274b30]/60 hover:bg-[#1b291f]/4 hover:text-[#1b291f]"
                      }`}
                    >
                      {link.label}
                    </Link>
                  </motion.li>
                ))}
                <motion.li
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: navLinks.length * 0.05, duration: 0.25 }}
                  className="pt-2"
                >
                  <Link
                    href="/contact"
                    className="btn-lift block rounded-full bg-[#ffe55d] px-5 py-3 text-center text-sm font-bold text-[#1b291f]"
                  >
                    Contact Us ↗
                  </Link>
                </motion.li>
              </ul>
            </motion.nav>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
