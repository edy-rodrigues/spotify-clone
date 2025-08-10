import { ArtistCarousel } from '@/app/[locale]/_components/artist-carousel';
import { ArtistCarouselSkeleton } from '@/app/[locale]/_components/artist-carousel-skeleton';
import { NewReleases } from '@/app/[locale]/_components/new-releases';
import { NewReleasesSkeleton } from '@/app/[locale]/_components/new-releases-skeleton';
import { ScrollArea } from '@/components/ui/scroll-area';
import { categoriesForHome } from '@/server/seed/categories-for-home';
import { setRequestLocale } from 'next-intl/server';
import React from 'react';

type HomeProps = Readonly<{
  params: Promise<{
    locale: string;
  }>;
}>;

export default async function Home(props: HomeProps) {
  const { params } = props;

  const { locale } = await params;

  setRequestLocale(locale);

  return (
    <ScrollArea className="main-view lg:rounded-lg w-full" type="always">
      <div className="flex flex-col gap-10 w-full p-2 pt-4 pb-25 lg:p-10">
        <React.Suspense fallback={<NewReleasesSkeleton />}>
          <NewReleases />
        </React.Suspense>

        {Object.values(categoriesForHome).map((category) =>
          Object.values(category.genres).map((genre) => (
            <React.Suspense key={genre.label} fallback={<ArtistCarouselSkeleton genre={genre} />}>
              <ArtistCarousel genre={genre} />
            </React.Suspense>
          )),
        )}
      </div>
    </ScrollArea>
  );
}
