"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Pricing", href: "/pricing" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

const footerLinks = [
  { name: "Terms", href: "#" },
  { name: "Privacy", href: "#" },
];

export function Footer() {
  return (
    <footer className="relative bg-[#050505] pt-16 pb-8 overflow-hidden border-t border-zinc-900">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 text-[12vw] md:text-[16vw] font-display text-zinc-900/80 whitespace-nowrap select-none tracking-wider"
        >
          SYNTEKS
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-8 lg:gap-12 mb-12 lg:mb-16">
          <div className="flex flex-col gap-6 w-full lg:w-auto">
            <Link href="/" className="inline-block">
              <Image
                src="/logo.png"
                alt="Synteks"
                width={140}
                height={48}
                className="h-12 w-auto object-contain"
              />
            </Link>
            <p className="text-gray-500 text-sm max-w-xs">
              Building tomorrow. Together. Web2 · Web3 · Mobile · AI
            </p>
            <nav className="flex flex-wrap gap-4 sm:gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-gray-400 hover:text-primary transition-colors text-sm"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          <div className="flex flex-col gap-3 w-full lg:w-auto">
            <p className="text-gray-400 text-sm">Ready to ship?</p>
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full sm:w-auto px-6 py-3 btn-shiny font-semibold rounded-lg text-sm"
              >
                Contact Us
              </motion.button>
            </Link>
          </div>
        </div>

        <div className="border-t border-zinc-800/50 pt-6 md:pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-xs sm:text-sm text-center md:text-left">
            © Synteks {new Date().getFullYear()} · Premium software at $20/hr
          </p>
          <div className="flex items-center gap-4 sm:gap-6">
            {footerLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-gray-400 hover:text-white transition-colors text-xs sm:text-sm"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
