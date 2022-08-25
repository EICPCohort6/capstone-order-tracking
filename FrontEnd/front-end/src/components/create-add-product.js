import React, { useState } from "react";
import { Row, Form, Col, FormGroup, Label, Input, Button } from "reactstrap";

const submitForm = (e, data, toggle, productFunction) => {
  e.preventDefault();
  productFunction(data);
  toggle();
};

const AddProductForm = ({ toggle, productFunction }) => {
  const [quantity, setQuantity] = useState(0);

  return (
    <Form onSubmit={(e) => submitForm(e, quantity, toggle, productFunction)}>
      <Row>
        <Col md={4}>
          <FormGroup>
            <Label for="product_quantity">Enter Quantity</Label>
            <Input
              value={quantity}
              id="product_quantity"
              name="product_quantity"
              placeholder=""
              onChange={(e) => setQuantity(e.target.value)}
            />
          </FormGroup>
        </Col>
      </Row>
      <Row></Row>
      <FormGroup>
        <Button color="primary" type="submit">
          Add
        </Button>{" "}
        <Button color="secondary" onClick={toggle}>
          Cancel
        </Button>
      </FormGroup>
    </Form>
  );
};

export default AddProductForm;
