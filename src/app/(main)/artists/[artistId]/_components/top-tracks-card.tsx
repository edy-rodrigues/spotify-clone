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
import { Track } from '@spotify/web-api-ts-sdk';
import React from 'react';

type TopTracksCardProps = {
  track: Track;
};

export function TopTracksCard(props: TopTracksCardProps) {
  const { track } = props;

  const album = new Album(track.album);

  return (
    <CarouselItem className="basis-1/8 min-w-[177px] p-0">
      <CardRoot href={`/tracks/${track.id}`}>
        <CardImageContainer>
          <CardImage src={album.image300x300} alt={track.album.name} sizes="300x300" />
          <CardPlayButton />
        </CardImageContainer>
        <CardTitle>{track.name}</CardTitle>
        <CardSubtitle>{album.artists.map((artist) => artist.name).join(', ')}</CardSubtitle>
      </CardRoot>
    </CarouselItem>
  );
}
