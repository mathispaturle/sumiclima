'use client'

import { useState } from "react";
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";
import { Locale, getDictionary } from "@/lib/getDictionary";

export default function ContactForm({ t }: { t: any }) {

    const [form, setForm] = useState({ name: "", email: "", company: "", phone: "", message: "" });
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async () => {
        setLoading(true);
        setError("");
        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(form),
            });

            const data = await res.json();
            if (!res.ok) throw new Error(data.error || "Error al enviar el mensaje");

            setSuccess(true);
            setForm({ name: "", email: "", company: "", phone: "", message: "" });
        } catch (err: any) {
            setError(err.message || "Error desconocido");
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className="py-24 bg-white">
            <div className="max-w-screen-2xl mx-auto px-6 text-left grid md:grid-cols-2 gap-8">
                <div>
                    <h2 className="text-5xl font-bold mb-4">{t.contact.title}</h2>
                    <p className="text-gray-600 text-xl max-w-3xl mx-auto mb-6">{t.contact.intro}</p>
                </div>
            </div>

            <div className="max-w-screen-2xl mx-auto px-6 mt-6 text-left grid md:grid-cols-2 gap-16">
                {/* Form */}
                <div className="relative">
                    <div className="max-w-xl space-y-4">
                        <input
                            type="text"
                            name="name"
                            placeholder={t.contact.form.name}
                            className="bg-[#072757]/70 px-4 py-3 w-full text-white placeholder:text-neutral-200"
                            value={form.name}
                            onChange={handleChange}
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder={t.contact.form.email}
                            className="bg-[#072757]/70 px-4 py-3 w-full text-white placeholder:text-neutral-200"
                            value={form.email}
                            onChange={handleChange}
                        />
                        <input
                            type="text"
                            name="company"
                            placeholder={t.contact.form.company}
                            className="bg-[#072757]/70 px-4 py-3 w-full text-white placeholder:text-neutral-200"
                            value={form.company}
                            onChange={handleChange}
                        />
                        <input
                            type="text"
                            name="phone"
                            placeholder={t.contact.form.phone}
                            className="bg-[#072757]/70 px-4 py-3 w-full text-white placeholder:text-neutral-200"
                            value={form.phone}
                            onChange={handleChange}
                        />
                        <textarea
                            rows={5}
                            name="message"
                            placeholder={t.contact.form.message}
                            className="bg-[#072757]/70 px-4 py-3 w-full text-white placeholder:text-neutral-200"
                            value={form.message}
                            onChange={handleChange}
                        />
                        <button
                            onClick={handleSubmit}
                            disabled={loading}
                            className="px-3 py-2 bg-[#072757] text-white font-semibold flex justify-center items-center gap-2 cursor-pointer"
                        >
                            {t.contact.form.submit}
                            <ArrowRight />
                        </button>

                        {success && <p className="text-green-500 mt-2">¡Mensaje enviado correctamente!</p>}
                        {error && <p className="text-red-500 mt-2">{error}</p>}
                    </div>
                </div>

                {/* Contacto directo */}
                <div>
                    <p className="text-gray-600 text-xl max-w-3xl mx-auto mb-6">{t.contact.direct}</p>
                    <ul className="space-y-2 text-sm">
                        <li className="flex items-start gap-2">
                            <MapPin className="w-4 h-4 mt-0.5 text-[#c91048]" />
                            <span>{t.contact.address}</span>
                        </li>
                        <li className="flex items-center gap-2">
                            <Phone className="w-4 h-4 text-[#c91048]" />
                            <a href={`tel:${t.contact.phone}`} className="hover:text-[#c91048] transition">
                                {t.contact.phone}
                            </a>
                        </li>
                        <li className="flex items-center gap-2">
                            <Mail className="w-4 h-4 text-[#c91048]" />
                            <a href={`mailto:${t.contact.email}`} className="hover:text-[#c91048] transition">
                                {t.contact.email}
                            </a>
                        </li>
                    </ul>

                    <iframe
                        src="https://www.google.com/maps?q=41.42881698246008,2.1996913111668612&output=embed"
                        width="100%"
                        height="400"
                        className="mt-6"
                        loading="lazy"
                    ></iframe>
                </div>
            </div>
        </section>
    );
}
