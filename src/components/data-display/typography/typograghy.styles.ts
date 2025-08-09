import { cva } from 'class-variance-authority';

export const typographyStyles = cva('font-bold', {
  variants: {
    variant: {
      h1: 'font-title text-2xl min-md:text-4xl',
      h2: 'font-title text-xl min-md:text-2xl',
      h3: 'font-title text-sm min-md:text-lg',
      h4: 'font-title text-sm min-md:text-base',
      h5: 'font-title text-xs min-md:text-sm font-semibold',
      h6: 'font-title text-xs',
      body1: 'text-xs font-normal',
      body2: 'text-[0.6875rem] font-normal',
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
