// src/app/[locale]/(pages)/politica-de-privacidad/page.tsx
import { Locale, getDictionary } from "@/lib/getDictionary";

export const metadata = {
    title: "Política de Privacidad - Sumiclima",
    description:
        "Protegemos tus datos personales y explicamos cómo los tratamos en Sumiclima.",
};

export default async function PrivacyPolicyPage({
    params,
}: {
    params: { locale: Locale };
}) {
    const t = await getDictionary(params.locale);

    return (
        <main className="max-w-6xl mx-auto px-6 py-20 prose dark:prose-invert">
            <h1 className="text-4xl font-bold mb-6">{t.privacy.title}</h1>

            <p className="mb-6" dangerouslySetInnerHTML={{ __html: t.privacy.intro }} />

            <h2>{t.privacy.data_title}</h2>
            <ul className="mb-6 list-disc list-inside space-y-1">
                {t.privacy.data_list.map((item: string, idx: number) => (
                    <li key={idx}>{item}</li>
                ))}
            </ul>

            <h2>{t.privacy.purpose_title}</h2>
            <p>{t.privacy.purpose_text}</p>
            <ul className="mb-6 list-disc list-inside space-y-1">
                {t.privacy.purpose_list.map((item: string, idx: number) => (
                    <li key={idx}>{item}</li>
                ))}
            </ul>

            <h2>{t.privacy.legal_basis_title}</h2>
            <p className="mb-6">{t.privacy.legal_basis_text}</p>

            <h2>{t.privacy.retention_title}</h2>
            <p className="mb-6">{t.privacy.retention_text}</p>

            <h2>{t.privacy.recipients_title}</h2>
            <p>{t.privacy.recipients_text}</p>
            <ul className="mb-6 list-disc list-inside space-y-1">
                {t.privacy.recipients_list.map((item: string, idx: number) => (
                    <li key={idx}>{item}</li>
                ))}
            </ul>

            <h2>{t.privacy.rights_title}</h2>
            <p dangerouslySetInnerHTML={{ __html: t.privacy.rights_text }} />
        </main>
    );
}
