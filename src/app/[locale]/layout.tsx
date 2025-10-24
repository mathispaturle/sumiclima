import Link from "next/link";
import { ReactNode } from "react";

import '@/app/globals.css'
import Navbar from "@/components/navbar";


import { Roboto, Reddit_Sans } from 'next/font/google'
import Footer from "@/components/footer";
import Newsletter from "@/components/homepage/Newsletter";
import { getDictionary, Locale } from "@/lib/getDictionary";
import { GoogleAnalytics } from '@next/third-parties/google';
import CookieBanner from "@/components/CookieBanner";

const roboto = Roboto({ subsets: ['latin'], weight: ['400', '700'], variable: '--font-roboto', display: 'swap' })
const reddit = Reddit_Sans({ subsets: ['latin'], weight: ['400', '500', '600', '700'], variable: '--font-reddit', display: 'swap' })


export default async function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: { locale: Locale };
}) {
  const { locale } = await params;
  const t = await getDictionary(locale)

  return (
    <html lang={locale} className={`${roboto.variable} ${reddit.variable}`}>
      <body>
        <GoogleAnalytics gaId="G-JG7JJ7SVHC" />
        <Navbar t={t} locale={locale} />
        {children}
        <Newsletter t={t} />
        <Footer t={t} locale={locale} />
        <CookieBanner t={t} locale={locale} />
      </body>
    </html>
  );
}
