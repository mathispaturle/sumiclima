import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin } from "lucide-react";
import { Locale } from "@/lib/getDictionary";

export default function Footer({ t, locale }: { t: any; locale: Locale }) {
    return (
        <footer className="bg-[#072757] text-gray-300 pt-16 pb-8">
            <div className="max-w-screen-2xl mx-auto px-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
                {/* Logo + descripción */}
                <div>
                    <Image
                        src="/brand/logo-sumi-mitja.png"
                        alt="Sumiclima"
                        width={160}
                        height={60}
                        className="mb-4"
                    />
                    <p className="text-sm leading-relaxed">{t.footer.description}</p>
                </div>

                {/* Enlaces rápidos */}
                <div>
                    <h3 className="text-white font-semibold mb-3">
                        {t.footer.links_title}
                    </h3>
                    <ul className="space-y-2 text-sm">
                        <li>
                            <Link
                                href={`/${locale}`}
                                className="hover:text-white transition"
                            >
                                {t.footer.links.home}
                            </Link>
                        </li>
                        <li>
                            <Link
                                href={`/${locale}/catalogo`}
                                className="hover:text-white transition"
                            >
                                {t.footer.links.catalog}
                            </Link>
                        </li>
                        <li>
                            <Link
                                href={`/${locale}/nosotros`}
                                className="hover:text-white transition"
                            >
                                {t.footer.links.about}
                            </Link>
                        </li>
                        <li>
                            <Link
                                href={`/${locale}/contacto`}
                                className="hover:text-white transition"
                            >
                                {t.footer.links.contact}
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Contacto */}
                <div>
                    <h3 className="text-white font-semibold mb-3">
                        {t.footer.contact_title}
                    </h3>
                    <ul className="space-y-2 text-sm">
                        <li className="flex items-start gap-2">
                            <MapPin className="w-4 h-4 mt-0.5 text-[#c91048]" />
                            <span>{t.footer.address}</span>
                        </li>
                        <li className="flex items-center gap-2">
                            <Phone className="w-4 h-4 text-[#c91048]" />
                            <a
                                href={`tel:${t.footer.phone.replace(/ /g, "")}`}
                                className="hover:text-white transition"
                            >
                                {t.footer.phone}
                            </a>
                        </li>
                        <li className="flex items-center gap-2">
                            <Mail className="w-4 h-4 text-[#c91048]" />
                            <a
                                href={`mailto:${t.footer.email}`}
                                className="hover:text-white transition"
                            >
                                {t.footer.email}
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Legales */}
                <div>
                    <h3 className="text-white font-semibold mb-3">
                        {t.footer.legal_title}
                    </h3>
                    <ul className="space-y-2 text-sm">
                        <li>
                            <Link
                                href={`/${locale}/aviso-legal`}
                                className="hover:text-white transition"
                            >
                                {t.footer.legal.notice}
                            </Link>
                        </li>
                        <li>
                            <Link
                                href={`/${locale}/politica-de-privacidad`}
                                className="hover:text-white transition"
                            >
                                {t.footer.legal.privacy}
                            </Link>
                        </li>
                        <li>
                            <Link
                                href={`/${locale}/politica-de-cookies`}
                                className="hover:text-white transition"
                            >
                                {t.footer.legal.cookies}
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Línea inferior */}
            <div className="border-t border-gray-700 mt-12 pt-6 text-center text-sm text-gray-500">
                © {new Date().getFullYear()} Sumiclima. {t.footer.copyright}
            </div>
        </footer>
    );
}
