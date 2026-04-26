"use client";

import { motion } from "framer-motion";

const WA = "31683831717";

function WhatsAppIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" className="flex-shrink-0">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="bg-[#050505] border-t border-white/5">
      <div className="max-w-screen-xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-14">

          {/* Logo + beschrijving */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex flex-col gap-4"
          >
            <div className="flex flex-col leading-none">
              <span className="text-[0.6rem] tracking-[0.35em] text-gold uppercase font-medium">Club</span>
              <span className="text-xl font-black tracking-tight text-white/80 uppercase leading-none">Lustig</span>
            </div>
            <p className="text-white/30 text-xs leading-relaxed tracking-wide max-w-[200px]">
              Den Haag's premier nightclub.<br />
              Premium events, VIP tables &<br />
              the finest music in The Netherlands.
            </p>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.08 }}
          >
            <p className="label-overline text-white/40 mb-5">Contact</p>
            <div className="flex flex-col gap-3">
              <a href="mailto:info@clublustig.nl"
                className="text-white/50 text-xs tracking-wide hover:text-gold transition-colors duration-300">
                info@clublustig.nl
              </a>
              <a href="tel:0683831717"
                className="text-white/50 text-xs tracking-wide hover:text-gold transition-colors duration-300">
                06 - 8383 1717
              </a>
              <p className="text-white/30 text-xs tracking-wide leading-relaxed">
                Spui 6, 2511 BS<br />Den Haag
              </p>
            </div>
          </motion.div>

          {/* Openingstijden */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.14 }}
          >
            <p className="label-overline text-white/40 mb-5">Openingstijden</p>
            <div className="flex flex-col gap-2.5 text-xs tracking-wide">
              {[
                { dag: "Vrijdag",  tijd: "23:00 – 08:00" },
                { dag: "Zaterdag", tijd: "23:00 – 08:00" },
                { dag: "Zondag",   tijd: "Op aanvraag" },
              ].map(({ dag, tijd }) => (
                <div key={dag} className="flex justify-between gap-4">
                  <span className="text-white/30">{dag}</span>
                  <span className="text-white/60">{tijd}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* WhatsApp + links */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <p className="label-overline text-white/40 mb-5">Direct contact</p>
            <a
              href={`https://wa.me/${WA}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-5 py-3 bg-[#25D366] text-white text-[0.7rem] font-bold tracking-[0.15em] uppercase hover:bg-[#1ebe5a] transition-colors duration-300 mb-6"
            >
              <WhatsAppIcon />
              WhatsApp ons
            </a>
            <div className="flex flex-col gap-2.5 mt-1">
              {[
                { label: "Tickets kopen",    href: "https://clublustig.nl/Tickets.html" },
                { label: "Booking",          href: "mailto:booking@clublustig.nl" },
                { label: "VIP reservering",  href: "mailto:vip@clublustig.nl" },
              ].map((l) => (
                <a key={l.label} href={l.href}
                  target={l.href.startsWith("http") ? "_blank" : undefined}
                  rel={l.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="label-overline text-white/25 hover:text-gold transition-colors duration-300">
                  {l.label} →
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="label-overline text-white/20">
            © {new Date().getFullYear()} Club Lustig — Spui 6, Den Haag
          </p>
          <p className="text-white/10 text-[10px] tracking-widest uppercase text-center">
            Drink responsibly · 18+ only · We reserve the right of admission
          </p>
        </div>
      </div>
    </footer>
  );
}
