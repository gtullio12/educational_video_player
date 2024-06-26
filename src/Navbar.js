import React from "react";
import Popup from "./Popup";
import logo from "./logos/FULL_LOGO_COLOR.png";
import Navbar from "react-bootstrap/Navbar";
import { Form, Nav } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { Popover, ArrowContainer } from "react-tiny-popover";
import { withRouter } from "./withRouter";
import { Link } from "react-router-dom";

export class TopNavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isPopOverOpen: false,
      searchVideoContent: "",
    };
    this.setIsPopoverOpen = this.setIsPopoverOpen.bind(this);
    this.setSearchVideoContent = this.setSearchVideoContent.bind(this);
  }

  setIsPopoverOpen(e) {
    this.setState({
      isPopOverOpen: e,
    });
  }

  setSearchVideoContent(e) {
    this.setState({
      searchVideoContent: e,
    });
  }

  handleSearch() {
    if (this.state.searchVideoContent.length !== 0) {
      this.props.navigate("/search/" + this.state.searchVideoContent);
    }
  }

  render() {
    return (
      <div>
        <Navbar
          bg="dark"
          data-bs-theme="dark"
          sticky="top"
          expand="lg"
          className="bg-body-tertiary justify-content-between"
        >
          <Nav classname="ml-auto">
            <Form
              style={{
                marginLeft: '1rem',
                display: "flex",
                flexDirection: "row",
              }}
              inline
            >
              <Form.Control
                value={this.state.searchVideoContent}
                onChange={(e) => {
                  this.setSearchVideoContent(e.target.value);
                }}
                placeholder="Search Videos..."
                aria-label="Search Videos..."
                aria-describedby="basic-addon1"
              ></Form.Control>
              <Button
                onClick={(event) => {
                  event.preventDefault();
                  this.handleSearch();
                }}
                type="search"
              >
                Search
              </Button>
            </Form>
          </Nav>
          <Form inline>
            <Navbar.Brand href="#home">
              <Link to="/">
                <img
                  width={150}
                  height={40}
                  src={logo}
                  className="d-inline-block align-top"
                />
              </Link>
            </Navbar.Brand>
          </Form>
          <Form style={{marginRight: '1rem'}} inline>
            <Popover
              isOpen={this.state.isPopOverOpen}
              positions={["top", "bottom", "left", "right"]} // if you'd like, you can limit the positions
              align="start"
              padding={10} // adjust padding here!
              onClickOutside={() => this.setIsPopoverOpen(false)}
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
                      <Popup
                        isPopoverOpen={this.state.isPopOverOpen}
                        setIsPopoverOpen={this.setIsPopoverOpen}
                      />
                    </div>
                  </div>
                </ArrowContainer>
              )}
            >
              <div>
                <Button
                  onClick={() => {
                    this.setIsPopoverOpen(!this.state.isPopOverOpen);
                  }}
                >
                  Upload
                </Button>
              </div>
            </Popover>
          </Form>
        </Navbar>
      </div>
    );
  }
}

export default withRouter(TopNavBar);
