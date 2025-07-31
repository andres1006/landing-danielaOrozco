"use client";

export default function GoogleAnalytics() {
  return (
    <>
      {/* Google Analytics */}
      <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
      />
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'GA_MEASUREMENT_ID', {
              page_title: 'Psicóloga Daniela Orozco Miami',
              page_location: 'https://daniela-orozco.com',
              custom_map: {
                dimension1: 'user_type',
                dimension2: 'location'
              }
            });
            
            // Enhanced Ecommerce for Google Ads
            gtag('config', 'AW-CONVERSION_ID', {
              allow_enhanced_conversions: true,
              conversion_id: 'AW-CONVERSION_ID',
              conversion_label: 'CONVERSION_LABEL'
            });
          `,
        }}
      />

      {/* Google Ads Conversion Tracking */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            gtag('event', 'page_view', {
              page_title: 'Psicóloga Daniela Orozco Miami',
              page_location: 'https://daniela-orozco.com',
              custom_parameters: {
                user_type: 'hispanic_miami',
                location: 'miami_florida',
                language: 'spanish'
              }
            });
          `,
        }}
      />
    </>
  );
}
