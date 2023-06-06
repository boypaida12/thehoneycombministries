/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { Col, Image } from "react-bootstrap";

function ProgramsCard({ imgSrc, title, bgBody }) {
  return (
    <>
      <Col
        className={`${bgBody} text-center rounded mx-auto core-values d-flex flex-column justify-content-center align-items-center`}
        style={{ height: "14rem", width: "14rem" }}
        md={3}
      >
        <Image src={imgSrc} width={80} />
        <p>{title}</p>
      </Col>
    </>
  );
}

export default ProgramsCard;
