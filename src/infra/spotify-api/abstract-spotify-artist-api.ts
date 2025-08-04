import { Artist } from '@spotify/web-api-ts-sdk';

export abstract class AbstractSpotifyArtistApi {
  public abstract get(id: string): Promise<Artist>;
}
