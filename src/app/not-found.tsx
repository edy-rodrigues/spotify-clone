import { Typography } from '@/components/data-display/typography';
import { SpotifyIcon } from '@/components/icons/spotify-icon';
import { Button } from '@/components/ui/button';
import type { Metadata } from 'next';
import { Link } from '@/i18n/navigation';
import { getTranslations } from 'next-intl/server';

export const metadata: Metadata = {
  title: 'Página não encontrada',
  description: 'O Spotify é um serviço de música digital que dá acesso a milhões de músicas.',
};

export default async function NotFound() {
  const t = await getTranslations();

  return (
    <div className="fixed h-full w-full bg-background-elevation-1 flex flex-col justify-center items-center overflow-hidden">
      <SpotifyIcon className="fill-primary-main w-15 h-15 mb-10" />
      <Typography variant="h1" className="mb-4 md:text-3xl! 2xl:text-5xl!">
        {t('notFoundPage.title')}
      </Typography>
      <Typography variant="body1" className="text-text-gray text-base">
        {t('notFoundPage.description')}
      </Typography>
      <Button className="mt-10" size="lg" asChild>
        <Link href="/">{t('notFoundPage.homeLink')}</Link>
      </Button>
      <Button className="mt-6" size="lg" variant="link" asChild>
        <Link href="/">{t('notFoundPage.helpLink')}</Link>
      </Button>
    </div>
  );
}
