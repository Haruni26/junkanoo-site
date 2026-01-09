"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const groups = [
  {
    name: "The Valley Boys",
    theme: {
      accent: "text-yellow-400 border-yellow-400",
      glow: "shadow-yellow-400/20",
    },
    history:
      'Founded in 1958 by Winston "Gus" Cooper. The Valley Boys are one of the most iconic Junkanoo groups, known for bold colors, massive pieces, and high-energy performances. Who are we? The Valley',
  },
  {
    name: "The Saxons",
    theme: {
      accent: "text-red-400 border-red-400",
      glow: "shadow-red-400/20",
    },
    history:
      "Founded in 1965, The Saxons are famous for their disciplined formations and traditional approach to Junkanoo.",
  },
  {
    name: "One Family",
    theme: {
      accent: "text-blue-400 border-blue-400",
      glow: "shadow-blue-400/20",
    },
    history:
      "One Family emphasizes unity and storytelling, blending modern techniques with cultural roots. When you hear hallelujah, you know it's One Family.",
  },
  {
    name: "Roots",
    theme: {
      accent: "text-green-400 border-green-400",
      glow: "shadow-green-400/20",
    },
    history:
      "Roots focuses on cultural preservation, highlighting African heritage and traditional Junkanoo rhythms.",
  },
];

export default function GroupsSection() {
  const [activeGroup, setActiveGroup] = useState<any | null>(null);

  return (
    <section
      className="bg-emerald-800 w-full py-28 -mt-7 relative z-20"
      id="groups"
    >
      {/* Header */}
      <div className="max-w-6xl mx-auto px-6 mb-16">
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
          Groups
        </h1>
        <p className="text-xl text-white/80">
          These groups and many others are what make up Junkanoo.
        </p>
      </div>

      {/* Groups Grid */}
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {groups.map((group, index) => (
          <motion.button
            key={group.name}
            onClick={() => setActiveGroup(group)}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
            className={`bg-emerald-900/60 backdrop-blur rounded-2xl p-6 text-left border
              ${group.theme.accent} ${group.theme.glow}
              hover:scale-[1.02] transition`}
          >
            <h3 className="text-2xl font-semibold mb-2 text-white">
              {group.name}
            </h3>
            <p className="text-white/70 text-sm">Click to learn more</p>
          </motion.button>
        ))}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {activeGroup && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center px-6"
            onClick={() => setActiveGroup(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-emerald-900 rounded-2xl max-w-xl w-full p-8 border border-emerald-700"
            >
              <h2
                className={`text-3xl font-bold mb-4 ${activeGroup.theme.accent}`}
              >
                {activeGroup.name}
              </h2>

              <p className="text-white/80 leading-relaxed">
                {activeGroup.history}
              </p>

              <button
                onClick={() => setActiveGroup(null)}
                className="mt-6 text-sm text-white/70 hover:text-white"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
