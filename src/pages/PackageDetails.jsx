/* eslint-disable no-unused-vars */
import React from "react";
import { useParams } from "react-router-dom";
import benefits from "../components/benefits";
import Navigation from "../components/Navigation";
import Footer from "../components/footer/Footer";
import { Col, Container, Row } from "react-bootstrap";

function PackageDetails() {
  const { title } = useParams();
  const programType = benefits.find(
    (programType) => programType.title === title
  );

  if (!programType) {
    return <div>Program not found</div>;
  }

  return (
    <>
      <Navigation shadowLg={"shadow-lg"} bgBody={"bg-yellow"} />
      <Container className="my-5">
        <Row>
          <Col md={6} className="mt-4">
            <div className=" my-w">
              <h1 className="fw-semibold display-5">{programType.title}</h1>
              <p className="lh-lg" >{programType.description}</p>
            </div>
          </Col>
          <Col md={6} className="package-details-img-container">
            <img src={programType.imgSrc} alt="/" style={{objectFit: "cover", width: "100%", height: "100%", objectPosition: "top"}}/>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default PackageDetails;
