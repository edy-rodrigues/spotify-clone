import { DownloadIcon } from '@/components/icons/download-icon';
import { Button } from '@/components/ui/button';

export function RightHeader() {
  return (
    <>
      <div className="flex items-center gap-2">
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
      <hr className="min-w-[1px] h-6 bg-white mx-6" />
      <div className="flex items-center gap-2">
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
    </>
  );
}
