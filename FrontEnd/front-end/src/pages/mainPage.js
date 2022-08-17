import React from "react";
import { Row, Container, Col } from "reactstrap";
import CustomerForm from "../components/create-customer";

const MainPage = () => {
  return (
    <>
      <h1>header/logo</h1>
      <Container fluid>
        <Row>
          <Col xs="3">
            <h1>NAVBAR HERE</h1>
          </Col>
          <Col xs="6">
            <CustomerForm />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default MainPage;
