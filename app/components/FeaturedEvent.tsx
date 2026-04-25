"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { events } from "@/app/lib/data";

export default function FeaturedEvent() {
  const featured = events.find((e) => e.isFeatured) ?? events[0];
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const imgScale = useTransform(scrollYProgress, [0, 1], [1.08, 1.0]);

  return (
    <section ref={ref} className="section-pad bg-[#0d0d0d] relative overflow-hidden">
      {/* Background accent */}
      <div
        className="absolute top-0 right-0 w-1/2 h-full opacity-5 pointer-events-none"
        style={{ background: "radial-gradient(ellipse at top right, #c9a96e, transparent 70%)" }}
      />

      <div className="max-w-screen-xl mx-auto px-6">
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="label-overline mb-12 text-white/40"
        >
          Featured Event
        </motion.p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-stretch min-h-[560px]">
          {/* Image — CSS background, never crashes on missing file */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="relative overflow-hidden min-h-[340px] lg:min-h-[560px]"
            style={{ backgroundColor: "#111" }}
          >
            <motion.div
              style={{ scale: imgScale }}
              className="absolute inset-0"
            >
              {/* CSS background image — silent on missing file */}
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: `url('${featured.image}')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  background: `linear-gradient(135deg, #1c1208 0%, #0f0f0f 60%, #080808 100%)`,
                }}
              />
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: `url('${featured.image}')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#0d0d0d] hidden lg:block" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d] via-transparent to-transparent lg:hidden" />
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col justify-center lg:pl-16 py-10 lg:py-0"
          >
            {/* Date */}
            <div className="inline-flex items-center gap-3 mb-8">
              <div className="w-8 h-[1px] bg-gold" />
              <span className="label-overline text-gold">{featured.date}</span>
              <span className="label-overline text-white/30">{featured.time}</span>
            </div>

            <h2
              className="heading-xl text-white mb-4 leading-[0.95]"
              style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}
            >
              {featured.title}
            </h2>

            <p className="text-white/50 text-base tracking-widest uppercase mb-3 text-sm">
              {featured.subtitle}
            </p>
            <p className="text-white/30 label-overline mb-10">{featured.genre}</p>

            {/* Details grid */}
            <div className="grid grid-cols-2 gap-4 mb-10 border-t border-white/5 pt-8">
              {[
                { label: "Venue", value: "Club Lustig" },
                { label: "City", value: "Den Haag, NL" },
                { label: "Doors", value: featured.time.split("–")[0].trim() },
                { label: "Age", value: "18+" },
              ].map((item) => (
                <div key={item.label}>
                  <p className="label-overline text-white/30 mb-1">{item.label}</p>
                  <p className="text-white font-medium text-sm tracking-wide">{item.value}</p>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="flex items-center gap-4 flex-wrap">
              <a
                href={featured.ticketUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-gold text-black label-overline hover:bg-gold-light transition-all duration-300 glow-gold"
              >
                Buy Ticket <span>→</span>
              </a>
              <a
                href="#events"
                className="label-overline text-white/40 hover:text-white transition-colors duration-300 border-b border-white/20 hover:border-white/50 pb-0.5"
              >
                All events
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
