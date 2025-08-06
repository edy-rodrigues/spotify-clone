import {
  AbstractSpotifyArtistApi,
  AbstractSpotifyArtistApiProps,
} from '@/infra/spotify-api/abstract-spotify-artist-api';
import { Artist, Artists, Page, SimplifiedAlbum, SpotifyApi } from '@spotify/web-api-ts-sdk';

interface SpotifyWebArtistApiConstructorProps {
  client: SpotifyApi;
}

export class SpotifyWebArtistApi implements AbstractSpotifyArtistApi {
  private readonly client: SpotifyApi;

  public constructor(props: SpotifyWebArtistApiConstructorProps) {
    this.client = props.client;
  }

  public async getByIds(ids: string[]): Promise<Artist[]> {
    const searchParams = new URLSearchParams();
    searchParams.append('ids', ids.join(','));

    const response = await this.client.makeRequest<Artists>(
      'GET',
      `artists?${searchParams.toString()}`,
    );

    return response.artists;
  }

  public async get(id: string): Promise<Artist> {
    return this.client.artists.get(id);
  }

  public async albums(
    props: AbstractSpotifyArtistApiProps['albums'],
  ): Promise<Page<SimplifiedAlbum>> {
    const { artistId, includeGroups, limit, offset } = props;

    return this.client.artists.albums(artistId, includeGroups, undefined, limit, offset);
  }
}
