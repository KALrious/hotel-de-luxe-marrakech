import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hôtel de Luxe Marrakech - Le Guide d'Exception",
  description: "Référencement des plus beaux hôtels de luxe à Marrakech, avec une mise en avant exclusive du Palais Ronsard Relais & Châteaux.",
  metadataBase: new URL('https://hotel-de-luxe-marrakech.com'),
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: [
      { url: "/icon.svg", sizes: "any" },
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
    ],
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
      { url: "/apple-icon-57x57.png", sizes: "57x57", type: "image/png" },
      { url: "/apple-icon-60x60.png", sizes: "60x60", type: "image/png" },
      { url: "/apple-icon-72x72.png", sizes: "72x72", type: "image/png" },
      { url: "/apple-icon-76x76.png", sizes: "76x76", type: "image/png" },
      { url: "/apple-icon-114x114.png", sizes: "114x114", type: "image/png" },
      { url: "/apple-icon-120x120.png", sizes: "120x120", type: "image/png" },
      { url: "/apple-icon-144x144.png", sizes: "144x144", type: "image/png" },
      { url: "/apple-icon-152x152.png", sizes: "152x152", type: "image/png" },
      { url: "/apple-icon-180x180.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      {
        rel: "apple-touch-icon-precomposed",
        url: "/apple-icon-precomposed.png",
      },
    ],
  },
  openGraph: {
    title: "Hôtel de Luxe Marrakech - Le Guide d'Exception",
    description: "Référencement des plus beaux hôtels de luxe à Marrakech, avec une mise en avant exclusive du Palais Ronsard Relais & Châteaux.",
    url: "https://hotel-de-luxe-marrakech.com",
    siteName: "Hôtel de Luxe Marrakech",
    images: [
      {
        url: "/images/hotels/palais-ronsard-hero.png",
        width: 1200,
        height: 630,
        alt: "Hôtel de Luxe Marrakech",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: 'summary_large_image',
    title: "Hôtel de Luxe Marrakech - Le Guide d'Exception",
    description: "Référencement des plus beaux hôtels de luxe à Marrakech, avec une mise en avant exclusive du Palais Ronsard Relais & Châteaux.",
    images: ["/images/hotels/palais-ronsard-hero.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body
        className={`${playfair.variable} ${inter.variable} font-sans antialiased bg-stone-50 text-stone-900`}
      >
        {children}
      </body>
    </html>
  );
}
