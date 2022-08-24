import React, { useState } from "react";
import { Row, Form, Col, FormGroup, Label, Input, Button } from "reactstrap";

const template = {
  product_SKU: "",
  product_image_url: "",
  product_name: "",
  product_price: "",
  product_quantity: "",
  product_description: "",
  product_id: "",
};

const submitForm = (e, data, toggle, productFunction) => {
  e.preventDefault();
  productFunction(data);
  toggle();
};

const ProductForm = ({
  product = { ...template },
  toggle,
  productFunction,
}) => {
  product = { ...template, ...product };
  const [data, setData] = useState(product);

  return (
    <Form onSubmit={(e) => submitForm(e, data, toggle, productFunction)}>
      <Row>
        <Col md={4}>
          <FormGroup>
            <Label for="product_SKU">SKU</Label>
            <Input
              id="product_SKU"
              name="product_SKU"
              value={data.product_SKU}
              onChange={(e) =>
                setData({ ...data, product_SKU: e.target.value })
              }
            />
          </FormGroup>
        </Col>
        <Col md={8}>
          <FormGroup>
            <Label for="product_name">Product Name</Label>
            <Input
              id="product_name"
              name="product_name"
              value={data.product_name}
              onChange={(e) =>
                setData({ ...data, product_name: e.target.value })
              }
            />
          </FormGroup>
        </Col>
      </Row>
      <Row>
        <Col md={6}>
          <FormGroup>
            <Label for="product_quantity">Quantity</Label>
            <Input
              id="product_quantity"
              name="product_quantity"
              placeholder="123"
              value={data.product_quantity}
              onChange={(e) =>
                setData({ ...data, product_quantity: e.target.value })
              }
            />
          </FormGroup>
        </Col>
        <Col md={6}>
          <FormGroup>
            <Label for="product_price">Price</Label>
            <Input
              id="product_price"
              name="product_price"
              value={data.product_price}
              onChange={(e) =>
                setData({ ...data, product_price: e.target.value })
              }
            />
          </FormGroup>
        </Col>
      </Row>
      <Col md={12}>
        <FormGroup>
          <Label for="product_description">Description</Label>
          <Input
            id="product_description"
            name="product_description"
            placeholder=""
            value={data.product_description}
            onChange={(e) =>
              setData({ ...data, product_description: e.target.value })
            }
          />
        </FormGroup>
      </Col>
      <Row></Row>
      <FormGroup>
        <Button color="primary" type="submit">
          Submit
        </Button>{" "}
        <Button color="secondary" onClick={toggle}>
          Cancel
        </Button>
      </FormGroup>
    </Form>
  );
};

export default ProductForm;
