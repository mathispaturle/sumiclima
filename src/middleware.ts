import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl

    const locales = ['en', 'es', 'cat', 'fr']

    // Skip static files / Next.js internals
    if (
        pathname.startsWith('/_next') ||
        pathname.startsWith('/api') ||
        pathname.startsWith('/images') ||
        pathname.startsWith('/favicon') ||
        pathname.match(/\.(png|jpg|jpeg|gif|svg|ico|webp|avif|txt|xml|json)$/)
    ) {
        return NextResponse.next()
    }

    // Detect if the URL already has a locale
    const isLocalePath = locales.some(
        (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`)
    )
    if (isLocalePath) return NextResponse.next()

    // Try to read a saved locale from a cookie
    const cookieLocale = request.cookies.get('NEXT_LOCALE')?.value
    const defaultLocale = cookieLocale && locales.includes(cookieLocale) ? cookieLocale : 'es'

    // Redirect to the path with the correct locale prefix
    const url = new URL(`/${defaultLocale}${pathname}`, request.url)
    return NextResponse.redirect(url)
}

export const config = {
    matcher: [
        '/((?!_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml).*)',
    ],
}
