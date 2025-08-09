'use client';

import { cn } from '@/utils/cn';
import React from 'react';
import * as ScrollAreaPrimitive from '@radix-ui/react-scroll-area';

type ScrollAreaProps = Readonly<React.ComponentProps<typeof ScrollAreaPrimitive.Root>>;

export function ScrollArea(props: ScrollAreaProps) {
  const { className, children, ...rest } = props;

  return (
    <ScrollAreaPrimitive.Root
      data-slot="scroll-area"
      className={cn('relative', className)}
      {...rest}
    >
      <ScrollAreaPrimitive.Viewport
        data-slot="scroll-area-viewport"
        className="focus-visible:ring-ring/50 size-full rounded-[inherit] transition-[color,box-shadow] outline-none focus-visible:ring-[3px] focus-visible:outline-1 [&>div]:!block"
      >
        {children}
      </ScrollAreaPrimitive.Viewport>
      <ScrollBar />
      <ScrollAreaPrimitive.Corner />
    </ScrollAreaPrimitive.Root>
  );
}

type ScrollBarProps = Readonly<
  React.ComponentProps<typeof ScrollAreaPrimitive.ScrollAreaScrollbar>
>;

export function ScrollBar(props: ScrollBarProps) {
  const { className, orientation = 'vertical', ...rest } = props;

  return (
    <ScrollAreaPrimitive.ScrollAreaScrollbar
      data-slot="scroll-area-scrollbar"
      orientation={orientation}
      className={cn(
        'flex touch-none transition-colors select-none',
        orientation === 'vertical' && 'h-full w-3',
        orientation === 'horizontal' && 'h-3 flex-col',
        className,
      )}
      {...rest}
    >
      <ScrollAreaPrimitive.ScrollAreaThumb
        data-slot="scroll-area-thumb"
        className="bg-[var(--scrollbar-thumb-background)] hover:bg-[var(--scrollbar-thumb-background-hover)] active:bg-[var(--scrollbar-thumb-background-acitve)] relative flex-1"
      />
    </ScrollAreaPrimitive.ScrollAreaScrollbar>
  );
}
