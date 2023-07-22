/* eslint-disable no-unused-vars */
import { Button } from "@mui/material";
import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import MiniGallery_I from "../assets/miniGallery_I.jpg";
import MiniGallery_II from "../assets/miniGallery_II.jpg";
import MiniGallery_III from "../assets/miniGallery_III.jpg";
import MiniGallery_IV from "../assets/miniGallery_IV.jpg";
import MiniGalleryCard from "./MiniGalleryCard";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function MiniGallery() {
  const handleLinkScroll = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      <Container fluid>
        <Row>
          <Col
            style={{ height: "18rem" }}
            className="d-flex flex-column justify-content-center bg-body-tertiary text-center"
            md={4}
          >
            <motion.p initial={{opacity: 0, y: 25}} whileInView={{opacity: 1, y:0}} transition={{duration:1}} className="fs-5 fw-semibold text-dark w-75 mx-auto">
              We would Love to Listen to You and to Join Us
            </motion.p>
            <Button
              className="mx-md-auto text-decoration-none rounded-pill fw-bold px-3 py-2 text-white"
              style={{ backgroundColor: "rgba(228, 141, 35, 0.9)" }}
              size="small"
              as={Link}
              to="/contact"
              onClick={handleLinkScroll}
            >
              Fellowship with Us
            </Button>
          </Col>
          <Col>
            <Row>
              <MiniGalleryCard imgSrc={MiniGallery_I} />
              <MiniGalleryCard imgSrc={MiniGallery_II} />
              <MiniGalleryCard imgSrc={MiniGallery_III} />
              <MiniGalleryCard imgSrc={MiniGallery_IV} />
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default MiniGallery;
