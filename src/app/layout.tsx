// The code below imports any other important files to configure the app
import '@/setup';

import { Footer } from '@/app/_components/footer';
import { Header } from '@/app/_components/header';

import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import React from 'react';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

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
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Header />
        <div className="left-sidebar bg-amber-300 rounded-lg hidden lg:flex">Your library</div>
        {children}
        <div className="right-sidebar bg-purple-700 rounded-lg hidden">Right sidebar</div>
        <Footer />
      </body>
    </html>
  );
}
