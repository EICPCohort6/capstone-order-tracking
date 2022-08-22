import React, { useState } from "react";
import { Row, Form, Col, FormGroup, Label, Input, Button } from "reactstrap";

const template = {
  firstName: "",
  middleName: "",
  lastName: "",
  streetNumber: "",
  streetName: "",
  unitNumber: "",
  country: "",
  city: "",
  state: "",
  zipCode: "",
  email: "",
  phone: "",
  birthDate: "",
  customerNotes: "",
};

const CustomerForm = ({ person = { ...template }, toggle }) => {
  const [data, setData] = useState(person);

  return (
    <Form>
      <Row>
        <Col md={4}>
          <FormGroup>
            <Label for="first_name">First Name</Label>
            <Input
              id="first_name"
              name="first_name"
              value={data.firstName}
              onChange={(e) => setData({ ...data, firstName: e.target.value })}
            />
          </FormGroup>
        </Col>
        <Col md={4}>
          <FormGroup>
            <Label for="middle_name">Middle Name</Label>
            <Input
              id="middle_name"
              name="middle_name"
              value={data.middleName}
              onChange={(e) => setData({ ...data, middleName: e.target.value })}
            />
          </FormGroup>
        </Col>
        <Col md={4}>
          <FormGroup>
            <Label for="last_name">Last Name</Label>
            <Input
              id="last_name"
              name="last_name"
              value={data.lastName}
              onChange={(e) => setData({ ...data, lastName: e.target.value })}
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
              value={data.streetNumber}
              onChange={(e) =>
                setData({ ...data, streetNumber: e.target.value })
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
              value={data.streetName}
              onChange={(e) => setData({ ...data, streetName: e.target.value })}
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
              value={data.unitNumber}
              onChange={(e) => setData({ ...data, unitNumber: e.target.value })}
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
        <Col md={6}>
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
      </Row>
      <Row>
        <Col md={4}>
          <FormGroup>
            <Label for="zipcode">Zip</Label>
            <Input
              id="zipcode"
              name="zipcode"
              value={data.zipCode}
              onChange={(e) => setData({ ...data, zipCode: e.target.value })}
            />
          </FormGroup>
        </Col>
        <Col md={8}>
          <FormGroup>
            <Label for="email">Email Address</Label>
            <Input
              id="email"
              name="email"
              placeholder="example@gmail.com"
              value={data.email}
              onChange={(e) => setData({ ...data, email: e.target.value })}
            />
          </FormGroup>
        </Col>
      </Row>
      <Row>
        <Col md={6}>
          <FormGroup>
            <Label for="phone_number">Phone Number</Label>
            <Input
              id="phone_number"
              name="phone_number"
              value={data.phone}
              onChange={(e) => setData({ ...data, phone: e.target.value })}
            />
          </FormGroup>
        </Col>
        <Col md={6}>
          <FormGroup>
            <Label for="date_of_birth">Date of Birth</Label>
            <Input
              id="date_of_birth"
              name="date_of_birth"
              placeholder="MM/DD/YYYY"
              value={data.birthDate}
              onChange={(e) => setData({ ...data, birthDate: e.target.value })}
            />
          </FormGroup>
        </Col>
      </Row>
      <FormGroup>
        <Label for="customer_notes">Customer Notes</Label>
        <Input
          id="customer_notes"
          name="customer_notes"
          value={data.customerNotes}
          onChange={(e) => setData({ ...data, customerNotes: e.target.value })}
        />
      </FormGroup>
    </Form>
  );
};

export default CustomerForm;
