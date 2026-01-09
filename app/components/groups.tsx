"use client";

import { useState } from "react";
import { motion } from "motion/react";

export default function Groups() {
  return (
    <section
      className="bg-emerald-800 w-full py-28 -mt-7 relative z-20"
      id="groups"
    >
      {/* Header */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto px-6 mb-16"
      >
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
          Groups
        </h1>
        <p className="text-xl text-white">
          These groups and many others are what make up Junkanoo.
        </p>
      </motion.h2>

      {/* Grid */}
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {["The Valley Boys", "The Saxons", "One Family", "Roots"].map(
          (group, index) => (
            <motion.div
              key={group}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-emerald-900/60 backdrop-blur rounded-2xl p-6 text-center border border-emerald-700 hover:border-yellow-400 transition"
            >
              <h3 className="text-2xl font-semibold text-yellow-400 mb-2">
                {group}
              </h3>
              <p className="text-white text-sm opacity-80">
                Section is a work in progress
              </p>
            </motion.div>
          )
        )}
      </div>
    </section>
  );
}
