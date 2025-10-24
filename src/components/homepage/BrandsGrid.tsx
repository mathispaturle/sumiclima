import { Locale } from "@/lib/getDictionary";
import Image from "next/image";

const images = [
    "airzone.png",
    "daikin.png",
    "dinac.png",
    "ekokai.png",
    "fujitsu.png",
    "haier.png",
    "hitachi.png",
    "huawei.png",
    "isober.png",
    "mitsubishi.png",
    "panasonic.png",
    "quntec.png",
    "samsung.png",
    "sp.png",
    "wilo.png",
    "yuoki.png",
];

export default function BrandsGrid({
    t,
    locale,
}: {
    t: any;
    locale: Locale;
}) {
    return (
        <section className="py-32 bg-white">
            <div className="max-w-screen-2xl mx-auto px-5 text-center">
                <h2 className="text-5xl font-bold text-gray-800 mb-16">
                    {t.brands.title}
                </h2>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 place-items-center">
                    {images.map((filename) => {
                        const brand = filename.replace(".png", "");
                        return (
                            <div
                                key={brand}
                                className="relative w-28 h-16 sm:w-32 sm:h-20 grayscale hover:grayscale-0 hover:bg-neutral-50 transition-all duration-200 cursor-pointer"
                            >
                                <Image
                                    src={`/brands/${filename}`}
                                    alt={brand}
                                    fill
                                    sizes="(max-width: 768px) 120px, 160px"
                                    className="object-contain"
                                />
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
