import { DialogLanguage } from '@/app/_components/dialog-language';
import { Typography } from '@/components/data-display/typography';
import { PlusIcon } from '@/components/icons/plus-icon';
import { WorldIcon } from '@/components/icons/world-icon';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { getTranslations } from 'next-intl/server';
import { Link } from '@/i18n/navigation';

export async function YourLibrary() {
  const t = await getTranslations();

  return (
    <>
      <header className="flex justify-between items-center px-4 py-3 h-fit w-full mb-4">
        <Typography variant="h1" className="min-md:text-base ml-1">
          {t('yourLibrary.title')}
        </Typography>
        <Button
          size="icon"
          color="transparent"
          className="hover:bg-background-highlight hover:[&>svg]:fill-white"
        >
          <PlusIcon className="fill-text-gray" />
        </Button>
      </header>
      <ScrollArea className="flex-1 overflow-y-auto">
        <div className="flex flex-col flex-1 px-2 gap-2">
          <div className="bg-background-elevation-2 rounded-lg px-5 py-4 my-2">
            <Typography variant="h4" className="text-base mb-2 font-text-2">
              {t('yourLibrary.createFirstPlaylist.title')}
            </Typography>
            <Typography variant="body1" className="mb-5 text-sm">
              {t('yourLibrary.createFirstPlaylist.description')}
            </Typography>
            <Button variant="default">{t('yourLibrary.createFirstPlaylist.button')}</Button>
          </div>
          <div className="bg-background-elevation-2 rounded-lg px-5 py-4 my-2">
            <Typography variant="h4" className="text-base mb-2 font-text-2">
              {t('yourLibrary.followNewPodcast.title')}
            </Typography>
            <Typography variant="body1" className="mb-5 text-sm">
              {t('yourLibrary.followNewPodcast.description')}
            </Typography>
            <Button variant="default">{t('yourLibrary.followNewPodcast.button')}</Button>
          </div>
        </div>
      </ScrollArea>
      <div className="flex flex-col py-8 px-6">
        <div className="flex flex-wrap items-center gap-4 mb-3">
          <Link href="#">
            <Typography variant="body2" className="text-text-gray">
              {t('yourLibrary.links.legal')}
            </Typography>
          </Link>
          <Link href="#">
            <Typography variant="body2" className="text-text-gray">
              {t('yourLibrary.links.privacy')}
            </Typography>
          </Link>
          <Link href="#">
            <Typography variant="body2" className="text-text-gray">
              {t('yourLibrary.links.policy')}
            </Typography>
          </Link>
          <Link href="#">
            <Typography variant="body2" className="text-text-gray">
              {t('yourLibrary.links.cookies')}
            </Typography>
          </Link>
          <Link href="#">
            <Typography variant="body2" className="text-text-gray">
              {t('yourLibrary.links.ads')}
            </Typography>
          </Link>
          <Link href="#">
            <Typography variant="body2" className="text-text-gray">
              {t('yourLibrary.links.accessibility')}
            </Typography>
          </Link>
        </div>
        <Link href="#" className="hover:underline mb-8 w-fit">
          <Typography variant="body1">{t('yourLibrary.links.cookies')}</Typography>
        </Link>
        <DialogLanguage>
          <Button variant="outline" size="sm" className="w-fit pr-4!">
            <WorldIcon className="fill-white" />
            Português do Brasil
          </Button>
        </DialogLanguage>
      </div>
    </>
  );
}
