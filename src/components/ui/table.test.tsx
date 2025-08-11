import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableRow,
  TableHead,
  TableCell,
  TableCaption,
} from './table';

describe('Table Components', () => {
  describe('Table', () => {
    it('renders correctly with default props', () => {
      render(<Table />);

      const tableContainer = screen.getByRole('table').closest('div[data-slot="table-container"]');
      expect(tableContainer).toBeInTheDocument();
      expect(screen.getByRole('table')).toBeInTheDocument();
      expect(screen.getByRole('table')).toHaveAttribute('data-slot', 'table');
    });

    it('applies custom className to table', () => {
      render(<Table className="test-class" />);

      expect(screen.getByRole('table')).toHaveClass('test-class');
    });

    it('passes additional props to table', () => {
      render(<Table data-testid="test-table" />);

      expect(screen.getByTestId('test-table')).toBeInTheDocument();
    });
  });

  describe('TableHeader', () => {
    it('renders correctly with default props', () => {
      render(
        <Table>
          <TableHeader />
        </Table>,
      );

      const header = screen.getByRole('rowgroup');
      expect(header).toBeInTheDocument();
      expect(header).toHaveAttribute('data-slot', 'table-header');
    });

    it('applies custom className to thead', () => {
      render(
        <Table>
          <TableHeader className="test-class" />
        </Table>,
      );

      expect(screen.getByRole('rowgroup')).toHaveClass('test-class');
    });
  });

  describe('TableBody', () => {
    it('renders correctly with default props', () => {
      render(
        <Table>
          <TableBody />
        </Table>,
      );

      const body = screen.getByRole('rowgroup');
      expect(body).toBeInTheDocument();
      expect(body).toHaveAttribute('data-slot', 'table-body');
    });

    it('applies custom className to tbody', () => {
      render(
        <Table>
          <TableBody className="test-class" />
        </Table>,
      );

      expect(screen.getByRole('rowgroup')).toHaveClass('test-class');
    });
  });

  describe('TableFooter', () => {
    it('renders correctly with default props', () => {
      render(
        <Table>
          <TableFooter />
        </Table>,
      );

      const footer = screen.getByRole('rowgroup');
      expect(footer).toBeInTheDocument();
      expect(footer).toHaveAttribute('data-slot', 'table-footer');
    });

    it('applies custom className to tfoot', () => {
      render(
        <Table>
          <TableFooter className="test-class" />
        </Table>,
      );

      expect(screen.getByRole('rowgroup')).toHaveClass('test-class');
    });
  });

  describe('TableRow', () => {
    it('renders correctly with default props', () => {
      render(
        <Table>
          <TableBody>
            <TableRow />
          </TableBody>
        </Table>,
      );

      const row = screen.getByRole('row');
      expect(row).toBeInTheDocument();
      expect(row).toHaveAttribute('data-slot', 'table-row');
    });

    it('applies custom className to tr', () => {
      render(
        <Table>
          <TableBody>
            <TableRow className="test-class" />
          </TableBody>
        </Table>,
      );

      expect(screen.getByRole('row')).toHaveClass('test-class');
    });
  });

  describe('TableHead', () => {
    it('renders correctly with default props', () => {
      render(
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Header</TableHead>
            </TableRow>
          </TableHeader>
        </Table>,
      );

      const head = screen.getByRole('columnheader');
      expect(head).toBeInTheDocument();
      expect(head).toHaveAttribute('data-slot', 'table-head');
      expect(head).toHaveTextContent('Header');
    });

    it('applies custom className to th', () => {
      render(
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="test-class">Header</TableHead>
            </TableRow>
          </TableHeader>
        </Table>,
      );

      expect(screen.getByRole('columnheader')).toHaveClass('test-class');
    });
  });

  describe('TableCell', () => {
    it('renders correctly with default props', () => {
      render(
        <Table>
          <TableBody>
            <TableRow>
              <TableCell>Cell</TableCell>
            </TableRow>
          </TableBody>
        </Table>,
      );

      const cell = screen.getByRole('cell');
      expect(cell).toBeInTheDocument();
      expect(cell).toHaveAttribute('data-slot', 'table-cell');
      expect(cell).toHaveTextContent('Cell');
    });

    it('applies custom className to td', () => {
      render(
        <Table>
          <TableBody>
            <TableRow>
              <TableCell className="test-class">Cell</TableCell>
            </TableRow>
          </TableBody>
        </Table>,
      );

      expect(screen.getByRole('cell')).toHaveClass('test-class');
    });
  });

  describe('TableCaption', () => {
    it('renders correctly with default props', () => {
      render(
        <Table>
          <TableCaption>Caption</TableCaption>
        </Table>,
      );

      const caption = screen.getByText('Caption');
      expect(caption).toBeInTheDocument();
      expect(caption).toHaveAttribute('data-slot', 'table-caption');
    });

    it('applies custom className to caption', () => {
      render(
        <Table>
          <TableCaption className="test-class">Caption</TableCaption>
        </Table>,
      );

      expect(screen.getByText('Caption')).toHaveClass('test-class');
    });
  });

  describe('Complete Table', () => {
    it('renders a complete table with all components', () => {
      render(
        <Table>
          <TableCaption>Table Caption</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>Header 1</TableHead>
              <TableHead>Header 2</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>Cell 1-1</TableCell>
              <TableCell>Cell 1-2</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Cell 2-1</TableCell>
              <TableCell>Cell 2-2</TableCell>
            </TableRow>
          </TableBody>
          <TableFooter>
            <TableRow>
              <TableCell>Footer 1</TableCell>
              <TableCell>Footer 2</TableCell>
            </TableRow>
          </TableFooter>
        </Table>,
      );

      expect(screen.getByText('Table Caption')).toBeInTheDocument();
      expect(screen.getByText('Header 1')).toBeInTheDocument();
      expect(screen.getByText('Header 2')).toBeInTheDocument();
      expect(screen.getByText('Cell 1-1')).toBeInTheDocument();
      expect(screen.getByText('Cell 1-2')).toBeInTheDocument();
      expect(screen.getByText('Cell 2-1')).toBeInTheDocument();
      expect(screen.getByText('Cell 2-2')).toBeInTheDocument();
      expect(screen.getByText('Footer 1')).toBeInTheDocument();
      expect(screen.getByText('Footer 2')).toBeInTheDocument();
    });
  });
});
