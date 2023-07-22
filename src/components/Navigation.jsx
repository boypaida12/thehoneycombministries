/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { animate, motion } from "framer-motion";

function Navigation({ textColor, shadowLg, bgYellow, bgBody }) {
  const [isNavbarExpanded, setIsNavbarExpanded] = useState(false);

  const handleNavbarToggle = () => {
    setIsNavbarExpanded(!isNavbarExpanded);
  };

  const navLinks = [
    { to: "/events", text: "FOUNDER" },
    { to: "/gallery", text: "GALLERY" },
    { to: "/contact", text: "CONTACT" },
  ];

  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        className={`navbar ${shadowLg} ${bgBody}`}
        expanded={isNavbarExpanded}
        onToggle={handleNavbarToggle}
      >
        <Container>
          <Navbar.Brand>
            <Link to={"/"} className="nav-link">
              <span className={`text-white logo-text fw-bold fs-6`}>
                THE <span className={`${textColor}`}> HONEYCOMB </span>
                MINISTRIES
              </span>
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <NavDropdown
                title="HOME"
                id="basic-nav-dropdown"
                className="nav-link fw-semibold align-self-lg-center w-25"
              >
                <NavDropdown.Item href="/#aboutMinistry">
                  <small>About</small>
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/#packages">
                  <small>Packages</small>
                </NavDropdown.Item>
              </NavDropdown>
              {navLinks.map((link, index) => (
                <React.Fragment key={link.to}>
                  {isNavbarExpanded && (
                    <motion.div
                      className="align-self-lg-center"
                      initial={{ x: "-200" }}
                      animate={{ x: 0 }}
                      transition={{ delay: 0.3 + index * 0.45, duration: 0.5 }}
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
                  transition={{ delay: 1.75, duration: 0.5 }}
                >
                  <NavDropdown
                    title="FORMS"
                    id="basic-nav-dropdown"
                    className="nav-link fw-semibold align-self-lg-center w-25"
                  >
                    <NavDropdown.Item
                      href="https://docs.google.com/forms/d/e/1FAIpQLSdPplIVaHZvmVt7Y8W05bsalHywTs6mT4KEQQYVa9pDdL6gIw/viewform?vc=0&c=0&w=1&flr=0&usp=mail_form_link"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <small>Mentorship</small>
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item
                      href="https://docs.google.com/forms/d/e/1FAIpQLSeD-q_go2QZQ2LigCqMMinJEadCzeWwIob-uu_5sAhwB1HE7g/viewform?vc=0&c=0&w=1&flr=0&usp=mail_form_link"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <small>Partnership</small>
                    </NavDropdown.Item>
                  </NavDropdown>
                </motion.div>
              )}
              {!isNavbarExpanded && (
                <NavDropdown
                  title="FORMS"
                  id="basic-nav-dropdown"
                  className="nav-link fw-semibold align-self-lg-center w-25"
                >
                  <NavDropdown.Item
                    href="https://docs.google.com/forms/d/e/1FAIpQLSdPplIVaHZvmVt7Y8W05bsalHywTs6mT4KEQQYVa9pDdL6gIw/viewform?vc=0&c=0&w=1&flr=0&usp=mail_form_link"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <small>Mentorship</small>
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item
                    href="https://docs.google.com/forms/d/e/1FAIpQLSeD-q_go2QZQ2LigCqMMinJEadCzeWwIob-uu_5sAhwB1HE7g/viewform?vc=0&c=0&w=1&flr=0&usp=mail_form_link"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <small>Partnership</small>
                  </NavDropdown.Item>
                </NavDropdown>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Navigation;
