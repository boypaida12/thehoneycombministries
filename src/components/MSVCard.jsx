/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { Col, Image } from "react-bootstrap";

function MSVCard({ title, description, imgSrc }) {
  return (
    <>
      <Col className="text-center mx-auto" md={4} style={{width: "16rem"}}>
        <Image src={imgSrc} width={50}/>
        <p className="text-muted fw-bold">{title}</p>
        <hr className="w-25 mx-auto text-yellow"/>
        <small>
            <p className="text-muted">{description}</p>
        </small>
      </Col>
    </>
  );
}

export default MSVCard;
