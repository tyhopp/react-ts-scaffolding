import React from 'react';
import { render } from '@testing-library/react';
import { Aside } from './aside';

test('renders hello world', () => {
  const { getByText } = render(<Aside />);
  const text = getByText(/Hello world!/i);
  expect(text).toBeInTheDocument();
});
