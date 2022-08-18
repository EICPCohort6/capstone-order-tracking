import React from "react";
import { Row, Container, Col, Nav, NavItem, NavLink } from "reactstrap";
import { Link } from "react-router-dom";

const NavigationBar = () => {
  return (
    <>
      <Container className="p-0">
        <img
          style={{ width: "100%" }}
          src="/assets/TJX.jpg"
          alt="Corportate logo"
        />

        <Row className="px-4">
          <Col xs="12" md="4" noGutters>
            <img
              src="/assets/default-profile.jpg"
              width="100%"
              height="100%"
              className="User-image"
              alt="placeholder"
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
              <Link to={"/"}>Customers</Link>
            </NavItem>
            <NavItem className="p-1">
              <Link to={"order"}>Orders</Link>
            </NavItem>
            <NavItem className="p-1">
              <Link to={"products"}>Products</Link>
            </NavItem>
          </Nav>
        </Row>
      </Container>
    </>
  );
};

export default NavigationBar;
