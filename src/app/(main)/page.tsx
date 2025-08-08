import { NewReleases } from '@/app/(main)/_components/new-releases';
import { Playlist } from '@/app/(main)/_components/playlist';
import { categoriesForHome } from '@/server/seed/categories-for-home';
import React from 'react';

export default async function Home() {
  return (
    <div className="main-view rounded-lg p-10">
      <div className="flex flex-col gap-10">
        <NewReleases />

        {Object.values(categoriesForHome).map((category) =>
          Object.values(category.genres).map((genre) => (
            <Playlist key={genre.label} genre={genre} />
          )),
        )}
      </div>
    </div>
  );
}
