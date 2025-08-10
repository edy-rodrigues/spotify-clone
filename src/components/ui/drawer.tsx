'use client';

import { cn } from '@/utils/cn';
import React from 'react';
import { Drawer as DrawerPrimitive } from 'vaul';

type DrawerProps = Readonly<React.ComponentProps<typeof DrawerPrimitive.Root>>;

export function Drawer(props: DrawerProps) {
  return <DrawerPrimitive.Root data-slot="drawer" {...props} />;
}

type DrawerTriggerProps = Readonly<React.ComponentProps<typeof DrawerPrimitive.Trigger>>;

export function DrawerTrigger(props: DrawerTriggerProps) {
  return <DrawerPrimitive.Trigger data-slot="drawer-trigger" {...props} />;
}

type DrawerPortalProps = Readonly<React.ComponentProps<typeof DrawerPrimitive.Portal>>;

export function DrawerPortal(props: DrawerPortalProps) {
  return <DrawerPrimitive.Portal data-slot="drawer-portal" {...props} />;
}

type DrawerCloseProps = Readonly<React.ComponentProps<typeof DrawerPrimitive.Close>>;

export function DrawerClose(props: DrawerCloseProps) {
  return <DrawerPrimitive.Close data-slot="drawer-close" {...props} />;
}

type DrawerOverlayProps = Readonly<React.ComponentProps<typeof DrawerPrimitive.Overlay>>;

export function DrawerOverlay(props: DrawerOverlayProps) {
  const { className, ...rest } = props;

  return (
    <DrawerPrimitive.Overlay
      data-slot="drawer-overlay"
      className={cn(
        'data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50',
        className,
      )}
      {...rest}
    />
  );
}

type DrawerContentProps = Readonly<React.ComponentProps<typeof DrawerPrimitive.Content>>;

export function DrawerContent(props: DrawerContentProps) {
  const { className, children, ...rest } = props;

  return (
    <DrawerPortal data-slot="drawer-portal">
      <DrawerOverlay />
      <DrawerPrimitive.Content
        data-slot="drawer-content"
        className={cn(
          'group/drawer-content bg-black fixed z-50 flex h-auto flex-col',
          'data-[vaul-drawer-direction=top]:inset-x-0 data-[vaul-drawer-direction=top]:top-0 data-[vaul-drawer-direction=top]:mb-24 data-[vaul-drawer-direction=top]:max-h-[80vh] data-[vaul-drawer-direction=top]:rounded-b-lg data-[vaul-drawer-direction=top]:border-b',
          'data-[vaul-drawer-direction=bottom]:inset-x-0 data-[vaul-drawer-direction=bottom]:bottom-0 data-[vaul-drawer-direction=bottom]:mt-24 data-[vaul-drawer-direction=bottom]:max-h-[80vh] data-[vaul-drawer-direction=bottom]:rounded-t-lg',
          'data-[vaul-drawer-direction=right]:inset-y-0 data-[vaul-drawer-direction=right]:right-0 data-[vaul-drawer-direction=right]:w-3/4 data-[vaul-drawer-direction=right]:border-l data-[vaul-drawer-direction=right]:sm:max-w-sm',
          'data-[vaul-drawer-direction=left]:inset-y-0 data-[vaul-drawer-direction=left]:left-0 data-[vaul-drawer-direction=left]:w-3/4 data-[vaul-drawer-direction=left]:border-r data-[vaul-drawer-direction=left]:sm:max-w-sm',
          className,
        )}
        {...rest}
      >
        <div className="bg-text-gray mx-auto mt-4 hidden h-2 w-[100px] shrink-0 rounded-full group-data-[vaul-drawer-direction=bottom]/drawer-content:block" />
        {children}
      </DrawerPrimitive.Content>
    </DrawerPortal>
  );
}

type DrawerHeaderProps = Readonly<React.ComponentProps<'div'>>;

export function DrawerHeader(props: DrawerHeaderProps) {
  const { className, ...rest } = props;

  return (
    <div
      data-slot="drawer-header"
      className={cn(
        'flex flex-col gap-0.5 p-4 group-data-[vaul-drawer-direction=bottom]/drawer-content:text-center group-data-[vaul-drawer-direction=top]/drawer-content:text-center md:gap-1.5 md:text-left',
        className,
      )}
      {...rest}
    />
  );
}

type DrawerFooterProps = Readonly<React.ComponentProps<'div'>>;

export function DrawerFooter(props: DrawerFooterProps) {
  const { className, ...rest } = props;

  return (
    <div
      data-slot="drawer-footer"
      className={cn('mt-auto flex flex-col gap-2 p-4', className)}
      {...rest}
    />
  );
}

type DrawerTitleProps = Readonly<React.ComponentProps<typeof DrawerPrimitive.Title>>;

export function DrawerTitle(props: DrawerTitleProps) {
  const { className, ...rest } = props;

  return (
    <DrawerPrimitive.Title
      data-slot="drawer-title"
      className={cn('text-foreground font-semibold', className)}
      {...rest}
    />
  );
}

type DrawerDescriptionProps = Readonly<React.ComponentProps<typeof DrawerPrimitive.Description>>;

export function DrawerDescription(props: DrawerDescriptionProps) {
  const { className, ...rest } = props;

  return (
    <DrawerPrimitive.Description
      data-slot="drawer-description"
      className={cn('text-muted-foreground text-sm', className)}
      {...rest}
    />
  );
}
