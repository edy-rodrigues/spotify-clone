# 🧪 Testing Guide

This document outlines the testing approach for the Spotify Clone project.

## 🔍 Overview

The project uses a combination of testing strategies to ensure code quality and functionality:

- **Unit Tests**: For testing individual components, hooks, and utilities
- **E2E Tests**: For testing complete user flows and integration

## 🧩 E2E Tests (Cypress)

E2E tests are implemented using Cypress to test complete user flows and integration between components.

### Running E2E Tests

The following npm scripts are available for running E2E tests:

```bash
# Open Cypress in interactive mode
npm run cypress

# Run Cypress tests in headless mode
npm run cypress:headless

# Start the development server and open Cypress
npm run test:e2e

# Start the development server and run Cypress tests in headless mode
npm run test:e2e:headless
```

### Test Structure

- E2E tests are located in the `e2e` directory
- Test files follow the naming convention: `*.cy.ts`
- Fixtures for mock data are stored in `e2e/fixtures`
- Custom commands and utilities are in `e2e/support`

## 📦 Testes Unitários (Vitest)

Unit tests are implemented using Vitest with the following setup:

- **Test Runner**: Vitest
- **Testing Environment**: jsdom (for DOM testing)
- **Testing Libraries**: 
  - `@testing-library/react` - For rendering and interacting with React components
  - `@testing-library/jest-dom` - For DOM assertions

### Running Tests

The following npm scripts are available for running tests:

```bash
# Run all tests once
npm test
# or
npm run test:unit

# Run tests in watch mode (development)
npm run test:unit:watch

# Run tests with coverage report
npm run test:unit:coverage
```

### Test File Structure

- Test files should be co-located with the code they test
- Test files should follow the naming convention: `*.test.tsx` or `*.spec.tsx`
- Tests should be organized in a way that mirrors the structure of the code they test

### Writing Tests

When writing tests, follow these guidelines:

1. Use Testing Library's queries that promote accessibility (e.g., `getByRole`, `getByLabelText`)
2. Test component behavior, not implementation details
3. Mock external dependencies when necessary
4. Write focused, small tests that test one thing at a time

### Example Test

```tsx
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Button } from './button';

describe('Button', () => {
  it('renders correctly with default props', () => {
    render(<Button>Click me</Button>);
    
    const button = screen.getByRole('button', { name: /click me/i });
    expect(button).toBeInTheDocument();
  });
});
```

### Coverage

Coverage reports are generated when running `npm run test:unit:coverage`. The coverage threshold is set to 70% for:

- Lines
- Functions
- Branches
- Statements

Coverage reports are available in the `coverage` directory after running the coverage command.