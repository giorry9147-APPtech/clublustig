import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Club Lustig — The Hottest Club in Den Haag",
  description:
    "Club Lustig is Den Haag's premier underground nightclub. Premium events, VIP tables, and the finest house & techno music in The Netherlands.",
  openGraph: {
    title: "Club Lustig",
    description: "The Hottest Club in Den Haag",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geist.variable} h-full`}>
      <body className="min-h-full antialiased">{children}</body>
    </html>
  );
}
