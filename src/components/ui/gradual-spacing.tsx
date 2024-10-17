"use client";

import { AnimatePresence, motion, Variants } from "framer-motion";

import { cn } from "@/lib/utils";

interface GradualSpacingProps {
  text: string;
  duration?: number;
  delayMultiple?: number;
  framerProps?: Variants;
  className?: string;
  notRepeatOnReentry?: boolean;
}

export function GradualSpacing({
  text,
  duration = 0.5,
  delayMultiple = 0.04,
  framerProps = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  },
  className,
  notRepeatOnReentry = true,
}: GradualSpacingProps) {
  return (
    <div className="flex justify-start  max-w-full">
      <AnimatePresence>
        {text.split("").map((char, i) => (
          <motion.span
            key={i}
            initial="hidden"
            // animate="visible"
            exit="hidden"
            whileInView="visible"
            variants={framerProps}
            transition={{
              duration,
              delay: i * delayMultiple,
            }}
            viewport={{ once: notRepeatOnReentry, amount: 0.8 }}
            className={cn("drop-shadow-sm whitespace", className)}
          >
            {char === " " ? <span>&nbsp;</span> : char}
          </motion.span>
        ))}
      </AnimatePresence>
    </div>
  );
}
