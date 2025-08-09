import { cn } from '@/utils/cn';
import React from 'react';

type HomeFilledIconProps = Readonly<React.SVGProps<SVGSVGElement>>;

export function HomeFilledIcon(props: HomeFilledIconProps) {
  const { className, ...rest } = props;

  return (
    <svg
      aria-hidden="true"
      className={cn(className)}
      data-encore-id="icon"
      viewBox="0 0 24 24"
      {...rest}
    >
      <path d="M13.5 1.515a3 3 0 0 0-3 0L3 5.845a2 2 0 0 0-1 1.732V21a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-6h4v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V7.577a2 2 0 0 0-1-1.732z" />
    </svg>
  );
}
