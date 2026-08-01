"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Pricing", href: "/pricing" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled ? "py-3" : "py-5"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div
            className={cn(
              "flex items-center justify-between rounded-2xl px-4 sm:px-6 py-2.5 transition-all duration-300",
              scrolled ? "glass-dark shadow-lg shadow-black/40" : "bg-transparent"
            )}
          >
            <div className="flex-1 flex justify-start">
              <Link href="/" className="flex items-center">
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Image
                    src="/logo.png"
                    alt="Synteks"
                    width={220}
                    height={72}
                    className="h-14 sm:h-16 md:h-[4.5rem] w-auto object-contain"
                    priority
                  />
                </motion.div>
              </Link>
            </div>

            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 + 0.2 }}
                >
                  <Link
                    href={link.href}
                    className="px-4 py-2 text-sm text-gray-300 hover:text-primary transition-colors duration-200 rounded-lg hover:bg-white/5"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </div>

            <div className="flex-1 flex justify-end items-center gap-3">
              <Link href="/contact" className="hidden md:block">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-5 py-2 btn-shiny font-semibold rounded-lg text-sm"
                >
                  Hire Us
                </motion.button>
              </Link>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 text-white hover:bg-white/10 rounded-lg transition-colors"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 md:hidden"
          >
            <div
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
              onClick={() => setMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="absolute right-0 top-0 h-full w-80 sm:w-72 bg-zinc-950/95 backdrop-blur-xl border-l border-zinc-800 pt-24 px-6"
            >
              <div className="flex flex-col gap-2">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block px-4 py-4 text-gray-300 hover:text-primary hover:bg-zinc-800 rounded-lg transition-colors text-lg font-medium"
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
                <Link href="/contact" onClick={() => setMobileMenuOpen(false)} className="mt-4">
                  <button className="w-full py-3 btn-shiny font-semibold rounded-lg text-sm">
                    Hire Us
                  </button>
                </Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
