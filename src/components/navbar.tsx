"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const navItems = [
  { name: "Início", href: "#hero" },
  { name: "Serviços", href: "#servicos" },
  { name: "Sobre", href: "#sobre" },
  { name: "Contato", href: "#contato" },
];

export function Navbar() {
  const [visible, setVisible] = useState(true);
  const [lastScroll, setLastScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY;
      setVisible(current < lastScroll || current < 80);
      setLastScroll(current);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScroll]);

  return (
    <AnimatePresence mode="wait">
      {visible && (
        <motion.header
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          exit={{ y: -100 }}
          transition={{ duration: 0.3 }}
          className={cn(
            "fixed top-0 left-0 right-0 z-50",
            "bg-stone-950/80 backdrop-blur-md border-b border-stone-800/50"
          )}
        >
          <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
            <Link
              href="#hero"
              className="text-xl font-semibold tracking-tight text-amber-50"
            >
              Grazielle Gabriela
            </Link>
            <ul className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-stone-300 hover:text-amber-200 transition-colors text-sm font-medium"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
            <a
              href="#contato"
              className="rounded-full bg-amber-600 px-5 py-2.5 text-sm font-medium text-stone-950 hover:bg-amber-500 transition-colors"
            >
              Orçamento
            </a>
          </nav>
        </motion.header>
      )}
    </AnimatePresence>
  );
}
