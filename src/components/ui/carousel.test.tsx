import { render, screen } from '@testing-library/react';
import * as React from 'react';
import { describe, expect, it, vi } from 'vitest';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from './carousel';

vi.mock('embla-carousel-react', () => {
  const api = {
    canScrollPrev: vi.fn().mockReturnValue(true),
    canScrollNext: vi.fn().mockReturnValue(true),
    scrollPrev: vi.fn(),
    scrollNext: vi.fn(),
    on: vi.fn(),
    off: vi.fn(),
  };

  return {
    default: vi.fn().mockReturnValue([{ current: null }, api]),
  };
});

describe('Carousel Component', () => {
  it('renders correctly with default props', () => {
    render(
      <Carousel>
        <CarouselContent>
          <CarouselItem>Item 1</CarouselItem>
          <CarouselItem>Item 2</CarouselItem>
        </CarouselContent>
      </Carousel>,
    );

    const carousel = screen.getByRole('region', { name: '' });
    expect(carousel).toBeInTheDocument();
    expect(carousel).toHaveAttribute('aria-roledescription', 'carousel');

    const items = screen.getAllByText(/Item \d/);
    expect(items).toHaveLength(2);
  });

  it('renders navigation buttons', () => {
    render(
      <Carousel>
        <CarouselContent>
          <CarouselItem>Item 1</CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>,
    );

    const prevButton = screen.getByRole('button', { name: /previous/i });
    const nextButton = screen.getByRole('button', { name: /next/i });

    expect(prevButton).toBeInTheDocument();
    expect(nextButton).toBeInTheDocument();
  });

  it('applies custom className to carousel', () => {
    render(
      <Carousel className="test-class">
        <CarouselContent>
          <CarouselItem>Item 1</CarouselItem>
        </CarouselContent>
      </Carousel>,
    );

    const carousel = screen.getByRole('region', { name: '' });
    expect(carousel).toHaveClass('test-class');
  });

  it('applies custom className to carousel content', () => {
    render(
      <Carousel>
        <CarouselContent className="content-test-class">
          <CarouselItem>Item 1</CarouselItem>
        </CarouselContent>
      </Carousel>,
    );

    const content = screen
      .getByText('Item 1')
      ?.closest('div[data-slot="carousel-content"]')
      ?.querySelector('div');
    expect(content).toHaveClass('content-test-class');
  });

  it('applies custom className to carousel item', () => {
    render(
      <Carousel>
        <CarouselContent>
          <CarouselItem className="item-test-class">Item 1</CarouselItem>
        </CarouselContent>
      </Carousel>,
    );

    const item = screen.getByText('Item 1').closest('div');
    expect(item).toHaveClass('item-test-class');
  });
});
