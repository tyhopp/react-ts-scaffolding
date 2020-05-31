import React from 'react';
import { render } from '@testing-library/react';
import { Button } from './button';

test('renders prop as button text', () => {
  const text = 'Click me';
  const { getByText } = render(<Button text={text} />);
  const buttonText = getByText(/Click me/i);
  expect(buttonText).toBeInTheDocument();
});
