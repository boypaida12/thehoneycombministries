/* eslint-disable no-unused-vars */
import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import Logo from "../assets/Logo.png";

function Navigation() {
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        className="navbar"
      >
        <Container>
          <Navbar.Brand>
            <Link to={"/"} className="nav-link">
              <img src={Logo} alt="Logo" width={80} />
              {"THE HONEYCOMB MINISTRIES"}
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link>
                <Link to="/events" className="nav-link">
                  EVENTS
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/contact-us" className="nav-link">
                  CONTACT
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/events" className="nav-link">
                  GALLERY
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/events" className="nav-link">
                  MENTORSHIP
                </Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      
    </>
  );
}

export default Navigation;
