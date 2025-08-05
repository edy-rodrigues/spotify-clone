import { VerifiedAccountIcon } from '@/app/(main)/artists/[artistId]/_components/verified-account-icon';
import { Typography } from '@/components/data-display/typography/typography';
import { SpotifyApiFactory } from '@/infra/spotify-api/spotify-api-factory';
import Image from 'next/image';

type ArtistPageProps = {
  params: Promise<{
    artistId: string;
  }>;
};

export default async function ArtistPage(props: ArtistPageProps) {
  const { params } = props;

  const { artistId } = await params;

  const spotifyApi = SpotifyApiFactory.create();

  const artist = await spotifyApi.artists.get(artistId);

  const formatter = new Intl.NumberFormat('pt-BR');
  const followersCount = formatter.format(artist.followers.total);

  return (
    <div className="main-view rounded-lg overflow-x-hidden min-h-full flex-1 before:content[none]">
      <div className="relative h-[40vh] before:absolute before:inset-0 before:content-[''] before:bg-[linear-gradient(transparent_0,rgba(0,0,0,0.5)_100%),var(--background-noise)] before:z-10">
        <Image
          src="https://i.scdn.co/image/ab6761610000e5eb30f0dc81183daaee971c2601"
          alt="Henrique & Juliano"
          sizes="640x640"
          fill
          className="object-cover object-[25%_20%]"
        />
        <div className="absolute left-6 bottom-6 z-20">
          <span className="flex items-center gap-2">
            <span>
              <VerifiedAccountIcon className="fill-icon-fill h-6 w-6" />
            </span>
            <Typography className="text-sm font-text-2">Artista verificado</Typography>
          </span>
          <Typography variant="h1" className="min-md:text-[96px] font-extrabold">
            {artist.name}
          </Typography>
          <Typography className="text-md font-text-2">{followersCount} seguidores</Typography>
          <Typography className="text-xs font-text-2">
            Grau de popularidade {artist.popularity}
          </Typography>
        </div>
      </div>
    </div>
  );
}
