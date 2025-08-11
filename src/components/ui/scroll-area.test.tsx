import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import * as React from 'react';
import { ScrollArea, ScrollBar } from './scroll-area';

vi.mock('@radix-ui/react-scroll-area', () => {
  return {
    Root: vi.fn(({ children, className, ...props }) => (
      <div data-testid="scroll-area-root" className={className} {...props}>
        {children}
      </div>
    )),
    Viewport: vi.fn(({ children, className, ...props }) => (
      <div data-testid="scroll-area-viewport" className={className} {...props}>
        {children}
      </div>
    )),
    ScrollAreaScrollbar: vi.fn(({ children, className, orientation, ...props }) => (
      <div
        data-testid="scroll-area-scrollbar"
        data-orientation={orientation}
        className={className}
        {...props}
      >
        {children}
      </div>
    )),
    ScrollAreaThumb: vi.fn(({ className, ...props }) => (
      <div data-testid="scroll-area-thumb" className={className} {...props} />
    )),
    Corner: vi.fn(({ ...props }) => <div data-testid="scroll-area-corner" {...props} />),
  };
});

describe('ScrollArea Component', () => {
  it('renders correctly with default props', () => {
    render(
      <ScrollArea>
        <div>Scroll content</div>
      </ScrollArea>,
    );

    expect(screen.getByTestId('scroll-area-root')).toBeInTheDocument();
    expect(screen.getByTestId('scroll-area-viewport')).toBeInTheDocument();
    expect(screen.getByTestId('scroll-area-scrollbar')).toBeInTheDocument();
    expect(screen.getByTestId('scroll-area-thumb')).toBeInTheDocument();
    expect(screen.getByTestId('scroll-area-corner')).toBeInTheDocument();
    expect(screen.getByText('Scroll content')).toBeInTheDocument();
  });

  it('applies custom className to ScrollArea', () => {
    render(
      <ScrollArea className="test-class">
        <div>Scroll content</div>
      </ScrollArea>,
    );

    expect(screen.getByTestId('scroll-area-root')).toHaveClass('test-class');
  });

  it('passes additional props to ScrollArea', () => {
    render(
      <ScrollArea data-custom="test-value">
        <div>Scroll content</div>
      </ScrollArea>,
    );

    expect(screen.getByTestId('scroll-area-root')).toHaveAttribute('data-custom', 'test-value');
  });
});

describe('ScrollBar Component', () => {
  it('renders correctly with default props', () => {
    render(<ScrollBar />);

    expect(screen.getByTestId('scroll-area-scrollbar')).toBeInTheDocument();
    expect(screen.getByTestId('scroll-area-thumb')).toBeInTheDocument();
    expect(screen.getByTestId('scroll-area-scrollbar')).toHaveAttribute(
      'data-orientation',
      'vertical',
    );
  });

  it('applies custom className to ScrollBar', () => {
    render(<ScrollBar className="test-class" />);

    expect(screen.getByTestId('scroll-area-scrollbar')).toHaveClass('test-class');
  });

  it('handles horizontal orientation', () => {
    render(<ScrollBar orientation="horizontal" />);

    expect(screen.getByTestId('scroll-area-scrollbar')).toHaveAttribute(
      'data-orientation',
      'horizontal',
    );
    expect(screen.getByTestId('scroll-area-scrollbar')).toHaveClass('h-3');
    expect(screen.getByTestId('scroll-area-scrollbar')).toHaveClass('flex-col');
  });

  it('handles vertical orientation', () => {
    render(<ScrollBar orientation="vertical" />);

    expect(screen.getByTestId('scroll-area-scrollbar')).toHaveAttribute(
      'data-orientation',
      'vertical',
    );
    expect(screen.getByTestId('scroll-area-scrollbar')).toHaveClass('h-full');
    expect(screen.getByTestId('scroll-area-scrollbar')).toHaveClass('w-3');
  });

  it('passes additional props to ScrollBar', () => {
    render(<ScrollBar data-custom="test-value" />);

    expect(screen.getByTestId('scroll-area-scrollbar')).toHaveAttribute(
      'data-custom',
      'test-value',
    );
  });
});
