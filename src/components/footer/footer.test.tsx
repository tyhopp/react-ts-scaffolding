import React from 'react';
import { render } from '@testing-library/react';
import { Footer } from './footer';

test('renders footer title', () => {
  const { getByText } = render(<Footer />);
  const text = getByText(/I'm a footer/i);
  expect(text).toBeInTheDocument();
});
