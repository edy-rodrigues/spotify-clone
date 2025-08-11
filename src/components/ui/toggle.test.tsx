import { render, screen } from '@testing-library/react';
import React from 'react';
import { describe, expect, it, vi } from 'vitest';
import { Toggle, toggleVariants } from './toggle';

vi.mock('@radix-ui/react-toggle', () => ({
  Root: vi.fn(({ children, className, pressed, defaultPressed, onPressedChange, ...props }) => {
    const [isPressed, setIsPressed] = React.useState(
      pressed !== undefined ? pressed : defaultPressed || false,
    );

    React.useEffect(() => {
      if (pressed !== undefined) {
        setIsPressed(pressed);
      }
    }, [pressed]);

    const handleClick = () => {
      const newPressed = !isPressed;
      setIsPressed(newPressed);
      onPressedChange?.(newPressed);
    };

    return (
      <button
        type="button"
        aria-pressed={isPressed}
        data-state={isPressed ? 'on' : 'off'}
        className={className}
        onClick={handleClick}
        {...props}
      >
        {children}
      </button>
    );
  }),
}));

describe('Toggle Component', () => {
  it('renders correctly with default props', () => {
    render(<Toggle>Toggle</Toggle>);

    const toggle = screen.getByRole('button', { name: 'Toggle' });
    expect(toggle).toBeInTheDocument();
    expect(toggle).toHaveAttribute('data-slot', 'toggle');
    expect(toggle).toHaveAttribute('data-state', 'off');
    expect(toggle).toHaveAttribute('aria-pressed', 'false');
  });

  it('applies custom className', () => {
    render(<Toggle className="test-class">Toggle</Toggle>);

    const toggle = screen.getByRole('button', { name: 'Toggle' });
    expect(toggle).toHaveClass('test-class');
  });

  it('handles pressed state', () => {
    render(<Toggle pressed>Toggle</Toggle>);

    const toggle = screen.getByRole('button', { name: 'Toggle' });
    expect(toggle).toHaveAttribute('data-state', 'on');
    expect(toggle).toHaveAttribute('aria-pressed', 'true');
  });

  it('handles defaultPressed state', () => {
    render(<Toggle defaultPressed>Toggle</Toggle>);

    const toggle = screen.getByRole('button', { name: 'Toggle' });
    expect(toggle).toHaveAttribute('data-state', 'on');
    expect(toggle).toHaveAttribute('aria-pressed', 'true');
  });

  it('applies variant styles correctly', () => {
    render(<Toggle variant="outline">Toggle</Toggle>);

    const toggle = screen.getByRole('button', { name: 'Toggle' });
    expect(toggle).toHaveClass('border');
    expect(toggle).toHaveClass('border-input');
  });

  it('applies size styles correctly', () => {
    render(<Toggle size="sm">Toggle</Toggle>);

    const toggle = screen.getByRole('button', { name: 'Toggle' });
    expect(toggle).toHaveClass('h-8');
    expect(toggle).toHaveClass('px-3');
  });

  it('applies disabled state correctly', () => {
    render(<Toggle disabled>Toggle</Toggle>);

    const toggle = screen.getByRole('button', { name: 'Toggle' });
    expect(toggle).toBeDisabled();
  });
});

describe('toggleVariants function', () => {
  it('returns default variant and size classes when no options provided', () => {
    const className = toggleVariants({});

    expect(className).toContain('bg-background-elevation-4');
    expect(className).toContain('h-9');
  });

  it('returns correct classes for outline variant', () => {
    const className = toggleVariants({ variant: 'outline' });

    expect(className).toContain('border');
    expect(className).toContain('border-input');
    expect(className).toContain('bg-transparent');
  });

  it('returns correct classes for sm size', () => {
    const className = toggleVariants({ size: 'sm' });

    expect(className).toContain('h-8');
    expect(className).toContain('px-3');
  });

  it('returns correct classes for lg size', () => {
    const className = toggleVariants({ size: 'lg' });

    expect(className).toContain('h-10');
    expect(className).toContain('px-2.5');
  });

  it('combines variant, size and custom className', () => {
    const className = toggleVariants({
      variant: 'outline',
      size: 'lg',
      className: 'custom-class',
    });

    expect(className).toContain('border');
    expect(className).toContain('h-10');
    expect(className).toContain('custom-class');
  });
});
