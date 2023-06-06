/* eslint-disable no-unused-vars */
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Godliness from "../assets/godliness.png";
import Integrity from "../assets/integrity.png";
import CoreValueCard from "./CoreValueCard";
import BrotherlyLove from "../assets/love.png";
import Loyalty from "../assets/loyalty.png";
import MSVCard from "./MSVCard";
import MissionIcon from "../assets/mission.png";
import VisionIcon from "../assets/vision.png";
import SloganIcon from "../assets/slogan.png";

function About() {
  return (
    <>
      <Container
        className="mt-2 mt-lg-0 d-flex align-items-end"
        style={{ height: "100vh" }}
      >
        <Row>
          <Col md={5}>
            <h1 className="text-md-start text-center fw-semibold display-4">
              Core Values
            </h1>
            <Row className=" gap-2">
              <CoreValueCard
                imgSrc={Godliness}
                altText={"Godliness-icon"}
                description={"Godliness"}
                bgBody={"bg-body-secondary"}
              />
              <CoreValueCard
                imgSrc={Integrity}
                altText={"Integrity-icon"}
                description={"Integrity"}
                bgBody={"bg-body-tertiary"}
              />
              <CoreValueCard
                imgSrc={BrotherlyLove}
                altText={"Brotherly-Love-icon"}
                description={"Brotherly Love"}
                bgBody={"bg-body-tertiary"}
              />
              <CoreValueCard
                imgSrc={Loyalty}
                altText={"Loyalty-icon"}
                description={"Discipline & Loyalty"}
                bgBody={"bg-body-secondary"}
              />
            </Row>
          </Col>
          <Col md={7}>
            <div className="text-lg-end">
              <h2 className="text-uppercase display-6">About</h2>
              <h3 className="display-4 text-yellow fw-semibold">
                The Ministries
              </h3>
            </div>
            <div
              className="bg-yellow d-flex align-items-center"
              style={{ height: "30rem" }}
            >
              <Row className="gap-2 px-1 mx-auto">
                <MSVCard
                  imgSrc={MissionIcon}
                  title={"Our Mission"}
                  description={
                    "The core mandate of adherence to the Great Commission by igniting a passionate desire for ministry among Christian youth worldwide"
                  }
                />
                <MSVCard
                  imgSrc={SloganIcon}
                  title={"Our Slogan"}
                  description={
                    "Prioritising the Kingdom Mandate (Matthew 28:19-20)"
                  }
                />
                <MSVCard
                  imgSrc={VisionIcon}
                  title={"Our Vision"}
                  description={
                    "Mature believers at large towards the unity of faith and maturity to attain the full measure of the stature of Christ"
                  }
                />
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default About;
