import { Filters } from '@/app/(main)/search/[term]/_components/filters';
import { Results } from '@/app/(main)/search/[term]/_components/results';
import { FilterHandler } from '@/app/(main)/search/[term]/_utils/filter-handler';

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
    <div className="main-view rounded-lg min-h-full flex-1 before:content-[none] p-6">
      <div className="flex items-center gap-3 flex-wrap">
        <Filters filter={filter} term={term} />
        <Results filter={filter} term={term} />
      </div>
    </div>
  );
}
