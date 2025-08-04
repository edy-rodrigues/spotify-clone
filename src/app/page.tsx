import { Playlist } from '@/app/_components/playlist';
import { SpotifyApiFactory } from '@/infra/spotify-api/spotify-api-factory';
import { categoriesForHome } from '@/server/seed/categories-for-home';
import { Card } from '@/ui/components/data-display/card/card';
import React from 'react';

export default async function Home() {
  const spotifyApi = SpotifyApiFactory.create();

  const newReleases = await spotifyApi.browse.getNewReleases({
    country: 'BR',
    limit: 6,
  });

  return (
    <div className="main-view rounded-lg p-10">
      <div className="flex">
        {newReleases.albums.items.map((album) => (
          <Card.Root className="basis-1/6" key={album.id}>
            <Card.ImageContainer>
              <Card.Image src={album.images[0].url} alt="Taylor Swift" sizes="300x300" />
            </Card.ImageContainer>
            <Card.Title>{album.artists.map((artist) => artist.name).join(', ')}</Card.Title>
          </Card.Root>
        ))}
      </div>

      {Object.values(categoriesForHome).map((category) =>
        Object.values(category.genres).map((genre) => <Playlist key={genre.label} genre={genre} />),
      )}
    </div>
  );
}
