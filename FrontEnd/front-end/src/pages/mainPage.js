import React from "react";
import { Outlet } from "react-router-dom";
import { Row, Container, Col } from "reactstrap";

const MainPage = () => {
  return (
    <>
      <h1>header/logo</h1>
      <Container fluid>
        <Row>
          <Col xs="2">
            <h1>NAVBAR HERE</h1>
          </Col>
          <Col xs="10" md="8">
            <Outlet />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default MainPage;
