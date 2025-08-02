import { AbstractSpotifyApi } from '@/infra/spotify-api/abstract-spotify-api';
import { SpotifyWebApi } from '@/infra/spotify-api/implementations/spotify-web-api';

export class SpotifyApiFactory {
  private static instance: SpotifyWebApi;

  public static create(): AbstractSpotifyApi {
    if (!this.instance) {
      this.instance = new SpotifyWebApi();
    }

    return this.instance;
  }
}
