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
      <DialogContent className="flex flex-col w-screen h-screen px-0">
        <DialogHeader className="px-6">
          <DialogTitle asChild className="text-2xl">
            <Typography variant="h2">Escolha um idioma</Typography>
          </DialogTitle>
          <DialogDescription asChild>
            <Typography variant="body1" className="text-base text-white">
              Essa configuração atualiza o você lê no open.spotify.com.
            </Typography>
          </DialogDescription>
        </DialogHeader>
        <div className="my-4 bg-background-elevation-6 w-full h-px" />
        <div className="grid grid-cols-1 xl:grid-cols-4 gap-4 p-6">
          {AVAILABLE_LANGUAGES.map((language) => (
            <Button
              key={language.symbol}
              variant="ghost"
              className="flex flex-col justify-start items-start px-3 py-8 h-auto hover:bg-background-elevation-6 rounded-none hover:scale-none"
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
      </DialogContent>
    </Dialog>
  );
}
