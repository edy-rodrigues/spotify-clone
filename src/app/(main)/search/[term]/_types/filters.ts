export enum FilterEnum {
  ALL = 'all',
  ARTISTS = 'artist',
  ALBUMS = 'album',
}

export type Filter = `${FilterEnum}`;
