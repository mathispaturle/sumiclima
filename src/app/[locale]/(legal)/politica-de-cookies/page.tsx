import Image from "next/image";
import { getDictionary } from "@/lib/getDictionary";
import { Locale } from "@/lib/getDictionary";

export default async function CookiesPolicyPage({ params }: { params: { locale: Locale } }) {
    const t = await getDictionary(params.locale);

    return (
        <main className="max-w-6xl mx-auto px-6 py-20">
            <div className="p-10 md:p-16 relative overflow-hidden">
                <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#072757]">{t.cookies.title}</h1>
                <p className="text-gray-700 text-lg mb-8">{t.cookies.intro}</p>

                <section className="mb-6">
                    <h2 className="text-2xl font-semibold mb-2 text-[#c91048]">{t.cookies.what_are}</h2>
                    <p className="text-gray-700">{t.cookies.what_are_text}</p>
                </section>

                <section className="mb-6">
                    <h2 className="text-2xl font-semibold mb-2 text-[#c91048]">{t.cookies.types_title}</h2>
                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                        {t.cookies.types.map((item: string, idx: number) => (
                            <li key={idx}>{item}</li>
                        ))}
                    </ul>
                </section>

                <section className="mb-6">
                    <h2 className="text-2xl font-semibold mb-2 text-[#c91048]">{t.cookies.consent_title}</h2>
                    <p className="text-gray-700">{t.cookies.consent_text}</p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-2 text-[#c91048]">{t.cookies.more_info_title}</h2>
                    <p className="text-gray-700">
                        {t.cookies.more_info_text}{" "}
                        <a href={t.cookies.privacy_link} className="text-[#c91048] underline">
                            {t.cookies.privacy_link.includes("privacy") ? "Privacy Policy" : "Política de Privacidad"}
                        </a>
                    </p>
                </section>

                {/* Optional decorative image */}
                <div className="absolute top-0 right-0 w-48 h-48 opacity-10">
                    <Image src="/imgs/cookies-decor.png" alt="Cookies decor" fill style={{ objectFit: "contain" }} />
                </div>
            </div>
        </main>
    );
}
