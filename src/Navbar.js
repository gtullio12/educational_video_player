import React, { useState } from "react";
import logo from "./logos/FULL_LOGO_COLOR.png";
import Navbar from "react-bootstrap/Navbar";
import { Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { Container } from "react-bootstrap";
import { Popover, ArrowContainer } from "react-tiny-popover";
import { Popup } from "./Popup";

const TopNavBar = (popup) => {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  return (
    <div>
      <Navbar
        bg="dark"
        data-bs-theme="dark"
        sticky="top"
        className="bg-body-tertiary"
      >
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
            <Popover
              isOpen={isPopoverOpen}
              positions={["top", "bottom", "left", "right"]} // if you'd like, you can limit the positions
              padding={10} // adjust padding here!
              onClickOutside={() => setIsPopoverOpen(false)}
              content={({ position, childRect, popoverRect }) => (
                <ArrowContainer
                  position={position}
                  childRect={childRect}
                  popoverRect={popoverRect}
                  arrowColor={"#2a2e2d"}
                  arrowSize={8}
                >
                  <div>
                    <div className="popover-content">
                      <Popup isPopoverOpen={isPopoverOpen} 
                      setIsPopoverOpen={setIsPopoverOpen}
                      />
                    </div>
                  </div>
                </ArrowContainer>
              )}
            >
              <div>
                <Button
                  onClick={() => {
                    setIsPopoverOpen(!isPopoverOpen);
                  }}
                  type="upload"
                >
                  Upload
                </Button>
              </div>
            </Popover>
          </Form>
        </Container>
      </Navbar>
    </div>
  );
};

export default TopNavBar;
