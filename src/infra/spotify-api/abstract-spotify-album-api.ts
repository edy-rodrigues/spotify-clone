import { MaxInt, Page, SimplifiedTrack } from '@spotify/web-api-ts-sdk';

export interface AbstractSpotifyAlbumApiProps {
  tracks: {
    albumId: string;
    limit?: MaxInt<50>;
    offset?: number;
  };
}

export abstract class AbstractSpotifyAlbumApi {
  public abstract tracks(
    props: AbstractSpotifyAlbumApiProps['tracks'],
  ): Promise<Page<SimplifiedTrack>>;
}
