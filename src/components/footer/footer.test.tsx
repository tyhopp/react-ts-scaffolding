import React from 'react';
import { render } from '@testing-library/react';
import { Footer } from './footer';

test('renders hello world', () => {
  const { getByText } = render(<Footer />);
  const text = getByText(/Hello world!/i);
  expect(text).toBeInTheDocument();
});
