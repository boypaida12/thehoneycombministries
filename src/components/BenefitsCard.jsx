/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import Cross from "../assets/yellow-cross.png";
import { Col, Row } from "react-bootstrap";

function BenefitsCard({benefit}) {
  return (
    <>
      <Row className="gap-2 mb-2">
        <Col xs={1}>
          <img src={Cross} width={15} />
        </Col>
        <Col>
          {benefit}
        </Col>
      </Row>
    </>
  );
}

export default BenefitsCard;
