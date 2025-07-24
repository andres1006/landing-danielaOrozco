"use client";

import Image from "next/image";

interface Testimonial {
  text: string;
  author: string;
  avatarUrl?: string; // Opcional: puedes pasar una URL de imagen o dejarlo vacío
}

interface TestimonialsSectionProps {
  title: string;
  testimonials: Testimonial[];
}

const defaultAvatars = [
  "🧑‍🦰",
  "🧑‍🦱",
  "🧑‍🦳",
  "🧑‍🦲",
  "🧑‍🎤",
  "🧑‍💼",
  "🧑‍🎓",
  "🧑‍🔬",
  "🧑‍⚕️",
  "🧑‍🏫",
];

export default function TestimonialsSection({
  title,
  testimonials,
}: TestimonialsSectionProps) {
  return (
    <section className="py-16 bg-[#faf7f6]">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-[#e6a6b8] mb-10">
          {title}
        </h2>
        <ul className="flex flex-row gap-x-6 gap-y-8 overflow-x-auto pb-4 scrollbar-hide md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-8 md:overflow-x-visible">
          {testimonials.map((t, idx) => (
            <li
              key={idx}
              className="relative min-w-[280px] max-w-md bg-white rounded-2xl shadow-lg p-8 flex flex-col gap-4 transition-all duration-300 hover:scale-105 hover:shadow-2xl animate-fade-in-up"
              style={{ animationDelay: `${idx * 80}ms` }}
            >
              {/* Avatar y comillas */}
              <div className="flex items-center gap-3 mb-2">
                {t.avatarUrl ? (
                  <Image
                    src={t.avatarUrl}
                    alt={t.author}
                    className="w-12 h-12 rounded-full object-cover border-2 border-[#f7c6d4] shadow"
                  />
                ) : (
                  <span className="w-12 h-12 flex items-center justify-center rounded-full bg-[#f7c6d4] text-2xl select-none border-2 border-[#e6a6b8] shadow">
                    {defaultAvatars[idx % defaultAvatars.length]}
                  </span>
                )}
                <span className="text-4xl text-[#f7c6d4] opacity-60 select-none ml-2">
                  “
                </span>
              </div>
              <p className="italic text-lg text-[#444] z-10">{t.text}</p>
              <footer className="text-[#e6a6b8] font-semibold mt-2 z-10">
                {t.author}
              </footer>
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
