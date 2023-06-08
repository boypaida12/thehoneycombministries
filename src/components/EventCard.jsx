/* eslint-disable no-unused-vars */
import React from "react";
import { Col, Image } from "react-bootstrap";
import EventI from "../assets/event_I.jpg";
import { CalendarMonth } from "@mui/icons-material";
import { Room } from "@mui/icons-material";

function EventCard() {
  return (
    <>
      <Col md={6}>
        <Image src={EventI} style={{ width: "45vw" }} />
      </Col>
      <Col className="align-self-center px-md-5">
        <p className="fs-2 fw-semibold">The Honeycomb Experience</p>
        <div className="d-inline-flex gap-3">
            <CalendarMonth/>
            <span className="fw-semibold text-muted">Sunday 20th June, 2023 - Sunday 28th June 2023</span>
        </div>
        <div className="d-inline-flex gap-3 my-3">
            <Room sx={{color:"#e48d23e6"}}/>
            <span className="fw-semibold text-yellow">Lorem Location</span>
        </div>
        <div className="d-flex gap-3">
            <CalendarMonth/>
            <span className="fw-semibold text-muted">5pm - 8pm each night</span>
        </div>
      </Col>
    </>
  );
}

export default EventCard;
