import React, {useState } from "react";
import { Row, Form, Col, FormGroup, Label, Input, Button } from "reactstrap";

const CustomerForm = () => {
    const [orderId, setOrderId] = useState(null);
    const [orderStatus, setOrderStatus] = useState(null);
    const [customerId, setCustomerId] = useState(null);
    const [total, setTotal] = useState(0);
    const [orderNotes, setOrderNotes] = useState(null);
  
    const handleSubmit = () => {
      const orderObject = {
        orderId,
        orderStatus,
        customerId,
        total,
        orderNotes,
        timestamp: Date.now()
      };
      console.log(orderObject);
      const orderString = JSON.stringify(orderObject);
      alert("Order was submitted with the following details: " + orderString);
    };
  
    return (
      <Form>
        <Row>
          <Col md={4}>
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
          <Col md={4}>
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
          <Col md={4}>
            <FormGroup>
              <Label for="orderStatus">Order Status</Label>
              <Input
                id="orderStatus"
                value={orderStatus}
                onChange={(event) => {
                  setOrderStatus(event.target.value);
                }}
              />
            </FormGroup>
          </Col>
          <Col md={4}>
            <FormGroup>
              <Label for="lastName">Total</Label>
              <Input
                id="lastName"
                value={total}
                onChange={(event) => {
                  setTotal(event.target.value);
                }}
              />
            </FormGroup>
          </Col>
        </Row>
  
        <FormGroup>
          <Label for="customerNotes">Order Notes</Label>
          <div className="control" style={{ marginBottom: "10px" }}>
            <textarea
              className="textarea"
              placeholder="Enter order status"
              value={orderNotes}
              onChange={(event) => {
                setOrderNotes(event.target.value);
              }}
            />
          </div>
          <Button color="success" onClick={handleSubmit}>
            Submit
          </Button>
        </FormGroup>
      </Form>
    );
  };
  
  export default CustomerForm;
  