"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [showHeader, setShowHeader] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setShowHeader(window.scrollY > 50); // show header after scrolling 50px
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
            ? "bg-black/60 backdrop-blur-md py-4"
            : "bg-transparent py-2 -translate-y-full"
        }`}
      >
        <div className="max-w-6xl mx-auto text-2xl px-6 text-white font-semibold">
          Junkanoo
        </div>
      </header>

      {/* Video Section */}
      <section className="relative h-screen w-full overflow-hidden">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          src=""
          autoPlay
          muted
          loop
          playsInline
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40" />

        {/* Title */}
        <div className="relative z-10 h-full flex items-center justify-center">
          <h1 className="text-white text-6xl font-bold text-center drop-shadow-lg">
            Junkanoo
          </h1>
        </div>
      </section>

      {/* CONTENT */}
      <section className="max-w-6xl mx-auto px-6 py-24 space-y-6">
        <h1 className="text-4xl">A Bold Display of Creativity</h1>
        <p className="">Junkanoo is a tresured Bahamian tradition.</p>
      </section>
    </>
  );
}
