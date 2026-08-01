"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { FAQSection } from "@/components/FAQSection";
import { Footer } from "@/components/Footer";
import { PricingSection } from "@/components/PricingSection";
import { Check, Minus } from "lucide-react";
import Link from "next/link";

const engagementPlans = [
  {
    name: "HOURLY",
    price: "$20/hr",
    subtitle: "Market asks $30–40/hr",
    features: [
      "Senior engineers only",
      "Flexible scope & iterations",
      "Ideal for ongoing product work",
      "Weekly progress check-ins",
    ],
    highlighted: true,
    cta: "Start hourly",
  },
  {
    name: "FIXED SCOPE",
    price: "Custom quote",
    subtitle: "Clear milestones & budget",
    features: [
      "Defined deliverables upfront",
      "Milestone-based payments",
      "Ideal for MVPs & launches",
      "Written timeline included",
    ],
    highlighted: false,
    cta: "Request quote",
  },
  {
    name: "RETAINER",
    price: "From $2k/mo",
    subtitle: "Dedicated capacity",
    features: [
      "Reserved engineering hours",
      "Priority response SLA",
      "Ideal for product teams",
      "Rollover unused hours*",
    ],
    highlighted: false,
    cta: "Talk retainers",
  },
];

const comparisonFeatures = [
  {
    title: "Web2 / full-stack apps",
    description: "Next.js, React, Node, APIs, and production deployments.",
    hourly: true,
    fixed: true,
    retainer: true,
  },
  {
    title: "Web3 / smart contracts",
    description: "Solidity, Anchor, dApps, wallets, and audit-ready code.",
    hourly: true,
    fixed: true,
    retainer: true,
  },
  {
    title: "Mobile apps",
    description: "React Native & Flutter with backend integration.",
    hourly: true,
    fixed: true,
    retainer: true,
  },
  {
    title: "Cloud & DevOps",
    description: "AWS/GCP, CI/CD, monitoring, and cost-aware architecture.",
    hourly: true,
    fixed: true,
    retainer: true,
  },
  {
    title: "Security hardening",
    description: "Auth, reviews, and secure-by-default delivery practices.",
    hourly: true,
    fixed: true,
    retainer: true,
  },
  {
    title: "AI / ML features",
    description: "LLM integrations, pipelines, and production ML UX.",
    hourly: true,
    fixed: true,
    retainer: true,
  },
  {
    title: "Priority SLA",
    description: "Guaranteed response windows and reserved capacity.",
    hourly: false,
    fixed: false,
    retainer: true,
  },
  {
    title: "Fixed budget ceiling",
    description: "Locked quote for a defined scope — no hourly surprises.",
    hourly: false,
    fixed: true,
    retainer: false,
  },
];

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-[#050505]">
      <Navbar />

      <section className="relative pt-32 pb-12">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at 50% 0%, rgba(200,240,0,0.08) 0%, transparent 50%)",
          }}
        />
        <div className="max-w-7xl mx-auto px-6 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <p className="text-primary text-xs tracking-[0.25em] uppercase mb-4 font-display">
              Pricing
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white mb-4">
              Premium quality at{" "}
              <span className="text-gradient-accent">$20/hr</span>
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Where the market demands $30+/hr, Synteks delivers senior Web2, Web3, and mobile
              work without agency bloat.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {engagementPlans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`relative rounded-2xl p-8 ${
                  plan.highlighted
                    ? "bg-gradient-to-b from-primary/20 to-primary/5 border border-primary/30 shadow-lg shadow-primary/10"
                    : "bg-zinc-900/50 border border-zinc-800"
                }`}
              >
                <div className="text-center mb-6">
                  <p className="text-gray-400 text-sm tracking-wide mb-2">{plan.name}</p>
                  <h3 className="text-2xl font-bold text-white">{plan.price}</h3>
                  {plan.subtitle && (
                    <p className="text-primary/80 text-xs mt-2">{plan.subtitle}</p>
                  )}
                </div>

                <div className="border-t border-zinc-700/50 my-6" />

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link href="/contact">
                  <button
                    className={`w-full py-3 rounded-xl font-semibold transition-all ${
                      plan.highlighted
                        ? "btn-shiny"
                        : "bg-zinc-800 text-white border border-zinc-700 hover:bg-zinc-700"
                    }`}
                  >
                    {plan.cta}
                  </button>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <PricingSection />

      <section className="relative py-24">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-semibold text-white mb-2">
              Compare engagement models
            </h2>
            <p className="text-gray-400">What you get under each Synteks engagement type</p>
          </motion.div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[640px]">
              <thead>
                <tr className="border-b border-zinc-800">
                  <th className="text-left py-6 pr-4">
                    <p className="text-primary font-medium mb-1">Capabilities</p>
                    <p className="text-gray-400 text-sm font-normal">
                      Covered across Synteks engagements
                    </p>
                  </th>
                  <th className="text-center px-4 py-6">
                    <p className="text-white font-semibold">Hourly</p>
                  </th>
                  <th className="text-center px-4 py-6">
                    <p className="text-white font-semibold">Fixed</p>
                  </th>
                  <th className="text-center px-4 py-6">
                    <p className="text-white font-semibold">Retainer</p>
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonFeatures.map((feature, index) => (
                  <motion.tr
                    key={feature.title}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.04 }}
                    className="border-b border-zinc-800/50"
                  >
                    <td className="py-6 pr-4">
                      <p className="text-white font-medium mb-1">{feature.title}</p>
                      <p className="text-gray-400 text-sm max-w-md">{feature.description}</p>
                    </td>
                    {[feature.hourly, feature.fixed, feature.retainer].map((ok, i) => (
                      <td key={i} className="text-center px-4 py-6">
                        {ok ? (
                          <Check className="w-5 h-5 text-primary mx-auto" />
                        ) : (
                          <Minus className="w-5 h-5 text-gray-600 mx-auto" />
                        )}
                      </td>
                    ))}
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-gray-600 text-xs mt-6 text-center">
            *Retainer hour rollover terms agreed per contract.
          </p>
        </div>
      </section>

      <FAQSection />
      <Footer />
    </main>
  );
}
