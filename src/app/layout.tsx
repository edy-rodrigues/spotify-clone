// The code below imports any other important files to configure the app
import '@/setup';

import type { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Spotify – Web player: música para todas as pessoas',
  description: 'O Spotify é um serviço de música digital que dá acesso a milhões de músicas.',
};

type RootLayoutProps = Readonly<{
  children: React.ReactNode;
}>;

export default function RootLayout(props: RootLayoutProps) {
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
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
