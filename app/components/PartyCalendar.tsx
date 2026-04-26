"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { events } from "@/app/lib/data";

// Parse "VR 24 APR" / "WO 13 MEI" → { month: 3, day: 24 } (0-based JS month)
function parseEventDate(dateStr: string): { month: number; day: number } | null {
  const match = dateStr.match(/(\d+)\s+(\w+)/);
  if (!match) return null;
  const day = parseInt(match[1]);
  const m = match[2].toUpperCase();
  const month = m === "APR" ? 3 : m === "MEI" ? 4 : -1;
  return month >= 0 ? { month, day } : null;
}

const eventMap: Record<string, typeof events[0]> = {};
events.forEach((e) => {
  const p = parseEventDate(e.date);
  if (p) eventMap[`${p.month}-${p.day}`] = e;
});

const MONTHS = [
  { label: "APRIL 2026", year: 2026, month: 3 },
  { label: "MEI 2026",   year: 2026, month: 4 },
  { label: "JUNI 2026",  year: 2026, month: 5 },
  { label: "JULI 2026",  year: 2026, month: 6 },
];

const DAY_LABELS = ["MA", "DI", "WO", "DO", "VR", "ZA", "ZO"];

function getDaysInMonth(year: number, month: number) {
  return new Date(year, month + 1, 0).getDate();
}

function getStartDay(year: number, month: number) {
  const day = new Date(year, month, 1).getDay();
  return (day + 6) % 7; // Mon=0 … Sun=6
}

export default function PartyCalendar() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const current = MONTHS[index];
  const daysInMonth = getDaysInMonth(current.year, current.month);
  const startDay = getStartDay(current.year, current.month);

  const go = (dir: number) => {
    const next = index + dir;
    if (next < 0 || next >= MONTHS.length) return;
    setDirection(dir);
    setIndex(next);
  };

  const variants = {
    enter: (dir: number) => ({ x: dir > 0 ? 60 : -60, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({ x: dir > 0 ? -60 : 60, opacity: 0 }),
  };

  // Events this month
  const thisMonthEvents = events.filter((e) => {
    const p = parseEventDate(e.date);
    return p?.month === current.month;
  });

  return (
    <section id="calendar" className="section-pad bg-[#080808]">
      <div className="max-w-screen-xl mx-auto px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-14 text-center"
        >
          <p className="label-overline mb-3 text-white/40">Agenda</p>
          <h2 className="heading-xl text-white">Party Calendar</h2>
        </motion.div>

        {/* Calendar card */}
        <div className="max-w-2xl mx-auto border border-white/5 overflow-hidden">

          {/* Month navigation bar */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-white/5">
            <button
              onClick={() => go(-1)}
              disabled={index === 0}
              className="w-9 h-9 flex items-center justify-center border border-white/10 text-white/40 hover:border-gold hover:text-gold disabled:opacity-20 disabled:cursor-not-allowed transition-all duration-300"
              aria-label="Vorige maand"
            >
              ‹
            </button>

            <AnimatePresence mode="wait" custom={direction}>
              <motion.p
                key={current.label}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.25, ease: "easeInOut" }}
                className="label-overline text-gold tracking-[0.3em]"
              >
                {current.label}
              </motion.p>
            </AnimatePresence>

            <button
              onClick={() => go(1)}
              disabled={index === MONTHS.length - 1}
              className="w-9 h-9 flex items-center justify-center border border-white/10 text-white/40 hover:border-gold hover:text-gold disabled:opacity-20 disabled:cursor-not-allowed transition-all duration-300"
              aria-label="Volgende maand"
            >
              ›
            </button>
          </div>

          {/* Calendar grid */}
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={current.label}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.25, ease: "easeInOut" }}
              className="p-6"
            >
              {/* Day labels */}
              <div className="grid grid-cols-7 mb-3">
                {DAY_LABELS.map((d) => (
                  <div key={d} className="text-center label-overline text-white/20 py-1">
                    {d}
                  </div>
                ))}
              </div>

              {/* Days */}
              <div className="grid grid-cols-7 gap-y-2">
                {Array.from({ length: startDay }).map((_, i) => (
                  <div key={`e-${i}`} />
                ))}

                {Array.from({ length: daysInMonth }, (_, i) => i + 1).map((day) => {
                  const ev = eventMap[`${current.month}-${day}`];
                  return (
                    <div key={day} className="flex flex-col items-center gap-1">
                      {ev ? (
                        <a
                          href={ev.ticketUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          title={ev.title}
                          className="group flex flex-col items-center gap-1"
                        >
                          {/* Gold circle */}
                          <span className="w-9 h-9 rounded-full bg-gold flex items-center justify-center text-black text-xs font-black ring-2 ring-gold/40 group-hover:bg-white group-hover:ring-white/40 transition-all duration-300">
                            {day}
                          </span>
                          {/* Event name below */}
                          <span className="text-[0.45rem] font-bold tracking-wide text-gold uppercase text-center leading-tight max-w-[44px] truncate group-hover:text-white transition-colors duration-300">
                            {ev.title}
                          </span>
                        </a>
                      ) : (
                        <span className="w-9 h-9 flex items-center justify-center text-white/25 text-xs">
                          {day}
                        </span>
                      )}
                    </div>
                  );
                })}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Events this month */}
        {thisMonthEvents.length > 0 && (
          <motion.div
            key={current.label + "-events"}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="max-w-2xl mx-auto mt-6 flex flex-col sm:flex-row gap-3 flex-wrap"
          >
            {thisMonthEvents.map((e) => (
              <a
                key={e.id}
                href={e.ticketUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 border border-white/5 hover:border-gold/40 px-4 py-3 flex-1 min-w-[200px] transition-all duration-300"
              >
                <span className="w-2 h-2 rounded-full bg-gold flex-shrink-0" />
                <div className="min-w-0">
                  <p className="label-overline text-gold group-hover:text-white transition-colors duration-300 truncate">
                    {e.title}
                  </p>
                  <p className="text-white/30 text-[0.6rem] tracking-widest uppercase mt-0.5">
                    {e.date} · {e.time}
                  </p>
                </div>
                <span className="ml-auto label-overline text-white/20 group-hover:text-gold transition-colors duration-300 flex-shrink-0">
                  →
                </span>
              </a>
            ))}
          </motion.div>
        )}

        {thisMonthEvents.length === 0 && (
          <p className="max-w-2xl mx-auto mt-6 label-overline text-white/20 text-center">
            Nog geen events gepland voor deze maand
          </p>
        )}
      </div>
    </section>
  );
}
