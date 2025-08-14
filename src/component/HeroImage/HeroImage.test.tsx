import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import 'jest-styled-components';
import HeroImage from './HeroImage';

test('HeroImage is visible', () => {
  render(<HeroImage src="test.jpg" alt="Hero Image" />);
  const imageElement = screen.getByAltText('Hero Image');
  expect(imageElement).toBeVisible();
});

test('HeroImage changes style when disabled', () => {
  render(<HeroImage src="test.jpg" alt="Hero Image" disabled />);
  const containerElement = screen.getByAltText('Hero Image').closest('div');
  expect(containerElement).toHaveStyle('opacity: 0.5');
  expect(containerElement).toHaveStyle('cursor: not-allowed');
});

test('HeroImage displays overlay text when provided', () => {
  const testText = 'Test Overlay';
  render(<HeroImage src="test.jpg" alt="Hero Image" text={testText} />);
  const textElement = screen.getByText(testText);
  expect(textElement).toBeVisible();
});