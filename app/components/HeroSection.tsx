"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const SLIDES = [
  { src: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=1600&q=85", animation: "kb-zoom-in" },
  { src: "https://images.unsplash.com/photo-1566737236500-c8ac43014a67?w=1600&q=85", animation: "kb-pan-right" },
  { src: "https://images.unsplash.com/photo-1574391884720-bbc3740c59d1?w=1600&q=85", animation: "kb-zoom-out" },
  { src: "https://images.unsplash.com/photo-1496024840928-4c417adf211d?w=1600&q=85", animation: "kb-pan-left" },
  { src: "https://images.unsplash.com/photo-1571266028243-e4733b0f0bb0?w=1600&q=85", animation: "kb-zoom-in-up" },
];

const INTERVAL = 5000;
const TRANSITION = 1500;

export default function HeroSection() {
  const ref = useRef<HTMLElement>(null);
  const [current, setCurrent] = useState(0);
  const [prev, setPrev] = useState<number | null>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((c) => {
        setPrev(c);
        return (c + 1) % SLIDES.length;
      });
    }, INTERVAL);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      ref={ref}
      className="relative overflow-hidden w-screen h-[60vh] sm:h-screen"
    >
      {/* Slides */}
      {SLIDES.map((slide, i) => {
        const isActive = i === current;
        const isPrev  = i === prev;
        return (
          <div
            key={slide.src}
            className="absolute inset-0"
            style={{
              zIndex: isActive ? 2 : isPrev ? 1 : 0,
              opacity: isActive ? 1 : 0,
              transition: `opacity ${TRANSITION}ms ease-in-out`,
            }}
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url('${slide.src}')`,
                animation: isActive
                  ? `${slide.animation} ${INTERVAL + TRANSITION}ms ease-in-out forwards`
                  : "none",
              }}
            />
          </div>
        );
      })}

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40 z-10 pointer-events-none" />

      {/* Top gradient — navbar leesbaar */}
      <div
        className="absolute inset-x-0 top-0 h-48 pointer-events-none z-10"
        style={{ background: "linear-gradient(to bottom, rgba(0,0,0,0.6) 0%, transparent 100%)" }}
      />

      {/* Bottom fade */}
      <div
        className="absolute inset-x-0 bottom-0 h-40 pointer-events-none z-10"
        style={{ background: "linear-gradient(to top, #0a0a0a 0%, transparent 100%)" }}
      />

      {/* Gecentreerd logo */}
      <motion.div
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none"
      >
        <img
          src="/images/logo.PNG"
          alt="Club Lustig"
          className="w-56 sm:w-80 md:w-96 select-none"
          style={{
            filter: "invert(1)",
            mixBlendMode: "screen",
          }}
        />
      </motion.div>

      {/* Knoppen */}
      <motion.div
        style={{ opacity, zIndex: 20, position: "absolute", left: 0, right: 0 }}
        className="flex flex-col sm:flex-row items-center justify-center gap-4 px-6 bottom-12 sm:bottom-32"
      >
        <motion.a
          href="/#events"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="px-8 py-4 bg-white text-black label-overline hover:bg-gold hover:text-black transition-all duration-300 min-w-[160px] text-center"
        >
          View Events
        </motion.a>
        <motion.a
          href="/tickets"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="px-8 py-4 border border-white text-white label-overline hover:border-gold hover:text-gold transition-all duration-300 min-w-[160px] text-center"
        >
          Buy Tickets
        </motion.a>
      </motion.div>

      {/* Slide dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => { setPrev(current); setCurrent(i); }}
            className={`w-1.5 h-1.5 rounded-full transition-all duration-500 ${
              i === current ? "bg-gold w-4" : "bg-white/30"
            }`}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
