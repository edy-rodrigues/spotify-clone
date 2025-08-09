import {
  CardImage,
  CardImageContainer,
  CardRoot,
  CardSubtitle,
  CardTitle,
} from '@/components/data-display/card';
import { CarouselItem } from '@/components/ui/carousel';
import { Artist } from '@/domain/artist';
import React from 'react';

type CarouselArtistItemProps = Readonly<{
  artist: Artist;
}>;

export async function CarouselArtistItem(props: CarouselArtistItemProps) {
  const { artist } = props;

  return (
    <CarouselItem className="basis-auto lg:basis-1/3 xl:basis-1/4 2xl:basis-1/6 3xl:basis-1/7 4xl:basis-1/10 min-w-[177px] p-0">
      <CardRoot href={`/artists/${artist.id}`} key={artist.id}>
        <CardImageContainer>
          <CardImage
            className="rounded-full"
            src={artist.image320x320}
            alt={artist.name}
            sizes="320x320"
          />
        </CardImageContainer>
        <CardTitle>{artist.name}</CardTitle>
        <CardSubtitle>Artista</CardSubtitle>
      </CardRoot>
    </CarouselItem>
  );
}
