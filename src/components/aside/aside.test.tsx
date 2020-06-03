import React from 'react';
import { render } from '@testing-library/react';
import { Aside } from './aside';

test('renders title', () => {
  const { getByText } = render(<Aside />);
  const text = getByText(/I'm an aside/i);
  expect(text).toBeInTheDocument();
});

test('renders given background color', () => {
  const { container } = render(<Aside bg="green"/>);
  const aside = container.querySelector('.aside');
  expect(aside).toBeInTheDocument();
  expect(aside.dataset.bg).toBe('green');
});
