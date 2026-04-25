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
    title: "NOIR",
    subtitle: "A Night of Deep House",
    date: "FRI 02 MAY",
    time: "23:00 – 06:00",
    image: "/images/events/event-1.jpeg",
    ticketUrl: "https://www.paylogic.com/en/",
    genre: "Deep House / Minimal",
    isFeatured: true,
  },
  {
    id: "2",
    title: "LUSTIG X BERGHAIN",
    subtitle: "Berlin Techno Special",
    date: "SAT 10 MAY",
    time: "00:00 – 08:00",
    image: "/images/events/event-2.PNG",
    ticketUrl: "https://www.paylogic.com/en/",
    genre: "Techno / Industrial",
  },
  {
    id: "3",
    title: "GOLDEN HOUR",
    subtitle: "Afro & Latin Grooves",
    date: "FRI 16 MAY",
    time: "22:00 – 05:00",
    image: "/images/events/event-3.PNG",
    ticketUrl: "https://www.paylogic.com/en/",
    genre: "Afrotech / Dancehall",
  },
  {
    id: "4",
    title: "SUBCULTURE",
    subtitle: "Underground Rave Edition",
    date: "SAT 24 MAY",
    time: "23:00 – 07:00",
    image: "/images/events/event-4.jpeg",
    ticketUrl: "https://www.paylogic.com/en/",
    genre: "Hard Techno / EBM",
  },
  {
    id: "5",
    title: "SILK",
    subtitle: "House Music & More",
    date: "FRI 30 MAY",
    time: "22:00 – 05:00",
    image: "/images/events/event-5.jpeg",
    ticketUrl: "https://www.paylogic.com/en/",
    genre: "Tech House / Nu Disco",
  },
];

export const galleryImages: GalleryImage[] = [
  { id: "g1", src: "/images/gallery/gallery-1.jpg", alt: "Club night 1", span: "tall" },
  { id: "g2", src: "/images/gallery/gallery-2.jpg", alt: "Crowd energy", span: "normal" },
  { id: "g3", src: "/images/gallery/gallery-3.jpg", alt: "DJ set", span: "normal" },
  { id: "g4", src: "/images/gallery/gallery-4.jpg", alt: "Bar vibes", span: "wide" },
  { id: "g5", src: "/images/gallery/gallery-5.jpg", alt: "Lights show", span: "tall" },
  { id: "g6", src: "/images/gallery/gallery-6.jpg", alt: "Dance floor", span: "normal" },
  { id: "g7", src: "/images/gallery/gallery-7.jpg", alt: "VIP area", span: "normal" },
];
