import React from 'react';
import { render } from '@testing-library/react';
import { Main } from './main';

test('renders hello world', () => {
  const { getByText } = render(<Main />);
  const text = getByText(/Hello world!/i);
  expect(text).toBeInTheDocument();
});
