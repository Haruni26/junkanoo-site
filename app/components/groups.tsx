import { motion } from "motion/react";

export default function Groups() {
  return (
    <section
      className="bg-green-700 w-full rounded-t-[3rem] py-28 -mt-7 relative z-20"
      id="groups"
    >
      <div className="absolute right-0 top-0 h-full w-[320px] opacity-60 pointer-events-none">
        <svg viewBox="0 0 200 600" fill="none" className="h-full w-full">
          <path
            d="M50 0 C120 120 20 220 90 340 C160 460 40 520 110 600"
            stroke="#FDE047"
            strokeWidth="14"
            strokeLinecap="round"
          />
          <path
            d="M100 0 C170 140 60 240 130 360 C200 480 80 520 150 600"
            stroke="white"
            strokeWidth="10"
            strokeLinecap="round"
          />
        </svg>
      </div>

      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="text-5xl md:text-6xl font-bold text-white mb-12 max-w-6xl mx-auto px-6"
      >
        Groups
      </motion.h2>
      <div className="max-w-6xl mx-auto px-6 items-center">
        <p className="text-2xl text-yellow-400 leading-relaxed mb-6">
          The Valley Boys, The Saxons, One Family, Roots
        </p>
        <p className="text-xl text-white leading-relaxed">
          These groups and many others are what make up Junkanoo.
        </p>{" "}
        <br />
        <a
          href="./components/groups"
          className="text-white hover:text-yellow-500 hover:font-bold transition-colors text-lg"
        >
          Learn more about them here
        </a>
      </div>
    </section>
  );
}
