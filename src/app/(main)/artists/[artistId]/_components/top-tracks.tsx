import { TopTracksCard } from '@/app/(main)/artists/[artistId]/_components/top-tracks-card';
import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { SpotifyApiFactory } from '@/infra/spotify-api/spotify-api-factory';
import React from 'react';

type TopTracksProps = Readonly<{
  artistId: string;
}>;

export async function TopTracks(props: TopTracksProps) {
  const { artistId } = props;

  const spotifyApi = SpotifyApiFactory.create();

  const result = await spotifyApi.artists.topTracks(artistId, 'BR');

  return (
    <Carousel
      className="[&>.carousel-content]:-mx-7 [&>.carousel-content]:pr-7"
      opts={{
        slidesToScroll: 6,
        watchDrag: false,
      }}
    >
      <CarouselContent className="m-0 ml-4">
        {result.tracks.map((track) => (
          <TopTracksCard key={track.id} track={track} />
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
