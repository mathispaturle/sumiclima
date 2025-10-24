

import { Locale } from "@/lib/getDictionary";
import { ArrowRight, LucideBookImage } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Hero({ t, locale }: { t: any, locale: Locale }) {

    return (
        <>
            <main className="relative">
                <div className="min-h-[70vh] md:min-h-auto md:h-[85vh] w-full relative">
                    <div className="h-full w-full">
                        <Image
                            src={'/imgs/banner-7.jpg'}
                            alt="Logo Sumiclima"
                            fill
                            className="h-full w-full"
                            style={{ objectFit: 'cover', objectPosition: 'right' }}
                        />
                    </div>

                    <div className="absolute top-0 w-full h-full bg-linear-to-b from-black/05 via-black/05 to-[#072757]/90">
                    </div>
                    <div className="absolute bottom-24 w-full">
                        <div className="px-5 max-w-screen-2xl mx-auto">
                            <h1 className="text-5xl md:text-7xl font-bold max-w-2xl text-white italic uppercase">{t.hero.title}</h1>
                            <h2 className="mt-3 text-lg md:text-2xl max-w-5xl text-white">{t.hero.subtitle}</h2>

                            <div className="flex flex-col md:flex-row justify-start items-stretch gap-3 mt-6">
                                <Link href={`/${locale}/contacto`}>
                                    <div className="px-6 py-4 bg-[#072757] text-white font-semibold flex justify-center items-center gap-2 cursor-pointer">
                                        {t.hero.cta}
                                        <ArrowRight />
                                    </div>
                                </Link>

                                <Link href={`/${locale}/catalogo`}>
                                    <div className="px-6 py-4 bg-transparent border border-[#072757] text-white font-semibold flex justify-center items-center gap-2 cursor-pointer">
                                        {t.hero.cta2}
                                        <LucideBookImage />
                                    </div>
                                </Link>

                            </div>

                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}