'use client';
import { Typography } from '@/components/data-display/typography';
import { SpotifyIcon } from '@/components/icons/spotify-icon';
import { Button } from '@/components/ui/button';
import { useRouter } from '@/i18n/navigation';
import type { Metadata } from 'next';
import { useTranslations } from 'next-intl';
import { startTransition } from 'react';

export const metadata: Metadata = {
  title: 'Página não encontrada',
  description: 'O Spotify é um serviço de música digital que dá acesso a milhões de músicas.',
};

type ErrorProps = {
  reset: () => void;
};

export default function Error(props: ErrorProps) {
  const { reset } = props;

  const router = useRouter();
  const t = useTranslations();

  function handleReset() {
    startTransition(() => {
      reset();
      router.refresh();
    });
  }

  return (
    <div className="fixed h-full w-full bg-background-elevation-1 flex flex-col justify-center items-center overflow-hidden">
      <SpotifyIcon className="fill-primary-main w-15 h-15 mb-10" />
      <Typography variant="h1" className="mb-4 min-md:text-5xl">
        {t('errorPage.title')}
      </Typography>
      <Typography variant="body1" className="text-text-gray text-base">
        {t('errorPage.description')}
      </Typography>
      <Button className="mt-10" size="lg" onClick={handleReset}>
        {t('errorPage.button')}
      </Button>
    </div>
  );
}
