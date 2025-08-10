import { AlbumTableRow } from '@/app/[locale]/artists/[artistId]/_components/album-table-row';
import { AlbumsPagination } from '@/app/[locale]/artists/[artistId]/_components/albums-pagination';
import { Table, TableBody } from '@/components/ui/table';
import { SpotifyApiFactory } from '@/infra/spotify-api/spotify-api-factory';
import { Pagination } from '@/utils/pagination';
import { MaxInt } from '@spotify/web-api-ts-sdk';
import React from 'react';

type AlbumsTableProps = {
  page: number;
  limit: number;
  artistId: string;
};

export async function AlbumsTable(props: AlbumsTableProps) {
  const { artistId, page, limit } = props;

  const spotifyApi = SpotifyApiFactory.create();

  const albums = await spotifyApi.artists.albums({
    artistId,
    limit: limit as MaxInt<50>,
    offset: (page - 1) * limit,
  });
  // await new Promise((resolve) => setTimeout(resolve, 3000));

  const pagination = new Pagination({
    page: albums,
    currentPage: page,
    itemsPerPage: limit,
  });

  return (
    <div>
      <Table className="table-fixed">
        <TableBody>
          {albums.items.map((album, index) => (
            <AlbumTableRow
              album={album}
              albumNumber={pagination.startItem + index}
              key={album.id}
            />
          ))}
        </TableBody>
      </Table>
      <AlbumsPagination pagination={pagination} artistId={artistId} />
    </div>
  );
}
