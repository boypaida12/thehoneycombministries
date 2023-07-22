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
import { motion } from "framer-motion";

function About() {
  return (
    <>
      <Container className="mt-5">
        <Row className="gap-5 gap-lg-3">
          <Col lg={6} className="core-value-col-width">
            <h1 className="text-md-start text-center fw-semibold display-4">
              Core Values
            </h1>
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5 }}
            >
              <Row className="row-gap-2">
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
            </motion.div>
          </Col>
          <Col lg={6} className="about-col-width" id="aboutMinistry">
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5 }}
              className="text-lg-end text-center"
            >
              <h2 className="text-uppercase display-6">About</h2>
              <h3 className="display-4 text-yellow fw-semibold">
                The Ministries
              </h3>
            </motion.div>
            <div
              className=" bg-body-tertiary d-flex align-items-center"
              style={{ minHeight: "30rem" }}
            >
              <Row className="px-1 mx-auto my-5">
                <MSVCard
                  imgSrc={MissionIcon}
                  title={"Our Mission"}
                  description={
                    "The core mandate of adherence to the Great Commission by igniting a passionate desire for ministry among Christian youth worldwide"
                  }
                />
                <MSVCard
                  imgSrc={VisionIcon}
                  title={"Our Vision"}
                  description={
                    "Mature believers at large towards the unity of faith and maturity to attain the full measure of the stature of Christ"
                  }
                />
                <MSVCard
                  imgSrc={SloganIcon}
                  title={"Our Slogan"}
                  description={
                    "Prioritising the Kingdom Mandate (Matthew 28:19-20)"
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
