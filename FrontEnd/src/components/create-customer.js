import React, { useState } from "react";
import { Row, Form, Col, FormGroup, Label, Input, Button } from "reactstrap";
const template = {
  first_name: "",
  middle_name: "",
  last_name: "",
  street_number: "",
  street_name: "",
  unit_number: "",
  country: "",
  city: "",
  state: "",
  zipcode: "",
  email: "",
  phone_number: "",
  date_of_birth: "",
  customer_notes: "",
};

const submitForm = (e, data, toggle, customerFunction) => {
  console.log(data);
  e.preventDefault();
  customerFunction(data);
  toggle();
};

const CustomerForm = ({
  person = { ...template },
  toggle,
  customerFunction,
}) => {
  person = { ...template, ...person };
  const [data, setData] = useState(person);

  return (
    <Form onSubmit={(e) => submitForm(e, data, toggle, customerFunction)}>
      <Row>
        <Col md={4}>
          <FormGroup>
            <Label for="first_name">First Name</Label>
            <Input
              id="first_name"
              name="first_name"
              value={data.first_name}
              onChange={(e) => setData({ ...data, first_name: e.target.value })}
            />
          </FormGroup>
        </Col>
        <Col md={4}>
          <FormGroup>
            <Label for="middle_name">Middle Name</Label>
            <Input
              id="middle_name"
              name="middle_name"
              value={data.middle_name}
              onChange={(e) =>
                setData({ ...data, middle_name: e.target.value })
              }
            />
          </FormGroup>
        </Col>
        <Col md={4}>
          <FormGroup>
            <Label for="last_name">Last Name</Label>
            <Input
              id="last_name"
              name="last_name"
              value={data.last_name}
              onChange={(e) => setData({ ...data, last_name: e.target.value })}
            />
          </FormGroup>
        </Col>
      </Row>
      <Row>
        <Col md={4}>
          <FormGroup>
            <Label for="street_number">Street Number</Label>
            <Input
              id="street_number"
              name="street_number"
              placeholder="123"
              value={data.street_number}
              onChange={(e) =>
                setData({ ...data, street_number: e.target.value })
              }
            />
          </FormGroup>
        </Col>
        <Col md={8}>
          <FormGroup>
            <Label for="street_name">Street Name</Label>
            <Input
              id="street_name"
              name="street_name"
              placeholder="Main St"
              value={data.street_name}
              onChange={(e) =>
                setData({ ...data, street_name: e.target.value })
              }
            />
          </FormGroup>
        </Col>
      </Row>
      <Row>
        <Col md={9}>
          <FormGroup>
            <Label for="Unit Number">Unit Number</Label>
            <Input
              id="unit_number"
              name="unit_number"
              placeholder="Apartment, studio, or floor"
              value={data.unit_number}
              onChange={(e) =>
                setData({ ...data, unit_number: e.target.value })
              }
            />
          </FormGroup>
        </Col>
        <Col md={3}>
          <FormGroup>
            <Label for="country">Country</Label>
            <Input
              id="country"
              name="country"
              placeholder=""
              value={data.country}
              onChange={(e) => setData({ ...data, country: e.target.value })}
            />
          </FormGroup>
        </Col>
      </Row>
      <Row>
        <Col md={6}>
          <FormGroup>
            <Label for="city">City</Label>
            <Input
              id="city"
              name="city"
              value={data.city}
              onChange={(e) => setData({ ...data, city: e.target.value })}
            />
          </FormGroup>
        </Col>
        <Col md={4}>
          <FormGroup>
            <Label for="state">State</Label>
            <Input
              id="state"
              name="state"
              value={data.state}
              onChange={(e) => setData({ ...data, state: e.target.value })}
            />
          </FormGroup>
        </Col>
        <Col md={2}>
          <FormGroup>
            <Label for="zipcode">Zip</Label>
            <Input
              id="zipcode"
              name="zipcode"
              value={data.zipcode}
              onChange={(e) => setData({ ...data, zipcode: e.target.value })}
            />
          </FormGroup>
        </Col>
      </Row>
      <Row>
        <Col md={6}>
          <FormGroup>
            <Label for="email">Email Address</Label>
            <Input
              id="email"
              name="email"
              placeholder="example@gmail.com"
              type="email"
              value={data.email}
              onChange={(e) => setData({ ...data, email: e.target.value })}
            />
          </FormGroup>
        </Col>
        <Col md={4}>
          <FormGroup>
            <Label for="phone_number">Phone Number</Label>
            <Input
              id="phone_number"
              name="phone_number"
              value={data.phone_number}
              onChange={(e) =>
                setData({ ...data, phone_number: e.target.value })
              }
            />
          </FormGroup>
        </Col>
        <Col md={2}>
          <FormGroup>
            <Label for="date_of_birth">Date of Birth</Label>
            <Input
              id="date_of_birth"
              name="date_of_birth"
              placeholder="MM/DD/YYYY"
              value={data.date_of_birth}
              onChange={(e) =>
                setData({ ...data, date_of_birth: e.target.value })
              }
            />
          </FormGroup>
        </Col>
      </Row>
      <FormGroup>
        <Label for="customer_notes">Customer Notes</Label>
        <Input
          id="customer_notes"
          name="customer_notes"
          value={data.customer_notes}
          onChange={(e) => setData({ ...data, customer_notes: e.target.value })}
        />
      </FormGroup>
      <FormGroup>
        <Button color="primary" type="submit">
          Submit
        </Button>{" "}
        <Button color="secondary" onClick={toggle}>
          Cancel
        </Button>
      </FormGroup>
      <Button>Submit</Button>
    </Form>
  );
};

export default CustomerForm;
