/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { Card } from "react-bootstrap";
import ProgramsCard from "./ProgramsCard";
import BenefitsCard from "./BenefitsCard";
import { motion } from "framer-motion";

function MoreProgramsCard({
  imgSrc,
  title,
  bgBody,
  benefitI,
  benefitII,
  benefitIII,
  benefitIV,
  benefitV,
}) {
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
          <div className={`${bgBody}`}>
            <ProgramsCard imgSrc={imgSrc} title={title} />
          </div>
          <Card.Body>
            <Card.Text>
              <BenefitsCard benefitI={benefitI} />
              <BenefitsCard benefitII={benefitII} />
              <BenefitsCard benefitIII={benefitIII} />
              <BenefitsCard benefitIV={benefitIV} />
              <BenefitsCard benefitV={benefitV} />
            </Card.Text>
          </Card.Body>
        </Card>
      </motion.div>
    </>
  );
}

export default MoreProgramsCard;
