import { Locale } from "@/lib/getDictionary";
import { ArrowRight } from "lucide-react";

import Link from "next/link";

export default function Team({
    t,
    locale,
}: {
    t: any;
    locale: Locale;
}) {
    return (
        <section className="py-32 bg-gray-50">
            <div className="max-w-screen-2xl mx-auto px-6 text-left grid md:grid-cols-2 gap-16 items-center">
                <div className="order-2 md:order-1">
                    <img
                        src="/imgs/team.jpg"
                        alt="Equipo Sumiclima"
                        className="shadow-md object-cover w-full h-full"
                    />
                </div>

                <div className="order-1 md:order-2">
                    <h2 className="text-5xl font-bold mb-4">{t.team.title}</h2>
                    <p className="text-gray-600 text-xl max-w-3xl mx-auto mb-6">
                        {t.team.subtitle}
                    </p>

                    <Link href={`/${locale}/contacto`} className="flex">
                        <div className="px-6 py-4 bg-[#072757] text-white font-semibold flex justify-center items-center gap-2 cursor-pointer">
                            {t.team.cta}
                            <ArrowRight />
                        </div>
                    </Link>
                </div>
            </div>
        </section>
    );
}
