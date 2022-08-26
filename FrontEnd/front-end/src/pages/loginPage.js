import React from "react";
import { Row, Container, Col } from "reactstrap";
import Login from "../components/loginForm";
import axios from "axios";
import apiURL from "../API";

const loginUser = async (loginInfo) => {
  console.log(loginInfo);
  axios
    .post(`${apiURL}/api/auth/signin`, loginInfo)
    .then((result) => {
      console.log("Yes");
      window.location = "http://localhost:3000/order";
    })
    .catch((error) => {
      console.log(error);
      alert("Incorrect Username or Password. Please try again");
    });
};

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
        <Login userLogin={loginUser} />
      </Container>
    </>
  );
};

export default LoginPage;
