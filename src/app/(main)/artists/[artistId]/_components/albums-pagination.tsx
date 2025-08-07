import { Typography } from '@/components/data-display/typography/typography';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';
import { Pagination as PaginationClass } from '@/utils/pagination';
import React from 'react';

type AlbumsPaginationProps = {
  pagination: PaginationClass;
  artistId: string;
};

export function AlbumsPagination(props: AlbumsPaginationProps) {
  const { pagination, artistId } = props;

  const { startItem, totalItems, endItem, itemsPerPage, currentPage, hasPrevious, hasNext } =
    pagination;

  function createPageUrl(page: number) {
    const params = new URLSearchParams();

    params.set('limit', itemsPerPage.toString());

    if (page !== 1) {
      params.set('page', page.toString());
    }

    const queryString = params.toString();
    return `/artists/${artistId}${queryString ? `?${queryString}` : ''}`;
  }

  if (totalItems === 0) {
    // TODO: Add empty state UI
    return null;
  }

  return (
    <div className="flex items-center mt-5">
      <Pagination className="mx-0 justify-start w-fit">
        <PaginationContent className="gap-3">
          <PaginationItem>
            <PaginationPrevious
              href={hasPrevious ? createPageUrl(currentPage - 1) : '#'}
              aria-disabled={!hasPrevious}
              className={!hasPrevious ? 'pointer-events-none opacity-50' : ''}
            />
          </PaginationItem>
          <PaginationItem>
            <PaginationNext
              href={hasNext ? createPageUrl(currentPage + 1) : '#'}
              aria-disabled={!hasNext}
              className={!hasNext ? 'pointer-events-none opacity-50' : ''}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
      <Typography className="whitespace-nowrap ml-3 text-text-gray">
        {startItem}-{endItem} de {totalItems}
      </Typography>
    </div>
  );
}
