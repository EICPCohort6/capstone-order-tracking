import React from 'react';
import { render, screen } from '@testing-library/react';
import user from "@testing-library/user-event";
import App from './App';

test('renders Search button', () => {
  render(<App />);
  //const linkElement = screen.getByText(/Getting started with React testing library/i);
  expect(screen.getByText("Search")).toBeInTheDocument();
});

test('Searches customer by last name Prince', () => {
  render(<App />);
  const searchButton = screen.getByText("Search"); //get search button
  user.type(screen.getByPlaceholderText("Search"), "Prince"); //get search bar element & type "Prince"
  expect(searchButton).toBeEnabled();
  user.click(searchButton);

});