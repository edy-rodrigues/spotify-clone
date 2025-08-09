import { Filters } from '@/app/(main)/search/[term]/_components/filters';
import { FilterHandler } from '@/app/(main)/search/[term]/_utils/filter-handler';
import { ScrollArea } from '@/components/ui/scroll-area';
import React from 'react';

type InitialSearchPageProps = Readonly<{
  searchParams: Promise<{
    filter?: string;
  }>;
}>;

export default async function InitialSearchPage(props: InitialSearchPageProps) {
  const { searchParams } = props;

  const { filter: filterParam } = await searchParams;

  const filter = FilterHandler.sanitize(filterParam);
  const term = '';

  return (
    <ScrollArea className="main-view rounded-lg min-h-full flex-1 before:content-[none] relative">
      <div className="flex items-center gap-3 flex-wrap sticky bg-background-elevation-1 top-0 z-1 px-6 py-3">
        <Filters filter={filter} term={term} />
      </div>
    </ScrollArea>
  );
}
