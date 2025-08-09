import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';

export default function SearchPage() {
  return (
    <div className="main-view rounded-lg min-h-full flex-1 before:content-[none] p-6">
      <div className="flex items-center gap-3 flex-wrap">
        <Carousel
          className="w-full"
          opts={{
            dragFree: true,
          }}
        >
          <ToggleGroup type="single" defaultValue="all" asChild>
            <CarouselContent className="m-0 gap-2">
              <CarouselItem className="basis-auto p-0">
                <ToggleGroupItem value="all" size="sm">
                  Tudo
                </ToggleGroupItem>
              </CarouselItem>
              <CarouselItem className="basis-auto p-0">
                <ToggleGroupItem value="artists" size="sm">
                  Artistas
                </ToggleGroupItem>
              </CarouselItem>
              <CarouselItem className="basis-auto p-0">
                <ToggleGroupItem value="albums" size="sm">
                  Álbuns
                </ToggleGroupItem>
              </CarouselItem>
              <CarouselItem className="basis-auto p-0">
                <ToggleGroupItem value="musics" size="sm" disabled>
                  Músicas
                </ToggleGroupItem>
              </CarouselItem>
              <CarouselItem className="basis-auto p-0">
                <ToggleGroupItem value="playlists" size="sm" disabled>
                  Playlists
                </ToggleGroupItem>
              </CarouselItem>
              <CarouselItem className="basis-auto p-0">
                <ToggleGroupItem value="shows" size="sm" disabled>
                  Podcasts e programas
                </ToggleGroupItem>
              </CarouselItem>
              <CarouselItem className="basis-auto p-0">
                <ToggleGroupItem value="videos" size="sm" disabled>
                  Gêneros e momentos
                </ToggleGroupItem>
              </CarouselItem>
              <CarouselItem className="basis-auto p-0">
                <ToggleGroupItem value="users" size="sm" disabled>
                  Perfis
                </ToggleGroupItem>
              </CarouselItem>
            </CarouselContent>
          </ToggleGroup>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
}
