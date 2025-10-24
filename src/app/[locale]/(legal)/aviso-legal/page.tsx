import React from "react";
import { Locale, getDictionary } from "@/lib/getDictionary";

export default async function LegalNotice({ params }: { params: { locale: Locale } }) {
    const t = await getDictionary(params.locale);

    return (
        <main className="max-w-4xl mx-auto px-6 py-20">
            <h1 className="text-4xl font-bold text-gray-800 mb-8">{t.legal.notice_title}</h1>

            <section className="mb-10 prose prose-lg text-gray-700 dark:prose-invert">
                <p>{t.legal.intro}</p>

                <ul className="list-disc list-inside space-y-1">
                    <li>{t.legal.company_name}</li>
                    <li>{t.legal.cif}</li>
                    <li>{t.legal.address}</li>
                    <li>{t.legal.email}</li>
                </ul>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-3">{t.legal.terms_title}</h2>
                <p className="text-gray-700">{t.legal.terms_text}</p>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-3">{t.legal.ip_title}</h2>
                <p className="text-gray-700">{t.legal.ip_text}</p>
            </section>

            <section>
                <h2 className="text-2xl font-semibold mb-3">{t.legal.responsibility_title}</h2>
                <p className="text-gray-700">{t.legal.responsibility_text}</p>
            </section>
        </main>
    );
}
