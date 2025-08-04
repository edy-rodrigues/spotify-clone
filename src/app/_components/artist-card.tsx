import { CarouselItem } from '@/components/ui/carousel';
import { Artist } from '@/domain/artist';
import { SpotifyApiFactory } from '@/infra/spotify-api/spotify-api-factory';
import { Card } from '@/components/data-display/card';
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
    <CarouselItem className="basis-1/8 min-w-[177px] p-0">
      <Card.Root key={artist.id}>
        <Card.ImageContainer>
          <Card.Image
            className="rounded-full"
            src={artist.image320x320}
            alt={artist.name}
            sizes="320x320"
          />
        </Card.ImageContainer>
        <Card.Title>{artist.name}</Card.Title>
        <Card.Subtitle>Artista</Card.Subtitle>
      </Card.Root>
    </CarouselItem>
  );
}
