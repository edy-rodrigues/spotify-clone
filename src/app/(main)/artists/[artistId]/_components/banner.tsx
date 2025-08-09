import { VerifiedAccountIcon } from '@/app/(main)/artists/[artistId]/_components/verified-account-icon';
import { Typography } from '@/components/data-display/typography';
import { Artist } from '@/domain/artist';
import { SpotifyApiFactory } from '@/infra/spotify-api/spotify-api-factory';
import Image from 'next/image';
import React from 'react';

type BannerProps = {
  artistId: string;
};

export async function Banner(props: BannerProps) {
  const { artistId } = props;

  const spotifyApi = SpotifyApiFactory.create();
  const spotifyArtist = await spotifyApi.artists.get(artistId);
  await new Promise((resolve) => setTimeout(resolve, 3000));
  const artist = new Artist(spotifyArtist);

  const formatter = new Intl.NumberFormat('pt-BR');
  const followersCount = formatter.format(artist.followers.total);

  return (
    <>
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
    </>
  );
}
