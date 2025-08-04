import { Artist } from '@/domain/artist';
import { SpotifyApiFactory } from '@/infra/spotify-api/spotify-api-factory';
import { Card } from '@/ui/components/data-display/card/card';
import React from 'react';

type ArtistCardProps = Readonly<{
  artistId: string;
}>;

export async function ArtistCard(props: ArtistCardProps) {
  const { artistId } = props;

  const spotifyApi = SpotifyApiFactory.create();

  const spotifyArtist = await spotifyApi.artists.get(artistId);

  const artist = new Artist(spotifyArtist);

  return (
    <Card.Root className="basis-1/6" key={artist.id}>
      <Card.ImageContainer>
        <Card.Image src={artist.image320x320} alt={artist.name} sizes="320x320" />
      </Card.ImageContainer>
      <Card.Title>{artist.name}</Card.Title>
    </Card.Root>
  );
}
