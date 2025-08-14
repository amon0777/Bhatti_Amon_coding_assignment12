import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import 'jest-styled-components';
import Img from './Img';

test('Img is visible', () => {
  render(<Img src="test.jpg" alt="Test Image" />);
  const imageElement = screen.getByAltText('Test Image');
  expect(imageElement).toBeVisible();
});

test('Img changes style when disabled', () => {
  render(<Img src="test.jpg" alt="Test Image" disabled />);
  const imageElement = screen.getByAltText('Test Image');
  expect(imageElement).toHaveStyle('opacity: 0.5');
  expect(imageElement).toHaveStyle('cursor: not-allowed');
});