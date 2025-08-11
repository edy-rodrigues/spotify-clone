import { Filters } from '@/app/[locale]/search/[term]/_components/filters';
import { Results } from '@/app/[locale]/search/[term]/_components/results';
import { ResultsSkeleton } from '@/app/[locale]/search/[term]/_components/results-skeleton';
import { FilterHandler } from '@/app/[locale]/search/[term]/_utils/filter-handler';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Routes } from '@/server/utils/routes';
import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import React from 'react';

type MetadataProps = Readonly<{
  params: Promise<{
    locale: string;
    term: string;
  }>;
}>;

export async function generateMetadata(props: MetadataProps): Promise<Metadata> {
  const { params } = props;

  const { locale, term } = await params;

  const url = Routes.getSearchUrl({
    term,
    locale,
  });
  const t = await getTranslations();

  return {
    title: t('searchPage.metadata.title'),
    description: t('searchPage.metadata.description'),
    openGraph: {
      title: t('searchPage.metadata.title'),
      description: t('searchPage.metadata.description'),
      locale,
      url,
    },
  };
}

type SearchPageProps = Readonly<{
  params: Promise<{
    locale: string;
    term: string;
  }>;
  searchParams: Promise<{
    filter?: string;
  }>;
}>;

export default async function SearchPage(props: SearchPageProps) {
  const { params, searchParams } = props;

  const { locale, term } = await params;
  const { filter: filterParams } = await searchParams;

  setRequestLocale(locale);

  const filter = FilterHandler.sanitize(filterParams);

  return (
    <ScrollArea className="main-view rounded-lg min-h-full flex-1 before:content-[none] relative">
      <div className="flex items-center gap-3 flex-wrap sticky bg-background-elevation-1 top-0 z-1 px-6 py-3">
        <Filters filter={filter} term={term} />
      </div>

      <div className="px-6 pt-3 pb-50 lg:pb-10">
        <React.Suspense fallback={<ResultsSkeleton />}>
          <Results filter={filter} term={term} />
        </React.Suspense>
      </div>
    </ScrollArea>
  );
}
