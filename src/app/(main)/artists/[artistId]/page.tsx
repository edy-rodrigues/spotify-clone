import { AlbumsTable } from '@/app/(main)/artists/[artistId]/_components/albums-table';
import { VerifiedAccountIcon } from '@/app/(main)/artists/[artistId]/_components/verified-account-icon';
import {
  CardImage,
  CardImageContainer,
  CardPlayButton,
  CardRoot,
  CardTitle,
} from '@/components/data-display/card';
import { Typography } from '@/components/data-display/typography/typography';
import { MoreIcon } from '@/components/icons/more-icon';
import { PlayIcon } from '@/components/icons/play-icon';
import { Button } from '@/components/ui/button';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Artist } from '@/domain/artist';
import { SpotifyApiFactory } from '@/infra/spotify-api/spotify-api-factory';
import Image from 'next/image';
import React from 'react';

type ArtistPageProps = {
  params: Promise<{
    artistId: string;
  }>;
};

export default async function ArtistPage(props: ArtistPageProps) {
  const { params } = props;

  const { artistId } = await params;

  const spotifyApi = SpotifyApiFactory.create();

  const spotifyArtist = await spotifyApi.artists.get(artistId);
  const artist = new Artist(spotifyArtist);

  const albums = await spotifyApi.artists.albums({
    artistId,
  });
  const newReleases = await spotifyApi.browse.getNewReleases({
    country: 'BR',
    limit: 6,
  });

  const formatter = new Intl.NumberFormat('pt-BR');
  const followersCount = formatter.format(artist.followers.total);

  return (
    <div className="main-view rounded-lg overflow-x-hidden min-h-full flex-1 before:content[none] pb-6">
      <section className="relative h-[40vh] before:absolute before:inset-0 before:content-[''] before:bg-[linear-gradient(transparent_0,rgba(0,0,0,0.5)_100%),var(--background-noise)] before:z-10">
        <Image
          src={artist.image640x640}
          alt="Henrique & Juliano"
          sizes="640x640"
          fill
          className="object-cover object-[25%_20%]"
        />
        <div className="absolute left-6 bottom-6 z-20">
          <span className="flex items-center gap-2">
            <span>
              <VerifiedAccountIcon className="fill-icon-fill size-6" />
            </span>
            <Typography className="text-sm font-text-2">Artista verificado</Typography>
          </span>
          <Typography variant="h1" className="min-md:text-[96px] font-extrabold">
            {artist.name}
          </Typography>
          <Typography className="text-base font-text-2">{followersCount} seguidores</Typography>
          <Typography className="text-xs font-text-2">
            Grau de popularidade {artist.popularity}
          </Typography>
        </div>
      </section>
      <section className="flex flex-col">
        <div className="flex items-center gap-6 p-6">
          <Button size="icon" color="primary" className="size-14">
            <PlayIcon className="size-6" />
          </Button>
          <Button variant="outline">Seguir</Button>
          <Button size="icon" color="transparent">
            <MoreIcon className="size-8" />
          </Button>
        </div>
      </section>
      <section className="px-6 mt-4">
        <Typography variant="h2" className="mb-2">
          Álbuns
        </Typography>
        <AlbumsTable albums={albums} />
      </section>
      <section className="px-6 pb-6 mt-10">
        <Typography variant="h2" className="mb-2">
          Em alta
        </Typography>
        <Carousel
          opts={{
            slidesToScroll: 6,
          }}
        >
          <CarouselContent>
            {newReleases.albums.items.map((album) => (
              <CarouselItem className="basis-1/8" key={album.id}>
                <CardRoot href={`/albums/${album.id}`}>
                  <CardImageContainer>
                    <CardImage src={album.images[0].url} alt={album.name} sizes="300x300" />
                    <CardPlayButton />
                  </CardImageContainer>
                  <CardTitle>{album.artists.map((artist) => artist.name).join(', ')}</CardTitle>
                </CardRoot>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </section>
      <section className="px-6 pb-6 mt-10">
        <Typography variant="h2" className="mb-2">
          Em alta
        </Typography>
        <Carousel
          opts={{
            slidesToScroll: 6,
          }}
        >
          <CarouselContent>
            {newReleases.albums.items.map((album) => (
              <CarouselItem className="basis-1/8" key={album.id}>
                <CardRoot href={`/albums/${album.id}`}>
                  <CardImageContainer>
                    <CardImage src={album.images[0].url} alt={album.name} sizes="300x300" />
                    <CardPlayButton />
                  </CardImageContainer>
                  <CardTitle>{album.artists.map((artist) => artist.name).join(', ')}</CardTitle>
                </CardRoot>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </section>
      <section className="px-6 pb-6 mt-10">
        <Typography variant="h2" className="mb-2">
          Em alta
        </Typography>
        <Carousel
          opts={{
            slidesToScroll: 6,
          }}
        >
          <CarouselContent>
            {newReleases.albums.items.map((album) => (
              <CarouselItem className="basis-1/8" key={album.id}>
                <CardRoot href={`/albums/${album.id}`}>
                  <CardImageContainer>
                    <CardImage src={album.images[0].url} alt={album.name} sizes="300x300" />
                    <CardPlayButton />
                  </CardImageContainer>
                  <CardTitle>{album.artists.map((artist) => artist.name).join(', ')}</CardTitle>
                </CardRoot>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </section>
      <section className="px-6 pb-6 mt-10">
        <Typography variant="h2" className="mb-2">
          Em alta
        </Typography>
        <Carousel
          opts={{
            slidesToScroll: 6,
          }}
        >
          <CarouselContent>
            {newReleases.albums.items.map((album) => (
              <CarouselItem className="basis-1/8" key={album.id}>
                <CardRoot href={`/albums/${album.id}`}>
                  <CardImageContainer>
                    <CardImage src={album.images[0].url} alt={album.name} sizes="300x300" />
                    <CardPlayButton />
                  </CardImageContainer>
                  <CardTitle>{album.artists.map((artist) => artist.name).join(', ')}</CardTitle>
                </CardRoot>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </section>
    </div>
  );
}
