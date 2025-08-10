'use client';
import { Filter } from '@/app/[locale]/search/[term]/_types/filters';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import { useTranslations } from 'next-intl';
import { useRouter } from 'next/navigation';
import { useDebouncedCallback } from 'use-debounce';

type FiltersProps = Readonly<{
  term: string;
  filter: Filter;
}>;

export function Filters(props: FiltersProps) {
  const { term, filter } = props;

  const router = useRouter();
  const t = useTranslations();

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
              {t('searchPage.filters.all')}
            </ToggleGroupItem>
          </CarouselItem>
          <CarouselItem className="basis-auto p-0">
            <ToggleGroupItem value="artist" size="sm">
              {t('searchPage.filters.artists')}
            </ToggleGroupItem>
          </CarouselItem>
          <CarouselItem className="basis-auto p-0">
            <ToggleGroupItem value="album" size="sm">
              {t('searchPage.filters.albums')}
            </ToggleGroupItem>
          </CarouselItem>
          <CarouselItem className="basis-auto p-0">
            <ToggleGroupItem value="track" size="sm" disabled>
              {t('searchPage.filters.musics')}
            </ToggleGroupItem>
          </CarouselItem>
          <CarouselItem className="basis-auto p-0">
            <ToggleGroupItem value="playlist" size="sm" disabled>
              {t('searchPage.filters.playlists')}
            </ToggleGroupItem>
          </CarouselItem>
          <CarouselItem className="basis-auto p-0">
            <ToggleGroupItem value="show" size="sm" disabled>
              {t('searchPage.filters.show')}
            </ToggleGroupItem>
          </CarouselItem>
          <CarouselItem className="basis-auto p-0">
            <ToggleGroupItem value="episodes" size="sm" disabled>
              {t('searchPage.filters.episodes')}
            </ToggleGroupItem>
          </CarouselItem>
          <CarouselItem className="basis-auto p-0">
            <ToggleGroupItem value="profiles" size="sm" disabled>
              {t('searchPage.filters.profiles')}
            </ToggleGroupItem>
          </CarouselItem>
        </CarouselContent>
      </ToggleGroup>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
