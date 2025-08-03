import Image from 'next/image';
import React from 'react';

export function Card() {
  return (
    <a href="#" className="flex flex-col gap-4 p-3 hover:bg-background-highlight rounded-[6px]">
      <div className="aspect-square relative">
        <Image
          alt="Taylor Swift"
          src="https://pickasso.spotifycdn.com/image/ab67c0de0000deef/dt/v1/img/daily/1/ab6761610000e5ebe672b5f553298dcdccb0e676/pt"
          fill
        />
      </div>
      <span className="text-text-gray text-sm">Taylor Swift, Jessie J, Maroon 5 e mais</span>
    </a>
  );
}
