import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Input } from './input';

describe('Input Component', () => {
  it('renders correctly with default props', () => {
    render(<Input placeholder="Enter text" />);

    const input = screen.getByPlaceholderText('Enter text');
    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute('type', 'text');
    expect(input).toHaveAttribute('data-slot', 'input');
  });

  it('applies custom className', () => {
    render(<Input className="test-class" placeholder="Enter text" />);

    const input = screen.getByPlaceholderText('Enter text');
    expect(input).toHaveClass('test-class');
  });

  it('handles different input types', () => {
    render(<Input type="password" placeholder="Enter password" />);

    const input = screen.getByPlaceholderText('Enter password');
    expect(input).toHaveAttribute('type', 'password');
  });

  it('handles disabled state', () => {
    render(<Input disabled placeholder="Disabled input" />);

    const input = screen.getByPlaceholderText('Disabled input');
    expect(input).toBeDisabled();
  });

  it('passes additional props to the input element', () => {
    render(<Input data-testid="test-input" placeholder="Test input" maxLength={10} />);

    const input = screen.getByTestId('test-input');
    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute('maxLength', '10');
  });

  it('handles user input correctly', () => {
    render(<Input placeholder="Type here" />);

    const input: HTMLInputElement = screen.getByPlaceholderText('Type here');

    input.value = 'Hello, world!';

    const inputEvent = new Event('input', { bubbles: true });
    input.dispatchEvent(inputEvent);

    expect(input).toHaveValue('Hello, world!');
  });

  it('handles required attribute', () => {
    render(<Input required placeholder="Required input" />);

    const input = screen.getByPlaceholderText('Required input');
    expect(input).toHaveAttribute('required');
  });

  it('handles aria-invalid attribute', () => {
    render(<Input aria-invalid={true} placeholder="Invalid input" />);

    const input = screen.getByPlaceholderText('Invalid input');
    expect(input).toHaveAttribute('aria-invalid', 'true');
  });
});
