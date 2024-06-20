import React from "react";
import logo from "./logos/FULL_LOGO_COLOR.png";
import Navbar from "react-bootstrap/Navbar";
import { Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { Container } from "react-bootstrap";

const TopNavBar = () => {
  return (
    <Navbar bg="dark" data-bs-theme="dark" sticky="top" className="bg-body-tertiary">
      <Container>
        <Form inline>
          <Form.Control
            placeholder="Search Videos..."
            aria-label="Search Videos..."
            aria-describedby="basic-addon1"
          ></Form.Control>
        </Form>
        <Form inline>
          <Navbar.Brand href="#home">
            <img
              width={150}
              height={40}
              src={logo}
              className="d-inline-block align-top"
            />
          </Navbar.Brand>
        </Form>
        <Form inline>
          <Button type="upload">Upload</Button>
        </Form>
      </Container>
    </Navbar>
  );
};

export default TopNavBar;