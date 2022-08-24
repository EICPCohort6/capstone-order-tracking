import React, { useState } from "react";
import OrderSearch from "../components/OrderSearch";
import AddOrderButton from "../components/AddOrderButton";
import OrdersTable from "../components/OrdersTable";

const OrderPage = () => {
  const [customerOrdersTable, setCustomerOrdersTable] = useState([]);
  console.log("customerOrdersTable -->", customerOrdersTable)
  return (
    <div>
      <OrderSearch />
      {/* <OrderForm/> */}
      <div style={{ marginTop: "10px"}}>

      <AddOrderButton setCustomerOrdersTable={setCustomerOrdersTable} customerOrdersTable={customerOrdersTable} />
      </div>
      <div>
        {
          customerOrdersTable.length > 0 && (
            <OrdersTable customerOrders={customerOrdersTable} />
          )
        }
      </div>
    </div>
  );
};

export default OrderPage;
