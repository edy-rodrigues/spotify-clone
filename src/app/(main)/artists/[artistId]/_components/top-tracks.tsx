import {
  CardImage,
  CardImageContainer,
  CardPlayButton,
  CardRoot,
  CardTitle,
} from '@/components/data-display/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { SpotifyApiFactory } from '@/infra/spotify-api/spotify-api-factory';
import React from 'react';

export async function TopTracks() {
  const spotifyApi = SpotifyApiFactory.create();

  const newReleases = await spotifyApi.browse.getNewReleases({
    country: 'BR',
    limit: 6,
  });
  await new Promise((resolve) => setTimeout(resolve, 3000));

  return (
    <Carousel
      opts={{
        slidesToScroll: 6,
      }}
    >
      <CarouselContent>
        {newReleases.albums.items.map((album) => (
          <CarouselItem className="basis-1/8" key={album.id}>
            <CardRoot href={`/albums/${album.id}`}>
              <CardImageContainer>
                <CardImage src={album.images[0].url} alt={album.name} sizes="300x300" />
                <CardPlayButton />
              </CardImageContainer>
              <CardTitle>{album.artists.map((artist) => artist.name).join(', ')}</CardTitle>
            </CardRoot>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
