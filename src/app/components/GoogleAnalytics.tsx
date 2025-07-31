"use client";

import Script from "next/script";

export default function GoogleAnalytics() {
  return (
    <>
      {/* Google Analytics */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=AW-17421502407"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'AW-17421502407', {
            page_title: 'Psicóloga Daniela Orozco Miami',
            page_location: 'https://www.daniela-orozco.com',
            custom_map: {
              dimension1: 'user_type',
              dimension2: 'location'
            }
          });
          
          // Enhanced Ecommerce for Google Ads
          gtag('config', 'AW-17421502407', {
            allow_enhanced_conversions: true,
            conversion_id: 'AW-17421502407',
            conversion_label: 'CONVERSION_LABEL'
          });
        `}
      </Script>

      {/* Google Ads Conversion Tracking */}
      <Script id="google-ads-conversion" strategy="afterInteractive">
        {`
          gtag('event', 'page_view', {
            page_title: 'Psicóloga Daniela Orozco Miami',
            page_location: 'https://www.daniela-orozco.com',
            custom_parameters: {
              user_type: 'hispanic_miami',
              location: 'miami_florida',
              language: 'spanish'
            }
          });
        `}
      </Script>
    </>
  );
}
