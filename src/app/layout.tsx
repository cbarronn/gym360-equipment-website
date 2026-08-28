import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SITE_CONFIG } from "@/lib/constants";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://gym360equipment.com.mx"),
  title: {
    default: `${SITE_CONFIG.name} | Equipamiento Profesional para Gimnasios en México`,
    template: `%s | ${SITE_CONFIG.name}`,
  },
  description:
    "Venta, importación, instalación, mantenimiento y refacciones de equipos para gimnasio en México. Soluciones integrales para gimnasios comerciales, hoteles, corporativos y home gym.",
  keywords: [
    "equipo para gimnasio México",
    "venta de equipo para gimnasio",
    "caminadoras profesionales",
    "equipos de fuerza",
    "mantenimiento equipos gimnasio",
    "instalación de gimnasio",
    "equipamiento fitness México",
    "equipos de gimnasio comerciales",
    "refacciones equipo gimnasio",
    "importación equipos fitness",
    "gym equipment Mexico",
    "equipos seminuevos gimnasio",
  ],
  authors: [{ name: "GYM 360 Equipment" }],
  creator: "GYM 360 Equipment",
  publisher: "GYM 360 Equipment",
  formatDetection: { telephone: true },
  openGraph: {
    type: "website",
    locale: "es_MX",
    url: "https://gym360equipment.com.mx",
    siteName: SITE_CONFIG.name,
    title: `${SITE_CONFIG.name} | ${SITE_CONFIG.tagline}`,
    description:
      "Venta, importación, instalación, mantenimiento y refacciones de equipos para gimnasio en México.",
    images: [
      {
        url: "/images/hero-gym.jpg",
        width: 1200,
        height: 630,
        alt: "GYM 360 Equipment — Equipamiento Profesional para Gimnasios",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_CONFIG.name} | ${SITE_CONFIG.tagline}`,
    description:
      "Venta, importación, instalación, mantenimiento y refacciones de equipos para gimnasio en México.",
    images: ["/images/hero-gym.jpg"],
  },
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
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es-MX" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "GYM 360 Equipment",
              description:
                "Empresa especializada en la comercialización, importación, instalación y mantenimiento de equipos para gimnasio en México.",
              url: "https://gym360equipment.com.mx",
              telephone: SITE_CONFIG.phone,
              email: SITE_CONFIG.email,
              address: {
                "@type": "PostalAddress",
                addressCountry: "MX",
                addressLocality: SITE_CONFIG.city,
              },
              areaServed: {
                "@type": "Country",
                name: "México",
              },
              serviceType: [
                "Venta de equipo para gimnasio",
                "Importación de equipos fitness",
                "Instalación de gimnasios",
                "Mantenimiento de equipos",
                "Refacciones para gym",
              ],
            }),
          }}
        />
      </head>
      <body className={`${inter.variable} font-sans bg-carbon text-white antialiased`}>
        {children}
      </body>
    </html>
  );
}
