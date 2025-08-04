import { AbstractSpotifyArtistApi } from '@/infra/spotify-api/abstract-spotify-artist-api';
import { Artist, SpotifyApi } from '@spotify/web-api-ts-sdk';

interface SpotifyWebArtistApiConstructorProps {
  client: SpotifyApi;
}

export class SpotifyWebArtistApi implements AbstractSpotifyArtistApi {
  private readonly client: SpotifyApi;

  public constructor(props: SpotifyWebArtistApiConstructorProps) {
    this.client = props.client;
  }

  public async get(id: string): Promise<Artist> {
    return this.client.artists.get(id);
  }
}
