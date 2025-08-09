'use client';

import { ChevronLeftIcon } from '@/components/icons/chevron-left';
import { ChevronRightIcon } from '@/components/icons/chevron-right';
import { Button } from '@/components/ui/button';
import { cn } from '@/utils/cn';
import useEmblaCarousel, { type UseEmblaCarouselType } from 'embla-carousel-react';
import React from 'react';

type CarouselApi = UseEmblaCarouselType[1];
type UseCarouselParameters = Parameters<typeof useEmblaCarousel>;
type CarouselOptions = UseCarouselParameters[0];
type CarouselPlugin = UseCarouselParameters[1];

type CarouselProps = {
  opts?: CarouselOptions;
  plugins?: CarouselPlugin;
  orientation?: 'horizontal' | 'vertical';
  setApi?: (api: CarouselApi) => void;
};

type CarouselContextProps = {
  carouselRef: ReturnType<typeof useEmblaCarousel>[0];
  api: ReturnType<typeof useEmblaCarousel>[1];
  scrollPrev: () => void;
  scrollNext: () => void;
  canScrollPrev: boolean;
  canScrollNext: boolean;
} & CarouselProps;

const CarouselContext = React.createContext<CarouselContextProps | null>(null);

function useCarousel() {
  const context = React.useContext(CarouselContext);

  if (!context) {
    throw new Error('useCarousel must be used within a <Carousel />');
  }

  return context;
}

function Carousel(props: React.ComponentProps<'div'> & CarouselProps) {
  const { orientation = 'horizontal', opts, setApi, plugins, className, children, ...rest } = props;

  const [carouselRef, api] = useEmblaCarousel(
    {
      ...opts,
      axis: orientation === 'horizontal' ? 'x' : 'y',
    },
    plugins,
  );
  const [canScrollPrev, setCanScrollPrev] = React.useState(false);
  const [canScrollNext, setCanScrollNext] = React.useState(false);

  const onSelect = React.useCallback((api: CarouselApi) => {
    if (!api) return;
    setCanScrollPrev(api.canScrollPrev());
    setCanScrollNext(api.canScrollNext());
  }, []);

  const scrollPrev = React.useCallback(() => {
    api?.scrollPrev();
  }, [api]);

  const scrollNext = React.useCallback(() => {
    api?.scrollNext();
  }, [api]);

  const handleKeyDown = React.useCallback(
    (event: React.KeyboardEvent<HTMLDivElement>) => {
      if (event.key === 'ArrowLeft') {
        event.preventDefault();
        scrollPrev();
      } else if (event.key === 'ArrowRight') {
        event.preventDefault();
        scrollNext();
      }
    },
    [scrollPrev, scrollNext],
  );

  React.useEffect(() => {
    if (!api || !setApi) return;
    setApi(api);
  }, [api, setApi]);

  React.useEffect(() => {
    if (!api) return;
    onSelect(api);
    api.on('reInit', onSelect);
    api.on('select', onSelect);

    return () => {
      api?.off('select', onSelect);
    };
  }, [api, onSelect]);

  return (
    <CarouselContext.Provider
      value={{
        carouselRef,
        api: api,
        opts,
        orientation: orientation || (opts?.axis === 'y' ? 'vertical' : 'horizontal'),
        scrollPrev,
        scrollNext,
        canScrollPrev,
        canScrollNext,
      }}
    >
      <div
        onKeyDownCapture={handleKeyDown}
        className={cn(
          'relative hover:[&>.carousel-button-next]:opacity-100 hover:[&>.carousel-button-previous]:opacity-100',
          className,
        )}
        role="region"
        aria-roledescription="carousel"
        data-slot="carousel"
        {...rest}
      >
        {children}
      </div>
    </CarouselContext.Provider>
  );
}

function CarouselContent(props: React.ComponentProps<'div'>) {
  const { className, ...rest } = props;

  const { carouselRef, orientation, canScrollPrev, canScrollNext } = useCarousel();

  return (
    <div
      ref={carouselRef}
      className={cn(
        'carousel-content overflow-hidden isolate',
        canScrollPrev &&
          'before:content-[""] before:absolute before:bottom-0 before:top-0 before:left-0 before:w-30 before:bg-[linear-gradient(90deg,var(--carousel-edge-shadow-color),var(--background-elevation-1)_0,transparent_100%)] before:z-1 before:pointer-events-none',
        canScrollNext &&
          'after:content-[""] after:absolute after:bottom-0 after:top-0 after:right-0 after:w-30 after:bg-[linear-gradient(-90deg,var(--carousel-edge-shadow-color),var(--background-elevation-1)_0,transparent_100%)] after:z-1 after:pointer-events-none',
      )}
      data-slot="carousel-content"
    >
      <div
        className={cn('flex', orientation === 'horizontal' ? '-ml-4' : '-mt-4 flex-col', className)}
        {...rest}
      />
    </div>
  );
}

function CarouselItem(props: React.ComponentProps<'div'>) {
  const { className, ...rest } = props;

  const { orientation } = useCarousel();

  return (
    <div
      role="group"
      aria-roledescription="slide"
      data-slot="carousel-item"
      className={cn(
        'min-w-0 shrink-0 grow-0 basis-full',
        orientation === 'horizontal' ? 'pl-4' : 'pt-4',
        className,
      )}
      {...rest}
    />
  );
}

function CarouselPrevious(props: React.ComponentProps<typeof Button>) {
  const { className, variant = 'outline', size = 'icon', ...rest } = props;

  const { orientation, scrollPrev, canScrollPrev } = useCarousel();

  if (!canScrollPrev) {
    return null;
  }

  return (
    <Button
      data-slot="carousel-previous"
      variant={variant}
      size={size}
      className={cn(
        'carousel-button-previous',
        'absolute size-8 rounded-full bg-background-elevation-2 border-none hover:bg-background-elevation-3 hover:[&>svg]:opacity-100 opacity-0',
        orientation === 'horizontal'
          ? 'top-1/2 -left-4 -translate-y-1/2'
          : '-top-12 left-1/2 -translate-x-1/2 rotate-90',
        className,
      )}
      disabled={!canScrollPrev}
      onClick={scrollPrev}
      {...rest}
    >
      <ChevronLeftIcon className="opacity-70" />
      <span className="sr-only">Previous slide</span>
    </Button>
  );
}

function CarouselNext(props: React.ComponentProps<typeof Button>) {
  const { className, variant = 'outline', size = 'icon', ...rest } = props;

  const { orientation, scrollNext, canScrollNext } = useCarousel();

  if (!canScrollNext) {
    return null;
  }

  return (
    <Button
      data-slot="carousel-next"
      variant={variant}
      size={size}
      className={cn(
        'carousel-button-next',
        'absolute size-8 rounded-full bg-background-elevation-2 border-none hover:bg-background-elevation-3 hover:[&>svg]:opacity-100 opacity-0',
        orientation === 'horizontal'
          ? 'top-1/2 -right-4 -translate-y-1/2'
          : '-bottom-12 left-1/2 -translate-x-1/2 rotate-90',
        className,
      )}
      disabled={!canScrollNext}
      onClick={scrollNext}
      {...rest}
    >
      <ChevronRightIcon className="opacity-70" />
      <span className="sr-only">Next slide</span>
    </Button>
  );
}

export {
  type CarouselApi,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
};
