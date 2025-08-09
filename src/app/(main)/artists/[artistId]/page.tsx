import { AlbumsSections } from '@/app/(main)/artists/[artistId]/_components/albums-sections';
import { AlbumsTable } from '@/app/(main)/artists/[artistId]/_components/albums-table';
import { Banner } from '@/app/(main)/artists/[artistId]/_components/banner';
import { AlbumTableSkeleton } from '@/app/(main)/artists/[artistId]/_components/loading-components/album-table-skeleton';
import { AlbumsSectionsSkeleton } from '@/app/(main)/artists/[artistId]/_components/loading-components/albums-sections-skeleton';
import { BannerSkeleton } from '@/app/(main)/artists/[artistId]/_components/loading-components/banner-skeleton';
import { CarouselSkeleton } from '@/app/(main)/artists/[artistId]/_components/loading-components/carousel-skeleton';
import { TopTracks } from '@/app/(main)/artists/[artistId]/_components/top-tracks';
import { Typography } from '@/components/data-display/typography';
import { MoreIcon } from '@/components/icons/more-icon';
import { PlayIcon } from '@/components/icons/play-icon';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Pagination } from '@/utils/pagination';
import React from 'react';

type ArtistPageProps = {
  params: Promise<{
    artistId: string;
  }>;
  searchParams: Promise<{
    page?: string;
    limit?: string;
  }>;
};

export default async function ArtistPage(props: ArtistPageProps) {
  const { params, searchParams } = props;

  const { artistId } = await params;
  const { page: searchParamPage, limit: searchParamLimit } = await searchParams;

  const page = Number(searchParamPage) || Pagination.DEFAULT_PAGE;
  const limit = Number(searchParamLimit) || Pagination.DEFAULT_LIMIT;

  const validPage = Math.max(1, isNaN(page) ? Pagination.DEFAULT_PAGE : page);
  const validLimit = isNaN(limit) ? Pagination.DEFAULT_LIMIT : limit;

  return (
    <ScrollArea
      className="main-view rounded-lg min-h-full before:content-[none] overflow-hidden"
      type="always"
    >
      <section className="relative h-[40vh] before:absolute before:inset-0 before:content-[''] before:bg-[linear-gradient(transparent_0,rgba(0,0,0,0.5)_100%),var(--background-noise)] before:z-10">
        <React.Suspense fallback={<BannerSkeleton />}>
          <Banner artistId={artistId} />
        </React.Suspense>
      </section>
      <section className="flex flex-col">
        <div className="flex items-center gap-6 p-6">
          <Button size="icon" color="primary" className="size-14">
            <PlayIcon className="size-6" />
          </Button>
          <Button variant="outline">Seguir</Button>
          <Button size="icon" color="transparent">
            <MoreIcon className="size-8" />
          </Button>
        </div>
      </section>
      <section className="px-6 mt-4">
        <Typography variant="h2" className="mb-2">
          Álbuns
        </Typography>
        <React.Suspense fallback={<AlbumTableSkeleton />}>
          <AlbumsTable page={validPage} limit={validLimit} artistId={artistId} />
        </React.Suspense>
      </section>
      <section className="px-6 mt-10">
        <Typography variant="h2" className="mb-2">
          Lançamentos populares
        </Typography>
        <React.Suspense fallback={<CarouselSkeleton />}>
          <TopTracks artistId={artistId} />
        </React.Suspense>
      </section>
      <React.Suspense fallback={<AlbumsSectionsSkeleton />}>
        <AlbumsSections artistId={artistId} />
      </React.Suspense>
    </ScrollArea>
  );
}
