"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Laptop, Boxes, Smartphone, Cpu, Shield } from "lucide-react";

const SLIDES = [
  { label: "Web2", Icon: Laptop },
  { label: "Web3", Icon: Boxes },
  { label: "App Dev", Icon: Smartphone },
  { label: "AI / ML", Icon: Cpu },
  { label: "Cyber", Icon: Shield },
];

type Props = { onDone: () => void };

export function IntroLoader({ onDone }: Props) {
  const [opened, setOpened] = useState(false);
  const [slide, setSlide] = useState(-1); // -1 = brackets only
  const [exit, setExit] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      onDone();
      return;
    }

    const tOpen = setTimeout(() => setOpened(true), 280);
    const tFirst = setTimeout(() => setSlide(0), 520);
    const timers = SLIDES.slice(1).map((_, i) =>
      setTimeout(() => setSlide(i + 1), 520 + (i + 1) * 650)
    );
    const tExit = setTimeout(() => setExit(true), 520 + SLIDES.length * 650);
    const tDone = setTimeout(onDone, 520 + SLIDES.length * 650 + 450);

    return () => {
      clearTimeout(tOpen);
      clearTimeout(tFirst);
      clearTimeout(tExit);
      clearTimeout(tDone);
      timers.forEach(clearTimeout);
    };
  }, [onDone]);

  const current = slide >= 0 ? SLIDES[slide] : null;

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-[#050505]"
      animate={exit ? { opacity: 0 } : { opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      <div className="relative flex items-center justify-center gap-0">
        {/* left bracket */}
        <motion.span
          className="font-display text-5xl sm:text-7xl md:text-8xl text-primary select-none"
          initial={{ x: 28 }}
          animate={{ x: opened ? -8 : 28 }}
          transition={{ type: "spring", stiffness: 380, damping: 28 }}
        >
          {"<"}
        </motion.span>

        {/* center content */}
        <div className="relative w-[140px] sm:w-[180px] md:w-[220px] h-16 sm:h-20 flex items-center justify-center overflow-hidden">
          <AnimatePresence mode="wait">
            {current && (
              <motion.div
                key={current.label}
                initial={{ opacity: 0, y: 18, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -14, scale: 0.95 }}
                transition={{ duration: 0.28 }}
                className="flex flex-col items-center gap-1.5"
              >
                <current.Icon
                  className="w-7 h-7 sm:w-8 sm:h-8 text-primary"
                  strokeWidth={1.5}
                />
                <span className="font-display text-sm sm:text-base tracking-[0.2em] text-white uppercase">
                  {current.label}
                </span>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* right bracket */}
        <motion.span
          className="font-display text-5xl sm:text-7xl md:text-8xl text-primary select-none"
          initial={{ x: -28 }}
          animate={{ x: opened ? 8 : -28 }}
          transition={{ type: "spring", stiffness: 380, damping: 28 }}
        >
          {">"}
        </motion.span>
      </div>
    </motion.div>
  );
}
