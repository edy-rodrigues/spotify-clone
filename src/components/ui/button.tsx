import { cn } from '@/utils/cn';
import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

export const buttonVariants = cva(
  "font-title inline-flex items-center justify-center gap-2 whitespace-nowrap cursor-pointer rounded-md text-sm font-bold transition-all duration-50 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default: 'bg-white text-black rounded-[48px] hover:scale-104 transform-gpu',
        secondary:
          'bg-background-elevation-2 text-white rounded-[48px] hover:scale-104 transform-gpu',
        outline:
          'border border-divider bg-transparent rounded-[48px] shadow-xs hover:scale-104 hover:border-white dark:bg-input/30 dark:border-input dark:hover:bg-input/50',
        ghost: 'text-text-gray hover:scale-104 hover:text-white dark:hover:bg-accent/50',
        link: 'bg-transparent text-white underline-offset-4 hover:underline',
      },
      color: {
        default: 'bg-white',
        primary: 'bg-primary-main',
        transparent: 'bg-transparent',
      },
      size: {
        default: 'h-9 px-4 py-2 has-[>svg]:px-3',
        sm: 'h-8 gap-1.5 px-3 py-1 has-[>svg]:px-3 font-base',
        lg: 'h-12 px-8 has-[>svg]:px-4 text-base',
        icon: 'size-9',
      },
    },
    defaultVariants: {
      color: 'default',
      variant: 'default',
      size: 'default',
    },
    compoundVariants: [
      {
        color: 'default',
        variant: 'outline',
        class: 'bg-transparent',
      },
      {
        size: 'icon',
        color: 'transparent',
        class: 'fill-divider hover:fill-white',
      },
      {
        variant: 'link',
        color: 'default',
        class: 'bg-transparent',
      },
      {
        variant: 'ghost',
        color: 'default',
        class: 'bg-transparent',
      },
      {
        variant: 'secondary',
        color: 'default',
        class: 'bg-background-elevation-4',
      },
    ],
  },
);

type ButtonProps = React.ComponentProps<'button'> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  };

export function Button(props: ButtonProps) {
  const { className, variant, size, color, asChild = false, ...rest } = props;

  const Comp = asChild ? Slot : 'button';

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, color, size, className }))}
      {...rest}
    />
  );
}
