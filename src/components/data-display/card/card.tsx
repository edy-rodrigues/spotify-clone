'use client';
import { PlayIcon } from '@/components/icons/play-icon';
import { Button } from '@/components/ui/button';
import { cn } from '@/utils/cn';
import { Slot } from '@radix-ui/react-slot';
import NextImage, { ImageProps } from 'next/image';
import Link from 'next/link';
import React from 'react';

export type CardRootProps = Readonly<React.ComponentProps<typeof Link>> & {
  asChild?: boolean;
};

export function CardRoot(props: CardRootProps) {
  const { className, children, asChild, ...rest } = props;

  const Comp = asChild ? Slot : Link;

  return (
    <Comp
      data-slot="card"
      className={cn(
        'group flex flex-col p-3 hover:bg-background-highlight rounded-[6px]',
        className,
      )}
      {...rest}
    >
      {children}
    </Comp>
  );
}

export type CardImageContainerProps = React.HTMLAttributes<HTMLDivElement>;

export function CardImageContainer(props: CardImageContainerProps) {
  const { className, children, ...rest } = props;

  return (
    <div
      data-slot="card-image-container"
      className={cn('aspect-square relative', className)}
      {...rest}
    >
      {children}
    </div>
  );
}

export type CardImageProps = ImageProps;

export function CardImage(props: CardImageProps) {
  const { className, alt, ...rest } = props;

  return (
    <NextImage
      data-slot="card-image"
      alt={alt}
      fill
      className={cn('rounded-[6px]', className)}
      {...rest}
    />
  );
}

type CardTitleProps = React.HTMLAttributes<HTMLSpanElement>;

export function CardTitle(props: CardTitleProps) {
  const { className, children, ...rest } = props;

  return (
    <span data-slot="card-title" className={cn('mt-3 text-sm', className)} {...rest}>
      {children}
    </span>
  );
}

export function CardSubtitle(props: CardTitleProps) {
  const { className, children, ...rest } = props;

  return (
    <span
      data-slot="card-subtitle"
      className={cn('mt-1 text-text-gray text-sm', className)}
      {...rest}
    >
      {children}
    </span>
  );
}

type CardButtonProps = React.ComponentProps<typeof Button>;

export function CardPlayButton(props: CardButtonProps) {
  const { className, ...rest } = props;

  return (
    <Button
      data-slot="card-play-button"
      className={cn(
        'absolute bottom-2 right-2 flex size-12 translate-y-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100',
        className,
      )}
      {...rest}
      size="icon"
      color="primary"
    >
      <PlayIcon className="size-6" />
    </Button>
  );
}

export const Card = {
  Root: CardRoot,
  ImageContainer: CardImageContainer,
  Image: CardImage,
  Title: CardTitle,
  Subtitle: CardSubtitle,
};
