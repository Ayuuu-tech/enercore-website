"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function CustomCursor() {
  const [isDesktop, setIsDesktop] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [clicking, setClicking] = useState(false);

  const rawX = useMotionValue(-200);
  const rawY = useMotionValue(-200);

  const dotX = useSpring(rawX, { stiffness: 2000, damping: 120 });
  const dotY = useSpring(rawY, { stiffness: 2000, damping: 120 });
  const ringX = useSpring(rawX, { stiffness: 200, damping: 28 });
  const ringY = useSpring(rawY, { stiffness: 200, damping: 28 });

  useEffect(() => {
    const mq = window.matchMedia("(hover: hover) and (pointer: fine)");
    if (!mq.matches) return;
    setIsDesktop(true);

    const onMove = (e: MouseEvent) => { rawX.set(e.clientX); rawY.set(e.clientY); };
    const onDown = () => setClicking(true);
    const onUp   = () => setClicking(false);
    const onOver = (e: MouseEvent) => {
      if ((e.target as Element)?.closest("a, button, [data-cursor]")) setHovering(true);
    };
    const onOut  = (e: MouseEvent) => {
      if ((e.target as Element)?.closest("a, button, [data-cursor]")) setHovering(false);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup",   onUp);
    document.addEventListener("mouseover",  onOver);
    document.addEventListener("mouseout",   onOut);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup",   onUp);
      document.removeEventListener("mouseover",  onOver);
      document.removeEventListener("mouseout",   onOut);
    };
  }, [rawX, rawY]);

  if (!isDesktop) return null;

  return (
    <>
      {/* Outer ring */}
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[9998] rounded-full border"
        style={{ x: ringX, y: ringY, translateX: "-50%", translateY: "-50%" }}
        animate={{
          width:  hovering ? 58 : clicking ? 28 : 42,
          height: hovering ? 58 : clicking ? 28 : 42,
          borderColor: hovering ? "rgba(255,229,93,0.75)" : "rgba(255,229,93,0.32)",
          backgroundColor: hovering ? "rgba(255,229,93,0.06)" : "transparent",
          scale: clicking ? 0.85 : 1,
        }}
        transition={{ duration: 0.18, ease: "easeOut" }}
      />
      {/* Inner dot */}
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[9999] rounded-full bg-[#ffe55d]"
        style={{ x: dotX, y: dotY, translateX: "-50%", translateY: "-50%" }}
        animate={{
          width:  hovering ? 6 : clicking ? 10 : 7,
          height: hovering ? 6 : clicking ? 10 : 7,
          opacity: hovering ? 0.6 : 1,
        }}
        transition={{ duration: 0.12 }}
      />
    </>
  );
}
