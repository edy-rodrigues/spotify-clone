'use client';
import { redirect } from '@/i18n/navigation';
import { cn } from '@/utils/cn';
import { RedirectType } from 'next/navigation';
import React from 'react';
import { useLocale } from 'use-intl';

type CarouselAlbumItemButtonProps = Readonly<
  React.HTMLAttributes<HTMLButtonElement> & {
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
    <button
      className={cn('w-full text-left cursor-pointer', className)}
      type="button"
      onClick={handleClick(albumId)}
      {...rest}
    >
      {children}
    </button>
  );
}
