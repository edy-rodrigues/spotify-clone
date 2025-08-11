import { render, screen } from '@testing-library/react';

import * as React from 'react';
import { describe, expect, it, vi } from 'vitest';
import { ToggleGroup, ToggleGroupItem } from './toggle-group';

vi.mock('@radix-ui/react-toggle-group', () => {
  return {
    Root: vi.fn(({ children, className, type, value, defaultValue, onValueChange, ...props }) => {
      const [selectedValue, setSelectedValue] = React.useState(
        value !== undefined ? value : defaultValue || '',
      );

      React.useEffect(() => {
        if (value !== undefined) {
          setSelectedValue(value);
        }
      }, [value]);

      const handleValueChange = (newValue: string) => {
        if (type === 'single') {
          setSelectedValue(newValue);
        } else if (type === 'multiple') {
          setSelectedValue((prev: string[]) => {
            if (prev.includes(newValue)) {
              return prev.filter((v) => v !== newValue);
            } else {
              return [...prev, newValue];
            }
          });
        }
        onValueChange?.(newValue);
      };

      return (
        <div className={className} data-type={type} {...props}>
          {React.Children.map(children, (child) => {
            if (React.isValidElement(child)) {
              return React.cloneElement<{
                selectedValue: string;
                onSelect: (value: string) => void;
              }>(child as never, {
                selectedValue,
                onSelect: handleValueChange,
              });
            }
            return child;
          })}
        </div>
      );
    }),
    Item: vi.fn(({ children, className, value, selectedValue, onSelect, ...props }) => {
      const isSelected = Array.isArray(selectedValue)
        ? selectedValue.includes(value)
        : selectedValue === value;

      const handleClick = () => {
        onSelect?.(value);
      };

      return (
        <button
          type="button"
          role="tab"
          aria-selected={isSelected}
          data-state={isSelected ? 'on' : 'off'}
          value={value}
          className={className}
          onClick={handleClick}
          {...props}
        >
          {children}
        </button>
      );
    }),
  };
});

vi.mock('./toggle', () => ({
  toggleVariants: vi.fn(({ variant, size, className }) => {
    const classes = [];

    if (variant === 'outline') {
      classes.push('border', 'border-input');
    } else {
      classes.push('bg-background-elevation-4');
    }

    if (size === 'sm') {
      classes.push('h-8', 'px-3');
    } else if (size === 'lg') {
      classes.push('h-10', 'px-2.5');
    } else {
      classes.push('h-9', 'px-2');
    }

    if (className) {
      classes.push(className);
    }

    return classes.join(' ');
  }),
}));

describe('ToggleGroup Component', () => {
  it('allows ToggleGroupItem to override variant and size', () => {
    render(
      <ToggleGroup type="single" variant="default" size="default">
        <ToggleGroupItem value="item1" variant="outline" size="sm">
          Item 1
        </ToggleGroupItem>
      </ToggleGroup>,
    );

    const item = screen.getByRole('tab', { name: 'Item 1' });
    expect(item).toHaveAttribute('data-variant', 'default');
    expect(item).toHaveAttribute('data-size', 'default');
  });
});
