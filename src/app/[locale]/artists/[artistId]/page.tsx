import { AlbumsSections } from '@/app/[locale]/artists/[artistId]/_components/albums-sections';
import { AlbumsTable } from '@/app/[locale]/artists/[artistId]/_components/albums-table';
import { Banner } from '@/app/[locale]/artists/[artistId]/_components/banner';
import { AlbumTableSkeleton } from '@/app/[locale]/artists/[artistId]/_components/loading-components/album-table-skeleton';
import { AlbumsSectionsSkeleton } from '@/app/[locale]/artists/[artistId]/_components/loading-components/albums-sections-skeleton';
import { BannerSkeleton } from '@/app/[locale]/artists/[artistId]/_components/loading-components/banner-skeleton';
import { CarouselSkeleton } from '@/app/[locale]/artists/[artistId]/_components/loading-components/carousel-skeleton';
import { TopTracks } from '@/app/[locale]/artists/[artistId]/_components/top-tracks';
import { Typography } from '@/components/data-display/typography';
import { MoreIcon } from '@/components/icons/more-icon';
import { PlayIcon } from '@/components/icons/play-icon';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Pagination } from '@/utils/pagination';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import React from 'react';

type ArtistPageProps = {
  params: Promise<{
    locale: string;
    artistId: string;
  }>;
  searchParams: Promise<{
    page?: string;
    limit?: string;
  }>;
};

export default async function ArtistPage(props: ArtistPageProps) {
  const { params, searchParams } = props;

  const { locale, artistId } = await params;
  const { page: searchParamPage, limit: searchParamLimit } = await searchParams;

  setRequestLocale(locale);

  const t = await getTranslations();

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
      <section className="px-3 lg:px-6 mt-4">
        <Typography variant="h2" className="mb-2">
          {t('artistPage.albumsTable.title')}
        </Typography>
        <React.Suspense fallback={<AlbumTableSkeleton />}>
          <AlbumsTable page={validPage} limit={validLimit} artistId={artistId} />
        </React.Suspense>
      </section>
      <section className="px-6 mt-10">
        <Typography variant="h2" className="mb-2">
          {t('artistPage.sections.topTracks')}
        </Typography>
        <React.Suspense fallback={<CarouselSkeleton />}>
          <TopTracks artistId={artistId} />
        </React.Suspense>
      </section>
      <div className="pb-40 lg:pb-5">
        <React.Suspense fallback={<AlbumsSectionsSkeleton />}>
          <AlbumsSections artistId={artistId} />
        </React.Suspense>
      </div>
    </ScrollArea>
  );
}
