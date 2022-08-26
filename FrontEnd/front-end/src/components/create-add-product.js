import React, { useState } from "react";
import { Row, Form, Col, FormGroup, Label, Input, Button } from "reactstrap";

const submitForm = (e, data, toggle, productFunction) => {
  e.preventDefault();
  if (data.quantity <= 0 || data.product_quantity < data.quantity) {
    alert("Invalid input");
    return;
  }
  productFunction(data.id, data.quantity);
  toggle();
};

const AddProductForm = ({ toggle, productFunction, product }) => {
  const [quantity, setQuantity] = useState(0);

  return (
    <Form
      onSubmit={(e) =>
        submitForm(
          e,
          {
            quantity,
            id: product.product_id,
            maxQuantity: product.product_quantity,
          },
          toggle,
          productFunction
        )
      }
    >
      <Row>
        <Col md={4}>
          <FormGroup>
            <Label for="product_quantity">Enter Quantity</Label>
            <Input
              value={quantity}
              type="number"
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
