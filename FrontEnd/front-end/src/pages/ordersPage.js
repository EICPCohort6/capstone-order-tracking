import React, { useState } from "react";
import OrderSearch from "../components/OrderSearch";
import AddOrderButton from "../components/AddOrderButton";
import OrdersTable from "../components/OrdersTable";
import axios from "axios";
import URL from "../API";

const getData = async ({ condition, text }) => {
  // does api call gets data
  let order;
  switch (condition) {
    case "Order Id":
      order = await axios.get(`${URL}/api/orders/${text}`);
      return order;
    case "Order Status Code":
      order = await axios.get(`${URL}/api/orders?order_status_code=${text}`);
      return order;
    case "Customer Id":
      order = await axios.get(`${URL}/api/orders?customer_id=${text}`);
      return order;
    default:
      order = await axios.get(`${URL}/api/orders/`);
      return order;
  }
};
const createNewOrder = async (orderObject) => {
  console.log(orderObject);
  await axios
    .post(`${URL}/api/orders`, orderObject)
    .then((result) => {
      alert("Order Added!");
      window.location.reload();
    })
    .catch((err) => console.log(err));
};

const OrderPage = () => {
  const [customerOrdersTable, setCustomerOrdersTable] = useState([]);

  const updateItem = async (item, id) => {
    console.log(item);
    await axios.put(`${URL}/api/orders/${id}`, item).then(() => {
      const newTable = customerOrdersTable.map((row) => {
        if (row.order_id !== id) return row;
        return item;
      });
      setCustomerOrdersTable(newTable);
    });
  };

  return (
    <div>
      <OrderSearch getData={getData} setTableData={setCustomerOrdersTable} />
      {/* <OrderForm/> */}
      <div style={{ marginTop: "10px" }}>
        <AddOrderButton
          setCustomerOrdersTable={setCustomerOrdersTable}
          customerOrdersTable={customerOrdersTable}
          createNewOrder={createNewOrder}
        />
      </div>
      <OrdersTable
        updateItem={updateItem}
        customerOrders={customerOrdersTable}
      />
    </div>
  );
};

export default OrderPage;
