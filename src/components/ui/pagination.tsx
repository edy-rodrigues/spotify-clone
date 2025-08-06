import { ChevronLeftIcon } from '@/components/icons/chevron-left';
import { ChevronRightIcon } from '@/components/icons/chevron-right';
import { MoreIcon } from '@/components/icons/more-icon';
import { cn } from '@/utils/cn';
import Link from 'next/link';
import React from 'react';
import { buttonVariants } from '@/components/ui/button';

type PaginationProps = React.ComponentProps<'nav'>;

function Pagination(props: PaginationProps) {
  const { className, ...rest } = props;

  return (
    <nav
      role="navigation"
      aria-label="pagination"
      data-slot="pagination"
      className={cn('mx-auto flex w-full justify-center', className)}
      {...rest}
    />
  );
}

type PaginationContentProps = React.ComponentProps<'ul'>;

function PaginationContent(props: PaginationContentProps) {
  const { className, ...rest } = props;

  return (
    <ul
      data-slot="pagination-content"
      className={cn('flex flex-row items-center gap-1', className)}
      {...rest}
    />
  );
}

type PaginationItemProps = React.ComponentProps<'li'>;

function PaginationItem(props: PaginationItemProps) {
  const { className, ...rest } = props;

  return <li data-slot="pagination-item" className={cn(className)} {...rest} />;
}

type PaginationLinkProps = {
  isActive?: boolean;
} & React.ComponentProps<typeof Link>;

function PaginationLink(props: PaginationLinkProps) {
  const { className, isActive, ...rest } = props;

  return (
    <Link
      aria-current={isActive ? 'page' : undefined}
      data-slot="pagination-link"
      data-active={isActive}
      className={cn(
        buttonVariants({
          variant: 'outline',
          size: 'icon',
        }),
        'hover:[&>svg]:fill-white size-7',
        className,
      )}
      {...rest}
    />
  );
}

type PaginationPreviousProps = React.ComponentProps<typeof PaginationLink>;

function PaginationPrevious(props: PaginationPreviousProps) {
  const { className, ...rest } = props;

  return (
    <PaginationLink
      aria-label="Go to previous page"
      className={cn('gap-1 px-2.5 sm:pl-2.5', className)}
      {...rest}
    >
      <ChevronLeftIcon className="fill-divider size-3" />
      <span className="sr-only">Previous</span>
    </PaginationLink>
  );
}

type PaginationNextProps = React.ComponentProps<typeof PaginationLink>;

function PaginationNext(props: PaginationNextProps) {
  const { className, ...rest } = props;

  return (
    <PaginationLink
      aria-label="Go to next page"
      className={cn('gap-1 px-2.5 sm:pr-2.5', className)}
      {...rest}
    >
      <ChevronRightIcon className="fill-divider size-3" />
      <span className="sr-only">Next</span>
    </PaginationLink>
  );
}

type PaginationEllipsisProps = React.ComponentProps<'span'>;

function PaginationEllipsis(props: PaginationEllipsisProps) {
  const { className, ...rest } = props;

  return (
    <span
      aria-hidden
      data-slot="pagination-ellipsis"
      className={cn('flex size-9 items-center justify-center', className)}
      {...rest}
    >
      <MoreIcon className="size-3 fill-divider" />
      <span className="sr-only">More pages</span>
    </span>
  );
}

export {
  Pagination,
  PaginationContent,
  PaginationLink,
  PaginationItem,
  PaginationPrevious,
  PaginationNext,
  PaginationEllipsis,
};
