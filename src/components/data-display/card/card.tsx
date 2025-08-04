import { cn } from '@/utils/cn';
import NextImage, { ImageProps } from 'next/image';
import Link from 'next/link';
import React from 'react';

export type CardRootProps = Readonly<React.ComponentProps<typeof Link>>;

function Root(props: CardRootProps) {
  const { className, children, ...rest } = props;

  return (
    <Link
      className={cn('flex flex-col p-3 hover:bg-background-highlight rounded-[6px]', className)}
      {...rest}
    >
      {children}
    </Link>
  );
}

export type CardImageContainerProps = React.HTMLAttributes<HTMLDivElement>;

function ImageContainer(props: CardImageContainerProps) {
  const { className, children, ...rest } = props;

  return (
    <div className={cn('aspect-square relative', className)} {...rest}>
      {children}
    </div>
  );
}

export type CardImageProps = ImageProps;

export function Image(props: CardImageProps) {
  const { className, alt, ...rest } = props;

  return <NextImage alt={alt} fill className={cn('rounded-[6px]', className)} {...rest} />;
}

type CardTitleProps = React.HTMLAttributes<HTMLSpanElement>;

export function Title(props: CardTitleProps) {
  const { className, children, ...rest } = props;

  return (
    <span className={cn('mt-3 text-sm', className)} {...rest}>
      {children}
    </span>
  );
}

export function Subtitle(props: CardTitleProps) {
  const { className, children, ...rest } = props;

  return (
    <span className={cn('mt-1 text-text-gray text-sm', className)} {...rest}>
      {children}
    </span>
  );
}

export const Card = {
  Root,
  ImageContainer,
  Image,
  Title,
  Subtitle,
};
