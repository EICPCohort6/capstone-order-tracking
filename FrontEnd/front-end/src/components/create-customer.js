import React from "react";
import { Row, Form, Col, FormGroup, Label, Input, Button } from "reactstrap";

const CustomerForm = () => {
  return (
    <Form>
      <Row>
        <Col md={4}>
          <FormGroup>
            <Label for="first_name">First Name</Label>
            <Input id="first_name" name="first_name" />
          </FormGroup>
        </Col>
        <Col md={4}>
          <FormGroup>
            <Label for="middle_name">Middle Name</Label>
            <Input id="middle_name" name="middle_name" />
          </FormGroup>
        </Col>
        <Col md={4}>
          <FormGroup>
            <Label for="last_name">Last Name</Label>
            <Input id="last_name" name="last_name" />
          </FormGroup>
        </Col>
      </Row>
      <Row>
        <Col md={4}>
          <FormGroup>
            <Label for="street_number">Street Number</Label>
            <Input id="street_number" name="street_number" placeholder="123" />
          </FormGroup>
        </Col>
        <Col md={8}>
          <FormGroup>
            <Label for="street_name">Street Name</Label>
            <Input id="street_name" name="street_name" placeholder="Main St" />
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
            />
          </FormGroup>
        </Col>
        <Col md={3}>
          <FormGroup>
            <Label for="country">Country</Label>
            <Input id="country" name="country" placeholder="" />
          </FormGroup>
        </Col>
      </Row>
      <Row>
        <Col md={6}>
          <FormGroup>
            <Label for="city">City</Label>
            <Input id="city" name="city" />
          </FormGroup>
        </Col>
        <Col md={6}>
          <FormGroup>
            <Label for="state">State</Label>
            <Input id="state" name="state" />
          </FormGroup>
        </Col>
      </Row>
      <Row>
        <Col md={4}>
          <FormGroup>
            <Label for="zipcode">Zip</Label>
            <Input id="zipcode" name="zipcode" />
          </FormGroup>
        </Col>
        <Col md={8}>
          <FormGroup>
            <Label for="email">Email Address</Label>
            <Input id="email" name="email" placeholder="example@gmail.com" />
          </FormGroup>
        </Col>
      </Row>
      <Row>
        <Col md={6}>
          <FormGroup>
            <Label for="phone_number">Phone Number</Label>
            <Input id="phone_number" name="phone_number" />
          </FormGroup>
        </Col>
        <Col md={6}>
          <FormGroup>
            <Label for="date_of_birth">Date of Birth</Label>
            <Input
              id="date_of_birth"
              name="date_of_birth"
              placeholder="MM/DD/YYYY"
            />
          </FormGroup>
        </Col>
      </Row>
      <FormGroup>
        <Label for="customer_notes">Customer Notes</Label>
        <Input id="customer_notes" name="customer_notes" />
      </FormGroup>
    </Form>
  );
};

export default CustomerForm;
