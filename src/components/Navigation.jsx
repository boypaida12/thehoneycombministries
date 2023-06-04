/* eslint-disable no-unused-vars */
import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

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
              <span className="text-white fw-bold logo-text">THE HONEYCOMB MINISTRIES</span>
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link>
                <Link to="/" className="nav-link text-white fw-semibold">
                  HOME
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/events" className="nav-link text-white fw-semibold">
                  EVENTS
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/contact-us" className="nav-link text-white fw-semibold">
                  CONTACT
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/events" className="nav-link text-white fw-semibold">
                  GALLERY
                </Link>
              </Nav.Link>
              <Nav.Link>
                <div className="mentorship-btn fw-semibold rounded-pill px-3">
                  <Link to="/mentorship" className="nav-link" style={{color: "rgba(246, 201, 80"}}>
                    MENTORSHIP
                  </Link>
                </div>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      
    </>
  );
}

export default Navigation;
