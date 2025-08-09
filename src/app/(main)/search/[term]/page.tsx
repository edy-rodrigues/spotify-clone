import { Filters } from '@/app/(main)/search/[term]/_components/filters';
import { Results } from '@/app/(main)/search/[term]/_components/results';
import { ResultsSkeleton } from '@/app/(main)/search/[term]/_components/results-skeleton';
import { FilterHandler } from '@/app/(main)/search/[term]/_utils/filter-handler';
import { ScrollArea } from '@/components/ui/scroll-area';
import React from 'react';

type SearchPageProps = Readonly<{
  params: Promise<{
    term: string;
  }>;
  searchParams: Promise<{
    filter?: string;
  }>;
}>;

export default async function SearchPage(props: SearchPageProps) {
  const { params, searchParams } = props;

  const { term } = await params;
  const { filter: filterParams } = await searchParams;

  const filter = FilterHandler.sanitize(filterParams);

  return (
    <ScrollArea className="main-view rounded-lg min-h-full flex-1 before:content-[none] relative">
      <div className="flex items-center gap-3 flex-wrap sticky bg-background-elevation-1 top-0 z-1 px-6 py-3">
        <Filters filter={filter} term={term} />
      </div>

      <div className="px-6 pt-3 pb-10">
        <React.Suspense fallback={<ResultsSkeleton />}>
          <Results filter={filter} term={term} />
        </React.Suspense>
      </div>
    </ScrollArea>
  );
}
