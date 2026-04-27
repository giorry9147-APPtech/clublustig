export interface TicketCategory {
  id: string;
  name: string;
  price: number;
  description: string;
}

export interface Event {
  id: string;
  title: string;
  subtitle: string;
  date: string;
  time: string;
  image: string;
  ticketUrl: string;
  genre: string;
  isFeatured?: boolean;
  tickets: TicketCategory[];
}

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  span?: "tall" | "wide" | "normal";
}

export const events: Event[] = [
  {
    id: "1",
    title: "DOBBEL9",
    subtitle: "Birthday Bash",
    date: "VR 24 APR",
    time: "23:00 â€“ 08:00",
    image: "/images/events/event-1.jpeg",
    ticketUrl: "https://clublustig.nl/Tickets.html",
    genre: "Hip-Hop / Caribbean",
    isFeatured: true,
    tickets: [
      { id: "1-eb",  name: "Early Bird",  price: 12, description: "Beperkt beschikbaar" },
      { id: "1-reg", name: "Normaal",     price: 17, description: "Standaard entree" },
      { id: "1-vip", name: "VIP Tafel",   price: 45, description: "Inclusief fles" },
    ],
  },
  {
    id: "2",
    title: "SEXY SATURDAY",
    subtitle: "Typical â€¢ Mike Motion â€¢ Poison D â€¢ Mc Raffi â€¢ Josh",
    date: "ZAT 25 APR",
    time: "23:00 â€“ 08:00",
    image: "/images/events/event-2.PNG",
    ticketUrl: "https://clublustig.nl/Tickets.html",
    genre: "Club / Mixed",
    tickets: [
      { id: "2-eb",  name: "Early Bird", price: 10, description: "Beperkt beschikbaar" },
      { id: "2-reg", name: "Normaal",    price: 15, description: "Standaard entree" },
    ],
  },
  {
    id: "3",
    title: "KINGS NIGHT",
    subtitle: "Met Latu",
    date: "ZO 26 APR",
    time: "23:00 â€“ 08:00",
    image: "/images/events/event-3.PNG",
    ticketUrl: "https://clublustig.nl/Tickets.html",
    genre: "Club / Mixed",
    tickets: [
      { id: "3-eb",  name: "Early Bird", price: 10, description: "Beperkt beschikbaar" },
      { id: "3-reg", name: "Normaal",    price: 15, description: "Standaard entree" },
      { id: "3-vip", name: "VIP Tafel",  price: 40, description: "Inclusief fles" },
    ],
  },
  {
    id: "4",
    title: "BUBBLING HOUSE",
    subtitle: "Party â€” Moortje â€¢ Dobbel 9 â€¢ Mc Raffi",
    date: "WO 13 MEI",
    time: "23:00 â€“ 08:00",
    image: "/images/events/event-4.jpeg",
    ticketUrl: "https://clublustig.nl/Tickets.html",
    genre: "Bubbling / House",
    tickets: [
      { id: "4-eb",  name: "Early Bird", price: 8,  description: "Beperkt beschikbaar" },
      { id: "4-reg", name: "Normaal",    price: 12, description: "Standaard entree" },
    ],
  },
  {
    id: "5",
    title: "TSEAN",
    subtitle: "Live on Stage",
    date: "VR 22 MEI",
    time: "23:00 â€“ 08:00",
    image: "/images/events/event-5.jpeg",
    ticketUrl: "https://clublustig.nl/Tickets.html",
    genre: "Hip-Hop / R&B",
    tickets: [
      { id: "5-eb",  name: "Early Bird", price: 15, description: "Beperkt beschikbaar" },
      { id: "5-reg", name: "Normaal",    price: 22, description: "Standaard entree" },
      { id: "5-vip", name: "VIP Tafel",  price: 55, description: "Inclusief fles" },
    ],
  },
];

export const galleryImages: GalleryImage[] = [
  {
    id: "g1",
    src: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800&q=80",
    alt: "Club sfeer",
    span: "tall",
  },
  {
    id: "g2",
    src: "https://images.unsplash.com/photo-1571266028243-e4733b0f0bb0?w=800&q=80",
    alt: "DJ set",
    span: "normal",
  },
  {
    id: "g3",
    src: "https://images.unsplash.com/photo-1566737236500-c8ac43014a67?w=800&q=80",
    alt: "Dancefloor",
    span: "normal",
  },
  {
    id: "g4",
    src: "https://images.unsplash.com/photo-1574391884720-bbc3740c59d1?w=800&q=80",
    alt: "Crowd energy",
    span: "wide",
  },
  {
    id: "g5",
    src: "https://images.unsplash.com/photo-1496024840928-4c417adf211d?w=800&q=80",
    alt: "Licht show",
    span: "tall",
  },
  {
    id: "g6",
    src: "https://images.unsplash.com/photo-1545128485-c400e7702796?w=800&q=80",
    alt: "Bar vibes",
    span: "normal",
  },
  {
    id: "g7",
    src: "https://images.unsplash.com/photo-1518997351979-4e1b17b89b68?w=800&q=80",
    alt: "VIP area",
    span: "normal",
  },
  {
    id: "g8",
    src: "https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?w=800&q=80",
    alt: "Feestvibes",
    span: "normal",
  },
];
