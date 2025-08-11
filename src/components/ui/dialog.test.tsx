import { render, screen } from '@testing-library/react';
import * as React from 'react';
import { describe, expect, it, vi } from 'vitest';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from './dialog';

vi.mock('@radix-ui/react-dialog', () => {
  const DialogRoot = vi.fn(({ children, open, defaultOpen }) => {
    const [isOpen, setIsOpen] = React.useState(open || defaultOpen || false);

    React.useEffect(() => {
      if (open !== undefined) {
        setIsOpen(open);
      }
    }, [open]);

    return (
      <div data-state={isOpen ? 'open' : 'closed'} data-testid="dialog-root">
        {typeof children === 'function' ? children({ open: isOpen }) : children}
      </div>
    );
  });

  return {
    Root: DialogRoot,
    Trigger: vi.fn(({ children, ...props }) => (
      <button data-testid="dialog-trigger" {...props}>
        {children}
      </button>
    )),
    Portal: vi.fn(({ children, ...props }) => (
      <div data-testid="dialog-portal" {...props}>
        {children}
      </div>
    )),
    Overlay: vi.fn(({ children, className, ...props }) => (
      <div data-testid="dialog-overlay" className={className} {...props}>
        {children}
      </div>
    )),
    Content: vi.fn(({ children, className, ...props }) => (
      <div data-testid="dialog-content" className={className} {...props}>
        {children}
      </div>
    )),
    Title: vi.fn(({ children, className, ...props }) => (
      <h2 data-testid="dialog-title" className={className} {...props}>
        {children}
      </h2>
    )),
    Description: vi.fn(({ children, className, ...props }) => (
      <p data-testid="dialog-description" className={className} {...props}>
        {children}
      </p>
    )),
    Close: vi.fn(({ children, asChild, ...props }) => {
      if (asChild && React.isValidElement(children)) {
        return React.cloneElement(children, {
          'data-testid': 'dialog-close',
          ...props,
        });
      }
      return (
        <button data-testid="dialog-close" {...props}>
          {children}
        </button>
      );
    }),
  };
});

describe('Dialog Component', () => {
  it('renders Dialog with trigger and content', () => {
    render(
      <Dialog>
        <DialogTrigger>Open Dialog</DialogTrigger>
        <DialogContent>
          <div>Dialog Content</div>
        </DialogContent>
      </Dialog>,
    );

    expect(screen.getByTestId('dialog-root')).toBeInTheDocument();
    expect(screen.getByTestId('dialog-trigger')).toBeInTheDocument();
    expect(screen.getByText('Open Dialog')).toBeInTheDocument();
    expect(screen.getByTestId('dialog-content')).toBeInTheDocument();
    expect(screen.getByText('Dialog Content')).toBeInTheDocument();
  });

  it('renders DialogHeader, DialogTitle and DialogDescription', () => {
    render(
      <Dialog>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Dialog Title</DialogTitle>
            <DialogDescription>Dialog Description</DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>,
    );

    expect(screen.getByTestId('dialog-title')).toBeInTheDocument();
    expect(screen.getByText('Dialog Title')).toBeInTheDocument();
    expect(screen.getByTestId('dialog-description')).toBeInTheDocument();
    expect(screen.getByText('Dialog Description')).toBeInTheDocument();
  });

  it('renders DialogFooter', () => {
    render(
      <Dialog>
        <DialogContent>
          <DialogFooter>
            <button>Cancel</button>
            <button>Submit</button>
          </DialogFooter>
        </DialogContent>
      </Dialog>,
    );

    const footer = screen.getByText('Cancel').closest('div[data-slot="dialog-footer"]');
    expect(footer).toBeInTheDocument();
    expect(screen.getByText('Cancel')).toBeInTheDocument();
    expect(screen.getByText('Submit')).toBeInTheDocument();
  });

  it('renders close button by default in DialogContent', () => {
    render(
      <Dialog>
        <DialogContent>Dialog content</DialogContent>
      </Dialog>,
    );

    expect(screen.getByTestId('dialog-close')).toBeInTheDocument();
    expect(screen.getByText('Close')).toBeInTheDocument();
  });

  it('does not render close button when showCloseButton is false', () => {
    render(
      <Dialog>
        <DialogContent showCloseButton={false}>Dialog content</DialogContent>
      </Dialog>,
    );

    expect(screen.queryByTestId('dialog-close')).not.toBeInTheDocument();
  });

  it('applies custom className to DialogContent', () => {
    render(
      <Dialog>
        <DialogContent className="test-class">Dialog content</DialogContent>
      </Dialog>,
    );

    expect(screen.getByTestId('dialog-content')).toHaveClass('test-class');
  });

  it('applies custom className to DialogTitle', () => {
    render(
      <Dialog>
        <DialogContent>
          <DialogTitle className="title-test-class">Dialog Title</DialogTitle>
        </DialogContent>
      </Dialog>,
    );

    expect(screen.getByTestId('dialog-title')).toHaveClass('title-test-class');
  });

  it('applies custom className to DialogDescription', () => {
    render(
      <Dialog>
        <DialogContent>
          <DialogDescription className="description-test-class">
            Dialog Description
          </DialogDescription>
        </DialogContent>
      </Dialog>,
    );

    expect(screen.getByTestId('dialog-description')).toHaveClass('description-test-class');
  });
});
