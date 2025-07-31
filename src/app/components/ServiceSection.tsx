"use client";

import Image from "next/image";
import { NumberPhone } from "./contants";

interface ServiceSectionProps {
  title: string;
  items: string[];
}

// Puedes personalizar las imágenes de fondo aquí
const serviceImages = [
  "/meditacion.jpg",
  "/Calma.jpg",
  "/paz.jpg",
  "/tranquilidad.jpg",
  "/volando.jpg",
  "/meditacion.jpg",
  "/Calma.jpg",
];

export default function ServiceSection({ title, items }: ServiceSectionProps) {
  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-[#e6a6b8] mb-10">
          {title}
        </h2>
        <ul className="flex flex-row gap-x-6 gap-y-8 overflow-x-auto pb-4 scrollbar-hide md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-8 md:overflow-x-visible">
          {items.map((item, idx) => (
            <li
              key={idx}
              className="relative min-w-[260px] max-w-xs h-[220px] md:h-[260px] rounded-2xl shadow-lg overflow-hidden flex items-end p-0 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl animate-fade-in-up group cursor-pointer"
              style={{ animationDelay: `${idx * 80}ms` }}
              onClick={() => {
                // enviar a whatsapp
                window.open(
                  `https://wa.me/${NumberPhone}?text=Hola Daniela, quiero conocerme mejor y trabajar en mi autoconocimiento. ¿Podemos agendar una sesión?`,
                  "_blank"
                );
              }}
            >
              {/* Imagen de fondo */}
              <Image
                src={serviceImages[idx % serviceImages.length]}
                alt={item}
                fill
                className="object-cover w-full h-full absolute inset-0 z-0 group-hover:scale-110 transition-transform duration-500"
                style={{ filter: "brightness(0.7) blur(0px)" }}
              />
              {/* Overlay para contraste */}
              <div className="absolute inset-0 bg-black/30 z-10" />
              {/* Texto del servicio */}
              <span className="relative z-20 text-white text-lg md:text-xl font-semibold p-6 w-full text-center drop-shadow-xl">
                {item}
              </span>
            </li>
          ))}
        </ul>
        <style jsx>{`
          @keyframes fade-in-up {
            0% {
              opacity: 0;
              transform: translateY(30px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }
          .animate-fade-in-up {
            animation: fade-in-up 0.7s cubic-bezier(0.23, 1, 0.32, 1) both;
          }
          .scrollbar-hide::-webkit-scrollbar {
            display: none;
          }
          .scrollbar-hide {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
        `}</style>
      </div>
    </section>
  );
}
