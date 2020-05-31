import React from 'react';
import { render } from '@testing-library/react';
import { Header } from './header';

test('renders hello world', () => {
  const { getByText } = render(<Header />);
  const text = getByText(/Hello world!/i);
  expect(text).toBeInTheDocument();
});
