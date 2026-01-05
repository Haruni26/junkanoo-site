"use client";

import { useEffect, useState } from "react";
import History from "./components/history";
import Image from "next/image";

export default function Home() {
  const [showHeader, setShowHeader] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setShowHeader(window.scrollY > 50);
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Header */}
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500
  ${
    showHeader
      ? "bg-black/80 backdrop-blur-md py-4"
      : "bg-transparent py-4 -translate-y-full"
  }`}
      >
        <div className="max-w-6xl mx-auto px-6 flex justify-between items-center text-white">
          <a
            href="#"
            className="text-2xl font-semibold tracking-tighter hover:text-yellow-500 transition-colors cursor-pointer"
          >
            Junkanoo
          </a>

          {/* Navigation Links */}
          <nav>
            <ul className="flex gap-8 text-sm font-medium uppercase tracking-widest">
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
      <section className="relative h-screen w-full overflow-hidden">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          src="null"
          autoPlay
          muted
          loop
          playsInline
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 h-full flex items-center justify-center">
          <h1 className="text-white text-7xl font-bold text-center drop-shadow-lg">
            Junkanoo
          </h1>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-24 space-y-6">
        <h1 className="text-5xl font-bold text-slate-900">
          A Bold Display of Creativity
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
          <p className="text-lg leading-relaxed mt-2 text-slate-700">
            Junkanoo is a treasured Bahamian tradition. Dating back to the
            colonial era and having its roots across the West Indies and West
            Africa. Colourful costumes, rhythmic music, and dance. Junkanoo is
            truly a celebration which everyone who visits the Bahamas should
            see. In the Bahamas Junkanoo takes place on Boxing Day, New
            Year&apos;s Day, and a few Saturdays during the summer.
          </p>
          <div className="flex justify-center">
            <Image
              src="/images/parade.jpg"
              width={500}
              height={300}
              alt="Two performers in costumes"
              className="rounded-2xl shadow-lg object-cover border border-black"
            />
          </div>
        </div>
      </section>

      {/* History Section */}
      <section
        className="w-full bg-black rounded-t-[3rem] text-yellow-500 py-32"
        id="history"
      >
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-5xl font-bold">History of Junkanoo</h1>
          <p className="mt-6 text-white/80 max-w-2xl">
            The story of Junkanoo is a story of resistance, celebration, and
            cultural identity.
          </p>
        </div>
      </section>

      {/* Gallery Section */}
      <section
        className="w-full bg-sky-500 rounded-t-[3rem] text-white py-32 -mt-10"
        id="gallery"
      >
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-5xl font-bold">Gallery</h1>
          <p className="mt-6">Visual snapshots of the vibrant parades.</p>
        </div>
      </section>

      {/* About Section */}
      <section
        className="w-full bg-yellow-400 rounded-t-[3rem] text-black py-32 -mt-10"
        id="about"
      >
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-5xl font-bold">About</h1>
          <p className="mt-6 font-medium">
            Junkanoo is more than a parade; it is the soul of the Bahamas.
          </p>
        </div>
      </section>
    </>
  );
}
