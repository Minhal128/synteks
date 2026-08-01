"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Banknote, Glasses, Wrench, Bot, ArrowRight } from "lucide-react";

const pains = [
  {
    icon: Banknote,
    title: "Burned by devs who disappeared",
    body: "You paid, they delivered something half-baked, then vanished. Getting revisions felt like pulling teeth.",
    tint: "text-emerald-400",
  },
  {
    icon: Glasses,
    title: "Blockchain feels overwhelming",
    body: "You want to launch a Web3 product but smart contracts, wallets, and gas fees feel like a foreign language.",
    tint: "text-amber-300",
  },
  {
    icon: Wrench,
    title: "Need custom software, not a template",
    body: "Off-the-shelf tools don't fit your workflow. You need something built specifically for how your business works.",
    tint: "text-sky-300",
  },
  {
    icon: Bot,
    title: "Spending hours on tasks AI could handle",
    body: "Data entry, document processing, repetitive ops. You know automation is the answer but don't know where to start.",
    tint: "text-fuchsia-300",
  },
];

const ease = [0.22, 1, 0.36, 1] as const;

export function PainPointsSection() {
  return (
    <section className="relative py-20 sm:py-24 md:py-28 overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 50% 40% at 85% 90%, rgba(200,240,0,0.07) 0%, transparent 60%)",
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease }}
            className="text-primary text-xs sm:text-sm tracking-[0.28em] uppercase mb-5 font-display"
          >
            Does this sound familiar?
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.05, ease }}
            className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight mb-5"
          >
            <span className="text-white">You Need Results. </span>
            <span className="text-gradient-accent">Not Another Dev Who Disappears.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1, ease }}
            className="text-gray-400 text-sm sm:text-base max-w-xl mx-auto leading-relaxed"
          >
            Most developers write code. We solve problems. That difference shows in every project we
            ship.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-12 sm:mb-14">
          {pains.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.08, ease }}
              whileHover={{ y: -4, borderColor: "rgba(200,240,0,0.35)" }}
              className="group rounded-2xl border border-zinc-800/80 bg-[#0c0c0a] p-6 sm:p-7 transition-colors"
            >
              <div
                className={`mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/[0.04] border border-white/[0.06] ${p.tint}`}
              >
                <p.icon className="h-5 w-5" strokeWidth={1.75} />
              </div>
              <h3 className="text-white text-lg font-semibold mb-2 leading-snug">{p.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{p.body}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15, ease }}
          className="flex flex-col sm:flex-row items-center justify-between gap-5 sm:gap-8"
        >
          <p className="text-gray-400 text-sm sm:text-base text-center sm:text-left">
            We&apos;ve helped{" "}
            <span className="text-white font-semibold">30+ businesses</span> across the US, Europe
            &amp; GCC solve exactly these problems.
          </p>
          <Link href="/contact">
            <motion.span
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-primary/40 bg-primary/10 text-primary text-sm font-medium hover:bg-primary/20 transition-colors"
            >
              Let&apos;s solve yours
              <ArrowRight className="w-4 h-4" />
            </motion.span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
