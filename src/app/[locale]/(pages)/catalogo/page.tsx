import { ArrowRight, ChevronDown } from "lucide-react"
import Image from "next/image"

import Link from "next/link"

type Catalog = {
    category: string
    brand: string
    title: string
    year: string
    language: string
    pdfLink: string
    imageUrl: string
    sourceUrl: string
}

import { Metadata } from "next";
import { Locale } from "@/lib/getDictionary"

export const metadata: Metadata = {
    title: "Catálogos Sumiclima - Climatización profesional",
    description:
        "Consulta los catálogos técnicos y comerciales de las principales marcas de climatización, calefacción, aire acondicionado y ventilación.",
    keywords: [
        "Sumiclima",
        "catálogos",
        "climatización",
        "aire acondicionado",
        "calefacción",
        "ventilación",
        "refrigeración",
    ],
    authors: [{ name: "Sumiclima", url: "https://www.sumiclima.com" }],
    openGraph: {
        title: "Catálogos Sumiclima",
        description:
            "Accede a los catálogos técnicos y comerciales de climatización, calefacción, ventilación y refrigeración.",
        url: "https://www.sumiclima.com/es/catalogo",
        siteName: "Sumiclima",
        images: [
            {
                url: "https://www.sumiclima.com/og-image-catalogo.jpg",
                width: 1200,
                height: 630,
                alt: "Catálogos Sumiclima",
            },
        ],
        locale: "es_ES",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Catálogos Sumiclima",
        description:
            "Accede a los catálogos de climatización, calefacción, ventilación y refrigeración.",
        images: ["https://www.sumiclima.com/twitter-card-catalogo.jpg"],
        creator: "@sumiclima",
    },
};


export default function Page() {

    const catalogs: Catalog[] = [
        {
            "category": "Aire acondicionado",
            "brand": "Mitsubishi Electric",
            "title": "Catálogo Aire Acondicionado 2024",
            "year": "2024",
            "language": "ES",
            "pdfLink": "https://www.erfri.com/pdf/mitsubishi-electric-catalogo-aire-acondicionado-2024.pdf",
            "imageUrl": "https://www.erfri.com/images/catalogos/mitsubishi-electric-2024.jpg",
            "sourceUrl": "https://www.erfri.com/catalogo/aire-acondicionado"
        },
        {
            "category": "Aire acondicionado",
            "brand": "Daikin",
            "title": "Tarifa Aire Acondicionado 2024",
            "year": "2024",
            "language": "ES",
            "pdfLink": "https://www.erfri.com/pdf/daikin-tarifa-aire-acondicionado-2024.pdf",
            "imageUrl": "https://www.erfri.com/images/catalogos/daikin-2024.jpg",
            "sourceUrl": "https://www.erfri.com/catalogo/aire-acondicionado"
        },
        {
            "category": "Aire acondicionado",
            "brand": "Fujitsu",
            "title": "Catálogo General 2024",
            "year": "2024",
            "language": "ES",
            "pdfLink": "https://www.erfri.com/pdf/fujitsu-catalogo-general-2024.pdf",
            "imageUrl": "https://www.erfri.com/images/catalogos/fujitsu-2024.jpg",
            "sourceUrl": "https://www.erfri.com/catalogo/aire-acondicionado"
        },
        {
            "category": "Aire acondicionado",
            "brand": "Toshiba",
            "title": "Catálogo Aire Acondicionado 2024",
            "year": "2024",
            "language": "ES",
            "pdfLink": "https://www.erfri.com/pdf/toshiba-catalogo-aire-acondicionado-2024.pdf",
            "imageUrl": "https://www.erfri.com/images/catalogos/toshiba-2024.jpg",
            "sourceUrl": "https://www.erfri.com/catalogo/aire-acondicionado"
        },
        {
            "category": "Aire acondicionado",
            "brand": "Panasonic",
            "title": "Sistemas Aire Acondicionado 2024",
            "year": "2024",
            "language": "ES",
            "pdfLink": "https://www.erfri.com/pdf/panasonic-sistemas-aire-acondicionado-2024.pdf",
            "imageUrl": "https://www.erfri.com/images/catalogos/panasonic-2024.jpg",
            "sourceUrl": "https://www.erfri.com/catalogo/aire-acondicionado"
        },
        {
            "category": "Aire acondicionado",
            "brand": "LG",
            "title": "Catálogo Aire Acondicionado 2024",
            "year": "2024",
            "language": "ES",
            "pdfLink": "https://www.erfri.com/pdf/lg-catalogo-aire-acondicionado-2024.pdf",
            "imageUrl": "https://www.erfri.com/images/catalogos/lg-2024.jpg",
            "sourceUrl": "https://www.erfri.com/catalogo/aire-acondicionado"
        },
        {
            "category": "Aire acondicionado",
            "brand": "Hitachi",
            "title": "Catálogo Aire Acondicionado 2024",
            "year": "2024",
            "language": "ES",
            "pdfLink": "https://www.erfri.com/pdf/hitachi-catalogo-aire-acondicionado-2024.pdf",
            "imageUrl": "https://www.erfri.com/images/catalogos/hitachi-2024.jpg",
            "sourceUrl": "https://www.erfri.com/catalogo/aire-acondicionado"
        },
        {
            "category": "Aire acondicionado",
            "brand": "Samsung",
            "title": "Catálogo Aire Acondicionado 2024",
            "year": "2024",
            "language": "ES",
            "pdfLink": "https://www.erfri.com/pdf/samsung-catalogo-aire-acondicionado-2024.pdf",
            "imageUrl": "https://www.erfri.com/images/catalogos/samsung-2024.jpg",
            "sourceUrl": "https://www.erfri.com/catalogo/aire-acondicionado"
        },
        {
            "category": "Aire acondicionado",
            "brand": "Carrier",
            "title": "Catálogo Aire Acondicionado 2024",
            "year": "2024",
            "language": "ES",
            "pdfLink": "https://www.erfri.com/pdf/carrier-catalogo-aire-acondicionado-2024.pdf",
            "imageUrl": "https://www.erfri.com/images/catalogos/carrier-2024.jpg",
            "sourceUrl": "https://www.erfri.com/catalogo/aire-acondicionado"
        },
        {
            "category": "Calefacción",
            "brand": "Junkers",
            "title": "Catálogo Calefacción 2024",
            "year": "2024",
            "language": "ES",
            "pdfLink": "https://www.erfri.com/pdf/junkers-catalogo-calefaccion-2024.pdf",
            "imageUrl": "https://www.erfri.com/images/catalogos/junkers-2024.jpg",
            "sourceUrl": "https://www.erfri.com/catalogo/calefaccion"
        },
        {
            "category": "Calefacción",
            "brand": "Saunier Duval",
            "title": "Tarifa Calefacción 2024",
            "year": "2024",
            "language": "ES",
            "pdfLink": "https://www.erfri.com/pdf/saunier-duval-tarifa-calefaccion-2024.pdf",
            "imageUrl": "https://www.erfri.com/images/catalogos/saunier-duval-2024.jpg",
            "sourceUrl": "https://www.erfri.com/catalogo/calefaccion"
        },
        {
            "category": "Calefacción",
            "brand": "Vaillant",
            "title": "Catálogo Calderas 2024",
            "year": "2024",
            "language": "ES",
            "pdfLink": "https://www.erfri.com/pdf/vaillant-catalogo-calderas-2024.pdf",
            "imageUrl": "https://www.erfri.com/images/catalogos/vaillant-2024.jpg",
            "sourceUrl": "https://www.erfri.com/catalogo/calefaccion"
        },
        {
            "category": "Calefacción",
            "brand": "Baxi",
            "title": "Catálogo Calefacción 2024",
            "year": "2024",
            "language": "ES",
            "pdfLink": "https://www.erfri.com/pdf/baxi-catalogo-calefaccion-2024.pdf",
            "imageUrl": "https://www.erfri.com/images/catalogos/baxi-2024.jpg",
            "sourceUrl": "https://www.erfri.com/catalogo/calefaccion"
        },
        {
            "category": "Calefacción",
            "brand": "Roca",
            "title": "Catálogo Calefacción 2024",
            "year": "2024",
            "language": "ES",
            "pdfLink": "https://www.erfri.com/pdf/roca-catalogo-calefaccion-2024.pdf",
            "imageUrl": "https://www.erfri.com/images/catalogos/roca-calefaccion-2024.jpg",
            "sourceUrl": "https://www.erfri.com/catalogo/calefaccion"
        },
        {
            "category": "Calefacción",
            "brand": "Ferroli",
            "title": "Catálogo Calefacción 2024",
            "year": "2024",
            "language": "ES",
            "pdfLink": "https://www.erfri.com/pdf/ferroli-catalogo-calefaccion-2024.pdf",
            "imageUrl": "https://www.erfri.com/images/catalogos/ferroli-2024.jpg",
            "sourceUrl": "https://www.erfri.com/catalogo/calefaccion"
        },
        {
            "category": "Calefacción",
            "brand": "Chaffoteaux",
            "title": "Catálogo Calefacción 2024",
            "year": "2024",
            "language": "ES",
            "pdfLink": "https://www.erfri.com/pdf/chaffoteaux-catalogo-calefaccion-2024.pdf",
            "imageUrl": "https://www.erfri.com/images/catalogos/chaffoteaux-2024.jpg",
            "sourceUrl": "https://www.erfri.com/catalogo/calefaccion"
        },
        {
            "category": "Aerotermia",
            "brand": "Mitsubishi Electric",
            "title": "Catálogo Aerotermia 2024",
            "year": "2024",
            "language": "ES",
            "pdfLink": "https://www.erfri.com/pdf/mitsubishi-electric-catalogo-aerotermia-2024.pdf",
            "imageUrl": "https://www.erfri.com/images/catalogos/mitsubishi-aerotermia-2024.jpg",
            "sourceUrl": "https://www.erfri.com/catalogo/aerotermia"
        },
        {
            "category": "Aerotermia",
            "brand": "Daikin",
            "title": "Soluciones Aerotermia 2024",
            "year": "2024",
            "language": "ES",
            "pdfLink": "https://www.erfri.com/pdf/daikin-aerotermia-2024.pdf",
            "imageUrl": "https://www.erfri.com/images/catalogos/daikin-aerotermia-2024.jpg",
            "sourceUrl": "https://www.erfri.com/catalogo/aerotermia"
        },
        {
            "category": "Aerotermia",
            "brand": "Vaillant",
            "title": "Sistemas Aerotermia 2024",
            "year": "2024",
            "language": "ES",
            "pdfLink": "https://www.erfri.com/pdf/vaillant-sistemas-aerotermia-2024.pdf",
            "imageUrl": "https://www.erfri.com/images/catalogos/vaillant-aerotermia-2024.jpg",
            "sourceUrl": "https://www.erfri.com/catalogo/aerotermia"
        },
        {
            "category": "Aerotermia",
            "brand": "Saunier Duval",
            "title": "Aerotermia 2024",
            "year": "2024",
            "language": "ES",
            "pdfLink": "https://www.erfri.com/pdf/saunier-duval-aerotermia-2024.pdf",
            "imageUrl": "https://www.erfri.com/images/catalogos/saunier-duval-aerotermia-2024.jpg",
            "sourceUrl": "https://www.erfri.com/catalogo/aerotermia"
        },
        {
            "category": "Aerotermia",
            "brand": "Hitachi",
            "title": "Aerotermia 2024",
            "year": "2024",
            "language": "ES",
            "pdfLink": "https://www.erfri.com/pdf/hitachi-aerotermia-2024.pdf",
            "imageUrl": "https://www.erfri.com/images/catalogos/hitachi-aerotermia-2024.jpg",
            "sourceUrl": "https://www.erfri.com/catalogo/aerotermia"
        },
        {
            "category": "Ventilación",
            "brand": "Soler & Palau",
            "title": "Catálogo Ventilación 2024",
            "year": "2024",
            "language": "ES",
            "pdfLink": "https://www.erfri.com/pdf/soler-palau-catalogo-ventilacion-2024.pdf",
            "imageUrl": "https://www.erfri.com/images/catalogos/soler-palau-2024.jpg",
            "sourceUrl": "https://www.erfri.com/catalogo/ventilacion"
        },
        {
            "category": "Ventilación",
            "brand": "Aldes",
            "title": "Sistemas de Ventilación 2024",
            "year": "2024",
            "language": "ES",
            "pdfLink": "https://www.erfri.com/pdf/aldes-sistemas-ventilacion-2024.pdf",
            "imageUrl": "https://www.erfri.com/images/catalogos/aldes-2024.jpg",
            "sourceUrl": "https://www.erfri.com/catalogo/ventilacion"
        },
        {
            "category": "Ventilación",
            "brand": "Sodeca",
            "title": "Ventilación Industrial 2024",
            "year": "2024",
            "language": "ES",
            "pdfLink": "https://www.erfri.com/pdf/sodeca-ventilacion-industrial-2024.pdf",
            "imageUrl": "https://www.erfri.com/images/catalogos/sodeca-2024.jpg",
            "sourceUrl": "https://www.erfri.com/catalogo/ventilacion"
        },
        {
            "category": "Ventilación",
            "brand": "Fujitsu",
            "title": "Sistemas Ventilación 2024",
            "year": "2024",
            "language": "ES",
            "pdfLink": "https://www.erfri.com/pdf/fujitsu-sistemas-ventilacion-2024.pdf",
            "imageUrl": "https://www.erfri.com/images/catalogos/fujitsu-ventilacion-2024.jpg",
            "sourceUrl": "https://www.erfri.com/catalogo/ventilacion"
        },
        {
            "category": "Refrigeración",
            "brand": "Daikin",
            "title": "Catálogo Refrigeración 2024",
            "year": "2024",
            "language": "ES",
            "pdfLink": "https://www.erfri.com/pdf/daikin-catalogo-refrigeracion-2024.pdf",
            "imageUrl": "https://www.erfri.com/images/catalogos/daikin-refrigeracion-2024.jpg",
            "sourceUrl": "https://www.erfri.com/catalogo/refrigeracion"
        },
        {
            "category": "Refrigeración",
            "brand": "Carrier",
            "title": "Sistemas de Refrigeración 2024",
            "year": "2024",
            "language": "ES",
            "pdfLink": "https://www.erfri.com/pdf/carrier-sistemas-refrigeracion-2024.pdf",
            "imageUrl": "https://www.erfri.com/images/catalogos/carrier-2024.jpg",
            "sourceUrl": "https://www.erfri.com/catalogo/refrigeracion"
        },
        {
            "category": "Refrigeración",
            "brand": "Mitsubishi Electric",
            "title": "Refrigeración Comercial 2024",
            "year": "2024",
            "language": "ES",
            "pdfLink": "https://www.erfri.com/pdf/mitsubishi-electric-refrigeracion-comercial-2024.pdf",
            "imageUrl": "https://www.erfri.com/images/catalogos/mitsubishi-refrigeracion-2024.jpg",
            "sourceUrl": "https://www.erfri.com/catalogo/refrigeracion"
        },
        {
            "category": "Refrigeración",
            "brand": "Toshiba",
            "title": "Sistemas Refrigeración 2024",
            "year": "2024",
            "language": "ES",
            "pdfLink": "https://www.erfri.com/pdf/toshiba-sistemas-refrigeracion-2024.pdf",
            "imageUrl": "https://www.erfri.com/images/catalogos/toshiba-refrigeracion-2024.jpg",
            "sourceUrl": "https://www.erfri.com/catalogo/refrigeracion"
        },
        {
            "category": "Renovables",
            "brand": "Viessmann",
            "title": "Energías Renovables 2024",
            "year": "2024",
            "language": "ES",
            "pdfLink": "https://www.erfri.com/pdf/viessmann-energias-renovables-2024.pdf",
            "imageUrl": "https://www.erfri.com/images/catalogos/viessmann-2024.jpg",
            "sourceUrl": "https://www.erfri.com/catalogo/renovables"
        },
        {
            "category": "Renovables",
            "brand": "Wolf",
            "title": "Sistemas Solares 2024",
            "year": "2024",
            "language": "ES",
            "pdfLink": "https://www.erfri.com/pdf/wolf-sistemas-solares-2024.pdf",
            "imageUrl": "https://www.erfri.com/images/catalogos/wolf-2024.jpg",
            "sourceUrl": "https://www.erfri.com/catalogo/renovables"
        },
        {
            "category": "Renovables",
            "brand": "Junkers",
            "title": "Energía Solar Térmica 2024",
            "year": "2024",
            "language": "ES",
            "pdfLink": "https://www.erfri.com/pdf/junkers-energia-solar-termica-2024.pdf",
            "imageUrl": "https://www.erfri.com/images/catalogos/junkers-solar-2024.jpg",
            "sourceUrl": "https://www.erfri.com/catalogo/renovables"
        },
        {
            "category": "Renovables",
            "brand": "Vaillant",
            "title": "Sistemas Renovables 2024",
            "year": "2024",
            "language": "ES",
            "pdfLink": "https://www.erfri.com/pdf/vaillant-sistemas-renovables-2024.pdf",
            "imageUrl": "https://www.erfri.com/images/catalogos/vaillant-renovables-2024.jpg",
            "sourceUrl": "https://www.erfri.com/catalogo/renovables"
        },
        {
            "category": "Agua Caliente Sanitaria",
            "brand": "Roca",
            "title": "Catálogo ACS 2024",
            "year": "2024",
            "language": "ES",
            "pdfLink": "https://www.erfri.com/pdf/roca-catalogo-acs-2024.pdf",
            "imageUrl": "https://www.erfri.com/images/catalogos/roca-2024.jpg",
            "sourceUrl": "https://www.erfri.com/catalogo/agua-caliente-sanitaria"
        },
        {
            "category": "Agua Caliente Sanitaria",
            "brand": "Cointra",
            "title": "Termos y Acumuladores 2024",
            "year": "2024",
            "language": "ES",
            "pdfLink": "https://www.erfri.com/pdf/cointra-termos-acumuladores-2024.pdf",
            "imageUrl": "https://www.erfri.com/images/catalogos/cointra-2024.jpg",
            "sourceUrl": "https://www.erfri.com/catalogo/agua-caliente-sanitaria"
        },
        {
            "category": "Agua Caliente Sanitaria",
            "brand": "Ferroli",
            "title": "Sistemas ACS 2024",
            "year": "2024",
            "language": "ES",
            "pdfLink": "https://www.erfri.com/pdf/ferroli-sistemas-acs-2024.pdf",
            "imageUrl": "https://www.erfri.com/images/catalogos/ferroli-acs-2024.jpg",
            "sourceUrl": "https://www.erfri.com/catalogo/agua-caliente-sanitaria"
        },
        {
            "category": "Agua Caliente Sanitaria",
            "brand": "Chaffoteaux",
            "title": "Acumuladores ACS 2024",
            "year": "2024",
            "language": "ES",
            "pdfLink": "https://www.erfri.com/pdf/chaffoteaux-acumuladores-acs-2024.pdf",
            "imageUrl": "https://www.erfri.com/images/catalogos/chaffoteaux-acs-2024.jpg",
            "sourceUrl": "https://www.erfri.com/catalogo/agua-caliente-sanitaria"
        },
        {
            "category": "Climatización Piscinas",
            "brand": "Astralpool",
            "title": "Climatización Piscinas 2024",
            "year": "2024",
            "language": "ES",
            "pdfLink": "https://www.erfri.com/pdf/astralpool-climatizacion-piscinas-2024.pdf",
            "imageUrl": "https://www.erfri.com/images/catalogos/astralpool-2024.jpg",
            "sourceUrl": "https://www.erfri.com/catalogo/climatizacion-piscinas"
        },
        {
            "category": "Climatización Piscinas",
            "brand": "Hayward",
            "title": "Sistemas Piscina 2024",
            "year": "2024",
            "language": "ES",
            "pdfLink": "https://www.erfri.com/pdf/hayward-sistemas-piscina-2024.pdf",
            "imageUrl": "https://www.erfri.com/images/catalogos/hayward-2024.jpg",
            "sourceUrl": "https://www.erfri.com/catalogo/climatizacion-piscinas"
        },
        {
            "category": "Deshumidificadores",
            "brand": "Mitsubishi Electric",
            "title": "Deshumidificadores 2024",
            "year": "2024",
            "language": "ES",
            "pdfLink": "https://www.erfri.com/pdf/mitsubishi-electric-deshumidificadores-2024.pdf",
            "imageUrl": "https://www.erfri.com/images/catalogos/mitsubishi-deshumidificadores-2024.jpg",
            "sourceUrl": "https://www.erfri.com/catalogo/deshumidificadores"
        },
        {
            "category": "Deshumidificadores",
            "brand": "Trotec",
            "title": "Deshumidificadores Profesionales 2024",
            "year": "2024",
            "language": "ES",
            "pdfLink": "https://www.erfri.com/pdf/trotec-deshumidificadores-profesionales-2024.pdf",
            "imageUrl": "https://www.erfri.com/images/catalogos/trotec-2024.jpg",
            "sourceUrl": "https://www.erfri.com/catalogo/deshumidificadores"
        }
    ]

    const grouped = catalogs.reduce<Record<string, Catalog[]>>((acc, cat) => {
        if (!acc[cat.category]) acc[cat.category] = []
        acc[cat.category].push(cat)
        return acc
    }, {})


    return (
        <>
            <main className="bg-white text-gray-800">
                {/* Hero */}
                <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
                    <Image
                        src="/imgs/banner-1.jpg"
                        alt="Catálogos de climatización"
                        fill
                        className="object-cover brightness-75"
                    />
                    <div className="relative z-10 text-center px-6">
                        <h1 className="text-4xl md:text-7xl font-bold text-white uppercase italic">
                            Catálogos
                        </h1>
                        <p className="mt-4 text-white text-2xl max-w-3xl mx-auto">
                            Consulta los catálogos técnicos y comerciales de nuestras marcas colaboradoras.
                        </p>
                    </div>
                    <div className="bg-black/30 absolute top-0 bottom-0 right-0 left-0"></div>
                </section>

                {/* Intro */}
                <section className="max-w-5xl mx-auto px-6 py-20 text-center">
                    <p className="text-gray-600 text-xl leading-relaxed">
                        En Sumiclima ponemos a tu disposición los catálogos actualizados de los principales fabricantes del sector.
                        Encuentra fácilmente información técnica, novedades y soluciones para tus proyectos de climatización, ventilación y refrigeración.
                    </p>
                </section>

                {/* Catálogo grid por categoría */}
                <section className="max-w-6xl mx-auto px-6 pb-24 space-y-20">
                    {Object.entries(grouped).map(([category, items]) => (
                        <div key={category}>
                            <div className="flex justify-between items-center">
                                <h2 className="text-3xl font-semibold mb-8 border-l-4 border-[#c91048] pl-4">
                                    {category}
                                </h2>
                                <ChevronDown />
                            </div>

                            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
                                {items.map((cat, index) => (
                                    <div
                                        key={index}
                                        className="bg-white shadow hover:shadow-lg transition rounded-lg overflow-hidden"
                                    >
                                        <div className="relative w-full h-52 bg-gray-100">
                                            <Image
                                                src={cat.imageUrl}
                                                alt={`Catálogo ${cat.title}`}
                                                fill
                                                className="object-contain p-6"
                                            />
                                        </div>
                                        <div className="p-5 flex flex-col items-start text-center">
                                            <h3 className="text-lg font-semibold mb-2">{cat.brand}</h3>
                                            <a
                                                href={cat.pdfLink}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="mt-2 px-4 py-2 bg-[#c91048] text-white font-medium rounded hover:bg-[#a80e3c] transition"
                                            >
                                                Ver catálogo
                                            </a>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </section>

                {/* CTA final */}
                <section className="bg-gray-50 py-20 text-center">
                    <h2 className="text-3xl font-semibold mb-4">¿No encuentras el catálogo que buscas?</h2>
                    <p className="text-gray-600 mb-6 text-lg">
                        Escríbenos y te lo facilitaremos directamente.
                    </p>
                    <div className="relative flex justify-center items-center">
                        <Link href={`/contacto`} className="mt-6 px-6 py-4 bg-[#072757] text-white font-semibold flex justify-center items-center gap-2 cursor-pointer">
                            Contáctanos
                            <ArrowRight />
                        </Link>
                    </div>

                </section>
            </main>
        </>
    )
}

