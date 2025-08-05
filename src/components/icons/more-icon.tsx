import { cn } from '@/utils/cn';
import React from 'react';

type MoreIconProps = React.SVGProps<SVGSVGElement>;

export function MoreIcon(props: MoreIconProps) {
  const { className, ...rest } = props;

  return (
    <svg
      aria-hidden="true"
      className={cn(className)}
      data-encore-id="icon"
      viewBox="0 0 24 24"
      {...rest}
    >
      <path d="M4.5 13.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3m15 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3m-7.5 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3" />
    </svg>
  );
}
