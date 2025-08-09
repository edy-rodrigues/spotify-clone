import { DownloadIcon } from '@/components/icons/download-icon';
import { MenuIcon } from '@/components/icons/menu-icon';
import { Button } from '@/components/ui/button';

export function RightHeader() {
  return (
    <>
      {/* Desktop */}
      <div className="hidden lg:flex items-center gap-2">
        <Button variant="ghost" size="lg" className="px-0">
          Premium
        </Button>
        <Button variant="ghost" size="lg" className="px-0">
          Suporte
        </Button>
        <Button variant="ghost" size="lg" className="px-0">
          Baixar
        </Button>
      </div>
      <hr className="hidden lg:block min-w-[1px] h-6 bg-white mx-6" />
      <div className="hidden lg:flex items-center gap-2">
        <Button variant="ghost" size="default" className="pl-0 pr-1">
          <DownloadIcon className="size-4 fill-text-gray" />
          Instalar aplicativo
        </Button>
        <Button variant="ghost" size="default" className="px-1">
          Inscrever-se
        </Button>
        <Button variant="default" size="lg">
          Entrar
        </Button>
      </div>

      {/* Mobile */}
      <div className="flex lg:hidden items-center gap-2">
        <Button>Abrir o app</Button>
        <Button size="icon" color="transparent">
          <MenuIcon className="fill-white size-6" />
        </Button>
      </div>
    </>
  );
}
