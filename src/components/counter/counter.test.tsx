import React from 'react';
import { render } from '@testing-library/react';
import { Counter } from './counter';

test('renders the counter title', () => {
  const { getByText } = render(<Counter />);
  const text = getByText(/I'm a counter/i);
  expect(text).toBeInTheDocument();
});

test('renders the counter description', () => {
  const { getByText } = render(<Counter />);
  const text = getByText(/I'll showcase a bit of React and TypeScript./i);
  expect(text).toBeInTheDocument();
});
