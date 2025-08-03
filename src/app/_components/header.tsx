import { SpotifySvgIcon } from '@/ui/components/icons/spotify-svg-icon';
import React from 'react';

export function Header() {
  return (
    <header className="bg-red-400 hidden lg:flex p-2">
      <div className="flex items-center">
        <a href="#" className="w-18 h-18 flex justify-center items-center">
          <SpotifySvgIcon className="fill-white" />
        </a>
      </div>
    </header>
  );
}
