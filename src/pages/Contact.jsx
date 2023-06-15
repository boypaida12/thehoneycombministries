/* eslint-disable no-unused-vars */
import React from "react";
import Navigation from "../components/Navigation";
import { Col, Container, Row } from "react-bootstrap";
import ContactCard from "../components/ContactCard";
import ContactIcons from "../components/ContactIcons";
import Footer from "../components/footer/Footer";
import { motion } from "framer-motion";

function Contact() {
  return (
    <>
      <div>
        <Navigation shadowLg={"shadow-lg"} bgBody={"bg-yellow"}/>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <Container className="my-5 shadow-lg overflow-hidden">
            <Row>
              <Col lg={8} className="bg-body-tertiary">
                <ContactCard />
              </Col>
              <Col className="bg-body">
                <ContactIcons />
              </Col>
            </Row>
          </Container>
          <Footer />
        </motion.div>
      </div>
    </>
  );
}

export default Contact;
