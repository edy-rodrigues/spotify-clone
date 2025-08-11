// The code below imports any other important files to configure the app
import '@/setup';
import { locales } from '@/config/i18n';

import type { Metadata } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import React from 'react';

// export async function generateMetadata({ params }: { params: { locale: Locale } }) {
//   const t = await getTranslations({ locale: params.locale, namespace: 'meta' });
//   return { title: t('title', { app: 'Spotify Clone' }) };
// }

export const metadata: Metadata = {
  title: 'Spotify – Web player: música para todas as pessoas',
  description: 'O Spotify é um serviço de música digital que dá acesso a milhões de músicas.',
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

type RootLayoutProps = Readonly<{
  children: React.ReactNode;
}>;

export default async function RootLayout(props: RootLayoutProps) {
  const { children } = props;

  return (
    <html lang="en">
      <head>
        {/* Favicon */}
        <link
          rel="icon"
          sizes="32x32"
          type="image/png"
          href="https://open.spotifycdn.com/cdn/images/favicon32.b64ecc03.png"
        />
        <link
          rel="icon"
          sizes="16x16"
          type="image/png"
          href="https://open.spotifycdn.com/cdn/images/favicon16.1c487bff.png"
        />
        <link rel="icon" href="https://open.spotifycdn.com/cdn/images/favicon.0f31d2ea.ico" />
        <title>Spotify – Web player: música para todas as pessoas</title>
        {/* Fonts */}
        <link rel="icon" href="https://open.spotifycdn.com/cdn/images/favicon.0f31d2ea.ico" />
        <link
          rel="preload"
          href="https://encore.scdn.co/fonts/CircularSp-Book-a00e99ef9996a3a157fb6b746856d04f.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="https://encore.scdn.co/fonts/CircularSpotify-UI-Latin-Bold-39f75fe74e898cc9ebef1a4e8a6023b5.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="https://encore.scdn.co/fonts/CircularSpTitle-Bold-b2586b06a2e1522e9d879d84c2792a58.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="https://encore.scdn.co/fonts/CircularSpotify-UI-Latin-Book-ffeb1e7f75131ff615f338c73751b633.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="https://encore.scdn.co/fonts/CircularSp-Bold-602e7aefc706aa36c6ec1324b9bbc461.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="https://encore.scdn.co/fonts/CircularSpVietnamese-Bold-e9e1a3c95ac9706bd3a804e75f4f4631.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="https://encore.scdn.co/fonts/CircularSpVietnamese-Regular-25254eecedd0d2c685d884be9846962b.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="https://encore.scdn.co/fonts/CircularSpTitle-Black-4588c99025b967475c31695b0743dd1a.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="https://encore.scdn.co/fonts/CircularSpVietnameseTitle-Variable-7658d9c8211dd8a6b350b6507f7fdd1a.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />

        <link
          rel="preload"
          href="https://encore.scdn.co/fonts/SpotifyMixUITitleVariable-8769ccfde3379b7ebcadd9529b49d0cc.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="https://encore.scdn.co/fonts/SpotifyMixUI-Bold-4264b799009b1db5c491778b1bc8e5b7.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="https://encore.scdn.co/fonts/SpotifyMixUITitleVariable-8769ccfde3379b7ebcadd9529b49d0cc.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="https://encore.scdn.co/fonts/SpotifyMixUI-Regular-cc3b1de388efa4cbca6c75cebc24585e.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className="antialiased">
        <div className="app-container">
          <NextIntlClientProvider>{children}</NextIntlClientProvider>
        </div>
      </body>
    </html>
  );
}
