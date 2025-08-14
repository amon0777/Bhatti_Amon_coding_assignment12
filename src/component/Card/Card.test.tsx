import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import 'jest-styled-components';
import Card from './Card';

test('Card is visible and displays content', () => {
  render(
    <Card
      imageUrl="test.jpg"
      imageAlt="Test Image"
      title="Test Title"
      description="Test Description"
    />
  );
  const titleElement = screen.getByText('Test Title');
  const descriptionElement = screen.getByText('Test Description');
  const imageElement = screen.getByAltText('Test Image');

  expect(titleElement).toBeVisible();
  expect(descriptionElement).toBeVisible();
  expect(imageElement).toBeVisible();
});

test('Card changes style when disabled', () => {
  render(
    <Card
      imageUrl="test.jpg"
      imageAlt="Test Image"
      title="Test Title"
      description="Test Description"
      disabled
    />
  );
  const cardElement = screen.getByText('Test Title').closest('div');
  expect(cardElement).toHaveStyle('opacity: 0.5');
  expect(cardElement).toHaveStyle('cursor: not-allowed');
});