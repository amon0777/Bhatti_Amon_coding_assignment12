import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import 'jest-styled-components';
import Dropdown from './Dropdown';

const testOptions = [
  { value: 'test1', label: 'Test 1' },
  { value: 'test2', label: 'Test 2' },
];

test('Dropdown is visible and shows placeholder', () => {
  render(<Dropdown options={testOptions} placeholder="Select" />);
  const buttonElement = screen.getByRole('button', { name: /select/i });
  expect(buttonElement).toBeVisible();
});

test('Dropdown button changes style when disabled', () => {
  render(<Dropdown options={testOptions} placeholder="Disabled" disabled />);
  const buttonElement = screen.getByRole('button', { name: /disabled/i });
  expect(buttonElement).toHaveStyle('opacity: 0.5');
  expect(buttonElement).toHaveStyle('cursor: not-allowed');
});

test('Dropdown options list is not visible initially', () => {
  render(<Dropdown options={testOptions} placeholder="Select" />);
  const listElement = screen.queryByRole('list');
  expect(listElement).not.toBeInTheDocument();
});