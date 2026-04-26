"use client";

import { useRef, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function HeroSection() {
  const ref = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  // Mobiel vereist programmatische play() — autoPlay attribuut alleen is niet genoeg
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = true;
    v.play().catch(() => {});
  }, []);

  return (
    <section
      ref={ref}
      style={{ width: "100vw", height: "100vh", position: "relative", overflow: "hidden" }}
    >
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          objectFit: "cover",
          zIndex: 0,
        }}
      >
        <source src="/videos/hero1.mp4" type="video/mp4" />
      </video>

      {/* Top gradient — navbar leesbaar */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "200px",
          background: "linear-gradient(to bottom, rgba(0,0,0,0.6) 0%, transparent 100%)",
          zIndex: 1,
          pointerEvents: "none",
        }}
      />

      {/* Bottom fade naar pagina */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "160px",
          background: "linear-gradient(to top, #0a0a0a 0%, transparent 100%)",
          zIndex: 1,
          pointerEvents: "none",
        }}
      />

      {/* Knoppen — onderin */}
      <motion.div
        style={{ opacity, zIndex: 2, position: "absolute", left: 0, right: 0 }}
        className="flex flex-col sm:flex-row items-center justify-center gap-4 px-6 bottom-20 sm:bottom-32"
      >
        <motion.a
          href="#events"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="px-8 py-4 bg-white text-black label-overline hover:bg-gold hover:text-black transition-all duration-300 min-w-[160px] text-center"
        >
          View Events
        </motion.a>
        <motion.a
          href="#events"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="px-8 py-4 border border-white text-white label-overline hover:border-gold hover:text-gold transition-all duration-300 min-w-[160px] text-center"
        >
          Buy Tickets
        </motion.a>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        style={{ opacity, zIndex: 2, position: "absolute", bottom: "1.5rem", left: "50%", transform: "translateX(-50%)" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 1 }}
        className="flex flex-col items-center gap-1"
      >
        <span className="label-overline text-white/40">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="w-[1px] h-8 bg-gradient-to-b from-white/40 to-transparent"
        />
      </motion.div>
    </section>
  );
}
