import { cn } from '@/utils/cn';
import React from 'react';

type PlayIconProps = Readonly<React.SVGProps<SVGSVGElement>>;

export function PlayIcon(props: PlayIconProps) {
  const { className, ...rest } = props;

  return (
    <svg
      aria-hidden="true"
      className={cn(className)}
      data-encore-id="icon"
      viewBox="0 0 24 24"
      {...rest}
    >
      <path d="m7.05 3.606 13.49 7.788a.7.7 0 0 1 0 1.212L7.05 20.394A.7.7 0 0 1 6 19.788V4.212a.7.7 0 0 1 1.05-.606" />
    </svg>
  );
}
