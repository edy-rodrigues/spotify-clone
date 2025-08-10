import { SearchInput } from '@/app/_components/search-input';
import { Typography } from '@/components/data-display/typography';
import { ScrollArea } from '@/components/ui/scroll-area';
import { getTranslations } from 'next-intl/server';
import React from 'react';

export default async function InitialSearchPage() {
  const t = await getTranslations();

  return (
    <ScrollArea className="main-view rounded-lg flex-1 before:content-[none] relative p-2">
      <div className="flex flex-col min-h-full mt-4 p-2">
        <Typography variant="h1" className="mb-4">
          {t('initialSearchPage.title')}
        </Typography>
        <SearchInput />

        <Typography
          variant="h4"
          className="absolute top-0 bottom-0 left-0 right-0 m-auto text-xl h-fit text-center max-w-[250px] text-text-gray"
        >
          {t('initialSearchPage.description')}
        </Typography>
      </div>
    </ScrollArea>
  );
}
