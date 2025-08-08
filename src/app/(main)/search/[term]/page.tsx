import { Button } from '@/components/ui/button';

export default function SearchPage() {
  return (
    <div className="main-view rounded-lg min-h-full flex-1 before:content-[none] p-6">
      <div className="flex items-center gap-3 flex-wrap">
        <Button variant="default" size="sm">
          Tudo
        </Button>
        <Button variant="secondary" size="sm" disabled>
          Músicas
        </Button>
        <Button variant="secondary" size="sm">
          Artistas
        </Button>
        <Button variant="secondary" size="sm" disabled>
          Playlists
        </Button>
        <Button variant="secondary" size="sm">
          Álbuns
        </Button>
        <Button variant="secondary" size="sm" disabled>
          Podcasts e programas
        </Button>
        <Button variant="secondary" size="sm" disabled>
          Gêneros e momentos
        </Button>
        <Button variant="secondary" size="sm" disabled>
          Perfis
        </Button>
      </div>
    </div>
  );
}
