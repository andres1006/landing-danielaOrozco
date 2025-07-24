"use client";

interface WhatsAppButtonProps {
  phone: string;
  ariaLabel?: string;
}

export default function WhatsAppButton({
  phone,
  ariaLabel,
}: WhatsAppButtonProps) {
  return (
    <a
      href={`https://wa.me/${phone}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed right-8 bottom-8 z-[1000] bg-none border-none p-0 cursor-pointer shadow-2xl rounded-full transition-transform duration-200 flex items-center justify-center hover:scale-110 hover:shadow-2xl animate-wa-bounce md:right-6 md:bottom-6"
      aria-label={ariaLabel || "Contactar por WhatsApp"}
      style={{ width: 72, height: 72 }}
    >
      <svg
        width="64"
        height="64"
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="32" cy="32" r="32" fill="#25D366" />
        <path
          d="M46.5 38.5c-.7-.3-4-1.9-4.5-2.1-.5-.2-.9-.3-1.2.3-.3.6-1.3 2-1.6 2.3-.3.3-.7.5-1.3.2-.6-.3-2.9-1-5.5-3.4-2.1-1.9-3.5-4.1-3.8-4.8-.3-.7 0-1 .3-1.3.3-.3.7-.8 1-1.1.3-.3.3-.7.5-1.1.2-.3 0-.8 0-1.1 0-.3-1.2-2.9-1.7-3.9-.5-1-.9-.8-1.3-.8-.3 0-.8 0-1.1 0-.3 0-1 .2-1.5.7-.5.5-2.1 2.1-2.1 5.1 0 3 2.1 5.8 2.4 6.2.3.4 4.1 6.1 10.1 8.2 1.4.5 2.5.9 3.3 1.1 1.4.3 2.7.3 3.6.2 1-.1 3.2-1.2 3.6-2.4.4-1.2.4-2.2.2-2.4-.2-.2-.7-.3-1.3-.6z"
          fill="#fff"
        />
      </svg>
      <style jsx>{`
        @keyframes wa-bounce {
          0%,
          100% {
            transform: scale(1);
            box-shadow: 0 8px 32px #25d366cc;
          }
          50% {
            transform: scale(1.13);
            box-shadow: 0 16px 48px #25d366ee;
          }
        }
        .animate-wa-bounce {
          animation: wa-bounce 1.6s infinite cubic-bezier(0.4, 0, 0.6, 1);
        }
      `}</style>
    </a>
  );
}
