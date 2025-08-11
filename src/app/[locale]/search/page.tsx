import { SearchInput } from '@/app/_components/search-input';
import { Typography } from '@/components/data-display/typography';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Routes } from '@/server/utils/routes';
import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import React from 'react';

type MetadataProps = Readonly<{
  params: Promise<{
    locale: string;
  }>;
}>;

export async function generateMetadata(props: MetadataProps): Promise<Metadata> {
  const { params } = props;

  const { locale } = await params;

  const url = Routes.getInitialSearchUrl(locale);
  const t = await getTranslations();

  return {
    title: t('initialSearchPage.metadata.title'),
    description: t('initialSearchPage.metadata.description'),
    openGraph: {
      title: t('initialSearchPage.metadata.title'),
      description: t('initialSearchPage.metadata.description'),
      locale,
      url,
    },
  };
}

type InitialSearchPageProps = Readonly<{
  params: Promise<{
    locale: string;
  }>;
}>;

export default async function InitialSearchPage(props: InitialSearchPageProps) {
  const { params } = props;

  const { locale } = await params;

  setRequestLocale(locale);

  const t = await getTranslations();

  return (
    <ScrollArea className="main-view rounded-lg flex-1 before:content-[none] relative p-2 lg:p-6">
      <div className="flex flex-col min-h-full mt-4 p-2">
        <Typography variant="h1" className="mb-4 md:text-2xl!">
          {t('initialSearchPage.title')}
        </Typography>
        <SearchInput />

        <Typography
          variant="h4"
          className="absolute top-0 bottom-0 left-0 right-0 m-auto text-xl h-fit text-center max-w-[250px] lg:max-w-none text-text-gray"
        >
          {t('initialSearchPage.description')}
        </Typography>
      </div>
    </ScrollArea>
  );
}
