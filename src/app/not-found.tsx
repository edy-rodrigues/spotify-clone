import { Typography } from '@/components/data-display/typography/typography';
import { SpotifySvgIcon } from '@/components/icons/spotify-svg-icon';

export default function NotFound() {
  return (
    <div className="h-screen w-screen bg-background-elevation-1 flex flex-col justify-center items-center">
      <SpotifySvgIcon className="fill-primary-main w-15 h-15 mb-10" />
      <Typography variant="h1" className="mb-4">
        Página não encontrada
      </Typography>
      <Typography variant="body1" className="text-text-gray text-lg">
        Não encontramos a página que você queria.
      </Typography>
    </div>
  );
}
