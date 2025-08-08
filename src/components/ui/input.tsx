import { cn } from '@/utils/cn';
import React from 'react';

type InputProps = React.ComponentProps<'input'>;

export function Input(props: InputProps) {
  const { className, type = 'text', ...rest } = props;

  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        'file:text-foreground placeholder:text-text-gray h-12 font-text-2 placeholder:text-base selection:bg-primary selection:text-primary-foreground dark:bg-input/30 flex w-full min-w-0 rounded-md bg-background-elevation-2 px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50',
        'focus-visible:border-ring focus-visible:ring-white focus-visible:ring-2 hover:shadow-inner hover:shadow-white/10 hover:bg-background-elevation-3 rounded-l-full rounded-r-full',
        'aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive',
        className,
      )}
      {...rest}
    />
  );
}
