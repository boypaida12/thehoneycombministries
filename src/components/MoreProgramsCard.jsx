/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import BenefitsCard from "./BenefitsCard";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function MoreProgramsCard({ imgSrc, title, benefitsData, id, handleLinkScroll }) {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 1.5, ease: "easeInOut" }}
      >
        <Card
          style={{ width: "19.5rem" }}
          className={`mx-auto overflow-hidden w-sc`}
        >
          <div className="programs-img-container">
            <Card.Img variant="top" src={imgSrc} />
          </div>
          <div className="mt-4">
            <div className="fw-bold text-center">{title}</div>
            <Card.Body>
              <Card.Text>
                {benefitsData.map((benefit, index) => (
                  <BenefitsCard key={index} benefit={benefit} />
                ))}
              </Card.Text>
            </Card.Body>
            <div
            >
              <Button
                className="text-decoration-underline rounded-pill fw-bold px-3 py-2 w-50 mb-2"
                style={{ color: "rgba(228, 141, 35, 0.9)" }}
                variant="contained"
                size="small"
                as={Link}
                to={`/learn-more/package-details/${id}`}
                onClick={handleLinkScroll}
              >
                Learn more
              </Button>
            </div>
          </div>
        </Card>
      </motion.div>
    </>
  );
}

export default MoreProgramsCard;
