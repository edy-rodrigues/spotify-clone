import { Page } from '@spotify/web-api-ts-sdk';

type Constructor<T = unknown> = {
  page: Page<T>;
  currentPage: number;
  itemsPerPage: number;
};

type PaginationProps = {
  constructor: Constructor;
  props: {
    page: Page<unknown>;
    currentPage: number;
    itemsPerPage: number;
  };
};

export class Pagination {
  public static DEFAULT_PAGE = 1;
  public static DEFAULT_LIMIT = 20;
  private readonly props: PaginationProps['props'];

  public constructor(props: PaginationProps['constructor']) {
    this.props = {
      page: props.page,
      currentPage: props.currentPage,
      itemsPerPage: props.itemsPerPage,
    };
  }

  public get itemsPerPage(): number {
    return this.props.itemsPerPage;
  }

  public get totalItems(): number {
    return this.props.page.total;
  }

  public get totalPages(): number {
    return Math.ceil(this.totalItems / this.props.itemsPerPage);
  }

  public get currentPage(): number {
    return Math.max(1, Math.min(this.props.currentPage, this.totalPages || 1));
  }

  public get startItem(): number {
    return (this.currentPage - 1) * this.props.itemsPerPage + 1;
  }

  public get endItem(): number {
    return Math.min(this.startItem + this.props.itemsPerPage - 1, this.props.page.total);
  }

  public get hasNext(): boolean {
    return this.currentPage < this.totalPages;
  }

  public get hasPrevious(): boolean {
    return this.currentPage > 1;
  }
}
