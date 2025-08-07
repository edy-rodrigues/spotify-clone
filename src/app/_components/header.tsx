import { SpotifySvgIcon } from '@/components/icons/spotify-svg-icon';
import Link from 'next/link';
import React from 'react';

export function Header() {
  return (
    <header className="hidden lg:flex p-2">
      <div className="flex items-center">
        <Link href="/" className="w-18 h-18 flex justify-center items-center">
          <SpotifySvgIcon className="fill-white" />
        </Link>
      </div>
    </header>
  );
}
