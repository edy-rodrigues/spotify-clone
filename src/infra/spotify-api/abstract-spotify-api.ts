import { AbstractSpotifyBrowseApi } from '@/infra/spotify-api/abstract-spotify-browse-api';

export abstract class AbstractSpotifyApi {
  public abstract browse: AbstractSpotifyBrowseApi;
}
