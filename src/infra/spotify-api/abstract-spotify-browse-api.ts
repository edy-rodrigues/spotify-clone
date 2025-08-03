import { NewReleases } from '@spotify/web-api-ts-sdk';

export interface AbstractSpotifyBrowseApiProps {
  getNewReleases: {
    country?: string;
    limit?: number;
    offset?: number;
  };
}

export abstract class AbstractSpotifyBrowseApi {
  public abstract getNewReleases(
    props?: AbstractSpotifyBrowseApiProps['getNewReleases'],
  ): Promise<NewReleases>;
}
