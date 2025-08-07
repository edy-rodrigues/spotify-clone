import { CardImageContainer, CardRoot, CardTitle } from '@/components/data-display/card';
import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import React from 'react';

export function CarouselSkeleton() {
  return (
    <Carousel
      className="[&>.carousel-content]:-mx-7 [&>.carousel-content]:pr-7 animate-pulse"
      opts={{
        slidesToScroll: 6,
        watchDrag: false,
      }}
    >
      <CarouselContent className="m-0 ml-4">
        {Array.from({ length: 8 }).map((_, index) => (
          <CardRoot key={index} href="#">
            <CardImageContainer>
              <span className="flex size-40 bg-gray-400 rounded-lg" />
            </CardImageContainer>
            <CardTitle>
              <span className="flex h-4 w-30 bg-gray-400 rounded-lg" />
              <span className="flex h-2 w-20 bg-gray-400 rounded-lg mt-2" />
            </CardTitle>
          </CardRoot>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
