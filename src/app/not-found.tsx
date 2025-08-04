import { Typography } from '@/components/data-display/typography/typography';
import { SpotifySvgIcon } from '@/components/icons/spotify-svg-icon';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Página não encontrada',
  description: 'O Spotify é um serviço de música digital que dá acesso a milhões de músicas.',
};

export default function NotFound() {
  return (
    <div className="h-screen w-screen bg-background-elevation-1 flex flex-col justify-center items-center">
      <SpotifySvgIcon className="fill-primary-main w-15 h-15 mb-10" />
      <Typography variant="h1" className="mb-4 min-md:text-5xl">
        Página não encontrada
      </Typography>
      <Typography variant="body1" className="text-text-gray text-md">
        Não encontramos a página que você queria.
      </Typography>
    </div>
  );
}
