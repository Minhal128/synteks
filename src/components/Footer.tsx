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
    <footer className="relative bg-[#050505] pt-16 pb-16 overflow-hidden border-t border-zinc-900">
      {/* Moving linear SYNTEKS watermark — lifted so letters aren't clipped */}
      <div className="absolute inset-x-0 bottom-8 md:bottom-12 overflow-hidden pointer-events-none select-none">
        <div className="flex w-max animate-slide whitespace-nowrap items-center">
          {[0, 1].map((copy) => (
            <span
              key={copy}
              className="font-display text-[12vw] md:text-[10vw] leading-none text-zinc-900 tracking-wider px-8"
            >
              SYNTEKS&nbsp;&nbsp;SYNTEKS&nbsp;&nbsp;SYNTEKS&nbsp;&nbsp;
            </span>
          ))}
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-8 lg:gap-12 mb-12 lg:mb-16">
          <div className="flex flex-col gap-6 w-full lg:w-auto">
            <Link href="/" className="inline-block">
              <Image
                src="/logo.png"
                alt="Synteks"
                width={220}
                height={80}
                className="h-16 sm:h-20 w-auto object-contain"
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
