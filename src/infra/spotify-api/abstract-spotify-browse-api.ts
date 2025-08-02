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
  ): Promise<object>;
}
