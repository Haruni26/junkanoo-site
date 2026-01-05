"use client";
import { motion } from "motion/react";
import Image from "next/image";

export default function Gallery() {
  const images = [
    { src: "/images/", size: "md:col-span-2 md:row-span-2" },
    { src: "/images/costumes.jpeg", size: "col-span-1" },
    { src: "/images/", size: "col-span-1" },
    { src: "/images/", size: "md:col-span-2" },
  ];

  return (
    <section
      id="gallery"
      className="w-full bg-sky-900 rounded-t-[3rem] py-32 -mt-12 relative z-20"
    >
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl font-bold text-white mb-12"
        >
          Gallery
        </motion.h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px]">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3, delay: i * 0.1 }}
              viewport={{ once: true }}
              className={`relative bg-white/10 rounded-3xl overflow-hidden border border-white/20 ${img.size}`}
            >
              {img.src !== "/images/" ? (
                <Image
                  src={img.src}
                  alt={`Gallery image ${i + 1}`}
                  className="w-full h-full object-cover"
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-white/50 italic">
                  Coming Soon
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
