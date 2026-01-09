"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import Header from "./components/header";
import History from "./components/history";
import Groups from "./components/groups";
import Gallery from "./components/gallery";

export default function Home() {
  const [isMuted, setIsMuted] = useState(true);

  return (
    <div className="min-h-screen transition-colors duration-500 bg-neutral-950">
      <Header />
      {/* Video Section */}
      <section className="relative w-full h-screen overflow-hidden bg-black">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src="/video/intro.MOV"
          autoPlay
          loop
          muted={isMuted}
          playsInline
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40" />

        {/* Title */}
        <div className="relative z-20 w-full h-full flex items-center justify-center pointer-events-none">
          <motion.h1
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-white text-center text-4xl sm:text-6xl md:text-8xl font-black tracking-tighter italic leading-none"
          >
            JUNKANOO
          </motion.h1>
        </div>

        <button
          onClick={() => setIsMuted(!isMuted)}
          className="absolute bottom-8 right-8 z-30 p-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 transition-all duration-200 group"
          aria-label={isMuted ? "Unmute video" : "Mute video"}
        >
          {isMuted ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 9.75L19.5 12m0 0l2.25 2.25M19.5 12l2.25-2.25M19.5 12l-2.25 2.25m-10.5-6l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z"
              />
            </svg>
          )}
        </button>
      </section>

      {/* Opening */}
      <section className="bg-white py-32 transition-colors duration-500">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="text-center md:text-left">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
              A Beautiful Display of Creativity
            </h2>
            <p className="text-lg text-neutral-600 leading-relaxed mb-6">
              Junkanoo is a treasured Bahamian tradition. Scaling back from the
              colonial era and having its roots across the West Indies and West
              Africa. Colourful costumes, rhythmic music, and dance.
            </p>
            <p className="text-lg sm:text-md md:text-lg text-neutral-600 leading-relaxed">
              In the Bahamas, Junkanoo takes place on Boxing Day, New
              Year&apos;s Day, and during the summer heat. It is the pulse of
              the islands.
            </p>
          </div>
          <div className="aspect-4/5 bg-neutral-100 rounded-3xl overflow-hidden relative shadow-2xl">
            <Image
              src="/images/float.jpeg"
              alt="Image of a Junkanoo Float"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Section Components */}
      <Groups />
      <History />
      <Gallery />

      {/* About Section - Still a Work in progress */}
      {/* <section
        id="about"
        className="w-full bg-yellow-500 text-black py-32 -mt-12 relative z-30 rounded-t-[3rem]"
      >
        <div className="absolute right-0 top-0 h-full w-[320px] opacity-60 pointer-events-none">
          <svg viewBox="0 0 200 600" fill="none" className="h-full w-full">
            <path
              d="M50 0 C120 120 20 220 90 340 C160 460 40 520 110 600"
              stroke="#000000"
              strokeWidth="14"
              strokeLinecap="round"
            />
            <path
              d="M100 0 C170 140 60 240 130 360 C200 480 80 520 150 600"
              stroke="#4a94e8"
              strokeWidth="10"
              strokeLinecap="round"
            />
          </svg>
        </div>
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-5xl font-black mb-8">About</h2>
          <p className="mx-auto text-xl opacity-80 font-bold">
            -- Section is a work in Progress --
          </p>
        </div>
      </section> */}
    </div>
  );
}
