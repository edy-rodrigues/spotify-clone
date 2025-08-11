import { DialogLanguageLink } from '@/app/_components/dialog-language-link';
import { Typography } from '@/components/data-display/typography';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { ScrollArea } from '@/components/ui/scroll-area';
import { AVAILABLE_LANGUAGES } from '@/config/languagues';
import { getTranslations } from 'next-intl/server';
import React from 'react';

type DrawerLanguageProps = Readonly<{
  children?: React.ReactNode;
}>;

export async function DialogLanguage(props: DrawerLanguageProps) {
  const { children } = props;

  const t = await getTranslations();

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="flex flex-col w-screen h-dvh px-0 lg:max-w-[978px] lg:max-h-[588px] lg:rounded-lg gap-0">
        <DialogHeader className="px-6">
          <DialogTitle asChild className="text-2xl">
            <Typography variant="h2" className="text-left">
              {t('dialogLanguage.title')}
            </Typography>
          </DialogTitle>
          <DialogDescription asChild>
            <Typography variant="body1" className="text-base text-white text-left">
              {t('dialogLanguage.description')}
            </Typography>
          </DialogDescription>
        </DialogHeader>
        <div className="mt-4 bg-background-elevation-6 w-full h-px" />
        <ScrollArea className="overflow-y-auto">
          <div className="grid grid-cols-1 xl:grid-cols-4 py-4 px-6 max-h-full">
            {AVAILABLE_LANGUAGES.map((language) => (
              <DialogLanguageLink key={language.symbol} language={language} />
            ))}
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}
