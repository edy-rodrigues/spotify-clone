import { SearchInput } from '@/app/_components/search-input';
import { HomeIcon } from '@/components/icons/home-icon';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function MidHeader() {
  return (
    <>
      <Button size="icon" className="bg-background-elevation-2 size-12" asChild>
        <Link href="/">
          <HomeIcon className="fill-text-gray size-6" />
        </Link>
      </Button>
      <SearchInput />
    </>
  );
}
