import React from "react";
import { Row, Container, Col, Nav, NavItem, NavLink } from "reactstrap";

const NavigationBar = () => {
  return (
    <>
      <Container className="p-0">
        <Row xs="1" noGutters>
          <img src="/assets/placeholder_template.jpg" />
        </Row>
        <Row className="px-4">
          <Col xs="12" md="4" noGutters>
            <img
              src="/assets/default-profile.jpg"
              width="100%"
              height="100%"
              className="User-image"
            />
          </Col>
          <Col xs="12" md="8" className="User-name p-2">
            <p>Username</p>
          </Col>
        </Row>
        <Row className="p-0 Color-nav">
          <Nav pills vertical>
            <NavItem className="p-1">
              <NavLink active href="#">
                Orders
              </NavLink>
            </NavItem>
            <NavItem className="p-1">
              <NavLink href="#">Customers</NavLink>
            </NavItem>
            <NavItem className="p-1">
              <NavLink href="#">Products</NavLink>
            </NavItem>
          </Nav>
        </Row>
      </Container>
    </>
  );
};

export default NavigationBar;
