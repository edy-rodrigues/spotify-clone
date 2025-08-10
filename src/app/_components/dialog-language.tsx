import { Typography } from '@/components/data-display/typography';
import { Button } from '@/components/ui/button';
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
import React from 'react';

type DrawerLanguageProps = Readonly<{
  children?: React.ReactNode;
}>;

export function DialogLanguage(props: DrawerLanguageProps) {
  const { children } = props;

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="flex flex-col w-screen h-screen px-0 lg:max-w-[978px] lg:max-h-[588px] lg:rounded-lg gap-0">
        <DialogHeader className="px-6">
          <DialogTitle asChild className="text-2xl">
            <Typography variant="h2" className="text-left">
              Escolha um idioma
            </Typography>
          </DialogTitle>
          <DialogDescription asChild>
            <Typography variant="body1" className="text-base text-white text-left">
              Essa configuração atualiza o você lê no open.spotify.com.
            </Typography>
          </DialogDescription>
        </DialogHeader>
        <div className="mt-4 bg-background-elevation-6 w-full h-px" />
        <ScrollArea className="overflow-y-auto">
          <div className="grid grid-cols-1 xl:grid-cols-4 p-6 lg:py-4 lg:px-6 max-h-full">
            {AVAILABLE_LANGUAGES.map((language) => (
              <Button
                key={language.symbol}
                variant="ghost"
                className="flex flex-col justify-start items-start px-3 py-8 h-auto hover:bg-background-elevation-6 rounded-none hover:scale-none lg:p-4"
              >
                <span className="text-white text-base font-normal font-text-2">
                  {language.nativeName}
                </span>
                <span className="text-text-gray text-base font-normal font-text-2">
                  {language.name}
                </span>
              </Button>
            ))}
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}
