import {
  CardImage,
  CardImageContainer,
  CardPlayButton,
  CardRoot,
  CardSubtitle,
  CardTitle,
} from '@/components/data-display/card';
import { CarouselItem } from '@/components/ui/carousel';
import { Album } from '@/domain/album';
import { SimplifiedAlbum, SimplifiedTrack } from '@spotify/web-api-ts-sdk';
import React from 'react';

type TracksCardProps = {
  track: SimplifiedTrack;
  album: SimplifiedAlbum;
};

export function TrackCard(props: TracksCardProps) {
  const { track, album: spotifyAlbum } = props;

  const album = new Album(spotifyAlbum);

  return (
    <CarouselItem className="max-w-[168px] lg:max-w-none basis-auto lg:basis-1/3 xl:basis-1/4 2xl:basis-1/6 3xl:basis-1/7 4xl:basis-1/10 min-w-[177px] p-0">
      <CardRoot href={`/tracks/${track.id}`}>
        <CardImageContainer>
          <CardImage src={album.image300x300} alt={album.name} sizes="300x300" />
          <CardPlayButton />
        </CardImageContainer>
        <CardTitle>{track.name}</CardTitle>
        <CardSubtitle>{album.artists.map((artist) => artist.name).join(', ')}</CardSubtitle>
      </CardRoot>
    </CarouselItem>
  );
}
