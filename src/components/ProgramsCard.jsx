/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { Col, Image } from "react-bootstrap";

function ProgramsCard({imgSrc, title}) {
  return (
    <>
      <Col>
        <Image src={imgSrc}/>
        <p>{title}</p>
      </Col>
    </>
  );
}

export default ProgramsCard;
