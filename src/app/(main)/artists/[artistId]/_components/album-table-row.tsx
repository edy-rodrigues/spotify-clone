import { Typography } from '@/components/data-display/typography';
import { AddIcon } from '@/components/icons/add-icon';
import { MoreIcon } from '@/components/icons/more-icon';
import { PlayIcon } from '@/components/icons/play-icon';
import { Button } from '@/components/ui/button';
import { TableCell, TableRow } from '@/components/ui/table';
import { Album } from '@/domain/album';
import { SimplifiedAlbum } from '@spotify/web-api-ts-sdk';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

type AlbumTableRowProps = {
  album: SimplifiedAlbum;
  albumNumber: number;
};

export function AlbumTableRow(props: AlbumTableRowProps) {
  const { album: spotifyAlbum, albumNumber } = props;

  const album = new Album(spotifyAlbum);

  return (
    <TableRow
      key={album.id}
      className="hover:[&_.table-more-options]:opacity-100 hover:[&_.table-play-icon]:flex hover:[&_.table-count]:hidden hover:[&_.table-add-icon]:opacity-100"
    >
      <TableCell className="w-10 text-center">
        <Typography className="table-count font-text-2 text-base text-text-gray">
          {albumNumber}
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
        <div className="flex items-center overflow-x-hidden">
          {album.artists.map((artist, index) => (
            <React.Fragment key={artist.id}>
              <Link
                key={artist.id}
                href={`/artists/${artist.id}`}
                className="hover:underline hover:[&>*]:text-white"
              >
                <Typography className="text-sm truncate text-text-gray">{artist.name}</Typography>
              </Link>
              {index !== album.artists.length - 1 && <span className="text-text-gray mr-1">,</span>}
            </React.Fragment>
          ))}
        </div>
      </TableCell>
      <TableCell className="text-right w-32">
        <div className="flex justify-end items-center gap-2">
          <Button size="icon" color="transparent" className="table-add-icon opacity-0">
            <AddIcon className="size-4" />
          </Button>
          <Typography className="text-sm text-text-gray">{album.albumType}</Typography>
          <Button size="icon" color="transparent" className="table-more-options opacity-0">
            <MoreIcon className="size-4" />
          </Button>
        </div>
      </TableCell>
    </TableRow>
  );
}
