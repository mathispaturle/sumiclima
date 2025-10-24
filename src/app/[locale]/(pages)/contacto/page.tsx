


import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";
import { Locale, getDictionary } from "@/lib/getDictionary";
import ContactForm from "@/components/ContactForm";

export default async function Contacto({ params }: { params: { locale: Locale } }) {

    const t = await getDictionary(params.locale);


    return (
        <ContactForm t={t} />
    );
}
