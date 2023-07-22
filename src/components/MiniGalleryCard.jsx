/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { Col, Image, Row } from "react-bootstrap";

function MiniGalleryCard({ imgSrc }) {
  return (
    <>
      <Col
        xs={8}
        md={3}
        className="px-0 object-fit-cover mx-auto gallery-image"
        style={{ height: "18rem" }}
      >
        <Image
          src={imgSrc}
          className="mini-gallery d-block w-100 h-100"
          fluid
        />
      </Col>
    </>
  );
}

export default MiniGalleryCard;
