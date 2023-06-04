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
              <span className="text-white logo-text" style={{fontWeight: 700}}>THE <span style={{color: "rgba(228, 141, 35, 0.9)"}}> HONEYCOMB</span> MINISTRIES</span>
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link>
                <Link to="/" className="nav-link text-white" style={{fontWeight: 500}}>
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
                  <Link to="/mentorship" className="nav-link" style={{color: "rgba(228, 141, 35, 0.9)"}}>
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
