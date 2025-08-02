import {
  AbstractSpotifyBrowseApi,
  AbstractSpotifyBrowseApiProps,
} from '@/infra/spotify-api/abstract-spotify-browse-api';
import { MaxInt, SpotifyApi } from '@spotify/web-api-ts-sdk';

interface SpotifyWebRecommendationsApiConstructorProps {
  client: SpotifyApi;
}

export class SpotifyWebBrowseApi implements AbstractSpotifyBrowseApi {
  private readonly client: SpotifyApi;

  public constructor(props: SpotifyWebRecommendationsApiConstructorProps) {
    this.client = props.client;
  }

  public async getNewReleases(
    props: AbstractSpotifyBrowseApiProps['getNewReleases'] = {},
  ): Promise<object> {
    const { country, limit, offset } = props;

    return this.client.browse.getNewReleases(country, limit as MaxInt<50>, offset);
  }
}
