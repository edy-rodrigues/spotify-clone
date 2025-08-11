import { ArtistCarousel } from '@/app/[locale]/_components/artist-carousel';
import { ArtistCarouselSkeleton } from '@/app/[locale]/_components/artist-carousel-skeleton';
import { NewReleases } from '@/app/[locale]/_components/new-releases';
import { NewReleasesSkeleton } from '@/app/[locale]/_components/new-releases-skeleton';
import { ScrollArea } from '@/components/ui/scroll-area';
import { categoriesForHome } from '@/server/seed/categories-for-home';
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

  const url = Routes.getCurrentBaseUrl(locale);
  const t = await getTranslations();

  return {
    title: t('home.metadata.title'),
    description: t('home.metadata.description'),
    openGraph: {
      title: t('home.metadata.title'),
      description: t('home.metadata.description'),
      locale,
      url,
    },
  };
}

type HomeProps = Readonly<{
  params: Promise<{
    locale: string;
  }>;
}>;

export default async function Home(props: HomeProps) {
  const { params } = props;

  const { locale } = await params;

  setRequestLocale(locale);

  const t = await getTranslations();

  return (
    <ScrollArea className="main-view lg:rounded-lg w-full" type="always">
      <div className="flex flex-col gap-10 w-full p-2 pt-4 pb-25 lg:p-10">
        <React.Suspense fallback={<NewReleasesSkeleton />}>
          <NewReleases />
        </React.Suspense>

        {Object.values(categoriesForHome).map((category) =>
          Object.values(category.genres).map((genre) => {
            const translatedGenre = {
              ...genre,
              label: t(genre.label),
            };
            return (
              <React.Suspense
                key={genre.label}
                fallback={<ArtistCarouselSkeleton genre={translatedGenre} />}
              >
                <ArtistCarousel genre={translatedGenre} />
              </React.Suspense>
            );
          }),
        )}
      </div>
    </ScrollArea>
  );
}
