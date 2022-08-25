import React, { useState } from "react";
import { Button, Row, Container, Col, Nav, NavItem, NavLink } from "reactstrap";
import { Link } from "react-router-dom";

const NavigationBar = () => {
  const [active, setActive] = useState("");
  return (
    <>
      <Container className="containernav row g-0">
        <img style={{ width: "100%" }} src="/assets/placeholder_template.jpg" />
        <Row className="g-0">
          <Col xs="4">
            <img className="User-image" src="/assets/checkbox.png" />
          </Col>
          <Col xs="8" className="d-flex align-items-center">
            <h2 className="User-nametitle">(USER ID goes here)</h2>
          </Col>
          <Nav justified pills vertical>
            <NavItem className="p-2 pills">
              <NavLink
                active={active === "Customers"}
                className=" nav-link"
                to="/"
              >
                <Link
                  className="nav"
                  onClick={() => setActive("Customers")}
                  to={"/"}
                >
                  Customers
                </Link>
              </NavLink>
            </NavItem>
            <NavItem className="p-2">
              <NavLink active={active === "Orders"} className="nav-link" to="/">
                <Link
                  onClick={() => setActive("Orders")}
                  to={"order"}
                  className="nav"
                >
                  Orders
                </Link>
              </NavLink>
            </NavItem>
            <NavItem className="p-2">
              <NavLink active={active === "Products"} className="nav" to="/">
                <Link onClick={() => setActive("Products")} to={"products"}>
                  Products
                </Link>
              </NavLink>
            </NavItem>
          </Nav>
        </Row>
        <Button
          type="button"
          className="logout col p-2 g-3"
          color="danger"
          onClick={function signOut() {
            window.location = "http://localhost:3000/login";
            window.location.href = "http://localhost:3000/login";
          }}
        >
          Sign Out
        </Button>
        {""}
      </Container>
    </>
  );
};

export default NavigationBar;
