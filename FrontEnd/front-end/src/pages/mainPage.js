import React from "react";
import { Outlet } from "react-router-dom";
import { Row, Container, Col } from "reactstrap";
import NavigationBar from "../components/navigation";
import CustomerForm from "../components/create-customer";

const MainPage = () => {
  return (
    <>
      <Container fluid className="row g-0">
        <Row className="row g-0">
          <Col xs="2" className="Navbar-background" style={{ height: "100vh" }}>
            <NavigationBar />
          </Col>
          <Col xs="10" md="8" className="p-3"></Col>
        </Row>
      </Container>
    </>
  );
};

export default MainPage;
