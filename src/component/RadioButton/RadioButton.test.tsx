import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import 'jest-styled-components';
import RadioButton from './RadioButton';

test('RadioButton is visible and has the correct label', () => {
  render(<RadioButton label="Test Option" value="test" name="test-group" checked={false} onChange={() => {}} />);
  const labelElement = screen.getByText('Test Option');
  expect(labelElement).toBeVisible();
});

test('RadioButton container changes style when disabled', () => {
  render(<RadioButton label="Test Option" value="test" name="test-group" checked={false} onChange={() => {}} disabled />);
  const containerElement = screen.getByText('Test Option').closest('label');
  expect(containerElement).toHaveStyle('opacity: 0.5');
  expect(containerElement).toHaveStyle('cursor: not-allowed');
});