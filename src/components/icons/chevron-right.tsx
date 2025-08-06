import { cn } from '@/utils/cn';
import React from 'react';

type ChevronRightIconProps = React.SVGProps<SVGSVGElement>;

export function ChevronRightIcon(props: ChevronRightIconProps) {
  const { className, ...rest } = props;

  return (
    <svg
      aria-hidden="true"
      className={cn(className)}
      data-encore-id="icon"
      viewBox="0 0 16 16"
      {...rest}
    >
      <path d="M4.97.47a.75.75 0 0 0 0 1.06L11.44 8l-6.47 6.47a.75.75 0 1 0 1.06 1.06L13.56 8 6.03.47a.75.75 0 0 0-1.06 0" />
    </svg>
  );
}
