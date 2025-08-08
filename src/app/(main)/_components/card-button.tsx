'use client';
import { cn } from '@/utils/cn';
import { redirect, RedirectType } from 'next/navigation';
import React from 'react';

type CardButtonProps = Readonly<
  React.HTMLAttributes<HTMLButtonElement> & {
    albumId: string;
    children?: React.ReactNode;
  }
>;

export function CardButton(props: CardButtonProps) {
  const { albumId, children, className, ...rest } = props;

  function handleClick(albumId: string) {
    return function () {
      redirect(`/albums/${albumId}`, 'push' as RedirectType);
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
