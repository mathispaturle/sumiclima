"use client";

import Image from "next/image";
import Link from "next/link";
import { LucidePackageSearch, LucideShieldCheck, Menu, X } from "lucide-react";
import { Locale } from "@/lib/getDictionary";
import { useState } from "react";

export default function Navbar({ t, locale }: { t: any; locale: Locale }) {
    const [mobileOpen, setMobileOpen] = useState(false);

    const toggleMobileMenu = () => setMobileOpen(!mobileOpen);

    const links = [
        { href: `/${locale}/catalogo`, label: t.navbar.catalogs },
        { href: `/${locale}/nosotros`, label: t.navbar.about_us },
        // { href: `/${locale}/blog`, label: t.navbar.blog },
        { href: `/${locale}/contacto`, label: t.navbar.contact },
    ];

    return (
        <>
            <div className="top-0 sticky z-30 w-full drop-shadow-md">
                {/* Barra superior */}
                <div className="w-full bg-[#072757] py-3 md:py-0">
                    <div className="max-w-screen-2xl px-5 mx-auto h-auto md:h-8 text-white text-xs flex justify-between items-center">
                        <div className="flex justify-start items-center gap-4">
                            <div className="flex justify-start items-center gap-1">
                                <LucideShieldCheck size={16} className="text-[#c91048]" />
                                <p>{t.navbar.professional_only}</p>
                            </div>
                            <div className="flex justify-start items-center gap-1">
                                <LucidePackageSearch size={16} className="text-[#c91048]" />
                                <p>{t.navbar.references}</p>
                            </div>
                        </div>

                        <div className="hidden md:flex justify-start items-center gap-4">
                            <div>{t.navbar.email}</div>
                            <div>{t.navbar.phone}</div>
                        </div>
                    </div>
                </div>

                {/* Barra principal */}
                <div className="w-full bg-white">
                    <div className="max-w-screen-2xl px-5 mx-auto py-6 grid grid-cols-2 items-center md:min-h-8">
                        <Link href={`/${locale}`}>
                            <div className="relative w-52 min-h-8">
                                <Image
                                    src={"/brand/logo-sumi-mitja-b.png"}
                                    alt="Logo Sumiclima"
                                    fill
                                    className="h-full w-full"
                                    style={{ objectFit: "contain", objectPosition: "left" }}
                                />
                            </div>
                        </Link>

                        {/* Desktop menu */}
                        <div className="hidden md:flex justify-end items-center gap-6">
                            {links.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className="hover:text-[#c91048] duration-200 transition-colors cursor-pointer"
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </div>

                        {/* Mobile menu button */}
                        <div className="md:hidden flex justify-end items-center gap-6">
                            <button onClick={toggleMobileMenu}>
                                {mobileOpen ? <X /> : <Menu />}
                            </button>
                        </div>
                    </div>


                </div>
            </div>

            {/* Mobile menu drawer */}
            {mobileOpen && (
                <div className="md:hidden absolute bottom-0 inset-0 bg-black/50 z-40">
                    <div className="absolute top-0 right-0  bottom-0 w-3/4 max-w-xs h-full bg-white shadow-lg p-6 z-50 flex flex-col">
                        <button
                            onClick={toggleMobileMenu}
                            className="self-end mb-8"
                        >
                            <X size={24} />
                        </button>
                        {links.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="text-gray-800 font-semibold py-3 border-b border-gray-200"
                                onClick={() => setMobileOpen(false)}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </>

    );
}
