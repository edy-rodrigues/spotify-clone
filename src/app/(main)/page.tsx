import { ArtistCarousel } from '@/app/(main)/_components/artist-carousel';
import { ArtistCarouselSkeleton } from '@/app/(main)/_components/artist-carousel-skeleton';
import { NewReleases } from '@/app/(main)/_components/new-releases';
import { NewReleasesSkeleton } from '@/app/(main)/_components/new-releases-skeleton';
import { ScrollArea } from '@/components/ui/scroll-area';
import { categoriesForHome } from '@/server/seed/categories-for-home';
import React from 'react';

export default async function Home() {
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
