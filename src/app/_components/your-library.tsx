import { Typography } from '@/components/data-display/typography';
import { PlusIcon } from '@/components/icons/plus-icon';
import { WorldIcon } from '@/components/icons/world-icon';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import Link from 'next/link';

export function YourLibrary() {
  return (
    <>
      <header className="flex justify-between items-center px-4 py-3 h-fit w-full mb-4">
        <Typography variant="h1" className="min-md:text-base ml-1">
          Sua Biblioteca
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
              Crie sua primeira playlist
            </Typography>
            <Typography variant="body1" className="mb-5 text-sm">
              É fácil, vamos te ajudar.
            </Typography>
            <Button variant="default">Criar playlist</Button>
          </div>
          <div className="bg-background-elevation-2 rounded-lg px-5 py-4 my-2">
            <Typography variant="h4" className="text-base mb-2 font-text-2">
              Que tal seguir um podcast novo?
            </Typography>
            <Typography variant="body1" className="mb-5 text-sm">
              Avisaremos você sobre novos episódios.
            </Typography>
            <Button variant="default">Explore podcasts</Button>
          </div>
        </div>
      </ScrollArea>
      <div className="flex flex-col py-8 px-6">
        <div className="flex flex-wrap items-center gap-4 mb-3">
          <Link href="#">
            <Typography variant="body2" className="text-text-gray">
              Legal
            </Typography>
          </Link>
          <Link href="#">
            <Typography variant="body2" className="text-text-gray">
              Segurança e Centro de privacidade
            </Typography>
          </Link>
          <Link href="#">
            <Typography variant="body2" className="text-text-gray">
              Política de privacidade
            </Typography>
          </Link>
          <Link href="#">
            <Typography variant="body2" className="text-text-gray">
              Cookies
            </Typography>
          </Link>
          <Link href="#">
            <Typography variant="body2" className="text-text-gray">
              Sobre anúncios
            </Typography>
          </Link>
          <Link href="#">
            <Typography variant="body2" className="text-text-gray">
              Acessibilidade
            </Typography>
          </Link>
        </div>
        <Link href="#" className="hover:underline mb-8 w-fit">
          <Typography variant="body1">Cookies</Typography>
        </Link>
        <Button variant="outline" size="sm" className="w-fit pr-4!">
          <WorldIcon className="fill-white" />
          Português do Brasil
        </Button>
      </div>
    </>
  );
}
