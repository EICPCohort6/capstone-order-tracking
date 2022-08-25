<<<<<<< HEAD
import React from "react";
import { Row, Container, Col, Nav, NavItem, NavLink } from "reactstrap";
import { Link } from "react-router-dom";

const NavigationBar = () => {
  return (
    <>
      <Container className="p-0">
        <img style={{ width: "100%" }} src="/assets/placeholder_template.jpg" alt=""/>

        <Row className="px-4">
          <Col xs="12" md="4" noGutters>
            <img
              src="/assets/default-profile.jpg"
              width="100%"
              height="100%"
              className="User-image"
              alt=""
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
          </Nav>
        </Row>
=======
import React, { useState } from "react";
import { Button, Row, Container, Col, Nav, NavItem, NavLink } from "reactstrap";
import { Link } from "react-router-dom";

const NavigationBar = () => {
  const [active, setActive] = useState("");
  return (
    <>
      <Container className="containernav row g-0">
        <img style={{ width: "100%" }} src="/assets/placeholder_template.jpg" alt = "" />
        <Row className="g-0">
          <Col xs="4">
            <img className="User-image" src="/assets/checkbox.png" alt ="" />
          </Col>
          <Col xs="8" className="d-flex align-items-center">
            <h2 className="User-nametitle">(USER ID goes here)</h2>
          </Col>
          <Nav justify pills vertical>
            <NavItem className="p-2">
              <NavLink
                active={active === "Customers"}
                className=" nav-link"
                to="/"
              >
                <Link onClick={() => setActive("Customers")} to={"/"}>
                  Customers
                </Link>
              </NavLink>
            </NavItem>
            <NavItem className="p-2">
              <NavLink active={active === "Orders"} className="nav-link" to="/">
                <Link
                  onClick={() => setActive("Orders")}
                  to={"order"}
                  className="Color-nav"
                >
                  Orders
                </Link>
              </NavLink>
            </NavItem>
            <NavItem className="p-2">
              <NavLink
                active={active === "Products"}
                className="nav-link"
                to="/"
              >
                <Link onClick={() => setActive("Products")} to={"products"}>
                  Products
                </Link>
              </NavLink>
            </NavItem>
          </Nav>
        </Row>
        <Button className="logout col p-2 g-3" color="danger">
          Sign Out
        </Button>
        {""}
>>>>>>> 8a62cf4b46a51d486a00c66ac2e4a3fecdecef8f
      </Container>
    </>
  );
};

export default NavigationBar;
