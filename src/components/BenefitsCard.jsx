/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import Cross from "../assets/yellow-cross.png";
import { Col, Row } from "react-bootstrap";

function BenefitsCard({
  benefitI,
  benefitII,
  benefitIII,
  benefitIV,
  benefitV,
}) {
  return (
    <>
      <Row className="gap-2">
        <Col xs={1} className="align-self-center">
          <img src={Cross} width={20} />
        </Col>
        <Col className="align-self-center">
          <small>
            <p className="">{benefitI} </p>
            <p>{benefitII} </p>
            <p>{benefitIII} </p>
            <p>{benefitIV} </p>
            <p>{benefitV} </p>
          </small>
        </Col>
      </Row>
    </>
  );
}

export default BenefitsCard;
