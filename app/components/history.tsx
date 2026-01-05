"use client";

import { motion } from "framer-motion";

interface TimelineEvent {
  year: string;
  title: string;
  desc: string;
}

const events: TimelineEvent[] = [
  {
    year: "17th - 18th Century",
    title: "West African Roots",
    desc: "Origins trace back to enslaved West Africans who were granted three days off during Christmas. They celebrated by masking and dancing with whatever materials were available, retaining cultural memory in a new land.",
  },
  {
    year: "1834",
    title: "Post-Emancipation",
    desc: "After slavery was abolished, Junkanoo persisted as a powerful symbol of freedom and resistance. Costumes evolved from simple sea-sponges, fabric, and leaves to more structured paper designs.",
  },
  {
    year: "1950s - Present",
    title: "The Modern Spectacle",
    desc: "Junkanoo transformed into a highly organized, competitive masquerade. The introduction of cardboard and crepe paper allowed for the massive, intricate 3D costumes and brass sections seen on Bay Street today.",
  },
];

export default function History() {
  return (
    <section
      className="w-full bg-[#0a0a0a] rounded-t-[3rem] py-32 relative overflow-hidden"
      id="history"
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-125 bg-yellow-500/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20 text-center md:text-left"
        >
          <h2 className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-linear-to-r from-yellow-400 to-yellow-600 mb-6">
            The Journey
          </h2>
          <p className="text-white/60 text-lg max-w-2xl leading-relaxed">
            A story of resilience, rhythm, and the unyielding spirit of the
            Bahamian people.
          </p>
        </motion.div>

        <div className="relative">
          {/* Central Line (Desktop) & Left Line (Mobile) */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-0.5 h-full bg-linear-to-b from-yellow-500 via-yellow-500/20 to-transparent"></div>

          <div className="space-y-24">
            {events.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true, margin: "-100px" }}
                className={`flex flex-col md:flex-row items-center w-full ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Content Card */}
                <div className="w-full md:w-5/12 pl-20 md:pl-0 md:px-0">
                  <div className="group relative p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-yellow-500/10">
                    <span className="inline-block px-3 py-1 rounded-full bg-yellow-500/10 text-yellow-400 text-xs font-bold uppercase tracking-widest mb-4 border border-yellow-500/20">
                      {event.year}
                    </span>
                    <h3 className="text-3xl font-bold text-white mb-3 group-hover:text-yellow-400 transition-colors">
                      {event.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed">
                      {event.desc}
                    </p>
                  </div>
                </div>

                {/* Timeline Node (The Glowing Dot) */}
                <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                  <div className="w-4 h-4 rounded-full bg-yellow-400 shadow-[0_0_20px_rgba(250,204,21,0.6)] z-10">
                    <div className="absolute inset-0 w-4 h-4 bg-yellow-400 rounded-full animate-ping opacity-20"></div>
                  </div>
                </div>

                {/* Spacer for the other side */}
                <div className="hidden md:block md:w-5/12"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
