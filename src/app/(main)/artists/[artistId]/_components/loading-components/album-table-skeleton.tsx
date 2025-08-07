import { Typography } from '@/components/data-display/typography/typography';
import { PlayIcon } from '@/components/icons/play-icon';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableRow } from '@/components/ui/table';
import React from 'react';

export function AlbumTableSkeleton() {
  return (
    <div className="animate-pulse">
      <Table className="table-fixed">
        <TableBody>
          {Array.from({ length: 20 }).map((_, index) => {
            return (
              <TableRow
                key={index}
                className="hover:[&_.table-more-options]:opacity-100 hover:[&_.table-play-icon]:flex hover:[&_.table-count]:hidden hover:[&_.table-add-icon]:opacity-100"
              >
                <TableCell className="w-10 text-center">
                  <Typography className="table-count font-text-2 text-base text-text-gray">
                    {index + 1}
                  </Typography>
                  <Button
                    size="icon"
                    color="transparent"
                    className="table-play-icon size-6 hidden fill-white"
                  >
                    <PlayIcon className="size-4" />
                  </Button>
                </TableCell>
                <TableCell className="w-14">
                  <span className="flex size-10 rounded-lg bg-gray-400" />
                </TableCell>
                <TableCell>
                  <span className="flex h-4 w-60 bg-gray-400 rounded-lg" />
                  <div className="flex">
                    <span className="h-2 w-30 bg-gray-400 rounded-lg mt-2" />
                  </div>
                </TableCell>
                <TableCell className="text-right w-32">
                  <div className="flex justify-end items-center gap-2">
                    <span className="size-4 bg-gray-400 rounded-full" />
                    <span className="h-4 w-20 bg-gray-400 rounded-lg" />
                    <span className="size-4 bg-gray-400 rounded-full" />
                  </div>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
      <div className="flex items-center gap-4 mt-4">
        <span className="size-6 bg-gray-400 rounded-full" />
        <span className="size-6 bg-gray-400 rounded-full" />
        <span className="h-4 w-20 bg-gray-400 rounded-lg" />
      </div>
    </div>
  );
}
