
import { Locale, getDictionary } from "@/lib/getDictionary";
import ContactForm from "@/components/ContactForm";

interface PageProps {
    params: { locale: string };
    searchParams?: { [key: string]: string | string[] | undefined };
}

export default async function Page({ params }: PageProps) {
    const t = await getDictionary(params.locale as Locale);

    return (
        <ContactForm t={t} />
    );
}
