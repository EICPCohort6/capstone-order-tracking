import "./App.css";
import MainPage from "./pages/mainPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CustomerPage from "./pages/customersPage";
import OrderPage from "./pages/ordersPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />}>
          <Route index element={<CustomerPage />} />
          <Route path="order" element={<OrderPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
