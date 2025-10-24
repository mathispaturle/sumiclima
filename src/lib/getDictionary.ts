import 'server-only'

export type Locale = 'es' | 'cat' | 'en' | 'fr'

export async function getDictionary(locale: Locale) {
    const dictionaries = {
        es: () => import('@/locales/es.json').then((m) => m.default),
        cat: () => import('@/locales/cat.json').then((m) => m.default),
        en: () => import('@/locales/en.json').then((m) => m.default),
        fr: () => import('@/locales/fr.json').then((m) => m.default),
    }

    return dictionaries[locale]()
}
