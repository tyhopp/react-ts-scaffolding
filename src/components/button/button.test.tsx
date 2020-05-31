import React from 'react';
import { render } from '@testing-library/react';
import { Button } from './button';

test('renders hello world', () => {
  const { getByText } = render(<Button />);
  const text = getByText(/Hello world!/i);
  expect(text).toBeInTheDocument();
});
