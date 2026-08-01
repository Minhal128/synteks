"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { FAQSection } from "@/components/FAQSection";
import { Footer } from "@/components/Footer";
import { ArrowUpRight, Loader2, CheckCircle2 } from "lucide-react";
import { useState, useEffect } from "react";

const contactInfo = [
  {
    title: "Email",
    value: "hello@synteks.io",
    href: "mailto:hello@synteks.io",
  },
  {
    title: "Rate",
    value: "$20 / hour",
    href: "/#pricing",
  },
];

type FormState = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
  acceptTerms: boolean;
};

const empty: FormState = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  message: "",
  acceptTerms: false,
};

export default function ContactPage() {
  const [formData, setFormData] = useState<FormState>(empty);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  // ponytail: read estimate query without Suspense wrapper
  useEffect(() => {
    const q = new URLSearchParams(window.location.search);
    const estimate = q.get("estimate");
    if (!estimate) return;
    const type = q.get("type") || "—";
    const size = q.get("size") || "—";
    setFormData((prev) => ({
      ...prev,
      message:
        prev.message ||
        `Hi Synteks — interested in a project.\nEstimate: ~$${estimate} at $20/hr\nType: ${type}\nSize: ${size}\n\nDetails:`,
    }));
  }, []);

  const validate = () => {
    const next: Partial<Record<keyof FormState, string>> = {};
    if (!formData.firstName.trim()) next.firstName = "Required";
    if (!formData.lastName.trim()) next.lastName = "Required";
    if (!formData.email.trim()) next.email = "Required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      next.email = "Enter a valid email";
    if (!formData.message.trim() || formData.message.trim().length < 10)
      next.message = "Tell us a bit more (10+ chars)";
    if (!formData.acceptTerms) next.acceptTerms = "Please accept terms to continue";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await response.json();

      if (response.ok) {
        setSubmitStatus({
          type: "success",
          message: "Message sent. We'll reply within one business day.",
        });
        setFormData(empty);
        setErrors({});
      } else {
        setSubmitStatus({
          type: "error",
          message: data.error || "Something went wrong. Please try again.",
        });
      }
    } catch {
      setSubmitStatus({
        type: "error",
        message: "Failed to send. Check your connection and try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClass = (name: keyof FormState) =>
    "w-full bg-zinc-900/60 border rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none transition-colors " +
    (errors[name]
      ? "border-red-500/60 focus:border-red-400"
      : "border-zinc-700 focus:border-primary/50");

  const set =
    (name: keyof FormState) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setFormData({ ...formData, [name]: e.target.value });

  return (
    <main className="min-h-screen bg-[#050505]">
      <Navbar />

      <section className="relative pt-32 pb-20">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at 50% 0%, rgba(200,240,0,0.08) 0%, transparent 50%)",
          }}
        />
        <div className="max-w-6xl mx-auto px-6 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12 sm:mb-16"
          >
            <p className="text-primary text-xs tracking-[0.25em] uppercase mb-4 font-display">
              Contact
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold text-gradient mb-4">
              Let&apos;s build something
            </h1>
            <p className="text-gray-400 text-sm sm:text-base max-w-lg mx-auto">
              Tell us about your product. We reply fast — usually within one business day.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="lg:col-span-2 bg-zinc-900/40 border border-zinc-800 rounded-2xl p-6 sm:p-8"
            >
              {submitStatus.type === "success" ? (
                <div className="flex flex-col items-center justify-center py-16 text-center">
                  <CheckCircle2 className="w-14 h-14 text-primary mb-4" />
                  <h3 className="text-2xl font-semibold text-white mb-2">Message sent</h3>
                  <p className="text-gray-400 mb-6">{submitStatus.message}</p>
                  <button
                    onClick={() => setSubmitStatus({ type: null, message: "" })}
                    className="px-6 py-2.5 border border-zinc-700 rounded-lg text-sm text-gray-300 hover:border-primary/40 hover:text-primary transition-colors"
                  >
                    Send another
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <label className="text-white text-sm font-medium">First Name</label>
                        <span className="text-primary text-xs">*</span>
                      </div>
                      <input
                        type="text"
                        required
                        placeholder="Alex"
                        autoComplete="given-name"
                        value={formData.firstName}
                        onChange={set("firstName")}
                        className={inputClass("firstName")}
                      />
                      {errors.firstName && (
                        <p className="mt-1.5 text-xs text-red-400">{errors.firstName}</p>
                      )}
                    </div>
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <label className="text-white text-sm font-medium">Last Name</label>
                        <span className="text-primary text-xs">*</span>
                      </div>
                      <input
                        type="text"
                        required
                        placeholder="Rivera"
                        autoComplete="family-name"
                        value={formData.lastName}
                        onChange={set("lastName")}
                        className={inputClass("lastName")}
                      />
                      {errors.lastName && (
                        <p className="mt-1.5 text-xs text-red-400">{errors.lastName}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <label className="text-white text-sm font-medium">Email</label>
                        <span className="text-primary text-xs">*</span>
                      </div>
                      <input
                        type="email"
                        required
                        placeholder="you@company.com"
                        autoComplete="email"
                        value={formData.email}
                        onChange={set("email")}
                        className={inputClass("email")}
                      />
                      {errors.email && (
                        <p className="mt-1.5 text-xs text-red-400">{errors.email}</p>
                      )}
                    </div>
                    <div>
                      <label className="text-white text-sm font-medium mb-2 block">
                        Phone (optional)
                      </label>
                      <input
                        type="tel"
                        placeholder="+1 …"
                        autoComplete="tel"
                        value={formData.phone}
                        onChange={set("phone")}
                        className={inputClass("phone")}
                      />
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <label className="text-white text-sm font-medium">Project brief</label>
                      <span className="text-primary text-xs">*</span>
                    </div>
                    <textarea
                      required
                      rows={5}
                      placeholder="What are you building? Timeline? Stack preferences?"
                      value={formData.message}
                      onChange={set("message")}
                      className={inputClass("message") + " resize-none"}
                    />
                    {errors.message && (
                      <p className="mt-1.5 text-xs text-red-400">{errors.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="flex items-start gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formData.acceptTerms}
                        onChange={(e) =>
                          setFormData({ ...formData, acceptTerms: e.target.checked })
                        }
                        className="mt-1 w-4 h-4 accent-[#c8f000] rounded"
                      />
                      <span className="text-gray-400 text-sm">
                        I accept the Terms &amp; Conditions and Privacy Policy.
                      </span>
                    </label>
                    {errors.acceptTerms && (
                      <p className="mt-1.5 text-xs text-red-400">{errors.acceptTerms}</p>
                    )}
                  </div>

                  {submitStatus.type === "error" && (
                    <div className="p-4 rounded-lg bg-red-500/10 border border-red-500/40 text-red-400 text-sm">
                      {submitStatus.message}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full btn-shiny disabled:opacity-50 disabled:cursor-not-allowed font-semibold py-3.5 rounded-xl flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Sending…
                      </>
                    ) : (
                      "Send message"
                    )}
                  </button>
                </form>
              )}
            </motion.div>

            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={info.title}
                  href={info.href}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  className="bg-zinc-900/40 border border-zinc-800 rounded-2xl p-6 flex items-center justify-between hover:border-primary/30 transition-colors block"
                >
                  <div>
                    <h3 className="text-white font-semibold mb-1">{info.title}</h3>
                    <p className="text-gray-400 text-sm">{info.value}</p>
                  </div>
                  <span className="w-10 h-10 bg-zinc-800 border border-zinc-700 rounded-lg flex items-center justify-center">
                    <ArrowUpRight className="w-5 h-5 text-primary" />
                  </span>
                </motion.a>
              ))}

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="rounded-2xl border border-primary/20 bg-primary/5 p-6"
              >
                <p className="text-primary text-xs tracking-wider uppercase mb-2 font-display">
                  Why Synteks
                </p>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Senior delivery at <strong className="text-white">$20/hr</strong> — where the
                  market asks $30+. Web2, Web3, mobile, and AI under one roof.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <FAQSection />
      <Footer />
    </main>
  );
}
