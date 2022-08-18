import React from "react";
import { Row, Container, Col } from "reactstrap";
import OrdersPage from "./ordersPage";
const MainPage = () => {
  return (
    <>
      <h1>header/logo</h1>
      <Container fluid>
        <Row>
          <Col xs="4">
            <h1>NAVBAR HERE</h1>
          </Col>
          <Col xs="8">
            <h1>BASE CONTENT HERE</h1>
            <OrdersPage/>
          </Col>

        </Row>
      </Container>
    </>
  );
};

export default MainPage;
