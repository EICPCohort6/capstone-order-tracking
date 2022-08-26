import React from "react";
import { Container } from "reactstrap";
import Login from "../components/loginForm";
import axios from "axios";

const loginUser = async (loginInfo) => {
  console.log(loginInfo);
  axios
    .post(`http://localhost:8080/api/auth/signin`, loginInfo)
    .then(() => {
      window.localStorage.setItem("username", loginInfo.username);
      window.location = "http://localhost:3000/order";
    })
    .catch(() => {
      alert("Incorrect Username or Password. Please try again");
    });
};

const LoginPage = () => {
  return (
    <>
      <Container
        fluid
        style={{
          backgroundColor: "#fff9f1",
          height: "100vh",
          alignItems: "center",
          flexDirection: "column",
          display: "flex",
        }}
        className="border border-dark col-form-label-lg row g-0"
      >
        <img className="tjxlogo" src="/assets/TJX.png" alt="TJX Logo" />
        <h1 className="texttag">Order Tracking System</h1>
        <Login userLogin={loginUser} className="yes" />
      </Container>
    </>
  );
};

export default LoginPage;
