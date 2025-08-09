import { MidHeader } from '@/app/_components/mid-header';
import { RightHeader } from '@/app/_components/right-header';
import { SpotifyIcon } from '@/components/icons/spotify-icon';
import Link from 'next/link';
import React from 'react';

export function Header() {
  return (
    <header className="hidden lg:flex p-2 items-center relative -m-2">
      <div className="flex items-center">
        <Link href="/" className="w-18 h-18 flex justify-center items-center">
          <SpotifyIcon className="fill-white" />
        </Link>
      </div>
      <div className="w-full max-w-[546px] flex items-center gap-2 3xl:absolute 3xl:left-0 3xl:right-0 3xl:mx-auto px-2">
        <MidHeader />
      </div>
      <div className="flex items-center h-full ml-auto">
        <RightHeader />
      </div>
    </header>
  );
}
