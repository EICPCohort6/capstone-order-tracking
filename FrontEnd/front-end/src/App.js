
import "./App.css";
import React from "react";
import MainPage from "./pages/mainPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CustomerPage from "./pages/customersPage";
import OrderPage from "./pages/ordersPage";
import NoPage from "./pages/noPage";
import ProductPage from "./pages/productsPage";
import LoginPage from "./pages/loginPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="login" element={<LoginPage />} />
        <Route path="/" element={<MainPage />}>
          <Route index element={<CustomerPage />} />
          <Route path="order" element={<OrderPage />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
