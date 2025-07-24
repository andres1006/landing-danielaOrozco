import Image from "next/image";

interface SolutionSectionProps {
  title: string;
  paragraphs: string[];
  imageSrc: string;
  imageAlt: string;
}

export default function SolutionSection({
  title,
  paragraphs,
  imageSrc,
  imageAlt,
}: SolutionSectionProps) {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row-reverse items-center gap-10 md:gap-16 px-4 md:px-8 rounded-3xl">
        {/* Imagen */}
        <div className="flex-shrink-0 w-full md:w-[320px] flex justify-center md:justify-end">
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
          <a
            href="#agenda"
            className="mt-6 inline-block font-bold text-lg px-8 py-4 rounded-full bg-[#e6a6b8] text-white shadow hover:bg-[#f7c6d4] hover:text-[#222] transition cursor-pointer"
          >
            Quiero iniciar mi proceso de sanación
          </a>
        </div>
      </div>
    </section>
  );
}
