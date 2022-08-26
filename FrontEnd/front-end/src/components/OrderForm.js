import React, { useEffect, useState } from "react";
import { Row, Form, Col, FormGroup, Label, Input, Button } from "reactstrap";
import TableDisplay from "./orderProductTable";
import AddProductsToOrderButton from "./add-products-to-order-button";
import axios from "axios";
import apiURL from "../API";
const OrderForm = ({
  customerOrdersTable = null,
  onToggleModal,
  editMode,
  createNewOrder,
  updateItem,
}) => {
  const [products, setProducts] = useState([]);
  const [orderId, setOrderId] = useState(
    (customerOrdersTable && customerOrdersTable.order_id) || ""
  );
  const [orderStatus, setOrderStatus] = useState(
    (customerOrdersTable && customerOrdersTable.order_status_code) || 1
  );
  const [customerId, setCustomerId] = useState(
    (customerOrdersTable && customerOrdersTable.customer_id) || 1
  );
  const [orderNotes, setOrderNotes] = useState(
    (customerOrdersTable && customerOrdersTable.order_notes) || ""
  );
  const [totalPrice, setTotal] = useState(
    (customerOrdersTable && customerOrdersTable.total_order_price) || 0
  );
  const [date, setDate] = useState("");

  useEffect(() => {
    const getOrderPrice = async () => {
      const order = await axios.get(`${apiURL}/api/orders/${orderId}`);
      setTotal(order.data.total_order_price);
      setDate(order.data.datetime_order_placed);
    };
    getOrderPrice();
  }, [products, orderId]);
  const updateOrderProducts = async (product_id, quantity) => {
    axios
      .post(`${apiURL}/api/products_connect_orders`, {
        order_quantity: parseInt(quantity),
        order_id: orderId,
        product_id: product_id,
      })
      .then((result) => {
        alert("success!");
        getOrderDetails(orderId);
      })
      .catch((err) => {
        console.log(err);
        alert("Failed to add product!");
      });
  };
  const getOrderDetails = async (id) => {
    let productInfo = [];
    await axios
      .get(`${apiURL}/api/products_connect_orders?order_id=${id}`)
      .then((result) => {
        productInfo = result.data.map((item) => {
          return { id: item.product_id, quantity: item.order_quantity };
        });
        return axios.post(`${apiURL}/api/products/bulk`, {
          product_id: productInfo.map((item) => item.id),
        });
      })
      .then((result) => {
        productInfo = productInfo.map((item) => {
          const name = result.data.find((info) => {
            return info.product_id === item.id;
          });
          return {
            ...item,
            name: name.product_name,
          };
        });
        setProducts(productInfo);
      });
  };

  const deleteProductFromOrder = async (id) => {
    await axios
      .put(
        `${apiURL}/api/products_connect_orders?order_id=${orderId}&product_id=${id}`,
        { order_quantity: 0 }
      )
      .then(() => {
        setProducts(products.filter((item) => item.id !== id));
      });
  };

  const handleSubmit = () => {
    const date = new Date();
    const specificDate = {
      day: date.getDay(),
      month: date.getMonth() + 1,
      year: date.getFullYear(),
      hour: date.getHours(),
      minutes: date.getMinutes(),
      seconds: date.getSeconds(),
    };
    const dateString = `${specificDate.year}-${specificDate.month}-${specificDate.day} ${specificDate.hour}:${specificDate.minutes}:${specificDate.seconds}`;

    const orderObject = {
      order_status_code: parseInt(orderStatus),
      customer_id: parseInt(customerId),
      order_notes: orderNotes,
      datetime_order_placed: dateString,
      total_order_price: 0,
    };
    console.log(editMode);
    console.log(orderObject);
    createNewOrder(orderObject);

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
                  disabled={editMode}
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
                type="select"
              >
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>6</option>
                <option>7</option>
                <option>8</option>
              </Input>
            </FormGroup>
          </Col>
          {editMode && (
            <Col md={12}>
              <FormGroup>
                <Label for="customerNotes">Total Price</Label>
                <div className="control" style={{ marginBottom: "10px" }}>
                  <Input value={totalPrice} disabled={true} />
                </div>
              </FormGroup>
            </Col>
          )}

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
        {editMode && (
          <>
            <div style={{ marginTop: "10px" }}>
              <AddProductsToOrderButton productFunction={updateOrderProducts} />
            </div>
            <Row>
              <TableDisplay
                getOrderDetails={getOrderDetails}
                products={products}
                deleteProductFromOrder={deleteProductFromOrder}
                orderId={orderId}
              />
            </Row>
          </>
        )}
      </Form>
      <div style={{ marginTop: "15px" }}>
        {editMode ? (
          <Button
            color="primary"
            onClick={() => {
              updateItem(
                {
                  order_status_code: parseInt(orderStatus),
                  customer_id: parseInt(customerId),
                  order_notes: orderNotes,
                  order_id: orderId,
                  datetime_order_placed: date,
                  total_order_price: totalPrice,
                },
                orderId
              );
              onToggleModal();
            }}
          >
            Update Details
          </Button>
        ) : (
          <Button
            color="primary"
            onClick={() => {
              handleSubmit();
              onToggleModal();
            }}
          >
            Create
          </Button>
        )}

        <Button color="secondary" onClick={onToggleModal}>
          Cancel
        </Button>
      </div>
    </div>
  );
};

export default OrderForm;
