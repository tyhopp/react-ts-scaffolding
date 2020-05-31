import React from 'react';
import { render } from '@testing-library/react';
import { Aside } from './aside';

test('renders title', () => {
  const { getByText } = render(<Aside />);
  const text = getByText(/I'm an aside/i);
  expect(text).toBeInTheDocument();
});
