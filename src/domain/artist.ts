import { Artist as SpotifyArtist } from '@spotify/web-api-ts-sdk';

const IMAGE_FALLBACK = 'https://t.scdn.co/images/728ed47fc1674feb95f7ac20236eb6d7.jpeg';

export class Artist {
  private readonly spotifyArtist: SpotifyArtist;

  public constructor(spotifyArtist: SpotifyArtist) {
    this.spotifyArtist = spotifyArtist;
  }

  public get id(): SpotifyArtist['id'] {
    return this.spotifyArtist.id;
  }

  public get name(): SpotifyArtist['name'] {
    return this.spotifyArtist.name;
  }

  public get image320x320(): string {
    const imageUrl = this.spotifyArtist.images.find((image) => image.width === 320)?.url;

    return imageUrl || IMAGE_FALLBACK;
  }

  public get image640x640(): string {
    const imageUrl = this.spotifyArtist.images.find((image) => image.width === 640)?.url;

    return imageUrl || IMAGE_FALLBACK;
  }

  public get followers(): SpotifyArtist['followers'] {
    return this.spotifyArtist.followers;
  }

  public get popularity(): SpotifyArtist['popularity'] {
    return this.spotifyArtist.popularity;
  }
}
