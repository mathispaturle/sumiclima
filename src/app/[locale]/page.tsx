import BrandsGrid from "@/components/homepage/BrandsGrid";
import Hero from "@/components/homepage/Hero";
import Products from "@/components/homepage/Products";
import Team from "@/components/homepage/Team";
import { getDictionary, Locale } from "@/lib/getDictionary";
import { Metadata } from "next";

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


export default async function Home({ params }: { params: { locale: Locale } }) {
  const { locale } = params;
  const t = await getDictionary(locale)

  return (
    <>
      <Hero locale={locale} t={t} />
      <Products locale={locale} t={t} />
      <Team locale={locale} t={t} />
      <BrandsGrid locale={locale} t={t} />
    </>
  );
}
