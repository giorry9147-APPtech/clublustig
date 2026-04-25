"use client";

import { motion } from "framer-motion";
import type { Event } from "@/app/lib/data";

interface EventCardProps {
  event: Event;
  index: number;
}

export default function EventCard({ event, index }: EventCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="group relative flex-shrink-0 w-[280px] sm:w-[320px] cursor-pointer"
    >
      {/* Image via CSS background — never crashes on missing file */}
      <div
        className="relative h-[400px] sm:h-[460px] overflow-hidden transition-transform duration-700 group-hover:scale-[1.02]"
        style={{
          backgroundImage: `url('${event.image}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundColor: "#111",
          background: `linear-gradient(160deg, #1e1408 0%, #0f0f0f 60%, #0a0a0a 100%)`,
        }}
      >
        {/* Actual image on top — doesn't crash when missing */}
        <div
          className="absolute inset-0 transition-transform duration-700 group-hover:scale-105"
          style={{
            backgroundImage: `url('${event.image}')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

        {/* Genre tag */}
        <div className="absolute top-4 left-4 z-10">
          <span className="label-overline glass px-3 py-1.5 text-white/70 border-0">
            {event.genre}
          </span>
        </div>

        {/* Hover glow border */}
        <div className="absolute inset-0 border border-gold/0 group-hover:border-gold/20 transition-colors duration-500 z-10" />
      </div>

      {/* Info */}
      <div className="absolute bottom-0 left-0 right-0 p-5 z-20">
        <p className="label-overline text-gold mb-2">{event.date}</p>
        <h3 className="text-white font-black text-2xl tracking-tight leading-none mb-1 uppercase">
          {event.title}
        </h3>
        <p className="text-white/50 text-sm tracking-wide mb-4">{event.subtitle}</p>

        <a
          href={event.ticketUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          className="inline-flex items-center gap-2 label-overline text-gold border-b border-gold/30 pb-0.5 hover:border-gold transition-colors duration-300"
        >
          Buy Ticket
          <span>→</span>
        </a>
      </div>
    </motion.article>
  );
}
