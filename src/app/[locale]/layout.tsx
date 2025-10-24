import Link from "next/link";
import { ReactNode } from "react";

import '@/app/globals.css'
import Navbar from "@/components/navbar";


import { Roboto, Reddit_Sans } from 'next/font/google'
import Footer from "@/components/footer";
import Newsletter from "@/components/homepage/Newsletter";
import { getDictionary, Locale } from "@/lib/getDictionary";
import { GoogleAnalytics } from '@next/third-parties/google';
import CookieBanner from "@/components/CookieBanner";
import { Metadata } from "next";

const roboto = Roboto({ subsets: ['latin'], weight: ['400', '700'], variable: '--font-roboto', display: 'swap' })
const reddit = Reddit_Sans({ subsets: ['latin'], weight: ['400', '500', '600', '700'], variable: '--font-reddit', display: 'swap' })

export const metadata: Metadata = {
  title: "Sumiclima - De profesional a profesional en climatización",
  description: "Sumiclima distribuye material de calefacción, climatización, aire acondicionado, ventilación y refrigeración para profesionales. Calidad, stock y asesoramiento técnico.",
  keywords: [
    "Sumiclima",
    "climatización profesional",
    "aire acondicionado",
    "calefacción",
    "ventilación",
    "refrigeración",
    "distribución material"
  ],
  authors: [{ name: "Sumiclima", url: "https://www.sumiclima.com" }],
  openGraph: {
    title: "Sumiclima - Soluciones profesionales en climatización",
    description: "Encuentra los mejores productos de climatización, calefacción y ventilación con asesoramiento técnico para profesionales.",
    url: "https://www.sumiclima.com",
    siteName: "Sumiclima",
    images: [
      {
        url: "https://www.sumiclima.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Sumiclima - Productos de climatización para profesionales",
      },
    ],
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sumiclima",
    description: "Distribuidor profesional de calefacción, aire acondicionado y ventilación. Asesoramiento y stock disponible.",
    images: ["https://www.sumiclima.com/twitter-card.jpg"],
    creator: "@sumiclima",
  },
  metadataBase: new URL("https://www.sumiclima.com"),
  themeColor: "#072757",
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: { locale: Locale };
}) {
  const { locale } = await params;
  const t = await getDictionary(locale)

  return (
    <html lang={locale} className={`${roboto.variable} ${reddit.variable}`}>
      <body>
        <GoogleAnalytics gaId="G-JG7JJ7SVHC" />
        <Navbar t={t} locale={locale} />
        {children}
        <Newsletter t={t} />
        <Footer t={t} locale={locale} />
        <CookieBanner t={t} locale={locale} />
      </body>
    </html>
  );
}
