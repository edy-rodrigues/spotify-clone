'use client';

import { BrowseFilledIcon } from '@/components/icons/browse-filled-icon';
import { BrowseIcon } from '@/components/icons/browse-icon';
import { SearchIcon } from '@/components/icons/search-icon';
import { XIcon } from '@/components/icons/x-icon';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { usePathname, useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { useDebouncedCallback } from 'use-debounce';

export function SearchInput() {
  const router = useRouter();
  const pathname = usePathname();
  const isSearchPage = pathname.startsWith('/search');

  function getQueryFromPath(path: string): string {
    const match = path.match(/^\/search\/(.*)$/);

    return match ? decodeURIComponent(match[1]) : '';
  }

  const [query, setQuery] = useState(getQueryFromPath(pathname));

  const handleSearch = useDebouncedCallback((term: string) => {
    if (!term) {
      return;
    }

    router.push(`/search/${encodeURIComponent(term)}`);
  }, 500);

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { value } = event.target;

    setQuery(value);
    handleSearch(value);
  }

  function handleClear() {
    console.log('to aqui');
    setQuery('');
  }

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
        onChange={handleChange}
      />
      <div className="absolute flex items-center right-4 top-3 transition-colors group-focus-within:border-l-white">
        {query && (
          <Button
            size="icon"
            color="transparent"
            className="size-6 hover:[&>svg]:fill-white mx-3"
            onClick={handleClear}
          >
            <XIcon className="fill-text-gray size-6" />
          </Button>
        )}
        <div className="flex items-center border-l border-l-text-gray pl-3">
          <Button size="icon" color="transparent" className="size-6 hover:[&>svg]:fill-white">
            {isSearchPage ? (
              <BrowseFilledIcon className="fill-white size-6 transition-colors group-focus-within:fill-white" />
            ) : (
              <BrowseIcon className="fill-text-gray size-6 transition-colors group-focus-within:fill-white" />
            )}
          </Button>
        </div>
      </div>
    </div>
  );
}
