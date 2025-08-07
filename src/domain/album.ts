import { SimplifiedAlbum as SpotifyAlbum, SimplifiedArtist } from '@spotify/web-api-ts-sdk';

const IMAGE_FALLBACK = 'https://t.scdn.co/images/728ed47fc1674feb95f7ac20236eb6d7.jpeg';

export class Album {
  private readonly spotifyArtist: SpotifyAlbum;

  public constructor(spotifyAlbum: SpotifyAlbum) {
    this.spotifyArtist = spotifyAlbum;
  }

  public get id(): string {
    return this.spotifyArtist.id;
  }

  public get name(): string {
    return this.spotifyArtist.name;
  }

  public get image64x64(): string {
    const imageUrl = this.spotifyArtist.images.find((image) => image.width === 64)?.url;

    return imageUrl || IMAGE_FALLBACK;
  }

  public get image300x300(): string {
    const imageUrl = this.spotifyArtist.images.find((image) => image.width === 300)?.url;

    return imageUrl || IMAGE_FALLBACK;
  }

  public get albumType(): string {
    return this.spotifyArtist.album_type;
  }

  public get totalTracks(): number {
    return this.spotifyArtist.total_tracks;
  }

  public get artists(): SimplifiedArtist[] {
    return this.spotifyArtist.artists;
  }
}
