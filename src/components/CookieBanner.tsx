"use client"

import CookieConsent from "react-cookie-consent";
import { Locale, getDictionary } from "@/lib/getDictionary";

export default function CookieBanner({ t, locale }: { t: any, locale: Locale }) {

    return (
        <CookieConsent
            location="bottom"
            buttonText={t.cookieBanner.accept}
            declineButtonText={t.cookieBanner.decline}
            enableDeclineButton
            cookieName="sumiclima_cookies"
            style={{
                background: "rgba(7, 39, 87, 0.95)",
                color: "#fff",
                fontSize: "1rem",
                textAlign: "center",
                padding: "1.2rem",
            }}
            buttonStyle={{
                background: "#c91048",
                color: "#fff",
                fontWeight: "bold",
                fontSize: "0.95rem",
                padding: "0.5rem 1rem",
                marginLeft: "1rem",
            }}
            declineButtonStyle={{
                background: "#555",
                color: "#fff",
                fontWeight: "bold",
                fontSize: "0.95rem",
                padding: "0.5rem 1rem",
                marginLeft: "0.5rem",
            }}
            expires={150}
        >
            {t.cookieBanner.message}{" "}
            <a href="/politica-de-cookies" className="underline hover:text-gray-200">
                {t.cookieBanner.linkText}
            </a>
            .
        </CookieConsent>
    );
}
