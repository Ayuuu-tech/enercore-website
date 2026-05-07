"use client";

import { motion, type Variants } from "framer-motion";
import { type ReactNode } from "react";

type Direction = "up" | "down" | "left" | "right" | "none";

interface ScrollRevealProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  direction?: Direction;
  className?: string;
  once?: boolean;
  amount?: number;
}

const directionOffset: Record<Direction, { x: number; y: number }> = {
  up:    { x: 0,   y: 32  },
  down:  { x: 0,   y: -32 },
  left:  { x: 40,  y: 0   },
  right: { x: -40, y: 0   },
  none:  { x: 0,   y: 0   },
};

export function ScrollReveal({
  children,
  delay = 0,
  duration = 0.65,
  direction = "up",
  className,
  once = true,
  amount = 0.15,
}: ScrollRevealProps) {
  const { x, y } = directionOffset[direction];

  const variants: Variants = {
    hidden: { opacity: 0, x, y },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* Stagger container — wraps a list of items for staggered reveal */
export function StaggerContainer({
  children,
  stagger = 0.1,
  className,
  once = true,
}: {
  children: ReactNode;
  stagger?: number;
  className?: string;
  once?: boolean;
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: 0.1 }}
      variants={{ visible: { transition: { staggerChildren: stagger } } }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* Item used inside StaggerContainer */
export function StaggerItem({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      variants={{
        hidden:  { opacity: 0, y: 28 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
