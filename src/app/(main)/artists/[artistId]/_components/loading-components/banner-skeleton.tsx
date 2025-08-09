import React from 'react';

export function BannerSkeleton() {
  return (
    <div className="animate-pulse h-full relative">
      <div className="absolute left-6 bottom-8 z-20">
        <span className="flex items-center gap-2">
          <span className="size-6 bg-gray-400 rounded-full" />
          <span className="h-4 w-30 bg-gray-400 rounded-lg" />
        </span>
        <span className="flex h-8 lg:h-16 w-60 lg:w-120 bg-gray-400 rounded-lg my-3 lg:my-8" />
        <span className="flex h-4 w-30 bg-gray-400 rounded-lg" />
        <span className="flex h-4 w-36 bg-gray-400 rounded-lg mt-2" />
      </div>
    </div>
  );
}
