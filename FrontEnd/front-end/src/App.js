
import "./App.css";\
import React from "react";
import MainPage from "./pages/mainPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CustomerPage from "./pages/customersPage";
import OrderPage from "./pages/ordersPage";
import NoPage from "./pages/noPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
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
