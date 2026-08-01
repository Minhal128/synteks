"use client";

import { motion, useInView } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { FAQSection } from "@/components/FAQSection";
import { Footer } from "@/components/Footer";
import { ServicesSection } from "@/components/ServicesSection";
import { useRef, useEffect, useState } from "react";
import { ArrowRight, TrendingUp, Users, Rocket } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const stats = [
  { value: 30, suffix: "+", label: "Clients shipped with zero regrets", icon: Users },
  { value: 50, suffix: "+", label: "Products across Web2, Web3 & mobile", icon: Rocket },
  { value: 98, suffix: "%", label: "Client retention & rehire rate", icon: TrendingUp },
];

const mockupImages = [
  { src: "/mockup1.png", title: "Auxamate", description: "AI-powered automation agents for seamless business workflows", link: "https://auxamate.vercel.app/" },
  { src: "/mockup2.png", title: "The Muneeb Edits", description: "Professional video editing portfolio showcasing cinematic excellence", link: "https://themuneebedits.netlify.app/" },
  { src: "/mockup3.png", title: "Treat & Gather", description: "Mobile app connecting families for memorable gatherings and events" },
  { src: "/mockup4.png", title: "RYDO", description: "Smart carpool platform helping students share rides and save costs" },
  { src: "/1.jpeg", title: "BMBL Token", description: "Blockchain meme coin built for the next generation of crypto enthusiasts", link: "https://bmblance.vercel.app/" },
  { src: "/2.jpeg", title: "AI Ledger", description: "Decentralized crowdfunding platform powered by blockchain technology", link: "https://ailedger.netlify.app/" },
  { src: "/3.jpeg", title: "RemitGo", description: "Fast and secure international money transfer mobile application" },
  { src: "/4.jpeg", title: "Labwards", description: "Next-gen gaming and casino platform with immersive experiences", link: "https://earnlabfrontend.vercel.app/" },
  { src: "/6.jpeg", title: "Helvita", description: "Systematic money transfer solution for seamless global transactions", link: "https://helvitafrontend.vercel.app/" },
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <span ref={ref}>
      {count.toLocaleString()}
      <span className="text-primary">{suffix}</span>
    </span>
  );
}

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-[#050505]">
      <Navbar />

      <section className="relative min-h-[70vh] flex flex-col items-center justify-center overflow-hidden pt-24 pb-12">
        <div className="absolute inset-0 bg-[#050505]" />
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] max-w-[800px] h-[40vh] rounded-full blur-[100px] opacity-40 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse, rgba(200,240,0,0.3) 0%, transparent 70%)",
          }}
        />

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-800/60 border border-zinc-700/50 mb-8"
          >
            <span className="px-2 py-0.5 text-xs font-medium bg-primary/20 text-primary rounded">
              Services
            </span>
            <span className="text-sm text-gray-300">Web2 · Web3 · Mobile · AI</span>
            <ArrowRight className="w-4 h-4 text-gray-400" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tight mb-4"
          >
            <span className="text-gradient">Software that</span>
            <br />
            <span className="text-gradient-accent">actually ships</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-base md:text-lg text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            Synteks designs and builds secure, scalable products — from SaaS and mobile apps to
            smart contracts and AI pipelines — at $20/hr.
          </motion.p>

          <Link href="/contact">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-3.5 btn-shiny font-semibold rounded-xl text-sm"
            >
              Start a project
            </motion.button>
          </Link>
        </div>
      </section>

      <ServicesSection />

      <section className="py-20 border-t border-zinc-800/50 relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 60% 40% at 50% 0%, rgba(200,240,0,0.06) 0%, transparent 70%)",
          }}
        />
        <div className="max-w-6xl mx-auto px-6 relative">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-zinc-800/50 flex items-center justify-center border border-zinc-700/50">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <div className="text-5xl md:text-6xl font-bold text-white mb-4">
                    <Counter value={stat.value} suffix={stat.suffix} />
                  </div>
                  <p className="text-gray-400">{stat.label}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-zinc-800/60 border border-zinc-700/50 rounded-full mb-6"
            >
              <Rocket className="w-4 h-4 text-primary" />
              <span className="text-gray-300 text-sm font-medium">Featured Work</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-semibold mb-4"
            >
              <span className="text-gradient">Our </span>
              <span className="text-gradient-accent">Portfolio</span>
            </motion.h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Selected builds across Web2, Web3, mobile, and AI
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mockupImages.map((item, index) => {
              const CardWrapper = item.link ? "a" : "div";
              const cardProps = item.link
                ? { href: item.link, target: "_blank", rel: "noopener noreferrer" }
                : {};
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.45, delay: (index % 3) * 0.08 }}
                  className="group relative rounded-2xl overflow-hidden bg-zinc-900/50 border border-zinc-800/50"
                  whileHover={{ scale: 1.02, y: -6 }}
                >
                  <CardWrapper {...cardProps} className="block">
                    <div className="relative aspect-video">
                      <Image
                        src={item.src}
                        alt={item.title}
                        width={600}
                        height={338}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <h3 className="text-white font-semibold text-lg mb-1">{item.title}</h3>
                      <p className="text-gray-400 text-sm line-clamp-2">{item.description}</p>
                    </div>
                  </CardWrapper>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <FAQSection />
      <Footer />
    </main>
  );
}
