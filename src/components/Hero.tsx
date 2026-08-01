"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative min-h-[100svh] flex flex-col items-center justify-center overflow-hidden pt-24 pb-16">
      <div className="absolute inset-0 bg-[#050505]" />

      {/* Atmosphere — logo-matched green glow + subtle grid */}
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

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="mb-8 sm:mb-10 flex justify-center"
        >
          <Image
            src="/logo.png"
            alt="Synteks"
            width={280}
            height={200}
            className="w-[180px] sm:w-[240px] md:w-[280px] h-auto object-contain drop-shadow-[0_0_40px_rgba(200,240,0,0.25)]"
            priority
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="font-display text-[10px] sm:text-xs tracking-[0.35em] text-primary mb-5 uppercase"
        >
          Building Tomorrow. Together.
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight mb-5 text-gradient max-w-3xl mx-auto leading-[1.15]"
        >
          Web2, Web3 &amp; Mobile — built to ship
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="text-sm sm:text-base md:text-lg text-gray-400 max-w-xl mx-auto mb-10 leading-relaxed"
        >
          A software agency for products that need speed, security, and scale — without agency bloat.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.45 }}
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
      </div>
    </section>
  );
}
