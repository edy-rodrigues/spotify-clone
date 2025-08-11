import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Button } from './button';

describe('Button', () => {
  it('renders correctly with default props', () => {
    render(<Button>Click me</Button>);

    const button = screen.getByRole('button', { name: /click me/i });
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass('bg-white');
  });

  it('renders with custom className', () => {
    render(<Button className="test-class">Custom Button</Button>);

    const button = screen.getByRole('button', { name: /custom button/i });
    expect(button).toHaveClass('test-class');
  });

  it('applies variant styles correctly', () => {
    render(<Button variant="secondary">Secondary Button</Button>);

    const button = screen.getByRole('button', { name: /secondary button/i });
    expect(button).toHaveClass('bg-background-elevation-4');
  });

  it('applies size styles correctly', () => {
    render(<Button size="lg">Large Button</Button>);

    const button = screen.getByRole('button', { name: /large button/i });
    expect(button).toHaveClass('h-12');
  });

  it('applies color styles correctly', () => {
    render(<Button color="primary">Primary Button</Button>);

    const button = screen.getByRole('button', { name: /primary button/i });
    expect(button).toHaveClass('bg-primary-main');
  });

  it('renders as a child component when asChild is true', () => {
    render(
      <Button asChild>
        <a href="https://example.com">Link Button</a>
      </Button>,
    );

    const link = screen.getByRole('link', { name: /link button/i });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', 'https://example.com');
    expect(link).toHaveClass('bg-white');
  });

  it('passes additional props to the button element', () => {
    render(<Button data-testid="test-button">Test Button</Button>);

    const button = screen.getByTestId('test-button');
    expect(button).toBeInTheDocument();
  });
});
