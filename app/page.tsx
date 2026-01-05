"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";
import Image from "next/image";
import History from "./components/history";
import Groups from "./components/groups";
import Gallery from "./components/gallery";

export default function Home() {
  const [showHeader, setShowHeader] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Avoid hydration mismatch
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
            ? "bg-black/40 backdrop-blur-xl py-4 border border-b-white/40"
            : "bg-transparent py-6 -translate-y-full"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
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

      {/* Video Section */}
      <section className="relative h-[90vh] w-full overflow-hidden bg-neutral-900 mb-20">
        <div className="absolute inset-0 bg-black/40 z-10" />
        <div className="relative z-20 h-full flex flex-col items-center justify-center">
          <motion.h1
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="text-white text-center text-5xl md:text-[8rem] font-black tracking-tighter italic"
          >
            JUNKANOO
          </motion.h1>
        </div>
      </section>

      {/* Opening */}
      <section className="bg-white py-32 transition-colors duration-500">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-5xl font-bold text-neutral-900 mb-6">
              A Beautiful Display of Creativity
            </h2>
            <p className="text-lg text-neutral-600 leading-relaxed mb-6">
              Junkanoo is a treasured Bahamian tradition. Scaling back from the
              colonial era and having its roots across the West Indies and West
              Africa. Colourful costumes, rhythmic music, and dance.
            </p>
            <p className="text-lg text-neutral-600leading-relaxed">
              In the Bahamas, Junkanoo takes place on Boxing Day, New
              Year&apos;s Day, and during the summer heat. It is the pulse of
              the islands.
            </p>
          </div>
          <div className="aspect-4/5 bg-neutral-100 rounded-3xl overflow-hidden relative shadow-2xl">
            <Image
              src="/images/float.jpeg"
              alt="Image of a Junkanoo Float"
              height={800}
              width={800}
            />
          </div>
        </div>
      </section>

      {/* Section Components */}
      <History />
      <Groups />
      <Gallery />

      {/* About Section */}
      <section
        id="about"
        className="w-full bg-yellow-500 text-black py-32 -mt-12 relative z-30 rounded-t-[3rem]"
      >
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-5xl font-black mb-8">About</h2>
          <p className="mx-auto text-xl font-medium opacity-80">
            More than a festival
          </p>
        </div>
      </section>
    </div>
  );
}
