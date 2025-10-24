import { Locale } from "@/lib/getDictionary";
import { ArrowRight } from "lucide-react";
import {
    Wind,
    Flame,
    ThermometerSun,
    Fan,
    Snowflake,
    LayoutGrid,
    Shield,
    Filter,
    Droplets,
    Wrench,
    Package,
    Hammer,
} from "lucide-react";

import Link from "next/link";

export default function Products({
    t,
    locale,
}: {
    t: any;
    locale: Locale;
}) {
    const products = [
        { icon: Wind, name: t.products.list.air_conditioning },
        { icon: Flame, name: t.products.list.heating },
        { icon: ThermometerSun, name: t.products.list.aerothermal },
        { icon: Fan, name: t.products.list.ventilation },
        { icon: Snowflake, name: t.products.list.refrigeration },
        { icon: LayoutGrid, name: t.products.list.zoning },
        { icon: Shield, name: t.products.list.insulation },
        { icon: Filter, name: t.products.list.filtration },
        { icon: Droplets, name: t.products.list.pumps },
        { icon: Wrench, name: t.products.list.fixation },
        { icon: Package, name: t.products.list.materials },
        { icon: Hammer, name: t.products.list.tools },
    ];

    return (
        <section className="py-32 bg-white">
            <div className="max-w-screen-2xl mx-auto px-6 text-left grid md:grid-cols-2 gap-8">
                <div>
                    <h2 className="text-5xl font-bold mb-4">{t.products.title}</h2>
                    <p className="text-gray-600 text-xl max-w-3xl mx-auto mb-6">
                        {t.products.subtitle}
                    </p>

                    <Link href={`/${locale}/catalogo`} className="flex">
                        <div className="px-6 py-4 bg-[#072757] text-white font-semibold flex justify-center items-center gap-2 cursor-pointer">
                            {t.products.cta}
                            <ArrowRight />
                        </div>
                    </Link>

                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
                    {products.map(({ icon: Icon, name }) => (
                        <div
                            key={name}
                            className="p-4 bg-neutral-50 hover:shadow-sm transition flex flex-col items-start justify-start cursor-pointer"
                        >
                            <Icon className="h-8 w-8 text-[#c91048] mb-2" />
                            <p className="font-medium text-[#434399] text-center">{name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
