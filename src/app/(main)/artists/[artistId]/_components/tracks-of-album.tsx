import { TrackCard } from '@/app/(main)/artists/[artistId]/_components/track-card';
import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { SpotifyApiFactory } from '@/infra/spotify-api/spotify-api-factory';
import { Pagination } from '@/utils/pagination';
import { MaxInt, SimplifiedAlbum } from '@spotify/web-api-ts-sdk';
import React from 'react';

type TracksOfAlbumProps = Readonly<{
  album: SimplifiedAlbum;
}>;

export async function TracksOfAlbum(props: TracksOfAlbumProps) {
  const { album } = props;

  const spotifyApi = SpotifyApiFactory.create();

  const pagination = await spotifyApi.albums.tracks({
    albumId: album.id,
    limit: Pagination.DEFAULT_LIMIT as MaxInt<50>,
    offset: Pagination.DEFAULT_PAGE,
  });
  await new Promise((resolve) => setTimeout(resolve, 3000));

  return (
    <Carousel
      className="[&>.carousel-content]:-mx-7 [&>.carousel-content]:pr-7"
      opts={{
        slidesToScroll: 6,
        watchDrag: false,
      }}
    >
      <CarouselContent className="m-0 ml-4">
        {pagination.items.map((track) => (
          <TrackCard key={track.id} track={track} album={album} />
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
