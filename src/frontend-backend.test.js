import React from 'react';
import { render, screen } from '@testing-library/react';
import user from "@testing-library/user-event";
import App from './App';
jest.mock("../BackEnd/Express/server");

// const testing = screen.getByText((content, element) => {
//   return element.tagName.toLowerCase() === 'td' && content.startsWith('M')});
// console.log(testing);

test('renders Search button', () => {
  render(<App />);
  //const linkElement = screen.getByText(/Getting started with React testing library/i);
  expect(screen.getByText("Search")).toBeInTheDocument();
});

test('product sku', async () => {
  render(<App />);
  const searchButton = screen.getByText("Search"); //get search button
  user.click(searchButton);

  expect(await screen.findByText("Quisque")).toBeInTheDocument();
});

// test('Searches customer by last name Prince', async () => {
//   render(<App />);
//   const searchButton = screen.getByText("Search"); //get search button
//   user.type(screen.getByPlaceholderText("Search"), "Mendez"); //get search bar element & type "Prince"
//   expect(searchButton).toBeEnabled();
//   user.click(searchButton);

//   expect(screen.getByText("First Name")).toBeInTheDocument();
//   expect(await screen.findByText("Mendez")).toBeInTheDocument();
//   //expect(screen.getByText((content, element) => {
//   //  return element.tagName.toLowerCase() === 'td' && content.startsWith('M')})).toBeInTheDocument();
//   //expect(screen.getByText("Yoshi")).toBeInTheDocument();
//   //expect(screen.getByText("consequat@protonmail.com")).toBeInTheDocument();
// });