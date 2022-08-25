
import { Table } from "reactstrap";
import React, { useState } from "react";
import OrderForm from "./OrderForm";

import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";


const OrdersTable = (props) => {
  const { customerOrders } = props;

  const [modal, setModal] = useState(false);
  const [editIndex, setEditIndex] = useState(0)

  const toggle = () => setModal(!modal);
  console.log("hey", customerOrders);
  return (
    <div>
      <h1>Orders Table</h1>

      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>Customer Id</th>
            <th>Order Status Code</th>
            <th>Order Notes</th>
            <th>Time Stamp</th>
            <th>Edit</th>

          </tr>
        </thead>
        <tbody>
          {customerOrders.map((order, index) => (
            <tr>
              <th scope="row">{index}</th>
              <td>{order.customerId}</td>
              <td>{order.orderStatus}</td>
              <td>{order.orderNotes}</td>
              <td>{order.timestamp}</td>
              <td><Button onClick={() => {
                  setEditIndex(index)
                  toggle()

              }}>Edit</Button></td>
            </tr>
          ))}
        </tbody>
      </Table>

      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Edit Order</ModalHeader>
        <ModalBody>
          <OrderForm customerOrdersTable={customerOrders[editIndex]} onToggleModal={toggle} />
        </ModalBody>
        {/* <ModalFooter>
          <Button color="primary" onClick={toggle}>
            Add
          </Button>{" "}
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter> */}
      </Modal>
    </div>
  );
};


export default OrdersTable;