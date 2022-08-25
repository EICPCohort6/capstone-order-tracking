import React from "react";
import { Row, Form, Col, FormGroup, Label, Input } from "reactstrap";

const ProductForm = () => {
  return (
    <Form>
      <Row>
        <Col md={4}>
          <FormGroup>
            <Label for="product_sku">SKU</Label>
            <Input id="product_sku" name="product_sku" />
          </FormGroup>
        </Col>
        <Col md={8}>
          <FormGroup>
            <Label for="product_name">Product Name</Label>
            <Input id="product_name" name="product_name" />
          </FormGroup>
        </Col>
      </Row>
      <Row>
        <Col md={6}>
          <FormGroup>
            <Label for="product_price">Price</Label>
            <Input id="product_price" name="product_price" placeholder="" />
          </FormGroup>
        </Col>
        <Col md={6}>
          <FormGroup>
            <Label for="product_quantity">Quantity</Label>
            <Input
              id="product_quantity"
              name="product_quantity"
              placeholder=""
            />
          </FormGroup>
        </Col>
      </Row>
      <Row>
        <Col md={12}>
          <FormGroup>
            <Label for="product_description">Product Description</Label>
            <Input
              id="product_description"
              name="product_description"
              placeholder=""
            />
          </FormGroup>
        </Col>
      </Row>
      <Row>
        <Col md={12}>
          <FormGroup>
            <Label for="product_image_url">Product Image URL</Label>
            <Input
              id="product_image_url"
              name="product_image_url"
              placeholder=""
            />
          </FormGroup>
        </Col>
      </Row>
    </Form>
  );
};

export default ProductForm;
