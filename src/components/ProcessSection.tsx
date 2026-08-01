"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    n: "01",
    title: "Discovery Call",
    badge: "Free · No commitment",
    body: "Tell us your business goal. We ask the right questions, map the solution, and tell you exactly what's possible — and what's not.",
  },
  {
    n: "02",
    title: "Solution Roadmap",
    badge: "Delivered in 24 hours",
    body: "You get a custom plan: scope, timeline, tech approach. No vague estimates, no hidden costs. You know exactly what you're getting.",
  },
  {
    n: "03",
    title: "Build & Iterate",
    badge: "Weekly check-ins",
    body: "We build in sprints with weekly updates. You see real progress before final delivery. No black-box development, no surprises.",
  },
  {
    n: "04",
    title: "Launch & Support",
    badge: "We stay until it works",
    body: "Deployment, testing, and full handoff. We don't disappear after payment. Post-launch support is included.",
  },
];

const perks = [
  "No upfront payment required",
  "Clear timelines from day one",
  "You own 100% of the code",
];

const ease = [0.22, 1, 0.36, 1] as const;

export function ProcessSection() {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = gridRef.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const cards = el.querySelectorAll<HTMLElement>("[data-step]");
    const ctx = gsap.context(() => {
      gsap.from(cards, {
        y: 48,
        opacity: 0,
        duration: 0.7,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 78%",
          once: true,
        },
      });
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <section className="relative py-20 sm:py-24 md:py-28 overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 45% at 50% 0%, rgba(200,240,0,0.06) 0%, transparent 55%)",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease }}
            className="text-primary text-xs sm:text-sm tracking-[0.28em] uppercase mb-5 font-display"
          >
            How we work
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.05, ease }}
            className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight mb-5"
          >
            <span className="text-white">Simple Process. </span>
            <span className="text-gradient-accent">No Surprises.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1, ease }}
            className="text-gray-400 text-sm sm:text-base max-w-lg mx-auto leading-relaxed"
          >
            Most projects go live within 2 weeks. Here&apos;s exactly what working together looks
            like.
          </motion.p>
        </div>

        <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-12 sm:mb-14">
          {steps.map((s) => (
            <motion.div
              key={s.n}
              data-step
              whileHover={{
                y: -6,
                borderColor: "rgba(200,240,0,0.45)",
                boxShadow: "0 0 32px rgba(200,240,0,0.08)",
              }}
              transition={{ duration: 0.25 }}
              className="rounded-2xl border border-primary/20 bg-[#0c0c0a] p-5 sm:p-6 flex flex-col"
            >
              <span className="mb-5 inline-flex h-9 w-9 items-center justify-center rounded-full bg-primary/15 text-primary text-xs font-semibold tracking-wide">
                {s.n}
              </span>
              <h3 className="text-white text-lg font-semibold mb-1.5">{s.title}</h3>
              <p className="text-primary text-[10px] sm:text-[11px] tracking-[0.14em] uppercase mb-3 font-medium">
                {s.badge}
              </p>
              <p className="text-gray-400 text-sm leading-relaxed">{s.body}</p>
            </motion.div>
          ))}
        </div>

        <motion.ul
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease }}
          className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4 sm:gap-8 md:gap-12"
        >
          {perks.map((perk) => (
            <li key={perk} className="flex items-center gap-2 text-gray-400 text-sm">
              <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-primary/15 text-primary">
                <Check className="h-3 w-3" strokeWidth={3} />
              </span>
              {perk}
            </li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
