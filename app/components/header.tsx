"use client";

import { useEffect, useState } from "react";

export default function Header() {
  const [showHeader, setShowHeader] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true); // why is this an error
    const handleScroll = () => setShowHeader(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!mounted) return null;

  return (
    <div className="min-h-screen transition-colors duration-500 bg-neutral-950">
      {/* Header */}
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 
        ${
          showHeader
            ? "bg-black/60 backdrop-blur-xl py-4 border-b border-b-white/40"
            : "bg-transparent py-5 -translate-y-full"
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 flex justify-between items-center">
          <a
            href="#"
            className="text-2xl font-black tracking-tighter text-white uppercase"
          >
            Junkanoo
          </a>

          <nav className="flex items-center gap-8">
            <ul className="hidden md:flex gap-8 text-xs font-bold uppercase tracking-widest text-white">
              <li>
                <a
                  href="#history"
                  className="hover:text-yellow-500 transition-colors"
                >
                  History
                </a>
              </li>
              <li>
                <a
                  href="#groups"
                  className="hover:text-yellow-500 transition-colors"
                >
                  Groups
                </a>
              </li>
              <li>
                <a
                  href="#gallery"
                  className="hover:text-yellow-500 transition-colors"
                >
                  Gallery
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="hover:text-yellow-500 transition-colors"
                >
                  About
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </div>
  );
}
