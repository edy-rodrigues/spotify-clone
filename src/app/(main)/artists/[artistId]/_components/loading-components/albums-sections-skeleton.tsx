import { CarouselSkeleton } from '@/app/(main)/artists/[artistId]/_components/loading-components/carousel-skeleton';
import React from 'react';

export function AlbumsSectionsSkeleton() {
  return Array.from({ length: 3 }).map((_, index) => (
    <section key={index} className="px-6 mt-10 animate-pulse">
      <span className="flex h-10 w-60 bg-gray-400 rounded-lg mb-2" />
      <CarouselSkeleton />
    </section>
  ));
}
