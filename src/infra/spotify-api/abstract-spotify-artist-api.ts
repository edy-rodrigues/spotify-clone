import { Artist, MaxInt, Page, SimplifiedAlbum, TopTracksResult } from '@spotify/web-api-ts-sdk';

export interface AbstractSpotifyArtistApiProps {
  albums: {
    artistId: string;
    includeGroups?: string;
    limit?: MaxInt<50>;
    offset?: number;
  };
}

export abstract class AbstractSpotifyArtistApi {
  public abstract getByIds(ids: string[]): Promise<Artist[]>;
  public abstract get(id: string): Promise<Artist>;
  public abstract albums(
    props: AbstractSpotifyArtistApiProps['albums'],
  ): Promise<Page<SimplifiedAlbum>>;
  public abstract topTracks(id: string, market?: string): Promise<TopTracksResult>;
}
