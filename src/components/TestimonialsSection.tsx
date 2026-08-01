"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Star } from "lucide-react";
import Link from "next/link";

const testimonials = [
  {
    quote:
      "Synteks delivered our ERC20 contracts and launch dashboard ahead of schedule. Clean code, clear comms, zero drama.",
    name: "Marcus T.",
    country: "United States",
    tag: "Smart Contracts",
    initial: "M",
  },
  {
    quote:
      "We needed an AI pipeline for document extraction wired into our SaaS. They shipped a production-ready system in three weeks.",
    name: "Elena K.",
    country: "Denmark",
    tag: "AI Software",
    initial: "E",
  },
  {
    quote:
      "Best Upwork hire we've made. Mobile app + backend API, polished UI, and they stayed for phase two without hand-holding.",
    name: "James R.",
    country: "United Kingdom",
    tag: "Mobile Apps",
    initial: "J",
  },
  {
    quote:
      "Web3 frontend that actually talks to our contracts correctly. Gas-aware UX and wallet flows that our users don't hate.",
    name: "Priya S.",
    country: "Singapore",
    tag: "Web3 dApps",
    initial: "P",
  },
  {
    quote:
      "Migrated our legacy Node stack to a modern Next.js + cloud setup. Performance up, bills down. Would rehire tomorrow.",
    name: "Omar H.",
    country: "UAE",
    tag: "Cloud Solutions",
    initial: "O",
  },
  {
    quote:
      "Security review + auth rewrite for our fintech MVP. Found issues others missed and fixed them without slowing the roadmap.",
    name: "Laura B.",
    country: "Germany",
    tag: "Cyber Security",
    initial: "L",
  },
];

const PAGE = 3;

export function TestimonialsSection() {
  const [page, setPage] = useState(0);
  const pages = Math.ceil(testimonials.length / PAGE);

  useEffect(() => {
    const id = setInterval(() => setPage((p) => (p + 1) % pages), 5000);
    return () => clearInterval(id);
  }, [pages]);

  const visible = testimonials.slice(page * PAGE, page * PAGE + PAGE);

  return (
    <section className="relative py-16 sm:py-20 md:py-24 overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 30% 40%, rgba(200,240,0,0.06) 0%, transparent 50%)",
        }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10 sm:mb-12">
          <div>
            <p className="text-primary text-xs tracking-[0.25em] uppercase mb-3 font-display">
              Social Proof
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white mb-3">
              30+ Clients.{" "}
              <span className="text-gradient-accent">Zero Regrets.</span>
            </h2>
            <p className="text-gray-500 text-sm sm:text-base">
              Real reviews from verified Upwork and Fiverr clients, unedited.
            </p>
          </div>
          <Link
            href="/contact"
            className="self-start sm:self-auto inline-flex items-center px-5 py-2.5 rounded-full border border-primary/40 text-primary text-sm hover:bg-primary/10 transition-colors"
          >
            Start your project →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
          {visible.map((t, i) => (
            <motion.article
              key={`${t.name}-${page}`}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
              className="relative rounded-2xl border border-primary/15 bg-[#0c0c0a]/90 p-5 sm:p-6 shadow-[0_0_40px_rgba(200,240,0,0.04)] flex flex-col min-h-[260px]"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, s) => (
                    <Star key={s} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span className="text-4xl leading-none text-primary/30 font-serif select-none">
                  &ldquo;
                </span>
              </div>

              <p className="text-gray-300 text-sm leading-relaxed flex-1 mb-6">{t.quote}</p>

              <div className="flex items-center justify-between gap-3 pt-4 border-t border-zinc-800/80">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-9 h-9 rounded-full bg-primary/15 border border-primary/30 flex items-center justify-center flex-shrink-0">
                    <span className="text-primary text-sm font-semibold">{t.initial}</span>
                  </div>
                  <div className="min-w-0">
                    <p className="text-white text-sm font-semibold truncate">{t.name}</p>
                    <p className="text-gray-500 text-xs truncate">{t.country}</p>
                  </div>
                </div>
                <span className="text-[10px] tracking-wider uppercase px-2.5 py-1 rounded-full border border-primary/25 text-primary whitespace-nowrap">
                  {t.tag}
                </span>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="flex justify-center gap-2 mt-8">
          {[...Array(pages)].map((_, i) => (
            <button
              key={i}
              onClick={() => setPage(i)}
              aria-label={`Testimonials page ${i + 1}`}
              className={`h-1.5 rounded-full transition-all ${
                i === page ? "w-8 bg-primary" : "w-1.5 bg-zinc-700 hover:bg-zinc-500"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
