/* eslint-disable no-unused-vars */
import React from "react";
import Navigation from "../components/Navigation";
import { Col, Container, Row } from "react-bootstrap";
import ContactCard from "../components/ContactCard";
import ContactIcons from "../components/ContactIcons";
import Footer from "../components/footer/Footer";

function Contact() {
  return (
    <>
      <Navigation />
      <Container className="my-5 border-yellow rounded-4 overflow-hidden">
        <Row>
          <Col md={8} className="bg-body-tertiary">
            <ContactCard />
          </Col>
          <Col className="bg-body">
            <ContactIcons />
          </Col>
        </Row>
      </Container>
      <Footer/>
    </>
  );
}

export default Contact;
