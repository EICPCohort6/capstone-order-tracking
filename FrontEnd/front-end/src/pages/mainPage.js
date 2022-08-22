import React from "react";
import { Outlet } from "react-router-dom";
import { Row, Container, Col } from "reactstrap";
import CustomerForm from "./customerForm";
import NavigationBar from "../components/navigation";

const MainPage = () => {
  return (
    <>
      <h1>header/logo</h1>
      <Container fluid>
        <Row>
          <Col xs="2" className="Navbar-background" style={{ height: "100vh" }}>
            <NavigationBar />
          </Col>
          <Col xs="10" md="8" className="p-3">
            <Outlet />
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
