import { CarouselAlbumItemButton } from '@/components/carousel/implementations/carousel-album-item-button';
import {
  CardImage,
  CardImageContainer,
  CardLink,
  CardSubtitle,
  CardTitle,
} from '@/components/data-display/card';
import { Typography } from '@/components/data-display/typography';
import { CarouselItem } from '@/components/ui/carousel';
import { Album } from '@/domain/album';
import { SimplifiedAlbum } from '@spotify/web-api-ts-sdk';
import React from 'react';

type CarouselAlbumItemProps = Readonly<{
  album: SimplifiedAlbum;
}>;

export function CarouselAlbumItem(props: CarouselAlbumItemProps) {
  const { album: spotifyAlbum } = props;

  const album = new Album(spotifyAlbum);

  return (
    <CarouselItem
      className="max-w-[168px] lg:max-w-none basis-auto lg:basis-1/3 xl:basis-1/4 2xl:basis-1/6 3xl:basis-1/7 4xl:basis-1/10 min-w-[177px] p-0"
      key={album.id}
    >
      <CarouselAlbumItemButton albumId={album.id}>
        <CardImageContainer>
          <CardImage src={album.image300x300} alt={album.name} sizes="300x300" />
        </CardImageContainer>
        <CardTitle>{album.name}</CardTitle>
        <CardSubtitle>
          <div className="flex items-center flex-wrap max-h-10 overflow-hidden">
            {album.artists.map((artist, index) => (
              <React.Fragment key={artist.id}>
                <CardLink
                  key={artist.id}
                  href={`/artists/${artist.id}`}
                  className="hover:underline hover:[&>*]:text-white"
                >
                  <Typography className="text-sm truncate text-text-gray">{artist.name}</Typography>
                </CardLink>
                {index !== album.artists.length - 1 && (
                  <span className="text-text-gray mr-1">,</span>
                )}
              </React.Fragment>
            ))}
          </div>
        </CardSubtitle>
      </CarouselAlbumItemButton>
    </CarouselItem>
  );
}
