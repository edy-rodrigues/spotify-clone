import { TracksOfAlbum } from '@/app/(main)/artists/[artistId]/_components/tracks-of-album';
import { Typography } from '@/components/data-display/typography/typography';
import { SpotifyApiFactory } from '@/infra/spotify-api/spotify-api-factory';
import Link from 'next/link';
import React from 'react';

type AlbumsSectionsProps = Readonly<{
  artistId: string;
}>;

export async function AlbumsSections(props: AlbumsSectionsProps) {
  const { artistId } = props;

  const spotifyApi = SpotifyApiFactory.create();
  const albums = await spotifyApi.artists.albums({
    artistId,
    limit: 3,
  });
  await new Promise((resolve) => setTimeout(resolve, 3000));

  return albums.items.map((album) => (
    <section key={album.id} className="px-6 mt-10">
      <Link href={`/albums/${album.id}`} className={`hover:underline`}>
        <Typography variant="h2" className="mb-2">
          {album.name}
        </Typography>
      </Link>
      <React.Suspense fallback={<div>Carregando...</div>}>
        <TracksOfAlbum album={album} />
      </React.Suspense>
    </section>
  ));
}
