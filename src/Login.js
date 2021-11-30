import React, { Fragment, useState } from "react";
import "./Login.css";
import { Navigate } from "react-router-dom";
import { Form, Button, Col, FormGroup, Label, Input } from "reactstrap";

function Login() {
  return (
    <Fragment>
      <Form>
        <center>
          <FormGroup className="mb-3 ">
            <Col lg="6" sm="6" md="6">
              <Label for="email">Email address</Label>
            </Col>
            <Col lg="6" sm="6" md="6">
              <Input type="email" placeholder="Enter email" />
            </Col>
          </FormGroup>

          <FormGroup className="mb-3 ">
            <Col lg="6" sm="6" md="6">
              <Label>Password</Label>
            </Col>
            <Col lg="6" sm="6" md="6">
              <Input type="password" placeholder="Password" />
            </Col>
          </FormGroup>
          <Button variant="primary" onClick={() => <Navigate to="/" />}>
            Login
          </Button>
        </center>
      </Form>
    </Fragment>
  );
}

export default Login;
