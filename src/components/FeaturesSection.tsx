"use client";

import React from "react";
import { motion } from "framer-motion";
import { Mail, Calendar, Zap } from "lucide-react";

export function FeaturesSection() {
  return (
    <section className="relative py-12 sm:py-16 md:py-24 bg-[#050505]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-10 md:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-white mb-4 px-4">
            How we are different from others
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-5 md:gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-[#111118] rounded-2xl md:rounded-3xl p-4 sm:p-6 md:p-8 border border-zinc-800/50"
          >
            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-white mb-2 md:mb-3">
              Sync your email and events
            </h3>
            <p className="text-gray-400 text-sm md:text-sm mb-4 sm:mb-6 md:mb-8">
              Streamline your email correspondence and event scheduling for maximum productivity and organization.
            </p>
            
            <div className="flex items-start gap-3 sm:gap-4 overflow-hidden">
              <div className="flex flex-col items-center flex-shrink-0">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-zinc-900 border border-zinc-700/50 flex items-center justify-center">
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
                </div>
                
                <svg className="w-2 h-16 sm:h-20 my-1" viewBox="0 0 8 80">
                  <motion.path
                    d="M4,0 L4,80"
                    fill="none"
                    stroke="#c8f000"
                    strokeWidth="2"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.5 }}
                  />
                  <motion.circle
                    cx="4"
                    cy="40"
                    r="3"
                    fill="#c8f000"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 1 }}
                  />
                </svg>
                
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-zinc-900 border border-zinc-700/50 flex items-center justify-center">
                  <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
                </div>
              </div>
              
              <div className="flex-1 relative pt-4 min-w-0">
                <svg className="absolute left-0 top-4 w-20 sm:w-24 h-28 sm:h-32" viewBox="0 0 96 128">
                  <motion.path
                    d="M0,20 C48,20 48,64 96,64"
                    fill="none"
                    stroke="#c8f000"
                    strokeWidth="2"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.3 }}
                  />
                  <motion.circle
                    cx="48"
                    cy="42"
                    r="4"
                    fill="#c8f000"
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: [0, 1.2, 1], opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                  />
                  <motion.path
                    d="M0,108 C48,108 48,64 96,64"
                    fill="none"
                    stroke="#c8f000"
                    strokeWidth="2"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.5 }}
                  />
                  <motion.circle
                    cx="48"
                    cy="86"
                    r="4"
                    fill="#c8f000"
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: [0, 1.2, 1], opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 1 }}
                  />
                </svg>
                
                <div className="ml-20 sm:ml-28 bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl p-3 sm:p-4 border border-primary/20 w-fit">
                  <div className="relative w-8 h-8 sm:w-10 sm:h-10">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary-dark rounded-lg rotate-12" />
                    <div className="absolute inset-1 bg-[#111118] rounded-md rotate-12" />
                    <div className="absolute inset-2 bg-gradient-to-br from-primary to-primary-dark rounded-sm rotate-12" />
                  </div>
                </div>
                
                <div className="ml-16 sm:ml-24 mt-4 sm:mt-6 bg-zinc-900/80 rounded-xl p-3 sm:p-4 border border-zinc-800/50">
                  {["JG", "AT", "TS", "SA", "OP"].map((initials, i) => (
                    <motion.div 
                      key={i} 
                      className="flex items-center gap-3 mb-2 last:mb-0"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.8 + i * 0.1 }}
                    >
                      <span className="text-xs text-primary font-medium w-4 sm:w-6">{initials}</span>
                      <div className="flex gap-1 flex-1 min-w-0">
                        <motion.div 
                          className="h-1.5 bg-gray-600 rounded-full"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${Math.min(50 + i * 8, 60)}px` }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: 1 + i * 0.1 }}
                        />
                        <motion.div 
                          className="h-1.5 bg-gray-700 rounded-full"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${Math.max(30 - i * 4, 15)}px` }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: 1.1 + i * 0.1 }}
                        />
                        <motion.div 
                          className="h-1.5 bg-gray-700 rounded-full"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${Math.min(20 + i * 3, 35)}px` }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: 1.2 + i * 0.1 }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-[#111118] rounded-2xl md:rounded-3xl p-4 sm:p-6 md:p-8 border border-zinc-800/50 overflow-hidden"
          >
            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-white mb-2 md:mb-3">
              AI-Powered Insights
            </h3>
            <p className="text-gray-400 text-sm md:text-sm mb-4 sm:mb-6 md:mb-8">
              This revolutionizes your CRM data, revealing trends and predictions for informed decisions.
            </p>
            
            <div className="relative h-40 sm:h-48 md:h-52">
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-primary/5 to-transparent rounded-2xl" />
              
              <svg className="w-full h-full" viewBox="0 0 400 180" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="chartGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#c8f000" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="#c8f000" stopOpacity="0" />
                  </linearGradient>
                </defs>
                
                <motion.path
                  d="M0,150 Q50,145 100,140 T200,130 T280,90 T320,70 T400,60"
                  fill="none"
                  stroke="#c8f000"
                  strokeWidth="2.5"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 2, ease: "easeOut" }}
                />
                
                <motion.path
                  d="M0,150 Q50,145 100,140 T200,130 T280,90 T320,70 T400,60 L400,180 L0,180 Z"
                  fill="url(#chartGradient)"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 1 }}
                />
              </svg>
              
              <motion.div 
                className="absolute top-6 sm:top-8 right-8 sm:right-12"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 1.5, duration: 0.5 }}
              >
                <div className="relative">
                  <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-white shadow-lg shadow-white/30" />
                  <div className="bg-zinc-900/90 rounded-lg px-2.5 sm:px-3 py-1 sm:py-1.5 border border-zinc-700/50 mt-2">
                    <span className="text-white text-xs sm:text-sm font-medium">$5294</span>
                  </div>
                  <div className="absolute -bottom-3 sm:-bottom-4 left-1/2 -translate-x-1/2 w-0.5 h-12 sm:h-16 bg-gradient-to-b from-primary/50 to-transparent" />
                </div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="bg-[#111118] rounded-2xl md:rounded-3xl p-4 sm:p-6 md:p-8 border border-zinc-800/50"
          >
            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-white mb-2 md:mb-3">
              Less work, more flow
            </h3>
            <p className="text-gray-400 text-sm md:text-sm mb-4 sm:mb-6 md:mb-8">
              Effortlessly manage tasks, eliminate manual processes, and achieve peak efficiency.
            </p>
            
            <div className="flex flex-col items-center relative overflow-hidden">
              <div className="flex items-center gap-1.5 sm:gap-2 mb-2 flex-wrap justify-center">
                <motion.div 
                  className="flex items-center gap-1.5 sm:gap-2 bg-zinc-900 rounded-full px-3 sm:px-5 py-2 sm:py-2.5 border border-zinc-700/50"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                >
                  <Zap className="w-3 h-3 sm:w-4 sm:h-4 text-primary" />
                  <span className="text-white text-xs sm:text-sm font-medium">Start</span>
                </motion.div>
                
                <svg className="w-8 sm:w-12 h-2" viewBox="0 0 48 8">
                  <motion.line
                    x1="0" y1="4" x2="40" y2="4"
                    stroke="#6b7280"
                    strokeWidth="2"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                  />
                  <motion.polygon
                    points="40,0 48,4 40,8"
                    fill="#6b7280"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.8 }}
                  />
                </svg>
                
                <motion.div 
                  className="bg-zinc-900 rounded-full px-3 sm:px-5 py-2 sm:py-2.5 border border-zinc-700/50"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 }}
                >
                  <span className="text-white text-xs sm:text-sm font-medium">Trigger</span>
                </motion.div>
              </div>
              
              <svg className="w-24 sm:w-32 h-8 sm:h-12" viewBox="0 0 128 48">
                <motion.path
                  d="M96,0 Q96,24 64,24"
                  fill="none"
                  stroke="#6b7280"
                  strokeWidth="2"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                />
                <motion.path
                  d="M64,24 L64,48"
                  fill="none"
                  stroke="#6b7280"
                  strokeWidth="2"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 1.1 }}
                />
                <motion.polygon
                  points="60,42 64,50 68,42"
                  fill="#6b7280"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 1.3 }}
                />
              </svg>
              
              <motion.div 
                className="bg-zinc-900 rounded-full px-3 sm:px-5 py-2 sm:py-2.5 border-2 border-primary/50 shadow-lg shadow-primary/10"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 1.2, type: "spring" }}
              >
                <span className="text-white text-xs sm:text-sm font-medium">Action 1</span>
              </motion.div>
              
              <svg className="w-2 h-8 sm:h-10" viewBox="0 0 8 40">
                <motion.line
                  x1="4" y1="0" x2="4" y2="32"
                  stroke="#6b7280"
                  strokeWidth="2"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 1.4 }}
                />
                <motion.polygon
                  points="0,32 4,40 8,32"
                  fill="#6b7280"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 1.6 }}
                />
              </svg>
              
              <motion.div 
                className="bg-zinc-900 rounded-full px-3 sm:px-5 py-2 sm:py-2.5 border border-zinc-700/50"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 1.5 }}
              >
                <span className="text-white text-xs sm:text-sm font-medium">Action 2</span>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="bg-[#111118] rounded-2xl md:rounded-3xl p-4 sm:p-6 md:p-8 border border-zinc-800/50"
          >
            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-white mb-2 md:mb-3">
              Sync your email and events
            </h3>
            <p className="text-gray-400 text-sm md:text-sm mb-4 sm:mb-6 md:mb-8">
              Streamline your email correspondence and event scheduling for maximum productivity and organization.
            </p>
            
            <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-7 gap-2 sm:gap-2">
              {[
                { icon: "vercel", half: true },
                { icon: "framer" },
                { icon: "slack" },
                { icon: "copilot" },
                { icon: "gmail" },
                { icon: "notion" },
                { icon: "mailchimp" },
                { icon: "vercel2", half: true },
                { icon: "figma" },
                { icon: "chatgpt" },
                { icon: "sheets" },
                { icon: "airtable" },
                { icon: "chatgpt2" },
                { icon: "notion2" },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + i * 0.05 }}
                  className={`aspect-square rounded-xl sm:rounded-2xl bg-zinc-900 border border-zinc-800/50 flex items-center justify-center text-gray-400 hover:text-white hover:border-zinc-600 transition-all hover:scale-105 ${item.half ? "opacity-50" : ""}`}
                >
                  <IntegrationIcon name={item.icon} />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function IntegrationIcon({ name }: { name: string }) {
  const icons: Record<string, React.ReactElement> = {
    vercel: (
      <svg viewBox="0 0 24 24" className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" fill="currentColor">
        <path d="M24 22.525H0l12-21.05 12 21.05z"/>
      </svg>
    ),
    vercel2: (
      <svg viewBox="0 0 24 24" className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" fill="currentColor">
        <path d="M24 22.525H0l12-21.05 12 21.05z"/>
      </svg>
    ),
    framer: (
      <svg viewBox="0 0 24 24" className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" fill="currentColor">
        <path d="M4 0h16v8h-8zM4 8h8l8 8H4zM4 16h8v8z"/>
      </svg>
    ),
    slack: (
      <svg viewBox="0 0 24 24" className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" fill="currentColor">
        <path d="M6 15a2 2 0 0 1-2 2 2 2 0 0 1-2-2 2 2 0 0 1 2-2h2v2zm1 0a2 2 0 0 1 2-2 2 2 0 0 1 2 2v5a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-5zm2-8a2 2 0 0 1-2-2 2 2 0 0 1 2-2 2 2 0 0 1 2 2v2H9zm0 1a2 2 0 0 1 2 2 2 2 0 0 1-2 2H4a2 2 0 0 1-2-2 2 2 0 0 1 2-2h5zm8 2a2 2 0 0 1 2-2 2 2 0 0 1 2 2 2 2 0 0 1-2 2h-2v-2zm-1 0a2 2 0 0 1-2 2 2 2 0 0 1-2-2V5a2 2 0 0 1 2-2 2 2 0 0 1 2 2v5zm-2 8a2 2 0 0 1 2 2 2 2 0 0 1-2 2 2 2 0 0 1-2-2v-2h2zm0-1a2 2 0 0 1-2-2 2 2 0 0 1 2-2h5a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-5z"/>
      </svg>
    ),
    copilot: (
      <svg viewBox="0 0 24 24" className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" fill="currentColor">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
      </svg>
    ),
    gmail: (
      <svg viewBox="0 0 24 24" className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" fill="currentColor">
        <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"/>
      </svg>
    ),
    notion: (
      <svg viewBox="0 0 24 24" className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" fill="currentColor">
        <path d="M4 3h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm1 2v14h14V5H5zm2 2h4v4H7V7zm0 6h10v2H7v-2zm6-6h4v2h-4V7z"/>
      </svg>
    ),
    mailchimp: (
      <svg viewBox="0 0 24 24" className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
      </svg>
    ),
    figma: (
      <svg viewBox="0 0 24 24" className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" fill="currentColor">
        <path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5zM12 2h3.5a3.5 3.5 0 1 1 0 7H12V2zm0 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0zm-7 0A3.5 3.5 0 0 1 8.5 11H12v7H8.5A3.5 3.5 0 0 1 5 14.5zm0-5A3.5 3.5 0 0 1 8.5 6H12v7H8.5A3.5 3.5 0 0 1 5 9.5z"/>
      </svg>
    ),
    chatgpt: (
      <svg viewBox="0 0 24 24" className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" fill="currentColor">
        <path d="M22.282 9.821a5.985 5.985 0 0 0-.516-4.91 6.046 6.046 0 0 0-6.51-2.9A6.065 6.065 0 0 0 4.981 4.18a5.985 5.985 0 0 0-3.998 2.9 6.046 6.046 0 0 0 .743 7.097 5.98 5.98 0 0 0 .51 4.911 6.051 6.051 0 0 0 6.515 2.9A5.985 5.985 0 0 0 13.26 24a6.056 6.056 0 0 0 5.772-4.206 5.99 5.99 0 0 0 3.997-2.9 6.056 6.056 0 0 0-.747-7.073z"/>
      </svg>
    ),
    chatgpt2: (
      <svg viewBox="0 0 24 24" className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" fill="currentColor">
        <path d="M22.282 9.821a5.985 5.985 0 0 0-.516-4.91 6.046 6.046 0 0 0-6.51-2.9A6.065 6.065 0 0 0 4.981 4.18a5.985 5.985 0 0 0-3.998 2.9 6.046 6.046 0 0 0 .743 7.097 5.98 5.98 0 0 0 .51 4.911 6.051 6.051 0 0 0 6.515 2.9A5.985 5.985 0 0 0 13.26 24a6.056 6.056 0 0 0 5.772-4.206 5.99 5.99 0 0 0 3.997-2.9 6.056 6.056 0 0 0-.747-7.073z"/>
      </svg>
    ),
    sheets: (
      <svg viewBox="0 0 24 24" className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" fill="currentColor">
        <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2" fill="none"/>
        <path d="M3 9h18M9 3v18" stroke="currentColor" strokeWidth="2"/>
      </svg>
    ),
    airtable: (
      <svg viewBox="0 0 24 24" className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" fill="currentColor">
        <path d="M12 2L2 7v10l10 5 10-5V7L12 2zm0 2.18l7.5 3.75L12 11.68 4.5 7.93 12 4.18z"/>
      </svg>
    ),
    notion2: (
      <svg viewBox="0 0 24 24" className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" fill="currentColor">
        <path d="M4 3h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm1 2v14h14V5H5z"/>
      </svg>
    ),
  };
  
  return icons[name] || <div className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 bg-gray-700 rounded" />;
}
