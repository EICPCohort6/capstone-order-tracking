import React from "react";
import { Row, Container, Col } from "reactstrap";
import CustomerForm from "./customerForm";
const MainPage = () => {
  return (
    <>
      <h1>header/logo</h1>
      <Container fluid>
           <Col xs="8">
            <h1>BASE CONTENT HERE</h1>
          </Col> <Row>
          <Col xs="4">
            <h1>NAVBAR HERE</h1>
          </Col>
          <Col xs="8">
            <h1>BASE CONTENT HERE</h1>
          </Col>
          <Col xs="8">
            <CustomerForm/>
          </Col>

        </Row>
      </Container>
    </>
  );
};

export default MainPage;
