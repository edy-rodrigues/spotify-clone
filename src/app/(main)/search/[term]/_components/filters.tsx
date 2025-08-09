'use client';
import { Filter } from '@/app/(main)/search/[term]/_types/filters';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import { useRouter } from 'next/navigation';
import { useDebouncedCallback } from 'use-debounce';

type FiltersProps = Readonly<{
  term: string;
  filter: Filter;
}>;

export function Filters(props: FiltersProps) {
  const { term, filter } = props;

  const router = useRouter();

  const handleChange = useDebouncedCallback((value: string) => {
    const params = new URLSearchParams(window.location.search);

    params.set('filter', value);

    router.push(`/search/${term}?${params.toString()}`);
  }, 500);

  return (
    <Carousel
      className="w-full"
      opts={{
        dragFree: true,
      }}
    >
      <ToggleGroup
        type="single"
        value={filter}
        defaultValue="all"
        onValueChange={handleChange}
        asChild
      >
        <CarouselContent className="m-0 gap-2">
          <CarouselItem className="basis-auto p-0">
            <ToggleGroupItem value="all" size="sm">
              Tudo
            </ToggleGroupItem>
          </CarouselItem>
          <CarouselItem className="basis-auto p-0">
            <ToggleGroupItem value="artist" size="sm">
              Artistas
            </ToggleGroupItem>
          </CarouselItem>
          <CarouselItem className="basis-auto p-0">
            <ToggleGroupItem value="album" size="sm">
              Álbuns
            </ToggleGroupItem>
          </CarouselItem>
          <CarouselItem className="basis-auto p-0">
            <ToggleGroupItem value="track" size="sm" disabled>
              Músicas
            </ToggleGroupItem>
          </CarouselItem>
          <CarouselItem className="basis-auto p-0">
            <ToggleGroupItem value="playlist" size="sm" disabled>
              Playlists
            </ToggleGroupItem>
          </CarouselItem>
          <CarouselItem className="basis-auto p-0">
            <ToggleGroupItem value="show" size="sm" disabled>
              Podcasts e programas
            </ToggleGroupItem>
          </CarouselItem>
          <CarouselItem className="basis-auto p-0">
            <ToggleGroupItem value="episode" size="sm" disabled>
              Gêneros e momentos
            </ToggleGroupItem>
          </CarouselItem>
          <CarouselItem className="basis-auto p-0">
            <ToggleGroupItem value="profile" size="sm" disabled>
              Perfis
            </ToggleGroupItem>
          </CarouselItem>
        </CarouselContent>
      </ToggleGroup>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
