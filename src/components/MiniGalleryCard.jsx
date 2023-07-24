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
        className="px-0 mx-auto gallery-image"
        style={{ height: "15rem" }}
      >
        <Image
          src={imgSrc}
          className="mini-gallery d-block w-100 h-100 object-fit-cover"
          fluid
        />
      </Col>
    </>
  );
}

export default MiniGalleryCard;
