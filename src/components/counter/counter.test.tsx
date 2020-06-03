import React from 'react';
import { render } from '@testing-library/react';
import { Counter } from './counter';

test('renders the counter title', () => {
  const { getByText } = render(<Counter />);
  const text = getByText(/I'm a counter/i);
  expect(text).toBeInTheDocument();
});
