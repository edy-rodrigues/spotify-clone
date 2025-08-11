import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import * as React from 'react';
import {
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerHeader,
  DrawerFooter,
  DrawerTitle,
  DrawerDescription,
  DrawerClose,
  DrawerOverlay,
  DrawerPortal,
} from './drawer';

vi.mock('vaul', () => {
  const DrawerRoot = vi.fn(({ children, open, defaultOpen }) => {
    const [isOpen, setIsOpen] = React.useState(open || defaultOpen || false);

    React.useEffect(() => {
      if (open !== undefined) {
        setIsOpen(open);
      }
    }, [open]);

    return (
      <div data-state={isOpen ? 'open' : 'closed'} data-testid="drawer-root">
        {typeof children === 'function' ? children({ open: isOpen }) : children}
      </div>
    );
  });

  return {
    Drawer: {
      Root: DrawerRoot,
      Trigger: vi.fn(({ children, ...props }) => (
        <button data-testid="drawer-trigger" {...props}>
          {children}
        </button>
      )),
      Portal: vi.fn(({ children, ...props }) => (
        <div data-testid="drawer-portal" {...props}>
          {children}
        </div>
      )),
      Overlay: vi.fn(({ children, className, ...props }) => (
        <div data-testid="drawer-overlay" className={className} {...props}>
          {children}
        </div>
      )),
      Content: vi.fn(({ children, className, ...props }) => (
        <div data-testid="drawer-content" className={className} {...props}>
          {children}
        </div>
      )),
      Title: vi.fn(({ children, className, ...props }) => (
        <h2 data-testid="drawer-title" className={className} {...props}>
          {children}
        </h2>
      )),
      Description: vi.fn(({ children, className, ...props }) => (
        <p data-testid="drawer-description" className={className} {...props}>
          {children}
        </p>
      )),
      Close: vi.fn(({ children, ...props }) => (
        <button data-testid="drawer-close" {...props}>
          {children}
        </button>
      )),
    },
  };
});

describe('Drawer Component', () => {
  it('renders Drawer with trigger and content', () => {
    render(
      <Drawer>
        <DrawerTrigger>Open Drawer</DrawerTrigger>
        <DrawerContent>
          <div>Drawer Content</div>
        </DrawerContent>
      </Drawer>,
    );

    expect(screen.getByTestId('drawer-root')).toBeInTheDocument();
    expect(screen.getByTestId('drawer-trigger')).toBeInTheDocument();
    expect(screen.getByText('Open Drawer')).toBeInTheDocument();
    expect(screen.getByTestId('drawer-content')).toBeInTheDocument();
    expect(screen.getByText('Drawer Content')).toBeInTheDocument();
  });

  it('renders DrawerHeader, DrawerTitle and DrawerDescription', () => {
    render(
      <Drawer>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>Drawer Title</DrawerTitle>
            <DrawerDescription>Drawer Description</DrawerDescription>
          </DrawerHeader>
        </DrawerContent>
      </Drawer>,
    );

    expect(screen.getByTestId('drawer-title')).toBeInTheDocument();
    expect(screen.getByText('Drawer Title')).toBeInTheDocument();
    expect(screen.getByTestId('drawer-description')).toBeInTheDocument();
    expect(screen.getByText('Drawer Description')).toBeInTheDocument();
  });

  it('renders DrawerFooter', () => {
    render(
      <Drawer>
        <DrawerContent>
          <DrawerFooter>
            <button>Cancel</button>
            <button>Submit</button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>,
    );

    const footer = screen.getByText('Cancel').closest('div[data-slot="drawer-footer"]');
    expect(footer).toBeInTheDocument();
    expect(screen.getByText('Cancel')).toBeInTheDocument();
    expect(screen.getByText('Submit')).toBeInTheDocument();
  });

  it('renders DrawerClose', () => {
    render(
      <Drawer>
        <DrawerContent>
          <DrawerClose>Close</DrawerClose>
        </DrawerContent>
      </Drawer>,
    );

    expect(screen.getByTestId('drawer-close')).toBeInTheDocument();
    expect(screen.getByText('Close')).toBeInTheDocument();
  });

  it('renders DrawerOverlay', () => {
    render(
      <Drawer>
        <DrawerPortal>
          <DrawerOverlay />
        </DrawerPortal>
      </Drawer>,
    );

    expect(screen.getByTestId('drawer-overlay')).toBeInTheDocument();
  });

  it('applies custom className to DrawerContent', () => {
    render(
      <Drawer>
        <DrawerContent className="test-class">Drawer content</DrawerContent>
      </Drawer>,
    );

    expect(screen.getByTestId('drawer-content')).toHaveClass('test-class');
  });

  it('applies custom className to DrawerTitle', () => {
    render(
      <Drawer>
        <DrawerContent>
          <DrawerTitle className="title-test-class">Drawer Title</DrawerTitle>
        </DrawerContent>
      </Drawer>,
    );

    expect(screen.getByTestId('drawer-title')).toHaveClass('title-test-class');
  });

  it('applies custom className to DrawerDescription', () => {
    render(
      <Drawer>
        <DrawerContent>
          <DrawerDescription className="description-test-class">
            Drawer Description
          </DrawerDescription>
        </DrawerContent>
      </Drawer>,
    );

    expect(screen.getByTestId('drawer-description')).toHaveClass('description-test-class');
  });

  it('applies custom className to DrawerOverlay', () => {
    render(
      <Drawer>
        <DrawerPortal>
          <DrawerOverlay className="overlay-test-class" />
        </DrawerPortal>
      </Drawer>,
    );

    expect(screen.getByTestId('drawer-overlay')).toHaveClass('overlay-test-class');
  });

  it('applies custom className to DrawerHeader', () => {
    render(
      <Drawer>
        <DrawerContent>
          <DrawerHeader className="header-test-class">Header Content</DrawerHeader>
        </DrawerContent>
      </Drawer>,
    );

    const header = screen.getByText('Header Content').closest('div[data-slot="drawer-header"]');
    expect(header).toHaveClass('header-test-class');
  });

  it('applies custom className to DrawerFooter', () => {
    render(
      <Drawer>
        <DrawerContent>
          <DrawerFooter className="footer-test-class">Footer Content</DrawerFooter>
        </DrawerContent>
      </Drawer>,
    );

    const footer = screen.getByText('Footer Content').closest('div[data-slot="drawer-footer"]');
    expect(footer).toHaveClass('footer-test-class');
  });
});
