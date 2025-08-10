import { DialogLanguage } from '@/app/_components/dialog-language';
import { WorldIcon } from '@/components/icons/world-icon';
import { XIcon } from '@/components/icons/x-icon';
import { Button } from '@/components/ui/button';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer';
import { ScrollArea } from '@/components/ui/scroll-area';
import { AVAILABLE_LANGUAGES } from '@/config/languagues';
import { getLocale, getTranslations } from 'next-intl/server';
import React from 'react';

type DrawerMenuProps = Readonly<{
  children?: React.ReactNode;
}>;

export async function DrawerMenu(props: DrawerMenuProps) {
  const { children } = props;

  const t = await getTranslations();
  const locale = await getLocale();

  const language = AVAILABLE_LANGUAGES.find((language) => language.symbol === locale)?.name;

  return (
    <Drawer direction="bottom">
      <DrawerTrigger asChild>{children}</DrawerTrigger>
      <DrawerContent>
        <ScrollArea>
          <DrawerTitle className="sr-only">Menu</DrawerTitle>
          <DrawerClose asChild>
            <Button size="icon" color="transparent" className="absolute top-4 right-4">
              <XIcon className="size-6" />
            </Button>
          </DrawerClose>
          <div className="flex flex-col px-6 py-14">
            <Button variant="ghost" size="lg" className="w-fit text-white text-xl">
              {t('drawerMenu.buttons.signIn')}
            </Button>
            <Button variant="ghost" size="lg" className="w-fit text-white text-xl">
              {t('drawerMenu.buttons.signup')}
            </Button>

            <div className="flex w-4 h-0.5 m-8 bg-white" />

            <Button variant="ghost" size="lg" className="w-fit text-white text-base">
              {t('drawerMenu.buttons.premium')}
            </Button>
            <Button variant="ghost" size="lg" className="w-fit text-white text-base">
              {t('drawerMenu.buttons.help')}
            </Button>
            <Button variant="ghost" size="lg" className="w-fit text-white text-base">
              {t('drawerMenu.buttons.download')}
            </Button>
            <Button variant="ghost" size="lg" className="w-fit text-white text-base">
              {t('drawerMenu.buttons.privacy')}
            </Button>
            <Button variant="ghost" size="lg" className="w-fit text-white text-base">
              {t('drawerMenu.buttons.conditions')}
            </Button>

            <DialogLanguage>
              <Button variant="outline" size="sm" className="w-fit pr-4! ml-8 mt-4">
                <WorldIcon className="fill-white" />
                {language}
              </Button>
            </DialogLanguage>
          </div>
        </ScrollArea>
      </DrawerContent>
    </Drawer>
  );
}
