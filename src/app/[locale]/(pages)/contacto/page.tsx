
import { Locale, getDictionary } from "@/lib/getDictionary";
import ContactForm from "@/components/ContactForm";

interface PageProps {
    params: { locale: Locale };
}

export default async function Page({ params }: PageProps) {

    const t = await getDictionary(params.locale);


    return (
        <ContactForm t={t} />
    );
}
