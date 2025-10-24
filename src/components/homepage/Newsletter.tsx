"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function Newsletter({ t }: { t: any }) {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState("");

    const handleSubscribe = async () => {
        setLoading(true);
        setError("");
        try {
            const res = await fetch("/api/newsletter/subscribe", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ name, email }),
            });

            const data = await res.json();
            if (!res.ok) throw new Error(data.error || "Failed");

            setSuccess(true);
            setName("");
            setEmail("");
        } catch (err: any) {
            setError(err.message || "Something went wrong");
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className="bg-linear-to-r from-[#0063c7]/90 to-[#454399]/90 relative">
            <div className="max-w-screen-2xl mx-auto px-6 text-left grid md:grid-cols-2 gap-16 items-center w-full">
                <div className="flex flex-col justify-start items-start w-full mt-32 md:mt-0">
                    <p className="text-white text-xl max-w-3xl">{t.newsletter.intro}</p>
                    <h2 className="text-4xl font-bold text-white">{t.newsletter.title}</h2>

                    <div className="flex flex-col md:flex-row justify-stretch items-stretch gap-2 mt-6 w-full">
                        <input
                            name="name"
                            type="text"
                            placeholder={t.newsletter.form.name}
                            className="bg-white px-3 py-2 min-w-64"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                        <input
                            name="email"
                            type="email"
                            placeholder={t.newsletter.form.email}
                            className="bg-white px-3 py-2 min-w-64 flex-1"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <button
                            onClick={handleSubscribe}
                            disabled={loading}
                            className="px-3 py-2 bg-[#072757] text-white font-semibold flex justify-center items-center gap-2 cursor-pointer"
                        >
                            {t.newsletter.form.submit}
                            <ArrowRight />
                        </button>
                    </div>

                    {success && <p className="text-green-500 mt-2">¡Gracias por suscribirte!</p>}
                    {error && <p className="text-red-500 mt-2">{error}</p>}
                </div>

                <div className="w-full h-96 relative">
                    <Image
                        src={"/imgs/brochure.png"}
                        alt="Newsletter"
                        fill
                        className="h-full w-full"
                        style={{ objectFit: "contain", objectPosition: "right" }}
                    />
                </div>
            </div>

            <div className="absolute top-0 bottom-0 left-0 right-0 bg-black -z-10">
                <Image
                    src={"/imgs/banner-3.jpg"}
                    alt="Newsletter background"
                    fill
                    className="h-full w-full"
                    style={{ objectFit: "cover", objectPosition: "right" }}
                />
            </div>
        </section>
    );
}
