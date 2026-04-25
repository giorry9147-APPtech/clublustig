"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-[#050505]">
      <div className="max-w-screen-xl mx-auto px-6 py-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col leading-none"
          >
            <span className="text-[0.6rem] tracking-[0.35em] text-gold uppercase font-medium">Club</span>
            <span className="text-xl font-black tracking-tight text-white/60 uppercase leading-none">
              Lustig
            </span>
          </motion.div>

          {/* Links */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="flex items-center gap-8"
          >
            {[
              { label: "Privacy", href: "#" },
              { label: "Booking", href: "mailto:booking@clublustig.nl" },
              { label: "VIP", href: "mailto:vip@clublustig.nl" },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="label-overline text-white/25 hover:text-white/60 transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
          </motion.div>

          {/* Copyright */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="label-overline text-white/20"
          >
            © {new Date().getFullYear()} Club Lustig. Den Haag.
          </motion.p>
        </div>

        {/* Bottom line */}
        <div className="mt-8 pt-8 border-t border-white/5 text-center">
          <p className="text-white/10 text-[10px] tracking-widest uppercase">
            Drink responsibly · 18+ only · We reserve the right of admission
          </p>
        </div>
      </div>
    </footer>
  );
}
