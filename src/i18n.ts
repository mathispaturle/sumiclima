// i18n.ts
import { defineConfig } from 'next-intl/config';

export default defineConfig({
    // Supported locales
    locales: ['es', 'ca', 'en'],

    // Default locale
    defaultLocale: 'es',

    // Where your message JSONs are stored
    messagesDir: './locales',
});
