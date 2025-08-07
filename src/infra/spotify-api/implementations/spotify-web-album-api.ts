import {
  AbstractSpotifyAlbumApi,
  AbstractSpotifyAlbumApiProps,
} from '@/infra/spotify-api/abstract-spotify-album-api';
import { Page, SimplifiedTrack, SpotifyApi } from '@spotify/web-api-ts-sdk';

type SpotifyWebAlbumApiConstructorProps = {
  client: SpotifyApi;
};

export class SpotifyWebAlbumApi implements AbstractSpotifyAlbumApi {
  private readonly client: SpotifyApi;

  public constructor(props: SpotifyWebAlbumApiConstructorProps) {
    this.client = props.client;
  }

  public async tracks(
    props: AbstractSpotifyAlbumApiProps['tracks'],
  ): Promise<Page<SimplifiedTrack>> {
    const { albumId, limit, offset } = props;

    return this.client.albums.tracks(albumId, undefined, limit, offset);
  }
}
