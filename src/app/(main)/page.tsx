import { ArtistCarouselSkeleton } from '@/app/(main)/_components/artist-carousel-skeleton';
import { NewReleases } from '@/app/(main)/_components/new-releases';
import { NewReleasesSkeleton } from '@/app/(main)/_components/new-releases-skeleton';
import { ArtistCarousel } from '@/app/(main)/_components/artist-carousel';
import { categoriesForHome } from '@/server/seed/categories-for-home';
import React from 'react';

export default async function Home() {
  return (
    <div className="main-view rounded-lg p-10">
      <div className="flex flex-col gap-10">
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
    </div>
  );
}
