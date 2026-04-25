"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import EventCard from "./EventCard";
import { events } from "@/app/lib/data";

export default function EventsSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <section id="events" className="section-pad overflow-hidden">
      <div className="max-w-screen-xl mx-auto">
        {/* Header */}
        <div className="px-6 mb-12 flex items-end justify-between">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="label-overline mb-3">Upcoming</p>
            <h2 className="heading-xl text-white">Events</h2>
          </motion.div>

          <motion.a
            href="#"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden sm:block label-overline text-white/40 hover:text-gold transition-colors duration-300 border-b border-white/10 hover:border-gold/40 pb-0.5"
          >
            View all →
          </motion.a>
        </div>

        {/* Horizontal scroll */}
        <div
          ref={scrollRef}
          className="scroll-container flex gap-5 px-6 pb-4"
          style={{ cursor: "grab" }}
          onMouseDown={(e) => {
            const el = scrollRef.current;
            if (!el) return;
            el.style.cursor = "grabbing";
            const startX = e.pageX - el.offsetLeft;
            const scrollLeft = el.scrollLeft;
            const onMove = (ev: MouseEvent) => {
              const x = ev.pageX - el.offsetLeft;
              el.scrollLeft = scrollLeft - (x - startX);
            };
            const onUp = () => {
              el.style.cursor = "grab";
              window.removeEventListener("mousemove", onMove);
              window.removeEventListener("mouseup", onUp);
            };
            window.addEventListener("mousemove", onMove);
            window.addEventListener("mouseup", onUp);
          }}
        >
          {events.map((event, i) => (
            <EventCard key={event.id} event={event} index={i} />
          ))}

          {/* Spacer */}
          <div className="flex-shrink-0 w-6" />
        </div>

        {/* Drag hint */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="px-6 mt-4 label-overline text-white/20 sm:hidden"
        >
          ← Swipe to see more →
        </motion.p>
      </div>
    </section>
  );
}
