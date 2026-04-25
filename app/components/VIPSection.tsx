"use client";

import { motion } from "framer-motion";

const perks = [
  { label: "Private Area", desc: "Exclusive seating away from the main crowd" },
  { label: "Bottle Service", desc: "Premium spirits & champagne delivered to your table" },
  { label: "Priority Entry", desc: "Skip the queue, arrive anytime you choose" },
  { label: "Personal Host", desc: "Dedicated team for a seamless evening" },
];

export default function VIPSection() {
  return (
    <section id="vip" className="section-pad relative overflow-hidden">
      {/* Gold gradient background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(201,169,110,0.04) 0%, transparent 70%)",
        }}
      />

      {/* Top divider */}
      <div className="absolute top-0 left-6 right-6 h-[1px] bg-gradient-to-r from-transparent via-gold/20 to-transparent" />

      <div className="max-w-screen-xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left text */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="label-overline mb-6"
            >
              VIP Experience
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="heading-xl text-white mb-8"
            >
              Reserve Your
              <br />
              <em className="text-gold not-italic">Table</em>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-white/40 leading-relaxed text-base mb-10 max-w-sm"
            >
              Elevate your night with exclusive table service at Club Lustig.
              An intimate atmosphere curated for those who expect the extraordinary.
            </motion.p>

            <motion.a
              href="mailto:vip@clublustig.nl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3 }}
              whileHover={{ scale: 1.02 }}
              className="inline-flex items-center gap-3 px-8 py-4 border border-gold text-gold label-overline hover:bg-gold hover:text-black transition-all duration-300 glow-gold-hover"
            >
              Reserve Table
              <span>→</span>
            </motion.a>
          </div>

          {/* Right perks grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {perks.map((perk, i) => (
              <motion.div
                key={perk.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="glass-light p-6 group hover:border-gold/20 transition-colors duration-500"
                style={{ border: "1px solid rgba(255,255,255,0.05)" }}
              >
                <div className="w-6 h-[1px] bg-gold mb-4 group-hover:w-10 transition-all duration-500" />
                <p className="text-white font-semibold text-sm tracking-wide mb-2 uppercase">
                  {perk.label}
                </p>
                <p className="text-white/35 text-sm leading-relaxed">{perk.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom divider */}
      <div className="absolute bottom-0 left-6 right-6 h-[1px] bg-gradient-to-r from-transparent via-gold/10 to-transparent" />
    </section>
  );
}
