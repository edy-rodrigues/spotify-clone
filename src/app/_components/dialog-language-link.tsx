'use client';
import { Button } from '@/components/ui/button';
import { Language } from '@/config/languagues';
import { Link, usePathname } from '@/i18n/navigation';
import { I18n } from '@/utils/i18n';
import React from 'react';

type DialogLanguageLinkProps = {
  language: Language;
};

export function DialogLanguageLink(props: DialogLanguageLinkProps) {
  const { language } = props;

  const pathnameWithLocale = usePathname();

  const basePath = I18n.getPathnameWithoutLocale(pathnameWithLocale);

  return (
    <Button
      variant="ghost"
      className="flex flex-col justify-start items-start px-3 py-8 h-auto hover:bg-background-elevation-6 rounded-none hover:scale-none lg:p-4"
      asChild
    >
      <Link href={basePath} locale={language.symbol}>
        <span className="text-white text-base font-normal font-text-2">{language.nativeName}</span>
        <span className="text-text-gray text-base font-normal font-text-2">{language.name}</span>
      </Link>
    </Button>
  );
}
