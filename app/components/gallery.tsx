"use client";
import { motion } from "motion/react";

export default function Gallery() {
  const images = [
    { src: "/images/parade.jpg", size: "md:col-span-2 md:row-span-2" },
    { src: "/images/costumes.jpeg", size: "col-span-1" },
    { src: "/images/", size: "col-span-1" },
    { src: "/images/", size: "md:col-span-2" },
  ];

  return (
    <section
      id="gallery"
      className="w-full bg-sky-500 dark:bg-sky-900 rounded-t-[3rem] py-32 -mt-12 relative z-20"
    >
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-5xl font-bold text-white mb-12"
        >
          Gallery
        </motion.h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px]">
          {images.map((img, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.02 }}
              className={`bg-white/20 rounded-3xl overflow-hidden border border-white/20 ${img.size}`}
            >
              <div className="w-full h-full flex items-center justify-center text-white/50 italic">
                {/* Image component would go here */}
                Image {i + 1}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
