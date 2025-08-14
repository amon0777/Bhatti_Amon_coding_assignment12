import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import 'jest-styled-components';
import Text from './Text';

test('Text is visible', () => {
  render(<Text text="Hello World" />);
  const textElement = screen.getByText(/Hello World/i);
  expect(textElement).toBeVisible();
});

test('Text changes style when disabled', () => {
  render(<Text text="Disabled Text" disabled />);
  const textElement = screen.getByText(/Disabled Text/i);
  expect(textElement).toHaveStyle('color: #a0a0a0');
  expect(textElement).toHaveStyle('cursor: not-allowed');
});