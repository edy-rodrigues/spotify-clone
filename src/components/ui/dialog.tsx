'use client';

import { XIcon } from '@/components/icons/x-icon';
import { Button } from '@/components/ui/button';
import React from 'react';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import { cn } from '@/utils/cn';

type DialogProps = Readonly<React.ComponentProps<typeof DialogPrimitive.Root>>;

export function Dialog(props: DialogProps) {
  return <DialogPrimitive.Root data-slot="dialog" {...props} />;
}

type DialogTriggerProps = Readonly<React.ComponentProps<typeof DialogPrimitive.Trigger>>;

export function DialogTrigger(props: DialogTriggerProps) {
  return <DialogPrimitive.Trigger data-slot="dialog-trigger" {...props} />;
}

type DialogPortalProps = Readonly<React.ComponentProps<typeof DialogPrimitive.Portal>>;

export function DialogPortal(props: DialogPortalProps) {
  return <DialogPrimitive.Portal data-slot="dialog-portal" {...props} />;
}

type DialogCloseProps = Readonly<React.ComponentProps<typeof DialogPrimitive.Close>>;

export function DialogClose(props: DialogCloseProps) {
  return <DialogPrimitive.Close data-slot="dialog-close" {...props} />;
}

type DialogOverlayProps = Readonly<React.ComponentProps<typeof DialogPrimitive.Overlay>>;

export function DialogOverlay(props: DialogOverlayProps) {
  const { className, ...rest } = props;

  return (
    <DialogPrimitive.Overlay
      data-slot="dialog-overlay"
      className={cn(
        'data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50',
        className,
      )}
      {...rest}
    />
  );
}

type DialogContentProps = Readonly<
  React.ComponentProps<typeof DialogPrimitive.Content> & {
    showCloseButton?: boolean;
  }
>;

export function DialogContent(props: DialogContentProps) {
  const { className, children, showCloseButton = true, ...rest } = props;

  return (
    <DialogPortal data-slot="dialog-portal">
      <DialogOverlay />
      <DialogPrimitive.Content
        data-slot="dialog-content"
        className={cn(
          'bg-background-elevation-3 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full translate-x-[-50%] translate-y-[-50%] gap-4 p-6 shadow-lg duration-200',
          className,
        )}
        {...rest}
      >
        {children}
        {showCloseButton && (
          <DialogPrimitive.Close
            data-slot="dialog-close"
            className="data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4"
            asChild
          >
            <Button size="icon" className="rounded-full bg-black">
              <XIcon className="fill-white" />
              <span className="sr-only">Close</span>
            </Button>
          </DialogPrimitive.Close>
        )}
      </DialogPrimitive.Content>
    </DialogPortal>
  );
}

type DialogHeaderProps = Readonly<React.ComponentProps<'div'>>;

export function DialogHeader(props: DialogHeaderProps) {
  const { className, ...rest } = props;

  return (
    <div
      data-slot="dialog-header"
      className={cn('flex flex-col gap-2 text-center sm:text-left', className)}
      {...rest}
    />
  );
}

type DialogFooterProps = Readonly<React.ComponentProps<'div'>>;

export function DialogFooter(props: DialogFooterProps) {
  const { className, ...rest } = props;

  return (
    <div
      data-slot="dialog-footer"
      className={cn('flex flex-col-reverse gap-2 sm:flex-row sm:justify-end', className)}
      {...rest}
    />
  );
}

type DialogTitleProps = Readonly<React.ComponentProps<typeof DialogPrimitive.Title>>;

export function DialogTitle(props: DialogTitleProps) {
  const { className, ...rest } = props;

  return (
    <DialogPrimitive.Title
      data-slot="dialog-title"
      className={cn('text-lg leading-none font-semibold', className)}
      {...rest}
    />
  );
}

type DialogDescriptionProps = Readonly<React.ComponentProps<typeof DialogPrimitive.Description>>;

export function DialogDescription(props: DialogDescriptionProps) {
  const { className, ...rest } = props;

  return (
    <DialogPrimitive.Description
      data-slot="dialog-description"
      className={cn('text-muted-foreground text-sm', className)}
      {...rest}
    />
  );
}
