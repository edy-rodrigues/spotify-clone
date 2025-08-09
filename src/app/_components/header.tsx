import { MidHeader } from '@/app/_components/mid-header';
import { RightHeader } from '@/app/_components/right-header';
import { SpotifyIcon } from '@/components/icons/spotify-icon';
import { SpotifyLabelledIcon } from '@/components/icons/spotify-labelled-icon';
import Link from 'next/link';
import React from 'react';

export function Header() {
  return (
    <header className="flex p-4 lg:p-2 items-center relative lg:-m-2">
      <div className="flex items-center">
        <Link href="/" className="lg:w-18 lg:h-18 flex justify-center items-center">
          <SpotifyIcon className="fill-white hidden lg:block" />
          <SpotifyLabelledIcon className="fill-white block lg:hidden" />
        </Link>
      </div>
      <div className="hidden lg:flex w-full max-w-[546px] items-center gap-2 3xl:absolute 3xl:left-0 3xl:right-0 3xl:mx-auto px-2">
        <MidHeader />
      </div>
      <div className="flex items-center h-full ml-auto">
        <RightHeader />
      </div>
    </header>
  );
}
