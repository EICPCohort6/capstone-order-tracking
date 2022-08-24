import React from "react";
import { Row, Form, Col, FormGroup, Label, Input, Button } from "reactstrap";

const Login = () => {
  return (
    <Form
      style={{
        backgroundColor: "#9b0c23",
        color: "#ffffff",
        margin: "0",
        width: "25%",
      }}
      className="align-self-center"
    >
      <FormGroup className="col-auto">
        {"Username"}
        <Label for="exampleEmail" hidden>
          LAN ID
        </Label>
        <Input
          id="examplelanid"
          name="lanid"
          placeholder="LAN ID"
          type="lanid"
        />
      </FormGroup>
      {"Password"}
      <FormGroup>
        <Label for="examplePassword" hidden>
          Password
        </Label>
        <Input
          id="examplePassword"
          name="password"
          placeholder="Password"
          type="password"
        />
      </FormGroup>{" "}
      <Button style={{ backgroundColor: "#434241" }}>Log In</Button>
    </Form>
  );
};

export default Login;
