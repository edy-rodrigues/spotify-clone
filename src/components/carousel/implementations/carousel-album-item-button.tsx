'use client';
import { cardRootVariants } from '@/components/data-display/card';
import { redirect } from '@/i18n/navigation';
import { cn } from '@/utils/cn';
import { RedirectType } from 'next/navigation';
import React from 'react';
import { useLocale } from 'use-intl';

type CarouselAlbumItemButtonProps = Readonly<
  React.HTMLAttributes<HTMLDivElement> & {
    albumId: string;
    children?: React.ReactNode;
  }
>;

export function CarouselAlbumItemButton(props: CarouselAlbumItemButtonProps) {
  const { albumId, children, className, ...rest } = props;

  const locale = useLocale();

  function handleClick(albumId: string) {
    return function () {
      redirect(
        {
          href: `/albums/${albumId}`,
          locale,
        },
        'push' as RedirectType,
      );
    };
  }

  return (
    <div
      className={cn('w-full text-left cursor-pointer', cardRootVariants(), className)}
      onClick={handleClick(albumId)}
      {...rest}
    >
      {children}
    </div>
  );
}
