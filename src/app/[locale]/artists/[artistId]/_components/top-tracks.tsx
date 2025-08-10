import { TrackCard } from '@/app/[locale]/artists/[artistId]/_components/track-card';
import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { CAROUSEL_OPTIONS } from '@/config/carousel';
import { SpotifyApiFactory } from '@/infra/spotify-api/spotify-api-factory';
import React from 'react';

type TopTracksProps = Readonly<{
  artistId: string;
}>;

export async function TopTracks(props: TopTracksProps) {
  const { artistId } = props;

  const spotifyApi = SpotifyApiFactory.create();

  const result = await spotifyApi.artists.topTracks(artistId, 'BR');
  // await new Promise((resolve) => setTimeout(resolve, 3000));

  return (
    <Carousel
      className="[&>.carousel-content]:-mx-7 [&>.carousel-content]:pr-7 [&>.carousel-content]:before:-left-7 [&>.carousel-content]:after:-right-7"
      opts={CAROUSEL_OPTIONS}
    >
      <CarouselContent className="m-0 ml-4">
        {result.tracks.map((track) => (
          <TrackCard key={track.id} track={track} album={track.album} />
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext className="-right-2" />
    </Carousel>
  );
}
