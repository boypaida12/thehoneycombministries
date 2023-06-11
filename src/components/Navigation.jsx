/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

function Navigation({textColor, shadowLg}) {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" className={`navbar bg-yellow ${shadowLg}`}>
        <Container>
          <Navbar.Brand>
            <Link to={"/"} className="nav-link">
              <span className={`text-white logo-text fw-bold fs-6`}>
                THE <span className={`${textColor}`}> HONEYCOMB</span> MINISTRIES
              </span>
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/" className={`nav-link text-white fw-semibold align-self-lg-center`}>
                  HOME
              </Nav.Link>
              <Nav.Link as={Link} to="/events" className={`nav-link text-white fw-semibold align-self-lg-center`}>
                  EVENTS
              </Nav.Link>
              <Nav.Link as={Link} to="/contact-us"
                  className={`nav-link text-white fw-semibold align-self-lg-center`}
                >
                  CONTACT
              </Nav.Link>
              <Nav.Link as={Link} to="/gallery" className={`nav-link text-white fw-semibold align-self-lg-center`}>
                  GALLERY
              </Nav.Link>
              <Nav.Link
                href="https://docs.google.com/forms/d/e/1FAIpQLSdPplIVaHZvmVt7Y8W05bsalHywTs6mT4KEQQYVa9pDdL6gIw/viewform?vc=0&c=0&w=1&flr=0&usp=mail_form_link"
                target="_blank"
                rel="noreferrer"
              >
                <div className="mentorship-btn fw-bold rounded-pill px-3">
                  <span
                    className="nav-link text-white"
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
