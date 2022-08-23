import React from "react";
import { Outlet } from "react-router-dom";
import { Row, Container, Col } from "reactstrap";
import NavigationBar from "../components/navigation";

const MainPage = () => {
  return (
    <>
      <Container fluid className="row g-0">
        <Row className="row g-0">
          <Col xs="2" className="Navbar-background" style={{ height: "100vh" }}>
            <NavigationBar />
          </Col>
          <Col xs="10" className="p-3">
            <Outlet />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default MainPage;
