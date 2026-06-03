import type { Metadata } from "next";
import "./globals.css";

const baseUrl = "https://gemsolar.ng";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Gem Solar | Solar Panel Installation in Nigeria",
    template: "%s | Gem Solar Nigeria",
  },
  description:
    "Nigeria's trusted solar installation company. We design and install residential & commercial solar systems across Lagos, Ibadan, Abuja, and Port Harcourt. Get your free quote today.",
  keywords: [
    "solar panel installation Nigeria",
    "solar energy company Nigeria",
    "solar installation Lagos",
    "solar installation Ibadan",
    "solar installation Abuja",
    "residential solar Nigeria",
    "commercial solar Nigeria",
    "battery storage Nigeria",
    "inverter installation Nigeria",
    "NEPA alternative Nigeria",
    "clean energy Nigeria",
    "Gem Solar",
  ],
  authors: [{ name: "Gem Solar", url: baseUrl }],
  creator: "Gem Solar",
  publisher: "Gem Solar",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: baseUrl,
    siteName: "Gem Solar",
    title: "Gem Solar | Solar Panel Installation in Nigeria",
    description:
      "Nigeria's trusted solar installation company. Residential & commercial solar systems across Lagos, Ibadan & Abuja. Free consultation available.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Gem Solar — Premium Solar Panel Installation in Nigeria",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gem Solar | Solar Panel Installation in Nigeria",
    description:
      "Nigeria's trusted solar installation company. Residential & commercial solar systems across Lagos, Ibadan & Abuja.",
    images: ["/images/og-image.jpg"],
    creator: "@GemSolarNG",
  },
  alternates: {
    canonical: baseUrl,
  },
  category: "energy",
};

// LocalBusiness + Service JSON-LD Schema
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": `${baseUrl}/#organization`,
      name: "Gem Solar",
      description:
        "Nigeria's premium solar panel installation company serving Lagos, Ibadan, Abuja, and Port Harcourt with residential and commercial solar energy systems.",
      url: baseUrl,
      telephone: "+2348051307748",
      email: "gemsolar2020@gmail.com",
      logo: {
        "@type": "ImageObject",
        url: `${baseUrl}/images/logo.png`,
      },
      image: `${baseUrl}/images/og-image.jpg`,
      address: {
        "@type": "PostalAddress",
        streetAddress: "YOUR STREET ADDRESS",
        addressLocality: "Ibadan",
        addressRegion: "Oyo State",
        postalCode: "200001",
        addressCountry: "NG",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 7.3775,
        longitude: 3.947,
      },
      areaServed: [
        {
          "@type": "State",
          name: "Lagos State",
          containedInPlace: { "@type": "Country", name: "Nigeria" },
        },
        {
          "@type": "State",
          name: "Oyo State",
          containedInPlace: { "@type": "Country", name: "Nigeria" },
        },
        {
          "@type": "State",
          name: "FCT Abuja",
          containedInPlace: { "@type": "Country", name: "Nigeria" },
        },
        {
          "@type": "State",
          name: "Rivers State",
          containedInPlace: { "@type": "Country", name: "Nigeria" },
        },
      ],
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          opens: "08:00",
          closes: "18:00",
        },
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: "Saturday",
          opens: "09:00",
          closes: "14:00",
        },
      ],
      priceRange: "₦₦₦",
      currenciesAccepted: "NGN",
      paymentAccepted: "Cash, Bank Transfer, Installments",
      sameAs: [
        "https://wa.me/2348051307748",
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Solar Installation Services",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Residential Solar Installation",
              description:
                "Complete rooftop solar installation for Nigerian homes. Eliminates NEPA dependency with battery backup.",
              areaServed: "Nigeria",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Commercial Solar Installation",
              description:
                "Large-scale commercial and industrial solar arrays for Nigerian businesses. Reduces OPEX and eliminates diesel generator costs.",
              areaServed: "Nigeria",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Battery Storage & Inverter Systems",
              description:
                "Integrated inverter and battery storage solutions for 24/7 power reliability in Nigeria.",
              areaServed: "Nigeria",
            },
          },
        ],
      },
    },
    {
      "@type": "WebSite",
      "@id": `${baseUrl}/#website`,
      url: baseUrl,
      name: "Gem Solar",
      description: "Solar Panel Installation in Nigeria",
      publisher: {
        "@id": `${baseUrl}/#organization`,
      },
      inLanguage: "en-NG",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-NG">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
