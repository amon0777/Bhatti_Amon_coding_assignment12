import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import 'jest-styled-components';
import Label from './Label';

test('Label is visible', () => {
  render(<Label text="Test Label" />);
  const labelElement = screen.getByText(/Test Label/i);
  expect(labelElement).toBeVisible();
});

test('Label changes style when disabled', () => {
  render(<Label text="Disabled Label" disabled />);
  const labelElement = screen.getByText(/Disabled Label/i);
  expect(labelElement).toHaveStyle('color: #a0a0a0');
  expect(labelElement).toHaveStyle('cursor: not-allowed');
});