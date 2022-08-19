import React from "react";
import { Outlet } from "react-router-dom";
import { Row, Container, Col } from "reactstrap";
<<<<<<< HEAD
import CustomerForm from "./customerForm";
=======
import NavigationBar from "../components/navigation";

>>>>>>> front-end
const MainPage = () => {
  return (
    <>
      <h1>header/logo</h1>
      <Container fluid>
<<<<<<< HEAD
           <Col xs="8">
            <h1>BASE CONTENT HERE</h1>
          </Col> <Row>
          <Col xs="4">
            <h1>NAVBAR HERE</h1>
=======
        <Row>
          <Col xs="2" className="Navbar-background" style={{ height: "100vh" }}>
            <NavigationBar />
>>>>>>> front-end
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
