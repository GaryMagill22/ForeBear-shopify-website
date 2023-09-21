import { defineConfig, CookieSessionStorage } from '@shopify/hydrogen/config';

export default defineConfig({
    shopify: {
        defaultCountryCode: 'US',
        defaultLanguageCode: 'EN',
        storeDomain: 'forebearwebsite.myshopify.com',
        storefrontToken: '2d7f53f52160378c4b19e725846904d8',
        storefrontApiVersion: '2023-07',
    },
    session: CookieSessionStorage('__session', {
        path: '/',
        httpOnly: true,
        secure: import.meta.env.PROD,
        sameSite: 'Strict',
        maxAge: 60 * 60 * 24 * 365,
    }),
});

