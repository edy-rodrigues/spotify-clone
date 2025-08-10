import { DrawerMenu } from '@/app/_components/drawer-menu';
import { DownloadIcon } from '@/components/icons/download-icon';
import { MenuIcon } from '@/components/icons/menu-icon';
import { Button } from '@/components/ui/button';
import { getTranslations } from 'next-intl/server';

export async function RightHeader() {
  const t = await getTranslations();

  return (
    <>
      {/* Desktop */}
      <div className="hidden lg:flex items-center gap-2">
        <Button variant="ghost" size="lg" className="px-0">
          {t('header.rightButtons.premium')}
        </Button>
        <Button variant="ghost" size="lg" className="px-0">
          {t('header.rightButtons.support')}
        </Button>
        <Button variant="ghost" size="lg" className="px-0">
          {t('header.rightButtons.download')}
        </Button>
      </div>
      <hr className="hidden lg:block min-w-[1px] h-6 bg-white mx-6" />
      <div className="hidden lg:flex items-center gap-2">
        <Button variant="ghost" size="default" className="pl-0 pr-1">
          <DownloadIcon className="size-4 fill-text-gray" />
          {t('header.rightButtons.installApp')}
        </Button>
        <Button variant="ghost" size="default" className="px-1">
          {t('header.rightButtons.signup')}
        </Button>
        <Button variant="default" size="lg">
          {t('header.rightButtons.signIn')}
        </Button>
      </div>

      {/* Mobile */}
      <div className="flex lg:hidden items-center gap-2">
        <Button>{t('header.rightButtons.openApp')}</Button>
        <DrawerMenu>
          <Button size="icon" color="transparent">
            <MenuIcon className="fill-white size-6" />
          </Button>
        </DrawerMenu>
      </div>
    </>
  );
}
