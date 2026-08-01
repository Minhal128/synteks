"use client";

import { motion } from "framer-motion";
import ScrollStack, { ScrollStackItem } from "./ScrollStack";

const projects = [
  {
    title: "E-Commerce Dashboard",
    description: "A comprehensive analytics dashboard for tracking sales, inventory, and customer insights in real-time.",
    image: "ecommerce",
    tech: ["Next.js", "Tailwind", "Stripe"],
  },
  {
    title: "AI Content Platform",
    description: "An AI-powered content creation platform that helps businesses generate and manage marketing materials.",
    image: "ai-content",
    tech: ["React", "OpenAI", "Node.js"],
  },
  {
    title: "Healthcare Management",
    description: "A complete healthcare management system for clinics and hospitals with patient records and scheduling.",
    image: "healthcare",
    tech: ["TypeScript", "PostgreSQL", "AWS"],
  },
];

function ProjectMockup({ type }: { type: string }) {
  if (type === "ecommerce") {
    return (
      <div className="relative w-full h-full bg-gradient-to-br from-zinc-900 to-zinc-800 rounded-2xl overflow-hidden border border-zinc-700/50">
        <div className="absolute top-0 left-0 right-0 h-8 bg-zinc-800/80 flex items-center px-3 gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-500" />
        </div>
        <div className="pt-12 px-4 pb-4">
          <div className="grid grid-cols-4 gap-3 mb-4">
            {[
              { label: "Revenue", value: "$124.5k", change: "+12%" },
              { label: "Orders", value: "1,429", change: "+8%" },
              { label: "Customers", value: "892", change: "+15%" },
              { label: "Products", value: "156", change: "+3%" },
            ].map((stat, i) => (
              <div key={i} className="bg-zinc-800/50 rounded-xl p-3 border border-zinc-700/30">
                <p className="text-[10px] text-gray-400">{stat.label}</p>
                <p className="text-lg font-semibold text-white">{stat.value}</p>
                <p className="text-[10px] text-green-400">{stat.change}</p>
              </div>
            ))}
          </div>
          <div className="bg-zinc-800/50 rounded-xl p-4 border border-zinc-700/30">
            <p className="text-xs text-white mb-3">Sales Overview</p>
            <svg className="w-full h-20" viewBox="0 0 200 60">
              <path d="M0,50 Q25,45 50,40 T100,30 T150,20 T200,10" fill="none" stroke="#c8f000" strokeWidth="2" />
              <path d="M0,50 Q25,45 50,40 T100,30 T150,20 T200,10 L200,60 L0,60 Z" fill="url(#limeGrad)" />
              <defs>
                <linearGradient id="limeGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#c8f000" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#c8f000" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
      </div>
    );
  }

  if (type === "ai-content") {
    return (
      <div className="relative w-full h-full bg-gradient-to-br from-zinc-900 to-zinc-800 rounded-2xl overflow-hidden border border-zinc-700/50">
        <div className="absolute top-0 left-0 right-0 h-8 bg-zinc-800/80 flex items-center px-3 gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-500" />
        </div>
        <div className="pt-12 px-4 pb-4 flex gap-4">
          <div className="flex-1 space-y-3">
            <div className="bg-zinc-800/50 rounded-xl p-3 border border-zinc-700/30">
              <p className="text-xs text-white mb-2">Content Generator</p>
              <div className="bg-zinc-900/50 rounded-lg p-2 text-[10px] text-gray-400">
                Generate blog posts, social media content, and marketing copy with AI...
              </div>
            </div>
            <div className="bg-zinc-800/50 rounded-xl p-3 border border-zinc-700/30">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-6 h-6 rounded-full bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center">
                  <span className="text-[8px] text-white">AI</span>
                </div>
                <p className="text-xs text-white">AI Assistant</p>
              </div>
              <div className="space-y-2">
                <div className="bg-primary/20 rounded-lg p-2 text-[10px] text-primary/80">
                  Here is your generated content...
                </div>
              </div>
            </div>
          </div>
          <div className="w-32 space-y-2">
            <div className="bg-zinc-800/50 rounded-xl p-2 border border-zinc-700/30">
              <p className="text-[10px] text-gray-400">Templates</p>
              <p className="text-sm font-semibold text-white">24</p>
            </div>
            <div className="bg-zinc-800/50 rounded-xl p-2 border border-zinc-700/30">
              <p className="text-[10px] text-gray-400">Generated</p>
              <p className="text-sm font-semibold text-white">1.2k</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full h-full bg-gradient-to-br from-zinc-900 to-zinc-800 rounded-2xl overflow-hidden border border-zinc-700/50">
      <div className="absolute top-0 left-0 right-0 h-8 bg-zinc-800/80 flex items-center px-3 gap-1.5">
        <div className="w-2.5 h-2.5 rounded-full bg-red-500" />
        <div className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
        <div className="w-2.5 h-2.5 rounded-full bg-green-500" />
      </div>
      <div className="pt-12 px-4 pb-4">
        <div className="flex gap-4">
          <div className="w-40 space-y-2">
            {["Dashboard", "Patients", "Appointments", "Records", "Settings"].map((item, i) => (
              <div 
                key={i} 
                className={`text-[10px] px-3 py-1.5 rounded-lg ${i === 1 ? "bg-primary/20 text-primary" : "text-gray-400"}`}
              >
                {item}
              </div>
            ))}
          </div>
          <div className="flex-1 space-y-3">
            <div className="flex gap-3">
              <div className="flex-1 bg-zinc-800/50 rounded-xl p-3 border border-zinc-700/30">
                <p className="text-[10px] text-gray-400">Today&apos;s Appointments</p>
                <p className="text-xl font-semibold text-white">24</p>
              </div>
              <div className="flex-1 bg-zinc-800/50 rounded-xl p-3 border border-zinc-700/30">
                <p className="text-[10px] text-gray-400">Active Patients</p>
                <p className="text-xl font-semibold text-white">156</p>
              </div>
            </div>
            <div className="bg-zinc-800/50 rounded-xl p-3 border border-zinc-700/30">
              <p className="text-xs text-white mb-2">Recent Patients</p>
              {[1, 2, 3].map((_, i) => (
                <div key={i} className="flex items-center gap-2 py-1">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-br from-primary to-primary-dark" />
                  <div className="flex-1">
                    <div className="h-2 bg-zinc-700 rounded w-20" />
                  </div>
                  <div className="h-2 bg-zinc-700 rounded w-12" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function ProjectsSection() {
  return (
    <section className="relative py-24 bg-[#050505]">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white mb-4">
            Our Latest Projects
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Explore our recent work and see how we help businesses transform their digital presence.
          </p>
        </motion.div>

        <ScrollStack
          className="h-[200vh]"
          itemDistance={150}
          itemScale={0.02}
          itemStackDistance={25}
          baseScale={0.9}
        >
          {projects.map((project, index) => (
            <ScrollStackItem 
              key={index} 
              itemClassName="bg-gradient-to-br from-zinc-900/90 to-zinc-800/90 border border-zinc-700/50 backdrop-blur-xl"
            >
              <div className="flex gap-8 h-full">
                <div className="flex-1 flex flex-col justify-center">
                  <h3 className="text-2xl font-semibold text-white mb-3">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4">
                    {project.description}
                  </p>
                  <div className="flex gap-2">
                    {project.tech.map((tech, i) => (
                      <span 
                        key={i}
                        className="px-3 py-1 text-xs bg-primary/10 text-primary rounded-full border border-primary/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="w-[400px] h-full">
                  <ProjectMockup type={project.image} />
                </div>
              </div>
            </ScrollStackItem>
          ))}
        </ScrollStack>
      </div>
    </section>
  );
}
