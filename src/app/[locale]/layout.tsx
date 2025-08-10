import { Footer } from '@/app/_components/footer';
import { Header } from '@/app/_components/header';
import { YourLibrary } from '@/app/_components/your-library';
import { routing } from '@/i18n/routing';
import { hasLocale } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import React from 'react';

type LocaleLayoutProps = Readonly<{
  children: React.ReactNode;
  params: Promise<{
    locale: string;
  }>;
}>;

export default async function LocaleLayout(props: LocaleLayoutProps) {
  const { children, params } = props;

  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);

  return (
    <>
      <Header />
      <div className="left-sidebar rounded-lg hidden lg:flex lg:flex-col">
        <YourLibrary />
      </div>
      {children}
      <div className="right-sidebar rounded-lg hidden">Right sidebar</div>
      <Footer />
    </>
  );
}
