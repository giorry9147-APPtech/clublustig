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
    time: "23:00 – 08:00",
    image: "/images/events/event-1.jpeg",
    ticketUrl: "https://clublustig.nl/Tickets.html",
    genre: "Hip-Hop / Caribbean",
    isFeatured: true,
  },
  {
    id: "2",
    title: "SEXY SATURDAY",
    subtitle: "Typical • Mike Motion • Poison D • Mc Raffi • Josh",
    date: "ZAT 25 APR",
    time: "23:00 – 08:00",
    image: "/images/events/event-2.PNG",
    ticketUrl: "https://clublustig.nl/Tickets.html",
    genre: "Club / Mixed",
  },
  {
    id: "3",
    title: "KINGS NIGHT",
    subtitle: "Met Latu",
    date: "ZO 26 APR",
    time: "23:00 – 08:00",
    image: "/images/events/event-3.PNG",
    ticketUrl: "https://clublustig.nl/Tickets.html",
    genre: "Club / Mixed",
  },
  {
    id: "4",
    title: "BUBBLING HOUSE",
    subtitle: "Party — Moortje • Dobbel 9 • Mc Raffi",
    date: "WO 13 MEI",
    time: "23:00 – 08:00",
    image: "/images/events/event-4.jpeg",
    ticketUrl: "https://clublustig.nl/Tickets.html",
    genre: "Bubbling / House",
  },
  {
    id: "5",
    title: "TSEAN",
    subtitle: "Live on Stage",
    date: "VR 22 MEI",
    time: "23:00 – 08:00",
    image: "/images/events/event-5.jpeg",
    ticketUrl: "https://clublustig.nl/Tickets.html",
    genre: "Hip-Hop / R&B",
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
