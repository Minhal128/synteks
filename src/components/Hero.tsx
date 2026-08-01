"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

// ponytail: timed intro phases — CSS/framer only, no GSAP timeline
type Phase = "logo" | "dissolve" | "content";

const DROPS = Array.from({ length: 14 }, (_, i) => ({
  id: i,
  x: (i % 7) * 14 - 42,
  delay: (i % 5) * 0.06,
  size: 4 + (i % 4) * 2,
}));

export function Hero() {
  const [phase, setPhase] = useState<Phase>("logo");

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setPhase("content");
      return;
    }
    const hold = setTimeout(() => setPhase("dissolve"), 1000);
    return () => clearTimeout(hold);
  }, []);

  useEffect(() => {
    if (phase !== "dissolve") return;
    const done = setTimeout(() => setPhase("content"), 1100);
    return () => clearTimeout(done);
  }, [phase]);

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
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(200,240,0,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(200,240,0,0.4) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
            maskImage: "radial-gradient(ellipse 70% 60% at 50% 40%, black, transparent)",
          }}
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center w-full min-h-[420px] flex items-center justify-center">
        <AnimatePresence mode="wait">
          {(phase === "logo" || phase === "dissolve") && (
            <motion.div
              key="logo-intro"
              className="relative flex items-center justify-center"
              initial={{ opacity: 0, y: 80, scale: 0.85 }}
              animate={
                phase === "dissolve"
                  ? { opacity: 0, y: -40, scale: 1.08, filter: "blur(18px)" }
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
                width={520}
                height={380}
                className="w-[300px] sm:w-[400px] md:w-[480px] lg:w-[520px] h-auto object-contain drop-shadow-[0_0_60px_rgba(200,240,0,0.4)]"
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
                      left: `calc(50% + ${d.x}px)`,
                      top: "45%",
                      boxShadow: "0 0 8px rgba(200,240,0,0.6)",
                    }}
                    initial={{ opacity: 0.9, y: 0, scale: 1 }}
                    animate={{ opacity: 0, y: -120 - (d.id % 5) * 20, scale: 0.2 }}
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
              className="w-full"
            >
              <motion.p
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="font-display text-[10px] sm:text-xs tracking-[0.35em] text-primary mb-5 uppercase"
              >
                Building Tomorrow. Together.
              </motion.p>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight mb-5 text-gradient max-w-3xl mx-auto leading-[1.15]"
              >
                Web2, Web3 &amp; Mobile — built to ship
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-sm sm:text-base md:text-lg text-gray-400 max-w-xl mx-auto mb-10 leading-relaxed"
              >
                A software agency for products that need speed, security, and scale — without agency
                bloat.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4 w-full max-w-md sm:max-w-none mx-auto"
              >
                <Link href="/contact">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full sm:w-auto px-8 py-3.5 btn-shiny font-semibold rounded-xl text-sm sm:text-base"
                  >
                    Start a Project
                  </motion.button>
                </Link>
                <Link href="#services">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full sm:w-auto px-8 py-3.5 bg-white/5 hover:bg-white/10 text-white font-medium rounded-xl border border-white/10 hover:border-primary/30 transition-all text-sm sm:text-base"
                  >
                    Our Services
                  </motion.button>
                </Link>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
