import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title:
    "Terapia Online para Hispanohablantes en el Exterior | Daniela Orozco Psicóloga",
  description:
    "¿Vives lejos de casa y sientes un vacío? Agenda una llamada gratuita y transforma la soledad, ansiedad y desarraigo en paz interior y propósito. Terapia Gestalt y Psicología Transpersonal online.",
  keywords: [
    "terapia online",
    "psicóloga hispanohablante",
    "terapia para migrantes",
    "duelo migratorio",
    "terapia gestalt",
    "psicología transpersonal",
    "Daniela Orozco",
    "terapia en español",
    "bienestar emocional",
    "ansiedad migración",
    "soledad migrantes",
    "psicoterapia online",
    "psicóloga para colombianos en el exterior",
  ],
  openGraph: {
    title:
      "Terapia Online para Hispanohablantes en el Exterior | Daniela Orozco Psicóloga",
    description:
      "¿Vives lejos de casa y sientes un vacío? Agenda una llamada gratuita y transforma la soledad, ansiedad y desarraigo en paz interior y propósito.",
    url: "https://danielaorozco.com", // Cambia por el dominio real
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
