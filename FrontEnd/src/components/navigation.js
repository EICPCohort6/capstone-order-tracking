import React, { useState } from "react";
import { Button, Row, Container, Col, Nav, NavItem, NavLink } from "reactstrap";
import { Link } from "react-router-dom";

const NavigationBar = () => {
  const [active, setActive] = useState("Customers");
  return (
    <>
      <Container className="containernav row g-0">
        <img
          className="logopadding"
          style={{ width: "100%" }}
          src="/assets/TJX.png"
          alt="TJX Logo"
        />
        <h2 className="logotext p-2">Order Tracking System</h2>
        <Row className="g-0">
          <Col xs="4">
            <img
              className="User-image"
              src="/assets/checkbox.png"
              alt="Logged in checkbox"
            />
          </Col>
          <Col xs="8" className="d-flex align-items-center">
            <h2 className="User-nametitle">
              {window.localStorage.getItem("username")}
            </h2>
          </Col>
          <Nav justified pills vertical>
            <NavItem className="p-2 pills">

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
        <Button
          type="button"
          className="logout col p-2 g-3"
          color="danger"
          onClick={function signOut() {
            window.localStorage.clear();
            window.location = "https://capstone-csr.azurewebsites.net/login";
            window.location.href = "https://capstone-csr.azurewebsites.net/login";
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
