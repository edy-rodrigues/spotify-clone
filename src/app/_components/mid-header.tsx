import { HomeIconClient } from '@/app/_components/home-icon-client';
import { SearchInput } from '@/app/_components/search-input';
import { Button } from '@/components/ui/button';
import { Link } from '@/i18n/navigation';

export function MidHeader() {
  return (
    <>
      <Button size="icon" className="bg-background-elevation-2 size-12" asChild>
        <Link href="/">
          <HomeIconClient />
        </Link>
      </Button>
      <SearchInput />
    </>
  );
}
