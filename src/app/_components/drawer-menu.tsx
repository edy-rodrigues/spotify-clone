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
import React from 'react';

type DrawerMenuProps = Readonly<{
  children?: React.ReactNode;
}>;

export function DrawerMenu(props: DrawerMenuProps) {
  const { children } = props;

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
              Entre
            </Button>
            <Button variant="ghost" size="lg" className="w-fit text-white text-xl">
              Inscreva-se
            </Button>

            <div className="flex w-4 h-0.5 m-8 bg-white" />

            <Button variant="ghost" size="lg" className="w-fit text-white text-base">
              Premium
            </Button>
            <Button variant="ghost" size="lg" className="w-fit text-white text-base">
              Ajuda
            </Button>
            <Button variant="ghost" size="lg" className="w-fit text-white text-base">
              Baixar
            </Button>
            <Button variant="ghost" size="lg" className="w-fit text-white text-base">
              Privacidade
            </Button>
            <Button variant="ghost" size="lg" className="w-fit text-white text-base">
              Condições
            </Button>

            <DrawerClose asChild>
              <Button variant="outline" size="sm" className="w-fit pr-4! ml-8 mt-4">
                <WorldIcon className="fill-white" />
                Português do Brasil
              </Button>
            </DrawerClose>
          </div>
        </ScrollArea>
      </DrawerContent>
    </Drawer>
  );
}
