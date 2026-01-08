import { motion } from "motion/react";

export default function Groups() {
  return (
    <section
      className="bg-emerald-800 w-full py-28 -mt-7 relative z-20"
      id="groups"
    >
      {/* Make this into a grid with each group having its own card */}
      {/* grid grid-cols-1 md:grid-cols-2 */}
      <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-12 max-w-6xl mx-auto px-6">
          Groups
        </h1>

        <div className="max-w-6xl mx-auto px-6 items-center">
          <p className="text-2xl text-yellow-400 leading-relaxed mb-6">
            The Valley Boys, The Saxons, One Family, Roots
          </p>
          <p className="text-xl text-white leading-relaxed">
            These groups and many others are what make up Junkanoo.
          </p>{" "}
          <br />
          <p className="text-xl text-white leading-relaxed">
            Section is a work in progress
          </p>
        </div>
      </motion.h2>
    </section>
  );
}
