import React, { useState } from "react";
import OrdersTable from "./OrdersTable";
import { Row, Form, Col, FormGroup, Label, Input, Button } from "reactstrap";

const OrderForm = ({
  setCustomerOrdersTable,
  customerOrdersTable,
  onToggleModal,
  editMode
}) => {
  const [orderId, setOrderId] = useState(
    (customerOrdersTable && customerOrdersTable.order_id) || null
  );
  const [orderStatus, setOrderStatus] = useState(
    (customerOrdersTable && customerOrdersTable.order_status_code) || null
  );
  const [customerId, setCustomerId] = useState(
    (customerOrdersTable && customerOrdersTable.customer_id) || null
  );
  const [orderNotes, setOrderNotes] = useState(
    (customerOrdersTable && customerOrdersTable.order_notes) || null
  );
  const [totalPrice, setTotal] = useState(
    (customerOrdersTable && customerOrdersTable.total_order_price) || null
  );
  const [customerOrders, setCustomerOrders] = useState(customerOrdersTable);


  const handleSubmit = () => {
    const orderObject = {
      order_id: orderId,
      order_status_code: orderStatus,
      customer_id: customerId,
      order_notes: orderNotes,
      datetime_order_placed: new Date().toLocaleString(),
    };

    const currentCustomerOrders = customerOrdersTable;
    currentCustomerOrders.push(orderObject);
    setCustomerOrdersTable(currentCustomerOrders);
    setCustomerId("");

    setOrderNotes("");
    setOrderStatus("");
  };

  return (
    <div>
      <Form>
        <Row>
          {
            

          <Col md={6}>
            <FormGroup>
              <Label for="customerId">Customer Id</Label>
              <Input
                id="customerId"
                value={customerId}
                disabled = {editMode}
                onChange={(event) => {
                  setCustomerId(event.target.value);
                }}
              />
            </FormGroup>
          </Col>
            
          }

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
          {
            editMode && (
              <Col md={12}>
              <FormGroup>
                <Label for="customerNotes">Total Price</Label>
                <div className="control" style={{ marginBottom: "10px" }}>
                  <Input
                    value={totalPrice}
                   disabled = {true}
                  />
                </div>
              </FormGroup>
            </Col>

            )
          }
         
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
      <div style={{ marginTop: "15px" }}>
        <Button
          color="primary"
          onClick={() => {
            handleSubmit();
            onToggleModal();
          }}
        >
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
