"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function Home() {
  const [showHeader, setShowHeader] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setShowHeader(window.scrollY > 50); // shows header after scrolling 50px
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
          <p className="">
            Junkanoo is a tresured Bahamian tradition. Scaling back from
            colonial era tes tes test ettesy tes tes ets the eh e d ui. fjksh
            hfjsk fhjsdk f fdsjkfh s fdjkshf sfhdjks f fjdkshf s fhdjsk hdfdks
            fhdjskf sd
          </p>
          <div className="relative w-full max-w-sm flex justify-center md:justify-end">
            <Image
              src="/images/float.jpeg"
              width={300}
              height={300}
              alt="Junkanoo float"
              className="fill rounded-2xl shadow-lg object-contain h-100 border border-black"
            />
          </div>
        </div>
      </section>
    </>
  );
}
