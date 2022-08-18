import React from "react";
import { Row, Container, Col } from "reactstrap";
import CustomerForm from "../components/create-customer";
import NavigationBar from "../components/navigation";

const MainPage = () => {
  return (
    <>
      <Container fluid className="p-0">
        <Row h noGutters>
          <Col xs="2" className="Navbar-background" style={{ height: "100vh" }}>
            <NavigationBar />
          </Col>
          <Col xs="10" style={{ height: "100vh" }} className="p-4">
            <CustomerForm />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default MainPage;
