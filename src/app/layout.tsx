import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import JsonLd from "./components/JsonLd";
import GoogleAnalytics from "./components/GoogleAnalytics";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Psicóloga Daniela Orozco | Terapia Online en Español | Miami",
  description:
    "Psicóloga colombiana especializada en terapia online en español. Ayudo a hispanohablantes en Miami con ansiedad, depresión, duelo migratorio y autoconocimiento. Primera sesión gratuita.",
  keywords: [
    "psicóloga miami",
    "terapia online español",
    "psicólogo hispano miami",
    "terapia ansiedad español",
    "psicóloga colombiana miami",
    "duelo migratorio",
    "terapia depresión español",
    "autoconocimiento",
    "psicólogo online",
    "terapia hispana miami",
  ],
  authors: [{ name: "Daniela Orozco Z." }],
  creator: "Daniela Orozco Z.",
  publisher: "Daniela Orozco Z. Psicóloga",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://www.daniela-orozco.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Psicóloga Daniela Orozco | Terapia Online en Español | Miami",
    description:
      "Psicóloga colombiana especializada en terapia online en español. Ayudo a hispanohablantes en Miami con ansiedad, depresión, duelo migratorio y autoconocimiento.",
    url: "https://www.daniela-orozco.com",
    siteName: "Daniela Orozco Psicóloga",
    images: [
      {
        url: "/daniela-profesional.jpg",
        width: 1200,
        height: 630,
        alt: "Daniela Orozco, psicóloga profesional",
      },
    ],
    locale: "es_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Psicóloga Daniela Orozco | Terapia Online en Español | Miami",
    description:
      "Psicóloga colombiana especializada en terapia online en español. Ayudo a hispanohablantes en Miami.",
    images: ["/daniela-profesional.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "tu-codigo-verificacion-google",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/logo.png" />
        <meta name="geo.region" content="US-FL" />
        <meta name="geo.placename" content="Miami, Florida" />
        <meta name="geo.position" content="25.7617;-80.1918" />
        <meta name="ICBM" content="25.7617, -80.1918" />
        <meta name="DC.title" content="Psicóloga Daniela Orozco Miami" />
        <meta name="DC.creator" content="Daniela Orozco Z." />
        <meta name="DC.subject" content="Psicología, Terapia Online, Español" />
        <meta
          name="DC.description"
          content="Psicóloga colombiana especializada en terapia online en español para hispanohablantes en Miami"
        />
        <meta name="DC.publisher" content="Daniela Orozco Z." />
        <meta name="DC.contributor" content="Daniela Orozco Z." />
        <meta name="DC.date" content="2024" />
        <meta name="DC.type" content="Service" />
        <meta name="DC.format" content="text/html" />
        <meta name="DC.identifier" content="https://www.daniela-orozco.com" />
        <meta name="DC.language" content="es" />
        <meta name="DC.coverage" content="Miami, Florida, Estados Unidos" />
        <meta name="DC.rights" content="© 2024 Daniela Orozco Z." />
        <GoogleAnalytics />
      </head>
      <body className={inter.className}>
        <JsonLd />
        {children}
      </body>
    </html>
  );
}
