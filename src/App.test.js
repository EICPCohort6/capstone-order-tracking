import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Search bar default text', () => {
  render(<App />);
  //const linkElement = screen.getByText(/Getting started with React testing library/i);
  expect(screen.getByText("Search")).toBeInTheDocument();
});