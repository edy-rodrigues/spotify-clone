import { ArtistCard } from '@/app/_components/artist-card';
import { Typography } from '@/components/data-display/typography/typography';
import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Artist } from '@/domain/artist';
import { SpotifyApiFactory } from '@/infra/spotify-api/spotify-api-factory';
import { CategoryForHomeGenre } from '@/server/seed/categories-for-home';
import Link from 'next/link';
import React from 'react';

type PlaylistProps = Readonly<{
  genre: CategoryForHomeGenre;
}>;

export async function Playlist(props: PlaylistProps) {
  const { genre } = props;

  const spotifyApi = SpotifyApiFactory.create();

  const artistsIds = genre.artists.map((artist) => artist.id);
  const artists = await spotifyApi.artists.getByIds(artistsIds);

  return (
    <div className="flex flex-col" key={genre.label}>
      <Typography variant="h2" className="mb-2 ml-3">
        <Link href="#" className="hover:underline">
          {genre.label}
        </Link>
      </Typography>
      <Carousel
        className="[&>.carousel-content]:-mx-10 [&>.carousel-content]:pr-10"
        opts={{
          slidesToScroll: 6,
          watchDrag: false,
        }}
      >
        <CarouselContent className="m-0 ml-10">
          {artists.map((artist) => (
            <ArtistCard key={artist.id} artist={new Artist(artist)} />
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
