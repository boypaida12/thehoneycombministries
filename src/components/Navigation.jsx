/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { animate, motion } from "framer-motion";

function Navigation({ textColor, shadowLg, bgYellow }) {
  const [isNavbarExpanded, setIsNavbarExpanded] = useState(false);

  const handleNavbarToggle = () => {
    setIsNavbarExpanded(!isNavbarExpanded);
  };

  const navLinks = [
    { to: "/", text: "HOME" },
    { to: "/events", text: "EVENTS" },
    { to: "/contact", text: "CONTACT" },
    { to: "/gallery", text: "GALLERY" },
  ];

  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        className={`navbar ${bgYellow} ${shadowLg}`}
        expanded={isNavbarExpanded}
        onToggle={handleNavbarToggle}
      >
        <Container>
          <Navbar.Brand>
            <Link to={"/"} className="nav-link">
              <span className={`text-white logo-text fw-bold fs-6`}>
                THE <span className={`${textColor}`}> HONEYCOMB</span>
                MINISTRIES
              </span>
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              {navLinks.map((link, index) => (
                <React.Fragment key={link.to}>
                  {isNavbarExpanded && (
                    <motion.div
                      className="align-self-lg-center"
                      initial={{ x: "-100" }}
                      animate={{ x: 0 }}
                      transition={{ delay: 0.5 + index * 0.5 }}
                    >
                      <Nav.Link
                        as={Link}
                        to={link.to}
                        className={`nav-link text-white fw-semibold`}
                      >
                        {link.text}
                      </Nav.Link>
                    </motion.div>
                  )}
                  {!isNavbarExpanded && (
                    <Nav.Link
                      as={Link}
                      to={link.to}
                      className={`nav-link text-white fw-semibold align-self-lg-center`}
                    >
                      {link.text}
                    </Nav.Link>
                  )}
                </React.Fragment>
              ))}
              {isNavbarExpanded && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 2.5, duration: 1 }}
                >
                  <Nav.Link
                    href="https://docs.google.com/forms/d/e/1FAIpQLSdPplIVaHZvmVt7Y8W05bsalHywTs6mT4KEQQYVa9pDdL6gIw/viewform?vc=0&c=0&w=1&flr=0&usp=mail_form_link"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="mentorship-btn fw-bold rounded-pill px-3">
                      <span className="nav-link text-white">MENTORSHIP</span>
                    </div>
                  </Nav.Link>
                </motion.div>
              )}
              {!isNavbarExpanded && (
                <Nav.Link
                  href="https://docs.google.com/forms/d/e/1FAIpQLSdPplIVaHZvmVt7Y8W05bsalHywTs6mT4KEQQYVa9pDdL6gIw/viewform?vc=0&c=0&w=1&flr=0&usp=mail_form_link"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="mentorship-btn fw-bold rounded-pill px-3">
                    <span className="nav-link text-white">MENTORSHIP</span>
                  </div>
                </Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Navigation;
