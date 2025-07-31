"use client";

import Image from "next/image";
import { NumberPhone } from "./contants";

// Declaración de tipos para gtag
declare global {
  interface Window {
    gtag: (
      command: string,
      targetId: string,
      config?: Record<string, unknown>
    ) => void;
  }
}

interface HeroProps {
  title: string;
  highlight: string;
  subtitle: string;
  ctaText: string;
  ctaHref: string;
  heroImageSrc: string;
  heroImageAlt: string;
}

export default function Hero({
  title,
  highlight,
  subtitle,
  ctaText,
}: HeroProps) {
  return (
    <header className="relative flex items-center justify-center mx-auto mb-10 shadow-[0_2px_24px_rgba(247,198,212,0.08)] overflow-hidden min-h-[70vh] w-full py-20 md:py-32 lg:py-40">
      {/* Logo superior izquierdo */}
      <div className="absolute top-6 left-6 z-40">
        <Image
          src="/logo-blanco.png"
          alt="Logo Daniela Orozco Z. Psicóloga"
          width={140}
          height={60}
          className="w-[120px] md:w-[140px] h-auto drop-shadow-xl"
          priority
        />
      </div>
      {/* Video de fondo con blur y opacidad */}
      {/*     <video
        className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none"
        src="/video-calm.mp4"
        autoPlay
        loop
        muted
        playsInline
        style={{ filter: "blur(6px) brightness(0.6)" }}
      /> */}
      <Image
        className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none"
        src="/meditacion.jpg"
        alt="Paisaje sereno evocando calma y naturaleza"
        width={1920}
        height={1080}
        style={{ filter: "blur(6px) brightness(0.6)" }}
      />
      {/* Overlay oscuro para contraste */}
      <div className="absolute inset-0 w-full h-full bg-black/60 z-10" />
      {/* Contenido principal */}
      <div className="container mx-auto mt-3 relative z-30 flex flex-col md:flex-row items-center justify-center w-full px-6 md:px-16 gap-10 md:gap-20 min-h-[60vh] text-white">
        <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left text-white">
          <h1 className="font-extrabold text-2xl sm:text-3xl md:text-5xl mb-4 leading-tight tracking-[-0.01em] font-sans drop-shadow-xl text-white">
            {title}
            <br />
            <span className="font-bold drop-shadow-xl block mt-2 text-white">
              {highlight}
            </span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl mb-8 font-normal leading-7 drop-shadow-xl max-w-[480px] text-white">
            {subtitle}
          </p>
          <button
            onClick={() => {
              // Google Ads Conversion Tracking
              if (typeof window !== "undefined" && window.gtag) {
                window.gtag("event", "conversion", {
                  send_to: "AW-CONVERSION_ID/CONVERSION_LABEL",
                  value: 1.0,
                  currency: "USD",
                  transaction_id: Date.now().toString(),
                });
              }

              window.open(
                `https://wa.me/${NumberPhone}?text=Hola Daniela, soy hispanohablante en Miami y quiero agendar mi primera sesión gratuita. ¿Podemos coordinar?`,
                "_blank"
              );
            }}
            className="inline-block font-bold text-base md:text-lg px-7 md:px-10 py-3 md:py-4 rounded-full bg-[#e6a6b8] text-white shadow-2xl hover:bg-[#f7c6d4] hover:text-[#222] transition mb-4 md:mb-0 animate-pulse-bounce cursor-pointer"
            aria-label={ctaText}
          >
            {ctaText}
          </button>
        </div>
        <div className="flex-1 flex justify-center md:justify-end items-center">
          <div className="rounded-3xl overflow-hidden shadow-2xl bg-[#f7c6d4] flex items-center justify-center w-[240px] h-[320px] sm:w-[280px] sm:h-[380px] md:w-[320px] md:h-[420px] lg:w-[360px] lg:h-[480px]">
            <video
              src="/Presentacion-Daniela.mp4"
              autoPlay
              loop
              playsInline
              muted
              controls
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
      <style jsx>{`
        @keyframes pulse-bounce {
          0%,
          100% {
            transform: scale(1);
            box-shadow: 0 8px 32px #e6a6b8cc;
          }
          50% {
            transform: scale(1.08);
            box-shadow: 0 12px 48px #e6a6b8ee;
          }
        }
        .animate-pulse-bounce {
          animation: pulse-bounce 1.8s infinite cubic-bezier(0.4, 0, 0.6, 1);
        }
      `}</style>
    </header>
  );
}
