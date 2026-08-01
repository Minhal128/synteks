"use client";

import { useCallback, useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { PainPointsSection } from "@/components/PainPointsSection";
import { ProcessSection } from "@/components/ProcessSection";
import { ServicesSection } from "@/components/ServicesSection";
import { PricingSection } from "@/components/PricingSection";
import { PortfolioSection } from "@/components/PortfolioSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { FAQSection } from "@/components/FAQSection";
import { Footer } from "@/components/Footer";
import { IntroLoader } from "@/components/IntroLoader";
import { AnimatePresence } from "framer-motion";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const onDone = useCallback(() => setLoading(false), []);

  return (
    <>
      <AnimatePresence>{loading && <IntroLoader onDone={onDone} />}</AnimatePresence>
      <main
        className={`min-h-screen bg-[#050505] transition-opacity duration-500 ${
          loading ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      >
        <Navbar />
        <Hero />
        <PainPointsSection />
        <ProcessSection />
        <ServicesSection />
        <PricingSection />
        <PortfolioSection />
        <TestimonialsSection />
        <FAQSection />
        <Footer />
      </main>
    </>
  );
}
