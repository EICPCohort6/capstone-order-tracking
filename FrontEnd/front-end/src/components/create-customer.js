import React from "react";
import { Row, Form, Col, FormGroup, Label, Input, Button } from "reactstrap";

const CustomerForm = () => {
  return (
    <Form>
      <Row>
        <Col md={4}>
          <FormGroup>
            <Label for="firstName">First Name</Label>
            <Input id="firstName" name="firstName" />
          </FormGroup>
        </Col>
        <Col md={4}>
          <FormGroup>
            <Label for="middleName">Middle Name</Label>
            <Input id="middleName" name="middleName" />
          </FormGroup>
        </Col>
        <Col md={4}>
          <FormGroup>
            <Label for="lastName">Last Name</Label>
            <Input id="lastName" name="lastName" />
          </FormGroup>
        </Col>
      </Row>
      <FormGroup>
        <Label for="exampleAddress">Address</Label>
        <Input id="exampleAddress" name="address" placeholder="1234 Main St" />
      </FormGroup>
      <FormGroup>
        <Label for="exampleAddress2">Address 2</Label>
        <Input
          id="exampleAddress2"
          name="address2"
          placeholder="Apartment, studio, or floor"
        />
      </FormGroup>
      <Row>
        <Col md={6}>
          <FormGroup>
            <Label for="exampleCity">City</Label>
            <Input id="exampleCity" name="city" />
          </FormGroup>
        </Col>
        <Col md={4}>
          <FormGroup>
            <Label for="exampleState">State</Label>
            <Input id="exampleState" name="state" />
          </FormGroup>
        </Col>
        <Col md={2}>
          <FormGroup>
            <Label for="exampleZip">Zip</Label>
            <Input id="exampleZip" name="zip" />
          </FormGroup>
        </Col>
      </Row>
      <Row>
        <Col md={6}>
          <FormGroup>
            <Label for="Email Address">Email Address</Label>
            <Input
              id="emailAddress"
              name="emailAddress"
              placeholder="example@gmail.com"
            />
          </FormGroup>
        </Col>
        <Col md={4}>
          <FormGroup>
            <Label for="phoneNumber">Phone Number</Label>
            <Input id="phoneNumber" name="phoneNumber" />
          </FormGroup>
        </Col>
        <Col md={2}>
          <FormGroup>
            <Label for="dateOfBirth">Date of Birth</Label>
            <Input
              id="dateOfBirth"
              name="dateOfBirth"
              placeholder="MM/DD/YYYY"
            />
          </FormGroup>
        </Col>
      </Row>
      <FormGroup>
        <Label for="customerNotes">Customer Notes</Label>
        <Input id="customerNotes" name="customerNotes" />
      </FormGroup>
    </Form>
  );
};

export default CustomerForm;
