import { cn } from '@/utils/cn';
import React from 'react';

type MenuIconProps = Readonly<React.SVGProps<SVGSVGElement>>;

export function MenuIcon(props: MenuIconProps) {
  const { className, ...rest } = props;

  return (
    <svg
      aria-hidden="true"
      className={cn(className)}
      data-encore-id="icon"
      viewBox="0 0 24 24"
      {...rest}
    >
      <path d="M21 6H3V4h18zm0 14H3v-2h18zm0-7H3v-2h18z" />
    </svg>
  );
}
