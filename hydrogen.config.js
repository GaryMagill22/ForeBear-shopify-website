import {defineConfig, CookieSessionStorage} from '@shopify/hydrogen/config';

export default defineConfig({
<<<<<<< HEAD
    shopify: {
        defaultCountryCode: 'US',
        defaultLanguageCode: 'EN',
        storeDomain: Oxygen.env.PUBLIC_STORE_DOMAIN,
        storefrontToken: Oxygen.env.PUBLIC_STOREFRONT_API_TOKEN,
        privateStorefrontToken: Oxygen.env.PRIVATE_STOREFRONT_API_TOKEN,
        storefrontApiVersion: '2022-07',
        storefrontId: Oxygen.env.PUBLIC_STOREFRONT_ID,
    },
    session: CookieSessionStorage('__session', {
        path: '/',
        httpOnly: true,
        secure: import.meta.env.PROD,
        sameSite: 'Strict',
        maxAge: 60 * 60 * 24 * 30,
    }),
});
=======
  shopify: {
    defaultCountryCode: '',
    defaultLanguageCode: '',
    storeDomain: Oxygen.env.PUBLIC_STORE_DOMAIN,
    storefrontToken: Oxygen.env.PUBLIC_STOREFRONT_API_TOKEN,
    privateStorefrontToken: Oxygen.env.PRIVATE_STOREFRONT_API_TOKEN,
    storefrontApiVersion: '2022-07',
    storefrontId: Oxygen.env.PUBLIC_STOREFRONT_ID,
  },
  session: CookieSessionStorage('__session', {
    path: '/',
    httpOnly: true,
    secure: import.meta.env.PROD,
    sameSite: 'Strict',
    maxAge: 60 * 60 * 24 * 30,
  }),
});
>>>>>>> 428b790999ad6cb591bcecf42f0f5a43eac691be
