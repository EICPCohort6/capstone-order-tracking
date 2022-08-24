import React from "react";
import { Outlet } from "react-router-dom";
import { Row, Container, Col } from "reactstrap";
import NavigationBar from "../components/navigation";

const MainPage = () => {
  return (
    <>
<<<<<<< HEAD
      <h1>header/logo</h1>
      <Container fluid>
        <Row>
          <Col xs="2" className="Navbar-background" style={{ height: "100vh" }}>
            <NavigationBar />
          </Col>
          <Col xs="10" md="8" className="p-3">
=======
      <Container fluid className="row g-0">
        <Row className="row g-0">
          <Col xs="2" className="Navbar-background" style={{ height: "100vh" }}>
            <NavigationBar />
          </Col>
          <Col xs="10" className="p-3">
>>>>>>> 8a62cf4b46a51d486a00c66ac2e4a3fecdecef8f
            <Outlet />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default MainPage;
