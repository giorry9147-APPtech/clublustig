"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import type { Event } from "@/app/lib/data";

export default function TicketCard({ event, index }: { event: Event; index: number }) {
  const [quantities, setQuantities] = useState<Record<string, number>>(
    Object.fromEntries(event.tickets.map((t) => [t.id, 0]))
  );

  const change = (id: string, delta: number) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: Math.max(0, Math.min(10, (prev[id] ?? 0) + delta)),
    }));
  };

  const { total, totalTickets } = useMemo(() => {
    let total = 0;
    let totalTickets = 0;
    for (const t of event.tickets) {
      const qty = quantities[t.id] ?? 0;
      total += t.price * qty;
      totalTickets += qty;
    }
    return { total, totalTickets };
  }, [quantities, event.tickets]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: index * 0.1 }}
      className="border border-white/5 hover:border-white/10 transition-colors duration-300 overflow-hidden"
    >
      <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr]">

        {/* Flyer */}
        <div
          className="hidden lg:block relative min-h-[320px] bg-[#111]"
          style={{
            backgroundImage: `url('${event.image}')`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        />

        {/* Info + tickets */}
        <div className="p-6 sm:p-8 flex flex-col gap-6">

          {/* Event header */}
          <div className="flex items-start justify-between gap-4 pb-6 border-b border-white/5">
            <div>
              <p className="label-overline text-gold mb-1">{event.date} · {event.time}</p>
              <h2 className="text-white font-black text-2xl sm:text-3xl uppercase tracking-tight leading-none mb-1">
                {event.title}
              </h2>
              <p className="text-white/40 text-sm tracking-wide">{event.subtitle}</p>
            </div>
            {/* Mobiel flyer thumbnail */}
            <div
              className="lg:hidden flex-shrink-0 w-20 h-20 bg-[#111]"
              style={{
                backgroundImage: `url('${event.image}')`,
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
            />
          </div>

          {/* Ticket categorieën */}
          <div className="flex flex-col gap-3">
            {event.tickets.map((ticket) => {
              const qty = quantities[ticket.id] ?? 0;
              return (
                <div
                  key={ticket.id}
                  className={`flex items-center justify-between gap-4 p-4 border transition-colors duration-200 ${
                    qty > 0 ? "border-gold/40 bg-gold/5" : "border-white/5 bg-white/[0.02]"
                  }`}
                >
                  {/* Naam + beschrijving */}
                  <div className="min-w-0 flex-1">
                    <p className="text-white font-bold text-sm tracking-wide">{ticket.name}</p>
                    <p className="text-white/30 text-xs mt-0.5">{ticket.description}</p>
                  </div>

                  {/* Prijs */}
                  <p className="text-gold font-black text-lg flex-shrink-0">
                    €{ticket.price}
                  </p>

                  {/* Quantity selector */}
                  <div className="flex items-center gap-3 flex-shrink-0">
                    <button
                      onClick={() => change(ticket.id, -1)}
                      disabled={qty === 0}
                      className="w-8 h-8 flex items-center justify-center border border-white/20 text-white hover:border-gold hover:text-gold disabled:opacity-20 disabled:cursor-not-allowed transition-all duration-200 text-lg font-bold"
                    >
                      −
                    </button>
                    <span className="w-5 text-center text-white font-bold text-sm">
                      {qty}
                    </span>
                    <button
                      onClick={() => change(ticket.id, 1)}
                      disabled={qty === 10}
                      className="w-8 h-8 flex items-center justify-center border border-white/20 text-white hover:border-gold hover:text-gold disabled:opacity-20 disabled:cursor-not-allowed transition-all duration-200 text-lg font-bold"
                    >
                      +
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Totaal + CTA */}
          <div className="flex items-center justify-between gap-4 pt-6 border-t border-white/5 mt-auto">
            <div>
              {totalTickets > 0 ? (
                <>
                  <p className="text-white/30 text-xs tracking-widest uppercase mb-0.5">
                    {totalTickets} ticket{totalTickets !== 1 ? "s" : ""}
                  </p>
                  <p className="text-white font-black text-2xl">€{total}</p>
                </>
              ) : (
                <p className="text-white/20 text-sm tracking-wide">Selecteer tickets</p>
              )}
            </div>

            <a
              href={event.ticketUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-3 px-7 py-4 font-bold text-[0.75rem] tracking-[0.2em] uppercase transition-all duration-300 ${
                totalTickets > 0
                  ? "bg-gold text-black hover:bg-white cursor-pointer"
                  : "bg-white/5 text-white/20 cursor-not-allowed pointer-events-none"
              }`}
            >
              Ga naar kassa →
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
