"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { EstimateModal } from "@/components/EstimateModal";

type Phase = "logo" | "dissolve" | "content";

const DROPS = Array.from({ length: 14 }, (_, i) => ({
  id: i,
  x: (i % 7) * 14 - 42,
  delay: (i % 5) * 0.06,
  size: 4 + (i % 4) * 2,
}));

const LINES = [
  "Web2, Web3 & Mobile — built to ship",
  "Smart contracts that survive mainnet",
  "Apps users keep. Code you own.",
  "Senior delivery at $20/hr — not $30+",
  "From idea to deploy in weeks, not quarters",
];

function Typewriter({ lines }: { lines: string[] }) {
  const [lineIdx, setLineIdx] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const full = lines[lineIdx];
    const speed = deleting ? 28 : 55;
    const pause = deleting && text === "" ? 400 : !deleting && text === full ? 2200 : speed;

    const t = setTimeout(() => {
      if (!deleting && text === full) {
        setDeleting(true);
        return;
      }
      if (deleting && text === "") {
        setDeleting(false);
        setLineIdx((i) => (i + 1) % lines.length);
        return;
      }
      setText(full.slice(0, text.length + (deleting ? -1 : 1)));
    }, pause);

    return () => clearTimeout(t);
  }, [text, deleting, lineIdx, lines]);

  return (
    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight mb-5 text-gradient max-w-3xl mx-auto leading-[1.15] min-h-[1.3em]">
      {text}
      <motion.span
        animate={{ opacity: [1, 0, 1] }}
        transition={{ duration: 0.8, repeat: Infinity }}
        className="inline-block w-[3px] h-[0.85em] bg-primary ml-1 align-middle"
      />
    </h1>
  );
}

export function Hero({ ready = true }: { ready?: boolean }) {
  const [phase, setPhase] = useState<Phase>("logo");
  const [estimateOpen, setEstimateOpen] = useState(false);

  useEffect(() => {
    if (!ready) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setPhase("content");
      return;
    }
    // ponytail: 1s hold then dissolve — timers must wait until IntroLoader finishes
    const hold = setTimeout(() => setPhase("dissolve"), 1000);
    return () => clearTimeout(hold);
  }, [ready]);

  useEffect(() => {
    if (!ready || phase !== "dissolve") return;
    const done = setTimeout(() => setPhase("content"), 1100);
    return () => clearTimeout(done);
  }, [ready, phase]);

  return (
    <section className="relative min-h-[100svh] flex flex-col items-center justify-center overflow-hidden pt-24 pb-16">
      <div className="absolute inset-0 bg-[#050505]" />

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute left-1/2 top-[38%] -translate-x-1/2 -translate-y-1/2 w-[70vw] max-w-[900px] h-[50vh] rounded-full opacity-40 blur-[100px]"
          style={{
            background:
              "radial-gradient(ellipse, rgba(200,240,0,0.35) 0%, rgba(74,122,0,0.12) 45%, transparent 70%)",
          }}
        />
        {/* Full hero grid */}
        <div
          className="absolute inset-0 opacity-[0.14]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(200,240,0,0.45) 1px, transparent 1px), linear-gradient(90deg, rgba(200,240,0,0.45) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.35) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.35) 1px, transparent 1px)",
            backgroundSize: "192px 192px",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 70% 55% at 50% 40%, transparent 20%, #050505 75%)",
          }}
        />
      </div>

      <div className="relative z-10 w-full px-4 sm:px-6 text-center min-h-[420px] flex items-center justify-center">
        <AnimatePresence mode="wait">
          {(phase === "logo" || phase === "dissolve") && (
            <motion.div
              key="logo-intro"
              className="relative flex items-center justify-center w-full"
              initial={{ opacity: 0, y: 60, scale: 0.9 }}
              animate={
                phase === "dissolve"
                  ? { opacity: 0, y: -50, scale: 1.06, filter: "blur(18px)" }
                  : { opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }
              }
              exit={{ opacity: 0 }}
              transition={
                phase === "dissolve"
                  ? { duration: 1.05, ease: [0.22, 1, 0.36, 1] }
                  : { duration: 0.9, ease: [0.22, 1, 0.36, 1] }
              }
            >
              <Image
                src="/logo.png"
                alt="Synteks"
                width={1200}
                height={860}
                className="w-[88vw] max-w-[920px] h-auto object-contain drop-shadow-[0_0_80px_rgba(200,240,0,0.5)]"
                priority
              />
              {phase === "dissolve" &&
                DROPS.map((d) => (
                  <motion.span
                    key={d.id}
                    className="absolute rounded-full bg-primary/70 pointer-events-none"
                    style={{
                      width: d.size,
                      height: d.size,
                      left: `calc(50% + ${d.x * 2}px)`,
                      top: "45%",
                      boxShadow: "0 0 8px rgba(200,240,0,0.6)",
                    }}
                    initial={{ opacity: 0.9, y: 0, scale: 1 }}
                    animate={{ opacity: 0, y: -140 - (d.id % 5) * 24, scale: 0.2 }}
                    transition={{ duration: 1, delay: d.delay, ease: "easeOut" }}
                  />
                ))}
            </motion.div>
          )}

          {phase === "content" && (
            <motion.div
              key="hero-content"
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="w-full max-w-5xl mx-auto"
            >
              <p className="font-display text-[10px] sm:text-xs tracking-[0.35em] text-primary mb-5 uppercase">
                Building Tomorrow. Together.
              </p>

              <Typewriter lines={LINES} />

              <p className="text-sm sm:text-base md:text-lg text-gray-400 max-w-xl mx-auto mb-10 leading-relaxed">
                A software agency for products that need speed, security, and scale — without agency
                bloat.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4 w-full max-w-md sm:max-w-none mx-auto">
                <Link href="/contact">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full sm:w-auto px-8 py-3.5 btn-shiny font-semibold rounded-xl text-sm sm:text-base"
                  >
                    Start a Project
                  </motion.button>
                </Link>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setEstimateOpen(true)}
                  className="w-full sm:w-auto px-8 py-3.5 bg-white/5 hover:bg-white/10 text-white font-medium rounded-xl border border-white/10 hover:border-primary/40 transition-all text-sm sm:text-base"
                >
                  Get Estimate
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <EstimateModal open={estimateOpen} onClose={() => setEstimateOpen(false)} />
    </section>
  );
}
