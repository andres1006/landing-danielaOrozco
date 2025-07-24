import Hero from "./components/Hero";
import PainSection from "./components/PainSection";
import SolutionSection from "./components/SolutionSection";
import AboutSection from "./components/AboutSection";
import ServiceSection from "./components/ServiceSection";
import TestimonialsSection from "./components/TestimonialsSection";
import FinalCTASection from "./components/FinalCTASection";
import WhatsAppButton from "./components/WhatsAppButton";
import { NumberPhone } from "./components/contants";
import "./globals.css";

export default function Home() {
  return (
    <div className="min-h-screen font-sans text-[1.08rem] tracking-[0.01em]">
      {/* HERO SECTION */}
      <section>
        <Hero
          title="¿Sientes que algo te impide estar en paz contigo mismo?"
          highlight=""
          subtitle="Terapia psicológica online para quienes buscan sanar heridas, superar la ansiedad y vivir con mayor plenitud. Agenda tu primera sesión y comienza tu proceso de transformación."
          ctaText="Inicia mi proceso de sanación ¡GRATIS!"
          ctaHref="#agenda"
          heroImageSrc="/daniela-profesional.jpg"
          heroImageAlt="Paisaje sereno evocando calma y naturaleza"
        />
      </section>
      <section>
        <PainSection
          title="¿Te identificas con alguno de estos sentimientos?"
          items={[
            "Sientes un vacío interior o una inquietud constante.",
            "Te cuesta encontrar paz mental y emocional.",
            "La ansiedad, el estrés o la tristeza te acompañan a diario.",
            "Sientes que necesitas sanar heridas del pasado para avanzar.",
            "Quieres sentirte pleno/a, pero no sabes por dónde empezar.",
          ]}
        />
      </section>
      <section>
        <SolutionSection
          title="Sanar es posible. El primer paso es pedir ayuda."
          paragraphs={[
            "La terapia es un espacio seguro para comprenderte, sanar heridas y aprender a vivir en paz contigo mismo.",
            "Juntos trabajaremos en tu proceso de sanación, con herramientas prácticas y acompañamiento profesional.",
            "No tienes que cargar solo/a con lo que te duele. Mereces sentirte bien y vivir con propósito.",
          ]}
          imageSrc="/paz.jpg"
          imageAlt="Mineral brillante, símbolo de transformación"
        />
      </section>
      <section className="">
        <AboutSection
          title="Te acompaño en tu proceso de sanación"
          paragraphs={[
            "Soy Daniela Orozco, psicóloga con experiencia en ayudar a personas a sanar, superar bloqueos y reconectar con su bienestar.",
            "Mi enfoque es cálido, humano y personalizado. Creo en el poder de la terapia para transformar vidas y devolver la paz interior.",
          ]}
          imageSrc="/daniela-profesional.jpg"
          imageAlt="Daniela Orozco, psicóloga profesional"
        />
      </section>
      <section className="">
        <ServiceSection
          title="Un proceso de sanación a tu medida, estés donde estés"
          items={[
            "Sesiones online, confidenciales y adaptadas a tus necesidades.",
            "Herramientas prácticas para gestionar emociones y sanar heridas.",
            "Un espacio seguro para hablar, sentir y transformar tu vida.",
          ]}
        />
      </section>
      <section className="">
        <TestimonialsSection
          title="Lo que otros dicen de su proceso"
          testimonials={[
            {
              text: "“Con Daniela encontré un espacio para hablar de mi duelo migratorio sin sentirme juzgada. Por primera vez siento que estoy haciendo las paces con mi historia.”",
              author: "— Anónimo, residiendo en Alemania.",
            },
            {
              text: "“Aprendí a calmar mi mente y a escuchar mi cuerpo. La ansiedad ya no me controla. Ha sido un viaje de vuelta a mí misma.”",
              author: "— Anónimo, residiendo en Canadá.",
            },
          ]}
        />
      </section>
      <section className="">
        <FinalCTASection
          title="¿Listo/a para empezar a sanar?"
          paragraph="Agenda tu primera sesión y comienza tu proceso de sanación. Mereces sentirte en paz y vivir plenamente."
          ctaText="Quiero empezar mi proceso"
          ctaHref="#"
          smallText="Plazas limitadas. Tu bienestar merece ser una prioridad."
        />
      </section>
      {/* BOTÓN FLOTANTE WHATSAPP */}
      <WhatsAppButton phone={NumberPhone} ariaLabel="Contactar por WhatsApp" />
    </div>
  );
}
