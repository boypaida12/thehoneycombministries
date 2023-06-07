/* eslint-disable no-unused-vars */
import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" className="navbar">
        <Container>
          <Navbar.Brand>
            <Link to={"/"} className="nav-link">
              <span className="text-white logo-text fw-bold fs-6">
                THE <span className="text-yellow"> HONEYCOMB</span> MINISTRIES
              </span>
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
                <Link
                  to="/contact-us"
                  className="nav-link text-white fw-semibold"
                >
                  CONTACT
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/events" className="nav-link text-white fw-semibold">
                  GALLERY
                </Link>
              </Nav.Link>
              <Nav.Link
                href="https://docs.google.com/forms/d/e/1FAIpQLSdPplIVaHZvmVt7Y8W05bsalHywTs6mT4KEQQYVa9pDdL6gIw/viewform?vc=0&c=0&w=1&flr=0&usp=mail_form_link"
                target="_blank"
                rel="noreferrer"
              >
                <div className="mentorship-btn fw-bold rounded-pill px-3">
                  <span
                    className="nav-link"
                    style={{ color: "rgba(228, 141, 35, 0.9)" }}
                  >
                    MENTORSHIP
                  </span>
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
