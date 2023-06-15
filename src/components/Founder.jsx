/* eslint-disable no-unused-vars */
import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import FounderImage from "../assets/founder.jpg";
import { motion } from "framer-motion";

function Founder() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 2.5 }}
      >
        <Container fluid className="bg-body-secondary">
          <Container>
            <Row>
              <Col md={6}>
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 2.5 }}
                >
                  <Image
                    src={FounderImage}
                    alt="Founder of the Ministries"
                    fluid
                  />
                </motion.div>
              </Col>
              <Col className="align-self-center my-5" md={6}>
                <motion.div
                  initial={{ opacity: 0, x: "-10vw" }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{
                    type: "spring",
                    stiffness: 120,
                    duration: 2.5,
                    delay: 0.5,
                  }}
                >
                  <p className="text-uppercase display-5 fw-semibold">
                    Meet our founder
                  </p>
                  <p className="text-uppercase text-yellow fs-4 fw-semibold">
                    Queen Ceccy
                  </p>
                  <p style={{fontSize: "1.55ch"}}>
                    {`With a deep passion for spreading the message of faith, hope, and love, Queen Ceccy embarked on a mission to establish a dynamic ministry that would impact lives and transform communities. Guided by a strong spiritual calling and a heart for serving others, she has dedicated their life to nurturing spiritual growth, empowering individuals, and fostering a sense of unity within the congregation. Through inspirational teachings, compassionate leadership, and unwavering commitment, Queen Ceccy continues to inspire countless individuals to embrace their faith, discover their purpose, and experience the transformative power of God's love.`}
                  </p>
                </motion.div>
              </Col>
            </Row>
          </Container>
        </Container>
      </motion.div>
    </>
  );
}

export default Founder;
