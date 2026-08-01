import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { LaptopSection } from "@/components/LaptopSection";
import { ServicesSection } from "@/components/ServicesSection";
import { PricingSection } from "@/components/PricingSection";
import { PortfolioSection } from "@/components/PortfolioSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { FAQSection } from "@/components/FAQSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050505]">
      <Navbar />
      <Hero />
      <LaptopSection />
      <ServicesSection />
      <PricingSection />
      <PortfolioSection />
      <TestimonialsSection />
      <FAQSection />
      <Footer />
    </main>
  );
}
