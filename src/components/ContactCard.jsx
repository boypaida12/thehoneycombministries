/* eslint-disable no-unused-vars */
import { Button } from "@mui/material";
import React from "react";
import { Col, Form, Row } from "react-bootstrap";

function ContactCard() {
  return (
    <>
      <Form className="p-lg-5 mb-3 mb-lg-0">
        <Row>
          <h1 className="my-3 mb-lg-5 text-yellow fw-semibold">{`Let Us Talk`}</h1>
          <Col lg={6}>
            <Form.Group className="mb-3">
              <Form.Label className="fw-semibold text-muted">
                Full name
              </Form.Label>
              <Form.Control
                type="name"
                name="name"
                placeholder="Kabutey Kwashie"
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3">
              <Form.Label className="fw-semibold text-muted">
                Email address
              </Form.Label>
              <Form.Control
                type="email"
                placeholder="kabuteykwashie@example.com"
              />
            </Form.Group>
          </Col>
        </Row>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label className="fw-semibold text-muted">Subject</Form.Label>
          <Form.Control
            type="text"
            name="subject"
            placeholder="kabuteykwashie@example.com"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label className="fw-semibold text-muted">Message</Form.Label>
          <Form.Control
            as="textarea"
            name="message"
            rows={5}
            placeholder="Type message here"
          />
        </Form.Group>
        <Button
          className="mx-md-auto rounded-pill fw-bold text-white px-4"
          style={{ backgroundColor: "rgba(228, 141, 35, 0.9)" }}
          size="large"
          type="submit"
        >
          Submit
        </Button>
      </Form>
    </>
  );
}

export default ContactCard;
