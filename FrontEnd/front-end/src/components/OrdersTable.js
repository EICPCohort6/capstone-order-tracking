import { Table } from "reactstrap";
import React, { useState } from "react";
import OrderForm from "./OrderForm";

import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

const OrdersTable = (props) => {
  const { customerOrders } = props;
  if (customerOrders.length === 0)
    return <p style={{ textAlign: "center", fontStyle: "italic" }}>Empty</p>;
  return (
    <>
      <h1>Orders Table</h1>
      <div style={{ maxHeight: "700px", overflowY: "scroll" }}>
        <Table striped>
          <thead>
            <tr>
              <th>ID</th>
              <th>Customer Id</th>
              <th>Order Status</th>
              <th>Total Price</th>
              <th>Order Notes</th>
              <th>Time Stamp</th>
            </tr>
          </thead>
          <tbody>
            {customerOrders.map((order, index) => (
              <tr key={order.order_id}>
                <th scope="row">{order.order_id}</th>
                <td>{order.customer_id}</td>
                <td>{order.order_status_code}</td>
                <td>{order.total_order_price}</td>
                <td>{order.order_notes}</td>
                <td>{order.datetime_order_placed}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </>
  );
};

export default OrdersTable;
