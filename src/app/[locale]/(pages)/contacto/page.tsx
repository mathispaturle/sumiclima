
import { Locale, getDictionary } from "@/lib/getDictionary";
import ContactForm from "@/components/ContactForm";


export default async function Page({ params }: { params: { locale: string } }) {
    const t = await getDictionary(params.locale as Locale);

    return (
        <ContactForm t={t} />
    );
}
