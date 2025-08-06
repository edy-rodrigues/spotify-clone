import { Typography } from '@/components/data-display/typography/typography';
import { AddIcon } from '@/components/icons/add-icon';
import { MoreIcon } from '@/components/icons/more-icon';
import { PlayIcon } from '@/components/icons/play-icon';
import { Button } from '@/components/ui/button';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';
import { Table, TableBody, TableCell, TableRow } from '@/components/ui/table';
import { Album } from '@/domain/album';
import { Page, SimplifiedAlbum } from '@spotify/web-api-ts-sdk';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

type AlbumsTableProps = {
  albums: Page<SimplifiedAlbum>;
};

export function AlbumsTable(props: AlbumsTableProps) {
  const { albums } = props;

  return (
    <div>
      <Table className="table-fixed">
        <TableBody>
          {albums.items.map((spotifyAlbum, index) => {
            const album = new Album(spotifyAlbum);

            return (
              <TableRow
                key={album.id}
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
                  <Image src={album.image64x64} alt={album.name} width={40} height={40} />
                </TableCell>
                <TableCell>
                  <Link href="#" className="hover:underline">
                    <Typography className="text-base truncate">{album.name}</Typography>
                  </Link>
                  <div className="flex">
                    {album.artists.map((artist, index) => (
                      <React.Fragment key={artist.id}>
                        <Link
                          key={artist.id}
                          href={`/artists/${artist.id}`}
                          className="hover:underline hover:[&>*]:text-white"
                        >
                          <Typography className="text-sm truncate text-text-gray">
                            {artist.name}
                          </Typography>
                        </Link>
                        {index !== album.artists.length - 1 && (
                          <span className="text-text-gray mr-1">,</span>
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                </TableCell>
                <TableCell className="text-right w-32">
                  <div className="flex justify-end items-center gap-2">
                    <Button size="icon" color="transparent" className="table-add-icon opacity-0">
                      <AddIcon className="size-4" />
                    </Button>
                    <Typography className="text-sm text-text-gray">2:30</Typography>
                    <Button
                      size="icon"
                      color="transparent"
                      className="table-more-options opacity-0"
                    >
                      <MoreIcon className="size-4" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
      <div className="flex items-center mt-5">
        <Pagination className="mx-0 justify-start w-fit">
          <PaginationContent className="gap-3">
            <PaginationItem>
              <PaginationPrevious href="#" />
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href="#" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
        <Typography className="whitespace-nowrap ml-3 text-text-gray">Página 1 de 10</Typography>
      </div>
    </div>
  );
}
