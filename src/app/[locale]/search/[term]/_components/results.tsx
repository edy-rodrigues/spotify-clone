import { CarouselArtistItem } from '@/components/carousel/implementations/carousel-artist-item';
import { CarouselAlbumItem } from '@/components/carousel/implementations/carousel-album-item';
import { Filter } from '@/app/[locale]/search/[term]/_types/filters';
import { FilterHandler } from '@/app/[locale]/search/[term]/_utils/filter-handler';
import { Typography } from '@/components/data-display/typography';
import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { CAROUSEL_OPTIONS } from '@/config/carousel';
import { Artist } from '@/domain/artist';
import { SpotifyApiFactory } from '@/infra/spotify-api/spotify-api-factory';
import { ItemTypes } from '@spotify/web-api-ts-sdk';
import Link from 'next/link';
import React from 'react';

type ResultsProps = Readonly<{
  term: string;
  filter: Filter;
}>;

export async function Results(props: ResultsProps) {
  const { term, filter } = props;

  const spotifyApi = SpotifyApiFactory.create();

  const results = await spotifyApi.search({
    q: term,
    type: FilterHandler.getValue(filter) as ItemTypes[],
  });
  // await new Promise((resolve) => setTimeout(resolve, 3000));

  return (
    <>
      {results.albums?.items.length && (
        <section className="flex flex-col w-full mt-8">
          <Typography variant="h2" className="mb-2 ml-3">
            <Link href="#" className="hover:underline">
              Álbuns
            </Link>
          </Typography>
          <Carousel
            className="[&>.carousel-content]:-mx-10 [&>.carousel-content]:pr-10 [&>.carousel-content]:before:-left-10 [&>.carousel-content]:after:-right-10"
            opts={CAROUSEL_OPTIONS}
          >
            <CarouselContent className="m-0 ml-10">
              {results.albums?.items.map((album) => (
                <CarouselAlbumItem key={album.id} album={album} />
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext className="-right-2" />
          </Carousel>
        </section>
      )}

      {results.artists?.items.length && (
        <section className="flex flex-col w-full mt-8">
          <Typography variant="h2" className="mb-2 ml-3">
            <Link href="#" className="hover:underline">
              Artistas
            </Link>
          </Typography>
          <Carousel
            className="[&>.carousel-content]:-mx-10 [&>.carousel-content]:pr-10 [&>.carousel-content]:before:-left-10 [&>.carousel-content]:after:-right-10"
            opts={CAROUSEL_OPTIONS}
          >
            <CarouselContent className="m-0 ml-10">
              {results.artists?.items.map((artist) => (
                <CarouselArtistItem key={artist.id} artist={new Artist(artist)} />
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext className="-right-2" />
          </Carousel>
        </section>
      )}
    </>
  );
}
