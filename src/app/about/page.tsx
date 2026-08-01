"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { FAQSection } from "@/components/FAQSection";
import { Footer } from "@/components/Footer";
import { Star, Users, Layers, BookOpen, Gem, Shield } from "lucide-react";

const teamImages = [
  { src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&auto=format&fit=crop&q=60", size: "large" },
  { src: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&auto=format&fit=crop&q=60", size: "small" },
  { src: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&auto=format&fit=crop&q=60", size: "large" },
  { src: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&auto=format&fit=crop&q=60", size: "small" },
  { src: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&auto=format&fit=crop&q=60", size: "large" },
  { src: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&auto=format&fit=crop&q=60", size: "small" },
  { src: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&auto=format&fit=crop&q=60", size: "large" },
  { src: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&auto=format&fit=crop&q=60", size: "small" },
];

const values = [
  {
    icon: Star,
    title: "Strategic Consulting",
    description: "Aligning your business goals with cutting-edge technology to create sustainable value and growth.",
  },
  {
    icon: Users,
    title: "Agile Service Delivery",
    description: "Iterative and transparent development processes ensuring high-quality results delivered on schedule.",
  },
  {
    icon: Layers,
    title: "Full-Stack Expertise",
    description: "Comprehensive solutions covering everything from cloud infrastructure to front-end excellence.",
  },
  {
    icon: BookOpen,
    title: "Technical Excellence",
    description: "Commitment to writing clean, maintainable code using the latest industry standards and best practices.",
  },
  {
    icon: Gem,
    title: "Client-Centric Success",
    description: "Dedicated account management and support to ensure our services consistently exceed your expectations.",
  },
  {
    icon: Shield,
    title: "Security & Reliability",
    description: "Enterprise-grade security protocols integrated into every stage of the service lifecycle.",
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#050505]">
      <Navbar />

      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 text-center">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-primary text-xs tracking-[0.25em] uppercase mb-4 font-display"
            >
              About Synteks
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl lg:text-7xl font-semibold text-white mb-2"
            >
              Building tomorrow.
            </motion.h1>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl lg:text-7xl font-semibold mb-6 text-gradient-accent"
            >
              Together.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto"
            >
              Synteks is a software agency for Web2, Web3, and mobile — shipping secure, scalable products at $20/hr where the market asks more.
            </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex flex-wrap justify-center gap-4 mb-16"
              >
                <a href="/contact">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-8 py-4 font-semibold rounded-xl btn-shiny"
                >
                  Get in Contact
                </motion.button>
                </a>
              </motion.div>

          <div className="relative w-full overflow-hidden mb-8">
            <motion.div
              className="flex gap-4"
              animate={{
                x: [0, -1600],
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 20,
                  ease: "linear",
                },
              }}
            >
              {[...teamImages, ...teamImages].map((image, index) => (
                <div
                  key={index}
                  className={`flex-shrink-0 overflow-hidden rounded-2xl ${
                    image.size === "large" ? "w-80 h-56" : "w-56 h-56"
                  }`}
                >
                  <img
                    src={image.src}
                    alt={`Team ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      <section className="relative py-24 bg-[#050505]">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white mb-4">
              Our Company&apos;s Values
            </h2>
            <p className="text-gray-400 text-lg">
              Development · Innovation · Security · Scalability
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-16">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex flex-col items-center text-center"
              >
                <div className="w-16 h-16 rounded-full border border-zinc-700 flex items-center justify-center mb-6 bg-zinc-900/50">
                  <value.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-400 leading-relaxed max-w-xs">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-24 bg-[#050505]">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white mb-4">
              Our Vision
            </h2>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              Building tomorrow together — Web2, Web3, and mobile products that are secure, scalable, and ready to ship.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-8"
            >
              <h3 className="text-2xl font-semibold text-white mb-4">Strategic Excellence</h3>
              <p className="text-gray-400 leading-relaxed">
                We partner with brands to define their digital future, providing data-driven strategies that achieve measurable growth and competitive advantage in a rapidly evolving market.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-8"
            >
              <h3 className="text-2xl font-semibold text-white mb-4">Innovative Technology</h3>
              <p className="text-gray-400 leading-relaxed">
                Our team leverages the latest tech stacks and AI-driven methodologies to build scalable, high-performance solutions that solve complex business challenges with precision.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-8"
            >
              <h3 className="text-2xl font-semibold text-white mb-4">User-Centric Design</h3>
              <p className="text-gray-400 leading-relaxed">
                We craft intuitive and beautiful digital experiences that resonate with users. Our design-first approach ensures that every interaction is meaningful and drives engagement.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-8"
            >
              <h3 className="text-2xl font-semibold text-white mb-4">End-to-End Delivery</h3>
              <p className="text-gray-400 leading-relaxed">
                From initial concept to final launch and beyond, we provide comprehensive support and seamless integration, ensuring your digital products excel and scale with your business.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <FAQSection />
      <Footer />
    </main>
  );
}
