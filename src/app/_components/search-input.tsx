'use client';

import { BrowseIcon } from '@/components/icons/browse-icon';
import { SearchIcon } from '@/components/icons/search-icon';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useDebouncedCallback } from 'use-debounce';

export function SearchInput() {
  const router = useRouter();
  const pathname = usePathname();

  const getQueryFromPath = (path: string): string => {
    const match = path.match(/^\/search\/(.*)$/);
    return match ? decodeURIComponent(match[1]) : '';
  };

  const [query, setQuery] = useState(getQueryFromPath(pathname));

  const handleSearch = useDebouncedCallback((term: string) => {
    const newPath = term ? `/search/${encodeURIComponent(term)}` : '/';
    router.push(newPath);
  }, 500);

  useEffect(() => {
    setQuery(getQueryFromPath(pathname));
  }, [pathname]);

  return (
    <div className="flex items-center w-full relative group">
      <SearchIcon className="fill-text-gray size-6 absolute left-3 transition-colors group-focus-within:fill-white" />
      <Input
        placeholder="O que você quer ouvir?"
        className="pl-12 py-4 pr-24"
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
          handleSearch(e.target.value);
        }}
      />
      <div className="absolute flex items-center right-3 top-3 border-l border-l-text-gray pl-3 transition-colors group-focus-within:border-l-white">
        <Button size="icon" color="transparent" className="size-6 hover:[&>svg]:fill-white">
          <BrowseIcon className="fill-text-gray size-6 transition-colors group-focus-within:fill-white" />
        </Button>
      </div>
    </div>
  );
}
