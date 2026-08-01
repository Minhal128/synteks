"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Home,
  BarChart3,
  Code2,
  Blocks,
  Smartphone,
  Shield,
  Bell,
  TrendingUp,
  TrendingDown,
  ChevronDown,
  Users,
  Cpu,
} from "lucide-react";

const sidebarItems = [
  { icon: Home, label: "Overview", active: true },
  { icon: Code2, label: "Web2" },
  { icon: Blocks, label: "Web3" },
  { icon: Smartphone, label: "Mobile" },
  { icon: Shield, label: "Security" },
  { icon: Cpu, label: "AI / ML" },
];

const stats = [
  { label: "Active projects", value: "24", change: 18, up: true },
  { label: "Hours billed", value: "1.2k", change: 12, up: true },
  { label: "Client retention", value: "98%", change: 4, up: true },
  { label: "Avg. delivery", value: "3.2w", change: 9, up: true },
];

const months = ["Jan", "Mar", "May", "Jul", "Sep"];

export function LaptopSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "center center"],
  });

  // Scroll pe dashboard up aata hai
  const y = useTransform(scrollYProgress, [0, 1], [180, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.88, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.35], [0.2, 1]);
  const rotateX = useTransform(scrollYProgress, [0, 1], [12, 0]);

  return (
    <section ref={containerRef} className="relative py-8 md:py-16 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-[#0a0a08] to-[#050505]" />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] md:w-[800px] h-[300px] md:h-[500px] rounded-full blur-[120px] opacity-30 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(200,240,0,0.35) 0%, rgba(200,240,0,0.08) 40%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          style={{ y, scale, opacity, rotateX, transformPerspective: 1200 }}
          className="relative"
        >
          <div className="relative mx-auto overflow-x-auto" style={{ maxWidth: "1000px" }}>
            <div className="relative min-w-[600px] md:min-w-0">
              <div
                className="absolute -inset-[1px] rounded-2xl opacity-70"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(200,240,0,0.55) 0%, rgba(200,240,0,0.08) 30%, transparent 60%)",
                }}
              />
              <div
                className="absolute -inset-[2px] rounded-2xl blur-sm opacity-40"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(200,240,0,0.5) 0%, rgba(200,240,0,0.15) 20%, transparent 50%)",
                }}
              />

              <div className="relative bg-[#12120e] rounded-2xl p-2 md:p-3 border border-zinc-800/50">
                <div className="flex items-center gap-2 px-2 mb-2 md:mb-3">
                  <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-[#ff5f57]" />
                  <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-[#febc2e]" />
                  <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-[#28c840]" />
                  <div className="flex-1 flex justify-center">
                    <div className="px-4 md:px-6 py-1 md:py-1.5 bg-zinc-800/60 rounded-lg flex items-center gap-2 text-[10px] md:text-xs text-gray-400">
                      <span>app.synteks.io/workspace</span>
                    </div>
                  </div>
                </div>

                <div className="bg-[#0a0a08] rounded-xl overflow-hidden">
                  <div className="flex">
                    <div className="w-40 md:w-52 bg-[#0e0e0a] border-r border-zinc-800/30 p-3 md:p-4">
                      <div className="flex items-center gap-2 mb-4 md:mb-6">
                        <div className="w-5 h-5 md:w-6 md:h-6 rounded bg-gradient-to-br from-[#e8ff6b] to-[#7aab00]" />
                        <span className="text-white text-xs md:text-sm font-medium tracking-wide">
                          Synteks
                        </span>
                      </div>

                      <div className="mb-3 md:mb-4">
                        <div className="flex items-center gap-2 p-2 md:p-2.5 rounded-lg bg-zinc-800/30">
                          <div className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-zinc-700 flex items-center justify-center">
                            <Users className="w-2.5 h-2.5 md:w-3 md:h-3 text-gray-400" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-[8px] md:text-[10px] text-gray-500">Agency</p>
                            <p className="text-[10px] md:text-xs text-white font-medium truncate">
                              Command Center
                            </p>
                          </div>
                          <ChevronDown className="w-3 h-3 text-gray-500 flex-shrink-0" />
                        </div>
                      </div>

                      <div className="space-y-0.5">
                        {sidebarItems.map((item, i) => (
                          <div
                            key={i}
                            className={`flex items-center gap-2 md:gap-3 px-2 md:px-3 py-1.5 md:py-2 rounded-lg ${
                              item.active
                                ? "bg-primary/15 text-primary"
                                : "text-gray-400"
                            }`}
                          >
                            <item.icon className="w-3.5 h-3.5 md:w-4 md:h-4" />
                            <span className="text-xs md:text-sm">{item.label}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex-1 p-4 md:p-6">
                      <div className="flex items-center justify-between mb-4 md:mb-6">
                        <div>
                          <h2 className="text-lg md:text-2xl font-semibold text-white">
                            Delivery Pulse
                          </h2>
                          <p className="text-gray-400 text-xs md:text-sm">
                            Live snapshot of Synteks delivery ops
                          </p>
                        </div>
                        <div className="w-7 h-7 md:w-8 md:h-8 rounded-lg bg-zinc-800/50 flex items-center justify-center">
                          <Bell className="w-3.5 h-3.5 md:w-4 md:h-4 text-gray-400" />
                        </div>
                      </div>

                      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-3 mb-4 md:mb-5">
                        {stats.map((stat, i) => (
                          <div
                            key={i}
                            className="bg-[#141410] rounded-xl p-3 md:p-4 border border-zinc-800/30"
                          >
                            <p className="text-[9px] md:text-[11px] text-gray-400 mb-1 md:mb-2 truncate">
                              {stat.label}
                            </p>
                            <div className="flex items-end justify-between">
                              <span className="text-base md:text-xl font-semibold text-white">
                                {stat.value}
                              </span>
                              <span
                                className={`text-[8px] md:text-[10px] flex items-center gap-0.5 ${
                                  stat.up ? "text-primary" : "text-red-400"
                                }`}
                              >
                                {stat.up ? (
                                  <TrendingUp className="w-2.5 h-2.5 md:w-3 md:h-3" />
                                ) : (
                                  <TrendingDown className="w-2.5 h-2.5 md:w-3 md:h-3" />
                                )}
                                {stat.change}%
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                        <div className="bg-[#141410] rounded-xl p-4 md:p-5 border border-zinc-800/30">
                          <h3 className="text-xs md:text-sm font-medium text-white mb-3 md:mb-4 flex items-center gap-2">
                            <BarChart3 className="w-4 h-4 text-primary" />
                            Capacity this month
                          </h3>
                          <div className="flex items-center justify-center">
                            <div className="relative w-28 h-28 md:w-36 md:h-36">
                              <svg className="w-full h-full transform -rotate-90">
                                <circle
                                  cx="50%"
                                  cy="50%"
                                  r="40%"
                                  stroke="#1e1e18"
                                  strokeWidth="10"
                                  fill="none"
                                />
                                <circle
                                  cx="50%"
                                  cy="50%"
                                  r="40%"
                                  stroke="url(#limeGradient)"
                                  strokeWidth="10"
                                  fill="none"
                                  strokeDasharray="251"
                                  strokeDashoffset="63"
                                  strokeLinecap="round"
                                />
                                <defs>
                                  <linearGradient id="limeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                    <stop offset="0%" stopColor="#e8ff6b" />
                                    <stop offset="100%" stopColor="#9bc400" />
                                  </linearGradient>
                                </defs>
                              </svg>
                              <div className="absolute inset-0 flex flex-col items-center justify-center">
                                <p className="text-[8px] md:text-[10px] text-gray-400">Booked</p>
                                <p className="text-sm md:text-base font-semibold text-white">74%</p>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="bg-[#141410] rounded-xl p-4 md:p-5 border border-zinc-800/30">
                          <h3 className="text-xs md:text-sm font-medium text-white mb-1">
                            Throughput
                          </h3>
                          <p className="text-lg md:text-xl font-semibold text-white mb-2">
                            186 ship cycles
                          </p>
                          <div className="h-20 md:h-24 mt-4 relative">
                            <svg className="w-full h-full" viewBox="0 0 280 80" preserveAspectRatio="none">
                              <path
                                d="M0,70 C20,65 40,60 60,55 C80,50 100,45 120,40 C140,35 160,32 180,28 C200,24 220,22 240,18 C260,14 280,10 280,8"
                                fill="none"
                                stroke="#c8f000"
                                strokeWidth="2"
                              />
                              {[20, 80, 140, 200, 260].map((cx, i) => (
                                <circle key={i} cx={cx} cy={[65, 48, 38, 26, 14][i]} r="4" fill="#c8f000" />
                              ))}
                            </svg>
                          </div>
                          <div className="flex justify-between text-[8px] md:text-[10px] text-gray-500 mt-1">
                            {months.map((m) => (
                              <span key={m}>{m}</span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative mt-0 min-w-[600px] md:min-w-0">
              <div className="h-2 md:h-3 bg-gradient-to-b from-zinc-800 to-zinc-700 rounded-b-lg mx-4 md:mx-6" />
              <div className="h-1 md:h-1.5 bg-zinc-700 rounded-b-xl mx-16 md:mx-20" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
