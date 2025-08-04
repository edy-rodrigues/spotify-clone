import { Artist as SpotifyArtist } from '@spotify/web-api-ts-sdk';

const IMAGE_FALLBACK = 'https://t.scdn.co/images/728ed47fc1674feb95f7ac20236eb6d7.jpeg';

export class Artist {
  private readonly spotifyArtist: SpotifyArtist;

  public constructor(spotifyArtist: SpotifyArtist) {
    this.spotifyArtist = spotifyArtist;
  }

  public get id(): string {
    return this.spotifyArtist.id;
  }

  public get name(): string {
    return this.spotifyArtist.name;
  }

  public get image320x320(): string {
    const imageUrl = this.spotifyArtist.images.find((image) => image.width === 320)?.url;

    return imageUrl || IMAGE_FALLBACK;
  }
}
