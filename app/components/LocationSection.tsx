"use client";

import { motion } from "framer-motion";

const openingHours = [
  { day: "Monday – Wednesday", hours: "Closed" },
  { day: "Thursday", hours: "23:00 – 05:00" },
  { day: "Friday", hours: "23:00 – 06:00" },
  { day: "Saturday", hours: "00:00 – 07:00" },
  { day: "Sunday", hours: "Closed" },
];

const socials = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
      </svg>
    ),
  },
  {
    name: "TikTok",
    href: "https://www.tiktok.com/",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V9.01a8.16 8.16 0 004.77 1.52V7.07a4.85 4.85 0 01-1-.38z"/>
      </svg>
    ),
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
      </svg>
    ),
  },
];

export default function LocationSection() {
  return (
    <section id="info" className="section-pad border-t border-white/5">
      <div className="max-w-screen-xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          {/* Location */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="label-overline mb-6">Location</p>
            <address className="not-italic">
              <p className="text-white font-bold text-lg mb-1">Club Lustig</p>
              <p className="text-white/40 text-sm leading-loose">
                Tournooiveld 1<br />
                2511 AT Den Haag<br />
                The Netherlands
              </p>
            </address>
            <a
              href="https://maps.google.com/?q=Tournooiveld+1+Den+Haag"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 label-overline text-gold border-b border-gold/30 hover:border-gold transition-colors duration-300 mt-5 pb-0.5"
            >
              Get directions →
            </a>
          </motion.div>

          {/* Opening hours */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <p className="label-overline mb-6">Opening Hours</p>
            <ul className="space-y-3">
              {openingHours.map((item) => (
                <li
                  key={item.day}
                  className="flex justify-between items-baseline border-b border-white/5 pb-3"
                >
                  <span className="text-white/40 text-sm">{item.day}</span>
                  <span
                    className={`text-sm font-medium ${
                      item.hours === "Closed" ? "text-white/20" : "text-gold"
                    }`}
                  >
                    {item.hours}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact + Social */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="label-overline mb-6">Connect</p>
            <div className="space-y-3 mb-10">
              <a
                href="mailto:info@clublustig.nl"
                className="block text-white/40 text-sm hover:text-white transition-colors duration-300"
              >
                info@clublustig.nl
              </a>
              <a
                href="mailto:vip@clublustig.nl"
                className="block text-white/40 text-sm hover:text-gold transition-colors duration-300"
              >
                vip@clublustig.nl
              </a>
              <a
                href="mailto:booking@clublustig.nl"
                className="block text-white/40 text-sm hover:text-white transition-colors duration-300"
              >
                booking@clublustig.nl
              </a>
            </div>

            {/* Socials */}
            <p className="label-overline mb-4 text-white/30">Follow</p>
            <div className="flex gap-4">
              {socials.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.name}
                  className="w-10 h-10 flex items-center justify-center border border-white/10 text-white/40 hover:border-gold hover:text-gold transition-all duration-300"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
