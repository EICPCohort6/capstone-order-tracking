import React from "react";
import { Outlet } from "react-router-dom";
import { Row, Container, Col } from "reactstrap";
import NavigationBar from "../components/navigation";

const MainPage = () => {
  return (
    <>
      <Container fluid>
        <Row>
          <Col xs="2" className="Navbar-background" style={{ height: "100vh" }}>
            <NavigationBar />
          </Col>
          <Col xs="10" md="8" className="p-3">
            <Outlet />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default MainPage;
