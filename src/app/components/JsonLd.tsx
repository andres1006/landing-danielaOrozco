export default function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": "https://www.daniela-orozco.com/#person",
        name: "Daniela Orozco Z.",
        alternateName: "Daniela Orozco",
        jobTitle: "Psicóloga",
        description:
          "Psicóloga colombiana especializada en terapia online en español para hispanohablantes en Miami",
        url: "https://www.daniela-orozco.com",
        image: {
          "@type": "ImageObject",
          url: "https://www.daniela-orozco.com/daniela-profesional.jpg",
          width: 1200,
          height: 630,
        },
        sameAs: [
          "https://www.instagram.com/psi.daniela.orozco/",
          "https://www.tiktok.com/@ps.daniela.orozco",
        ],
        telephone: "+57-305-207-6906",
        email: "psi.daniela.orozco@gmail.com",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Miami",
          addressRegion: "Florida",
          addressCountry: "US",
        },
        knowsLanguage: ["es", "en"],
        nationality: {
          "@type": "Country",
          name: "Colombia",
        },
        alumniOf: {
          "@type": "EducationalOrganization",
          name: "Universidad de Psicología",
        },
        hasCredential: {
          "@type": "EducationalOccupationalCredential",
          credentialCategory: "Licenciatura en Psicología",
        },
      },
      {
        "@type": "MedicalBusiness",
        "@id": "https://www.daniela-orozco.com/#business",
        name: "Daniela Orozco Psicóloga",
        description:
          "Servicios de psicología online en español para hispanohablantes en Miami",
        url: "https://www.daniela-orozco.com",
        telephone: "+57-305-207-6906",
        email: "contacto@daniela-orozco.com",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Miami",
          addressRegion: "Florida",
          addressCountry: "US",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 25.7617,
          longitude: -80.1918,
        },
        openingHours: "Mo,Tu,We,Th,Fr 09:00-18:00",
        priceRange: "$$",
        paymentAccepted: ["Cash", "Credit Card", "Insurance"],
        currenciesAccepted: "USD",
        areaServed: {
          "@type": "City",
          name: "Miami",
        },
        serviceArea: {
          "@type": "GeoCircle",
          geoMidpoint: {
            "@type": "GeoCoordinates",
            latitude: 25.7617,
            longitude: -80.1918,
          },
          geoRadius: "50000",
        },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Servicios de Psicología",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Terapia Online en Español",
                description:
                  "Sesiones de psicoterapia online en español para hispanohablantes",
              },
              price: "0",
              priceCurrency: "USD",
              description: "Primera sesión gratuita",
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Terapia para Ansiedad",
                description: "Tratamiento especializado para ansiedad y estrés",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Terapia para Duelo Migratorio",
                description:
                  "Acompañamiento especializado para migrantes hispanohablantes",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Autoconocimiento y Desarrollo Personal",
                description:
                  "Proceso de autoconocimiento y transformación personal",
              },
            },
          ],
        },
        employee: {
          "@type": "Person",
          "@id": "https://www.daniela-orozco.com/#person",
        },
      },
      {
        "@type": "WebSite",
        "@id": "https://www.daniela-orozco.com/#website",
        url: "https://www.daniela-orozco.com",
        name: "Daniela Orozco Psicóloga",
        description:
          "Psicóloga colombiana especializada en terapia online en español para hispanohablantes en Miami",
        publisher: {
          "@id": "https://www.daniela-orozco.com/#person",
        },
        potentialAction: {
          "@type": "SearchAction",
          target:
            "https://www.daniela-orozco.com/search?q={search_term_string}",
          "query-input": "required name=search_term_string",
        },
      },
      {
        "@type": "WebPage",
        "@id": "https://www.daniela-orozco.com/#webpage",
        url: "https://www.daniela-orozco.com",
        inLanguage: "es-US",
        name: "Psicóloga Daniela Orozco | Terapia Online en Español | Miami",
        isPartOf: {
          "@id": "https://www.daniela-orozco.com/#website",
        },
        about: {
          "@id": "https://www.daniela-orozco.com/#person",
        },
        description:
          "Psicóloga colombiana especializada en terapia online en español. Ayudo a hispanohablantes en Miami con ansiedad, depresión, duelo migratorio y autoconocimiento.",
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
