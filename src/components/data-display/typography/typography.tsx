'use client';

import { typographyStyles } from '@/components/data-display/typography/typograghy.styles';
import { cn } from '@/utils/cn';
import { VariantProps } from 'class-variance-authority';
import React, { ComponentProps } from 'react';

const ELEMENT_MAP = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
  body1: 'p',
  body2: 'p',
} as const;

type ElementType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p';

export type TypographyProps = Omit<ComponentProps<ElementType>, 'color'> &
  VariantProps<typeof typographyStyles>;

export function Typography(props: TypographyProps) {
  const { variant = 'body1', color = 'text-primary', className, children, ...rest } = props;

  const styles = typographyStyles({ variant, color, className });
  const elementTag = ELEMENT_MAP[variant!];

  return React.createElement(
    elementTag,
    {
      className: cn(styles),
      ...rest,
    },
    children,
  );
}
