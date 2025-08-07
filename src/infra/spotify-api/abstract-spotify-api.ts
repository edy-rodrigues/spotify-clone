import { AbstractSpotifyAlbumApi } from '@/infra/spotify-api/abstract-spotify-album-api';
import { AbstractSpotifyArtistApi } from '@/infra/spotify-api/abstract-spotify-artist-api';
import { AbstractSpotifyBrowseApi } from '@/infra/spotify-api/abstract-spotify-browse-api';
import { ItemTypes, Market, MaxInt, SearchResults } from '@spotify/web-api-ts-sdk';

export interface AbstractSpotifyApiProps {
  search: {
    q: string;
    type: readonly ItemTypes[];
    market?: Market;
    limit?: MaxInt<50>;
    offset?: number;
    include_external?: string;
  };
}

export abstract class AbstractSpotifyApi {
  public abstract search(
    props: AbstractSpotifyApiProps['search'],
  ): Promise<SearchResults<readonly ItemTypes[]>>;
  public abstract browse: AbstractSpotifyBrowseApi;
  public abstract artists: AbstractSpotifyArtistApi;
  public abstract albums: AbstractSpotifyAlbumApi;
}
