import { Artist } from '@spotify/web-api-ts-sdk';

export abstract class AbstractSpotifyArtistApi {
  public abstract getByIds(ids: string[]): Promise<Artist[]>;
  public abstract get(id: string): Promise<Artist>;
}
