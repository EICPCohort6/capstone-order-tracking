import React, {useState } from "react";
import OrdersTable from "./OrdersTable";
import { Row, Form, Col, FormGroup, Label, Input, Button } from "reactstrap";

const OrderForm = ({ setCustomerOrdersTable, customerOrdersTable, onToggleModal }) => {
    const [orderId, setOrderId] = useState(null);
    const [orderStatus, setOrderStatus] = useState(null);
    const [customerId, setCustomerId] = useState(null);
    const [total, setTotal] = useState(0);
    const [orderNotes, setOrderNotes] = useState(null);
    const [customerOrders, setCustomerOrders ] = useState(customerOrdersTable);
  
   
    const handleSubmit = () => {
      const orderObject = {
        orderId,
        orderStatus,
        customerId,
        total,
        orderNotes,
        timestamp: new Date().toLocaleString()
        
      };

      console.log(orderObject);
      const orderString = JSON.stringify(orderObject);
      alert("Order was submitted with the following details: " + orderString);

      // setCustomerOrders.push(orderObject);
      const currentCustomerOrders = customerOrdersTable;
      currentCustomerOrders.push(orderObject);
      // setCustomerOrders(currentCustomerOrders);
      setCustomerOrdersTable(currentCustomerOrders);
      // reset inputs
      setOrderId("")
      setCustomerId("")
      setTotal("")
      setOrderNotes("")
      setOrderStatus("")
    }
    console.log(customerOrders)
 
    return (
      <div>
      <Form>
        <Row>
          <Col md={6}>
            <FormGroup>
              <Label for="firstName">Order Id</Label>
              <Input
                id="firstName"
                value={orderId}
                onChange={(event) => {
                  setOrderId(event.target.value);
                }}
              />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="customerId">Customer Id</Label>
              <Input
                id="customerId"
                value={customerId}
                onChange={(event) => {
                  setCustomerId(event.target.value);
                }}
              />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="orderStatus">Order Status Code</Label>
              <Input
                id="orderStatus"
                value={orderStatus}
                onChange={(event) => {
                  setOrderStatus(event.target.value);
                }}
              />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="lastName">Total Order Price</Label>
              <Input
                id="lastName"
                value={total}
                onChange={(event) => {
                  setTotal(event.target.value);
                }}
              />
            </FormGroup>
          </Col>
        <Col md={12}>
        <FormGroup>
          <Label for="customerNotes">Order Notes</Label>
          <div className="control" style={{ marginBottom: "10px" }}>
              <Input
                value={orderNotes}
                onChange={(event) => {
                  setOrderNotes(event.target.value);
                }}
              />
          </div>
        </FormGroup>
        </Col>
        </Row>
      </Form>
      <div style={{ marginTop: '15px'}}>

      <Button color="primary" onClick={() => {
        handleSubmit();
        onToggleModal();
      }}>
            Add
          </Button>{" "}
          <Button color="secondary" onClick={onToggleModal}>
            Cancel
          </Button>
      </div>
      </div>



    );
  };
  
  export default OrderForm;
  