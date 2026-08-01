"use client";

import { motion } from "framer-motion";
import { Monitor, Boxes, Smartphone, Cloud, ShieldCheck, Cpu } from "lucide-react";

const services = [
  {
    icon: Monitor,
    title: "Web 2.0",
    description: "Full-stack apps, SaaS, and high-performance marketing sites that convert.",
  },
  {
    icon: Boxes,
    title: "Web 3.0",
    description: "Smart contracts, dApps, wallets, and token systems built for mainnet reality.",
  },
  {
    icon: Smartphone,
    title: "Mobile Apps",
    description: "React Native & Flutter products with polished UX and solid backend plumbing.",
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    description: "AWS / GCP architecture, CI/CD, and infra that scales without surprise bills.",
  },
  {
    icon: ShieldCheck,
    title: "Cyber Security",
    description: "Hardened auth, audits, and secure-by-default practices baked into delivery.",
  },
  {
    icon: Cpu,
    title: "AI / ML",
    description: "LLM features, automation, and data pipelines that actually ship to production.",
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="py-16 sm:py-20 md:py-24 relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-40 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 50% 0%, rgba(200,240,0,0.08) 0%, transparent 55%)",
        }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
        <div className="text-center mb-12 sm:mb-16">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary text-xs sm:text-sm tracking-[0.25em] uppercase mb-4 font-display"
          >
            What we build
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white"
          >
            End-to-end software{" "}
            <span className="text-gradient-accent">delivery</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-0 border border-zinc-800/80 rounded-2xl overflow-hidden">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className={`group flex flex-col items-center text-center px-4 py-8 sm:py-10 transition-colors hover:bg-primary/[0.04] ${
                index < services.length - 1 ? "border-r border-zinc-800/60" : ""
              } ${index < 2 ? "border-b md:border-b lg:border-b-0 border-zinc-800/60" : ""} ${
                index < 4 ? "md:border-b lg:border-b-0 border-zinc-800/60" : ""
              }`}
            >
              <service.icon
                className="w-8 h-8 sm:w-9 sm:h-9 text-primary mb-4 stroke-[1.5] group-hover:scale-110 transition-transform"
                strokeWidth={1.5}
              />
              <h3 className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-white mb-2">
                {service.title}
              </h3>
              <p className="text-[11px] sm:text-xs text-gray-500 leading-relaxed hidden sm:block">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-10 sm:mt-12 text-center font-display text-[10px] sm:text-xs tracking-[0.3em] text-primary uppercase"
        >
          Development · Innovation · Security · Scalability
        </motion.p>
      </div>
    </section>
  );
}
