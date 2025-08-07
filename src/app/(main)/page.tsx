import { Playlist } from '@/app/(main)/_components/playlist';
import { Typography } from '@/components/data-display/typography/typography';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { SpotifyApiFactory } from '@/infra/spotify-api/spotify-api-factory';
import { categoriesForHome } from '@/server/seed/categories-for-home';
import { Card } from '@/components/data-display/card';
import Link from 'next/link';
import React from 'react';

export default async function Home() {
  const spotifyApi = SpotifyApiFactory.create();

  const newReleases = await spotifyApi.browse.getNewReleases({
    country: 'BR',
    limit: 6,
  });

  return (
    <div className="main-view rounded-lg p-10">
      <div className="flex flex-col gap-10">
        <div className="flex flex-col">
          <Typography variant="h2" className="mb-2 ml-3">
            <Link href="#" className="hover:underline">
              Lançamentos
            </Link>
          </Typography>
          <Carousel
            opts={{
              slidesToScroll: 6,
            }}
          >
            <CarouselContent>
              {newReleases.albums.items.map((album) => (
                <CarouselItem className="basis-1/8" key={album.id}>
                  <Card.Root href={`/albums/${album.id}`}>
                    <Card.ImageContainer>
                      <Card.Image src={album.images[0].url} alt={album.name} sizes="300x300" />
                    </Card.ImageContainer>
                    <Card.Title>{album.artists.map((artist) => artist.name).join(', ')}</Card.Title>
                  </Card.Root>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>

        {Object.values(categoriesForHome).map((category) =>
          Object.values(category.genres).map((genre) => (
            <Playlist key={genre.label} genre={genre} />
          )),
        )}
      </div>
    </div>
  );
}
