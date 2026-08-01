"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqData = [
  {
    question: "What does Synteks specialize in?",
    answer:
      "Web2 products, Web3/smart contracts, mobile apps, cloud infrastructure, cybersecurity hardening, and AI/ML features — delivered as one team.",
  },
  {
    question: "Why is your rate $20/hr when the market is higher?",
    answer:
      "We run lean, work async-first, and skip agency overhead. You get senior-grade delivery at a rate typically reserved for mid-tier freelancers — without the mid-tier quality.",
  },
  {
    question: "Which stacks do you ship with?",
    answer:
      "Next.js, React Native/Flutter, Node, Solidity/Anchor, AWS/GCP, and modern AI tooling. We pick the stack that fits the product, not the other way around.",
  },
  {
    question: "Can you take a product from idea to launch?",
    answer:
      "Yes — discovery, design, build, deploy, and post-launch iteration. Fixed scopes or hourly retainers, whichever fits your stage.",
  },
  {
    question: "How do we start?",
    answer:
      "Send a brief via the contact form. We reply within one business day with a clear path: estimate, timeline, and next steps.",
  },
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="relative py-16 sm:py-20 md:py-24 bg-[#050505]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-12"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-400 text-sm sm:text-base">
            Straight answers before you book a call
          </p>
        </motion.div>

        <div className="space-y-3 sm:space-y-4">
          {faqData.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="border border-zinc-800 rounded-xl overflow-hidden bg-zinc-900/30"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left hover:bg-white/[0.02] transition-colors"
              >
                <span className="text-white font-medium text-sm sm:text-base">{faq.question}</span>
                {openIndex === index ? (
                  <Minus className="w-5 h-5 text-primary flex-shrink-0" />
                ) : (
                  <Plus className="w-5 h-5 text-gray-500 flex-shrink-0" />
                )}
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="overflow-hidden"
                  >
                    <p className="px-5 pb-5 text-gray-400 text-sm leading-relaxed">{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
