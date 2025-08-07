import { AbstractSpotifyAlbumApi } from '@/infra/spotify-api/abstract-spotify-album-api';
import {
  AbstractSpotifyApi,
  AbstractSpotifyApiProps,
} from '@/infra/spotify-api/abstract-spotify-api';
import { AbstractSpotifyArtistApi } from '@/infra/spotify-api/abstract-spotify-artist-api';
import { AbstractSpotifyBrowseApi } from '@/infra/spotify-api/abstract-spotify-browse-api';
import { SpotifyWebAlbumApi } from '@/infra/spotify-api/implementations/spotify-web-album-api';
import { SpotifyWebArtistApi } from '@/infra/spotify-api/implementations/spotify-web-artist-api';
import { SpotifyWebBrowseApi } from '@/infra/spotify-api/implementations/spotify-web-browse-api';
import { EnvConfiguration } from '@/server/env/env-configuration';
import { ItemTypes, SearchResults, SpotifyApi } from '@spotify/web-api-ts-sdk';

export class SpotifyWebApi implements AbstractSpotifyApi {
  private readonly client: SpotifyApi;
  public readonly browse: AbstractSpotifyBrowseApi;
  public readonly artists: AbstractSpotifyArtistApi;
  public readonly albums: AbstractSpotifyAlbumApi;

  public constructor() {
    const envConfig = EnvConfiguration.getInstance();

    const { clientId, clientSecret } = envConfig.spotify;

    this.client = SpotifyApi.withClientCredentials(clientId, clientSecret);

    const { client } = this;

    this.browse = new SpotifyWebBrowseApi({
      client,
    });
    this.artists = new SpotifyWebArtistApi({
      client,
    });
    this.albums = new SpotifyWebAlbumApi({
      client,
    });
  }

  public async search(
    props: AbstractSpotifyApiProps['search'],
  ): Promise<SearchResults<readonly ItemTypes[]>> {
    const { q, type, market, limit, offset, include_external } = props;

    return this.client.search(q, type, market, limit, offset, include_external);
  }
}
