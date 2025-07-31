"use client";

import Image from "next/image";
import { NumberPhone } from "./contants";

interface AboutSectionProps {
  title: string;
  paragraphs: string[];
  imageSrc: string;
  imageAlt: string;
}

export default function AboutSection({
  title,
  paragraphs,
  imageSrc,
  imageAlt,
}: AboutSectionProps) {
  return (
    <section className="py-16 bg-[#faf7f6]">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-10 md:gap-16 px-4 md:px-8 rounded-3xl">
        {/* Imagen */}
        <div className="flex-shrink-0 w-full md:w-[320px] flex justify-center md:justify-start order-1 md:order-none">
          <div className="rounded-2xl overflow-hidden shadow-md bg-[#f7c6d4]/30 w-[220px] h-[220px] md:w-[320px] md:h-[320px] flex items-center justify-center">
            <Image
              src={imageSrc}
              alt={imageAlt}
              width={320}
              height={320}
              className="object-cover w-full h-full"
            />
          </div>
        </div>
        {/* Texto y CTA */}
        <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left">
          <h2 className="text-2xl md:text-3xl font-bold text-[#e6a6b8] mb-6">
            {title}
          </h2>
          {paragraphs.map((p, idx) => (
            <p
              className="mb-4 text-lg md:text-xl text-[#444] font-normal leading-7 max-w-xl"
              key={idx}
            >
              {p}
            </p>
          ))}
          <button
            onClick={() => {
              window.open(
                `https://wa.me/${NumberPhone}?text=Hola Daniela, me gustaría agendar una consulta contigo. ¿Podemos coordinar una sesión?`,
                "_blank"
              );
            }}
            className="mt-6 inline-block font-bold text-lg px-8 py-4 rounded-full bg-[#e6a6b8] text-white shadow hover:bg-[#f7c6d4] hover:text-[#222] transition cursor-pointer"
          >
            Agenda una consulta conmigo
          </button>
        </div>
      </div>
    </section>
  );
}
