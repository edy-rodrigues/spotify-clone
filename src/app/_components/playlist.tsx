import { ArtistCard } from '@/app/_components/artist-card';
import { Typography } from '@/components/data-display/typography/typography';
import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { CategoryForHomeGenre } from '@/server/seed/categories-for-home';
import Link from 'next/link';
import React from 'react';

type PlaylistProps = Readonly<{
  genre: CategoryForHomeGenre;
}>;

export function Playlist(props: PlaylistProps) {
  const { genre } = props;

  return (
    <div className="flex flex-col" key={genre.label}>
      <Typography variant="h2" className="mb-2 ml-3">
        <Link href="#" className="hover:underline">
          {genre.label}
        </Link>
      </Typography>
      <Carousel
        opts={{
          slidesToScroll: 6,
        }}
      >
        <CarouselContent className="m-0">
          {genre.artists.map((artist) => (
            <ArtistCard key={artist.id} artistId={artist.id} />
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
