import React, { useState } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";

const handleSubmit = (event, userLogin, loginInfo) => {
  event.preventDefault();
  console.log("helloo");
  userLogin(loginInfo);
};

const Login = ({ userLogin }) => {
  const [loginInfo, setLoginInfo] = useState({ username: "", password: "" });

  return (
    <Form
      style={{
        backgroundColor: "#d3ccbd",
        margin: "0",
        width: "25%",
      }}
      className="align-self-center"
      onSubmit={(event) => handleSubmit(event, userLogin, loginInfo)}
    >
      <FormGroup className="col-auto">
        {"Username"}
        <Label for="exampleEmail" hidden>
          LAN ID
        </Label>
        <Input
          id="examplelanid"
          placeholder="Username"
          type="lanid"
          value={loginInfo.username}
          onChange={(e) =>
            setLoginInfo({ ...loginInfo, username: e.target.value })
          }
        />
      </FormGroup>
      {"Password"}
      <FormGroup>
        <Label for="examplePassword" hidden>
          Password
        </Label>
        <Input
          id="examplePassword"
          placeholder="Password"
          type="password"
          value={loginInfo.password}
          onChange={(e) =>
            setLoginInfo({ ...loginInfo, password: e.target.value })
          }
        />
      </FormGroup>{" "}
      <Button type="submit" style={{ backgroundColor: "#434241" }}>
        Log In
      </Button>
    </Form>
  );
};

export default Login;
