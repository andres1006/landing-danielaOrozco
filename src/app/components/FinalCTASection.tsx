"use client";

interface FinalCTASectionProps {
  title: string;
  paragraph: string;
  ctaText: string;
  ctaHref: string;
  smallText: string;
}

export default function FinalCTASection({
  title,
  paragraph,
  ctaText,
  ctaHref,
  smallText,
}: FinalCTASectionProps) {
  return (
    <section className="py-20 bg-gradient-to-br from-[#f7c6d4]/80 via-[#e6a6b8]/70 to-[#faf7f6] flex items-center justify-center animate-fade-in-up">
      <div className="w-full max-w-2xl mx-auto rounded-3xl shadow-2xl px-6 py-12 bg-white/90 flex flex-col items-center text-center gap-6 border border-[#f7c6d4] animate-fade-in-up">
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#e6a6b8] mb-4 drop-shadow-xl animate-bounce-slow">
          {title}
        </h2>
        <p className="mb-3 text-lg md:text-xl text-[#444] leading-7 font-normal max-w-xl">
          {paragraph}
        </p>
        <a
          href={ctaHref}
          className="inline-block font-bold text-xl md:text-2xl px-12 py-5 rounded-full bg-gradient-to-r from-[#e6a6b8] to-[#f7c6d4] text-white shadow-xl hover:from-[#f7c6d4] hover:to-[#e6a6b8] hover:text-[#222] transition-all duration-300 transform hover:scale-105 animate-pulse"
          aria-label={ctaText}
        >
          {ctaText}
        </a>
        <small className="block text-[#e6a6b8] mt-3 tracking-[0.01em] text-base font-semibold animate-fade-in-up">
          {smallText}
        </small>
      </div>
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
          animation: fade-in-up 0.8s cubic-bezier(0.23, 1, 0.32, 1) both;
        }
        @keyframes bounce-slow {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        .animate-bounce-slow {
          animation: bounce-slow 2.5s infinite;
        }
      `}</style>
    </section>
  );
}
