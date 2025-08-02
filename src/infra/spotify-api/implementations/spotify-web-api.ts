import { AbstractSpotifyApi } from '@/infra/spotify-api/abstract-spotify-api';
import { AbstractSpotifyBrowseApi } from '@/infra/spotify-api/abstract-spotify-browse-api';
import { SpotifyWebBrowseApi } from '@/infra/spotify-api/implementations/spotify-web-browse-api';
import { EnvConfiguration } from '@/server/env/env-configuration';
import { SpotifyApi } from '@spotify/web-api-ts-sdk';

export class SpotifyWebApi implements AbstractSpotifyApi {
  private readonly client: SpotifyApi;
  public readonly browse: AbstractSpotifyBrowseApi;

  public constructor() {
    const envConfig = EnvConfiguration.getInstance();

    const { clientId, clientSecret } = envConfig.spotify;

    this.client = SpotifyApi.withClientCredentials(clientId, clientSecret);

    this.browse = new SpotifyWebBrowseApi({
      client: this.client,
    });
  }
}
