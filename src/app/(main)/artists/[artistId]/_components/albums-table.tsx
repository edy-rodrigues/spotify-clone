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
import Image from 'next/image';

const invoices = [
  {
    invoice: 'INV001',
    paymentStatus: 'Última Saudade - Ao Vivo',
    paymentMethod: '340.611.964',
  },
  {
    invoice: 'INV002',
    paymentStatus: 'Última Saudade - Ao Vivo',
    paymentMethod: '340.611.964',
  },
  {
    invoice: 'INV003',
    paymentStatus: 'Última Saudade - Ao Vivo',
    paymentMethod: '340.611.964',
  },
  {
    invoice: 'INV004',
    paymentStatus: 'Última Saudade - Ao Vivo',
    paymentMethod: '340.611.964',
  },
  {
    invoice: 'INV005',
    paymentStatus: 'Última Saudade - Ao Vivo',
    paymentMethod: '340.611.964',
  },
  {
    invoice: 'INV006',
    paymentStatus: 'Última Saudade - Ao Vivo',
    paymentMethod: '340.611.964',
  },
  {
    invoice: 'INV007',
    paymentStatus: 'Última Saudade - Ao Vivo',
    paymentMethod: '340.611.964',
  },
];

export function AlbumsTable() {
  return (
    <div className="max-w-2xl">
      <Table>
        <TableBody>
          {invoices.map((invoice, index) => (
            <TableRow
              key={invoice.invoice}
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
                <Image
                  src="https://i.scdn.co/image/ab67616d00001e022774b00531d558bc19e12a24"
                  alt="asd"
                  width={40}
                  height={40}
                />
              </TableCell>
              <TableCell>
                <Typography className="text-base">{invoice.paymentStatus}</Typography>
              </TableCell>
              <TableCell>
                <Typography className="text-sm text-text-gray">{invoice.paymentMethod}</Typography>
              </TableCell>
              <TableCell className="text-right">
                <div className="flex justify-end items-center gap-2">
                  <Button size="icon" color="transparent" className="table-add-icon opacity-0">
                    <AddIcon className="size-4" />
                  </Button>
                  <Typography className="text-sm text-text-gray">2:30</Typography>
                  <Button size="icon" color="transparent" className="table-more-options opacity-0">
                    <MoreIcon className="size-4" />
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className="flex items-center mt-3">
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
