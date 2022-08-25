import React, { useState } from "react";
import OrderSearch from "../components/OrderSearch";
import AddOrderButton from "../components/AddOrderButton";
import OrdersTable from "../components/OrdersTable";
import axios from "axios";

const getData = async ({ condition, text }) => {
  // does api call gets data
  let order;
  switch (condition) {
    case "Order Id":
      order = await axios.get(`http://localhost:8080/api/orders/${text}`);
      return order;
    default:
      alert("No condition selected!");
      return [];
  }
};

const OrderPage = () => {
  const [customerOrdersTable, setCustomerOrdersTable] = useState([]);
  console.log("customerOrdersTable -->", customerOrdersTable);
  return (
    <div>
      <OrderSearch getData={getData} setTableData={setCustomerOrdersTable} />
      {/* <OrderForm/> */}
      <div style={{ marginTop: "10px" }}>
        <AddOrderButton
          setCustomerOrdersTable={setCustomerOrdersTable}
          customerOrdersTable={customerOrdersTable}
        />
      </div>
      {/* <OrdersTable customerOrders={customerOrdersTable} /> */}
    </div>
  );
};

export default OrderPage;
