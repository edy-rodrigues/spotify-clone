import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationPrevious,
  PaginationNext,
  PaginationEllipsis,
} from './pagination';

vi.mock('@/i18n/navigation', () => ({
  Link: vi.fn(({ href, className, children, 'aria-label': ariaLabel, ...rest }) => (
    <a href={href} className={className} aria-label={ariaLabel} {...rest}>
      {children}
    </a>
  )),
}));

vi.mock('@/components/icons/chevron-left', () => ({
  ChevronLeftIcon: vi.fn(({ className }) => (
    <svg className={className} data-testid="chevron-left-icon" />
  )),
}));

vi.mock('@/components/icons/chevron-right', () => ({
  ChevronRightIcon: vi.fn(({ className }) => (
    <svg className={className} data-testid="chevron-right-icon" />
  )),
}));

vi.mock('@/components/icons/more-icon', () => ({
  MoreIcon: vi.fn(({ className }) => <svg className={className} data-testid="more-icon" />),
}));

vi.mock('@/components/ui/button', () => ({
  buttonVariants: vi.fn(() => 'button-variant-class'),
}));

describe('Pagination Components', () => {
  describe('Pagination', () => {
    it('renders correctly with default props', () => {
      render(<Pagination />);

      const nav = screen.getByRole('navigation');
      expect(nav).toBeInTheDocument();
      expect(nav).toHaveAttribute('aria-label', 'pagination');
      expect(nav).toHaveAttribute('data-slot', 'pagination');
    });

    it('applies custom className', () => {
      render(<Pagination className="test-class" />);

      const nav = screen.getByRole('navigation');
      expect(nav).toHaveClass('test-class');
    });
  });

  describe('PaginationContent', () => {
    it('renders correctly with default props', () => {
      render(<PaginationContent />);

      const ul = screen.getByRole('list');
      expect(ul).toBeInTheDocument();
      expect(ul).toHaveAttribute('data-slot', 'pagination-content');
    });

    it('applies custom className', () => {
      render(<PaginationContent className="test-class" />);

      const ul = screen.getByRole('list');
      expect(ul).toHaveClass('test-class');
    });
  });

  describe('PaginationItem', () => {
    it('renders correctly with default props', () => {
      render(<PaginationItem>Item</PaginationItem>);

      const li = screen.getByText('Item');
      expect(li).toBeInTheDocument();
      expect(li).toHaveAttribute('data-slot', 'pagination-item');
    });

    it('applies custom className', () => {
      render(<PaginationItem className="test-class">Item</PaginationItem>);

      const li = screen.getByText('Item');
      expect(li).toHaveClass('test-class');
    });
  });

  describe('PaginationLink', () => {
    it('renders correctly with default props', () => {
      render(<PaginationLink href="/page/1">Page 1</PaginationLink>);

      const link = screen.getByText('Page 1');
      expect(link).toBeInTheDocument();
      expect(link).toHaveAttribute('href', '/page/1');
      expect(link).toHaveAttribute('data-slot', 'pagination-link');
    });

    it('applies isActive state correctly', () => {
      render(
        <PaginationLink href="/page/1" isActive>
          Page 1
        </PaginationLink>,
      );

      const link = screen.getByText('Page 1');
      expect(link).toHaveAttribute('aria-current', 'page');
      expect(link).toHaveAttribute('data-active', 'true');
    });

    it('applies custom className', () => {
      render(
        <PaginationLink href="/page/1" className="test-class">
          Page 1
        </PaginationLink>,
      );

      const link = screen.getByText('Page 1');
      expect(link).toHaveClass('test-class');
    });
  });

  describe('PaginationPrevious', () => {
    it('renders correctly with default props', () => {
      render(<PaginationPrevious href="/page/1" />);

      const link = screen.getByLabelText('Go to previous page');
      expect(link).toBeInTheDocument();
      expect(link).toHaveAttribute('href', '/page/1');
      expect(screen.getByTestId('chevron-left-icon')).toBeInTheDocument();
      expect(screen.getByText('Previous')).toBeInTheDocument();
    });

    it('applies custom className', () => {
      render(<PaginationPrevious href="/page/1" className="test-class" />);

      const link = screen.getByLabelText('Go to previous page');
      expect(link).toHaveClass('test-class');
    });
  });

  describe('PaginationNext', () => {
    it('renders correctly with default props', () => {
      render(<PaginationNext href="/page/2" />);

      const link = screen.getByLabelText('Go to next page');
      expect(link).toBeInTheDocument();
      expect(link).toHaveAttribute('href', '/page/2');
      expect(screen.getByTestId('chevron-right-icon')).toBeInTheDocument();
      expect(screen.getByText('Next')).toBeInTheDocument();
    });

    it('applies custom className', () => {
      render(<PaginationNext href="/page/2" className="test-class" />);

      const link = screen.getByLabelText('Go to next page');
      expect(link).toHaveClass('test-class');
    });
  });

  describe('PaginationEllipsis', () => {
    it('renders correctly with default props', () => {
      render(<PaginationEllipsis />);

      const ellipsis = screen.getByText('More pages');
      expect(ellipsis.parentElement).toHaveAttribute('aria-hidden');
      expect(ellipsis.parentElement).toHaveAttribute('data-slot', 'pagination-ellipsis');
      expect(screen.getByTestId('more-icon')).toBeInTheDocument();
    });

    it('applies custom className', () => {
      render(<PaginationEllipsis className="test-class" />);

      const ellipsis = screen.getByText('More pages');
      expect(ellipsis.parentElement).toHaveClass('test-class');
    });
  });

  describe('Full Pagination Example', () => {
    it('renders a complete pagination component', () => {
      render(
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href="/page/1" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="/page/1">1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="/page/2" isActive>
                2
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="/page/3">3</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href="/page/3" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>,
      );

      expect(screen.getByRole('navigation')).toBeInTheDocument();
      expect(screen.getByRole('list')).toBeInTheDocument();
      expect(screen.getAllByRole('listitem')).toHaveLength(6);
      expect(screen.getByText('1')).toBeInTheDocument();
      expect(screen.getByText('2')).toBeInTheDocument();
      expect(screen.getByText('3')).toBeInTheDocument();
      expect(screen.getByLabelText('Go to previous page')).toBeInTheDocument();
      expect(screen.getByLabelText('Go to next page')).toBeInTheDocument();
      expect(screen.getByText('More pages')).toBeInTheDocument();
    });
  });
});
