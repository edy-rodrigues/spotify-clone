import { SpotifyApiFactory } from '@/infra/spotify-api/spotify-api-factory';
import { Card } from '@/ui/components/data-display/card/card';
import React from 'react';

export default async function Home() {
  const spotifyApi = SpotifyApiFactory.create();

  const result = await spotifyApi.browse.getNewReleases({
    country: 'BR',
    limit: 6,
  });

  return (
    <div className="main-view rounded-lg p-10">
      <div className="flex">
        {result.albums.items.map((album) => (
          <Card.Root className="basis-1/6" key={album.id}>
            <Card.ImageContainer>
              <Card.Image src={album.images[0].url} alt="Taylor Swift" />
            </Card.ImageContainer>
            <Card.Title>{album.artists.map((artist) => artist.name).join(', ')}</Card.Title>
          </Card.Root>
        ))}
      </div>
    </div>
  );
}
