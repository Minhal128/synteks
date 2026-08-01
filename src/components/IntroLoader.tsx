"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Laptop, Boxes, Smartphone, Cpu, Shield, Rocket } from "lucide-react";

const SLIDES = [
  { label: "Web2", Icon: Laptop },
  { label: "Web3", Icon: Boxes },
  { label: "App Dev", Icon: Smartphone },
  { label: "AI / ML", Icon: Cpu },
  { label: "Cyber", Icon: Shield },
];

const TOTAL_MS = 520 + SLIDES.length * 650 + 450;

type Props = { onDone: () => void };

export function IntroLoader({ onDone }: Props) {
  const [opened, setOpened] = useState(false);
  const [slide, setSlide] = useState(-1);
  const [exit, setExit] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      onDone();
      return;
    }

    const start = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      setProgress(Math.min(1, (now - start) / TOTAL_MS));
      if (now - start < TOTAL_MS) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    const tOpen = setTimeout(() => setOpened(true), 280);
    const tFirst = setTimeout(() => setSlide(0), 520);
    const timers = SLIDES.slice(1).map((_, i) =>
      setTimeout(() => setSlide(i + 1), 520 + (i + 1) * 650)
    );
    const tExit = setTimeout(() => setExit(true), 520 + SLIDES.length * 650);
    const tDone = setTimeout(onDone, TOTAL_MS);

    return () => {
      cancelAnimationFrame(raf);
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
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#050505]"
      animate={exit ? { opacity: 0 } : { opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      <div className="relative flex items-center justify-center gap-0">
        <motion.span
          className="font-display text-5xl sm:text-7xl md:text-8xl text-primary select-none"
          initial={{ x: 28 }}
          animate={{ x: opened ? -8 : 28 }}
          transition={{ type: "spring", stiffness: 380, damping: 28 }}
        >
          {"<"}
        </motion.span>

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
                <current.Icon className="w-7 h-7 sm:w-8 sm:h-8 text-primary" strokeWidth={1.5} />
                <span className="font-display text-sm sm:text-base tracking-[0.2em] text-white uppercase">
                  {current.label}
                </span>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <motion.span
          className="font-display text-5xl sm:text-7xl md:text-8xl text-primary select-none"
          initial={{ x: -28 }}
          animate={{ x: opened ? 8 : -28 }}
          transition={{ type: "spring", stiffness: 380, damping: 28 }}
        >
          {">"}
        </motion.span>
      </div>

      {/* Launch progress — dots + line + rocket */}
      <div className="absolute bottom-16 sm:bottom-20 left-1/2 -translate-x-1/2 w-[min(280px,70vw)]">
        <div className="flex items-center justify-between mb-3 text-[10px] tracking-[0.25em] uppercase text-gray-500 font-display">
          <span>Launching</span>
          <span className="text-primary">{Math.round(progress * 100)}%</span>
        </div>
        <div className="relative h-1.5 rounded-full bg-zinc-800 overflow-visible">
          <motion.div
            className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-primary-dark to-primary"
            style={{ width: `${progress * 100}%` }}
          />
          <motion.div
            className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2"
            style={{ left: `${progress * 100}%` }}
          >
            <Rocket className="w-4 h-4 text-primary rotate-45 drop-shadow-[0_0_8px_rgba(200,240,0,0.8)]" />
          </motion.div>
        </div>
        <div className="flex justify-between mt-3 px-0.5">
          {SLIDES.map((_, i) => (
            <span
              key={i}
              className={`w-1.5 h-1.5 rounded-full transition-colors ${
                slide >= i ? "bg-primary shadow-[0_0_6px_rgba(200,240,0,0.7)]" : "bg-zinc-700"
              }`}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
}
