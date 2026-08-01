"use client";

import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    src: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=1600&h=900&fit=crop",
    name: "FinTrack Pro",
    description: "AI-powered financial analytics dashboard with real-time market insights",
    link: "https://fintrack.demo",
  },
  {
    src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1600&h=900&fit=crop",
    name: "CloudSync CRM",
    description: "Enterprise customer relationship management with cloud integration",
    link: "https://cloudsync.demo",
  },
  {
    src: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=1600&h=900&fit=crop",
    name: "DevOps Hub",
    description: "Unified DevOps platform for CI/CD pipelines and monitoring",
    link: "https://devopshub.demo",
  },
  {
    src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1600&h=900&fit=crop",
    name: "DataViz Studio",
    description: "Interactive data visualization and business intelligence tool",
    link: "https://dataviz.demo",
  },
  {
    src: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1600&h=900&fit=crop",
    name: "SecureVault",
    description: "End-to-end encrypted file storage and sharing platform",
    link: "https://securevault.demo",
  },
];

export function MockupSection() {
  const [activeIndex, setActiveIndex] = useState<number>(1);

  return (
    <section className="py-20 relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background: "radial-gradient(ellipse at 50% 50%, rgba(30, 58, 138, 0.3) 0%, transparent 60%)",
        }}
      />
      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="text-center mb-12">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary text-sm mb-4 tracking-wider"
          >
            OUR WORK
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold"
            style={{ fontStyle: "italic" }}
          >
            <span className="text-white">Featured </span>
            <span className="text-primary">Projects</span>
          </motion.h2>
        </div>

        <motion.div
          initial={{ opacity: 0, translateY: 20 }}
          whileInView={{ opacity: 1, translateY: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: 0.2 }}
          className="relative w-full"
        >
          <div className="flex w-full items-center justify-center gap-2">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className="relative cursor-pointer overflow-hidden rounded-2xl border border-zinc-800/50"
                initial={{ width: "4rem", height: "20rem" }}
                animate={{
                  width: activeIndex === index ? "32rem" : "4rem",
                  height: "20rem",
                }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                onClick={() => window.open(project.link, "_blank")}
                onHoverStart={() => setActiveIndex(index)}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10" />
                
                <AnimatePresence>
                  {activeIndex === index && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 20 }}
                      transition={{ duration: 0.3 }}
                      className="absolute bottom-0 left-0 right-0 p-6 z-20"
                    >
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                        <span className="text-green-400 text-xs font-medium">LIVE</span>
                      </div>
                      <h3 className="text-white text-xl font-bold mb-2">{project.name}</h3>
                      <p className="text-gray-300 text-sm mb-4">{project.description}</p>
                      <div className="flex items-center gap-2 text-primary text-sm hover:text-primary/80 transition-colors">
                        <span>View Project</span>
                        <ExternalLink className="w-4 h-4" />
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                <AnimatePresence>
                  {activeIndex !== index && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="absolute inset-0 flex items-center justify-center z-20"
                    >
                      <span
                        className="text-white/80 text-sm font-medium whitespace-nowrap"
                        style={{
                          writingMode: "vertical-rl",
                          textOrientation: "mixed",
                        }}
                      >
                        {project.name}
                      </span>
                    </motion.div>
                  )}
                </AnimatePresence>

                <img
                  src={project.src}
                  className="w-full h-full object-cover"
                  alt={project.name}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
