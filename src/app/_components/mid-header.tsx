import { BrowseIcon } from '@/components/icons/browse-icon';
import { HomeIcon } from '@/components/icons/home-icon';
import { SearchIcon } from '@/components/icons/search-icon';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Link from 'next/link';

export function MidHeader() {
  return (
    <>
      <Button size="icon" className="bg-background-elevation-2 size-12" asChild>
        <Link href="/">
          <HomeIcon className="fill-text-gray size-6" />
        </Link>
      </Button>
      <div className="flex items-center w-full relative group">
        <SearchIcon className="fill-text-gray size-6 absolute left-3 transition-colors group-focus-within:fill-white" />
        <Input placeholder="O que você quer ouvir?" className="pl-12 py-4 pr-24" />
        <div className="absolute flex items-center right-3 top-3 border-l border-l-text-gray pl-3 transition-colors group-focus-within:border-l-white">
          <Button size="icon" color="transparent" className="size-6 hover:[&>svg]:fill-white">
            <BrowseIcon className="fill-text-gray size-6 transition-colors group-focus-within:fill-white" />
          </Button>
        </div>
      </div>
    </>
  );
}
