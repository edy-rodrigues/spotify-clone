import { cva } from 'class-variance-authority';

export const typographyStyles = cva('font-bold', {
  variants: {
    variant: {
      h1: 'text-sm min-md:text-2xl',
      h2: 'text-sm min-md:text-xl',
      h3: 'text-sm min-md:text-lg',
      h4: 'text-sm min-md:text-base',
      h5: 'text-xs min-md:text-sm font-semibold',
      h6: 'text-xs',
      body1: 'text-xs font-normal',
      body2: 'text-xs font-normal',
    },
    color: {
      'text-primary': 'text-text-primary',
      'text-secondary': 'text-text-secondary',
      'text-tertiary': 'text-text-tertiary',
      primary: 'text-primary-main',
    },
  },
  defaultVariants: {
    variant: 'body1',
    color: 'text-primary',
  },
});
