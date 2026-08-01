"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Check, ArrowRight } from "lucide-react";
import Link from "next/link";

const RATE = 20; // Synteks $/hr

const TYPES = [
  { id: "web2", label: "Web2 / SaaS", base: 40 },
  { id: "web3", label: "Web3 / dApp", base: 55 },
  { id: "mobile", label: "Mobile App", base: 50 },
  { id: "ai", label: "AI / ML", base: 45 },
  { id: "cyber", label: "Cyber Security", base: 35 },
] as const;

const SIZES = [
  { id: "mvp", label: "MVP", mult: 1, desc: "Core features, 1–2 weeks" },
  { id: "standard", label: "Standard", mult: 1.6, desc: "Full product, 2–4 weeks" },
  { id: "complex", label: "Complex", mult: 2.4, desc: "Scale + polish, 4–8 weeks" },
] as const;

const EXTRAS = [
  { id: "design", label: "UI/UX design", hours: 12 },
  { id: "admin", label: "Admin dashboard", hours: 16 },
  { id: "auth", label: "Auth & payments", hours: 10 },
  { id: "audit", label: "Security review", hours: 14 },
  { id: "deploy", label: "Cloud deploy + CI", hours: 8 },
] as const;

type Props = { open: boolean; onClose: () => void };

export function EstimateModal({ open, onClose }: Props) {
  const [type, setType] = useState<(typeof TYPES)[number]["id"]>("web2");
  const [size, setSize] = useState<(typeof SIZES)[number]["id"]>("standard");
  const [extras, setExtras] = useState<string[]>([]);

  const result = useMemo(() => {
    const t = TYPES.find((x) => x.id === type)!;
    const s = SIZES.find((x) => x.id === size)!;
    const extraHrs = EXTRAS.filter((e) => extras.includes(e.id)).reduce((a, e) => a + e.hours, 0);
    const hours = Math.round(t.base * s.mult + extraHrs);
    const low = Math.round(hours * 0.85);
    const high = Math.round(hours * 1.15);
    return {
      hours,
      low,
      high,
      costLow: low * RATE,
      costHigh: high * RATE,
      mid: hours * RATE,
    };
  }, [type, size, extras]);

  const toggleExtra = (id: string) =>
    setExtras((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]));

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[90] flex items-end sm:items-center justify-center p-0 sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <button
            type="button"
            aria-label="Close"
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            onClick={onClose}
          />

          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 40, opacity: 0 }}
            transition={{ type: "spring", stiffness: 320, damping: 30 }}
            className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto rounded-t-2xl sm:rounded-2xl border border-zinc-800 bg-[#0c0c0a] p-5 sm:p-7 shadow-2xl"
          >
            <div className="flex items-start justify-between gap-4 mb-6">
              <div>
                <p className="text-primary text-[10px] tracking-[0.25em] uppercase font-display mb-2">
                  Instant estimate
                </p>
                <h2 className="text-xl sm:text-2xl font-semibold text-white">
                  Get a price at ${RATE}/hr
                </h2>
                <p className="text-gray-500 text-sm mt-1">
                  Same idea as a scope calculator — tuned for Synteks rates.
                </p>
              </div>
              <button
                type="button"
                onClick={onClose}
                className="p-2 rounded-lg hover:bg-white/5 text-gray-400"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <p className="text-xs text-gray-500 uppercase tracking-wider mb-2">Project type</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mb-5">
              {TYPES.map((t) => (
                <button
                  key={t.id}
                  type="button"
                  onClick={() => setType(t.id)}
                  className={`px-3 py-2.5 rounded-xl text-sm border transition-colors ${
                    type === t.id
                      ? "border-primary/50 bg-primary/10 text-primary"
                      : "border-zinc-800 text-gray-300 hover:border-zinc-600"
                  }`}
                >
                  {t.label}
                </button>
              ))}
            </div>

            <p className="text-xs text-gray-500 uppercase tracking-wider mb-2">Scope size</p>
            <div className="space-y-2 mb-5">
              {SIZES.map((s) => (
                <button
                  key={s.id}
                  type="button"
                  onClick={() => setSize(s.id)}
                  className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-left border transition-colors ${
                    size === s.id
                      ? "border-primary/50 bg-primary/10"
                      : "border-zinc-800 hover:border-zinc-600"
                  }`}
                >
                  <span>
                    <span className="block text-sm text-white font-medium">{s.label}</span>
                    <span className="text-xs text-gray-500">{s.desc}</span>
                  </span>
                  {size === s.id && <Check className="w-4 h-4 text-primary" />}
                </button>
              ))}
            </div>

            <p className="text-xs text-gray-500 uppercase tracking-wider mb-2">Add-ons</p>
            <div className="flex flex-wrap gap-2 mb-6">
              {EXTRAS.map((e) => (
                <button
                  key={e.id}
                  type="button"
                  onClick={() => toggleExtra(e.id)}
                  className={`px-3 py-1.5 rounded-full text-xs border transition-colors ${
                    extras.includes(e.id)
                      ? "border-primary/50 bg-primary/10 text-primary"
                      : "border-zinc-800 text-gray-400 hover:border-zinc-600"
                  }`}
                >
                  {e.label}
                </button>
              ))}
            </div>

            <div className="rounded-2xl border border-primary/20 bg-primary/5 p-5 mb-5">
              <p className="text-xs text-primary tracking-wider uppercase mb-2 font-display">
                Your estimate · ${RATE}/hr
              </p>
              <p className="text-3xl sm:text-4xl font-semibold text-gradient-accent mb-1">
                ${result.costLow.toLocaleString()} – ${result.costHigh.toLocaleString()}
              </p>
              <p className="text-sm text-gray-400">
                ~{result.low}–{result.high} hrs · mid ≈ ${result.mid.toLocaleString()}
              </p>
              <p className="text-xs text-gray-600 mt-3">
                Market at $30/hr would be ~${(result.costLow * 1.5).toLocaleString()}–
                ${(result.costHigh * 1.5).toLocaleString()}. You save ~33%.
              </p>
            </div>

            <Link
              href={`/contact?estimate=${result.mid}&type=${type}&size=${size}`}
              onClick={onClose}
              className="w-full btn-shiny font-semibold py-3.5 rounded-xl flex items-center justify-center gap-2 text-sm"
            >
              Lock this in — contact us
              <ArrowRight className="w-4 h-4" />
            </Link>
            <p className="text-center text-[11px] text-gray-600 mt-3">
              Free discovery call · No commitment · Flat quote on request
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
