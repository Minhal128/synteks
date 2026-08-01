"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";

const points = [
  "Senior engineers — not junior farms billed as seniors",
  "Fixed or hourly — transparent scopes, no surprise retainers",
  "Web2, Web3, mobile, cloud, security & AI under one roof",
  "Timezone-friendly delivery with async-first communication",
];

export function PricingSection() {
  return (
    <section id="pricing" className="relative py-16 sm:py-20 md:py-24 overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 70% 50%, rgba(200,240,0,0.07) 0%, transparent 50%)",
        }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-primary text-xs tracking-[0.25em] uppercase mb-4 font-display">
              Market rate vs Synteks
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white mb-5 leading-tight">
              Premium quality at{" "}
              <span className="text-gradient-accent">$20/hr</span>
            </h2>
            <p className="text-gray-400 text-base sm:text-lg leading-relaxed mb-8">
              Where the market demands <span className="text-white font-medium">$30–40/hr</span> for
              comparable talent, we deliver senior-grade Web2, Web3, and mobile work for less —
              without cutting corners on architecture or security.
            </p>
            <ul className="space-y-3 mb-8">
              {points.map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300 text-sm sm:text-base">{point}</span>
                </li>
              ))}
            </ul>
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 px-7 py-3.5 btn-shiny font-semibold rounded-xl text-sm"
              >
                Book a discovery call
                <ArrowRight className="w-4 h-4" />
              </motion.button>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="rounded-2xl border border-zinc-800 bg-[#0c0c0a] p-6 sm:p-8 overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-primary/10 blur-[60px] pointer-events-none" />

              <div className="relative space-y-6">
                <div className="flex items-end justify-between gap-4 pb-6 border-b border-zinc-800">
                  <div>
                    <p className="text-xs text-gray-500 tracking-wider uppercase mb-2">Market rate</p>
                    <p className="text-3xl sm:text-4xl font-semibold text-gray-500 line-through decoration-red-500/60">
                      $30+/hr
                    </p>
                  </div>
                  <span className="text-xs px-3 py-1 rounded-full border border-zinc-700 text-gray-400">
                    Typical agency
                  </span>
                </div>

                <div className="flex items-end justify-between gap-4">
                  <div>
                    <p className="text-xs text-primary tracking-wider uppercase mb-2">Synteks rate</p>
                    <p className="text-4xl sm:text-5xl font-semibold text-gradient-accent">$20/hr</p>
                  </div>
                  <span className="text-xs px-3 py-1 rounded-full border border-primary/40 text-primary bg-primary/10">
                    Same caliber
                  </span>
                </div>

                <div className="pt-4 grid grid-cols-3 gap-3">
                  {[
                    { label: "Saved vs market", value: "~33%" },
                    { label: "Avg. project start", value: "48h" },
                    { label: "Client NPS", value: "9.4" },
                  ].map((stat) => (
                    <div
                      key={stat.label}
                      className="rounded-xl bg-zinc-900/60 border border-zinc-800 px-3 py-4 text-center"
                    >
                      <p className="text-lg sm:text-xl font-semibold text-white mb-1">{stat.value}</p>
                      <p className="text-[10px] sm:text-xs text-gray-500 leading-tight">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
