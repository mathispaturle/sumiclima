import Image from "next/image";
import { Locale, getDictionary } from "@/lib/getDictionary";

import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Nosotros - Sumiclima",
    description:
        "Conoce la historia, misión, visión y valores de Sumiclima, tu partner de confianza en climatización, calefacción y ventilación profesional.",
    keywords: [
        "Sumiclima",
        "nosotros",
        "historia",
        "misión",
        "visión",
        "valores",
        "climatización profesional",
    ],
    authors: [{ name: "Sumiclima", url: "https://www.sumiclima.com" }],
    openGraph: {
        title: "Nosotros - Sumiclima",
        description:
            "Más de 40 años ofreciendo soluciones profesionales en climatización, calefacción, ventilación y refrigeración.",
        url: "https://www.sumiclima.com/es/nosotros",
        siteName: "Sumiclima",
        images: [
            {
                url: "https://www.sumiclima.com/og-image-nosotros.jpg",
                width: 1200,
                height: 630,
                alt: "Nosotros - Sumiclima",
            },
        ],
        locale: "es_ES",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Nosotros - Sumiclima",
        description:
            "Conoce la historia y el equipo de Sumiclima, expertos en climatización profesional.",
        images: ["https://www.sumiclima.com/twitter-card-nosotros.jpg"],
        creator: "@sumiclima",
    },
};


export default async function Page({ params }: { params: { locale: Locale } }) {
    const t = await getDictionary(params.locale);

    return (
        <main className="bg-white text-gray-800">
            {/* Hero */}
            <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
                <Image
                    src="/imgs/banner-6.jpg"
                    alt={t.about.hero.title}
                    fill
                    priority
                    className="object-cover brightness-75"
                />
                <div className="relative z-10 text-center px-6">
                    <h1 className="text-4xl md:text-7xl font-bold text-white uppercase italic">
                        {t.about.hero.title}
                    </h1>
                    <p className="mt-4 text-white text-2xl max-w-3xl mx-auto">
                        {t.about.hero.subtitle}
                    </p>
                </div>
                <div className="bg-black/30 absolute top-0 bottom-0 right-0 left-0"></div>
            </section>

            {/* Historia */}
            <section className="max-w-6xl mx-auto px-6 py-32 grid md:grid-cols-2 gap-12 items-center">
                <div>
                    <h2 className="text-5xl font-semibold mb-4">{t.about.history.title}</h2>
                    <p className="text-gray-600 text-lg leading-relaxed mb-4">
                        {t.about.history.p1}
                    </p>
                    <p className="text-gray-600 leading-relaxed text-lg">{t.about.history.p2}</p>
                </div>

                <div className="relative w-full h-72 md:h-96 overflow-hidden shadow-lg">
                    <Image
                        src="/imgs/banner-2.jpg"
                        alt={t.about.history.title}
                        fill
                        className="object-cover"
                    />
                </div>
            </section>

            {/* Misión, Visión, Valores */}
            <section className="bg-gray-50 py-32">
                <div className="max-w-6xl mx-auto px-6 text-center">
                    <h2 className="text-5xl font-semibold mb-12">{t.about.philosophy.title}</h2>

                    <div className="grid md:grid-cols-3 gap-12 text-left">
                        <div className="p-6 bg-white shadow-sm hover:shadow-md transition">
                            <h3 className="text-2xl font-semibold mb-3 text-[#c91048]">
                                {t.about.philosophy.mission_title}
                            </h3>
                            <p className="text-gray-600 text-lg leading-relaxed">
                                {t.about.philosophy.mission_text}
                            </p>
                        </div>

                        <div className="p-6 bg-white shadow-sm hover:shadow-md transition">
                            <h3 className="text-2xl font-semibold mb-3 text-[#c91048]">
                                {t.about.philosophy.vision_title}
                            </h3>
                            <p className="text-lg text-gray-600 leading-relaxed">
                                {t.about.philosophy.vision_text}
                            </p>
                        </div>

                        <div className="p-6 bg-white shadow-sm hover:shadow-md transition">
                            <h3 className="text-2xl font-semibold mb-3 text-[#c91048]">
                                {t.about.philosophy.values_title}
                            </h3>
                            <ul className="text-gray-600 text-lg leading-relaxed list-disc list-inside space-y-1">
                                {t.about.philosophy.values.map((value: string) => (
                                    <li key={value}>{value}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Equipo humano */}
            <section className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
                <div className="relative w-full h-72 md:h-96 overflow-hidden shadow-lg">
                    <Image
                        src="/imgs/banner-5.jpg"
                        alt={t.about.team.title}
                        fill
                        className="object-cover"
                    />
                </div>

                <div>
                    <h2 className="text-5xl font-semibold mb-4">{t.about.team.title}</h2>
                    <p className="text-gray-600 text-lg leading-relaxed mb-4">
                        {t.about.team.p1}
                    </p>
                    <p className="text-gray-600 text-lg leading-relaxed">{t.about.team.p2}</p>
                </div>
            </section>
        </main>
    );
}
