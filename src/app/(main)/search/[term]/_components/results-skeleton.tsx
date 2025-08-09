import { CardImageContainer, CardRoot, CardTitle } from '@/components/data-display/card';
import { Typography } from '@/components/data-display/typography';
import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import Link from 'next/link';
import React from 'react';

export function ResultsSkeleton() {
  return (
    <>
      <section className="mt-8 animate-pulse">
        <Typography variant="h2" className="mb-2 ml-3">
          <Link href="#" className="hover:underline">
            Álbuns
          </Link>
        </Typography>
        <Carousel
          className="[&>.carousel-content]:-mx-10 [&>.carousel-content]:pr-10 [&>.carousel-content]:before:-left-10 [&>.carousel-content]:after:-right-10 animate-pulse"
          opts={{
            slidesToScroll: 6,
            watchDrag: false,
          }}
        >
          <CarouselContent className="m-0 ml-10">
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
      </section>

      <section className="mt-14 animate-pulse">
        <Typography variant="h2" className="mb-2 ml-3">
          <Link href="#" className="hover:underline">
            Artistas
          </Link>
        </Typography>
        <Carousel
          className="[&>.carousel-content]:-mx-10 [&>.carousel-content]:pr-10 [&>.carousel-content]:before:-left-10 [&>.carousel-content]:after:-right-10 animate-pulse"
          opts={{
            slidesToScroll: 6,
            watchDrag: false,
          }}
        >
          <CarouselContent className="m-0 ml-10">
            {Array.from({ length: 8 }).map((_, index) => (
              <CardRoot key={index} href="#">
                <CardImageContainer>
                  <span className="flex size-40 bg-gray-400 rounded-full" />
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
      </section>
    </>
  );
}
