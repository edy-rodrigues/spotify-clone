import { cn } from '@/utils/cn';
import NextImage, { ImageProps } from 'next/image';
import React from 'react';

export type CardRootProps = React.HTMLAttributes<HTMLAnchorElement>;

function Root(props: CardRootProps) {
  const { className, children, ...rest } = props;

  return (
    <a
      href="#"
      className={cn(
        'flex flex-col gap-4 p-3 hover:bg-background-highlight rounded-[6px]',
        className,
      )}
      {...rest}
    >
      {children}
    </a>
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
    <span className={cn('text-text-gray text-sm', className)} {...rest}>
      {children}
    </span>
  );
}

export const Card = {
  Root,
  ImageContainer,
  Image,
  Title,
};
