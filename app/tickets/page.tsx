import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import { events } from "@/app/lib/data";
import TicketCard from "./TicketCard";

export const metadata = {
  title: "Tickets — Club Lustig",
  description: "Koop tickets voor de aankomende events van Club Lustig Den Haag.",
};

export default function TicketsPage() {
  return (
    <main className="relative bg-[#0a0a0a] min-h-screen">
      <Navbar />

      {/* Header */}
      <section className="pt-40 pb-16 px-6 border-b border-white/5">
        <div className="max-w-screen-xl mx-auto">
          <p className="label-overline text-white/30 mb-3">Club Lustig — Den Haag</p>
          <h1
            className="text-white font-black uppercase leading-none"
            style={{ fontSize: "clamp(3rem, 8vw, 7rem)" }}
          >
            Tickets
          </h1>
          <p className="text-white/30 text-sm tracking-widest uppercase mt-4">
            Selecteer je tickets en ga direct naar de kassa
          </p>
        </div>
      </section>

      {/* Events */}
      <section className="py-16 px-6">
        <div className="max-w-screen-xl mx-auto flex flex-col gap-6">
          {events.map((event, i) => (
            <TicketCard key={event.id} event={event} index={i} />
          ))}
        </div>
      </section>

      {/* Info banner */}
      <section className="py-10 px-6 border-t border-white/5">
        <div className="max-w-screen-xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-white/20 text-xs tracking-widest uppercase">
            <span>18+</span>
            <span className="w-1 h-1 rounded-full bg-white/20" />
            <span>Geldig ID verplicht</span>
            <span className="w-1 h-1 rounded-full bg-white/20" />
            <span>Dress code van toepassing</span>
          </div>
          <p className="text-white/20 text-xs tracking-wide">
            Vragen? <a href="mailto:info@clublustig.nl" className="hover:text-gold transition-colors duration-300">info@clublustig.nl</a>
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
