import React from "react";
import { Row, Container, Col } from "reactstrap";
import CustomerForm from "../components/create-customer";

const MainPage = () => {
  return (
    <>
      <h1>[header/logo]</h1>
      <Container>
        <CustomerForm />
      </Container>
    </>
  );
};

export default MainPage;
