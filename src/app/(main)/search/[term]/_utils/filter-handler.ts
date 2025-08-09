import { Filter, FilterEnum } from '@/app/(main)/search/[term]/_types/filters';

export class FilterHandler {
  public static validate(filter: string): boolean {
    return Object.values(FilterEnum).includes(filter as FilterEnum);
  }

  public static sanitize(filter?: string): Filter {
    if (!filter) {
      return FilterEnum.ALL;
    }

    const isValid = this.validate(filter);

    if (!isValid) {
      return FilterEnum.ALL;
    }

    return filter as Filter;
  }

  public static getValue(filter: Filter): Filter[] {
    if (filter !== 'all') {
      return [filter];
    }

    const values = Object.values(FilterEnum);

    values.shift();

    return values;
  }
}
