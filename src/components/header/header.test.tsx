import React from 'react';
import { render } from '@testing-library/react';
import { Header } from './header';

test('renders header title', () => {
  const { getByText } = render(<Header />);
  const text = getByText(/I'm a header/i);
  expect(text).toBeInTheDocument();
});
