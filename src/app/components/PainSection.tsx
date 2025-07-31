"use client";

import { NumberPhone } from "./contants";

interface PainSectionProps {
  title: string;
  items: string[];
}

const icons = ["😔", "😣", "😟", "💭", "🫥", "😞", "😕", "😩", "😢", "🫂"];
const cardColors = [
  "bg-[#f7c6d4]/80",
  "bg-[#e6a6b8]/80",
  "bg-[#faf7f6]/90",
  "bg-[#ffe4ec]/90",
  "bg-[#f7e6f7]/90",
];

export default function PainSection({ title, items }: PainSectionProps) {
  return (
    <section className="py-12 bg-[#faf7f6]">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-[#e6a6b8] mb-8 flex items-center justify-center gap-2">
          {title}
        </h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {items.map((item, idx) => (
            <li
              key={idx}
              className={`flex items-center gap-4 rounded-2xl shadow-lg p-5 md:p-6 text-lg md:text-xl text-[#222] font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-2xl animate-fade-in-up ${
                cardColors[idx % cardColors.length]
              }`}
              style={{ animationDelay: `${idx * 80}ms` }}
            >
              <span className="text-2xl md:text-3xl select-none">
                {icons[idx % icons.length]}
              </span>
              <span className="flex-1">{item}</span>
            </li>
          ))}
        </ul>
        <div className="flex justify-center mt-10">
          <button
            onClick={() => {
              window.open(
                `https://wa.me/${NumberPhone}?text=Hola Daniela, me identifico con estos sentimientos y quiero empezar mi consulta gratuita. ¿Podemos agendar?`,
                "_blank"
              );
            }}
            className="inline-block font-bold text-lg px-8 py-4 rounded-full bg-[#e6a6b8] text-white shadow hover:bg-[#f7c6d4] hover:text-[#222] transition cursor-pointer"
          >
            Quiero empezar consulta GRATIS
          </button>
        </div>
      </div>
    </section>
  );
}
