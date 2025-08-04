import { ArtistCard } from '@/app/_components/artist-card';
import { CategoryForHomeGenre } from '@/server/seed/categories-for-home';
import React from 'react';

type PlaylistProps = Readonly<{
  genre: CategoryForHomeGenre;
}>;

export function Playlist(props: PlaylistProps) {
  const { genre } = props;

  return (
    <div className="flex flex-col" key={genre.label}>
      <h2>{genre.label}</h2>
      <div className="flex">
        {genre.artists.map((artist) => (
          <ArtistCard key={artist.id} artistId={artist.id} />
        ))}
      </div>
    </div>
  );
}
