"use client";

import { motion } from "framer-motion";

function HudlLogo() {
  return (
    <div className="flex items-center gap-4">
      <svg viewBox="0 0 40 40" className="h-12 w-12">
        <path
          fill="currentColor"
          d="M20 4C11.16 4 4 11.16 4 20s7.16 16 16 16 16-7.16 16-16S28.84 4 20 4zm-1 5c.55 0 1 .45 1 1v7h-2v-7c0-.55.45-1 1-1zm-6 4c.55 0 1 .45 1 1v8h-2v-8c0-.55.45-1 1-1zm12 0c.55 0 1 .45 1 1v8h-2v-8c0-.55.45-1 1-1zm-6 3c.55 0 1 .45 1 1v6h-2v-6c0-.55.45-1 1-1zm-9 1c.55 0 1 .45 1 1v5h-2v-5c0-.55.45-1 1-1zm18 0c.55 0 1 .45 1 1v5h-2v-5c0-.55.45-1 1-1z"
        />
      </svg>
      <span className="text-4xl font-bold tracking-tight">hudl</span>
    </div>
  );
}

function LyftLogo() {
  return (
    <span className="text-5xl font-bold tracking-tight">lyft</span>
  );
}

function CalendlyLogo() {
  return (
    <div className="flex items-center gap-4">
      <svg viewBox="0 0 40 40" className="h-12 w-12">
        <circle cx="20" cy="20" r="16" stroke="currentColor" strokeWidth="3" fill="none" />
        <circle cx="20" cy="20" r="4" stroke="currentColor" strokeWidth="3" fill="none" />
        <line x1="20" y1="4" x2="20" y2="10" stroke="currentColor" strokeWidth="2" />
        <line x1="20" y1="30" x2="20" y2="36" stroke="currentColor" strokeWidth="2" />
        <line x1="4" y1="20" x2="10" y2="20" stroke="currentColor" strokeWidth="2" />
        <line x1="30" y1="20" x2="36" y2="20" stroke="currentColor" strokeWidth="2" />
      </svg>
      <span className="text-4xl font-semibold">Calendly</span>
    </div>
  );
}

function AsanaLogo() {
  return (
    <div className="flex items-center gap-4">
      <svg viewBox="0 0 40 40" className="h-12 w-12">
        <circle cx="20" cy="8" r="6" fill="currentColor" />
        <circle cx="8" cy="28" r="6" fill="currentColor" />
        <circle cx="32" cy="28" r="6" fill="currentColor" />
      </svg>
      <span className="text-4xl font-semibold">asana</span>
    </div>
  );
}

function DropboxLogo() {
  return (
    <div className="flex items-center gap-4">
      <svg viewBox="0 0 40 40" className="h-12 w-12">
        <path fill="currentColor" d="M10 4l10 6.25L10 16.5 0 10.25 10 4zm20 0l10 6.25-10 6.25-10-6.25L30 4zM0 22.75L10 16.5l10 6.25L10 29l-10-6.25zm30-6.25l10 6.25L30 29l-10-6.25 10-6.25zM10 31.25l10-6.25 10 6.25L20 37.5l-10-6.25z" />
      </svg>
      <span className="text-4xl font-semibold">Dropbox</span>
    </div>
  );
}

function ZendeskLogo() {
  return (
    <span className="text-4xl font-semibold tracking-tight">zendesk</span>
  );
}

const brandComponents = [HudlLogo, LyftLogo, CalendlyLogo, AsanaLogo, DropboxLogo, ZendeskLogo];

export function TrustedBySlider() {
  return (
    <section className="relative py-12 sm:py-16 overflow-hidden bg-[#050505]">
      <div className="text-center mb-8 sm:mb-10 relative z-10">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-gray-500 text-xs sm:text-sm uppercase tracking-[0.2em] font-medium"
        >
          TRUSTED BY
        </motion.p>
      </div>

      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-48 bg-gradient-to-r from-[#050505] via-[#050505]/80 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-48 bg-gradient-to-l from-[#050505] via-[#050505]/80 to-transparent z-10 pointer-events-none" />

        <div className="flex overflow-hidden">
          <motion.div
            className="flex items-center gap-12 sm:gap-20 animate-slide"
            style={{ width: "max-content" }}
          >
            {[...brandComponents, ...brandComponents].map((BrandLogo, index) => (
              <div
                key={index}
                className="flex items-center justify-center min-w-[160px] sm:min-w-[220px] text-white/80 scale-75 sm:scale-100"
              >
                <BrandLogo />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
