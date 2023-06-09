/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { Col, Image } from "react-bootstrap";

function CoreValueCard({ imgSrc, altText, description, bgBody, }) {
  return (
    <>
      <Col md={6}>
        <div
          className={`core-values ${bgBody} d-flex flex-column justify-content-center align-items-center rounded-4`}
          style={{ height: "13rem" }}
        >
          <Image src={imgSrc} width={60} alt={altText} />
          <p className="fw-semibold text-muted text-center">{description}</p>
        </div>
      </Col>
    </>
  );
}

export default CoreValueCard;
