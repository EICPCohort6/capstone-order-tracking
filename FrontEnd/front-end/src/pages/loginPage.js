import React from "react";
import { Row, Container, Col } from "reactstrap";
import Login from "../components/loginForm";

const LoginPage = () => {
  return (
    <>
      <Container
        fluid
        style={{
          backgroundColor: "#9b0c23",
          height: "100vh",
          alignItems: "center",
          flexDirection: "column",
          rowGap: "25%",
          display: "flex",
        }}
        className="border border-dark col-form-label-lg row g-0"
      >
        <img className="something" src="/assets/placeholder_template.jpg" />
        <Login />
      </Container>
    </>
  );
};

export default LoginPage;
