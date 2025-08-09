import { CarouselAlbumItemButton } from '@/components/carousel/implementations/carousel-album-item-button';
import {
  CardImage,
  CardImageContainer,
  CardLink,
  CardRoot,
  CardSubtitle,
  CardTitle,
} from '@/components/data-display/card';
import { Typography } from '@/components/data-display/typography';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { SpotifyApiFactory } from '@/infra/spotify-api/spotify-api-factory';
import Link from 'next/link';
import React from 'react';

export async function NewReleases() {
  const spotifyApi = SpotifyApiFactory.create();

  const newReleases = await spotifyApi.browse.getNewReleases({
    country: 'BR',
  });

  return (
    <div className="flex flex-col">
      <Typography variant="h2" className="mb-2 ml-3">
        <Link href="#" className="hover:underline">
          Lançamentos
        </Link>
      </Typography>
      <Carousel
        className="[&>.carousel-content]:-mx-10 [&>.carousel-content]:pr-10 [&>.carousel-content]:before:-left-10 [&>.carousel-content]:after:-right-10"
        opts={{
          slidesToScroll: 6,
          watchDrag: false,
        }}
      >
        <CarouselContent className="m-0 ml-10">
          {newReleases.albums.items.reverse().map((album) => (
            <CarouselItem className="basis-1/8 min-w-[177px] p-0" key={album.id}>
              <CardRoot href={`/albums/${album.id}`} asChild>
                <CarouselAlbumItemButton albumId={album.id}>
                  <CardImageContainer>
                    <CardImage src={album.images[0].url} alt={album.name} sizes="300x300" />
                  </CardImageContainer>
                  <CardTitle>{album.name}</CardTitle>
                  <CardSubtitle>
                    <div className="flex items-center flex-wrap">
                      {album.artists.map((artist, index) => (
                        <React.Fragment key={artist.id}>
                          <CardLink
                            key={artist.id}
                            href={`/artists/${artist.id}`}
                            className="hover:underline hover:[&>*]:text-white"
                          >
                            <Typography className="text-sm truncate text-text-gray">
                              {artist.name}
                            </Typography>
                          </CardLink>
                          {index !== album.artists.length - 1 && (
                            <span className="text-text-gray mr-1">,</span>
                          )}
                        </React.Fragment>
                      ))}
                    </div>
                  </CardSubtitle>
                </CarouselAlbumItemButton>
              </CardRoot>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
