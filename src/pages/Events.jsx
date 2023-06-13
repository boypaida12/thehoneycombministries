/* eslint-disable no-unused-vars */
import React from "react";
import Navigation from "../components/Navigation";
import { Container, Row } from "react-bootstrap";
import EventCard from "../components/EventCard";
import Footer from "../components/footer/Footer";
import { motion } from "framer-motion";

function Events() {
  return (
    <>
      <Navigation shadowLg={"shadow-lg"} bgYellow={"bg-yellow"} />
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Container className="my-5">
          <Row className="row-gap-5">
            <EventCard />
            <EventCard />
            <EventCard />
            <EventCard />
          </Row>
        </Container>
      </motion.div>
      <Footer />
    </>
  );
}

export default Events;
