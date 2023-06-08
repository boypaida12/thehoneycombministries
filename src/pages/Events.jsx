/* eslint-disable no-unused-vars */
import React from "react";
import Navigation from "../components/Navigation";
import { Container, Row } from "react-bootstrap";
import EventCard from "../components/EventCard";
import Footer from "../components/footer/Footer";

function Events() {
  return (
    <>
      <Navigation />
      <Container className="my-5">
        <Row className="row-gap-5">
          <EventCard/>
          <EventCard/>
          <EventCard/>
          <EventCard/>
        </Row>
      </Container>
      <Footer/>
    </>
  );
}

export default Events;
