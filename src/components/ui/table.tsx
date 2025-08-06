'use client';

import { cn } from '@/utils/cn';
import React from 'react';

type TableProps = React.ComponentProps<'table'>;

export function Table(props: TableProps) {
  const { className, ...rest } = props;

  return (
    <div data-slot="table-container" className="relative w-full overflow-x-auto">
      <table data-slot="table" className={cn('w-full text-sm', className)} {...rest} />
    </div>
  );
}

type TableHeaderProps = React.ComponentProps<'thead'>;

export function TableHeader(props: TableHeaderProps) {
  const { className, ...rest } = props;

  return <thead data-slot="table-header" className={cn(className)} {...rest} />;
}

type TableBodyProps = React.ComponentProps<'tbody'>;

export function TableBody(props: TableBodyProps) {
  const { className, ...rest } = props;

  return <tbody data-slot="table-body" className={cn(className)} {...rest} />;
}

type TableFooterProps = React.ComponentProps<'tfoot'>;

export function TableFooter(props: TableFooterProps) {
  const { className, ...rest } = props;

  return <tfoot data-slot="table-footer" className={cn('font-medium', className)} {...rest} />;
}

type TableRowProps = React.ComponentProps<'tr'>;

export function TableRow(props: TableRowProps) {
  const { className, ...rest } = props;

  return <tr data-slot="table-row" className={cn('group', className)} {...rest} />;
}

type TableHeadProps = React.ComponentProps<'th'>;

export function TableHead(props: TableHeadProps) {
  const { className, ...rest } = props;

  return (
    <th
      data-slot="table-head"
      className={cn(
        'h-10 px-2 text-left align-middle whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]',
        className,
      )}
      {...rest}
    />
  );
}

type TableCellProps = React.ComponentProps<'td'>;

export function TableCell(props: TableCellProps) {
  const { className, ...rest } = props;

  return (
    <td
      data-slot="table-cell"
      className={cn(
        'p-2 align-middle whitespace-nowrap transition-colors',
        'group-hover:bg-white/10 group-data-[state=selected]:bg-white/10',
        'first:rounded-l-lg last:rounded-r-lg',
        '[&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]',
        className,
      )}
      {...rest}
    />
  );
}

type TableCaptionProps = React.ComponentProps<'caption'>;

export function TableCaption(props: TableCaptionProps) {
  const { className, ...rest } = props;

  return (
    <caption
      data-slot="table-caption"
      className={cn('text-divider mt-4 text-sm', className)}
      {...rest}
    />
  );
}
